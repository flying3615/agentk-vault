---
aliases:
  - Standard ICT 策略
  - ICT
tags:
  - strategy
  - trend
  - ict
date: 2026-04-19
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
3. **订单流区域入场**
   - 寻找由位移产生的 ==FVG (Fair Value Gap)== 或 ==OB (Order Block)== 作为入场区。
   - 代码中通过 `rankStandardIctEntryFvgs` 对候选的 FVG 进行评级，选择最具支撑/阻力共振性的缺口。

## 过滤与拦截 (Filters & Blockers)

> [!warning] 防御机制
> 为了防止在震荡末期或趋势末期接盘，该策略引入了多重拦截器 (Blockers)。

- **EMA 方向过滤 (`StandardIctEmaDirectionFilter`)**：价格和 EMA 的相对位置必须验证趋势。如果价格偏离均线过远，可能触发超买/超卖，会被拒绝。
- **Keltner 极端拦截 (`shouldBlockStandardIctByKeltnerExtreme`)**：如果价格已经击穿 Keltner 通道的外沿，意味着动能已经极度释放，此时再顺势入场极容易遇到短期均值回归，因此将被拦截。
- **H4 Zone Block (`shouldBlockStandardIctByH4Zone`)**：防止在 H4 级别的强阻力/支撑区面前逆势开单。

## 出场逻辑 (Exit & Take Profit)

出场逻辑采用分批止盈的配置，重点参考风险/收益比 (RR, Risk-Reward) 和波动率。

> [!note] 动态目标位计算
> - **TP1 (Take Profit 1)**: 通常设置为 `Entry + Risk`，即 1:1 的盈亏比，到达后系统通常会将止损推至平保 (Break-even)。
> - **HTF 流动性目标 (`findNearestHtfLiquidityTarget`)**: 高级别流动性池（例如前一日高点、周线高点）常作为 TP2 或 TP3 的锚定点。

## 参考关联
- 相关源码目录: `src/modules/structure-detector/strategies/standard-ict.ts`
- 策略仲裁: 本策略与震荡策略由 [[策略路由]] 进行优先级仲裁。