---
aliases:
  - Analyzer Skills
  - AI分析器技能
  - Prompts
tags:
  - modules
  - ai
  - prompts
date: 2026-04-19
---

# AI 分析器核心技能 (Prompts & Skills)

> [!abstract] AI 技能定义
> 在 AgentK 中，所谓的 "Skills"（技能）主要体现在 `src/modules/analyzer/prompts/` 目录下。针对不同的交易阶段和情境，系统会动态组装特定的 Prompt（提示词模板）下发给后端的 LLM（DeepSeek / Qwen / Gemini 等），从而让 AI 扮演具有针对性技能的交易员角色。

系统根据当前的状态（`IDLE` / `PENDING` / `OPEN`）自动选择分析方法，并依靠一套严密的 Schema DSL 保证输出稳定。

## 核心分析技能列表

### 1. 寻机与观测 (Idle & Heartbeat)
当系统处于空仓 (`IDLE`) 时，AI 的主要技能是扫描市场并作出偏好判断。
- **Idle 技能 (`idle.ts`)**: 
  - **核心职责**：结合 `StructureDetector` 提取的市场代码级摘要与 K 线数据，决定是否入场、观望、或是进入狙击状态。
  - **特殊能力**：支持融合 Gemini/ZAI 传回的视觉叙事 (`geminiNarrative`) 进行双脑交叉验证。
- **Heartbeat 技能 (`heartbeat.ts`)**: 
  - **核心职责**：轻量级的市场更新，不附带繁重的图表解析，只请求 AI 给出高维的市场观察。节省 Token 消耗，适合常规轮询。

### 2. 狙击与入场确立 (Sniper & Displacement)
当系统锁定了特定的量化信号（如 FVG 区间或 MSS 结构破坏）后，进入高精度的二次确认技能。
- **Sniper 技能 (`sniper.ts`)**: 
  - **核心职责**：挂单或市价成交前的最后一道确认。接收来自 M5 级别的精确信号（如 `M5 Confirmation Signal: MSS bullish`），评估入场的盈亏比、结构突破真实性（MSS 反转还是 BOS 顺势）。
- **AI Displacement Entry (`ai-displacement-entry.ts`)**: 
  - **独立技能**：专精于 M15 级别出现极强动能（位移）后的自主判断入场。与 A 级 fallback 或普通 sniper 提示词分离，保持判断逻辑的纯粹性。

### 3. 持仓与风险管理 (Open Management)
当已经有仓位时，AI 的目标从“寻找机会”转变为“保护利润与防守”。
- **标准 Open 技能 (`open.ts`)**: 处理趋势跟踪单的持仓管理，决定是否移动止损或提前平仓。
- **Open Turtle Soup (`open-turtle-soup.ts`)**: 专为海龟汤定制。避免海龟汤仓位吃到趋势单的错误叙事（因震荡单需要尽快止盈，而趋势单可以多拿）。
- **Open Band Reversion (`open-band-reversion.ts`)**: 专为纯均值回归定制，明确向 AI 灌输锚定 Session VWAP 及 BB 中轨的止盈原则，绝不追击趋势。
- **A Grade Fallback (`a-grade-fallback.ts`)**: 当一个 A 级高质量信号被硬核风控规则拦截后，系统会唤醒这个技能进行二次“抢救”/优化分析，决定是否要放宽限制强行入场。

### 4. 视觉与反思技能 (Vision & Reversal)
- **Vision Narrative (`vision-narrative.ts`)**: 将 K 线图走势翻译为人类交易员能理解的“故事”叙事，这部分的输出会反哺给纯文本大模型（DeepSeek/Qwen）。
- **Vision Risk (`vision-risk.ts`)**: 入场前的视觉否决层。AI 可以仅凭截图否决一次量化层面看似合理的下单（防呆机制）。
- **Reversal Analysis (`reversal.ts`)**: 当原有的入场逻辑被击穿（如 FVG 被 M5 实体穿透），启动该技能判定这是否是一个“失效陷阱”，以供 [[自动反转机制]] 参考。

## DSL 与 Prompt 渲染机制

AgentK 的 Prompt 不再是一堆散乱的字符串拼接，而是使用了一套**声明式的 Prompt DSL** (`spec.ts` 与 `section-helpers.ts`)：

> [!important] 结构化与 JSON 约束
> 1. **`definePromptSpec`**: 注册技能的元数据、所需 Context（如 `m15DisplacementMagnitude`, `symbol`, `currentPrice`）和必须包含的文本区块 (Sections)。
> 2. **JSON Schema Registry (`schema-registry.ts`)**: 每一个技能（如 IDLE, SNIPER）都有一个严格对应的 JSON 响应格式定义。
> 3. **LLM 解析**: 通过下发指令开启 `response_format: json_object`（适用于 DeepSeek V3 或 Qwen3），系统强制 AI 按设定的 schema 输出（如明确输出 `decision: "WAIT" | "ENTER"`, `reasoning: string`），彻底消除了大语言模型胡言乱语导致的解析崩溃。

## 参考关联
- **AI 分析器主入口**: `src/modules/analyzer/index.ts`
- **客户端实现**: `src/modules/analyzer/text-clients/` (DeepSeek, Qwen), `src/modules/analyzer/vision-clients/` (Gemini, ZAI)
- 这些技能的执行顺序与时机，请参阅 [[核心交易工作流]]。