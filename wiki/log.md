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

## [2026-04-19] Expand | Agent CLI Skills Documentation
- 新增 `05-AgentSkills/核心辅助开发技能.md`，将 `.agents/skills` 目录下用于辅助开发的各类 Prompt/Skill（如 `brainstorming`, `test-driven-development`, `obsidian-markdown` 等）整理入库。
- 区分了 AgentK 代码本身的 AI Prompts 与开发者本地 AI 助手的行为规范 (Superpowers)。
- 更新了首页 `index.md` 索引。
- 在 Modules 目录下新增 `策略详解-StandardICT.md`。
- 在 Modules 目录下新增 `策略详解-TurtleSoup.md`。
- 在 Modules 目录下新增 `策略详解-SqueezeStraddle.md`。
- 在 Modules 目录下新增 `策略详解-BandReversion.md`，解释其双重身份。
- 更新了首页 `index.md` 中的链接索引。
