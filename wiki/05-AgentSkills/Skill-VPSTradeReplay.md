---
aliases:
  - VPS Trade Replay
  - 远程复盘工具
tags:
  - skills
  - debugging
  - vps
date: 2026-04-19
---

# VPS Trade Replay (VPS 实盘复盘工具)

> [!abstract] 核心能力
> **VPS Trade Replay** 是一套功能完备的实盘回溯工具包（存放在 `.agents/skills/vps-trade-replay`）。它通过 SSH 连接到运行 AgentK 的远程 VPS，直接对线上的 SQLite 数据库发起查询和捆绑（Bundle）下载，用于**深挖导致巨额亏损或 AI 误判的“黑天鹅”交易**。

## 场景与策略原则

此技能拥有极高的优先级：当你（或 AI）接手一个线上实盘亏损的 Bug 排查时，**绝对禁止直接分析本地陈旧的 `agentk.sqlite` 数据**。所有的调查起点必须是通过这套工具去查询 VPS 上实时的、带有 `traceId` 的决策日志。

### 第一个切入点
排查任何问题，推荐的第一条命令总是通过 `vps-trade-replay.sh around` 获取事发时间段的聚合上下文，或者通过 `vps-trade-replay.sh sql` 直接针对可疑交易执行 SQL 检索。

## 核心子命令集 (Subcommands)

所有功能都集成在一个统一的入口脚本中：
```bash
.agents/skills/vps-trade-replay/scripts/vps-trade-replay.sh <subcommand> [options]
```

### 1. 亏损榜单扫描 (`suspicious`)
快速定位系统中的毒瘤交易（按已实现净亏损排序）：
```bash
# 找出亏损最多的 20 笔交易
./vps-trade-replay.sh suspicious --top 20 --loss-threshold -1
```

### 2. 事故周边日志提取 (`around`)
基于 `traceId` 追踪机制，聚合事故发生前后的 `decisionLogs`、`aiLogs`、`tradeLogs` 和 `marketSnapshots`。这是最有效的快速分诊方法：
```bash
./vps-trade-replay.sh around --symbol ETH --ts 2026-02-13T08:46:42Z --window-minutes 120 --limit 200
```
> [!tip] Trace ID 的关键作用
> 系统通过 `traceId` (如 `tr_ETH_123`) 将 AI 视觉与文本 Prompt 的问答 (`aiLogs`) 和实际交易动作 (`tradeLogs`) 进行强关联。

### 3. 全量打包离线回放 (`replay`)
当你需要把案发现场的所有证据拉回本地用各种可视化工具二次回测时使用：
```bash
./vps-trade-replay.sh replay --symbol HYPE --ts 2026-02-13T05:28:13Z --window-minutes 240
```
该命令会将远程数据打包下载为 JSON 文件（包括 `decision_logs.json`, `ai_logs.json` 等）存入 `./tmp/replay/` 目录。

### 4. 纯净只读 SQL (`sql`)
用于灵活地针对 VPS 线上库执行排查。脚本仅允许执行安全的读取命令 (`SELECT/PRAGMA/WITH`)：
```bash
./vps-trade-replay.sh sql --query "SELECT id, provider, symbol, ts, payload FROM trade_logs WHERE UPPER(symbol)='ETH' ORDER BY ts DESC LIMIT 50"
```

## 参考与依赖
- 默认环境假定 SSH Alias 为 `myvps`，远程项目路径位于 `/root/agentK-docker/`。
- 这是排查实盘 AI 决策异常最重要的“手术刀”技能。