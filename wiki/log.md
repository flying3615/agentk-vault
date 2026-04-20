# Wiki Log

## [2026-04-19] Setup | Initialized AgentK Documentation Wiki
- Created directory structure based on AgentK codebase.
- Initialized `00-Overview/项目总览.md`, `01-Modules/README.md`, `02-LogicFlows/README.md`, `03-Concepts/README.md`, `04-Maintenance/README.md`.
- Linked Wiki to `raw/repomix-output.md`.

## [2026-04-19] Update | Expanded Documentation Details
- 丰富了 `00-Overview/项目总览.md`：基于 repomix 输出了更完整的模块架构 (Controller, Modules, State Store 等) 详情及依赖关系。
- 丰富了 `01-Modules/策略出入场条件.md`：拆解了 structure-detector 中的各大策略，包括 Turtle Soup, Squeeze Straddle, Standard ICT, 影子通道策略和各类增强器。
- 新增 `02-LogicFlows/核心交易工作流.md`：梳理出 5 大交易阶段（预检、结构检测、策略决策、信号AI评估、执行风控）。
- 新增 `03-Concepts/自动反转机制.md`：详细描述了 `auto-reversal-handler` 的工作流，冷却机制与 Sniper Mode。

## [2026-04-19] Cleanup | Removed Redundant Template Files
- 删除了 `01-Chapters`, `02-Themes`, `04-Quotes`, `05-Checks` 等空模板目录。
- 清理了 `01-Modules`, `02-LogicFlows`, `03-Concepts` 目录下初始化的脚手架 `README.md`，使文件组织完全符合 Obsidian 双链文档结构。

## [2026-04-19] Ingest | VWAP Strategy Knowledge
- 吸收了 `raw/VWAP Entry Strategies for Day Traders.md` 的内容。
- 在 `03-Concepts` 下新增 `VWAP交易原理与应用.md`，将外部交易常识与 AgentK 内部的 VWAP Bounce 和 Band Reversion 代码逻辑进行了映射结合。
- 吸收了 `raw/indicator/ADX Explained How to Measure and Trade Trend Strength.md` 的内容。
- 在 `03-Concepts` 下新增 `ADX趋势强度与应用.md`，解释了 Squeeze Straddle 中的 ADX 惩罚与甜点计分机制。
- 更新了 `wiki/index.md` 和各策略详解页面的交叉引用。

## [2026-04-19] Visual | Add Architecture Diagram
- 接入了使用大模型生成的 AgentK 业务流架构图 (`agentk-architecture.jpg`)。
- 在 `00-Overview/项目总览.md` 中补充了使用 Obsidian Mermaid 语法绘制的系统架构图，清晰展现了量化引擎、AI分析器、外部环境和存储层的数据流向。

## [2026-04-19] Expand | Prompts & AI Skills Documentation
- 重构了 `01-Modules/AI分析器技能(Prompts).md`。
- 详细描述了 AgentK 中的 Prompt DSL (Domain Specific Language) 机制，解释了如何通过 `spec.ts` 和 `schema-registry.ts` 将大语言模型 (DeepSeek/Qwen) 的输出强制收束为 JSON 对象。
- 按交易阶段分类列举了 `Idle`, `Sniper`, `Open`, `VisionRisk`, `AGradeFallback` 等数十种不同的 AI Prompt 技能模版。

## [2026-04-20] New | 新增策略路由模块专页

新增 `01-Modules/策略路由模块.md`，以模块实现视角（而非概念视角）完整描述策略路由决策链路：

- 完整 Mermaid 流程图：市场数据 → 路由决策层 → 策略 ID 选择层 → 策略执行层 → 仲裁层 → TradeSetup
- 四大子层详解：`route.ts`（9段路由 + 体制锁 + 优先信号）、`resolveStrategyIdsForRoute()`（路由→策略ID映射表）、`strategies/index.ts`（各 Handler 与 TurtleSoup 特殊预处理）、`arbiter.ts`（综合评分 + EXTREME_SWEEP 硬覆盖 + Risk Budget）
- 数据接口总览：`StrategyRouteContext`、`StrategyExecutionContext`、`ArbitrationResult` 结构摘要
- 模块间关系图（DataFetcher → 路由模块 → Controller → Analyzer → Executor）
- 更新 `index.md` 索引

## [2026-04-20] Sync | 策略详解全面对齐代码快照

基于 `raw/repomix-output.md` 对所有策略详解页面与 `route.ts` / `arbiter.ts` / `sfp-core.ts` / `first-impulse.ts` 进行深度对比，补全了大量代码层面已实现但文档缺失的机制：

- **`策略详解-StandardICT.md`**: 新增 VWAP 确认窗口机制、First Impulse Pullback 子模式（含 `hasExclusiveFirstImpulseFvg` 条件）、盘整回撤延续子模式、FVG 分层选择逻辑（H1 优先→M15 Fallback）、因果链评分 (`evaluateCausalChain`)、第三推耗尽抑制、策略配置档位（CALM/STABLE/BALANCED/VOLATILE）、TP 保护性摆动止损。
- **`策略详解-TurtleSoup.md`**: 新增运行模式（DEFAULT/HYBRID_SOFT）、优先信号快速通道（跳过 Band/VWAP 直入 SFP）、SFP 阶梯状态系统（SNIPER/PREWARN/DRIFT）、候选位质量评分、合成 H4 区间、扫后稳定检测、区间边界限制、第三推耗尽加分。
- **`策略详解-SqueezeStraddle.md`**: 补全综合评分系统（5 维度满分~100 分：Hurst 25 + 盘整置信度 25 + ATR 收缩 15 + 压缩指标 20 + 持续时长 15）、明确 M15 本地挤压盒基准原则、ADX 评分三档细节。
- **`策略路由.md`**: 完整记录 9 段分层决策逻辑（Section 1-9 及其条件/结果）、Regime 锁定精确时长（CONSOLIDATION 90m / HYBRID 45m）、Turtle 优先信号四种来源及触发机制、`resolveStrategyRoute` 统一入口说明。
- **`策略出入场条件.md`**: 新增 AI Displacement Only 策略行条目、补全 Arbiter 仲裁器章节（含 HYBRID 加成、EXTREME_SWEEP 强制覆盖、Risk Budget 惩罚机制）。

## [2026-04-19] Expand | Agent CLI Skills Documentation
- 新增 `05-AgentSkills/核心辅助开发技能.md`，将 `.agents/skills` 目录下用于辅助开发的各类 Prompt/Skill（如 `brainstorming`, `test-driven-development`, `obsidian-markdown` 等）整理入库。
- 新增项目级核心定制技能 `Skill-VPSTradeReplay.md` 和 `Skill-SegmentBacktestReplay.md`。
- 区分了 AgentK 代码本身的 AI Prompts 与开发者本地 AI 助手的行为规范 (Superpowers)。
- 更新了首页 `index.md` 索引。
- 在 Modules 目录下新增 `策略详解-StandardICT.md`。
- 在 Modules 目录下新增 `策略详解-TurtleSoup.md`。
- 在 Modules 目录下新增 `策略详解-SqueezeStraddle.md`。
- 在 Modules 目录下新增 `策略详解-BandReversion.md`，解释其双重身份。
- 更新了首页 `index.md` 中的链接索引。
