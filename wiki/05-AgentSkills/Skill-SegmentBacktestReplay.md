---
aliases:
  - Segment Backtest Replay
  - 回测片段重放
tags:
  - skills
  - backtest
  - qa
date: 2026-04-19
---

# Segment Backtest Replay (回测片段重放)

> [!abstract] 核心能力
> **Segment Backtest Replay** 是 AgentK 项目中定制的特有开发者 AI 技能（存储于 `.agents/skills/segment-backtest-replay`）。它被用来重放指定的历史时间窗口，以**验证最新的代码策略逻辑是否能在当时产生预期的入场信号**。

## 使用场景

当开发者（或 AI 助手）刚刚修改了量化检测逻辑（例如调整了 `Squeeze Straddle` 的 ADX 参数或 `Turtle Soup` 的弹跳阈值）后，为了证明修改未破坏现有的检测能力，或证明新逻辑能抓到之前漏掉的行情，必须调用此技能进行片段回放验证。

## 技能产出 (Outputs)

执行片段重放后，系统将自动生成：
- **JSON 报告**：包含所有探测到的入场点 (`entry`) 及其策略元数据（如得分、评级、盈亏比）。
- **HTML 报告**：用于在浏览器中快速可视化审核。
- **图像快照 (PNG)**：在 K 线图上自动标记出入场蜡烛（B/S 标记）以及 `Entry` / `StopLoss` / `TP1` 的水平线，以便直观检验盈亏比与支撑阻力的关系。

## 如何调用

通过在项目根目录运行附带的 Bash 脚本：

```bash
.agents/skills/segment-backtest-replay/scripts/run-segment-backtest.sh \
  --symbol ETH \
  --start 2026-02-25T00:00:00Z \
  --end 2026-02-25T12:00:00Z
```

### 可选配置与定制
- **图像生成**：默认开启图像快照（`--with-images`），可以通过 `--no-images` 关闭以提升回放速度。
- **K线周期预热 (`warmup-hours`)**：默认 336 小时（14天），确保均线等长周期指标在起步时已计算完毕。
- **最低柱数门槛**：可调整各时间周期 (M1/M5/H1/H4/D1) 触发信号所需的最小蜡烛数量。

## 核心机制

> [!warning] 仅验证信号生成
> 此回放引擎针对的是 **结构检测器层面的入场信号生成 (Detector-level entry generation)**，而非复现真实的交易所实盘搓合。

入场价的选择具有确定性优先级：
1. `algorithmicEntry.entryPrice`
2. `entryZone.midpoint`
3. `(entryZone.top + entryZone.bottom) / 2`

## 参考
- 相关代码目录：`src/runtime/node/segment-backtest-core.ts` 和 `segment-backtest.ts`
- 该技能关联了本地代码质量与验收测试，在重构量化模块时必须被执行。