---
aliases:
  - 海龟汤策略
  - Turtle Soup
tags:
  - strategy
  - reversion
  - turtle-soup
date: 2026-04-19
---

# Turtle Soup (海龟汤) 策略详解

> [!abstract] 策略编排器定位
> Turtle Soup 是 AgentK 中用于处理**震荡、均值回归及假突破**的主力策略族。
> 它并不是单一的判定逻辑，而是一个“策略编排器 (Orchestrator)”，按照设定的优先级依次调用三大子策略。

## 三大级联子策略

代码中，在 `src/modules/structure-detector/strategies/turtle-soup.ts` 内，按照如下优先级顺序执行探测：

### 1. Band Reversion (布林带边界回归)
> [!info] 触发条件
> 专门用于纯粹的区间震荡环境。
- **RangeMode 检测**: 首先需要 `range-mode.ts` 确认当前市场处于震荡期（特征：Bollinger Band 带宽收窄，H1 收盘价频繁穿越 Session VWAP，无近期扩张趋势）。
- **执行**: 当价格偏离 Session VWAP，且触及甚至刺穿 Keltner/Bollinger 带外沿时，如果在 M5 级别出现了反向的实体 K 线（动能转向确认），则触发入场。

### 2. VWAP Bounce (双 VWAP 弹跳)
> [!info] 触发条件
> 用于均值回归的中轴博弈。
- 探测价格在 Session VWAP 与 Weekly VWAP 之间的弹跳。
- **逻辑**: 如果上一根 M5 极值点触碰了 VWAP 区域，而当前的最新 K 线实体收盘强力反向越过了该 VWAP 中轴，形成实体确认，则判定为有效的弹跳信号。

### 3. SFP Pattern (假突破/流动性扫损)
> [!info] 触发条件
> SFP 即 Swing Failure Pattern，专抓诱多/诱空的“流动性扫损 (Liquidity Sweep)”。
这是海龟汤的核心精髓。依赖于 `sfp-core.ts` 及其相关检测器。
- **候选位采集 (`collectCandidateLevels`)**: 收集附近的关键流动性水平（前高、前低、区间极值）。
- **扫损进度 (`evaluateResweepProgress`)**: 观察价格是否刺穿了这些关键水平，但在收盘前被强力拉回，留下长长的影线（扫损完毕）。
- **M5 拒绝 (`evaluateM5Rejection`)**: 在刺穿关键位后，必须在小周期 (M5) 检测到强烈的反向拒绝结构，拒绝信号必须达到一定质量才能触发。

## 目标与止盈 (Take Profit Targets)

海龟汤系列因为操作在震荡区间或阻力支撑边界，它的盈亏比模型与趋势策略不同，更倾向于快速锁定利润。

> [!tip] 出场分布
> - **TP1 (第一目标)**: 通常快速锚定至 Session VWAP（均值线），或区间盘整的中轴 (`midpoint front-run`)。
> - **TP2/TP3**: 瞄准区间的对侧边界 (Opposite inner edge)，或者布林带的另一侧。配合 `computeRangeTakeProfitLevels` 动态生成。

## 参考关联
- 独立通道衍生版: 参见影子通道的 `band-reversion-only.ts`，去除了 SFP 逻辑专门做极端回测。
- 与其他策略路由: 请参考 [[策略路由]]。