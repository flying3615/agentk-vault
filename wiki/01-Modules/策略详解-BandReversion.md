---
aliases:
  - Band Reversion
  - 均值回归策略
  - 影子通道回归
tags:
  - strategy
  - reversion
  - shadow-lane
date: 2026-04-19
---

# Band Reversion (布林带均值回归) 详解

> [!abstract] 双重身份
> 在 AgentK 中，**Band Reversion (均值回归)** 是一个非常特殊的存在。它在代码库中拥有“双重身份”：
> 1. **作为子策略 (`band-reversion.ts`)**: 它是 [[策略详解-TurtleSoup|Turtle Soup (海龟汤)]] 编排器中的第一优先级子策略。
> 2. **作为独立策略 (`band-reversion-only.ts`)**: 它是一个完全独立的策略，专用于 **Shadow Lane (影子通道) 并行测试**，不依赖 ICT 结构，纯粹做布林带边界的均值回归。

本文档主要详解其**独立运行**时的严格条件与机制。

## 核心入场条件 (Entry Logic)

与顺势策略不同，独立的 Band Reversion 专门在“极其无聊的震荡市”中寻找确定性极高的反转点。其入场条件极其苛刻：

1. **RangeMode 激活 (震荡确认)**
   - 必须通过 `RangeMode` 检测。要求 Bollinger Band (布林带) 的带宽处于历史压缩区间（例如带宽压缩至 P60 以下）。
   - H1 级别的收盘价频繁穿越 Session VWAP，且没有近期的扩张蜡烛簇（排除趋势行情）。
2. **偏离度要求 (Deviation)**
   - H1 价格偏离 Session VWAP 的距离必须在 **0.4 ~ 3.0 ATR** 之间。关于偏离度原理请参考 [[VWAP交易原理与应用#极值偏离-vwap-deviations\|VWAP 极值偏离]]。偏离太小没有利润空间，偏离太大可能是趋势爆发。
3. **M5 转向确认 (Reversal Candle)**
   - 价格必须触碰或刺穿布林带的外沿（上轨/下轨）。
   - 在较小时间框架 (M5) 上，必须出现一个明确的反转实体 K 线，且其实体大小 $\ge$ **0.35 ATR**（这个阈值在独立版本中被调高，要求更严格的确认）。
4. **中轴拦截 (Midline Guard)**
   - 入场价不得越过区间中轴。做多时价格必须位于区间底部 $\le 45\%$ 的位置，做空时必须 $\ge 55\%$。

## 出场与止盈 (Take Profit Targets)

独立均值回归策略的出场逻辑非常保守，**严禁追击趋势延伸**。

> [!tip] 固定止盈分布
> - **TP1 (首要目标)**: 强制锚定为 **Session VWAP**。这是均值回归最核心的“均值”。
> - **TP2/TP3 (最终目标)**: 锚定为 **布林带中轨 (BB Midline)**。
> - 绝对不使用固定盈亏比去推测新高/新低，只要回归均值即刻获利了结。

## 为什么存在独立版本？

在量化交易中，将某些极端的均值回归剥离出来放入 **Shadow Lane**（在 `node/shadow-runtime.ts` 中运行）可以在不影响主实盘/主测试网账单的情况下，测试严苛条件下的高频胜率。它不依赖于任何 Order Block (OB) 或 Market Structure Shift (MSS) 这种基于订单流的主观判定。

## 参考
- 独立策略源码: `src/modules/structure-detector/strategies/band-reversion-only.ts`
- 子策略源码: `src/modules/structure-detector/strategies/turtle-soup/band-reversion.ts`