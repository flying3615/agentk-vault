---
aliases:
  - Standard ICT 策略
  - ICT
tags:
  - strategy
  - trend
  - ict
date: 2026-04-20
---

# Standard ICT 策略详解

> [!abstract] 策略核心定位
> Standard ICT 是 AgentK 的主力**顺势交易 (Trend Following)** 策略，它的核心理念来自于内圈交易员 (Inner Circle Trader) 的概念体系。它依赖明确的高时间框架 (HTF) 结构破坏和低时间框架 (LTF) 动能确认。

## 入场逻辑 (Entry Logic)

Standard ICT 的入场极度苛刻，需要多重时间框架的确认共振：

1. **结构破坏 (Market Structure Shift)**
   - 必须在较高时间框架（通常为 H1）检测到明确的 ==MSS== (Market Structure Shift) 或 ==BOS== (Break of Structure)。
2. **强劲动能 (Displacement)**
   - 在较小时间框架（如 M15）必须存在显著的位移 (Displacement)。通常要求位移蜡烛群的波动幅度大于设定阈值（例如 2.0 ATR），且包含有效的成交量强劲度确认。
3. **订单流区域入场 (FVG 分层选择)**
   - 寻找由位移产生的 ==FVG (Fair Value Gap)== 或 ==OB (Order Block)== 作为入场区。
   - FVG 来源有严格优先级：**H1 为主**，当 H1 缺口不可用时降级至 **M15 Fallback**（可通过 `allowM15Fallback` / `preferM15Fallback` 控制）。
   - 通过 `selectStandardIctEntryFvgs` 统一调度，内部分别调用 `rankStandardIctEntryFvgs`（H1 候选排序）和 `rankPostDisplacementEntryFvgs`（M15 位移后精排）。
   - `rankPostDisplacementEntryFvgs` 会统计各填充类型数量（`invalidFillCounts`）并记录 `acceptedTapCount`，只接受符合 `isValidEntryFVG` 条件的缺口。

### 因果链验证 (Causal Chain)

代码通过 `evaluateCausalChain` 对入场结构的时序完整性进行评分：

| 环节 | 要求 |
|------|------|
| Sweep → OB | 流动性扫损先于 OB 形成 |
| OB → MSS | OB 确认后才有结构破坏 |
| MSS → Displacement | 结构破坏先于位移 |
| Displacement → FVG | FVG 必须在位移之后产生 |

链条越完整，得分越高，完整链条会触发额外 `full chain bonus`。

## 特殊入场模式

### 1. First Impulse Pullback（首次冲量回撤）

> [!info] 触发场景
> 当价格刚完成结构破坏后**第一波冲量**，尚未形成充分盘整就开始回撤时启用。

- 检测入口：`isFirstImpulsePullbackEligible` / `shouldAllowFirstImpulsePullback`
- 要求：
  - Route 允许（特定 `StrategyRoute` 标志开启）
  - H1 和 M15 均有 `structureBreak` 记录
  - M15 Displacement 存在，且时间戳在结构破坏后的窗口内
  - H1 的 M15 FVG 中必须有**独占的首波缺口** (`hasExclusiveFirstImpulseFvg`)，即只有一个与方向一致的 FVG，尚未出现过填充
- 代码会创建一个"代理位移" (`createFirstImpulseProxyDisplacement`) 供后续 TP 计算使用

### 2. Consolidation Pullback Continuation（盘整后回撤延续）

- 检测入口：`shouldAllowConsolidationPullbackContinuation`
- 当价格已经完成结构破坏 + 盘整区间，系统允许在回撤至盘整边界时追单。
- 条件：Route 支持，盘整置信度满足，位移时间在有效窗口内。

### 3. VWAP 确认窗口 (VWAP Confirmation Window)

- `resolveStandardIctVwapConfirmationWindow` 根据位移幅度、趋势强度和盘整置信度，动态计算入场后等待 VWAP 确认的时间窗口长度。
- `resolveStandardIctVwapEntryPolicy` 根据 VWAP 已确认与否，返回当前是否允许入场的策略。

## 过滤与拦截 (Filters & Blockers)

> [!warning] 防御机制
> 为了防止在震荡末期或趋势末期接盘，该策略引入了多重拦截器 (Blockers)。

- **EMA 方向过滤 (`StandardIctEmaDirectionFilter`)**：价格和 EMA 的相对位置必须验证趋势。如果价格偏离均线过远，可能触发超买/超卖，会被拒绝。
- **Keltner 极端拦截 (`shouldBlockStandardIctByKeltnerExtreme`)**：如果价格已经击穿 Keltner 通道的外沿，意味着动能已经极度释放，此时再顺势入场极容易遇到短期均值回归，因此将被拦截。
- **H4 Zone Block (`shouldBlockStandardIctByH4Zone`)**：防止在 H4 级别高溢价区 (premium) 做多、低折扣区 (discount) 做空——即阻止在 H4 已经严重超买/超卖的区域继续顺势。
- **第三次推升耗尽 (`detectThirdPushExhaustion`)**：在 M15 或 H1 上检测到三推耗尽结构时，会抑制本次顺势入场信号得分。

## 策略配置档位 (Strategy Profile)

Standard ICT 接受一个 `StrategyProfile` 参数，有四档预设：

| 档位 | 适用市场 | 特点 |
|------|---------|------|
| `CALM` | 低波动率 | 严格阈值，减少噪音 |
| `STABLE` | 正常波动 | 默认平衡配置 |
| `BALANCED` | 中等偏高 | 稍放宽位移要求 |
| `VOLATILE` | 高波动率 | 最宽松阈值，追求捕捉大位移 |

Profile 控制 `minBodyAtr`（位移最小实体比）、`priorityThreshold`（动能优先阈值）、`minScore`（最低信号分）等核心参数。

## 出场逻辑 (Exit & Take Profit)

出场逻辑采用分批止盈的配置，重点参考风险/收益比 (RR, Risk-Reward) 和波动率。

> [!note] 动态目标位计算
> - **TP1 (Take Profit 1)**: 通常设置为 `Entry + Risk`，即 1:1 的盈亏比，到达后系统通常会将止损推至平保 (Break-even)。TP1 抢跑：代码在 swing 目标前留出一小段 ATR 缓冲，提高成交概率。
> - **HTF 流动性目标 (`findNearestHtfLiquidityTarget`)**: 高级别流动性池（例如前一日高点、周线高点）常作为 TP2 或 TP3 的锚定点。
> - **保护性摆动止损 (`findLatestProtectiveSwing`)**：根据入场方向，从最新的摆动点中寻找合适的止损锚，避免止损放置在无效位置。

## 参考关联
- 相关源码: `src/modules/structure-detector/strategies/standard-ict.ts`
- First Impulse 辅助模块: `src/modules/structure-detector/strategies/first-impulse.ts`
- 因果链模块: `src/modules/structure-detector/causal-chain.ts`
- 策略仲裁: 本策略与震荡策略由 [[策略路由]] 进行优先级仲裁。