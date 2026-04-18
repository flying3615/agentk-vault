---
aliases:
  - VWAP
  - Volume-Weighted Average Price
  - VWAP 策略
tags:
  - concepts
  - indicators
  - vwap
date: 2026-04-19
---

# VWAP 交易原理与应用

> [!abstract] VWAP 概念
> **VWAP (Volume-Weighted Average Price)**，即成交量加权平均价，是结合了价格与真实成交量的关键指标。它不仅能展示资产在日内的平均交易成本，还常被机构和算法交易者用来作为重要的支撑/阻力参考。

在 AgentK 的量化引擎中（如 [[策略详解-TurtleSoup\|Turtle Soup]] 中的 VWAP Bounce），VWAP 扮演着决定系统做多或做空偏好的核心角色。

## 基础应用场景

根据参考文档（LuxAlgo 日内交易策略），VWAP 具有三种最基础的用法：

1. **多头趋势识别 (Buy Above VWAP)**
   - 价格伴随强劲的 ==成交量 (Volume)== 突破并站上 VWAP，这被视为多头信号。此时 VWAP 转换为强力支撑线。
2. **空头趋势识别 (Sell Below VWAP)**
   - 价格跌破 VWAP 且有放量确认，视为空头信号，此时 VWAP 转换为动态阻力线。
3. **动态支撑/阻力 (Dynamic S/R)**
   - **趋势市 (Trending)**：在多头回调时，VWAP 通常提供入场弹跳（Bounce）的极佳点位；空头反抽同理。
   - **震荡市 (Sideways)**：价格会频繁上下穿透 VWAP，此时不宜利用 VWAP 追单，而应结合“偏离度 (Deviations)”进行均值回归。

## 高阶策略与组合 (Advanced Combinations)

在 AgentK 系统的设计中，纯粹依靠 VWAP 是不够的，通常会与其他技术指标配合形成共振：

| 指标组合 | 信号类型 | 应用逻辑 |
| :--- | :--- | :--- |
| **VWAP + RSI** | 动能确认 | 当价格运行于 VWAP 上方，但 RSI 出现超卖回调时，是一个绝佳的顺势买点。 |
| **VWAP + MACD** | 趋势共振 | 价格突破 VWAP 的同时伴随 MACD 零轴上方的金叉，形成强力入场信号。 |
| **VWAP + Volume** | 真实性确认 | 仅在异常高的大成交量支撑下，VWAP 的突破才具有高置信度。 |

### 极值偏离 (VWAP Deviations)

当价格远离 VWAP 到达一定阈值时，会产生强烈的超买/超卖均值回归倾向。
> [!tip] 经验偏离值
> - 大盘股/高市值资产：偏离 2% 左右。
> - 流动性极高的 Crypto/股票：偏离 1%~1.5% 左右。

在 AgentK 的 [[策略详解-BandReversion\|Band Reversion 策略]] 中，系统正是通过捕捉 H1 价格偏离 Session VWAP **0.4 ~ 3.0 ATR** 的区间，来进行反向狙击。

## AgentK 中的实际落地

AgentK 在实战中将 VWAP 深度融入了多个策略模块：

- [x] **VWAP Bounce 子策略**: 属于海龟汤编排器，通过监测 M5 的价格针刺 (Sweep) VWAP 后的实体反转，执行动态支撑/阻力位的弹跳交易。
- [x] **TP 锚定点**: 将 Session VWAP 作为均值回归的首要止盈目标 (`TP1`)。
- [x] **时间窗口**: 严格遵照高交易量时段（如开盘后/收盘前），此时 VWAP 的权重和有效性远高于平淡的午盘。

## 参考来源
- 原始资料: `raw/VWAP Entry Strategies for Day Traders.md` (LuxAlgo)
- 代码实现: `src/modules/structure-detector/strategies/turtle-soup/vwap-bounce.ts`