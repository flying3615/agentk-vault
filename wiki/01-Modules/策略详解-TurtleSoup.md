---
aliases:
  - 海龟汤策略
  - Turtle Soup
tags:
  - strategy
  - reversion
  - turtle-soup
date: 2026-04-20
---

# Turtle Soup (海龟汤) 策略详解

> [!abstract] 策略编排器定位
> Turtle Soup 是 AgentK 中用于处理**震荡、均值回归及假突破**的主力策略族。
> 它并不是单一的判定逻辑，而是一个”策略编排器 (Orchestrator)”，按照设定的优先级依次调用三大子策略。

## 运行模式 (Mode)

编排器支持两种工作模式：

| 模式 | 说明 |
|------|------|
| `DEFAULT` | 标准模式，完整执行三级 cascade 检测 |
| `HYBRID_SOFT` | 宽松模式，在 HYBRID 路由中降低部分阈值要求，允许更多候选信号通过 |

模式由路由系统传入，`HYBRID_SOFT` 通常在 Arbiter 判定为 HYBRID 路由且有 Turtle 优先信号时激活。

## 优先信号与快速通道

> [!important] H4 边界/极值扫损优先
> 当检测到以下信号时，编排器会**跳过 Band Reversion 和 VWAP Bounce**，直接进入 SFP 主链，避免小级别策略抢先入场造成噪音：
> - `forcePriority = true`（Arbiter 传入强制优先标志）
> - `prioritySource = 'H4_RANGE_EDGE'`（H4 区间边界回测）
> - `prioritySource = 'EXTREME_SWEEP'`（关键位极值扫损）
> - `prioritySource = 'TREND_EXHAUSTION'`（趋势耗尽）

SFP 在此模式下可通过 `preferH1Execution` / `preferSfpExecution` 调整执行偏好。

## 三大级联子策略

代码中，在 `src/modules/structure-detector/strategies/turtle-soup.ts` 内，按照如下优先级顺序执行探测：

### 1. Band Reversion (布林带边界回归)
> [!info] 触发条件
> 专门用于纯粹的区间震荡环境。需要 RangeMode `active` 或 `softActive`。
- **RangeMode 检测**: 首先需要 `range-mode.ts` 确认当前市场处于震荡期（特征：Bollinger Band 带宽收窄，H1 收盘价频繁穿越 Session VWAP，无近期扩张趋势）。
- **执行**: 当价格偏离 Session VWAP，且触及甚至刺穿 Keltner/Bollinger 带外沿时，如果在 M5 级别出现了反向的实体 K 线（动能转向确认），则触发入场。
- **独立版快捷键**: 若传入 `bandReversionOnly = true`，在 Band Reversion 触发后立即返回，跳过后续两个子策略。

### 2. VWAP Bounce (双 VWAP 弹跳)
> [!info] 触发条件
> 用于均值回归的中轴博弈。更多指标原理见 [[VWAP交易原理与应用]]。
- 探测价格在 Session VWAP 与 Weekly VWAP 之间的弹跳。
- **逻辑**: 如果上一根 M5 极值点触碰了 VWAP 区域，而当前的最新 K 线实体收盘强力反向越过了该 VWAP 中轴，形成实体确认，则判定为有效的弹跳信号。

### 3. SFP Pattern (假突破/流动性扫损)
> [!info] 触发条件
> SFP 即 Swing Failure Pattern，专抓诱多/诱空的”流动性扫损 (Liquidity Sweep)”。
这是海龟汤的核心精髓。依赖于 `sfp-core.ts` 及其相关检测器。

#### 候选位采集
- `collectCandidateLevels`: 收集关键流动性水平，来源包括前高/前低 (PDH/PDL)、Equal Highs/Lows、H4 Equal Highs/Lows。
- 如果 H4 区间数据不可用，系统会通过 `deriveSyntheticH4RangeLevels` 从 M15 盘整数据派生合成的 H4 区间高低点。
- `calculateLevelQuality`: 对每个候选水平评估质量分（考虑水平类型权重和新鲜度），排序后优先处理高质量水平。

#### 三阶段检测
1. **扫损进度 (`evaluateResweepProgress`)**: 观察价格是否刺穿了这些关键水平，但在收盘前被强力拉回，留下长长的影线（扫损完毕）。参数包括 `minExtensionAtr`（最小穿透深度）和 `lookbackBars`（回看 K 线数）。
2. **M5 拒绝 (`evaluateM5Rejection`)**: 在刺穿关键位后，必须在小周期 (M5) 或 H1 检测到强烈的反向拒绝结构。评估返回 `wickAtr`、`bodyAtr`、`followThroughAtr` 三项指标，均须达到 `TurtleSoupThresholds` 设定的门槛。
3. **扫后稳定 (`evaluatePostSweepStability`)**: 检查扫损后是否出现 K 线实体稳定（避免在假突破后价格立即再次跌破），防止”连续假突破”干扰。

#### 阶梯状态系统 (Ladder State)
SFP 用三段式阶梯评估当前入场距离是否合理：

| 状态 | 距离范围 | 奖惩 |
|------|---------|------|
| `SNIPER` | 极近，完美入场距离 | 额外加分 |
| `PREWARN` | 偏远但可接受 | 轻微减分 |
| `DRIFT` | 过远，通常拒绝 | 显著减分或直接拦截 |

在 `EXTREME_SWEEP` 优先模式下，即使 `DRIFT` 状态也可通过 `canRelaxDriftForPrioritySweep` 豁免（前提是存在回测恢复证据 `hasRecoveryEvidence`）。

#### 区间边界检测 (`evaluateRangeEdge`)
防止在震荡区间中轴附近入场（对均值回归无利润空间）。对各方向设有比例限制：
- 做多：入场价不能高于区间 `rangeEntryMaxBullishRatio`
- 做空：入场价不能低于区间 `rangeEntryMinBearishRatio`

#### 第三推耗尽加分
若上游检测到第三次推升耗尽 (`ThirdPushExhaustionResult`)，SFP 入场时会获得额外信号得分加成，提升信号等级。

## 目标与止盈 (Take Profit Targets)

海龟汤系列因为操作在震荡区间或阻力支撑边界，它的盈亏比模型与趋势策略不同，更倾向于快速锁定利润。

> [!tip] 出场分布
> - **TP1 (第一目标)**: 通常快速锚定至 Session VWAP（均值线），或区间盘整的中轴 (`midpoint front-run`)。
> - **TP2/TP3**: 瞄准区间的对侧边界 (Opposite inner edge)，或者布林带的另一侧。配合 `computeRangeTakeProfitLevels` 动态生成。

## 参考关联
- 主编排层: `src/modules/structure-detector/strategies/turtle-soup.ts`
- SFP 核心: `src/modules/structure-detector/strategies/turtle-soup/sfp-core.ts`
- 独立通道衍生版: 参见影子通道的 `band-reversion-only.ts`，去除了 SFP 逻辑专门做极端回测。
- 与其他策略路由: 请参考 [[策略路由]]。