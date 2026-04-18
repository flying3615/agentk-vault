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

## [2026-04-19] Expand | Strategy Detailed Pages
- 在 Modules 目录下新增 `策略详解-StandardICT.md`。
- 在 Modules 目录下新增 `策略详解-TurtleSoup.md`。
- 在 Modules 目录下新增 `策略详解-SqueezeStraddle.md`。
- 在 Modules 目录下新增 `策略详解-BandReversion.md`，解释其双重身份。
- 更新了首页 `index.md` 中的链接索引。
