---
aliases:
  - ADX
  - Average Directional Index
  - 平均趋向指数
tags:
  - concepts
  - indicators
  - adx
date: 2026-04-19
---

# ADX 趋势强度与应用

> [!abstract] ADX 概念
> **ADX (Average Directional Index)** 是一种用于衡量市场“趋势强度”的量化指标，取值范围在 0 到 100 之间。值得注意的是，它具有**非方向性 (Non-directional)**，即 ADX 的上升仅代表当前趋势（无论是暴涨还是暴跌）正在变强。

## 基础强度判定

根据经典的量化交易理论（Investopedia 等），ADX 被划分为几个关键区间：

| ADX 值 | 趋势状态 (Trend Strength) | 交易策略倾向 |
| :--- | :--- | :--- |
| **0 - 20** | 趋势缺席 / 弱趋势 | 市场处于盘整震荡期，适合使用均值回归策略。 |
| **20 - 25** | 趋势萌芽 | 可能是震荡末期或突破前夜。 |
| **25 - 50** | 强趋势 | 顺势交易（Trend Following）的最佳时期。 |
| **> 50** | 极强趋势 | 趋势极度狂热，需提防超买/超卖反转。 |

## 在 AgentK 中的实战落地

在 AgentK 的量化引擎中，ADX 被明确定义在 [[策略详解-SqueezeStraddle\|Squeeze Straddle 策略]] 中作为**极其关键的环境确认过滤指标**。

### Squeeze Straddle 中的 ADX 评分机制

在 `src/modules/structure-detector/strategies/squeeze-straddle.ts` 的实现中，AgentK 构建了一套针对 ADX 的动态评分系统：

- **惩罚高分 (High Penalty)**：
  如果市场正在发生 Squeeze（价格区间压缩），但 ADX 读数超过了 `highPenaltyThreshold`（比如 > 30），说明当前极有可能是在**强趋势途中的一个短暂旗形中继或假压缩**，在此刻进行突破双开的风险极高，因此系统会给予严重的分数惩罚 (`lowPenalty`)。
- **寻找甜点 (Sweet Spot)**：
  系统在配置中定义了 `sweetSpotMin` 和 `sweetSpotMax`。
  当 ADX 处于一个非常低（例如 10~20 之间）的“死寂期”时，这说明过去的趋势动能已经**彻底耗尽**，目前是一个纯粹的无序震荡。此时的压缩最容易引发真正的爆发行情，因此 AgentK 会给该信号附加奖励分 (`sweetSpotBonus`)。

### 动能衰竭警告 (Momentum Divergence)

除此之外，虽然价格在不断创出新高（或新低），如果此时 ADX 的峰值一波比一波低，这意味着动能正在产生**背离 (Divergence)**。
在 AgentK 的趋势追踪模块中，如果发现动能无法维系，通常会结合 [[策略路由]] 提前终止趋势状态的锁定，并触发减仓或严格追踪止损。

## 参考来源
- 外部理论: `raw/indicator/ADX Explained How to Measure and Trade Trend Strength.md`
- 代码实现: `squeeze-straddle.ts` 中的 `evaluateAdxScore` 方法