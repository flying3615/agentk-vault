---
aliases:
  - 压缩突破策略
  - Squeeze Straddle
tags:
  - strategy
  - breakout
  - squeeze
date: 2026-04-19
---

# Squeeze Straddle 策略详解

> [!abstract] 策略核心定位
> Squeeze Straddle 策略专注于捕捉市场经历剧烈**波动率收缩 (Volatility Squeeze / Coiling)** 之后即将爆发的区间突破。
> 该策略并非在突破发生后追单，而是通过量化指标探测到“弹簧被压紧”的状态，提前在区间的边缘部署挂单（或密切监视）。

## 核心入场条件 (Entry Conditions)

在 `src/modules/structure-detector/strategies/squeeze-straddle.ts` 中，检测逻辑极其依赖对当前盘整区域 (Consolidation) 的质量评估。

### 1. 区间基准：M15 本地挤压盒

> [!important] 关键设计细节
> 策略的 Straddle 挂单区间以**本地 M15 挤压盒 (`squeeze box`)** 为基准，而非更宽泛的 8h 盘整窗口。更宽的盘整数据仅作为背景信息参考，不扩展挂单区间。这避免了因时间窗口过大导致挂单离市价太远。

### 2. 综合评分系统 (Composite Score)

策略通过一个满分约 100 分的综合评分来量化挤压质量，各维度分配如下：

| 维度 | 最大分 | 计算方式 |
|------|--------|---------|
| **Hurst Coiling 强度** | 25 分 | `Hurst` 值越接近 0.50（完美随机游走），分越高；H=0.50 得满分，H=0.40/0.60 得 0 分 |
| **盘整置信度** | 25 分 | 按盘整置信度百分比线性映射 |
| **ATR 收缩比** | 15 分 | ATR 比值越低（收缩越深）分越高；ratio=0.80 时约 15 分，ratio=1.0 时 0 分 |
| **压缩指标** | 20 分 | `narrowRange` + `convergingPattern` 等布尔/度量组合得分 |
| **持续时长加成** | 15 分 | 盘整持续越久（弹簧压得越紧），期望突破幅度越大，给予加成 |

综合分越高，系统对突破方向的置信度越强，挂单参数也会相应调整。

### 3. 收敛与压缩判定
策略仅当同时满足多项压缩指标时才会激活：
- **窄幅区间 (`narrowRange`)**: 盘整区间的最高点与最低点之间的距离（通常以 ATR 百分比衡量）必须极窄，跌破设定的阈值。
- **收敛形态 (`convergingPattern`)**: 高点逐渐降低，低点逐渐抬高，形成典型的三角形或楔形收敛。
- **ATR 紧缩 (`atrContraction`)**: 历史波动率显著下降，表示市场处于方向选择的前夜。

### 4. 动能方向过滤 (ADX 校验)
> [!warning] 避免趋势中假挤压
> 如果 ADX (Average Directional Index) 分数极高，表明目前处于单边强势趋势中的暂停，此时使用震荡突破双向部署的风险极大。策略会验证 ADX 处于 `sweetSpot` (甜点区间)，确认当前是真正的无方向压缩。关于阈值原理参考 [[ADX趋势强度与应用]]。

ADX 评分调整有三档：
- `sweetSpot`（甜点区间）：`sweetSpotBonus` 加分
- `moderate`（中等区间）：`moderateBonus` 适度加分
- `low` / `high`（极低或极高）：分别有 `lowPenalty` / `highPenalty` 减分

### 5. Hurst 指数辅助
结合 `Hurst` 结果，系统能够评估当前资产是处于强均值回归状态还是具备趋势爆发的潜质，从而辅助调整突破方向的置信度。

## 目标与出场 (Take Profit Targets)

由于是突破策略，出场逻辑与 [[策略详解-TurtleSoup|Turtle Soup]] 的均值回归完全不同。

- **入场点配置**: 并不在现价入场，而是在测算出的盘整区上边界 (High) 加上一个缓冲区 (Buffer)，以及下边界 (Low) 减去缓冲区，作为双向挂单的触发带。
- **保护性机制**: 使用 `Range Protector` 防止区间宽度异常。
- **利润奔跑**: 突破后，止损通常放在盘整区的对侧或中轴。止盈点 (TP1/TP2/TP3) 会依据突破释放初期的强劲程度按比例外扩，以捕捉趋势初期的红利。

## 参考关联
- 量化核心目录: `src/modules/structure-detector/strategies/squeeze-straddle.ts`
- 策略如何被选择激活: 参考 [[策略路由]]。