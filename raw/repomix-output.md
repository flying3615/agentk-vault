This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.
The content has been processed where content has been compressed (code blocks are separated by ⋮---- delimiter).

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: **/*.ts
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Content has been compressed - code blocks are separated by ⋮---- delimiter
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
frontend/
  src/
    api/
      client.ts
    components/
      docs/
        index.ts
        types.ts
    pages/
      tradingWorkflowDocData.ts
      tradingWorkflowDocTargets.ts
      tradingWorkflowDocTypes.ts
  vite.config.ts
scripts/
  check-balance-raw.ts
  check-balance.ts
  check-data-depth.ts
  check-hyperliquid-meta.ts
  check-sdk-response.ts
  check-wallet.ts
  find-asset-110000.ts
  test-h4-structure.ts
  test-mainnet-order.ts
  test-qwen-api.ts
  verify-connection.ts
  verify-key-fix.ts
  verify-xyz-symbol.ts
src/
  config/
    config-manager.test.ts
    config-manager.ts
    stack-variant.ts
    strategy-profiles.ts
    strategy-types.ts
    symbol-settings.ts
  controller/
    ai-close-cooldown.test.ts
    ai-close-cooldown.ts
    anchor-entry-policy.test.ts
    anchor-entry-policy.ts
    auto-reversal-handler.ts
    auto-reversal-logic.test.ts
    auto-reversal-logic.ts
    breakout-context.test.ts
    breakout-context.ts
    btc-lead-eth-follow.test.ts
    btc-lead-eth-follow.ts
    chart-builder.ts
    emergency-close.test.ts
    emergency-close.ts
    emergency-state-reset.test.ts
    emergency-state-reset.ts
    eth-smt-reversal.test.ts
    eth-smt-reversal.ts
    fill-sync.test.ts
    fill-sync.ts
    high-alert-monitor.ts
    ict-filters.test.ts
    ict-filters.ts
    m15-reversal-close-guard.test.ts
    m15-reversal-close-guard.ts
    managed-ai-polling.test.ts
    managed-ai-polling.ts
    manual-intervention.test.ts
    manual-intervention.ts
    market-snapshot-recording.test.ts
    market-snapshot-recording.ts
    order-fill-watcher-client.ts
    pending-limit-handler.test.ts
    pending-limit-handler.ts
    range-time-stop.test.ts
    range-time-stop.ts
    scheduler-risk-caps.test.ts
    scheduler-runtime-helpers.test.ts
    scheduler-runtime-helpers.ts
    scheduler.ts
    setup-risk-policy.test.ts
    setup-risk-policy.ts
    sl-distance-reprice.test.ts
    sl-distance-reprice.ts
    sniper-entry-policy.test.ts
    sniper-entry-policy.ts
    sniper-mode.ts
    stack-variant-filters.test.ts
    stack-variant-filters.ts
    state-handlers.test.ts
    state-handlers.ts
    straddle-handler.test.ts
    straddle-handler.ts
    turtle-entry-policy.test.ts
    turtle-entry-policy.ts
    turtle-soup-instant-entry.test.ts
    turtle-soup-instant-entry.ts
    us-equity-force-close.test.ts
    us-equity-force-close.ts
    utils.test.ts
    utils.ts
  http/
    api.ts
    cloud-logger.ts
    env.ts
    trade-performance.test.ts
    trade-performance.ts
  modules/
    analyzer/
      prompts/
        a-grade-fallback.test.ts
        a-grade-fallback.ts
        ai-displacement-entry.test.ts
        ai-displacement-entry.ts
        heartbeat.ts
        idle.test.ts
        idle.ts
        index.ts
        instructions.test.ts
        instructions.ts
        misc-prompt-dsl.test.ts
        open-band-reversion.ts
        open-turtle-soup.ts
        open.test.ts
        open.ts
        pending.test.ts
        pending.ts
        renderer.test.ts
        renderer.ts
        reversal.ts
        schema-registry.ts
        section-helpers.test.ts
        section-helpers.ts
        sniper.test.ts
        sniper.ts
        spec.test.ts
        spec.ts
        text-decision.ts
        utils.ts
        vision-narrative.ts
        vision-risk.ts
      text-clients/
        deepseek-client.ts
        qwen-client.ts
        zai-client.test.ts
        zai-client.ts
      utils/
        key-candle-context.test.ts
        key-candle-context.ts
        turtle-soup.ts
      vision-clients/
        gemini-vision-client.ts
        zai-vision-client.ts
      index.ts
      trace-id.test.ts
    data-fetcher/
      canvas-chart.test.ts
      canvas-chart.ts
      hyperliquid-market.ts
      index.ts
      yahoo-finance.ts
    executor/
      close-price.test.ts
      close-price.ts
      index.ts
      router-executor.ts
      tiger-adapter.ts
      types.ts
    liquidation-monitor/
      index.ts
    order-processor/
      index.ts
      risk-manager.ts
    paper-trading/
      client.test.ts
      client.ts
      index.ts
      matching-engine.test.ts
      matching-engine.ts
      stats.ts
      types.ts
    position-manager/
      candle-utils.ts
      index.test.ts
      index.ts
      stop-computation.ts
      stop-recovery-guard.ts
    risk-manager/
      index.test.ts
      index.ts
    signal-evaluator/
      index.test.ts
      index.ts
    state-store/
      decision-log-store.ts
      index.test.ts
      index.ts
      market-snapshot-store.ts
      trade-log-store.ts
    structure-detector/
      strategies/
        enhancers/
          entry-distance.test.ts
          entry-distance.ts
          momentum-priority.test.ts
          momentum-priority.ts
          range-protector.test.ts
          range-protector.ts
          range-take-profit.test.ts
          range-take-profit.ts
          risk-metrics.test.ts
          risk-metrics.ts
          take-profit.test.ts
          take-profit.ts
        preflight/
          standard.test.ts
          standard.ts
        turtle-soup/
          band-reversion.test.ts
          band-reversion.ts
          range-mode.test.ts
          range-mode.ts
          sfp-core.test.ts
          sfp-core.ts
          vwap-bounce.test.ts
          vwap-bounce.ts
        utils/
          catalyst.test.ts
          catalyst.ts
          direction.test.ts
          direction.ts
        ai-displacement-only.ts
        arbiter-risk.ts
        arbiter.test.ts
        arbiter.ts
        band-reversion-only.test.ts
        band-reversion-only.ts
        first-impulse.ts
        index.test.ts
        index.ts
        pipeline.ts
        route.test.ts
        route.ts
        squeeze-straddle.test.ts
        squeeze-straddle.ts
        standard-ict.test.ts
        standard-ict.ts
        turtle-soup.test.ts
        turtle-soup.ts
      causal-chain.test.ts
      causal-chain.ts
      consolidation.test.ts
      consolidation.ts
      data-utils.test.ts
      data-utils.ts
      displacement.test.ts
      displacement.ts
      hurst.test.ts
      hurst.ts
      index.route-selection.test.ts
      index.ts
      liquidity.test.ts
      liquidity.ts
      market-context.ts
      market-structure.test.ts
      market-structure.ts
      reaction.test.ts
      reaction.ts
      signal-scorer.test.ts
      signal-scorer.ts
      summary-generator.test.ts
      summary-generator.ts
      swing-utils.test.ts
      swing-utils.ts
      third-push-exhaustion.test.ts
      third-push-exhaustion.ts
      trend.test.ts
      trend.ts
      types.ts
      vwap.test.ts
      vwap.ts
    volume-analysis/
      calculator.ts
      index.ts
      types.ts
  runtime/
    node/
      decision-log-store.ts
      experiment-log-stores.test.ts
      experiment-log-stores.ts
      lane-runner.test.ts
      lane-runner.ts
      lane-strategy.test.ts
      lane-strategy.ts
      local-cloud-logger.test.ts
      local-cloud-logger.ts
      local-trade-replay-query.test.ts
      market-snapshot-builder.test.ts
      market-snapshot-store.test.ts
      market-snapshot-store.ts
      segment-backtest-core.test.ts
      segment-backtest-core.ts
      segment-backtest.test.ts
      segment-backtest.ts
      server.ts
      shadow-runtime.test.ts
      shadow-runtime.ts
      sqlite-kv.ts
      sqlite.ts
      telegram-notifier.test.ts
      telegram-notifier.ts
      trade-log-store.ts
  services/
    liquidation-watcher.ts
    order-fill-watcher.test.ts
    order-fill-watcher.ts
  tests/
    analyze-snapshot.ts
    fetch-test-data.ts
    full-scan-algo.ts
    quality-gate-lib.test.ts
    run-algo-test.ts
  types/
    ai-response.ts
    index.ts
    market-data.ts
    runtime.ts
    trading-state.ts
  utils/
    cloud-logger-types.ts
    font-data.ts
    index.ts
    log-entry.ts
    logger.ts
    market-session.ts
    market-snapshot.ts
    retry.ts
    stop-loss-cooldown.ts
    stop-order-guard.test.ts
    stop-order-guard.ts
    symbol-extractor.test.ts
    symbol-extractor.ts
    take-profit-allocation.test.ts
    take-profit-allocation.ts
    take-profit-levels.test.ts
    take-profit-levels.ts
    time.ts
  favicon.ts
```

# Files

## File: frontend/src/components/docs/index.ts
```typescript
/**
 * 文档渲染模块 - 统一导出
 * 将所有拆分的文档渲染函数统一导出
 */
```

## File: frontend/src/components/docs/types.ts
```typescript
/**
 * 文档渲染模块 - 共享类型定义
 */
⋮----
export type BindSectionRef = (id: string) => (el: HTMLElement | null) => void;
⋮----
export interface ArticleRenderProps {
  articleId: string;
  bindSectionRef: BindSectionRef;
  onFlowNodeOpenDoc?: (nodeId: string) => void;
}
⋮----
export type ArticleRenderer = (
  articleId: string,
  bindSectionRef: BindSectionRef,
  onFlowNodeOpenDoc?: (nodeId: string) => void
) => React.ReactNode;
```

## File: frontend/src/pages/tradingWorkflowDocData.ts
```typescript
import type { Chapter, Article } from './tradingWorkflowDocTypes';
⋮----
// ─── 流程图入口 ──────────────────────────────────────────────────────────
⋮----
// ─── 系统概览 ────────────────────────────────────────────────────────────
⋮----
// ─── Phase ① 调度 & 状态机 ───────────────────────────────────────────────
⋮----
// ─── Phase ② 结构检测 ────────────────────────────────────────────────────
⋮----
// ─── Phase ③ 策略决策 ────────────────────────────────────────────────────
⋮----
// ─── Phase ④ 信号评估 ────────────────────────────────────────────────────
⋮----
// ─── AI 分析器 ───────────────────────────────────────────────────────────
⋮----
// ─── Phase ⑤ 执行 & 风控 ─────────────────────────────────────────────────
⋮----
// ─── 数据 & 存储 ─────────────────────────────────────────────────────────
⋮----
// ─── 监控 & 辅助 ──────────────────────────────────────────────────────────
⋮----
// ─── 模拟交易 ────────────────────────────────────────────────────────────
⋮----
// ==================== src/modules 模块占位文章 ====================
// analyzer 模块
⋮----
// data-fetcher 模块
⋮----
// executor 模块
⋮----
// structure-detector 模块
⋮----
// position-manager 模块
⋮----
// order-processor 模块
⋮----
// risk-manager 模块
⋮----
// state-store 模块
⋮----
// signal-evaluator 模块
⋮----
// liquidation-monitor 模块
⋮----
// paper-trading 模块
⋮----
// volume-analysis 模块
⋮----
export const getInitialArticleId = () =>
```

## File: frontend/src/pages/tradingWorkflowDocTargets.ts
```typescript
export type FlowDocTarget = {
  articleId: string;
  headingId?: string;
};
⋮----
// ── System Pipeline graph ──────────────────────────────────────────────────
⋮----
// Phase ① Pre-checks
⋮----
// Phase ② Structure detection
⋮----
// Phase ③ Strategy decision
⋮----
// Phase ④ Signal + AI
⋮----
// Phase ⑤ Execution
⋮----
// ── State Machine graph ────────────────────────────────────────────────────
```

## File: frontend/src/pages/tradingWorkflowDocTypes.ts
```typescript
export type Heading = {
  id: string;
  title: string;
};
⋮----
export type ArticleLink = {
  id: string;
  title: string;
  children?: ArticleLink[];
};
⋮----
export type Chapter = {
  id: string;
  title: string;
  articles: ArticleLink[];
};
⋮----
export type Article = {
  id: string;
  chapterId: string;
  title: string;
  summary: string;
  headings: Heading[];
};
```

## File: frontend/vite.config.ts
```typescript
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
```

## File: scripts/check-balance-raw.ts
```typescript
/**
 * 检查 API 原始返回数据
 */
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { privateKeyToAccount } from 'viem/accounts';
⋮----
// 加载 .dev.vars
⋮----
async function checkRawData(address: string, label: string, isTestnet: boolean)
⋮----
// 打印完整的 marginSummary
⋮----
// 打印 crossMarginSummary (如果存在)
⋮----
// 打印 crossMaintenanceMarginUsed (如果存在)
⋮----
// 检查 assetPositions
⋮----
async function main()
⋮----
// 从私钥获取主钱包地址
⋮----
// 检查主钱包
⋮----
// 检查子账户
```

## File: scripts/check-balance.ts
```typescript
/**
 * 简单的账户余额检查脚本
 * 直接调用 Hyperliquid API 检查主钱包和子账户余额
 */
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { privateKeyToAccount } from 'viem/accounts';
⋮----
// 加载 .dev.vars
⋮----
async function checkBalance(address: string, label: string, isTestnet: boolean)
⋮----
async function main()
⋮----
// 从私钥获取主钱包地址
⋮----
// 检查主钱包
⋮----
// 如果配置了子账户，也检查子账户
```

## File: scripts/check-data-depth.ts
```typescript
import { createDataFetcher } from '../src/modules/data-fetcher';
import { logger } from '../src/utils';
⋮----
async function main()
⋮----
const checkTimeframe = (name: string, candles: any[]) =>
```

## File: scripts/check-hyperliquid-meta.ts
```typescript
import { InfoClient, HttpTransport } from '@nktkas/hyperliquid';
⋮----
async function main()
⋮----
// Scan ALL tokens
⋮----
// Scan Universe for 'A' field match
```

## File: scripts/check-sdk-response.ts
```typescript
/**
 * 使用 SDK 检查返回结构
 */
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { InfoClient, HttpTransport } from '@nktkas/hyperliquid';
⋮----
// 加载 .dev.vars
⋮----
async function main()
⋮----
// 使用 SDK
⋮----
// 检查直接访问
⋮----
// 模拟代码逻辑
```

## File: scripts/check-wallet.ts
```typescript
import { privateKeyToAccount } from 'viem/accounts';
import fs from 'fs';
import path from 'path';
⋮----
// Load .dev.vars using process.cwd()
⋮----
// Inspect the raw key
⋮----
// Clean the key
```

## File: scripts/find-asset-110000.ts
```typescript
import { InfoClient, HttpTransport } from '@nktkas/hyperliquid';
⋮----
async function main()
⋮----
// Log the first few to see the pattern
⋮----
// Look for anything related to X, Y, Z, or 100
⋮----
// Check if 110000 is a Token Index (not Universe Index)
⋮----
// Maybe it's a testnet thing? Check testnet too
```

## File: scripts/test-h4-structure.ts
```typescript
import { createDataFetcher } from '../src/modules/data-fetcher';
import { createStructureDetector } from '../src/modules/structure-detector';
import { logger } from '../src/utils';
⋮----
async function main()
⋮----
// 1. Fetch Data
⋮----
// Expect ~540 candles for 90 days (6 candles per day)
⋮----
// 2. Analyze Structure
⋮----
// 3. Print Results
```

## File: scripts/test-mainnet-order.ts
```typescript
/**
 * 主网下单测试脚本 (安全版)
 * 下一个不会成交的限价单，然后自动取消
 */
import { createHyperliquidClient } from '../src/modules/executor/index';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
⋮----
// 加载 .dev.vars (本地开发配置)
⋮----
async function main()
⋮----
// 1. 检查账户
⋮----
// 2. 获取 BTC 价格
⋮----
// 3. 下一个远低于市价的限价单 (50% 市价，永远不会成交)
⋮----
// 确保订单价值 >= $11 (基于 safePrice 计算)
const size = Number((12 / safePrice).toFixed(5)); // ~$12 价值
⋮----
// 4. 等待并验证
⋮----
// 5. 取消订单
```

## File: scripts/test-qwen-api.ts
```typescript
/**
 * Qwen API 测试脚本
 * 用法: npx ts-node scripts/test-qwen-api.ts
 */
⋮----
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
⋮----
// 尝试加载 .env
⋮----
// 优先检查 .dev.vars (Cloudflare Workers 本地开发文件)
⋮----
// 简单的手动解析，处理可能的引号
⋮----
// 去除可能的前后空格
⋮----
// 去除引号
⋮----
async function testQwenAPI()
⋮----
break; // 只要有一个成功就退出
```

## File: scripts/verify-connection.ts
```typescript
import { createHyperliquidClient } from '../src/index';
import dotenv from 'dotenv';
import path from 'path';
⋮----
// Load .dev.vars if present (for local dev)
import fs from 'fs';
⋮----
async function main()
⋮----
// 1. Check Account
⋮----
// 2. Check Positions
⋮----
// 3. Check Open Orders
⋮----
const openOrders = await client.getOpenOrders(); // Now available in client
```

## File: scripts/verify-key-fix.ts
```typescript
import { createHyperliquidClient } from '../src/modules/executor';
import { logger } from '../src/utils';
⋮----
// Mocks logger to see output
⋮----
async function runTest()
```

## File: scripts/verify-xyz-symbol.ts
```typescript
import { createHyperliquidMarketClient } from '../src/modules/data-fetcher/hyperliquid-market';
import { logger } from '../src/utils/logger';
⋮----
async function main()
```

## File: src/config/stack-variant.ts
```typescript
import type { StrategyType } from '../modules/structure-detector/types.js';
⋮----
export interface StandardIctEmaDirectionFilterConfig {
    enabled: boolean;
    fastPeriod: number;
    slowPeriod: number;
    minSeparationPercent: number;
}
⋮----
export interface StackVariantConfig {
    standardIctEmaDirectionFilter?: StandardIctEmaDirectionFilterConfig;
    /**
     * 策略覆盖：只允许该策略的 setup 通过，其他策略 setup 一律清除。
     * 例如 BAND_REV stack 设置 strategyOverride: 'BAND_REVERSION'。
     */
    strategyOverride?: StrategyType;
}
⋮----
/**
     * 策略覆盖：只允许该策略的 setup 通过，其他策略 setup 一律清除。
     * 例如 BAND_REV stack 设置 strategyOverride: 'BAND_REVERSION'。
     */
```

## File: src/config/strategy-profiles.ts
```typescript
import type { ProfileOptions, StrategyProfile, StrategyProfileId } from './strategy-types.js';
import { getDefaultConfigManager } from './config-manager.js';
⋮----
export function getDefaultStrategyProfile(): StrategyProfile
⋮----
export function getProfileForSymbol(symbol: string, options?: ProfileOptions): StrategyProfile
```

## File: src/config/strategy-types.ts
```typescript
export type StrategyProfileId = 'CALM' | 'STABLE' | 'BALANCED' | 'VOLATILE';
⋮----
export interface StrategyProfile {
    id: StrategyProfileId;
    displacement: {
        minBodyAtr: number;
        fallbackAtr: number;
        strongThreshold: number;
    };
    momentum: {
        priorityThreshold: number;
    };
    filters: {
        bosFvgSensitivity: number;
        minScore: number;
    };
    riskControls: {
        maxDrawdownHold: number; // multiplier applied to entry tolerance before canceling FVG plays
        maxStopLossDistancePercent: number; // max SL distance as % of entry price
        minRiskUsd: number; // minimum dollar risk per trade
    };
}
⋮----
maxDrawdownHold: number; // multiplier applied to entry tolerance before canceling FVG plays
maxStopLossDistancePercent: number; // max SL distance as % of entry price
minRiskUsd: number; // minimum dollar risk per trade
⋮----
export interface ProfileOptions {
    volatilityRatio?: number; // ATR / price threshold (e.g. 0.01 = 1%)
}
⋮----
volatilityRatio?: number; // ATR / price threshold (e.g. 0.01 = 1%)
```

## File: src/config/symbol-settings.ts
```typescript
import { getDefaultConfigManager } from './config-manager.js';
⋮----
export function getLiquidationThresholds(symbol: string)
⋮----
export function getNarrowRangeThreshold(symbol: string): number
⋮----
export function getOkxLiquidationMultiplier(symbol: string): number
⋮----
export function getOkxLiquidationSymbols(): string[]
⋮----
export function getYahooFinanceSymbols(): string[]
⋮----
export function getYahooFinanceCryptoSymbols(): string[]
⋮----
export function getSymbolStrategyProfileId(symbol: string)
⋮----
export function getSymbolRiskOverrides(symbol: string)
⋮----
export function getMarketSessionConfig(symbol: string)
⋮----
export function getSymbolExecutionProvider(symbol: string)
```

## File: src/controller/ai-close-cooldown.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import {
    deriveAIEarlyExitCooldown,
    getAiEarlyExitCooldownMs,
} from './ai-close-cooldown.js';
```

## File: src/controller/ai-close-cooldown.ts
```typescript
import type { TakeProfitLevel } from '../types/index.js';
import { getDefaultConfigManager } from '../config/config-manager.js';
⋮----
export function getAiEarlyExitCooldownMs(): number
⋮----
export interface AIEarlyExitCooldown {
    direction: 'LONG' | 'SHORT';
    time: number;
    price: number;
    expiresAt: number;
}
⋮----
export function deriveAIEarlyExitCooldown(params: {
    direction: 'LONG' | 'SHORT';
    exitTime: number;
    exitPrice: number;
    tpLevels?: TakeProfitLevel[];
}): AIEarlyExitCooldown | undefined
```

## File: src/controller/auto-reversal-handler.ts
```typescript
import type { StructureAnalysis } from '../modules/structure-detector/index.js';
import { createStructureDetector, isValidEntryFVG } from '../modules/structure-detector/index.js';
import { getDefaultConfigManager } from '../config/config-manager.js';
import type { DataFetcher } from '../modules/data-fetcher/index.js';
import type { StateStore } from '../modules/state-store/index.js';
import type { SniperModeHandler } from './sniper-mode.js';
import { logger } from '../utils/index.js';
import { buildStructureInfo } from './utils.js';
import {
    buildReversalContext,
    evaluateCooldownGuard,
    resolveDisplacementParams,
    evaluateTrendResumptionEligibility,
} from './auto-reversal-logic.js';
import type { ReversalRejectionType } from './auto-reversal-logic.js';
⋮----
type Direction = 'LONG' | 'SHORT';
type ReversalSource = 'STOP_LOSS' | 'AI_CLOSE';
type StructureDetector = ReturnType<typeof createStructureDetector>;
type EnterSniperWaitFn = SniperModeHandler['enterSniperWait'];
⋮----
interface AutoReversalHandlerDeps {
    stateStore: StateStore;
    dataFetcher: DataFetcher;
    structureDetector: StructureDetector;
    enterSniperWait: EnterSniperWaitFn;
    postStopLossSignalCooldownMs: number;
}
⋮----
interface ReversalRejectionDetails {
    rejectionType: ReversalRejectionType;
    source: ReversalSource;
    relaxedMode?: boolean;
    expectedDirection?: 'bullish' | 'bearish';
    actualDirection?: string;
    magnitude?: number;
    threshold?: number;
    cooldownMinutes?: number;
    reverseDirection?: Direction;
    volumeValid?: boolean;
    rVol?: number;
    fvgCount?: number;
    obCount?: number;
}
⋮----
export class AutoReversalHandler
⋮----
constructor(private deps: AutoReversalHandlerDeps)
⋮----
async handleStopLossReversal(
        symbol: string,
        stoppedDirection: Direction,
        exitPrice: number,
): Promise<void>
⋮----
async handleAICloseReversal(
        symbol: string,
        closedDirection: Direction,
        exitPrice: number,
        aiCloseReason: string,
        reversalSignal: boolean,
): Promise<void>
⋮----
private async handleAutoReversal(input: {
        symbol: string;
        exitedDirection: Direction;
        exitPrice: number;
        source: ReversalSource;
        aiCloseReason?: string;
        reversalSignal?: boolean;
}): Promise<void>
⋮----
// AI_CLOSE without reversal signal → attempt same-direction trend resumption
⋮----
// ── Cooldown guard ──────────────────────────────────────────────────
⋮----
// ── Market data + structure analysis ───────────────────────────────
⋮----
// ── Entry zone guard ───────────────────────────────────────────────
⋮----
// ── Displacement resolution (relaxed — bypasses magnitude gate) ────
⋮----
// ── Enter SNIPER mode ──────────────────────────────────────────────
⋮----
private async tryTrendResumptionAfterAIClose(input: {
        symbol: string;
        exitedDirection: Direction;
        exitPrice: number;
        source: ReversalSource;
        aiCloseReason?: string;
        reversalSignal?: boolean;
}): Promise<boolean>
⋮----
// Pre-filter entry zones (passed as counts to the pure eligibility function)
⋮----
// ── Eligibility checks (pure) ──────────────────────────────────────
⋮----
// ── Resolve displacement for resumption entry ──────────────────────
⋮----
private async logAutoReversalRejected(input: {
        symbol: string;
        sourceTag: string;
        exitedDirection: Direction;
        reverseDirection: Direction;
        exitPrice: number;
        exitVerb: '平仓' | '止损';
        reason: string;
        aiCloseReason?: string;
        marketPrice?: number;
        analysis?: StructureAnalysis;
        rejectionDetails?: ReversalRejectionDetails;
}): Promise<void>
```

## File: src/controller/auto-reversal-logic.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import {
    buildReversalContext,
    evaluateCooldownGuard,
    resolveDisplacementParams,
    evaluateTrendResumptionEligibility,
} from './auto-reversal-logic.js';
import type { Direction, ReversalSource, LastStopLossRecord } from './auto-reversal-logic.js';
⋮----
// ── buildReversalContext ───────────────────────────────────────────────────────
⋮----
// ── evaluateCooldownGuard ─────────────────────────────────────────────────────
⋮----
function makeLastSL(minutesAgo: number, direction: Direction = 'LONG'): LastStopLossRecord
⋮----
lastStopLoss: makeLastSL(10, 'LONG'), // 10 min ago, cooldown = 30 min
⋮----
// 20 minutes remaining ≈ 1200 seconds
⋮----
// Same scenario as above but AI_CLOSE → global cooldown should not apply
⋮----
reverseDirection: 'SHORT', // different from lastStopLoss direction → no direction block
⋮----
// Trying to go SHORT again, but last SL was also SHORT, 10 min ago
⋮----
expect(result.remainingSeconds).toBeUndefined(); // only set for global block
⋮----
lastStopLoss: makeLastSL(60, 'SHORT'), // 60 min ago, cooldown = 30 min
⋮----
// global cooldown = 0 → no block from check 1
// direction differs → no block from check 2
⋮----
// lastStopLoss.direction = 'LONG', reverseDirection = 'LONG' → same → blocked
⋮----
// ── resolveDisplacementParams ─────────────────────────────────────────────────
⋮----
expect(result.direction).toBe('bearish'); // falls back to expectedDispDirection
⋮----
// currentPrice=96, exitPrice=100, atr=2 → delta=4/2=2.0 ≥ 0.8
⋮----
// Wrong direction but finite startPrice/endPrice → reused as fallback
⋮----
// ── evaluateTrendResumptionEligibility ────────────────────────────────────────
⋮----
function makeAnalysis(opts: {
        bias?: string;
        biasStrength?: string;
        h1Break?: string;
        m15Break?: string;
})
⋮----
analysis: makeAnalysis({}), // no trendContext
```

## File: src/controller/auto-reversal-logic.ts
```typescript
/**
 * auto-reversal-logic.ts
 *
 * Pure, side-effect-free evaluation functions used by AutoReversalHandler.
 * Extracted to improve testability and reduce class size.
 */
import { shouldApplyPostStopLossCooldown } from '../utils/stop-loss-cooldown.js';
⋮----
// ── Types ──────────────────────────────────────────────────────────────────────
⋮----
export type Direction = 'LONG' | 'SHORT';
export type ReversalSource = 'STOP_LOSS' | 'AI_CLOSE';
⋮----
export type ReversalRejectionType =
    | 'reversalSignalMissing'
    | 'cooldown'
    | 'displacementMissing'
    | 'directionMismatch'
    | 'displacementTooSmall'
    | 'volumeInvalid'
    | 'noEntryZone'
    | 'trendNotAligned'
    | 'counterStructure';
⋮----
// ── buildReversalContext ───────────────────────────────────────────────────────
⋮----
export interface ReversalContext {
    reverseDirection: Direction;
    expectedDispDirection: 'bullish' | 'bearish';
    sourceTag: string;
    exitVerb: '平仓' | '止损';
}
⋮----
/**
 * Derives the reversal context labels from the position that was just exited.
 * Pure: no I/O, no side effects.
 */
export function buildReversalContext(
    exitedDirection: Direction,
    source: ReversalSource,
): ReversalContext
⋮----
// ── evaluateCooldownGuard ─────────────────────────────────────────────────────
⋮----
export interface LastStopLossRecord {
    direction: Direction;
    time: number;
    price?: number;
    pnl?: number;
}
⋮----
export interface CooldownGuardParams {
    source: ReversalSource;
    lastStopLoss: LastStopLossRecord | undefined;
    now: number;
    reverseDirection: Direction;
    /** Global cooldown applied after any stop-loss hit (STOP_LOSS source only). */
    postStopLossGlobalCooldownMs: number;
    /** Per-direction cooldown: blocks re-entry in same direction as last stop. */
    reversalCooldownMs: number;
}
⋮----
/** Global cooldown applied after any stop-loss hit (STOP_LOSS source only). */
⋮----
/** Per-direction cooldown: blocks re-entry in same direction as last stop. */
⋮----
export interface CooldownCheckResult {
    blocked: boolean;
    rejectionType?: 'cooldown';
    /** Remaining global cooldown in seconds (set for post-SL global block). */
    remainingSeconds?: number;
    cooldownMinutes?: number;
}
⋮----
/** Remaining global cooldown in seconds (set for post-SL global block). */
⋮----
/**
 * Checks two cooldown conditions in order:
 *  1. Post-stop-loss global cooldown (STOP_LOSS source only)
 *  2. Same-direction reversal cooldown (any source)
 *
 * Pure: no I/O, no side effects.
 */
export function evaluateCooldownGuard(params: CooldownGuardParams): CooldownCheckResult
⋮----
// Check 1: Post stop-loss global cooldown (applies only to STOP_LOSS source)
⋮----
// Check 2: Same-direction reversal cooldown (any source)
⋮----
// ── resolveDisplacementParams ─────────────────────────────────────────────────
⋮----
interface DisplacementLike {
    detected: boolean;
    direction: string;
    magnitude: number;
    startPrice: number;
    endPrice: number;
}
⋮----
export interface DisplacementParams {
    direction: 'bullish' | 'bearish';
    magnitude: number;
    startPrice: number;
    endPrice: number;
    /** Set when the detected displacement was absent or in the wrong direction. */
    bypassReason: string | undefined;
    rejectionType: ReversalRejectionType | undefined;
}
⋮----
/** Set when the detected displacement was absent or in the wrong direction. */
⋮----
export interface ResolveDisplacementInput {
    displacement: DisplacementLike | undefined;
    expectedDispDirection: 'bullish' | 'bearish';
    exitPrice: number;
    currentPrice: number;
    atr: number;
}
⋮----
/**
 * Resolves the displacement parameters to use for the sniper entry.
 *
 * - If a valid displacement in the expected direction exists → use its values directly.
 * - Otherwise → fall back to the expected direction + best available magnitude estimate,
 *   and set `bypassReason` to document why the gate was bypassed.
 *
 * Pure: no I/O, no side effects.
 */
export function resolveDisplacementParams(input: ResolveDisplacementInput): DisplacementParams
⋮----
// Validate displacement direction
⋮----
// If displacement is valid, use it directly
⋮----
// Relaxed fallback: best available magnitude estimate + expected direction
⋮----
// Use displacement's magnitude/prices if finite, otherwise fall back to price-delta
⋮----
// ── evaluateTrendResumptionEligibility ────────────────────────────────────────
⋮----
/** Minimal structural shape needed for trend resumption eligibility check. */
export interface ResumptionAnalysisShape {
    trendContext?: {
        bias: string;
        biasStrength: string;
    };
    h1Structure: {
        structureBreak?: { direction: string };
    };
    m15Structure: {
        structureBreak?: { direction: string };
    };
}
⋮----
export interface ResumptionEligibilityParams {
    analysis: ResumptionAnalysisShape;
    expectedDispDirection: 'bullish' | 'bearish';
    oppositeDispDirection: 'bullish' | 'bearish';
    /** Count of valid same-direction FVGs (pre-filtered by caller). */
    validFvgCount: number;
    /** Count of same-direction order blocks (pre-filtered by caller). */
    obCount: number;
}
⋮----
/** Count of valid same-direction FVGs (pre-filtered by caller). */
⋮----
/** Count of same-direction order blocks (pre-filtered by caller). */
⋮----
export interface ResumptionEligibility {
    trendAligned: boolean;
    counterStructure: boolean;
    hasEntryZones: boolean;
    trendBias: string | undefined;
    trendStrength: string | undefined;
    h1BreakDirection: string | undefined;
    m15BreakDirection: string | undefined;
}
⋮----
/**
 * Determines whether conditions are met for a same-direction trend resumption
 * after an AI-triggered close.
 *
 * Returns three independent flags (checked in order by the caller):
 *   trendAligned — macro trend bias matches expected direction at strong/moderate strength
 *   counterStructure — a structure break in the opposite direction was detected
 *   hasEntryZones — at least one valid FVG or OB is available
 *
 * Pure: no I/O, no side effects.
 */
export function evaluateTrendResumptionEligibility(
    params: ResumptionEligibilityParams,
): ResumptionEligibility
```

## File: src/controller/breakout-context.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { deriveBreakoutContext } from './breakout-context.js';
```

## File: src/controller/breakout-context.ts
```typescript
import type { StructureAnalysis } from '../modules/structure-detector/index.js';
import type { StrategyRoute } from '../modules/structure-detector/types.js';
import type { BreakoutContext } from '../types/trading-state.js';
⋮----
export function deriveBreakoutContext(input: {
    direction: 'LONG' | 'SHORT';
    currentPrice: number;
    route?: StrategyRoute;
    consolidation?: StructureAnalysis['consolidation'];
}): BreakoutContext | undefined
```

## File: src/controller/chart-builder.ts
```typescript
/**
 * 图表指标构建器
 * 从结构分析中提取图表渲染所需的指标数据
 */
⋮----
import type { StructureAnalysis } from '../modules/structure-detector/index.js';
import type { ChartIndicators } from '../modules/data-fetcher/index.js';
⋮----
/**
 * 构建图表指标数据
 * 合并 H4 + M15 + M5 的数据，渲染器会根据时间自动筛选
 */
export function buildChartIndicators(structureAnalysis: StructureAnalysis): ChartIndicators
⋮----
// FVG 区域 (合并 H4 + M15 + M5，过滤已填补的)
⋮----
// H4 FVG (最高优先级)
⋮----
.filter(f => !f.filled)  // 过滤已填补的
⋮----
inverted: f.inverted,  // IFVG 标记
⋮----
// M15 FVG
⋮----
// M5 FVG
⋮----
// Order Blocks (合并 H4 + M15 + M5，过滤已消耗的)
⋮----
// H4 OB (最高优先级)
⋮----
.filter(ob => !ob.mitigated)  // 过滤已消耗的
⋮----
// M15 OB
⋮----
// M5 OB
⋮----
// 结构破坏 (MSS/BOS) - 合并 H4 + M15 + M5
⋮----
// H4 结构破坏 (最重要)
⋮----
// 流动性区域
⋮----
// M15 级别 EQH/EQL
⋮----
// H4 级别的 EQH/EQL (高权重，用不同标记)
⋮----
// Swing Points (合并 H4 + M15 + M5，包含时间信息)
⋮----
].map(s => s.price),  // 保持向后兼容，只返回价格
⋮----
].map(s => s.price),  // 保持向后兼容，只返回价格
```

## File: src/controller/emergency-close.test.ts
```typescript
import { describe, expect, it, vi } from 'vitest';
import type { CandleWithIndicators, TradingState } from '../types/index.js';
import type { StructureAnalysis } from '../modules/structure-detector/index.js';
import type { MultiTimeframeData } from '../types/index.js';
import { checkEmergencyClose } from './emergency-close.js';
⋮----
/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */
⋮----
function makeExecutor(overrides?: Partial<Record<string, any>>)
⋮----
function makeStateStore()
⋮----
function makeConfigManager(opts?:
⋮----
function makeStructureAnalysis(overrides?: Partial<StructureAnalysis>): StructureAnalysis
⋮----
function makeOpenState(
    direction: 'LONG' | 'SHORT',
    overrides?: Partial<NonNullable<TradingState['activeTrade']>>,
): TradingState
⋮----
function makeCandle(timestamp: number, close: number): CandleWithIndicators
⋮----
function makeDeps(overrides?: Record<string, any>)
⋮----
/* ------------------------------------------------------------------ */
/*  Tests                                                             */
/* ------------------------------------------------------------------ */
⋮----
// m15Structure.displacement is undefined by default
⋮----
// LONG position + bullish displacement → same direction
⋮----
const breakTime = 10 * 60 * 1000 + 30 * 1000; // 10m30s
⋮----
makeCandle(0, 50120), // close at 5m, pre-break
makeCandle(5 * 60 * 1000, 50130), // close at 10m, pre-break
```

## File: src/controller/emergency-close.ts
```typescript
/**
 * 紧急平仓模块
 * 当 OPEN 状态下检测到反向 Displacement ≥ 阈值时，跳过 AI 分析直接平仓
 */
⋮----
import type { MultiTimeframeData, TradingState } from "../types/index.js";
import type { StructureAnalysis } from "../modules/structure-detector/index.js";
import { isValidEntryFVG } from "../modules/structure-detector/index.js";
import type { IExecutor } from "../modules/executor/index.js";
import type { StateStore } from "../modules/state-store/index.js";
import type { ConfigManager } from "../config/config-manager.js";
import { logger } from "../utils/index.js";
import { buildStructureInfo, cancelTradeOrders } from "./utils.js";
⋮----
function isPriceBeyondLevel(
  tradeDirection: "LONG" | "SHORT",
  price: number,
  level: number,
): boolean
⋮----
function countTrailingConfirmedM5Closes(
  tradeDirection: "LONG" | "SHORT",
  marketData: MultiTimeframeData,
  level: number,
  breakTime: number,
): number
⋮----
function getReverseConfirmationLevel(
  tradeDirection: "LONG" | "SHORT",
  structureAnalysis: StructureAnalysis,
):
⋮----
function calculateCurrentPnlR(trade: TradingState["activeTrade"], currentPrice: number): number | undefined
⋮----
function isEmergencyRiskContext(trade: NonNullable<TradingState["activeTrade"]>, currentPrice: number): boolean
⋮----
export async function checkEmergencyClose(deps: {
  reconciledState: TradingState;
  structureAnalysis: StructureAnalysis;
  symbol: string;
  marketData: MultiTimeframeData;
  executor: IExecutor;
  stateStore: StateStore;
  configManager: ConfigManager;
  handleSniperEntry: (
    setup: any,
    signalGrade: string | undefined,
    symbol: string,
    displacement: any,
    structureAnalysis: StructureAnalysis,
    marketData: MultiTimeframeData,
)
⋮----
// 检测持仓方向与 Displacement 方向是否相反
⋮----
// 执行平仓
⋮----
// 取消止损单 + 所有未成交止盈单
⋮----
// 记录决策日志
⋮----
// 检查反向入场信号
⋮----
// 先重置状态为 IDLE（必须先重置才能进入 SNIPER）
⋮----
// 记录反向入场决策
⋮----
// 触发反向入场
⋮----
// 无反向信号，正常重置状态
```

## File: src/controller/emergency-state-reset.test.ts
```typescript
import { describe, expect, it, vi } from 'vitest';
import { emergencyResetToIdle, resumeAutomationFromIdle } from './emergency-state-reset.js';
import type { TradingState } from '../types/index.js';
⋮----
function createState(status: TradingState['status']): TradingState
```

## File: src/controller/emergency-state-reset.ts
```typescript
import type { IExecutor } from '../modules/executor/index.js';
import type { StateStore } from '../modules/state-store/index.js';
import type { TradingState } from '../types/index.js';
import { logger } from '../utils/index.js';
import { buildManualInterventionWindow } from './manual-intervention.js';
⋮----
export interface EmergencyResetToIdleInput {
    symbol: string;
    stateStore: StateStore;
    executor: IExecutor;
    reason: string;
    haltMinutes: number;
    holdUntilResume?: boolean;
    cancelOpenOrders: boolean;
    closePosition: boolean;
}
⋮----
export interface EmergencyResetToIdleResult {
    symbol: string;
    previousStatus: TradingState['status'];
    resetAt: number;
    reason: string;
    haltMinutes: number;
    haltUntil?: number;
    canceledOrders: string[];
    cancelFailures: Array<{ orderId: string; error?: string }>;
    closePositionAttempted: boolean;
    closePositionSuccess?: boolean;
    closePositionError?: string;
    holdUntilResume?: boolean;
}
⋮----
export interface ResumeAutomationFromIdleInput {
    symbol: string;
    stateStore: StateStore;
    reason: string;
}
⋮----
export interface ResumeAutomationFromIdleResult {
    symbol: string;
    previousStatus: TradingState['status'];
    resumedAt: number;
    reason: string;
}
⋮----
export async function emergencyResetToIdle(
    input: EmergencyResetToIdleInput,
): Promise<EmergencyResetToIdleResult>
⋮----
export async function resumeAutomationFromIdle(
    input: ResumeAutomationFromIdleInput,
): Promise<ResumeAutomationFromIdleResult>
```

## File: src/controller/eth-smt-reversal.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import {
    buildBtcSmtReference,
    deriveEthSmtCandidate,
    isSmtCandidateExpired,
    buildEthSmtReversalSetup,
    type BtcSmtReference,
    type SmtCandidate,
} from './eth-smt-reversal.js';
import type { LiquidityAnalysis, TimeframeStructure } from '../modules/structure-detector/types.js';
⋮----
// ─── Helpers ────────────────────────────────────────────────────────
⋮----
function makeLiquidity(overrides: Partial<LiquidityAnalysis> =
⋮----
function makeM5Structure(overrides: Partial<TimeframeStructure> =
⋮----
// ─── buildBtcSmtReference ───────────────────────────────────────────
⋮----
// ─── deriveEthSmtCandidate ──────────────────────────────────────────
⋮----
sweepPrice: 70200, // BTC swept by 200 = 0.4 ATR
⋮----
sweepPrice: 2180, // ETH swept by 80 = 1.6 ATR
⋮----
// smtGap = ethOvershoot(1.6) - btcOvershoot(0.4) = 1.2
⋮----
sweepPrice: 2120, // Only 0.4 ATR overshoot
⋮----
// ETH only has PDH, not EQH
⋮----
// Should still find a match via priority-tier fallback (EQH=8, PDH=7 — different tiers)
// With only PDH (pri 7) vs EQH (pri 8), no exact or tier match → null
⋮----
// ─── isSmtCandidateExpired ──────────────────────────────────────────
⋮----
// ─── buildEthSmtReversalSetup ───────────────────────────────────────
⋮----
// Bearish: stop above sweep extreme + 0.2*ATR
```

## File: src/controller/eth-smt-reversal.ts
```typescript
/**
 * ETH SMT Reversal — 纯函数辅助模块
 *
 * 检测 ETH/BTC M15 流动性背离候选，
 * 并在 M5 确认链完成后合成可执行的 TradeSetup。
 */
⋮----
import type { LiquidityAnalysis, LiquidityLevel, TimeframeStructure, TradeSetup, SignalScore } from '../modules/structure-detector/types.js';
import type { Candle } from '../types/market-data.js';
import { isValidEntryFVG } from '../modules/structure-detector/displacement.js';
import { SWEEP_LEVEL_PRIORITY } from '../modules/structure-detector/liquidity.js';
⋮----
// ─── Types ──────────────────────────────────────────────────────────
⋮----
export interface SmtAnchorRef {
    type: string;
    price: number;
    side: 'high' | 'low';
}
⋮----
export interface BtcSmtReference {
    m15Highs: SmtAnchorRef[];
    m15Lows: SmtAnchorRef[];
    highSweeps?: SmtSweepRef[];
    lowSweeps?: SmtSweepRef[];
    atr: number;
    scanTime: number;
}
⋮----
export interface SmtSweepRef {
    type: string;
    levelPrice: number;
    sweepPrice: number;
    sweepTime: number;
    side: 'high' | 'low';
}
⋮----
export interface SmtCandidate {
    direction: 'bullish' | 'bearish';
    anchorType: string;
    btcAnchorPrice: number;
    ethAnchorPrice: number;
    btcOvershootAtr: number;
    ethOvershootAtr: number;
    smtGap: number;
    candidateTime: number;
    expiryTime: number;
    ethSweepExtreme: number;
}
⋮----
// ─── Constants ──────────────────────────────────────────────────────
⋮----
function getSweepSide(type: string): 'high' | 'low' | null
⋮----
function extractSweeps(
    liquidity: LiquidityAnalysis,
    side: 'high' | 'low',
): SmtSweepRef[]
⋮----
const addSweep = (input:
⋮----
// ─── BTC Reference Builder ─────────────────────────────────────────
⋮----
function extractAnchors(
    liquidity: LiquidityAnalysis,
    side: 'high' | 'low',
): SmtAnchorRef[]
⋮----
const addLevel = (level: LiquidityLevel | undefined) =>
⋮----
// Sort by priority descending
⋮----
export function buildBtcSmtReference(input: {
    btcLiquidity: LiquidityAnalysis;
    btcAtr: number;
    now: number;
}): BtcSmtReference
⋮----
// ─── ETH SMT Candidate Derivation ──────────────────────────────────
⋮----
function findBestMatchingAnchor(
    btcAnchors: SmtAnchorRef[],
    ethAnchors: SmtAnchorRef[],
):
⋮----
// Match by same anchor type class
⋮----
// Fallback: match same priority tier
⋮----
function selectBestSweepMatch(
    sweeps: SmtSweepRef[],
    anchor: SmtAnchorRef,
): SmtSweepRef | null
⋮----
export function deriveEthSmtCandidate(input: {
    btcReference: BtcSmtReference;
    ethLiquidity: LiquidityAnalysis;
    ethAtr: number;
    thresholdAtr?: number;
    expiryBars?: number;
    now: number;
}): SmtCandidate | null
⋮----
// Try bearish candidate: ETH sweeps highs more than BTC
⋮----
// Try bullish candidate: ETH sweeps lows more than BTC
⋮----
function tryDeriveCandidate(input: {
    btcReference: BtcSmtReference;
    ethLiquidity: LiquidityAnalysis;
    ethAtr: number;
    side: 'high' | 'low';
    direction: 'bullish' | 'bearish';
    threshold: number;
    expiryBars: number;
    now: number;
}): SmtCandidate | null
⋮----
// BTC overshoot: check if BTC has a sweep for this side too
⋮----
function findBtcSweepExtreme(
    reference: BtcSmtReference,
    side: 'high' | 'low',
    anchorPrice: number,
): number | null
⋮----
// ─── Expiry Check ───────────────────────────────────────────────────
⋮----
export function isSmtCandidateExpired(candidate: SmtCandidate, now: number): boolean
⋮----
// ─── M5 Confirmation + Setup Synthesis ──────────────────────────────
⋮----
export function buildEthSmtReversalSetup(input: {
    candidate: SmtCandidate;
    ethM5Structure: TimeframeStructure;
    ethM5Candles: Candle[];
    ethAtr: number;
    now: number;
}): TradeSetup | null
⋮----
// 1. Expiry check
⋮----
// 2. M5 Reclaim: find candle after candidateTime that closes back inside the anchor
⋮----
// Bearish: ETH swept high, reclaim = close below anchor
⋮----
// Bullish: ETH swept low, reclaim = close above anchor
⋮----
// 3. M5 MSS
⋮----
// 4. M5 Displacement
⋮----
// 5. M5 Entry Zone: first valid FVG or unmitigated OB
⋮----
// Stop loss: ETH sweep extreme + buffer
⋮----
// Take profit: conservative targets
```

## File: src/controller/high-alert-monitor.ts
```typescript
import type { TradeSetup } from '../modules/structure-detector/types.js';
import type { TradingState } from '../types/index.js';
import type { StateStore } from '../modules/state-store/index.js';
import { logger } from '../utils/index.js';
⋮----
interface HighAlertConfig {
    intervalMs?: number;
    iterations?: number;
}
⋮----
interface HighAlertDependencies {
    stateStore: StateStore;
    rescan: (symbol: string) => Promise<void>;
}
⋮----
interface ShouldActivateParams {
    setup?: TradeSetup;
    state: TradingState;
    is5MinCron: boolean;
    suppressHighAlert?: boolean;
}
⋮----
export class HighAlertMonitor
⋮----
constructor(
        private readonly deps: HighAlertDependencies,
        config: HighAlertConfig = {}
)
⋮----
shouldActivate(params: ShouldActivateParams): boolean
⋮----
schedule(symbol: string, setup: TradeSetup): void
⋮----
async flushPendingTasks(): Promise<number>
⋮----
private async runHighAlertMonitoring(symbol: string): Promise<void>
⋮----
private async delay(ms: number): Promise<void>
```

## File: src/controller/ict-filters.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { checkPremiumDiscount, selectEntryZone } from './ict-filters.js';
import type { FVG, OrderBlock } from '../modules/structure-detector/index.js';
⋮----
function makeFvg(overrides: Partial<FVG>): FVG
⋮----
function makeOb(overrides: Partial<OrderBlock>): OrderBlock
⋮----
function makeRangeCandles(params:
```

## File: src/controller/ict-filters.ts
```typescript
/**
 * ICT 过滤器工具函数
 * 提取共用的 ICT 交易逻辑
 */
⋮----
import { calculatePriceZone, isValidEntryFVG } from '../modules/structure-detector/index.js';
import type { OrderBlock, FVG } from '../modules/structure-detector/index.js';
import type { StrategyProfileId } from '../config/config-manager.js';
import { logger } from '../utils/index.js';
⋮----
// ========== Premium/Discount 过滤 ==========
⋮----
export interface PremiumDiscountResult {
    valid: boolean;
    zone: 'premium' | 'discount' | 'equilibrium';
    position: number;  // 0-1, 0=最低, 1=最高
    lookbackCandles: number;
    h4SampleSize: number;
    sourceTimeframe: 'D1' | 'H4';
    rangeHigh?: number;
    rangeLow?: number;
    equilibrium?: number;
    profileId?: StrategyProfileId;
    volatilityRatio?: number;
    reason?: string;
}
⋮----
position: number;  // 0-1, 0=最低, 1=最高
⋮----
export interface PremiumDiscountOptions {
    lookbackCandles?: number;
    minLookbackCandles?: number;
    maxLookbackCandles?: number;
    profileId?: StrategyProfileId;
    volatilityRatio?: number;
    sourceTimeframe?: 'D1' | 'H4';
    fallbackCandles?: { high: number; low: number }[];
    fallbackTimeframe?: 'H4';
}
⋮----
/**
 * 检查 Premium/Discount 是否与交易方向匹配
 * 
 * ICT 规则:
 * - LONG: 必须在 Discount 区 (position < 35%)
 * - SHORT: 必须在 Premium 区 (position > 65%)
 * 
 * 例外: 当 HTF 趋势与信号方向一致时，跳过区域检查 (顺势交易)
 * 
 * @param direction 交易方向
 * @param currentPrice 当前价格
 * @param h4Candles H4 K线 (至少 20 根)
 * @param trendDirection HTF 趋势方向 (可选，用于判断顺势信号)
 * @returns 验证结果
 */
export function checkPremiumDiscount(
    direction: 'LONG' | 'SHORT',
    currentPrice: number,
    htfCandles?: { high: number; low: number }[],
    trendDirection?: 'bullish' | 'bearish' | 'neutral',
    options?: PremiumDiscountOptions
): PremiumDiscountResult
⋮----
// 数据不足时默认通过 (需要足够的数据来确立有效的 Swing High/Low)
⋮----
// 使用最近 N 根 HTF K线计算范围，N 可按波动与 profile 动态调整
⋮----
// 顺势交易例外: 如果信号方向与 HTF 趋势一致，跳过区域检查
// 这允许趋势性破位信号通过 (如暴跌中的 SHORT，即使在 discount 区域)
⋮----
// 验证方向与区域匹配
⋮----
// Equilibrium 区域允许双向
⋮----
// ========== 入场区选择 ==========
⋮----
export interface EntryZone {
    type: 'OB' | 'FVG' | 'IFVG';
    top: number;
    bottom: number;
    zoneCategory: string;  // bullish/bearish
    priority: number;
}
⋮----
zoneCategory: string;  // bullish/bearish
⋮----
export interface EntryZoneResult {
    zone: EntryZone;
    displayType: 'OB' | 'FVG';  // API 兼容类型 (IFVG 映射为 FVG)
}
⋮----
displayType: 'OB' | 'FVG';  // API 兼容类型 (IFVG 映射为 FVG)
⋮----
export interface EntryZoneOptions {
    // A级严格模式：剔除“已削弱且量能验证失败”的 OB
    strictObQuality?: boolean;
    // 执行层仅允许 FVG/IFVG 锚点（禁用 OB）
    requireFvgOnly?: boolean;
}
⋮----
// A级严格模式：剔除“已削弱且量能验证失败”的 OB
⋮----
// 执行层仅允许 FVG/IFVG 锚点（禁用 OB）
⋮----
/**
 * 选择最优入场区
 * 
 * ICT 优先级:
 * 1. IFVG (被反穿的 FVG) - 100
 * 2. OB+FVG 重叠 - 90
 * 3. 单独 OB - 70 (弱/中动能时优先)
 * 4. 单独 FVG - 50 → 80 (强动能时优先级提升)
 *
 * @param direction 交易方向
 * @param currentPrice 当前价格
 * @param orderBlocks 订单块列表
 * @param fvgs FVG 列表
 * @param signalType 信号类型 (MSS/BOS)，影响最大距离限制
 * @param displacementMagnitude Displacement 强度 (ATR 倍数)，强动能优先 FVG
 * @returns 选中的入场区，或 null
 */
export function selectEntryZone(
    direction: 'LONG' | 'SHORT',
    currentPrice: number,
    orderBlocks: OrderBlock[],
    fvgs: FVG[],
    signalType?: 'MSS' | 'BOS',
    displacementMagnitude?: number,  // 新增: 动能强度
    options?: EntryZoneOptions
): EntryZoneResult | null
⋮----
displacementMagnitude?: number,  // 新增: 动能强度
⋮----
// 根据动能强度决定 FVG 优先级
// 强动能 (>2.0x ATR): FVG 优先级提升到 80 (高于 OB 的 70)
// 中等动能 + BOS: FVG 优先级提升到 75
// 其他情况: FVG 保持 50 (OB 优先)
⋮----
// 筛选符合方向且未被消耗的入场区
⋮----
// 检测 IFVG (被反穿的 FVG)
⋮----
// 检测 OB+FVG 重叠
⋮----
// 构建所有入场区列表
interface ZoneWithDistance extends EntryZone {
        distance: number;
        sourceTime: number;
    }
⋮----
// IFVG 最高优先级
⋮----
// OB+FVG 重叠
⋮----
// 单独 OB
⋮----
// 单独 FVG (排除 IFVG)
⋮----
// 过滤有效入场区
// LONG: 入场区应在当前价格下方 (等待回调)
// SHORT: 入场区应在当前价格上方 (等待回调)
⋮----
? z.top <= currentPrice * 1.01  // LONG: 入场区顶部在当前价格1%以内
: z.bottom >= currentPrice * 0.99  // SHORT: 入场区底部在当前价格1%以内
⋮----
// 最大距离限制: 入场区不能离当前价格太远
// BOS 趋势跟踪: 允许更宽的回调 (3%)
// MSS 反转入场: 保持严格 (2%)
const MAX_DISTANCE_PERCENT = signalType === 'BOS' ? 0.03 : 0.02;  // BOS: 3%, MSS/默认: 2%
⋮----
// 优先使用有效入场区，其次使用距离限制内的入场区
// 如果都没有，返回 null (不选择太远的入场区)
⋮----
// 所有入场区都太远，不选择
⋮----
// 按优先级排序 (高 -> 低)，同优先级按距离排序 (近 -> 远)。
// 当距离非常接近时，优先最新形成的区间，避免陈旧区间优先级异常。
⋮----
// IFVG 映射回 FVG (API 兼容)
⋮----
/**
 * 记录 ICT 过滤拒绝日志
 */
export function logICTFilterRejection(
    symbol: string,
    direction: 'LONG' | 'SHORT',
    filterResult: PremiumDiscountResult,
    signalGrade?: 'A' | 'B' | 'C'
): void
```

## File: src/controller/managed-ai-polling.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { ManagedAIPolling } from './managed-ai-polling.js';
import { createConfigManager, runWithDefaultConfigManager } from '../config/config-manager.js';
⋮----
function makeStructureAnalysis(structureBreakPrice: number): any
⋮----
function makeOpenState(lastSignature: string, now: number): any
⋮----
// default openAiMinIntervalMs = 30m, elapsed=10m => should be blocked
⋮----
// scoped override openAiMinIntervalMs = 5m, elapsed=10m + signature changed => should run
```

## File: src/controller/managed-ai-polling.ts
```typescript
import type { MultiTimeframeData, TradingState } from "../types/index.js";
import type { StructureAnalysis } from "../modules/structure-detector/index.js";
import type { ManagedAIPollingConfig } from "../config/config-manager.js";
import { getDefaultConfigManager } from "../config/config-manager.js";
⋮----
export interface ManagedAIPollDecision {
    shouldRun: boolean;
    reason: string;
    signature: string;
    elapsedMinutes: number;
}
⋮----
/**
 * OPEN/PENDING 阶段的自适应 AI 轮询判定器
 * 将高频状态管理判断从 Scheduler 主流程中拆分出来。
 */
export class ManagedAIPolling
⋮----
constructor(configOverrides: Partial<ManagedAIPollingConfig> =
⋮----
private getConfig(): ManagedAIPollingConfig
⋮----
buildSignature(structureAnalysis: StructureAnalysis): string
⋮----
buildSnapshot(
        state: TradingState,
        structureAnalysis: StructureAnalysis,
        currentPrice: number,
        now: number = Date.now(),
): NonNullable<TradingState["memory"]["adaptivePolling"]>
⋮----
evaluate(
        state: TradingState,
        structureAnalysis: StructureAnalysis,
        marketData: MultiTimeframeData,
        now: number = Date.now(),
): ManagedAIPollDecision
⋮----
private isReverseDisplacementForTrade(
        state: TradingState,
        structureAnalysis: StructureAnalysis,
        minMagnitude: number,
): boolean
⋮----
private hasReverseStructureBreakForTrade(
        state: TradingState,
        structureAnalysis: StructureAnalysis,
): boolean
⋮----
getTradeKey(state: TradingState): string | undefined
⋮----
/**
     * 使用 ATR + 价格比例生成动态分桶，兼顾低价币精度和高价资产稳定性。
     */
private formatPriceForSignature(
        price: number,
        context: { currentPrice: number; atr: number },
): string
⋮----
const minStep = current * 0.00005;   // 0.5 bps
const maxStep = current * 0.02;      // 2%
const atrStep = atr * 0.05;          // 0.05 ATR
```

## File: src/controller/manual-intervention.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import {
    buildManualInterventionWindow,
    evaluateManualInterventionWindow,
} from './manual-intervention.js';
```

## File: src/controller/manual-intervention.ts
```typescript
import type { ShortTermMemory } from '../types/trading-state.js';
⋮----
export type ManualInterventionWindow = NonNullable<ShortTermMemory['manualIntervention']>;
⋮----
export function buildManualInterventionWindow(params: {
    now: number;
    reason: string;
    haltMinutes: number;
    holdUntilResume?: boolean;
}): ManualInterventionWindow | undefined
⋮----
export function evaluateManualInterventionWindow(
    window: ManualInterventionWindow | undefined,
    now: number,
):
```

## File: src/controller/market-snapshot-recording.test.ts
```typescript
import { describe, expect, it, vi } from 'vitest';
import { handleSkipAI, runAIAnalysis } from './scheduler-runtime-helpers.js';
import { recordAnalysisMarketSnapshot } from './market-snapshot-recording.js';
⋮----
function buildMarketData()
⋮----
const candle = (offset: number) => (
```

## File: src/controller/market-snapshot-recording.ts
```typescript
import type { MarketSnapshotStore } from '../modules/state-store/market-snapshot-store.js';
import type {
    MarketSnapshotPhase,
    MarketSnapshotSource,
    MultiTimeframeData,
    TradingState,
} from '../types/index.js';
import { buildMarketSnapshotPayload } from '../utils/market-snapshot.js';
import { logger } from '../utils/index.js';
⋮----
export async function recordAnalysisMarketSnapshot(input: {
    marketSnapshotStore?: MarketSnapshotStore;
    symbol: string;
    phase: MarketSnapshotPhase;
    source: MarketSnapshotSource;
    marketData: MultiTimeframeData;
    timestamp?: number;
    traceId?: string;
    triggerReason?: string;
}): Promise<void>
⋮----
export function resolveMarketSnapshotTraceId(state: TradingState): string | undefined
```

## File: src/controller/range-time-stop.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import {
    BAND_REVERSION_TIME_STOP_COOLDOWN_MS,
    BAND_REVERSION_TIME_STOP_MIN_MOVE_ATR,
    BAND_REVERSION_TIME_STOP_MIN_MS,
    deriveBandReversionTimeStopCooldown,
    evaluateBandReversionTimeStop,
    inferSignalFamilyFromEntryLogic,
} from './range-time-stop.js';
```

## File: src/controller/range-time-stop.ts
```typescript
import type { TradeSetup } from '../modules/structure-detector/types.js';
import type { AIEarlyExitCooldown } from './ai-close-cooldown.js';
⋮----
type SignalFamily = NonNullable<TradeSetup['context']['signalFamily']>;
⋮----
export function inferSignalFamilyFromEntryLogic(entryLogic?: string): SignalFamily | undefined
⋮----
function isBandReversionFamily(signalFamily?: SignalFamily): boolean
⋮----
export function evaluateBandReversionTimeStop(input: {
    signalFamily?: SignalFamily;
    direction: 'LONG' | 'SHORT';
    entryPrice: number;
    currentPrice: number;
    atr: number;
    createdAt: number;
    now: number;
}):
⋮----
export function deriveBandReversionTimeStopCooldown(params: {
    direction: 'LONG' | 'SHORT';
    exitTime: number;
    exitPrice: number;
}): AIEarlyExitCooldown
```

## File: src/controller/setup-risk-policy.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import {
    applySetupRiskMultiplier,
    getSetupRiskMultiplier,
} from './setup-risk-policy.js';
```

## File: src/controller/setup-risk-policy.ts
```typescript
import type { TradeSetup } from '../modules/structure-detector/types.js';
⋮----
export function getSetupRiskMultiplier(
    setup?: Pick<TradeSetup, 'context'>,
): number
⋮----
export function applySetupRiskMultiplier(
    baseRisk: number,
    setup?: Pick<TradeSetup, 'context'>,
): number
```

## File: src/controller/sl-distance-reprice.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { repriceEntryForMaxSlDistance } from './sl-distance-reprice.js';
```

## File: src/controller/sniper-entry-policy.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import {
    shouldAllowAGradeFastDirectEntry,
    shouldAllowAGradeChase,
    shouldAllowAGradeFallbackEnter,
    shouldAllowSniperChaseByHtfPd,
    shouldApplyMomentumOffset,
    shouldSkipAGradePdDowngrade
} from './sniper-entry-policy.js';
⋮----
const buildCandles = (count: number, low: number, high: number) => (
Array.from(
```

## File: src/controller/sniper-entry-policy.ts
```typescript
import type { StrategyRoute, StrategyType } from '../modules/structure-detector/types.js';
import { checkPremiumDiscount } from './ict-filters.js';
import { isEthExecutionSymbol } from './anchor-entry-policy.js';
⋮----
export interface MomentumOffsetPolicyContext {
    strategy?: StrategyType;
    route?: StrategyRoute;
    isConsolidating?: boolean;
}
⋮----
export interface MomentumOffsetPolicyResult {
    allowed: boolean;
    reason: string;
}
⋮----
export interface AGradeChaseGateContext {
    strategy?: StrategyType;
    route?: StrategyRoute;
    isConsolidating?: boolean;
    vwapAccepted?: boolean;
    displacementMagnitude?: number;
    entryPrice: number;
    currentPrice: number;
    atrForGap?: number;
}
⋮----
export interface AGradeChaseGateResult {
    allowed: boolean;
    reason: string;
    entryGapAtr?: number;
}
⋮----
export interface SniperChaseHtfPdGateContext {
    direction: 'LONG' | 'SHORT';
    currentPrice: number;
    d1Candles?: { high: number; low: number }[];
    h4Candles?: { high: number; low: number }[];
}
⋮----
export interface SniperChaseHtfPdGateResult {
    allowed: boolean;
    reason: 'PASS' | 'HTF_PD_CONFLICT';
    zone?: 'premium' | 'discount' | 'equilibrium';
    position?: number;
    sourceTimeframe?: 'D1' | 'H4';
}
⋮----
export interface AGradeFallbackEnterGuardContext {
    decision: 'ENTER' | 'WAIT' | 'ABORT';
    vwapAccepted?: boolean;
}
⋮----
export interface AGradeFallbackEnterGuardResult {
    allowed: boolean;
    reason: 'PASS' | 'NOT_ENTER' | 'VWAP_REJECTED';
}
⋮----
export interface AGradeFastDirectEntryContext {
    entryZoneType?: 'FVG' | 'OB' | 'SWEEP';
}
⋮----
export interface AGradeFastDirectEntryResult {
    allowed: boolean;
    reason: 'PASS' | 'MISSING_ENTRY_ZONE' | 'NON_FVG_ENTRY_ZONE';
}
⋮----
export interface AGradePdDowngradeBypassContext {
    symbol: string;
    strategy?: StrategyType;
    btcLeadAGradeAligned?: boolean;
}
⋮----
export interface AGradePdDowngradeBypassResult {
    skipDowngrade: boolean;
    reason: 'PASS' | 'NOT_ETH' | 'NON_STANDARD_ICT' | 'NO_BTC_A_LEAD_ALIGNMENT';
}
⋮----
/**
 * STANDARD_ICT 已统一改为回踩挂单，本函数保留为执行层硬闸门：
 * 当前所有策略均不再允许通过该路径追加 momentum offset。
 */
export function shouldApplyMomentumOffset(
    context: MomentumOffsetPolicyContext,
): MomentumOffsetPolicyResult
⋮----
/**
 * A 级追价硬闸门：
 * 当前 STANDARD_ICT 已统一为 pullback-only，本函数保留为显式禁追价入口。
 */
export function shouldAllowAGradeChase(
    context: AGradeChaseGateContext,
): AGradeChaseGateResult
⋮----
/**
 * Sniper runaway chase 前置门槛：
 * - LONG 仅允许在 HTF discount / equilibrium
 * - SHORT 仅允许在 HTF premium / equilibrium
 * 使用 D1 作为主周期，数据不足时降级 H4。
 */
export function shouldAllowSniperChaseByHtfPd(
    context: SniperChaseHtfPdGateContext,
): SniperChaseHtfPdGateResult
⋮----
export function shouldAllowAGradeFallbackEnter(
    context: AGradeFallbackEnterGuardContext,
): AGradeFallbackEnterGuardResult
⋮----
/**
 * A-fast 直连模式仅允许 FVG 锚点限价单。
 * 目的：禁用 OB 深挂导致的踏空/错位，同时避免追价直连扩大回撤风险。
 */
export function shouldAllowAGradeFastDirectEntry(
    context: AGradeFastDirectEntryContext,
): AGradeFastDirectEntryResult
⋮----
export function shouldSkipAGradePdDowngrade(
    context: AGradePdDowngradeBypassContext,
): AGradePdDowngradeBypassResult
```

## File: src/controller/stack-variant-filters.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { Candle } from '../types/index.js';
import { evaluateStandardIctEmaDirectionFilter } from './stack-variant-filters.js';
⋮----
function buildTrendCandles(start: number, step: number, count: number): Candle[]
```

## File: src/controller/stack-variant-filters.ts
```typescript
import type { Candle } from '../types/index.js';
import { calculateEMA } from '../modules/structure-detector/trend.js';
import type { StandardIctEmaDirectionFilterConfig } from '../config/stack-variant.js';
⋮----
export interface StandardIctEmaDirectionFilterResult {
    allowed: boolean;
    reason:
        | 'FILTER_DISABLED'
        | 'INSUFFICIENT_DATA'
        | 'INVALID_CONFIG'
        | 'EMA_ALIGNED'
        | 'EMA_DIRECTION_MISMATCH'
        | 'EMA_SPREAD_TOO_SMALL';
    fastEma?: number;
    slowEma?: number;
    spreadPercent?: number;
}
⋮----
export function evaluateStandardIctEmaDirectionFilter(input: {
    direction: 'bullish' | 'bearish';
    h1Candles: Candle[];
    filter?: StandardIctEmaDirectionFilterConfig;
}): StandardIctEmaDirectionFilterResult
```

## File: src/controller/turtle-entry-policy.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { applyTurtleEntryRiskPolicy, resolveTurtleStopClampRiskCapPercent } from './turtle-entry-policy.js';
```

## File: src/controller/turtle-entry-policy.ts
```typescript
import type { TradeSetup, StrategyType } from '../modules/structure-detector/types.js';
⋮----
export interface TurtleEntryRiskPolicyInput {
    strategy?: StrategyType;
    signalFamily?: TradeSetup['context']['signalFamily'];
    dynamicRiskCapPercent: number;
    positionSize: number;
}
⋮----
export interface TurtleEntryRiskPolicyResult {
    effectiveRiskCapPercent: number;
    scaledPositionSize: number;
    reason: 'DEFAULT' | 'VWAP_BOUNCE_MVP_POLICY' | 'BAND_REVERSION_SOFT_POLICY' | 'BAND_REVERSION_POLICY';
}
⋮----
export interface TurtleStopClampRiskCapInput {
    effectiveRiskCapPercent: number;
    maxRiskPercent: number;
}
⋮----
// BAND_REVERSION (独立策略): 止损紧，给予 0.75x 仓位缩放作为初期保守设置
⋮----
const BAND_REVERSION_MAX_RISK_PERCENT = 1.0; // 最高 1% 单笔风险
⋮----
export function applyTurtleEntryRiskPolicy(
    input: TurtleEntryRiskPolicyInput,
): TurtleEntryRiskPolicyResult
⋮----
// BAND_REVERSION 独立策略处理
⋮----
export function resolveTurtleStopClampRiskCapPercent(
    input: TurtleStopClampRiskCapInput,
): number
```

## File: src/controller/us-equity-force-close.test.ts
```typescript
import { describe, expect, it, vi } from 'vitest';
import type { TradingState } from '../types/index.js';
import { handleUsEquityForceClose, type UsEquityForceCloseInfo } from './us-equity-force-close.js';
⋮----
/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */
⋮----
function makeExecutor()
⋮----
function makeStateStore()
⋮----
function baseState(overrides?: Partial<TradingState>): TradingState
⋮----
function makeDeps(overrides?: Record<string, any>)
⋮----
/* ------------------------------------------------------------------ */
/*  Tests                                                             */
/* ------------------------------------------------------------------ */
⋮----
// cancels the market order itself
⋮----
// cancels SL
⋮----
// cancels unfilled TP only
⋮----
// filled TP not cancelled (3 total calls: order + sl + 1 unfilled tp)
⋮----
const deps = makeDeps(); // default state is IDLE
```

## File: src/controller/us-equity-force-close.ts
```typescript
/**
 * 美股日内强平模块
 * 在收盘前指定时间窗口内，强制清仓并取消所有挂单
 */
⋮----
import type { TradingState } from "../types/index.js";
import type { IExecutor } from "../modules/executor/index.js";
import type { StateStore } from "../modules/state-store/index.js";
import { logger } from "../utils/index.js";
import { cancelTradeOrders } from "./utils.js";
⋮----
export type UsEquityForceCloseInfo = {
  minutesToClose: number | null;
  localDate: string;
  localTime: string;
};
⋮----
export async function handleUsEquityForceClose(deps: {
  state: TradingState;
  symbol: string;
  info: UsEquityForceCloseInfo;
  executor: IExecutor;
  stateStore: StateStore;
resetPendingLimit: (symbol: string, reason: string)
```

## File: src/http/cloud-logger.ts
```typescript
import type { CloudLoggerLike } from '../utils/cloud-logger-types.js';
import type { Env } from './env.js';
⋮----
export function resolveCloudLogger(env: Env): CloudLoggerLike | undefined
```

## File: src/http/env.ts
```typescript
import type { CloudLoggerLike } from '../utils/cloud-logger-types.js';
import type { DecisionLogStore } from '../modules/state-store/decision-log-store.js';
import type { TradeLogStore } from '../modules/state-store/trade-log-store.js';
import type { FetchStub, KvStore } from '../types/runtime.js';
⋮----
export interface Env {
  // KV 绑定
  TRADING_STATE: KvStore;
  // 本地/自定义日志器
  CLOUD_LOGGER?: CloudLoggerLike;
  // Decision log store (optional, SQLite)
  DECISION_LOG_STORE?: DecisionLogStore;
  // Shadow lane decision log store (optional, separate SQLite)
  SHADOW_DECISION_LOG_STORE?: DecisionLogStore;
  // Shadow lane trade log store (optional, separate SQLite)
  SHADOW_TRADE_LOG_STORE?: TradeLogStore;
  // Trade log store (optional, SQLite)
  TRADE_LOG_STORE?: TradeLogStore;
  // 监控服务
  LIQUIDATION_WATCHER?: FetchStub;
  ORDER_FILL_WATCHER?: FetchStub;

  // 环境变量
  SYMBOLS: string;
  MAX_RISK_PERCENT: string;

  // Secrets
  GEMINI_API_KEY: string;
  HYPERLIQUID_PRIVATE_KEY: string;
  HYPERLIQUID_TESTNET?: string;
  TRADING_MODE?: string;  // 'LIVE' | 'PAPER'
  DEEPSEEK_API_KEY?: string; // DeepSeek API Key
  QWEN_API_KEY?: string;      // Qwen API Key
  ZAI_API_KEY?: string;       // Z AI API Key
  ANALYSIS_PROVIDER?: string; // 'deepseek' | 'qwen' | 'zai' (默认 zai)
  ENABLE_VISION_ANALYSIS?: string; // true 时启用视觉分析 (图像 + 叙事)
  VISION_PROVIDER?: string; // 'zai' | 'gemini' (默认 zai)
  SUB_ACCOUNT_ADDRESS?: string; // 子账户地址 (可选)
  HYPERLIQUID_USER_ADDRESS?: string; // 用于订阅 userFills 的地址 (可选)
  EXECUTOR_PROVIDER?: string; // Legacy, ignored
  TIGER_ADAPTER_URL?: string;
  TIGER_ADAPTER_API_KEY?: string;
  DASHBOARD_USER?: string;
  DASHBOARD_PASS?: string;
  API_BEARER_TOKEN?: string; // v1 API Bearer token (for remote agents)
  FRONTEND_ORIGINS?: string; // 逗号分隔的允许跨域来源
  SHADOW_ENABLED?: string; // shadow lane 开关
  SHADOW_EXPERIMENT_ID?: string; // shadow lane experiment id
  SHADOW_SYMBOLS?: string; // shadow lane symbols（逗号分隔）
  CHAMPION_STACK?: string; // champion lane 策略栈（默认 ICT_A）
  SHADOW_STACK?: string; // shadow lane 策略栈（默认继承 champion）
  ICT_STACK_CONFIG_OVERRIDES_JSON?: string; // 兼容旧栈名 ICT_STACK 的配置覆盖（JSON object）
  ICT_A_CONFIG_OVERRIDES_JSON?: string; // ICT_A 栈配置覆盖（JSON object）
  ICT_B_CONFIG_OVERRIDES_JSON?: string; // ICT_B 栈配置覆盖（JSON object）
  BAND_REV_CONFIG_OVERRIDES_JSON?: string; // BAND_REV 栈配置覆盖（JSON object）
  ICT_STACK_VARIANT_JSON?: string; // 兼容旧栈名 ICT_STACK 的变体（JSON object）
  ICT_A_VARIANT_JSON?: string; // ICT_A 栈变体（JSON object）
  ICT_B_VARIANT_JSON?: string; // ICT_B 栈变体（JSON object）
  BAND_REV_VARIANT_JSON?: string; // BAND_REV 栈变体（JSON object）
}
⋮----
// KV 绑定
⋮----
// 本地/自定义日志器
⋮----
// Decision log store (optional, SQLite)
⋮----
// Shadow lane decision log store (optional, separate SQLite)
⋮----
// Shadow lane trade log store (optional, separate SQLite)
⋮----
// Trade log store (optional, SQLite)
⋮----
// 监控服务
⋮----
// 环境变量
⋮----
// Secrets
⋮----
TRADING_MODE?: string;  // 'LIVE' | 'PAPER'
DEEPSEEK_API_KEY?: string; // DeepSeek API Key
QWEN_API_KEY?: string;      // Qwen API Key
ZAI_API_KEY?: string;       // Z AI API Key
ANALYSIS_PROVIDER?: string; // 'deepseek' | 'qwen' | 'zai' (默认 zai)
ENABLE_VISION_ANALYSIS?: string; // true 时启用视觉分析 (图像 + 叙事)
VISION_PROVIDER?: string; // 'zai' | 'gemini' (默认 zai)
SUB_ACCOUNT_ADDRESS?: string; // 子账户地址 (可选)
HYPERLIQUID_USER_ADDRESS?: string; // 用于订阅 userFills 的地址 (可选)
EXECUTOR_PROVIDER?: string; // Legacy, ignored
⋮----
API_BEARER_TOKEN?: string; // v1 API Bearer token (for remote agents)
FRONTEND_ORIGINS?: string; // 逗号分隔的允许跨域来源
SHADOW_ENABLED?: string; // shadow lane 开关
SHADOW_EXPERIMENT_ID?: string; // shadow lane experiment id
SHADOW_SYMBOLS?: string; // shadow lane symbols（逗号分隔）
CHAMPION_STACK?: string; // champion lane 策略栈（默认 ICT_A）
SHADOW_STACK?: string; // shadow lane 策略栈（默认继承 champion）
ICT_STACK_CONFIG_OVERRIDES_JSON?: string; // 兼容旧栈名 ICT_STACK 的配置覆盖（JSON object）
ICT_A_CONFIG_OVERRIDES_JSON?: string; // ICT_A 栈配置覆盖（JSON object）
ICT_B_CONFIG_OVERRIDES_JSON?: string; // ICT_B 栈配置覆盖（JSON object）
BAND_REV_CONFIG_OVERRIDES_JSON?: string; // BAND_REV 栈配置覆盖（JSON object）
ICT_STACK_VARIANT_JSON?: string; // 兼容旧栈名 ICT_STACK 的变体（JSON object）
ICT_A_VARIANT_JSON?: string; // ICT_A 栈变体（JSON object）
ICT_B_VARIANT_JSON?: string; // ICT_B 栈变体（JSON object）
BAND_REV_VARIANT_JSON?: string; // BAND_REV 栈变体（JSON object）
```

## File: src/modules/analyzer/prompts/a-grade-fallback.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { buildAGradeFallbackPrompt, buildAGradeFallbackPromptSpec } from './a-grade-fallback.js';
```

## File: src/modules/analyzer/prompts/a-grade-fallback.ts
```typescript
import { renderPrompt } from './renderer.js';
import { A_GRADE_FALLBACK_RESPONSE_SCHEMA } from './schema-registry.js';
import { joinPromptLines, optionalTextSection, textSection } from './section-helpers.js';
import { definePromptSpec, type PromptSpec } from './spec.js';
⋮----
/**
 * A 级信号风控拦截后的 AI 复核 Prompt
 * 与 B 级狙击提示词分离：强调“高质量 setup 二次优化”，而非等待式狙击确认。
 */
export type AGradeFallbackPromptParams = {
    symbol: string;
    currentPrice: number;
    direction: 'LONG' | 'SHORT';
    entryZone: { type: 'FVG' | 'OB'; top: number; bottom: number };
    fallbackReason: string;
    m15DisplacementMagnitude: number;
    structureSummary: string;
    recentCandles?: string;
    structureBreakType?: 'MSS' | 'BOS';
    higherTfContext?: string;
    visionNarrativeContext?: string;
    premiumDiscountContext?: {
        zone: 'premium' | 'discount' | 'equilibrium';
        position: number;
        rangeLow?: number;
        rangeHigh?: number;
        equilibrium?: number;
        lookbackCandles: number;
        sourceTimeframe?: 'D1' | 'H4';
    };
    vwapContext?: {
        dailyVwap: number;
        sessionVwap: number;
        sessionAnchor: 'LONDON' | 'NEW_YORK';
        displacementTime: number;
        minBars: number;
        requiredConsecutive: number;
        maxBars: number;
        postDispBarsObserved: number;
        consecutiveSameSideCloses: number;
        vwapAccepted: boolean;
        vwapRejectReason?: string;
    };
};
⋮----
function deriveAGradeFallbackContext(params: AGradeFallbackPromptParams)
⋮----
function buildAGradeFallbackBackgroundSection(): string
⋮----
function buildAGradeFallbackInterceptSection(params: AGradeFallbackPromptParams, context: ReturnType<typeof deriveAGradeFallbackContext>): string
⋮----
function buildAGradeFallbackStateSection(params: AGradeFallbackPromptParams, context: ReturnType<typeof deriveAGradeFallbackContext>): string
⋮----
function buildAGradeFallbackDecisionPriority(): string
⋮----
export function buildAGradeFallbackPromptSpec(params: AGradeFallbackPromptParams): PromptSpec<AGradeFallbackPromptParams>
⋮----
export function buildAGradeFallbackPrompt(params: AGradeFallbackPromptParams): string
```

## File: src/modules/analyzer/prompts/ai-displacement-entry.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { buildAiDisplacementEntryPrompt } from './ai-displacement-entry.js';
```

## File: src/modules/analyzer/prompts/ai-displacement-entry.ts
```typescript
/**
 * AI_DISPLACEMENT 专用入场 Prompt
 * 与 A 级 fallback / sniper 提示词完全分离：
 * 仅围绕 M15 强位移触发后的 AI 自主入场决策。
 */
export function buildAiDisplacementEntryPrompt(params: {
    symbol: string;
    currentPrice: number;
    direction: 'LONG' | 'SHORT';
    entryZone: { type: 'FVG' | 'OB'; top: number; bottom: number };
    m15DisplacementMagnitude: number;
    structureSummary: string;
    recentCandles?: string;
    structureBreakType?: 'MSS' | 'BOS';
    higherTfContext?: string;
    visionNarrativeContext?: string;
}): string
```

## File: src/modules/analyzer/prompts/heartbeat.ts
```typescript
import { renderPrompt } from './renderer.js';
import { HEARTBEAT_RESPONSE_SCHEMA } from './schema-registry.js';
import { joinPromptLines, textSection } from './section-helpers.js';
import { definePromptSpec, type PromptSpec } from './spec.js';
⋮----
/**
 * 心跳 Prompt 模板 (轻量级市场更新)
 * 不发送图表，只请求 AI 更新市场观察
 */
export type HeartbeatPromptParams = {
    symbol: string;
    currentPrice: number;
    lastAnalysisTime: number;
    structureSummary: string;
    lastDecision: string;
    lastWatchedLevels: number[];
};
⋮----
function deriveHeartbeatContext(params: HeartbeatPromptParams)
⋮----
export function buildHeartbeatPromptSpec(params: HeartbeatPromptParams): PromptSpec<HeartbeatPromptParams>
⋮----
export function buildHeartbeatPrompt(params: HeartbeatPromptParams): string
```

## File: src/modules/analyzer/prompts/idle.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { STANDARD_SYSTEM_INSTRUCTION } from './instructions.js';
import { buildIdlePromptSpec, buildIdlePromptWithStructure } from './idle.js';
⋮----
strategy: 'STANDARD_ICT', // setup.strategy is always STANDARD_ICT
signalFamily: 'SMT_REVERSAL', // signalFamily drives SMT prompt
```

## File: src/modules/analyzer/prompts/idle.ts
```typescript
import { compressReasoning } from './utils.js';
import { renderPrompt } from './renderer.js';
import { IDLE_RESPONSE_SCHEMA } from './schema-registry.js';
import { conditionalTextSection, joinPromptLines, textSection } from './section-helpers.js';
import { definePromptSpec, type PromptSpec } from './spec.js';
⋮----
/**
 * 空仓分析 Prompt 模板 (带结构检测)
 */
export type IdlePromptParams = {
    symbol: string;
    lastDecision: string;
    lastReasoning: string;
    watchedLevels: number[];
    currentPrice: number;
    structureSummary: string;  // 代码检测结果摘要
    strategy?: string; // 策略参数
    signalFamily?: string; // setup 的 signalFamily（用于区分 SMT_REVERSAL 等非策略级路由）
    geminiNarrative?: {  // Gemini 视觉叙事（可选）
        h4Narrative: string;
        h1Narrative: string;
        m15Narrative: string;
        overallBias: string;
        keyObservations: string[];
        tradeOpportunity?: string;
    } | null;
};
⋮----
structureSummary: string;  // 代码检测结果摘要
strategy?: string; // 策略参数
signalFamily?: string; // setup 的 signalFamily（用于区分 SMT_REVERSAL 等非策略级路由）
geminiNarrative?: {  // Gemini 视觉叙事（可选）
⋮----
function buildIdlePromptContext(params: IdlePromptParams)
⋮----
export function buildIdlePromptSpec(params: IdlePromptParams): PromptSpec<IdlePromptParams>
⋮----
export function buildIdlePromptWithStructure(params: IdlePromptParams): string
⋮----
// 保留旧版本兼容
export function buildIdlePrompt(params: {
    symbol: string;
    lastDecision: string;
    lastReasoning: string;
    watchedLevels: number[];
    currentPrice: number;
    marketDataSummary: string;
}): string
⋮----
// 转发到新版本
```

## File: src/modules/analyzer/prompts/index.ts
```typescript
export * from './open-band-reversion.js';      // Band Reversion 持仓管理
⋮----
export * from './vision-narrative.js';         // 视觉叙事
export * from './vision-risk.js';              // 视觉风控（否决/复核）
export * from './text-decision.js';       // DeepSeek 决策
export * from './heartbeat.js';      // 心跳更新
export { compressReasoning, compressStructureSummary } from './utils.js'; // 导出 helper
```

## File: src/modules/analyzer/prompts/instructions.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import {
    AI_DISPLACEMENT_ENTRY_SYSTEM_INSTRUCTION,
    PENDING_SYSTEM_INSTRUCTION,
    SNIPER_SYSTEM_INSTRUCTION,
    STANDARD_SYSTEM_INSTRUCTION,
    TURTLE_SOUP_INSTRUCTION,
} from './instructions.js';
```

## File: src/modules/analyzer/prompts/instructions.ts
```typescript
import { renderPromptSchemaExample } from './renderer.js';
import {
    A_GRADE_FALLBACK_RESPONSE_SCHEMA,
    AI_DISPLACEMENT_ENTRY_RESPONSE_SCHEMA,
    HEARTBEAT_RESPONSE_SCHEMA,
    IDLE_RESPONSE_SCHEMA,
    OPEN_RESPONSE_SCHEMA,
    PENDING_RESPONSE_SCHEMA,
    SNIPER_RESPONSE_SCHEMA,
} from './schema-registry.js';
⋮----
function renderJsonOutputRule(schemaText: string, suffix?: string): string
⋮----
function renderJsonSchemaBlock(schema: Parameters<typeof renderPromptSchemaExample>[0]): string
⋮----
export function getSystemInstruction(strategy: string = 'STANDARD_ICT'): string
⋮----
/**
 * 挂单分析指令
 * 用于 PENDING 状态的挂单确认分析
 */
⋮----
/**
 * 持仓管理指令
 * 用于 OPEN 状态的持仓管理分析
 */
⋮----
/**
 * 狙击入场指令
 * 用于 SNIPER 模式的入场分析
 */
⋮----
/**
 * A 级信号风控拦截后的复核指令
 * 用于 A 级高质量信号被规则拦截后的二次优化分析
 */
⋮----
/**
 * AI_DISPLACEMENT 独立入场指令
 * 与 A_GRADE_FALLBACK/SNIPER 完全分离。
 */
⋮----
/**
 * 综合决策指令 - 纯文本模式
 * 用于 analyzeDecision 的文本分析（无视觉叙事）
 */
⋮----
/**
 * 综合决策指令 - 双脑模式
 * 用于 analyzeDecision 的双脑分析（有 Gemini 视觉叙事）
 */
⋮----
/**
 * 心跳分析指令
 * 用于轻量级市场更新（不发送图表）
 */
```

## File: src/modules/analyzer/prompts/misc-prompt-dsl.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { buildHeartbeatPromptSpec } from './heartbeat.js';
import { renderPrompt } from './renderer.js';
import { buildReversalAnalysisPromptSpec } from './reversal.js';
import { buildAIReasonerDecisionPromptSpec } from './text-decision.js';
import { buildVisionNarrativePromptSpec } from './vision-narrative.js';
```

## File: src/modules/analyzer/prompts/open-band-reversion.ts
```typescript
import { renderPrompt } from './renderer.js';
import { OPEN_RESPONSE_SCHEMA } from './schema-registry.js';
import { joinPromptLines, optionalTextSection, textSection } from './section-helpers.js';
import { definePromptSpec, type PromptSpec } from './spec.js';
⋮----
/**
 * Band Reversion 持仓管理 Prompt
 *
 * 专用于 BAND_REVERSION 策略的持仓 AI 分析。
 * 与标准 ICT 的 open.ts 不同，本策略的核心是均值回归，
 * 止盈目标更近（VWAP / 中轨），持仓时间更短，不追趋势延伸。
 */
export type OpenBandReversionPromptParams = {
    symbol: string;
    direction: 'LONG' | 'SHORT';
    entryPrice: number;
    slPrice: number;
    tp1Price: number;   // Session VWAP
    tp2Price: number;   // BB 中轨
    currentPrice: number;
    pnlR: number;
    holdingMinutes: number;
    structureSummary: string;
    bbUpper?: number;
    bbMiddle?: number;
    bbLower?: number;
    sessionVwap?: number;
    rangeModeActive?: boolean;
    vwapCrossCount?: number;
};
⋮----
tp1Price: number;   // Session VWAP
tp2Price: number;   // BB 中轨
⋮----
function deriveOpenBandReversionContext(params: OpenBandReversionPromptParams)
⋮----
function buildOpenBandReversionHoldingSection(
    params: OpenBandReversionPromptParams,
    context: ReturnType<typeof deriveOpenBandReversionContext>,
): string
⋮----
function buildOpenBandReversionMarketContext(
    params: OpenBandReversionPromptParams,
    context: ReturnType<typeof deriveOpenBandReversionContext>,
): string
⋮----
function buildOpenBandReversionPrinciples(): string
⋮----
function buildOpenBandReversionRules(): string
⋮----
function buildOpenBandReversionTaskSection(): string
⋮----
export function buildOpenBandReversionPromptSpec(params: OpenBandReversionPromptParams): PromptSpec<OpenBandReversionPromptParams>
⋮----
export function buildOpenBandReversionPrompt(params: OpenBandReversionPromptParams): string
```

## File: src/modules/analyzer/prompts/open.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { buildOpenBandReversionPromptSpec } from './open-band-reversion.js';
import { buildOpenTurtleSoupPromptSpec } from './open-turtle-soup.js';
import { buildManagedOpenPrompt, buildManagedOpenPromptSpec, buildOpenPrompt } from './open.js';
```

## File: src/modules/analyzer/prompts/pending.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { PENDING_SYSTEM_INSTRUCTION } from './instructions.js';
import { buildPendingPrompt, buildPendingPromptSpec } from './pending.js';
```

## File: src/modules/analyzer/prompts/pending.ts
```typescript
import { renderPrompt } from './renderer.js';
import { PENDING_RESPONSE_SCHEMA } from './schema-registry.js';
import { textSection } from './section-helpers.js';
import { definePromptSpec, type PromptSpec } from './spec.js';
⋮----
/**
 * 挂单确认 Prompt 模板
 */
export type PendingPromptParams = {
    symbol: string;
    direction: 'LONG' | 'SHORT';
    entryLogic: string;
    entryPrice: number;
    slPrice: number;
    minutesPassed: number;
    currentPrice: number;
    structureSummary: string;
    keyCandlesContext?: string;
};
⋮----
export function buildPendingPromptSpec(params: PendingPromptParams): PromptSpec<PendingPromptParams>
⋮----
export function buildPendingPrompt(params: PendingPromptParams): string
```

## File: src/modules/analyzer/prompts/renderer.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { definePromptSpec } from './spec.js';
import { renderPrompt, renderPromptSchemaExample } from './renderer.js';
```

## File: src/modules/analyzer/prompts/renderer.ts
```typescript
import type { PromptRule, PromptSchema, PromptSection, PromptSpec } from './spec.js';
⋮----
function renderRule<Context>(rule: PromptRule<Context>, context: Context): string
⋮----
function renderSection<Context>(section: PromptSection<Context>, context: Context): string | null
⋮----
function renderPromptSchemaLines(schema: PromptSchema, indentLevel = 1): string[]
⋮----
export function renderPromptSchemaExample(schema: PromptSchema): string
⋮----
export function renderPrompt<Context>(spec: PromptSpec<Context>, context: Context):
```

## File: src/modules/analyzer/prompts/reversal.ts
```typescript
import { renderPrompt } from './renderer.js';
import { REVERSAL_RESPONSE_SCHEMA } from './schema-registry.js';
import { joinPromptLines, textSection } from './section-helpers.js';
import { definePromptSpec, type PromptSpec } from './spec.js';
⋮----
/**
 * 反向工程分析 Prompt - 失效信号陷阱判断
 */
export type ReversalAnalysisPromptParams = {
    symbol: string;
    currentPrice: number;
    originalDirection: 'LONG' | 'SHORT';
    originalEntryZone: { type: 'FVG' | 'OB'; top: number; bottom: number };
    zoneBreakPrice: number;     // M15 穿透入场区的收盘价
    reverseDispMagnitude?: number;  // 反向 Displacement 强度 (如果有)
    structureSummary: string;
};
⋮----
zoneBreakPrice: number;     // M15 穿透入场区的收盘价
reverseDispMagnitude?: number;  // 反向 Displacement 强度 (如果有)
⋮----
function deriveReversalContext(params: ReversalAnalysisPromptParams)
⋮----
export function buildReversalAnalysisPromptSpec(params: ReversalAnalysisPromptParams): PromptSpec<ReversalAnalysisPromptParams>
⋮----
export function buildReversalAnalysisPrompt(params: ReversalAnalysisPromptParams): string
```

## File: src/modules/analyzer/prompts/schema-registry.ts
```typescript
import type { PromptSchema } from './spec.js';
```

## File: src/modules/analyzer/prompts/section-helpers.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { conditionalTextSection, joinPromptLines, optionalTextSection, textSection } from './section-helpers.js';
```

## File: src/modules/analyzer/prompts/section-helpers.ts
```typescript
import type { PromptSection } from './spec.js';
⋮----
type PromptLine = string | null | undefined | false;
⋮----
export function joinPromptLines(lines: PromptLine[]): string
⋮----
export function textSection<Context>(title: string, body: string): PromptSection<Context>
⋮----
export function optionalTextSection<Context>(title: string, body: PromptLine): PromptSection<Context>[]
⋮----
export function conditionalTextSection<Context>(
    title: string,
    when: (context: Context) => boolean,
    body: (context: Context) => string,
): PromptSection<Context>
```

## File: src/modules/analyzer/prompts/sniper.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { SniperEntryResponse } from '../../../types/ai-response.js';
import { SNIPER_SYSTEM_INSTRUCTION } from './instructions.js';
import { buildSniperEntryPrompt, buildSniperEntryPromptSpec } from './sniper.js';
```

## File: src/modules/analyzer/prompts/sniper.ts
```typescript
import { renderPrompt } from './renderer.js';
import { SNIPER_RESPONSE_SCHEMA } from './schema-registry.js';
import { joinPromptLines, optionalTextSection, textSection } from './section-helpers.js';
import { definePromptSpec, type PromptSpec } from './spec.js';
⋮----
/**
 * 狙击入场确认 Prompt - M5 精准入场分析
 */
export type SniperPromptParams = {
   symbol: string;
   currentPrice: number;
   direction: 'LONG' | 'SHORT';
   entryZone: { type: 'FVG' | 'OB'; top: number; bottom: number };
   m5ConfirmationSignal: string;  // e.g., "MSS bullish" or "Displacement 1.5x ATR"
   m15DisplacementMagnitude: number;
   structureSummary: string;
   recentCandles?: string;  // 多周期 K 线数据
   structureBreakType?: 'MSS' | 'BOS';  // 原始信号类型 (MSS 反转 / BOS 顺势)
   orderType?: 'MARKET' | 'LIMIT';  // [新增] 订单类型
   higherTfContext?: string;
   visionNarrativeContext?: string;
   signalFamily?: 'SWEEP_SFP' | 'BAND_REVERSION' | 'BAND_REVERSION_SOFT' | 'VWAP_BOUNCE' | string;
   strategyRoute?: 'TREND' | 'HYBRID' | 'CONSOLIDATION' | string;
   rangeModeActive?: boolean;
   rangeModeReason?: string;
};
⋮----
m5ConfirmationSignal: string;  // e.g., "MSS bullish" or "Displacement 1.5x ATR"
⋮----
recentCandles?: string;  // 多周期 K 线数据
structureBreakType?: 'MSS' | 'BOS';  // 原始信号类型 (MSS 反转 / BOS 顺势)
orderType?: 'MARKET' | 'LIMIT';  // [新增] 订单类型
⋮----
function deriveSniperPromptContext(params: SniperPromptParams)
⋮----
function buildSniperBackgroundSection(params: SniperPromptParams, context: ReturnType<typeof deriveSniperPromptContext>): string
⋮----
function buildSniperStateSection(params: SniperPromptParams, context: ReturnType<typeof deriveSniperPromptContext>): string
⋮----
function buildSniperFamilyConstraints(): string
⋮----
function buildSniperTaskSection(context: ReturnType<typeof deriveSniperPromptContext>): string
⋮----
function buildSniperExecutionTriggerSection(context: ReturnType<typeof deriveSniperPromptContext>): string
⋮----
function buildSniperReactionSection(): string
⋮----
function buildSniperEntryPricingSection(): string
⋮----
function buildSniperStopSection(): string
⋮----
function buildSniperUserSchemaSection(context: ReturnType<typeof deriveSniperPromptContext>)
⋮----
export function buildSniperEntryPromptSpec(params: SniperPromptParams): PromptSpec<SniperPromptParams>
⋮----
export function buildSniperEntryPrompt(params: SniperPromptParams): string
```

## File: src/modules/analyzer/prompts/spec.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { definePromptSpec, type PromptSpec } from './spec.js';
⋮----
type Context = { symbol: string; includeRisk: boolean };
```

## File: src/modules/analyzer/prompts/spec.ts
```typescript
export type PromptMode =
    | 'IDLE'
    | 'PENDING'
    | 'OPEN'
    | 'SNIPER'
    | 'A_GRADE_FALLBACK'
    | 'AI_DISPLACEMENT'
    | 'REVERSAL'
    | 'HEARTBEAT'
    | 'VISION_NARRATIVE'
    | 'TEXT_DECISION';
⋮----
export type PromptSchemaField = {
    key: string;
    description: string;
    optional?: boolean;
    schema?: PromptSchema;
};
⋮----
export type PromptSchema = {
    rootType: 'object';
    fields: PromptSchemaField[];
};
⋮----
export type PromptRule<Context> = string | ((context: Context) => string);
⋮----
export type PromptSection<Context> = {
    title?: string;
    when?: (context: Context) => boolean;
    render: (context: Context) => string | null | undefined;
};
⋮----
export type PromptSpec<Context> = {
    metadata: {
        mode: PromptMode;
        family?: string;
        name: string;
    };
    schema: PromptSchema;
    systemRules: PromptRule<Context>[];
    sections: PromptSection<Context>[];
    userSchemaSection?: false | {
        title?: string;
        body?: string;
        footer?: string;
    };
};
⋮----
export function definePromptSpec<Context>(spec: PromptSpec<Context>): PromptSpec<Context>
```

## File: src/modules/analyzer/prompts/text-decision.ts
```typescript
import { renderPrompt } from './renderer.js';
import { TEXT_DECISION_RESPONSE_SCHEMA } from './schema-registry.js';
import { joinPromptLines, textSection } from './section-helpers.js';
import { definePromptSpec, type PromptSpec } from './spec.js';
⋮----
/**
 * AI 推理决策 Prompt - 综合分析并做出最终决策
 */
export type AIReasonerDecisionPromptParams = {
    symbol: string;
    currentPrice: number;
    structureSummary: string;
    geminiNarrative: {
        h4Narrative: string;
        h1Narrative: string;
        m15Narrative: string;
        overallBias: string;
        keyObservations: string[];
        tradeOpportunity?: string;
    } | null;
    recentCandles: string;
    mode?: 'IDLE' | 'PENDING' | 'OPEN';
    contextData?: any;
};
⋮----
type TextDecisionDerivedContext = {
    mode: 'IDLE' | 'PENDING' | 'OPEN';
    contextJson: string;
    sourceTwoTitle: string;
    sourceTwoBody: string;
    sourceThreeBody: string;
    decisionRulesBody: string;
    taskBody: string;
    outputFormat: string;
    outputFooter: string;
};
⋮----
function buildSourceTwoContext(params: AIReasonerDecisionPromptParams): Pick<TextDecisionDerivedContext, 'sourceTwoTitle' | 'sourceTwoBody'>
⋮----
function buildSourceThreeBody(params: AIReasonerDecisionPromptParams): string
⋮----
function buildDecisionRulesBody(params: AIReasonerDecisionPromptParams): string
⋮----
function buildPendingTaskBody(): Pick<TextDecisionDerivedContext, 'taskBody' | 'outputFormat' | 'outputFooter'>
⋮----
function buildOpenTaskBody(params: AIReasonerDecisionPromptParams): Pick<TextDecisionDerivedContext, 'taskBody' | 'outputFormat' | 'outputFooter'>
⋮----
function buildIdleTaskBody(): Pick<TextDecisionDerivedContext, 'taskBody' | 'outputFormat' | 'outputFooter'>
⋮----
function deriveTextDecisionContext(params: AIReasonerDecisionPromptParams): TextDecisionDerivedContext
⋮----
export function buildAIReasonerDecisionPromptSpec(params: AIReasonerDecisionPromptParams): PromptSpec<AIReasonerDecisionPromptParams>
⋮----
export function buildAIReasonerDecisionPrompt(params: AIReasonerDecisionPromptParams): string
```

## File: src/modules/analyzer/prompts/utils.ts
```typescript
/**
 * 智能压缩 reasoning：提取关键交易信息，移除冗余描述
 * 保留：方向、信号类型、关键价位、评分等级、核心判断
 * 移除：重复的叙事描述、图表分析细节
 */
export function compressReasoning(reasoning: string): string
⋮----
// 1. 提取方向判断
⋮----
// 2. 提取信号类型 (MSS/BOS/SFP)
⋮----
// 3. 提取评分等级
⋮----
// 4. 提取关键价位 (入场区、止损、目标)
⋮----
// 5. 提取 Displacement 强度
⋮----
// 6. 提取核心判断（如果有明确的结论句）
⋮----
// 如果提取到了关键信息，返回压缩版本
⋮----
// 否则返回前 300 字符 + 提示
⋮----
type SummaryCompressionMode = 'managed' | 'heartbeat';
⋮----
/**
 * 压缩结构摘要，优先保留可触发决策的关键段落，降低 token 消耗。
 */
export function compressStructureSummary(
    summary: string,
    mode: SummaryCompressionMode = 'managed',
): string
⋮----
// 头部标题（如 "=== 代码检测结果 ==="）直接保留
```

## File: src/modules/analyzer/prompts/vision-narrative.ts
```typescript
import { renderPrompt } from './renderer.js';
import { VISION_NARRATIVE_RESPONSE_SCHEMA } from './schema-registry.js';
import { joinPromptLines, textSection } from './section-helpers.js';
import { definePromptSpec, type PromptSpec } from './spec.js';
⋮----
/**
 * AI 视觉叙事 Prompt - 用于描述图表"故事"
 */
export type VisionNarrativePromptParams = {
    symbol: string;
    currentPrice: number;
};
⋮----
export function buildVisionNarrativePromptSpec(params: VisionNarrativePromptParams): PromptSpec<VisionNarrativePromptParams>
⋮----
export function buildVisionNarrativePrompt(params: VisionNarrativePromptParams): string
```

## File: src/modules/analyzer/prompts/vision-risk.ts
```typescript
/**
 * 视觉风控 Prompt 模板
 * - 入场前视觉否决层
 * - OPEN 风险事件视觉复核
 */
⋮----
export function buildVisionEntryVetoPrompt(params: {
    symbol: string;
    signalGrade: 'A' | 'B';
    direction: 'LONG' | 'SHORT';
    currentPrice: number;
    entryPrice: number;
    stopLoss: number;
    tp1: number;
    tp2?: number;
    tp3?: number;
    displacementMagnitude?: number;
    structureSummary: string;
}): string
⋮----
export function buildOpenVisionRiskReviewPrompt(params: {
    symbol: string;
    direction: 'LONG' | 'SHORT';
    currentPrice: number;
    entryPrice: number;
    stopLoss: number;
    tp3: number;
    pnlR: number;
    triggerReason: string;
    structureSummary: string;
}): string
```

## File: src/modules/analyzer/text-clients/deepseek-client.ts
```typescript
/**
 * DeepSeek API Client
 * 使用 OpenAI 兼容接口调用 DeepSeek V3
 */
⋮----
import { logger } from '../../../utils/index.js';
import type { CloudLoggerLike } from '../../../utils/cloud-logger-types.js';
import type { LogEntry } from '../../../utils/log-entry.js';
import { extractSymbolFromPrompt } from '../../../utils/symbol-extractor.js';
⋮----
export interface DeepSeekConfig {
    apiKey: string;
    model?: string;
    maxTokens?: number;
    temperature?: number;
    cloudLogger?: CloudLoggerLike;
}
⋮----
export interface DeepSeekResult<T> {
    success: boolean;
    data?: T;
    error?: string;
    rawResponse?: string;
}
⋮----
export class DeepSeekClient
⋮----
constructor(config: DeepSeekConfig)
⋮----
this.model = config.model || 'deepseek-reasoner'; // DeepSeek V3
⋮----
/**
     * 发送消息并获取 JSON 响应 (带重试机制)
     */
async chat<T>(
        systemPrompt: string,
        userPrompt: string,
        chartImages?: Array<{ base64: string; mimeType: string }>,
        logType?: LogEntry['type'],
        traceId?: string,
): Promise<DeepSeekResult<T>>
⋮----
// 注意: deepseek-reasoner 不支持 temperature, top_p 等参数
// 只有非 reasoner 模型才传 temperature
⋮----
response_format: { type: 'json_object' }, // 强制 JSON 输出
⋮----
// 继续重试
⋮----
reasoning_content?: string;  // DeepSeek Reasoner CoT
⋮----
// 继续重试
⋮----
// 获取思考过程 (DeepSeek Reasoner)
⋮----
// 解析 JSON
⋮----
// 异步保存日志到 CloudLogger
⋮----
// 如果没传 logType，尝试从 prompt 中猜测 (兼容旧逻辑)
⋮----
// 支持中英文模式匹配
⋮----
// 默认为 UNKNOWN
⋮----
type: type as any, // Cast to match LogEntry['type']
⋮----
images: chartImages || [], // 传入图表截图供日志保存
⋮----
// 所有重试都失败
```

## File: src/modules/analyzer/text-clients/qwen-client.ts
```typescript
/**
 * Qwen (通义千问) 分析客户端
 * 使用阿里云百炼 OpenAI 兼容接口
 */
⋮----
import { logger } from '../../../utils/index.js';
import type { CloudLoggerLike } from '../../../utils/cloud-logger-types.js';
import type { LogEntry } from '../../../utils/log-entry.js';
import { extractSymbolFromPrompt } from '../../../utils/symbol-extractor.js';
⋮----
interface QwenConfig {
    apiKey: string;
    model?: string;
    maxTokens?: number;
    temperature?: number;
    cloudLogger?: CloudLoggerLike;
}
⋮----
interface QwenResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    rawResponse?: string;
}
⋮----
export class QwenClient
⋮----
constructor(config: QwenConfig)
⋮----
this.model = config.model || 'qwen3-max';  // qwen3-max, qwen-plus, qwen-turbo
⋮----
/**
     * 发送消息并获取 JSON 响应 (带重试机制)
     * @param chartImages 图片参数 (Qwen 文本分析不消费图片，但会写入 Cloud Logs)
     */
async chat<T>(
        systemPrompt: string,
        userPrompt: string,
        chartImages?: Array<{ base64: string; mimeType: string }>,
        logType?: LogEntry['type'],
        traceId?: string,
): Promise<QwenResponse<T>>
⋮----
response_format: { type: 'json_object' }, // 强制 JSON 输出
⋮----
// 继续重试
⋮----
// 继续重试
⋮----
// 解析 JSON
⋮----
// 异步保存日志到 CloudLogger
⋮----
// 如果没传 logType，尝试从 prompt 中猜测 (兼容旧逻辑)
⋮----
// 后台保存日志，不阻塞响应
⋮----
// Keep full prompt to avoid truncating structure summary in Cloud Logs.
⋮----
// Persist parsed JSON payload for readability and stable downstream parsing.
⋮----
// Qwen text mode still gets chart snapshots from upstream scheduler.
```

## File: src/modules/analyzer/text-clients/zai-client.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { ZaiClient } from './zai-client.js';
```

## File: src/modules/analyzer/text-clients/zai-client.ts
```typescript
/**
 * Z AI 分析客户端
 * 文档: https://docs.z.ai/guides/develop/http/introduction
 * Endpoint: https://api.z.ai/api/paas/v4/
 */
⋮----
import { logger } from '../../../utils/index.js';
import type { CloudLoggerLike } from '../../../utils/cloud-logger-types.js';
import type { LogEntry } from '../../../utils/log-entry.js';
import { extractSymbolFromPrompt } from '../../../utils/symbol-extractor.js';
⋮----
interface ZaiConfig {
    apiKey: string;
    model?: string;
    maxTokens?: number;
    temperature?: number;
    cloudLogger?: CloudLoggerLike;
}
⋮----
interface ZaiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    rawResponse?: string;
}
⋮----
export class ZaiClient
⋮----
constructor(config: ZaiConfig)
⋮----
this.model = config.model || 'glm-5';  // 默认模型
⋮----
/**
     * 发送消息并获取 JSON 响应 (带重试机制)
     * @param systemPrompt 系统提示词
     * @param userPrompt 用户提示词
     * @param chartImages 图片参数（仅用于 Cloud Logs 保存，不发送给模型）
     * @param logType 日志类型
     */
async chat<T>(
        systemPrompt: string,
        userPrompt: string,
        chartImages?: Array<{ base64: string; mimeType: string }>,
        logType?: LogEntry['type'],
        traceId?: string,
): Promise<ZaiResponse<T>>
⋮----
// 文本分析模式：仅发送纯文本 prompt，避免多模态成本和延迟波动。
⋮----
// 解析 JSON
⋮----
// 异步保存日志到 CloudLogger
```

## File: src/modules/analyzer/utils/key-candle-context.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { buildManagedKeyCandleContextBlock } from './key-candle-context.js';
```

## File: src/modules/analyzer/utils/key-candle-context.ts
```typescript
import type { CandleWithIndicators, MultiTimeframeData } from '../../../types/index.js';
⋮----
function resolvePriceDigits(price: number): number
⋮----
function formatCompactVolume(volume: number): string
⋮----
function formatUtcTime(timestamp: number): string
⋮----
function formatCandleLine(candle: CandleWithIndicators, priceDigits: number): string
⋮----
function formatCandleSection(
    label: 'H1' | 'M15' | 'M5',
    candles: CandleWithIndicators[],
    priceDigits: number,
): string
⋮----
function takeTrailingCandles(candles: CandleWithIndicators[], count: number): CandleWithIndicators[]
⋮----
export function buildManagedKeyCandleContextBlock(input: {
    marketData: MultiTimeframeData;
    reasons: string[];
    h1Count: number;
    m15Count: number;
    m5Count: number;
}): string
```

## File: src/modules/analyzer/utils/turtle-soup.ts
```typescript
import type { CandleWithIndicators } from '../../../types/index.js';
import type { ActiveTrade } from '../../../types/trading-state.js';
⋮----
interface TurtleSoupDiagnostics {
    summary: string;
    failureRisk: boolean;
    hasStrongRecovery: boolean;
    stuckNearEntry: boolean;
}
⋮----
export function analyzeTurtleSoupState(params: {
    trade: ActiveTrade;
    m15Candles: CandleWithIndicators[];
    currentPrice: number;
    holdingMinutes: number;
}): TurtleSoupDiagnostics
```

## File: src/modules/analyzer/vision-clients/gemini-vision-client.ts
```typescript
/**
 * Gemini 视觉分析客户端（Vision-only）
 * 与 ZAI 视觉客户端保持一致：仅负责视觉叙事与结构化视觉风控输出
 */
⋮----
import { GoogleGenerativeAI, type GenerativeModel, type Part } from '@google/generative-ai';
import type {
    AIVisualNarrative,
    ParsedAIResponse,
} from '../../../types/index.js';
import { logger } from '../../../utils/index.js';
import type { CloudLoggerLike } from '../../../utils/cloud-logger-types.js';
import type { LogEntry } from '../../../utils/log-entry.js';
import { extractSymbolFromPrompt } from '../../../utils/symbol-extractor.js';
⋮----
interface GeminiVisionClientConfig {
    apiKey: string;
    modelName?: string;
    temperature?: number;
    maxOutputTokens?: number;
    cloudLogger?: CloudLoggerLike;
}
⋮----
type VisionImage = { base64: string; mimeType: string };
⋮----
/**
 * Gemini 视觉客户端
 * 只处理多模态视觉分析，不承担通用文本决策任务。
 */
export class GeminiVisionClient
⋮----
constructor(config: GeminiVisionClientConfig)
⋮----
async analyzeNarrative(
        prompt: string,
        chartImages: VisionImage[],
        traceId?: string,
): Promise<ParsedAIResponse<AIVisualNarrative>>
⋮----
async analyzeStructured<T>(
        prompt: string,
        chartImages: VisionImage[],
        logType: LogEntry['type'] = 'MARKET_DECISION',
        traceId?: string,
): Promise<ParsedAIResponse<T>>
⋮----
private getModel(systemInstruction: string): GenerativeModel
⋮----
private parseJson<T>(content: string): T | null
⋮----
// continue
⋮----
private stripMarkdownCodeFence(content: string): string
⋮----
export function createGeminiVisionClient(
    apiKey: string,
    cloudLogger?: CloudLoggerLike,
    modelName?: string,
): GeminiVisionClient
```

## File: src/modules/analyzer/vision-clients/zai-vision-client.ts
```typescript
/**
 * Z AI 视觉叙事客户端
 * 使用 chat/completions 多模态输入（image_url + text）生成结构化叙事
 */
⋮----
import type { AIVisualNarrative, ParsedAIResponse } from '../../../types/index.js';
import type { CloudLoggerLike } from '../../../utils/cloud-logger-types.js';
import type { LogEntry } from '../../../utils/log-entry.js';
import { logger } from '../../../utils/index.js';
import { extractSymbolFromPrompt } from '../../../utils/symbol-extractor.js';
⋮----
interface ZaiVisionClientConfig {
    apiKey: string;
    model?: string;
    maxTokens?: number;
    temperature?: number;
    cloudLogger?: CloudLoggerLike;
}
⋮----
type VisionImage = { base64: string; mimeType: string };
⋮----
export class ZaiVisionClient
⋮----
constructor(config: ZaiVisionClientConfig)
⋮----
async analyzeNarrative(
        prompt: string,
        chartImages: VisionImage[],
        traceId?: string,
): Promise<ParsedAIResponse<AIVisualNarrative>>
⋮----
async analyzeStructured<T>(
        prompt: string,
        chartImages: VisionImage[],
        logType: LogEntry['type'] = 'MARKET_DECISION',
        traceId?: string,
): Promise<ParsedAIResponse<T>>
⋮----
// ZAI 文档说明 image_url.url 支持 URL 或 Base64 编码
⋮----
private parseJson<T>(content: string): T | null
⋮----
// continue
⋮----
private stripMarkdownCodeFence(content: string): string
⋮----
export function createZaiVisionClient(
    apiKey: string,
    cloudLogger?: CloudLoggerLike,
    model?: string
): ZaiVisionClient
```

## File: src/modules/analyzer/trace-id.test.ts
```typescript
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Analyzer } from './index.js';
import { DeepSeekClient } from './text-clients/deepseek-client.js';
```

## File: src/modules/data-fetcher/canvas-chart.test.ts
```typescript
import { describe, expect, test } from 'vitest';
import { resolveEntryMarkerLabelY } from './canvas-chart.js';
⋮----
// candleLow=100 maps to y=173.33..., bullish label should be lower (larger y)
⋮----
// candleHigh=110 maps to y=106.66..., bearish label should be higher (smaller y)
```

## File: src/modules/data-fetcher/canvas-chart.ts
```typescript
/**
 * Canvas 图表渲染器
 * 使用 satori + resvg 在 Node 内直接生成 K 线图 PNG
 * 
 * 优势：
 * - 无配额限制，按需生成
 * - 50-200ms 响应速度
 * - 完全干净的图表，无广告/按钮干扰
 * - AI 分析友好
 */
⋮----
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import type { ChartSnapshot, CandleWithIndicators } from '../../types/index.js';
import { logger } from '../../utils/index.js';
import { ROBOTO_MONO_BASE64 } from '../../utils/font-data.js';
⋮----
// K 线图配置
⋮----
// K 线图配置
⋮----
bullish: '#26a69a',  // 涨 - 绿色
bearish: '#ef5350',  // 跌 - 红色
ema20: '#2196F3',    // 蓝色
ema50: '#FF9800',    // 橙色
fvg: 'rgba(33, 150, 243, 0.15)',   // FVG 区域 - 淡蓝
ob: 'rgba(156, 39, 176, 0.15)',    // OB 区域 - 淡紫
sweepHigh: '#ef5350',  // 扫高点 - 红色
sweepLow: '#26a69a',   // 扫低点 - 绿色
mss: '#FFD700',        // MSS - 金色
bos: '#00BFFF',        // BOS - 天蓝色
liquidity: 'rgba(255, 235, 59, 0.2)', // 流动性区域 - 淡黄
fvgBullish: 'rgba(38, 166, 154, 0.2)', // FVG 涨 - 绿透明
fvgBearish: 'rgba(239, 83, 80, 0.2)',  // FVG 跌 - 红透明
obBox: 'rgba(103, 58, 183, 0.3)',      // OB - 深紫透明 (区分度更高)
zigzag: '#AB47BC',     // ZigZag - 紫色
fractalUp: '#26a69a',  // Fractal Up (Low) - 绿色
fractalDown: '#ef5350' // Fractal Down (High) - 红色
⋮----
export interface StructureBreak {
    price: number;
    time: number;
    type: 'MSS' | 'BOS';
    direction: 'bullish' | 'bearish';
    timeframe?: 'H4' | 'M15' | 'M5';  // 可选：来源时间框架
}
⋮----
timeframe?: 'H4' | 'M15' | 'M5';  // 可选：来源时间框架
⋮----
export interface LiquidityZone {
    top: number;
    bottom: number;
    start: number;
    end?: number;
    type: 'buyside' | 'sellside';
    label?: string;  // 可选：标签 (PDH/PWH/EQH 等)
}
⋮----
label?: string;  // 可选：标签 (PDH/PWH/EQH 等)
⋮----
export interface ChartIndicators {
    ema20?: Array<{ time: number; value: number }>;
    ema50?: Array<{ time: number; value: number }>;
    fvgZones?: Array<{
        start: number;
        end?: number;
        top: number;
        bottom: number;
        type: 'bullish' | 'bearish';
        timeframe?: 'H4' | 'M15' | 'M5';  // 可选：来源时间框架
        inverted?: boolean;  // 可选：是否为 IFVG
    }>;
    obZones?: Array<{
        start: number;
        end?: number;
        top: number;
        bottom: number;
        type: 'bullish' | 'bearish';
        timeframe?: 'H4' | 'M15' | 'M5';  // 可选：来源时间框架
        respected?: boolean;  // 可选：是否已被测试
    }>;
    structureBreaks?: StructureBreak[];
    liquidityZones?: LiquidityZone[];
    swingHighs?: number[];  // 摆动高点价格
    swingLows?: number[];   // 摆动低点价格
    horizontalLines?: Array<{ price: number; label: string; color?: string }>;
    entryMarkers?: Array<{
        time: number;
        price: number;
        label?: string;
        direction?: 'bullish' | 'bearish';
        color?: string;
    }>;
    contextLines?: string[];
}
⋮----
timeframe?: 'H4' | 'M15' | 'M5';  // 可选：来源时间框架
inverted?: boolean;  // 可选：是否为 IFVG
⋮----
timeframe?: 'H4' | 'M15' | 'M5';  // 可选：来源时间框架
respected?: boolean;  // 可选：是否已被测试
⋮----
swingHighs?: number[];  // 摆动高点价格
swingLows?: number[];   // 摆动低点价格
⋮----
interface MarkerPlacementInput {
    markerDirection?: 'bullish' | 'bearish';
    markerPrice: number;
    candleHigh?: number;
    candleLow?: number;
    minPrice: number;
    maxPrice: number;
    chartHeight: number;
    paddingTop: number;
}
⋮----
export function resolveEntryMarkerLabelY(input: MarkerPlacementInput): number
⋮----
// B 在 K 线下方，S 在 K 线上方
⋮----
interface ChartData {
    symbol: string;
    interval: string;
    candles: CandleWithIndicators[];
    indicators?: ChartIndicators;
}
⋮----
/**
 * 计算 EMA (指数移动平均线)
 */
function calculateEMA(
    candles: CandleWithIndicators[],
    period: number
): Array<
⋮----
// 初始 SMA
⋮----
// 后续 EMA
⋮----
/**
 * 将价格映射到 Y 坐标
 */
function priceToY(price: number, minPrice: number, maxPrice: number, chartHeight: number): number
⋮----
/**
 * 计算 Williams Fractals
 * 5 根 K 线分形:
 * - High: 中间高点 > 左右各两根的高点
 * - Low: 中间低点 < 左右各两根的低点
 */
function calculateWilliamsFractals(candles: CandleWithIndicators[])
⋮----
// Swing High (Bearish Fractal) -> 标记在上方，红色向下箭头
⋮----
// Swing Low (Bullish Fractal) -> 标记在下方，绿色向上箭头
⋮----
/**
 * 计算 ZigZag (简单高低点连接)
 */
function calculateZigZag(candles: CandleWithIndicators[], deviationPercent: number = 0.2)
⋮----
// 寻找第一个点 (简单的局部极值初始化)
// 这里使用简化逻辑：只记录显著的转折点
// 实际 ZigZag 需要回溯更新，这里实现一个单次遍历的近似算法
⋮----
// 在上升趋势中，更新高点
⋮----
// 检查是否回调超过 deviation -> 转为下降趋势
⋮----
// 确认之前的那个高点是 ZigZag 点
⋮----
} else { // trend === 'down'
// 在下降趋势中，更新低点
⋮----
// 检查是否反弹超过 deviation -> 转为上升趋势
⋮----
// 确认之前的那个低点是 ZigZag 点
⋮----
// 添加最后一个临时点
⋮----
/**
 * 生成 K 线图 SVG 元素 (用于 satori)
 */
function generateChartElement(data: ChartData): any
⋮----
// 计算每根 K 线的实际宽度
⋮----
// 计算价格范围 (仅基于可见部分)
⋮----
// 如果没有数据，默认一个范围
⋮----
// 添加 5% 边距
⋮----
// 生成 K 线元素
⋮----
// 辅助函数：根据时间获取 X 坐标
const getX = (time: number): number =>
⋮----
// 如果在左侧边界外
⋮----
// 如果在右侧边界外，进行外推
⋮----
// 在范围内，线性插值
⋮----
// 过滤已 Mitigated 的区域
const isZoneMitigated = (zone:
⋮----
// 找到区域开始后的 K 线
⋮----
// Bullish Zone (Support): 价格跌破 Bottom
⋮----
// Bearish Zone (Resistance): 价格涨破 Top
⋮----
// 筛选有效区域
⋮----
// 渲染区域通用函数
const createZoneElements = (zones: any[] = [], color: string, prefix: string, showMidLine = false) =>
⋮----
const endX = zone.end ? getX(zone.end) : (width - padding.right); // 默认延伸到最右
⋮----
// 确保区域在可视范围内
⋮----
// 计算 Y 坐标
⋮----
// ===== Y 轴边界裁剪 =====
// 确保区域不超出图表区域
⋮----
// 如果裁剪后区域无效，跳过
⋮----
// 类型特定颜色覆盖
⋮----
// 添加 50% 线和标签 (主要用于 FVG)
if (showMidLine && heightPx > 10) { // 只有足够高度才显示
⋮----
// 50% 虚线
⋮----
// 标签
⋮----
// 生成 FVG 区域 (带 50% 线)
⋮----
// 生成 OB 区域
⋮----
// 生成流动性区域
⋮----
// 生成 MSS/BOS 结构破坏线
⋮----
// 向右延伸
⋮----
// 标签和锚点 (圆圈)
⋮----
// 圆圈装饰
⋮----
// 文本
⋮----
// 起始点标记
⋮----
// 生成 K 线元素
⋮----
// 上影线
⋮----
// K 线实体
⋮----
// 下影线
⋮----
// ZigZag 和 Fractals 功能已禁用以保持图表清晰
// 如需启用，取消下方注释并在 children 数组中添加对应元素
/*
    const zigZagPoints = calculateZigZag(candles);
    const zigZagElements = zigZagPoints.map((point, i) => {
        // ... zigzag generation code
    }).filter(Boolean);

    const fractals = calculateWilliamsFractals(candles);
    const fractalElements = fractals.map((f, i) => {
        // ... fractal generation code
    }).filter(Boolean);
    */
⋮----
// 生成 EMA 线 (简化为关键点标记)
⋮----
// EMA20 - 取最后一个值显示
⋮----
// EMA50
⋮----
// 水平价格线 (支撑/阻力位)
⋮----
// 入场标记点（用于回放快照可视化）
⋮----
// 价格刻度 (右侧)
⋮----
// 时间刻度 (底部) - 强制使用 UTC
⋮----
const timeStep = 12; // 减小间隔，显示更密集的时间
⋮----
// 格式 MM-DD HH:mm
⋮----
if (x < width - padding.right - 20) { // 避免超出右边界
⋮----
transform: 'rotate(-45deg)', // 45度斜角，更易阅读
⋮----
// 当前价格标签
⋮----
// 水印标题
⋮----
// 当前价格指示器
⋮----
// 组装最终元素 - 完整版：包含所有技术指标
⋮----
// 技术指标区域 (在 K 线底层)
⋮----
// K 线主体
⋮----
// 结构和叠加层 (禁用 ZigZag 和 Fractal 以保持图表清晰)
// ...zigZagElements,
// ...fractalElements,
⋮----
// 刻度和标签
⋮----
/**
 * Canvas 图表客户端
 */
export class CanvasChartClient
⋮----
constructor()
⋮----
/**
     * 生成 K 线图截图
     */
async generateChart(data: ChartData): Promise<ChartSnapshot>
⋮----
// 生成图表元素
⋮----
// 计算元素数量（用于调试）
⋮----
// 加载字体
⋮----
// 使用 satori 将元素转换为 SVG
⋮----
// 使用 resvg 将 SVG 转换为 PNG
⋮----
// 转换为 Base64
⋮----
/**
     * 生成多周期图表
     */
async generateMultiTimeframeCharts(
        symbol: string,
        timeframes: Array<{ interval: string; candles: CandleWithIndicators[] }>,
        indicators?: ChartIndicators
): Promise<ChartSnapshot[]>
⋮----
// 限制 K 线数量以防止 WASM 崩溃 (最多 150 根)
⋮----
? tf.candles.slice(-MAX_CANDLES) // 取最近的 N 根
⋮----
/**
     * ArrayBuffer 转 Base64
     */
private arrayBufferToBase64(buffer: Uint8Array): string
⋮----
/**
     * 加载字体（从 Google Fonts 获取 Roboto Mono，带缓存）
     */
⋮----
private async loadFont(): Promise<
⋮----
// Decode embedded base64 to binary (robust against network issues)
⋮----
/**
 * 创建 Canvas 图表客户端
 */
export function createCanvasChartClient(): CanvasChartClient
```

## File: src/modules/data-fetcher/hyperliquid-market.ts
```typescript
/**
 * Hyperliquid 市场数据客户端
 * 使用 Hyperliquid 公开 API 获取 K 线数据 (无需私钥)
 */
⋮----
import type { CandleWithIndicators } from '../../types/index.js';
import { logger } from '../../utils/index.js';
⋮----
// Hyperliquid 支持的 K 线周期
export type HyperliquidInterval = '1m' | '3m' | '5m' | '15m' | '30m' | '1h' | '2h' | '4h' | '8h' | '12h' | '1d' | '3d' | '1w' | '1M';
⋮----
/**
 * Hyperliquid 公开 API 客户端
 * 仅用于获取市场数据，无需私钥
 */
export class HyperliquidMarketClient
⋮----
constructor(testnet: boolean = false)
⋮----
/**
     * 获取 K 线数据
     * @param symbol 交易对符号 (e.g., 'BTC', 'ETH', 'SOL')
     * @param interval K 线周期
     * @param startTime 开始时间 (毫秒时间戳)
     * @param endTime 结束时间 (毫秒时间戳)
     */
async getCandles(
        symbol: string,
        interval: HyperliquidInterval,
        startTime?: number,
        endTime?: number
): Promise<CandleWithIndicators[]>
⋮----
'1m': 24 * 60 * 60 * 1000,       // 1 天
'3m': 3 * 24 * 60 * 60 * 1000,   // 3 天
'5m': 5 * 24 * 60 * 60 * 1000,   // 5 天
'15m': 7 * 24 * 60 * 60 * 1000,  // 7 天
'30m': 14 * 24 * 60 * 60 * 1000, // 14 天
'1h': 30 * 24 * 60 * 60 * 1000,  // 30 天
'2h': 60 * 24 * 60 * 60 * 1000,  // 60 天
'4h': 45 * 24 * 60 * 60 * 1000,  // 45 天
'8h': 120 * 24 * 60 * 60 * 1000, // 120 天
'12h': 180 * 24 * 60 * 60 * 1000,// 180 天
'1d': 365 * 24 * 60 * 60 * 1000, // 1 年
'3d': 365 * 24 * 60 * 60 * 1000, // 1 年
'1w': 2 * 365 * 24 * 60 * 60 * 1000, // 2 年
'1M': 5 * 365 * 24 * 60 * 60 * 1000, // 5 年
⋮----
t: number;   // 开盘时间
T: number;   // 收盘时间
o: string;   // 开盘价
h: string;   // 最高价
l: string;   // 最低价
c: string;   // 收盘价
v: string;   // 成交量
n: number;   // 成交笔数
⋮----
/**
     * 获取 H4 K 线数据 (原生支持，无需聚合)
     */
async getH4Candles(symbol: string, days: number = 45): Promise<CandleWithIndicators[]>
⋮----
/**
     * 获取当前价格
     */
async getCurrentPrice(symbol: string): Promise<number>
⋮----
// 尝试从 allMids 获取 (最快)
⋮----
// 回退机制：如果 allMids 中没有 (如 xyz:XYZ100)，尝试获取最新 K 线
⋮----
const candles = await this.getCandles(symbol, '1m', Date.now() - 5 * 60 * 1000); // 最近 5 分钟
⋮----
/**
     * 计算 ATR (14 周期)
     */
private calculateATR(candles: Array<{
        timestamp: number; datetime: number;
        open: number; high: number; low: number; close: number; volume: number;
}>, period: number = 14): CandleWithIndicators[]
⋮----
/**
 * 创建 Hyperliquid 市场数据客户端
 */
export function createHyperliquidMarketClient(testnet: boolean = false): HyperliquidMarketClient
```

## File: src/modules/data-fetcher/index.ts
```typescript
/**
 * 数据拉取器模块入口
 * 使用 Hyperliquid 原生 API 获取市场数据
 */
⋮----
import type { MultiTimeframeData, ChartSnapshot, CandleWithIndicators } from '../../types/index.js';
import { logger } from '../../utils/index.js';
import { CanvasChartClient, createCanvasChartClient, ChartIndicators } from './canvas-chart.js';
import { YahooFinanceClient, createYahooFinanceClient } from './yahoo-finance.js';
import { HyperliquidMarketClient, createHyperliquidMarketClient } from './hyperliquid-market.js';
import type { ConfigManager } from '../../config/config-manager.js';
import type { KvStore } from '../../types/runtime.js';
⋮----
interface DataFetcherConfig {
    kv?: KvStore;  // 可选的 KV 缓存
    testnet?: boolean; // 是否使用测试网
    configManager?: ConfigManager;
}
⋮----
kv?: KvStore;  // 可选的 KV 缓存
testnet?: boolean; // 是否使用测试网
⋮----
export type MarketDataFetchMode = 'full' | 'idle-light';
⋮----
export interface MarketDataFetchOptions {
    mode?: MarketDataFetchMode;
}
⋮----
type LowTimeframeKey = 'h4' | 'd1' | 'w1' | 'm1';
⋮----
type LowTimeframeCacheEntry = {
    candles: CandleWithIndicators[];
    expiresAt: number;
    fetchedAt: number;
};
⋮----
type FetchProfile = {
    m5LookbackMs?: number;
    m15LookbackMs?: number;
    h1LookbackMs?: number;
    h4LookbackDays?: number;
    d1LookbackMs?: number;
    w1LookbackMs?: number;
    m1LookbackMs?: number;
    h4CacheTtlMs: number;
    d1CacheTtlMs: number;
    w1CacheTtlMs: number;
    m1CacheTtlMs: number;
};
⋮----
// 1m idle 扫描下缩短中低频拉取窗口，降低单轮请求负载
⋮----
/**
 * 统一数据拉取器
 * 使用 Hyperliquid API 获取数据，Canvas 渲染图表
 */
export class DataFetcher
⋮----
private yahooFinance: YahooFinanceClient;  // 保留作为备用
⋮----
constructor(config: DataFetcherConfig =
⋮----
this.yahooFinance = createYahooFinanceClient();  // 备用
⋮----
/**
     * 获取完整的多周期市场数据
     * 使用 Hyperliquid 原生 API
     */
async fetchMarketData(symbol: string, options: MarketDataFetchOptions =
⋮----
const startTime = (lookbackMs?: number)
⋮----
// Hyperliquid 原生支持所有周期
⋮----
this.hyperliquid.getCandles(symbol, '1h', startTime(profile.h1LookbackMs), now),   // 新增 H1
⋮----
h1,   // 新增 H1
⋮----
// ⚠️ 极其重要: 不要回退到 Yahoo Finance!
// 如果我们要在 Hyperliquid 上交易，必须使用 Hyperliquid 的数据。
// Yahoo 的价格和 K 线与 Hyperliquid 可能有巨大差异，会导致错误的信号和执行失败。
// 如果 Hyperliquid API 失败，应该直接报错，而不是掩盖问题。
⋮----
// return this.fetchMarketDataFromYahoo(symbol); // DISABLED
⋮----
private resolveFetchProfile(mode: MarketDataFetchMode): FetchProfile
⋮----
private buildLowTimeframeCacheScope(mode: MarketDataFetchMode, profile: FetchProfile): string
⋮----
private getCacheBucketKey(symbol: string, scope: string): string
⋮----
private getCachedLowTimeframe(symbol: string, scope: string, key: LowTimeframeKey): CandleWithIndicators[] | undefined
⋮----
private saveLowTimeframeCache(
        symbol: string,
        scope: string,
        key: LowTimeframeKey,
        candles: CandleWithIndicators[],
        ttlMs: number,
): void
⋮----
private async getLowTimeframeWithCache(params: {
        symbol: string;
        scope: string;
        key: LowTimeframeKey;
        ttlMs: number;
loader: ()
⋮----
/**
     * 从 Yahoo Finance 获取数据 (备用)
     */
private async fetchMarketDataFromYahoo(symbol: string): Promise<MultiTimeframeData>
⋮----
const h1 = await this.yahooFinance.getCandles(symbol, '60m', '14d'); // fallback H1
⋮----
/**
     * 获取技术图表快照
     */
async fetchChartSnapshots(
        symbol: string,
        marketData: MultiTimeframeData,
        indicators?: ChartIndicators
): Promise<ChartSnapshot[]>
⋮----
/**
 * 创建统一数据拉取器
 */
export function createDataFetcher(config: DataFetcherConfig =
```

## File: src/modules/data-fetcher/yahoo-finance.ts
```typescript
/**
 * Yahoo Finance 客户端
 * 使用直接 fetch 调用 Yahoo Finance 的公开 API
 * 用于获取大周期 K 线数据 (H4, D1, W1, M1)
 */
⋮----
import type { CandleWithIndicators, Candle } from '../../types/index.js';
import { logger } from '../../utils/index.js';
import { getYahooFinanceCryptoSymbols } from '../../config/symbol-settings.js';
⋮----
// Yahoo Finance Chart API 响应类型
interface YahooChartResponse {
    chart: {
        result?: Array<{
            meta: {
                currency: string;
                symbol: string;
                regularMarketPrice: number;
            };
            timestamp?: number[];
            indicators: {
                quote: Array<{
                    open: (number | null)[];
                    high: (number | null)[];
                    low: (number | null)[];
                    close: (number | null)[];
                    volume: (number | null)[];
                }>;
            };
        }>;
        error?: {
            code: string;
            description: string;
        };
    };
}
⋮----
// Yahoo Finance 支持的时间周期
type YahooInterval = '1m' | '2m' | '5m' | '15m' | '30m' | '60m' | '90m' | '1h' | '1d' | '5d' | '1wk' | '1mo' | '3mo';
⋮----
/**
 * Yahoo Finance 客户端 - 使用直接 fetch 调用
 */
export class YahooFinanceClient
⋮----
/**
     * 格式化 Symbol
     * BTC -> BTC-USD, ETH -> ETH-USD
     */
private formatSymbol(symbol: string): string
⋮----
/**
     * 获取 K 线数据
     */
async getCandles(
        symbol: string,
        interval: YahooInterval,
        period?: string,
        startDate?: number, // Unix timestamp in seconds
        endDate?: number    // Unix timestamp in seconds
): Promise<CandleWithIndicators[]>
⋮----
startDate?: number, // Unix timestamp in seconds
endDate?: number    // Unix timestamp in seconds
⋮----
/**
     * 获取 H4 数据 (从 1H 聚合)
     */
async getH4Candles(
        symbol: string,
        days: number = 30,
        startDate?: number,
        endDate?: number
): Promise<CandleWithIndicators[]>
⋮----
// 获取 1 小时数据
⋮----
// 聚合为 4 小时
⋮----
/**
     * 获取当前价格
     */
async getCurrentPrice(symbol: string): Promise<number>
⋮----
/**
     * 转换周期格式为 Yahoo Finance range 参数
     */
private convertPeriodToRange(period: string): string
⋮----
// Yahoo Finance 支持的 range: 1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max
⋮----
/**
     * 解析 Yahoo Finance Chart API 返回的数据
     */
private parseChartData(result: NonNullable<YahooChartResponse['chart']['result']>[0]): Candle[]
⋮----
// 跳过无效数据
⋮----
const ts = timestamps[i] * 1000; // 转换为毫秒
⋮----
/**
     * 聚合 K 线
     * 注意：允许最后一个不完整的块，以便显示当前未收盘的 K 线
     */
private aggregateCandles(candles: Candle[], factor: number): Candle[]
⋮----
// 允许不完整的块（最后一根正在形成的 K 线）
⋮----
/**
     * 计算 ATR (14 周期)
     */
private calculateATR(candles: Candle[], period: number = 14): CandleWithIndicators[]
⋮----
// 简单平均
⋮----
// 指数平均
⋮----
/**
 * 创建 Yahoo Finance 客户端
 */
export function createYahooFinanceClient(): YahooFinanceClient
```

## File: src/modules/executor/close-price.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { deriveAggressiveClosePrice } from './close-price.js';
```

## File: src/modules/executor/close-price.ts
```typescript
export interface AggressiveClosePriceParams {
    markPrice: number;
    isBuyToClose: boolean;
    szDecimals: number;
}
⋮----
/**
 * Build an aggressive reference price for IOC close orders.
 * Keep decimal precision (no integer floor/ceil) so low-priced symbols
 * do not collapse to zero.
 */
export function deriveAggressiveClosePrice(params: AggressiveClosePriceParams): number
```

## File: src/modules/executor/router-executor.ts
```typescript
import { logger } from '../../utils/index.js';
import type {
    IExecutor,
    GenericOrderParams,
    GenericOrderResult,
    GenericStopParams,
    GenericAccountInfo,
    GenericPosition,
    GenericCandle,
    GenericOpenOrder,
    GenericFill,
} from './types.js';
⋮----
export type ExecutorRouteMap = Record<string, IExecutor>;
⋮----
export class RouterExecutor implements IExecutor
⋮----
constructor(
⋮----
private resolveExecutorBySymbol(symbol: string): IExecutor
⋮----
async placeLimitOrder(params: GenericOrderParams): Promise<GenericOrderResult>
⋮----
async placeStopOrder(params: GenericStopParams): Promise<GenericOrderResult>
⋮----
async cancelOrder(symbol: string, orderId: string): Promise<GenericOrderResult>
⋮----
async closePosition(symbol: string): Promise<GenericOrderResult>
⋮----
async getAccountInfoForSymbol(symbol: string): Promise<GenericAccountInfo>
⋮----
async getAccountInfo(): Promise<GenericAccountInfo>
⋮----
async getPosition(symbol: string): Promise<GenericPosition | undefined>
⋮----
async getCandles(symbol: string, interval: string, startTime?: number, endTime?: number): Promise<GenericCandle[]>
⋮----
async getCurrentPrice(symbol: string): Promise<number>
⋮----
async getOpenOrders(symbol?: string): Promise<GenericOpenOrder[]>
⋮----
async getUserFills(): Promise<GenericFill[]>
```

## File: src/modules/liquidation-monitor/index.ts
```typescript
/**
 * 清算数据监控模块
 * 负责与 LiquidationWatcher 服务交互，获取实时清算数据
 */
⋮----
import { logger } from '../../utils/index.js';
⋮----
// ========== 类型定义 ==========
⋮----
/**
 * 单个清算事件
 */
export interface LiquidationEvent {
    symbol: string;
    side: 'long' | 'short';  // 被清算的方向
    size: number;            // 清算数量 (USD)
    price: number;           // 清算价格
    timestamp: number;       // 毫秒时间戳
}
⋮----
side: 'long' | 'short';  // 被清算的方向
size: number;            // 清算数量 (USD)
price: number;           // 清算价格
timestamp: number;       // 毫秒时间戳
⋮----
/**
 * 清算汇总统计
 */
export interface LiquidationSummary {
    symbol: string;
    window: '1m' | '5m' | '15m';
    longLiquidations: number;    // 多头被清算总量 (USD)
    shortLiquidations: number;   // 空头被清算总量 (USD)
    netLiquidations: number;     // 净清算量 (正数=更多多头被清算)
    count: number;               // 清算次数
    latestTimestamp: number;     // 最新清算时间
}
⋮----
longLiquidations: number;    // 多头被清算总量 (USD)
shortLiquidations: number;   // 空头被清算总量 (USD)
netLiquidations: number;     // 净清算量 (正数=更多多头被清算)
count: number;               // 清算次数
latestTimestamp: number;     // 最新清算时间
⋮----
/**
 * 清算激增检测结果
 */
export interface LiquidationSpike {
    detected: boolean;
    side: 'long' | 'short' | 'none';
    amount: number;              // 激增金额 (USD)
    count: number;               // 激增次数
    significance: 'low' | 'medium' | 'high' | 'extreme';
}
⋮----
amount: number;              // 激增金额 (USD)
count: number;               // 激增次数
⋮----
// ========== 清算监控器 ==========
⋮----
/**
 * 清算数据监控器
 * 与清算监控服务交互获取数据
 */
export class LiquidationMonitor
⋮----
constructor(watcherStub:
⋮----
/**
     * 确认扫损
     */
async confirmSweep(
        symbol: string,
        sweepType: 'high_sweep' | 'low_sweep',
        window: '1m' | '5m' | '15m' = '5m'
): Promise<
⋮----
private getWindowMs(window: '1m' | '5m' | '15m'): number
⋮----
// ========== 辅助函数 ==========
⋮----
import type { LiquidityAnalysis } from '../structure-detector/types.js';
⋮----
/**
 * 用清算数据丰富扫损检测结果
 */
export async function enrichSweepsWithLiquidation(
    symbol: string,
    liquidityAnalysis: LiquidityAnalysis,
    monitor: LiquidationMonitor
): Promise<LiquidityAnalysis>
⋮----
// recentSweep 已由 analyzeLiquidity 优先级排序确定，此处直接复用
⋮----
/**
 * 启动清算监控服务的 WebSocket 连接
 */
export async function startWatcherWebSocket(
    watcherStub: { fetch: (request: Request) => Promise<Response> }
): Promise<
```

## File: src/modules/order-processor/index.ts
```typescript
/**
 * 订单处理器模块入口
 * 包含状态机逻辑和风控集成
 */
⋮----
import type {
    TradingState,
    IdleAnalysisResponse,
    PendingConfirmResponse,
    OpenManageResponse,
    MoveStopMode,
} from '../../types/index.js';
import { logger } from '../../utils/index.js';
import { RiskManager, createRiskManager } from './risk-manager.js';
import { getDefaultConfigManager, type ConfigManager } from '../../config/config-manager.js';
⋮----
interface ProcessorConfig {
    maxRiskPercent: number;
    pendingTimeoutMinutes: number; // 挂单超时时间
}
⋮----
pendingTimeoutMinutes: number; // 挂单超时时间
⋮----
interface ProcessResult {
    action: 'NONE' | 'PLACE_ORDER' | 'CANCEL_ORDER' | 'CLOSE_POSITION' | 'MODIFY_SL';
    stateUpdate?: Partial<TradingState>;
    orderParams?: {
        direction: 'LONG' | 'SHORT';
        entryPrice: number;
        stopLoss: number;
        takeProfitLevels: {
            tp1: number;
            tp2: number;
            tp3: number;
        };
        tpDistribution?: {
            tp1: number;
            tp2: number;
            tp3: number;
        };
        positionSize: number;
        entryLogic: string;
    };
    modifySL?: number;
    modifySLMode?: MoveStopMode;
    reason: string;
}
⋮----
pendingTimeoutMinutes: 120, // 2 小时
⋮----
/**
 * 订单处理器
 * 核心业务逻辑层，处理 AI 决策并转换为具体操作
 */
export class OrderProcessor
⋮----
constructor(config: Partial<ProcessorConfig> =
⋮----
/**
     * 处理空仓状态的 AI 响应
     */
processIdleResponse(
        state: TradingState,
        response: IdleAnalysisResponse,
        currentPrice: number,
        accountBalance: number,
        overrideMaxRiskPercent?: number,
): ProcessResult
⋮----
// 如果 AI 建议等待
⋮----
// 如果 AI 建议开仓但没有交易计划
⋮----
// 执行风控检查（允许动态覆盖单笔风险上限）
⋮----
// 风控通过，准备下单
⋮----
/**
     * 处理挂单状态的 AI 响应
     */
processPendingResponse(
        state: TradingState,
        response: PendingConfirmResponse
): ProcessResult
⋮----
// 检查是否超时
⋮----
// 根据 AI 响应决定
⋮----
/**
     * 处理持仓状态的 AI 响应
     */
processOpenResponse(
        state: TradingState,
        response: OpenManageResponse
): ProcessResult
⋮----
/**
 * 创建订单处理器
 */
export function createOrderProcessor(
    maxRiskPercent: number = 2,
    configManager: ConfigManager = getDefaultConfigManager()
): OrderProcessor
```

## File: src/modules/order-processor/risk-manager.ts
```typescript
/**
 * 风控管理器
 * 实现硬性风控规则
 */
⋮----
import { logger } from '../../utils/index.js';
import { getDefaultConfigManager, type OrderRiskConfig } from '../../config/config-manager.js';
⋮----
interface TradeProposal {
    direction: 'LONG' | 'SHORT';
    entryPrice: number;
    stopLoss: number;
    takeProfitLevels: {
        tp1: number;
        tp2: number;
        tp3: number;  // 用于盈亏比计算
    };
    currentPrice: number;
}
⋮----
tp3: number;  // 用于盈亏比计算
⋮----
interface RiskCheckResult {
    approved: boolean;
    positionSize: number;
    rejectionReason?: string;
    warnings: string[];
}
⋮----
/**
 * 风控管理器类
 */
export class RiskManager
⋮----
constructor(config: Partial<OrderRiskConfig> =
⋮----
/**
     * 执行完整风控检查
     */
checkTrade(
        proposal: TradeProposal,
        accountBalance: number
): RiskCheckResult
⋮----
// 1. 检查价格偏离
⋮----
// 2. 检查止损距离
⋮----
// 3. 检查盈亏比
⋮----
proposal.takeProfitLevels.tp3  // 基于最终目标计算盈亏比
⋮----
// 4. 计算仓位大小
⋮----
// [优化] 最小名义价值保底逻辑 (方案 B: 风险封顶)
⋮----
// 核心修复：如果保底仓位的风险超过了最大风险百分比，则拒绝交易（B方案）
⋮----
// [修复] 动态感知杠杆检查保证金，防止模拟盘 (1x) 余额击穿
⋮----
if (accountBalance < requiredMargin * 1.1) { // 预留 10% 缓冲
⋮----
// 5. 检查单笔最大风险
⋮----
// 6. 检查最小订单价值 (Hyperliquid要求 ≥ $10)
⋮----
/**
     * 计算价格偏离百分比
     */
private calculatePriceDeviation(entryPrice: number, currentPrice: number): number
⋮----
/**
     * 计算止损距离百分比
     */
private calculateStopDistance(entryPrice: number, stopLoss: number): number
⋮----
/**
     * 计算盈亏比
     */
private calculateRiskReward(
        entryPrice: number,
        stopLoss: number,
        takeProfit: number
): number
⋮----
/**
     * 计算仓位大小
     * 公式: (账户余额 × 最大风险%) / 止损距离
     */
private calculatePositionSize(
        accountBalance: number,
        entryPrice: number,
        stopLoss: number
): number
⋮----
/**
     * 计算风险金额
     */
private calculateRiskAmount(
        positionSize: number,
        entryPrice: number,
        stopLoss: number
): number
⋮----
/**
 * 创建风控管理器
 */
export function createRiskManager(
    config: number | Partial<OrderRiskConfig> = 2
): RiskManager
```

## File: src/modules/paper-trading/index.ts
```typescript
/**
 * Paper Trading 模块
 * 模拟交易系统，使用真实市场数据
 */
```

## File: src/modules/paper-trading/stats.ts
```typescript
/**
 * Paper Trading 统计计算
 */
⋮----
import type { PaperTrade, PaperTradingStats, PaperAccount } from './types.js';
⋮----
/**
 * 计算交易统计
 */
export function calculateStats(
    trades: PaperTrade[],
    account: PaperAccount
): PaperTradingStats
⋮----
// 计算最大回撤
```

## File: src/modules/signal-evaluator/index.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { SignalEvaluator } from './index.js';
import type { StructureAnalysis } from '../structure-detector/types.js';
⋮----
function makeMinimalStructureAnalysis(overrides: Partial<StructureAnalysis> =
⋮----
// M15 has NO entry zone — should still pass because SMT uses M5
```

## File: src/modules/signal-evaluator/index.ts
```typescript
/**
 * 信号评估器
 * 负责评估市场信号、判断信号质量
 */
⋮----
import { logger } from "../../utils/index.js";
import type { StructureAnalysis } from "../structure-detector/index.js";
import { isValidEntryFVG } from "../structure-detector/index.js";
⋮----
export class SignalEvaluator
⋮----
/**
   * 评估信号上下文
   */
evaluateSignalContext(structureAnalysis: StructureAnalysis):
⋮----
// SMT_REVERSAL uses M5 structure for entry zone and displacement
⋮----
// 即时入场策略：TURTLE_SOUP 和 BAND_REVERSION 共享即时市价入场路径
// SMT_REVERSAL is NOT turtle soup — it uses LIMIT orders via SNIPER path
⋮----
/**
   * 判断是否应跳过低质量信号
   */
shouldSkipLowQualitySignal(
    status: string,
    signalGrade: string | undefined,
    hasValidEntryZone: boolean,
    isTurtleSoup: boolean,
    allowTurtleSoupCGradeExecution: boolean
): boolean
```

## File: src/modules/state-store/decision-log-store.ts
```typescript
import type { DecisionLogEntry } from '../../types/index.js';
⋮----
export interface DecisionLogStore {
    append(entry: DecisionLogEntry): Promise<void>;
    list(symbol: string, limit: number): Promise<DecisionLogEntry[]>;
}
⋮----
append(entry: DecisionLogEntry): Promise<void>;
list(symbol: string, limit: number): Promise<DecisionLogEntry[]>;
```

## File: src/modules/state-store/market-snapshot-store.ts
```typescript
import type { MarketSnapshotEntry, StoredMarketSnapshot } from '../../types/index.js';
⋮----
export interface MarketSnapshotStore {
    append(entry: MarketSnapshotEntry): Promise<void>;
    list(params: {
        symbol: string;
        startTs: number;
        endTs: number;
        limit: number;
        traceId?: string;
    }): Promise<StoredMarketSnapshot[]>;
}
⋮----
append(entry: MarketSnapshotEntry): Promise<void>;
list(params: {
        symbol: string;
        startTs: number;
        endTs: number;
        limit: number;
        traceId?: string;
    }): Promise<StoredMarketSnapshot[]>;
```

## File: src/modules/state-store/trade-log-store.ts
```typescript
import type { TradeLogEntry } from '../../types/index.js';
⋮----
export interface TradeLogStore {
    append(entry: TradeLogEntry): Promise<void>;
    list(limit: number, symbol?: string): Promise<TradeLogEntry[]>;
}
⋮----
append(entry: TradeLogEntry): Promise<void>;
list(limit: number, symbol?: string): Promise<TradeLogEntry[]>;
```

## File: src/modules/structure-detector/strategies/enhancers/entry-distance.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { validateEntryDistance, ENTRY_DISTANCE_DEFAULTS } from './entry-distance.js';
⋮----
// Distance = 0.3, ATR limit = 0.6
⋮----
// Distance = 2.0, ATR limit = 0.6
⋮----
entryPrice: 10000, // Large price
⋮----
atr: 0.5, // Small ATR
⋮----
// ATR limit = 0.5 * 0.6 = 0.3
// Percent limit = 10050 * 0.004 = 40.2
// Limit = max(0.3, 40.2) = 40.2
// Distance = 50
⋮----
// Distance = |99.5 - 100| = 0.5, limit = 0.6
⋮----
// Distance = 0.6, limit = 0.6 (exactly at boundary)
⋮----
// Distance = 0.61, limit = 0.6
```

## File: src/modules/structure-detector/strategies/enhancers/entry-distance.ts
```typescript
export interface EntryDistanceInput {
    entryPrice: number;
    referencePrice: number;
    atr: number;
    maxAtrMultiple?: number;
    maxPercent?: number;
    label?: string;
}
⋮----
export interface EntryDistanceResult {
    allowed: boolean;
    diagnostics: string[];
    distance: number;
    limit: number;
}
⋮----
export function validateEntryDistance(input: EntryDistanceInput): EntryDistanceResult
```

## File: src/modules/structure-detector/strategies/enhancers/momentum-priority.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { TrendContext } from '../../trend.js';
import { evaluateMomentumPriority } from './momentum-priority.js';
⋮----
function makeTrendContext(overrides: Partial<TrendContext> =
⋮----
// Default threshold is typically 2.0, so 0 should fail
⋮----
displacementMagnitude: 3.0, // Above default threshold (typically 2.0)
⋮----
// Should pass with displacement above default threshold
```

## File: src/modules/structure-detector/strategies/enhancers/momentum-priority.ts
```typescript
import type { TrendContext } from '../../trend.js';
import { getDefaultStrategyProfile } from '../../../../config/strategy-profiles.js';
⋮----
export interface MomentumPriorityInput {
    structureBreakType?: 'MSS' | 'BOS';
    displacementMagnitude?: number;
    direction?: 'bullish' | 'bearish';
    trendContext?: TrendContext;
    minMagnitude?: number;
}
⋮----
export interface MomentumPriorityResult {
    enabled: boolean;
    trendAligned: boolean;
    diagnostics: string[];
}
⋮----
/**
 * 统一的动能优先判定模块
 */
export function evaluateMomentumPriority(input: MomentumPriorityInput): MomentumPriorityResult
```

## File: src/modules/structure-detector/strategies/enhancers/range-protector.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { ConsolidationResult } from '../../consolidation.js';
import { evaluateRangeProtection } from './range-protector.js';
⋮----
function makeConsolidation(rangePercent: number, high: number, low: number): ConsolidationResult
```

## File: src/modules/structure-detector/strategies/enhancers/range-protector.ts
```typescript
import type { ConsolidationResult } from '../../consolidation.js';
⋮----
export interface RangeProtectionInput {
    consolidation: ConsolidationResult;
    atr: number;
    symbol?: string;
    minWidthAtr?: number;
    minRangePercent?: number;
}
⋮----
export interface RangeProtectionResult {
    allowed: boolean;
    diagnostics: string[];
    rangeWidth?: number;
}
⋮----
/**
 * 震荡策略的基础保护：确认区间宽度足够，避免在极窄区间频繁触发海龟汤。
 */
export function evaluateRangeProtection(input: RangeProtectionInput): RangeProtectionResult
```

## File: src/modules/structure-detector/strategies/enhancers/range-take-profit.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { computeRangeTakeProfitLevels } from './range-take-profit.js';
```

## File: src/modules/structure-detector/strategies/enhancers/range-take-profit.ts
```typescript
import type { Direction } from '../../types.js';
⋮----
export interface RangeTakeProfitInput {
    direction: Direction;
    entryPrice: number;
    risk: number;
    rangeLow: number;
    rangeHigh: number;
    atr?: number;
}
⋮----
export interface RangeTakeProfitLevels {
    tp1: number;
    tp2: number;
    tp3: number;
}
⋮----
tp1: 0.48, // midpoint front-run
tp2: 0.88, // opposite inner edge
tp3: 0.96, // opposite extreme front-run
⋮----
tp1: 0.52, // midpoint front-run
tp2: 0.12, // opposite inner edge
tp3: 0.04, // opposite extreme front-run
⋮----
function priceAtRatio(rangeLow: number, span: number, ratio: number): number
⋮----
function resolveMinStep(input: RangeTakeProfitInput, rangeSpan: number): number
⋮----
export function computeRangeTakeProfitLevels(
    input: RangeTakeProfitInput,
): RangeTakeProfitLevels | null
```

## File: src/modules/structure-detector/strategies/enhancers/risk-metrics.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { ensureRiskRewardGuard, type RiskRewardProfile } from './risk-metrics.js';
⋮----
function makeProfile(rr: number, entryPrice = 100): RiskRewardProfile<string>
```

## File: src/modules/structure-detector/strategies/enhancers/risk-metrics.ts
```typescript
export interface RiskRewardProfile<TPayload = unknown> {
    entryPrice: number;
    rr: number;
    payload: TPayload;
}
⋮----
export interface RiskRewardGuardInput<TPayload = unknown> {
    profile: RiskRewardProfile<TPayload>;
    minRR: number;
    fallbackEntry?: number;
    recalcProfile?: (entryPrice: number) => RiskRewardProfile<TPayload>;
    label?: string;
}
⋮----
export interface RiskRewardGuardResult<TPayload = unknown> {
    allowed: boolean;
    profile: RiskRewardProfile<TPayload>;
    usedFallback: boolean;
    diagnostics: string[];
}
⋮----
export function ensureRiskRewardGuard<TPayload = unknown>(
    input: RiskRewardGuardInput<TPayload>,
): RiskRewardGuardResult<TPayload>
```

## File: src/modules/structure-detector/strategies/enhancers/take-profit.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { getTakeProfitConfig, computeTakeProfitPrices } from './take-profit.js';
⋮----
// tp1 = entry + risk = 100 + 2 = 102
⋮----
// tp2 = entry + reward * 0.6, reward = risk * 3 = 6, tp2 = 100 + 6 * 0.6 = 103.6
⋮----
// tp3 = entry + reward = 100 + 6 = 106
⋮----
// tp1 = entry - risk = 100 - 2 = 98
⋮----
// tp2 = entry - reward * 0.6 = 100 - 3.6 = 96.4
⋮----
// tp3 = entry - reward = 100 - 6 = 94
⋮----
// tp1 = entry + risk = 102
⋮----
// tp2 = entry + reward * 0.6 = 100 + 4.8 = 104.8
⋮----
// tp3 = entry + reward = 108
⋮----
// reward = risk * 2 = 4
// tp1 = entry + risk * 1 = 102
⋮----
// tp2 = entry + reward * 0.6 = 100 + 2.4 = 102.4
⋮----
// tp3 = entry + reward * 1.5 = 100 + 6 = 106
⋮----
// tp1 = entry - risk * 1 = 98
⋮----
// tp2 = entry - reward * 0.6 = 100 - 2.4 = 97.6
⋮----
// tp3 = entry - reward * 1.5 = 100 - 6 = 94
⋮----
// tp1 = entry + risk * 0.8 = 100 + 1.6 = 101.6
⋮----
// tp2 = entry + reward * 0.5 = 100 + 2 = 102
⋮----
// tp1 = entry + risk * 1 = 102
⋮----
// tp2 = entry + reward * 0.6 = 100 + 3.6 = 103.6
⋮----
// tp1 = 150, tp2 = 100 + 150 * 0.6 = 190, tp3 = 250
```

## File: src/modules/structure-detector/strategies/enhancers/take-profit.ts
```typescript
export interface TakeProfitConfig {
    distribution: {
        tp1: number;
        tp2: number;
        tp3: number;
    };
    description: string;
}
⋮----
export interface TakeProfitConfigInput {
    strategy: 'STANDARD_ICT' | 'TURTLE_SOUP';
    momentumPriority?: boolean;
    regime?: 'TREND' | 'RANGE';
    strategyRoute?: 'TREND' | 'HYBRID' | 'CONSOLIDATION';
}
⋮----
export function getTakeProfitConfig(input: TakeProfitConfigInput): TakeProfitConfig
⋮----
// Turtle Soup and reversion families now prioritize faster realization by default.
⋮----
export interface TakeProfitPriceInput {
    strategy: 'STANDARD_ICT' | 'TURTLE_SOUP';
    direction: 'bullish' | 'bearish';
    entryPrice: number;
    risk: number;
    reward?: number;
    finalTarget?: number;
    baseTargets?: { tp1: number; tp2: number; tp3: number };
    regime?: 'TREND' | 'RANGE';
}
⋮----
function normalizeBaseTargetsOrder(input: TakeProfitPriceInput):
⋮----
export function computeTakeProfitPrices(input: TakeProfitPriceInput):
⋮----
// 默认返回 entry +/- multiples for fallback
```

## File: src/modules/structure-detector/strategies/preflight/standard.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { evaluateStandardPreflight } from './standard.js';
import type { LiquidityAnalysis, TimeframeStructure } from '../../types.js';
⋮----
function makeLiquidityAnalysis(overrides: Partial<LiquidityAnalysis> =
⋮----
function makeTimeframeStructure(overrides: Partial<TimeframeStructure> =
⋮----
// EMA far from price (2%) to avoid PD Array match; no sweeps; no H1 displacement
⋮----
// One loose sweep gives validationScore=1; EMA far to avoid PD Array match
```

## File: src/modules/structure-detector/strategies/preflight/standard.ts
```typescript
import type {
    Direction,
    LiquidityAnalysis,
    TimeframeStructure,
    FVG,
    OrderBlock,
} from '../../types.js';
import type { TrendContext } from '../../trend.js';
import { runStrategyPreflight } from '../pipeline.js';
import { findCatalystSweep } from '../utils/catalyst.js';
import type { StrategyProfile } from '../../../../config/strategy-profiles.js';
import { getDefaultStrategyProfile } from '../../../../config/strategy-profiles.js';
⋮----
interface StandardPreflightInput {
    direction: Direction;
    displacementMagnitude: number;
    displacementVolumeValid?: boolean;
    displacementStartTime?: number;
    structureBreakType?: 'MSS' | 'BOS';
    structureBreakOrigin?: 'H1' | 'M15' | null;
    liquidity: LiquidityAnalysis;
    trendContext?: TrendContext;
    h1Structure: TimeframeStructure;
    allFVGs: FVG[];
    allOBs: OrderBlock[];
    currentPrice: number;
    profile?: StrategyProfile;
}
⋮----
export interface StandardPreflightResult {
    momentumPriority: boolean;
    trendAligned: boolean;
    catalystSweep?: any;
    validationScore: number;
    pullbackComplete: boolean;
    diagnostics: string[];
}
⋮----
export function evaluateStandardPreflight(input: StandardPreflightInput): StandardPreflightResult
```

## File: src/modules/structure-detector/strategies/turtle-soup/band-reversion.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { Candle } from '../../../../types/index.js';
import type { ConsolidationResult } from '../../consolidation.js';
import { detectBandReversionSetup } from './band-reversion.js';
⋮----
function buildH1Series(params: {
    start: number;
    base: number;
    closes: number[];
    wick?: number;
    volume?: number;
}): Candle[]
⋮----
function makeM5Candle(datetime: number, o: number, h: number, l: number, c: number): Candle
⋮----
function makeConsolidation(low: number, high: number): ConsolidationResult
⋮----
function buildKeltnerFriendlyH1(triggerClose: number): Candle[]
⋮----
function buildWideBandOnlyH1(triggerClose: number): Candle[]
⋮----
const h1Candles = buildKeltnerFriendlyH1(100); // close near 100, VWAP ~100 → distance ≈ 0
⋮----
const h1Candles = buildKeltnerFriendlyH1(107.5); // trigger at the upper KC edge
⋮----
// Upper band is touched (trigger ~104.6), but M5 is bullish → bearish condition fails
// Lower band not touched → bullish condition also fails
⋮----
makeM5Candle(timestamp, 104.6, 105.0, 104.5, 104.9), // bullish close > open → not bearish
⋮----
// latestM5 bullish → bearish condition fails; lower band not touched → bullish condition fails
⋮----
makeM5Candle(timestamp, 106.9, 107.0, 106.0, 106.1), // body = 0.8, only 0.25 ATR when atr=3.2
```

## File: src/modules/structure-detector/strategies/turtle-soup/band-reversion.ts
```typescript
/**
 * Band Reversion 子策略
 *
 * 双通道均值回归：RangeMode 继续由 BB 识别，执行边界改为 Keltner 外沿 +
 * Session VWAP 偏离 + M5 转向确认。
 * 由 turtle-soup.ts 编排层调用。
 */
⋮----
import type { TradeSetup, Direction } from '../../types.js';
import type { ConsolidationResult } from '../../consolidation.js';
import type { Candle } from '../../../../types/index.js';
import type { SignalGradeConfig } from '../../../../config/config-manager.js';
import { analyzePrimaryRangeBoundary, calculateKeltnerChannel, detectKeltnerExtremeState } from './range-mode.js';
import { getDualVwapSnapshot } from '../../vwap.js';
import { getSignalGradeFromTotal } from '../../signal-scorer.js';
import { safeAtrValue } from './sfp-core.js';
⋮----
export function detectBandReversionSetup(params: {
    currentPrice: number;
    atr: number;
    timestamp: number;
    consolidation: ConsolidationResult;
    h1Candles: Candle[];
    m5Candles: Candle[];
    signalFamily: 'BAND_REVERSION' | 'BAND_REVERSION_SOFT';
    signalGradeConfig?: SignalGradeConfig;
}): TradeSetup | null
⋮----
// Keep Band Reversion executable by default (B-grade+), while preserving soft/hard distinction.
```

## File: src/modules/structure-detector/strategies/turtle-soup/range-mode.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { Candle } from '../../../../types/index.js';
import {
    detectRangeMode,
    calculateBollingerBands,
    calculateKeltnerChannel,
    detectKeltnerExtremeState,
    calculateATR,
    calculatePercentileRank,
    calculateSessionVwapAt,
} from './range-mode.js';
⋮----
function buildH1Series(params: {
    start: number;
    base: number;
    closes: number[];
    wick?: number;
    volume?: number;
}): Candle[]
⋮----
// Crossings so tiny they are below ATR * 0.2 filter
⋮----
// Alternate crossings base + large expansion candles at end
⋮----
// 3 back-to-back large bullish expansion bodies to trigger cluster detection
⋮----
105, 110, 115]; // last 3 are big bullish bodies
⋮----
// Even if crossings > 3, expansion cluster disables range mode
⋮----
// Use oscillating closes so stdDev > 0
⋮----
// True range for uniform candles: high-low = 4
⋮----
// Weighted typical price: (101+102+101)/3*1000 + (103+102+100)/3*2000 = 101.33*1000 + 101.67*2000
```

## File: src/modules/structure-detector/strategies/turtle-soup/range-mode.ts
```typescript
/**
 * Range Mode Detection
 *
 * 检测市场是否处于区间震荡状态：
 * - Bollinger Band 带宽处于历史压缩区间
 * - H1 收盘价频繁穿越 Session VWAP
 * - 无近期扩张蜡烛簇（排除趋势行情）
 */
⋮----
import type { Candle } from '../../../../types/index.js';
import { calculateEMA } from '../../trend.js';
⋮----
// ── RangeMode 参数常量 ────────────────────────────────────────────────────────
⋮----
// ── 类型定义 ───────────────────────────────────────────────────────────────────
export interface RangeModeAssessment {
    active: boolean;
    softActive?: boolean;
    reason: string;
    softReason?: string;
    vwapCrossCount: number;
    vwapCrossWindow: number;
    bandwidthPercentile: number;
    bandwidthP60: number;
    currentBandwidth: number;
    expansionClusterDetected: boolean;
}
⋮----
interface RangeModeInput {
    h1Candles: Candle[];
    currentPrice: number;
}
⋮----
export interface BollingerBands {
    middle: number;
    upper: number;
    lower: number;
    bandwidth: number;
}
⋮----
export interface KeltnerChannel {
    middle: number;
    upper: number;
    lower: number;
    width: number;
}
⋮----
export interface KeltnerExtremeState {
    channel: KeltnerChannel;
    isAboveUpper: boolean;
    isBelowLower: boolean;
    bullishFreeBar: boolean;
    bearishFreeBar: boolean;
    bullishSlideAlongBands: boolean;
    bearishSlideAlongBands: boolean;
    bullishSlideCount: number;
    bearishSlideCount: number;
}
⋮----
export interface PrimaryRangeBoundaryState {
    high: number;
    low: number;
    tolerance: number;
    lowerTestCount: number;
    upperTestCount: number;
    hoveringNearLower: boolean;
    hoveringNearUpper: boolean;
}
⋮----
// ── 统计工具函数 ───────────────────────────────────────────────────────────────
function calculateSMA(values: number[]): number
⋮----
function calculateStdDev(values: number[], mean: number): number
⋮----
function calculateMedian(values: number[]): number
⋮----
export function calculateATR(candles: Candle[], period: number, endIndex: number): number
⋮----
export function calculateBollingerBands(params: {
    candles: Candle[];
    endIndex: number;
    period?: number;
    stdDevMultiplier?: number;
}): BollingerBands | null
⋮----
export function calculateKeltnerChannel(params: {
    candles: Candle[];
    endIndex: number;
    period?: number;
    atrPeriod?: number;
    atrMultiplier?: number;
}): KeltnerChannel | null
⋮----
export function detectKeltnerExtremeState(params: {
    candles: Candle[];
    endIndex: number;
    period?: number;
    atrPeriod?: number;
    atrMultiplier?: number;
    slideBars?: number;
}): KeltnerExtremeState | null
⋮----
function countTouchClusters(params: {
    candles: Candle[];
isTouch: (candle: Candle)
⋮----
export function analyzePrimaryRangeBoundary(params: {
    candles: Candle[];
    rangeHigh: number;
    rangeLow: number;
    atr: number;
    hoveringBars?: number;
}): PrimaryRangeBoundaryState | null
⋮----
function calculatePercentile(values: number[], percentile: number): number
⋮----
export function calculatePercentileRank(values: number[], value: number): number
⋮----
function isExpansionBody(params: {
    candle: Candle;
    atr: number;
    medianBody: number;
}): boolean
⋮----
function detectExpansionCluster(candles: Candle[]): boolean
⋮----
const hasCluster = (indices: number[]): boolean =>
⋮----
function getUtcDayStart(timestamp: number): number
⋮----
export function calculateSessionVwapAt(candles: Candle[], endIndex: number): number | undefined
⋮----
// ── 主入口 ─────────────────────────────────────────────────────────────────────
export function detectRangeMode(input: RangeModeInput): RangeModeAssessment
```

## File: src/modules/structure-detector/strategies/turtle-soup/vwap-bounce.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { Candle } from '../../../../types/index.js';
import type { ConsolidationResult } from '../../consolidation.js';
import { detectVwapBounceSetup } from './vwap-bounce.js';
⋮----
function makeCandle(datetime: number, o: number, h: number, l: number, c: number, volume = 1000): Candle
⋮----
function makeConsolidation(low: number, high: number): ConsolidationResult
⋮----
// prevCandle: low touches below session VWAP (~100.0), close below
// latestCandle: bullish body closing well above VWAP
⋮----
// prevCandle: high touches/exceeds VWAP
// latestCandle: bearish body closing below VWAP
⋮----
// Construct a scenario where risk > reward
⋮----
// Very tight range (tiny reward)
⋮----
currentPrice: 100.6, atr: 20, // enormous ATR → stopLoss very far → risk >> reward
⋮----
// rangeHigh=103, rangeLow=99 → span=4; entryPrice=100.6 → ratio=(100.6-99)/4=0.4 < 0.45 ✓ (allowed)
// Override max bullish ratio to 0.35 to force rejection
⋮----
rangeEntryMaxBullishRatio: 0.35, // stricter: 0.4 > 0.35 → rejected
⋮----
// For bearish, TP1 should be above midpoint (closer to entry) and TP3 near rangeLow
```

## File: src/modules/structure-detector/strategies/turtle-soup/vwap-bounce.ts
```typescript
/**
 * VWAP Bounce 子策略
 *
 * Dual VWAP 弹跳：上一根 M5 触碰 VWAP 区域后，当前 K 线收盘越过 VWAP 并有实体确认。
 * 由 turtle-soup.ts 编排层调用。
 */
⋮----
import type { TradeSetup, Direction } from '../../types.js';
import type { ConsolidationResult } from '../../consolidation.js';
import type { Candle } from '../../../../types/index.js';
import type { SignalGradeConfig } from '../../../../config/config-manager.js';
import { getDualVwapSnapshot } from '../../vwap.js';
import { getSignalGradeFromTotal } from '../../signal-scorer.js';
import { computeRangeTakeProfitLevels } from '../enhancers/range-take-profit.js';
import { safeAtrValue } from './sfp-core.js';
⋮----
export function detectVwapBounceSetup(params: {
    currentPrice: number;
    atr: number;
    consolidation: ConsolidationResult;
    m5Candles: Candle[];
    timestamp: number;
    rangeEntryMaxBullishRatio?: number;
    rangeEntryMinBearishRatio?: number;
    signalGradeConfig?: SignalGradeConfig;
}): TradeSetup | null
⋮----
// ── 动态评分 ──────────────────────────────────────────────────
let score = 70; // 基础分
⋮----
// M5 实体强度加分
⋮----
// VWAP reclaim 距离加分
⋮----
// Range 边缘入场加分
⋮----
// 上限 cap（避免碰 A 级 90 阈值）
```

## File: src/modules/structure-detector/strategies/utils/catalyst.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { LiquidityLevel, LiquidityType } from '../../types.js';
import { findCatalystSweep } from './catalyst.js';
⋮----
function makeLevel(
    type: LiquidityType,
    price: number,
    overrides: Partial<LiquidityLevel> = {},
): LiquidityLevel
```

## File: src/modules/structure-detector/strategies/utils/catalyst.ts
```typescript
import type { Direction, LiquidityLevel } from '../../types.js';
import { SWEEP_LEVEL_PRIORITY } from '../../liquidity.js';
⋮----
interface SweepEvent {
    level: LiquidityLevel;
    sweepTime: number;
    sweepPrice: number;
}
⋮----
interface CatalystSweepOptions {
    /**
     * sweep -> displacement 最大允许时间差 (毫秒)
     * 默认 6h，避免把很久之前的扫损误判为当前位移的催化因子。
     */
    maxLeadMs?: number;
}
⋮----
/**
     * sweep -> displacement 最大允许时间差 (毫秒)
     * 默认 6h，避免把很久之前的扫损误判为当前位移的催化因子。
     */
⋮----
export function findCatalystSweep(
    allSweeps: SweepEvent[],
    direction: Direction,
    displacementStartTime?: number,
    options: CatalystSweepOptions = {},
)
⋮----
// 必须先扫后位移，并且位移与扫损具备时序邻近性
⋮----
// 若记录了 recoveryTime，则恢复动作也必须先于 displacement
⋮----
const buildCandidateScore = (candidate: SweepEvent): number =>
⋮----
// 诱多/诱空陷阱 + 快速回收：更符合 sweep -> displacement 的催化特征
⋮----
// 同分时优先更近的 sweepTime，避免选到过早的历史扫损
⋮----
// 再次平分时沿用价格层级偏好
```

## File: src/modules/structure-detector/strategies/utils/direction.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { toPositionDirection, toStructureDirection } from './direction.js';
```

## File: src/modules/structure-detector/strategies/utils/direction.ts
```typescript
export function toPositionDirection(direction: 'bullish' | 'bearish'): 'LONG' | 'SHORT'
⋮----
export function toStructureDirection(position: 'LONG' | 'SHORT'): 'bullish' | 'bearish'
```

## File: src/modules/structure-detector/strategies/ai-displacement-only.ts
```typescript
import type { TradeSetup } from '../types.js';
import type { VolumeStrength } from '../../volume-analysis/types.js';
⋮----
interface DetectAiDisplacementSetupInput {
    symbol: string;
    currentPrice: number;
    atr: number;
    timestamp: number;
    displacement?: {
        detected: boolean;
        direction: 'bullish' | 'bearish';
        magnitude: number;
        startPrice: number;
        endPrice: number;
        candleCount: number;
        hasFVG: boolean;
        time: number;
        rVol?: number;
        volumeStrength?: VolumeStrength;
        volumeValid?: boolean;
    };
    minDisplacementAtr?: number;
}
⋮----
export function detectAiDisplacementOnlySetup(input: DetectAiDisplacementSetupInput): TradeSetup | null
```

## File: src/modules/structure-detector/strategies/arbiter-risk.ts
```typescript
import type { StrategySnapshot } from './index.js';
import { toPositionDirection } from './utils/direction.js';
⋮----
export interface RiskBudgetContext {
    currentPositionDirection?: 'LONG' | 'SHORT';
    cooldown?: {
        direction: 'LONG' | 'SHORT';
        expiresAt: number;
    };
    now?: number;
}
⋮----
export interface RiskBudgetAdjustment {
    adjustment: number;
    reasons: string[];
}
⋮----
export function evaluateRiskBudget(
    snapshot: StrategySnapshot,
    context: RiskBudgetContext,
): RiskBudgetAdjustment
```

## File: src/modules/structure-detector/strategies/arbiter.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { StrategySnapshot } from './index.js';
import { arbitrateStrategies, getHybridBonus } from './arbiter.js';
⋮----
// Use partial type for testing to avoid full type requirements
function makeSnapshot(overrides: Partial<StrategySnapshot> =
⋮----
// Use setup with score to differentiate
⋮----
// Create two snapshots with identical scores
⋮----
// Both have same score, should select first
⋮----
// Verify both have same score in breakdown
⋮----
// Hard override: EXTREME_SWEEP always wins
⋮----
// Standard ICT: 95 + 2 (HYBRID) + 2 (priority) = 99
// Turtle Soup:  65 + 2 (HYBRID) + 2 (priority) = 69
⋮----
// Standard ICT: 70 + 2 (HYBRID) + 2 (priority) = 74
// Turtle Soup:  78 + 2 (HYBRID) + 2 (priority) = 82
```

## File: src/modules/structure-detector/strategies/arbiter.ts
```typescript
import type { StrategySnapshot } from './index.js';
import type { StrategyRoute } from './route.js';
import type { RouteReason, StrategyMarketFocus } from '../types.js';
import { evaluateRiskBudget, type RiskBudgetContext } from './arbiter-risk.js';
⋮----
export interface ArbitrationBreakdown {
    strategy: string;
    label: string;
    score: number;
    reasons: string[];
}
⋮----
export interface ArbitrationResult {
    selected: StrategySnapshot | null;
    breakdown: ArbitrationBreakdown[];
}
⋮----
export interface StrategyArbiterOptions {
    route: StrategyRoute;
    routeReason?: RouteReason;
    riskContext?: RiskBudgetContext;
    preferTurtleSoup?: boolean;
    turtlePriorityReason?: string;
    turtlePrioritySource?: 'EXTREME_SWEEP' | 'TREND_EXHAUSTION' | 'H4_RANGE_EDGE';
}
⋮----
/**
 * HYBRID 路由差异化加分 — 根据路由原因和策略市场偏好给出不同奖励。
 * RANGE focus 在特定 HYBRID 子类型中获得额外加分（因为这些子类型暗示市场更偏向震荡）。
 * 非 RANGE focus 统一 +2，保持向后兼容。
 */
export function getHybridBonus(routeReason: RouteReason | undefined, focus: StrategyMarketFocus): number
⋮----
function getRouteFocusPreference(snapshot: StrategySnapshot, route: StrategyRoute): number
⋮----
export function arbitrateStrategies(
    snapshots: StrategySnapshot[],
    options: StrategyArbiterOptions,
): ArbitrationResult
⋮----
// EXTREME_SWEEP: hard override handles selection, +30 is diagnostic only.
```

## File: src/modules/structure-detector/strategies/band-reversion-only.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { detectBandReversionOnlySetup } from './band-reversion-only.js';
import type { ConsolidationResult } from '../consolidation.js';
import type { Candle } from '../../../types/index.js';
⋮----
// ── helpers ────────────────────────────────────────────────────────────────
⋮----
function makeCandle(partial: Partial<Candle> &
⋮----
function makeCandleSeries(count: number, basePrice: number, trend: 'up' | 'down' | 'flat'): Candle[]
⋮----
// ── tests ──────────────────────────────────────────────────────────────────
⋮----
h1Candles: makeCandleSeries(10, 3000, 'flat'), // < BB_PERIOD + 5
⋮----
// This test validates the output shape; actual signal detection
// depends on BB/VWAP calculation which needs realistic data.
// We only check that when the function does return a setup,
// it has the correct metadata.
⋮----
// May or may not produce a setup depending on BB/VWAP alignment.
// If it does, validate metadata.
```

## File: src/modules/structure-detector/strategies/band-reversion-only.ts
```typescript
/**
 * Band Reversion Only Strategy
 *
 * 独立的布林带均值回归策略，专用于 Shadow Lane 并行测试。
 *
 * 核心逻辑：
 * 1. 只在 RangeMode 激活时运行（BB 带宽压缩 + VWAP 多次穿越）
 * 2. 等待价格触碰布林带外沿（上轨/下轨），M5 出现转向实体，做均值回归
 * 3. 止盈锚定 Session VWAP（TP1）和 BB 中轨（TP2），不追趋势延伸
 * 4. 与主策略完全独立，不依赖 ICT 结构（无 Displacement / MSS / OB 要求）
 *
 * 入场过滤（严格）：
 * - BB 带宽必须在历史 P60 以下（压缩状态）
 * - H1 价格偏离 Session VWAP 0.4~3.0 ATR
 * - M5 转向实体 ≥ 0.35 ATR（提高至 0.35，更严格）
 * - 入场价不得越过区间中轴（做多 ≤ 45%，做空 ≥ 55%）
 * - 最小 R:R ≥ 1.2（允许比海龟汤稍低，因止盈更近）
 *
 * 出场逻辑：
 * - TP1 (60%仓位): Session VWAP — 均值回归主目标
 * - TP2 (40%仓位): BB 中轨 — 完全回归目标
 * - 止损: 信号 K 线极值 + ATR × 0.3（比海龟汤更紧，因信号明确）
 */
⋮----
import type { TradeSetup, Direction } from '../types.js';
import type { ConsolidationResult } from '../consolidation.js';
import type { Candle } from '../../../types/index.js';
import type { SignalGradeConfig } from '../../../config/config-manager.js';
import type { RangeModeAssessment } from './turtle-soup.js';
import {
    detectRangeMode,
    calculateBollingerBandsExport,
} from './turtle-soup.js';
import { getDualVwapSnapshot } from '../vwap.js';
import { getSignalGradeFromTotal } from '../signal-scorer.js';
import { computeRangeTakeProfitLevels } from './enhancers/range-take-profit.js';
import { ensureRiskRewardGuard } from './enhancers/risk-metrics.js';
⋮----
// ── 可调参数 ──────────────────────────────────────────────────────────────
⋮----
const BB_TOUCH_TOLERANCE_ATR = 1.2;      // 触碰容差
const VWAP_MIN_DIST_ATR = 0.4;           // 最小偏离 VWAP 距离
const VWAP_MAX_DIST_ATR = 3.0;           // 最大偏离 VWAP 距离
const M5_MIN_BODY_ATR = 0.35;            // M5 转向实体最小要求（提高到 0.35）
const M5_MIN_FOLLOW_ATR = 0.10;          // M5 跟进确认最小要求
const RANGE_ENTRY_MAX_BULLISH_RATIO = 0.45;  // 做多入场不超过区间 45%
const RANGE_ENTRY_MIN_BEARISH_RATIO = 0.55;  // 做空入场不低于区间 55%
const SL_BUFFER_ATR = 0.3;               // 止损缓冲（比 SWEEP_SFP 的 0.5 更紧）
const MIN_RR = 1.2;                      // 最低 R:R 要求
// ─────────────────────────────────────────────────────────────────────────
⋮----
export interface BandReversionSetupInput {
    symbol: string;
    currentPrice: number;
    atr: number;
    timestamp: number;
    consolidation: ConsolidationResult;
    h1Candles: Candle[];
    m5Candles: Candle[];
    rangeModeAssessment?: RangeModeAssessment;
    signalGradeConfig?: SignalGradeConfig;
}
⋮----
function safeAtr(atr: number): number
⋮----
/**
 * 检测 Band Reversion 入场信号
 * 返回 null 表示当前无信号
 */
export function detectBandReversionOnlySetup(input: BandReversionSetupInput): TradeSetup | null
⋮----
// 1. 必须有足够的 K 线数据
⋮----
// 2. RangeMode 必须处于 active 或 softActive 状态
⋮----
// 3. 计算布林带
⋮----
// 4. 计算 Session VWAP
⋮----
// 5. 检查 H1 价格偏离 VWAP 是否在合理范围
⋮----
// 6. 检查 H1 信号 K 线是否触碰 BB 外沿
⋮----
// 7. M5 转向确认
⋮----
// 最新 M5 是阳线，收盘高于前根
⋮----
// 实体满足最小要求（用两根 M5 中较大的一根验证）
⋮----
// 跟进动能
⋮----
// 当前价不低于信号 K 线收盘价
⋮----
// 最新 M5 是阴线，收盘低于前根
⋮----
// 8. 区间中轴过滤（不在中轴附近追单）
⋮----
return null; // 做多但价格已超过区间 45%，放弃
⋮----
return null; // 做空但价格低于区间 55%，放弃
⋮----
// 9. 计算止损
⋮----
// 10. 止盈：优先用区间结构，回退到 VWAP / 中轨
⋮----
// 11. R:R 检查（用 TP2 计算，因为 TP1 更近）
⋮----
// 12. 区间结构止盈（如有）
⋮----
// 对于 BAND_REVERSION，保守使用区间结构 TP1，但 VWAP 优先于纯 R 倍数
⋮----
? Math.min(tp1, rangeTargets.tp1)  // 取较近的
⋮----
// 13. 计算信号评分
// Base: 70（RangeMode confirmed）
// BB 带宽越压缩，分数越高（最多 +10）
⋮----
// VWAP 越偏离，分数越高（最多 +8，表示触碰 BB 外沿更有效）
⋮----
// M5 实体越大，分数越高（最多 +7）
⋮----
// VWAP 穿越次数越多，RangeMode 越可靠（最多 +5）
```

## File: src/modules/structure-detector/strategies/pipeline.ts
```typescript
import type { TrendContext } from '../trend.js';
import { evaluateMomentumPriority } from './enhancers/momentum-priority.js';
import { getDefaultStrategyProfile } from '../../../config/strategy-profiles.js';
⋮----
export interface StrategyPreflightParams {
    direction: 'bullish' | 'bearish';
    structureBreakType?: 'MSS' | 'BOS';
    displacementMagnitude?: number;
    trendContext?: TrendContext;
}
⋮----
export interface StrategyPreflightOptions {
    requireTrendAlignment?: boolean;
    momentumMagnitude?: number;
}
⋮----
export interface StrategyPreflightResult {
    trendAligned: boolean;
    momentumPriority: boolean;
    diagnostics: string[];
}
⋮----
export function runStrategyPreflight(
    params: StrategyPreflightParams,
    options: StrategyPreflightOptions = {},
): StrategyPreflightResult
```

## File: src/modules/structure-detector/strategies/route.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { ConsolidationResult } from '../consolidation.js';
import type { StrategyRoute, SwingPoint } from '../types.js';
import type { TrendContext } from '../trend.js';
import type { Candle } from '../../../types/index.js';
import { applyRegimeLock, buildTurtlePriorityContext, detectTurtleSoupPrioritySignal, determineStrategyRoute, resolveStrategyRoute } from './route.js';
⋮----
function makeConsolidation(
    overrides: Partial<ConsolidationResult> = {},
): ConsolidationResult
⋮----
function makeTrendContext(overrides: Partial<TrendContext> =
⋮----
function makeH4Candles(params: {
    start: number;
    count: number;
    low: number;
    high: number;
}): Candle[]
⋮----
function constrainRecentH4ToActiveBand(
    candles: Candle[],
    activeLow: number,
    activeHigh: number,
): Candle[]
⋮----
// Lower quality sellside sweep (bullish reversal)
⋮----
// Higher quality buyside sweep (bearish reversal)
⋮----
// Keep macro extreme in history window, but above the active-range ceiling.
⋮----
// Macro upper reclaim (older)
⋮----
// Macro lower reclaim (newer) => structure switch upper -> lower
⋮----
// Post-switch active range: 64k ~ 70k (far below macroHigh)
⋮----
// Ensure recent upper-edge reclaim exists in active range
⋮----
// ── resolveStrategyRoute ───────────────────────────────────────────────────────
⋮----
// All indicators false → no consolidation noise penalty → base route resolves to TREND
⋮----
// Lock prevents TREND flip: returns locked HYBRID route
⋮----
// ── routeReason traceability ─────────────────────────────────────────────────
⋮----
// ── squeeze breakout override ─────────────────────────────────────────────────
⋮----
// Should NOT be CONSOLIDATION - squeeze bypassed it
⋮----
// Without trend context, should fall through to SQUEEZE_BREAKOUT_OVERRIDE or another non-CONSOLIDATION
⋮----
// Squeeze allowed pass-through, hurst trending should pick it up
⋮----
confidence: 20, // low confidence, won't match qualifiesConsolidation/Hybrid
⋮----
// ── 3-push exhaustion at HTF swing priority signal ────────────────────────────
⋮----
/**
 * Build 50 H4 candles forming 3 bullish impulse legs suitable for
 * detectThirdPushExhaustion to return detected=true.
 *
 * Leg geometry (ATR=100):
 *   Leg 1: index 5 (low=1000) → index 15 (high=1800)  8.0 ATR
 *   Leg 2: index 20 (low=1400) → index 30 (high=2200)  8.0 ATR
 *   Leg 3: index 35 (low=1900) → index 42 (high=2230)  3.3 ATR
 *          marginal break = 2230-2200 = 30 → 0.30 ATR ≤ 0.35 ✓
 *   currentPrice = 2190 → rejection = 40/100 = 0.4 ATR ✓
 *   Volume on leg 3 intermediates = 700 (weakening) ✓
 */
function makeBullishExhaustionH4(startMs = 1_000_000):
⋮----
// 60 candles: legs end at index 44; candles 45-59 are flat baseline.
// This ensures the H4 range edge "priorCandles" window (indices ~51-58)
// contains only flat candles far from the swing high → upperEdgeReclaims=0
// → detectH4RangeEdgePrioritySignal returns false, allowing the 3-push
// detector to evaluate instead.
⋮----
// Leg 1 pivots
⋮----
// Leg 2 pivots
⋮----
// Leg 3 pivots (marginal break + low volume = exhaustion)
⋮----
// Rejection candles after leg 3 high (indices 43-44)
⋮----
// Candles 45-59 remain flat at baseline (1500/1550/1450)
⋮----
/**
 * Mirror of makeBullishExhaustionH4 but 3 bearish legs.
 *   Leg 1: index 5 (high=2230) → index 15 (low=1430)  8.0 ATR
 *   Leg 2: index 20 (high=1830) → index 30 (low=1030)  8.0 ATR
 *   Leg 3: index 35 (high=1330) → index 42 (low=1000)  3.3 ATR
 *          marginal break = 1030-1000 = 30 → 0.30 ATR ≤ 0.35 ✓
 *   currentPrice = 1040 → rejection = 40/100 = 0.4 ATR ✓
 */
function makeBearishExhaustionH4(startMs = 2_000_000):
⋮----
// Same 60-candle approach as bullish: flat candles 45-59 keep the
// priorCandles window clear of any range-edge reclaims.
⋮----
// Leg 1 pivots
⋮----
// Leg 2 pivots
⋮----
// Leg 3 pivots (marginal break + low volume = exhaustion)
⋮----
// Rejection candles after leg 3 low (bullish bounce, indices 43-44)
⋮----
// Candles 45-59 remain flat at baseline (1500/1550/1450)
⋮----
// The 3-push detector guard returns false when isConsolidating=true;
// Section 1 independently routes to CONSOLIDATION for this case.
⋮----
// Swing highs are at 1800, 2200, 2230. Choose a price between two highs
// so that |price - nearest swing high| > 1 ATR (100): e.g. 2000 is
// 200 away from 1800 and 200 from 2200, both > 100 ✓
```

## File: src/modules/structure-detector/strategies/route.ts
```typescript
import type { ConsolidationResult } from '../consolidation.js';
import type { TrendContext } from '../trend.js';
import type { Direction, Displacement, LiquidityAnalysis, LiquidityType, RouteReason, TurtlePriorityContext, SwingPoint } from '../types.js';
import type { StrategyRoute } from '../types.js';
import type { Candle } from '../../../types/index.js';
import type { CandleWithIndicators } from '../../../types/market-data.js';
import { analyzePrimaryRangeBoundary } from './turtle-soup/range-mode.js';
⋮----
import type { HurstResult, SignalQuality } from '../hurst.js';
import { detectThirdPushExhaustion } from '../third-push-exhaustion.js';
⋮----
export interface StrategyRouteContext {
    currentPrice: number;
    displacement?: Displacement;
    m15Candles?: Candle[];
    h4Candles?: Candle[];
    atr?: number;
    now?: number;
    liquidity?: Pick<LiquidityAnalysis, 'allRecentSweeps' | 'recentSweep'> & {
        pdh?: LiquidityAnalysis['pdh'];
        pdl?: LiquidityAnalysis['pdl'];
        equalHighs?: LiquidityAnalysis['equalHighs'];
        equalLows?: LiquidityAnalysis['equalLows'];
        h4EqualHighs?: LiquidityAnalysis['h4EqualHighs'];
        h4EqualLows?: LiquidityAnalysis['h4EqualLows'];
    };
    rangeModeAssessment?: {
        active: boolean;
        reason?: string;
    };
    /** H4 swing points for 3-push-at-swing detection */
    h4Structure?: { swingHighs: SwingPoint[]; swingLows: SwingPoint[] };
}
⋮----
/** H4 swing points for 3-push-at-swing detection */
⋮----
export interface RegimeLockState {
    route: 'CONSOLIDATION' | 'HYBRID';
    lockedAt: number;
    expiresAt: number;
    reason?: string;
}
⋮----
export interface RegimeLockResult {
    route: StrategyRoute;
    lockApplied: boolean;
    activeLock?: RegimeLockState;
    nextLock?: RegimeLockState;
}
⋮----
export interface TrendEscapeSignal {
    triggered: boolean;
    direction?: Direction;
    reason?: string;
}
⋮----
export interface TurtleSoupPrioritySignal {
    triggered: boolean;
    direction?: Direction;
    reason?: string;
    source?: 'EXTREME_SWEEP' | 'TREND_EXHAUSTION' | 'H4_RANGE_EDGE';
    sweepScore?: number;
    sweepGrade?: 'A' | 'B' | 'C';
    sweepLevelType?: LiquidityType;
}
⋮----
interface BaseRouteResult {
    route: StrategyRoute;
    reason: RouteReason;
}
⋮----
export interface StrategyRouteDecision {
    route: StrategyRoute;
    baseRoute: StrategyRoute;
    routeReason: RouteReason;
    regimeLockResult: RegimeLockResult;
    trendEscape: TrendEscapeSignal;
    turtlePriority: TurtleSoupPrioritySignal;
}
⋮----
const TREND_ESCAPE_BREAK_BUFFER_RATIO = 0.001; // 0.1%
⋮----
const THIRD_PUSH_MIN_SCORE = 55;            // mirrors detectThirdPushExhaustion internal threshold
const THIRD_PUSH_SWING_PROXIMITY_ATR = 1.0; // price must be within 1 ATR of HTF level
⋮----
/**
 * 每个流动性类型的方向归属（编译期完整性检查）
 * Record<LiquidityType, ...> 确保新增类型时必须同步维护，否则 tsc 报错
 */
⋮----
function buildH4RangePriorityContext(context?: StrategyRouteContext): TurtlePriorityContext['h4Range'] | undefined
⋮----
function collectExtremeCandidates(
    liquidity: LiquidityAnalysis | undefined,
    currentPrice: number,
): NonNullable<TurtlePriorityContext['extremeCandidates']>
⋮----
const push = (level?: LiquidityAnalysis['pdh']) =>
⋮----
function collectRecentSweepCandidates(
    context: StrategyRouteContext | undefined,
): NonNullable<TurtlePriorityContext['recentSweepCandidates']>
⋮----
export function buildTurtlePriorityContext(input: {
    currentPrice: number;
    atr?: number;
    now?: number;
    h4Candles?: Candle[];
    liquidity?: LiquidityAnalysis;
    turtlePriority?: TurtleSoupPrioritySignal;
}): TurtlePriorityContext
⋮----
export function detectTurtleSoupPrioritySignal(
    context?: StrategyRouteContext,
    consolidation?: ConsolidationResult,
): TurtleSoupPrioritySignal
⋮----
// NEW: 3-push exhaustion at HTF swing (trending market, no range formed)
⋮----
function detectH4RangeEdgePrioritySignal(
    context?: StrategyRouteContext,
): TurtleSoupPrioritySignal
⋮----
function findLastH4MacroStructureSwitch(params: {
    candles: Candle[];
    macroHigh: number;
    macroLow: number;
    touchTolerance: number;
    reclaimBuffer: number;
}): number | null
⋮----
function detectExtremeSweepPrioritySignal(
    context: StrategyRouteContext | undefined,
    now: number,
): TurtleSoupPrioritySignal
⋮----
function getSweepTierBase(levelType: LiquidityType): number
⋮----
function findDisplacementReferenceCandle(
    candles: Candle[],
    displacementTime?: number,
): Candle | null
⋮----
function detectTrendExhaustionPrioritySignal(
    context: StrategyRouteContext | undefined,
    now: number,
): TurtleSoupPrioritySignal
⋮----
function detectThirdPushAtSwingPrioritySignal(
    context: StrategyRouteContext | undefined,
    consolidation: ConsolidationResult,
): TurtleSoupPrioritySignal
⋮----
// Only fires in non-consolidated trending markets
⋮----
// Bullish exhaustion → bearish reversal near a swing HIGH
⋮----
// Bearish exhaustion → bullish reversal near a swing LOW
⋮----
export function detectConsolidationTrendEscape(
    consolidation: ConsolidationResult,
    context?: StrategyRouteContext,
): TrendEscapeSignal
⋮----
/**
 * Core route determination logic — accepts pre-computed signals to avoid redundant re-computation.
 * Not exported; callers should use `determineStrategyRoute` or `resolveStrategyRoute`.
 *
 * Each return path is tagged with a RouteReason label for traceability.
 */
function computeBaseRoute(
    consolidation: ConsolidationResult,
    trendContext: TrendContext | undefined,
    context: StrategyRouteContext | undefined,
    trendEscape: TrendEscapeSignal,
    turtlePriority: TurtleSoupPrioritySignal,
    hurst?: HurstResult | null,
): BaseRouteResult
⋮----
// ── Section 1: Hard consolidation gate ──
// HTF 已判定盘整时，默认强制路由到海龟汤，避免趋势策略在震荡中追单。
// 仅在 RangeMode 激活或波动率挤压突破时允许进一步评估。
⋮----
// squeezeBreakout = true → fall through, let downstream sections decide
⋮----
// ── Section 2: Turtle priority overrides ──
// 极值点假突破优先：至少进入 HYBRID 路由，避免 TREND-only 直接屏蔽海龟汤。
⋮----
// ── Section 3: RangeMode active paths ──
⋮----
// RangeMode 已激活时，不直接回到 TREND，先保持 HYBRID 观察，避免 M15 逃逸位移误判追单。
⋮----
// ── Section 4: Trend escape (non-rangeMode) ──
⋮----
// ── Section 5: Near-consolidation noise band (40-50) ──
// 40-50 置信度的灰区优先切到反转防守，避免在震荡中被 TREND 追价反复打损。
⋮----
// ── Section 6: Moderate consolidation (55-65) ──
⋮----
// ── Section 7: Clear trend signals ──
⋮----
// ── Section 8: Hurst tiebreaker ──
// 赫斯特指数辅助路由 (低权重，作为边际决策因子)
// 仅在其他指标无法确定路由时，用 Hurst 打破平局
// NOISY 信号降级到 HYBRID，不完全信任统计分类
⋮----
// ── Section 9: Default fallback ──
// 挤压突破保底：即使下游没有匹配到 TREND，至少给 HYBRID（不被锁回 CONSOLIDATION）
⋮----
export function determineStrategyRoute(
    consolidation: ConsolidationResult,
    trendContext?: TrendContext,
    context?: StrategyRouteContext,
): StrategyRoute
⋮----
/**
 * One-stop route resolution: computes both signals once, determines the base route,
 * applies the regime lock, and returns everything the caller needs.
 *
 * Use this in the main analysis pipeline instead of calling `determineStrategyRoute` +
 * `applyRegimeLock` + `detectConsolidationTrendEscape` + `detectTurtleSoupPrioritySignal`
 * separately (which would recompute the signals twice).
 */
export function resolveStrategyRoute(params: {
    consolidation: ConsolidationResult;
    trendContext?: TrendContext;
    context: StrategyRouteContext;
    existingLock?: RegimeLockState;
    now: number;
}): StrategyRouteDecision
⋮----
/**
 * 体制锁: 在震荡噪音场景中抑制 route 在 TREND/HYBRID 间高频抖动。
 *
 * 行为:
 * - 当旧锁仍有效且当前基础路由回到 TREND，但盘整置信度仍 >= 50 时，优先维持旧锁路由。
 * - 根据当前盘整强度刷新下一轮锁:
 *   - confidence >= 65 -> CONSOLIDATION (90m)
 *   - confidence >= 55 -> HYBRID (45m)
 */
export function applyRegimeLock(params: {
    baseRoute: StrategyRoute;
    consolidation: ConsolidationResult;
    now: number;
    existingLock?: RegimeLockState;
}): RegimeLockResult
⋮----
// 边界区域延续现有锁，避免一根K线就解锁导致抖动。
⋮----
export function describeRoute(route: StrategyRoute, consolidation: ConsolidationResult): string
```

## File: src/modules/structure-detector/strategies/turtle-soup.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { Candle } from '../../../types/index.js';
import type { ConsolidationResult } from '../consolidation.js';
import type { LiquidityAnalysis, LiquidityLevel } from '../types.js';
import { detectRangeMode, detectTurtleSoupSetup } from './turtle-soup.js';
⋮----
function createCandle(
    datetime: number,
    open: number,
    high: number,
    low: number,
    close: number,
): Candle
⋮----
function buildH1Series(params: {
    start: number;
    base: number;
    closes: number[];
    wick?: number;
    volume?: number;
}): Candle[]
⋮----
function createConsolidation(rangeLow: number, rangeHigh: number): ConsolidationResult
⋮----
function createLiquidity(level: LiquidityLevel): LiquidityAnalysis
⋮----
// EQL at levelRatio 0.30 — between old 0.25 cutoff and new 0.35 EQ cutoff
// range = [29.55, 30.45], span=0.90, levelPrice = 29.55 + 0.30*0.90 = 29.82
⋮----
// prevCandle sweeps below 29.82, closes above → bullish SFP
⋮----
// EQL gets relaxed edge threshold (0.35) so 0.30 passes
⋮----
// Same position but LDN_L type → uses strict 0.25 cutoff → rejected
⋮----
// LDN_L uses strict 0.25 cutoff → 0.30 fails
⋮----
// 使用 102.0 作为最后一根 H1 的 close，确保 RR >= 0.8（Fix 6）以及触碰容差通过
```

## File: src/modules/structure-detector/strategies/turtle-soup.ts
```typescript
/**
 * 海龟汤策略编排层 (Turtle Soup Orchestrator)
 *
 * 以 cascade 顺序调用三个子策略：
 *   1. Band Reversion  — BB 带边均值回归（需 RangeMode active/soft）
 *   2. VWAP Bounce     — Dual VWAP 弹跳确认
 *   3. SFP Pattern     — 关键位假突破（Swing Failure Pattern）
 *
 * 公开 API（保持向后兼容）：
 *   - detectTurtleSoupSetup         主入口
 *   - detectRangeMode               RangeMode 检测（re-export）
 *   - calculateBollingerBandsExport BB 计算包装（re-export，供 band-reversion-only.ts 使用）
 *   - RangeModeAssessment / TurtleSoupMode / TurtleSoupInput 类型（re-export）
 */
⋮----
import type { TradeSetup } from '../types.js';
import type { TurtleSoupConfig } from '../../../config/config-manager.js';
⋮----
import type { RangeModeAssessment } from './turtle-soup/range-mode.js';
import type { TurtleSoupInput } from './turtle-soup/sfp-core.js';
import { detectBandReversionSetup } from './turtle-soup/band-reversion.js';
import { detectVwapBounceSetup } from './turtle-soup/vwap-bounce.js';
import { detectSfpSetup } from './turtle-soup/sfp-core.js';
⋮----
export function detectTurtleSoupSetup(input: TurtleSoupInput, config?: TurtleSoupConfig): TradeSetup | null
⋮----
// 必须处于盘整状态，且置信度较高
⋮----
// H4 边界或高优先级 sweep 候选出现时，直接走 SFP 主链，避免小级别 band/vwap 抢先入场造成噪音。
⋮----
// 1. Band Reversion（需 RangeMode active 或 softActive）
⋮----
// bandReversionOnly 标志：跳过后续两个子策略
⋮----
// 2. VWAP Bounce
⋮----
// 3. SFP Pattern（假突破主循环）
```

## File: src/modules/structure-detector/causal-chain.test.ts
```typescript
import { describe, it, expect } from 'vitest';
import { evaluateCausalChain, type CausalChainInput } from './causal-chain.js';
⋮----
// 时间戳工具：按分钟偏移生成
const t = (minutesOffset: number)
⋮----
// Sweep→OB: skip, OB→MSS: skip, MSS→Disp: ✓, Disp→FVG: ✓
⋮----
structureBreakTime: t(15),  // MSS 在 Disp 之后
displacementTime: t(10),    // Disp 在 MSS 之前
⋮----
// Sweep→OB: ✓, OB→MSS: ✓, MSS→Disp: ✗ (15>10), Disp→FVG: ✓
⋮----
expect(result.score).toBe(9); // 3*3, no full chain bonus
```

## File: src/modules/structure-detector/causal-chain.ts
```typescript
/**
 * ICT 因果链评估器
 *
 * ICT 理想交易事件时序:
 *   Sweep → OB 形成 → MSS/BOS → Displacement → FVG (入场)
 *
 * 每对相邻事件若满足正确时序 (前事件.time < 后事件.time) 则获得因果分。
 * 全链完整且有序时额外奖励。
 */
⋮----
/** 因果链中各环节的时间戳输入 */
export interface CausalChainInput {
    /** 扫损事件时间 */
    sweepTime?: number;
    /** 入场区 Order Block 形成时间 */
    obTime?: number;
    /** 结构破坏 (MSS/BOS) 发生时间 */
    structureBreakTime?: number;
    /** Displacement 发生时间 */
    displacementTime?: number;
    /** 入场 FVG 形成时间 */
    entryFvgTime?: number;
}
⋮----
/** 扫损事件时间 */
⋮----
/** 入场区 Order Block 形成时间 */
⋮----
/** 结构破坏 (MSS/BOS) 发生时间 */
⋮----
/** Displacement 发生时间 */
⋮----
/** 入场 FVG 形成时间 */
⋮----
export interface CausalChainResult {
    /** 存在正确时序的相邻对数 (0-4) */
    orderedPairs: number;
    /** 链中实际存在的环节数 (0-5) */
    presentLinks: number;
    /** 链中可检查的相邻对数 (两侧均存在) */
    checkablePairs: number;
    /** 全链完整且有序 */
    isFullChain: boolean;
    /** 评分 (0-15) */
    score: number;
    /** 评分明细 */
    breakdown: string[];
}
⋮----
/** 存在正确时序的相邻对数 (0-4) */
⋮----
/** 链中实际存在的环节数 (0-5) */
⋮----
/** 链中可检查的相邻对数 (两侧均存在) */
⋮----
/** 全链完整且有序 */
⋮----
/** 评分 (0-15) */
⋮----
/** 评分明细 */
⋮----
export interface CausalChainOptions {
    mode?: 'STRICT_ICT' | 'CRYPTO_TREND';
}
⋮----
/**
 * ICT 因果链环节定义
 * 按理想时序排列: Sweep → OB → MSS/BOS → Displacement → FVG
 */
⋮----
/** 每对时序正确的相邻环节得分 */
⋮----
/** 全链完整且有序的额外奖励 */
⋮----
/**
 * 评估 ICT 因果链的时序完整性
 *
 * 对于链中每对相邻环节 (只要两侧都存在):
 *   - 如果满足 前.time <= 后.time → +3 分
 *   - 如果乱序 (前.time > 后.time) → +0 分
 *
 * 如果全部 5 个环节都存在且全部有序 → 额外 +3 分
 *
 * 理论最高分: 4 对 × 3 + 3 bonus = 15
 */
export function evaluateCausalChain(
    input: CausalChainInput,
    options: CausalChainOptions = {},
): CausalChainResult
⋮----
// 按链条顺序提取时间戳
⋮----
// 统计存在的环节
⋮----
// 逐对检查相邻环节的时序
⋮----
// 一侧缺失，无法校验
⋮----
// 计算分数
⋮----
// 附加详情
```

## File: src/modules/structure-detector/consolidation.ts
```typescript
/**
 * 盘整市场检测模块
 *
 * 盘整市场特征:
 * 1. 短期内出现双向 MSS (结构频繁反转)
 * 2. ATR 收缩 (波动率降低)
 * 3. 价格在窄幅区间震荡
 * 4. 多次假突破 (Sweep 后立即反向 Sweep)
 *
 * 在盘整市场中，MSS 反转信号容易被打止损，
 * 应该降低入场条件或暂停交易。
 */
⋮----
import type { Candle, CandleWithIndicators } from '../../types/index.js';
import type { StructureBreak, LiquidityAnalysis, Displacement, Direction } from './types.js';
import { detectStructureBreak, detectSwingPoints } from './market-structure.js';
import { logger } from '../../utils/index.js';
import { getNarrowRangeThreshold } from '../../config/symbol-settings.js';
import { computeHurst, getHurstConsolidationAdjustment, detectVolatilitySqueeze } from './hurst.js';
import type { HurstResult, VolatilitySqueezeResult } from './hurst.js';
⋮----
/**
 * 盘整交易策略类型
 * 根据区间大小决定不同的交易策略
 */
export type ConsolidationTradeability =
    | { action: 'ALLOW_NORMAL' }                                      // 非盘整，正常交易
    | { action: 'ALLOW_EDGE_REVERSAL'; threshold: number; edge: 'upper' | 'lower' }  // 大区间，边缘反转
    | { action: 'REQUIRE_BREAKOUT'; threshold: number }               // 中等区间，需要突破
    | { action: 'SKIP'; reason: string };                             // 小区间或其他，跳过
⋮----
| { action: 'ALLOW_NORMAL' }                                      // 非盘整，正常交易
| { action: 'ALLOW_EDGE_REVERSAL'; threshold: number; edge: 'upper' | 'lower' }  // 大区间，边缘反转
| { action: 'REQUIRE_BREAKOUT'; threshold: number }               // 中等区间，需要突破
| { action: 'SKIP'; reason: string };                             // 小区间或其他，跳过
⋮----
export interface ConsolidationResult {
    isConsolidating: boolean;      // 是否处于盘整
    confidence: number;             // 盘整置信度 (0-100)
    indicators: {
        bidirectionalMSS: boolean;  // 双向 MSS 检测
        atrContraction: boolean;    // ATR 收缩
        narrowRange: boolean;       // 窄幅震荡
        whipsawSweeps: boolean;     // 双向扫损 (假突破)
        convergingPattern: boolean; // 收敛形态 (楔形/三角形)
        stochasticCompression: boolean; // KDJ 钝化/震荡
        fakeBreakoutTrap?: boolean;      // 假突破陷阱 (允许 Turtle Soup 激活)
    };
    hurst?: HurstResult;            // 赫斯特指数（H1 级别统计量）
    volatilitySqueeze?: VolatilitySqueezeResult;  // 波动率挤压检测
    rangeInfo?: {
        high: number;               // 区间高点
        low: number;                // 区间低点
        rangePercent: number;       // 区间幅度百分比
    };
    convergenceInfo?: {             // 收敛形态详情
        type: 'wedge' | 'triangle' | 'none';
        compressionRatio: number;   // 压缩比 (< 1 为收敛)
    };
    reason: string;                 // 判定原因
}
⋮----
isConsolidating: boolean;      // 是否处于盘整
confidence: number;             // 盘整置信度 (0-100)
⋮----
bidirectionalMSS: boolean;  // 双向 MSS 检测
atrContraction: boolean;    // ATR 收缩
narrowRange: boolean;       // 窄幅震荡
whipsawSweeps: boolean;     // 双向扫损 (假突破)
convergingPattern: boolean; // 收敛形态 (楔形/三角形)
stochasticCompression: boolean; // KDJ 钝化/震荡
fakeBreakoutTrap?: boolean;      // 假突破陷阱 (允许 Turtle Soup 激活)
⋮----
hurst?: HurstResult;            // 赫斯特指数（H1 级别统计量）
volatilitySqueeze?: VolatilitySqueezeResult;  // 波动率挤压检测
⋮----
high: number;               // 区间高点
low: number;                // 区间低点
rangePercent: number;       // 区间幅度百分比
⋮----
convergenceInfo?: {             // 收敛形态详情
⋮----
compressionRatio: number;   // 压缩比 (< 1 为收敛)
⋮----
reason: string;                 // 判定原因
⋮----
interface ConsolidationInput {
    symbol: string;  // 新增: 用于动态阈值
    m15Candles: CandleWithIndicators[];
    h1Candles?: CandleWithIndicators[];  // 新增: H1 级别盘整检测
    h4Candles: CandleWithIndicators[];
    currentPrice: number;
    atr: number;
    liquidity?: LiquidityAnalysis;
    lookbackHours?: number;  // 检测回溯时间 (默认 8 小时)
    /** H1 收盘价序列，用于赫斯特指数计算（推荐 64～128 根）*/
    h1Closes?: number[];
}
⋮----
symbol: string;  // 新增: 用于动态阈值
⋮----
h1Candles?: CandleWithIndicators[];  // 新增: H1 级别盘整检测
⋮----
lookbackHours?: number;  // 检测回溯时间 (默认 8 小时)
/** H1 收盘价序列，用于赫斯特指数计算（推荐 64～128 根）*/
⋮----
/**
 * 检测 MSS 历史 (回溯指定时间内的所有 MSS)
 */
function detectMSSHistory(
    candles: CandleWithIndicators[],
    lookbackMs: number
): StructureBreak[]
⋮----
// 滑动窗口检测: 每根 K 线滚动检测结构破坏
const windowSize = 20;  // 至少需要 20 根 K 线
⋮----
// 只检测在时间范围内的
⋮----
// 去重: 检查是否已经记录了相似的 MSS (时间差 < 2 根 K 线)
⋮----
Math.abs(existing.time - breakResult.time) < 2 * 15 * 60 * 1000 && // 2 根 M15
⋮----
/**
 * 检测双向 MSS (盘整核心指标)
 */
function detectBidirectionalMSS(
    mssHistory: StructureBreak[]
):
⋮----
// 双向 MSS: 两个方向都至少出现 1 次
⋮----
// 新增: 计算两个方向 MSS 之间的最小间隔
// 如果间隔太长 (>4h)，可能只是正常趋势回调，不是真正的盘整
⋮----
// 真正的盘整: 两个方向的 MSS 间隔 < 4 小时
⋮----
/**
 * 检测 ATR 收缩 (波动率下降)
 */
function detectATRContraction(
    candles: CandleWithIndicators[],
    currentATR: number
):
⋮----
// 比较最近 ATR 与历史 ATR (20 周期)
⋮----
// 计算历史 ATR (第 10-30 根 K 线的平均 ATR)
⋮----
// ATR 收缩: 当前 ATR < 历史 70%
⋮----
/**
 * 检测窄幅震荡
 */
function detectNarrowRange(
    candles: CandleWithIndicators[],
    lookbackBars: number,
    symbol: string
):
⋮----
// 动态阈值: 根据币种调整
⋮----
/**
 * 检测 KDJ/Stochastic 指标是否钝化（震荡区间常见现象）
 */
function detectStochasticCompression(
    candles: CandleWithIndicators[],
    period: number = 14,
    smooth: number = 3
):
⋮----
/**
 * 检测双向扫损 (Whipsaw)
 */
function detectWhipsawSweeps(
    liquidity: LiquidityAnalysis | undefined,
    lookbackMs: number,
    referenceTime: number
): boolean
⋮----
// 筛选时间范围内的扫损
⋮----
// 检测是否有双向扫损
⋮----
// 双向扫损: 两边都有扫损
⋮----
/**
 * 检测收敛形态 (楔形/三角形)
 * 
 * 楔形特征:
 * - 高点越来越低 (Lower Highs)
 * - 低点越来越高 (Higher Lows)  
 * - 或反之 (扩张楔形)
 * 
 * 这是 ICT 策略最容易产生假信号的市场环境
 */
function detectConvergingPattern(
    candles: CandleWithIndicators[],
    lookbackBars: number
):
⋮----
// 分成两半比较区间收缩
⋮----
// 计算前半段和后半段的区间
⋮----
// 压缩比 = 后半段区间 / 前半段区间
⋮----
// 检测收敛类型
const isHighsLower = secondHigh < firstHigh;  // 高点在降低
const isLowsHigher = secondLow > firstLow;    // 低点在升高
⋮----
// 收敛楔形: 高点降低 AND 低点升高 AND 压缩比 < 0.7
⋮----
type = 'triangle';  // 对称三角形
⋮----
type = 'wedge';     // 楔形 (单边收敛)
⋮----
/**
 * 综合盘整检测
 */
export function detectConsolidation(input: ConsolidationInput): ConsolidationResult
⋮----
h1Candles,  // 新增 H1 级别
h4Candles: _h4Candles,  // 保留用于将来 H4 级别盘整检测
currentPrice: _currentPrice,  // 保留用于将来扩展
⋮----
const lookbackBarsM15 = Math.floor(lookbackHours * 4); // M15: 4 根/小时
const lookbackBarsH1 = Math.floor(lookbackHours * 1);  // H1: 1 根/小时
⋮----
// 1. 检测双向 MSS (新增时间间隔验证)
⋮----
// 2. 检测 ATR 收缩 (M15)
⋮----
// 3. 检测窄幅震荡 (使用动态阈值)
⋮----
// 4. H1 级别窄幅检测 (更敏感的盘整检测)
⋮----
// 5. 检测双向扫损
⋮----
// 6. 检测收敛形态 (楔形/三角形) - ICT 策略最易失败的场景
⋮----
// 7. Stochastic/KDJ 钝化 (K 与 D 长时间纠缠)
⋮----
// 8. 赫斯特指数 (H1 统计长记忆性)
⋮----
// 9. 波动率挤压检测 (双窗口 H + ATR 扩张)
⋮----
// 综合评分
⋮----
confidence += 60; // 提高权重: 双向 MSS 是震荡的铁证，直接触发盘整判定 (>=50)
⋮----
// M15 窄幅检测
⋮----
// H1 窄幅检测 (新增: 即使 M15 没有触发，H1 也可以触发)
⋮----
// 收敛形态检测 (楔形/三角形是 ICT 最易失败的场景)
⋮----
// 楔形/三角形额外加分 (强盘整信号)
⋮----
// 赫斯特指数调整 (在所有几何指标之后应用统计修正)
⋮----
// 假突破陷阱: 在所有加分项之后再应用上限，防止 stochastic/convergence 绕过上限
⋮----
// 置信度归一化，避免多指标叠加导致 >100
⋮----
// 盘整判定: confidence >= 50
⋮----
// 使用 M15 区间信息 (优先) 或 H1
⋮----
/**
 * 盘整过滤器: 根据盘整状态调整信号门槛
 *
 * @returns 调整后的最低分数要求 (undefined 表示拒绝所有信号)
 */
export function getConsolidationAdjustedThreshold(
    consolidation: ConsolidationResult,
    originalThreshold: number,
    signalType: 'MSS' | 'BOS'
): number | undefined
⋮----
// 非盘整: 使用原始门槛
⋮----
// 盘整市场策略 (严厉防磨损模式):
⋮----
// 1. BOS 趋势信号: 完全禁止
// 在盘整中，BOS 通常是 Liquidity Sweep (假突破)。只有等真正走出行情再说。
⋮----
// 2. MSS 反转信号: 视置信度而定
// 盘整中做反转 (高抛低吸) 是合理的，但需要过滤掉中间的噪音。
⋮----
// 高置信度盘整 (例如双向MSS+窄幅+收缩): 市场极度混乱，休息
⋮----
// 中等盘整: 只接受 A 级 (85+)
⋮----
// ============= 区间大小感知的智能盘整策略 =============
⋮----
/**
 * 检查价格是否在区间边缘
 * 边缘定义: 下沿 25% 以下 或 上沿 75% 以上
 */
function isAtRangeEdge(
    currentPrice: number,
    rangeHigh: number,
    rangeLow: number
):
⋮----
function evaluateH1BreakoutConfirmation(
    h1Candles: CandleWithIndicators[] | undefined,
    rangeHigh: number,
    rangeLow: number,
    atr: number,
    signalDirection: Direction,
):
⋮----
/**
 * 检查是否满足突破确认条件
 * 突破条件: 价格超出区间 + 强力 Displacement (≥2.0x ATR)
 */
function isBreakoutConfirmed(
    currentPrice: number,
    rangeHigh: number,
    rangeLow: number,
    displacement: Displacement | undefined,
    signalDirection: Direction,
    h1BreakoutConfirmed: boolean,
): boolean
⋮----
// 做多: 价格突破区间上沿 + 多头位移
⋮----
// 做空: 价格跌破区间下沿 + 空头位移
⋮----
/**
 * 评估盘整市场的交易策略
 * 
 * 根据区间大小返回不同的策略:
 * - 大区间 (≥4x ATR): 允许边缘反转入场
 * - 中等区间 (2-4x ATR): 只允许突破入场
 * - 小区间 (<2x ATR): 跳过，没有利润空间
 */
export function evaluateConsolidationTradeability(
    consolidation: ConsolidationResult,
    currentPrice: number,
    atr: number,
    displacement: Displacement | undefined,
    signalDirection: Direction,
    signalType: 'MSS' | 'BOS',
    h1Candles?: CandleWithIndicators[],
): ConsolidationTradeability
⋮----
// 非盘整市场: 正常交易
⋮----
// 无区间信息时退回旧逻辑
⋮----
// ========== 特殊处理: 收敛形态 (三角形/楔形) ==========
// 收敛形态中波动率收缩，极易出现假突破 (Fakeout)
// 策略: 禁止内部反转交易，必须等待强力突破
⋮----
const isTight = convergence.compressionRatio < 0.5; // 压缩很严重
⋮----
// 区间小或压缩严重: 即使突破也可能是假的，直接跳过，等待形态破坏后再做
⋮----
// 区间尚可: 允许强力突破
⋮----
// ========== 小区间 (<2x ATR): 跳过 ==========
⋮----
// ========== 中等区间 (2-4x ATR): 只允许突破 ==========
⋮----
// 检查是否满足突破条件 (严厉模式: 需要 2.5x ATR 强力突破)
// 只有极强的动能才配得上在震荡中做突破，否则大概率是假动作
⋮----
// ========== 大区间 (≥4x ATR): 允许边缘反转 ==========
⋮----
// 验证信号方向与边缘匹配
// 在下沿 → 只允许做多; 在上沿 → 只允许做空
⋮----
// 额外检查: 需要有反向 Displacement (至少 1.5x ATR)
⋮----
// 大区间但价格在中间位置
```

## File: src/modules/structure-detector/data-utils.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { CandleWithIndicators } from '../../types/index.js';
import { aggregateToH1 } from './data-utils.js';
⋮----
/**
 * Helper function to create CandleWithIndicators
 */
function cwi(
    datetime: number,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number = 1,
    atr?: number
): CandleWithIndicators
⋮----
// 4 M15 candles representing 1 hour
⋮----
cwi(1000, 100, 105, 98, 102, 10, 2),   // First: open=100, high=105, low=98
cwi(2000, 102, 108, 101, 106, 12, 2),  // high=108 (max)
cwi(3000, 106, 107, 97, 99, 8, 2),     // low=97 (min)
cwi(4000, 99, 103, 98, 101, 15, 2),    // Last: close=101
⋮----
expect(result[0].timestamp).toBe(1000);      // First candle's timestamp
expect(result[0].datetime).toBe(1000);       // First candle's datetime
expect(result[0].open).toBe(100);            // First candle's open
expect(result[0].high).toBe(108);            // Max of all highs
expect(result[0].low).toBe(97);              // Min of all lows
expect(result[0].close).toBe(101);           // Last candle's close
expect(result[0].volume).toBe(45);           // Sum of all volumes (10+12+8+15)
expect(result[0].atr).toBe(2);               // Average ATR
⋮----
// 8 M15 candles = 2 H1 candles
⋮----
// First H1 group
⋮----
// Second H1 group
⋮----
// First H1 candle
⋮----
// Second H1 candle
⋮----
expect(result[1].volume).toBe(68);           // 20+18+14+16
⋮----
// 5 M15 candles = 1 complete H1 + 1 incomplete
⋮----
// Complete H1 group
⋮----
// Incomplete group at end (only 1 candle)
⋮----
// Should include the incomplete group at the end
⋮----
// 6 M15 candles = 1 complete H1 + 2 incomplete at end
⋮----
// Complete H1 group
⋮----
// Incomplete group at end (2 candles)
⋮----
// Second H1 should be from the incomplete group at end
⋮----
// Average ATR = (1.0 + 2.0 + 3.0 + 4.0) / 4 = 2.5
⋮----
cwi(1000, 100, 105, 98, 102, 10),    // No ATR
⋮----
cwi(3000, 106, 107, 97, 99, 8),       // No ATR
⋮----
// Average ATR = (0 + 2 + 0 + 4) / 4 = 1.5
⋮----
// Average of all undefined (0) / 4 = 0, but with || undefined it becomes undefined
⋮----
// Single candle at end should be included
⋮----
// 3 candles at end should be aggregated as one H1
```

## File: src/modules/structure-detector/data-utils.ts
```typescript
import type { CandleWithIndicators } from '../../types/index.js';
⋮----
/**
 * 将 M15 K线聚合为 H1 K线
 * 每 4 根 M15 = 1 根 H1
 */
export function aggregateToH1(m15Candles: CandleWithIndicators[]): CandleWithIndicators[]
⋮----
// 按小时分组 (每根 H1 由 4 根 M15 组成)
⋮----
// 只有完整的 4 根 M15 才聚合为 H1
⋮----
// ATR 取平均值
```

## File: src/modules/structure-detector/displacement.ts
```typescript
/**
 * Displacement 检测模块
 * 检测机构大单入场信号
 */
⋮----
import type { Candle } from '../../types/index.js';
import type { Displacement, Direction, FVG, VolumeImbalance, FillType } from './types.js';
import type { StrategyProfile } from '../../config/strategy-profiles.js';
import { getDefaultStrategyProfile } from '../../config/strategy-profiles.js';
import type { VolumeValidationConfig } from '../volume-analysis/types.js';
import { calculateRVolByTime, validateDisplacementVolume } from '../volume-analysis/calculator.js';
⋮----
interface DisplacementSelectionHint {
    direction?: Direction;
    anchorTime?: number;
    maxAnchorGapCandles?: number;
}
⋮----
interface DisplacementCandidate extends Displacement {
    robustScore: number;
}
⋮----
/**
 * 检测 Displacement
 * 默认行为：返回回溯窗口内最强位移
 * 可选行为：当提供结构方向/时间锚点时，优先返回与结构同向且时间邻近的位移
 */
export function detectDisplacement(
    candles: Candle[],
    atr: number,
    profile?: StrategyProfile,
    hint?: DisplacementSelectionHint,
): Displacement | null
⋮----
// 检查回溯窗口
⋮----
// 1. 基本门槛
⋮----
// 2. 检查 FVG 关联
// 改进: 不仅检查单根，还检查该位移是否是 FVG 形成结构的一部分
// FVG 通常由 [i-1, i, i+1] 形成。如果当前 K 线是 i (中间那根)，或者 i-1 (Displacement 起始)
⋮----
// 3. 最低有效阈值：无论是否有 FVG，必须至少 1.0x ATR (原 0.8)
// 防止盘整区间噪音信号，提高动能要求
⋮----
// 4. 质量过滤
⋮----
// 计算连续蜡烛
⋮----
let cumulativeBody = body; // 初始只包含当前大 K 线
⋮----
function estimateIntervalMs(candles: Candle[]): number
⋮----
function stripCandidateMeta(candidate: DisplacementCandidate): Displacement
⋮----
/**
 * 检测 FVG (Fair Value Gap)
 */
export function detectFVGs(candles: Candle[], atr: number, limit: number = 5): FVG[]
⋮----
// 需要至少 3 根蜡烛
⋮----
// 从最新向前检查
⋮----
// 动态计算最小 gap 阈值 (使用 0.1x ATR)
⋮----
// Bullish FVG: prev.high < next.low
⋮----
// Bearish FVG: prev.low > next.high
⋮----
/**
 * 检查某个索引位置是否有 FVG
 *
 * 注意: 使用与 detectFVGs 相同的最小 gap 过滤 (0.1x ATR)，
 * 防止微小 FVG 降低 displacement 门槛。
 */
function checkFVGAtIndex(candles: Candle[], index: number, atr?: number): boolean
⋮----
// Bullish FVG
⋮----
// Bearish FVG
⋮----
/**
 * 检查 FVG 是否已被填补 (历史穿透检测)
 * 遍历 FVG 形成后的所有 K 线，检测是否有任何 K 线曾穿透 FVG 区域
 * 
 * @param fvg FVG 对象
 * @param candles K 线数据 (用于检测历史穿透)
 */
export function checkFVGFilled(fvg: FVG, candles: Candle[]): boolean
⋮----
// 只检查 FVG 形成之后的 K 线
// ICT 理论：影线穿透 FVG 50% 以上才算 filled
// 之前的逻辑太严格：影线触及边缘就算 filled
⋮----
// 跳过 FVG 形成之前的 K 线
⋮----
// 多头 FVG (支撑): 影线低点穿透 FVG 50% 才算 filled
// 即 candle.low <= fvgMidpoint
⋮----
// 空头 FVG (阻力): 影线高点穿透 FVG 50% 才算 filled
// 即 candle.high >= fvgMidpoint
⋮----
/**
 * 判断 FVG 填补类型
 * 
 * 根据 ICT 视频核心:
 * - none: 未被触及
 * - tap: 只有影线进入 (Tap Gap，仍然有效)
 * - partial: 实体进入但未超过 50% 中线 (谨慎)
 * - full: 实体完全穿过 (失效或 IFVG)
 * 
 * @param fvg FVG 对象
 * @param candles K 线数据
 */
export function determineFillType(fvg: FVG, candles: Candle[]): FillType
⋮----
// 跳过 FVG 形成之前的 K 线
⋮----
// Bullish FVG (支撑区域，在下方)
// 价格下跌进入 FVG 区域
⋮----
// 1. Full: 实体收盘穿过 FVG 底部
⋮----
return 'full';  // 最严重的情况，直接返回
⋮----
// 2. Partial: 实体进入 FVG 且触及/超过中线
⋮----
// 3. Tap: 只有影线进入 (low <= top 但 bodyBottom >= top)
⋮----
// Bearish FVG (阻力区域，在上方)
// 价格上涨进入 FVG 区域
⋮----
// 1. Full: 实体收盘穿过 FVG 顶部
⋮----
// 2. Partial: 实体进入 FVG 且触及/超过中线
⋮----
// 3. Tap: 只有影线进入 (high >= bottom 但 bodyTop <= bottom)
⋮----
/**
 * A级/执行路径可用的 FVG 判定
 * 当前策略采用严格定义：仅允许完全未触及（fillType=none）且未标记 filled。
 */
export function isValidEntryFVG(fvg: Pick<FVG, 'filled' | 'fillType'>): boolean
⋮----
/**
 * 获取最近未填补的 FVG
 * 
 * @param fvgs FVG 列表
 * @param candles K 线数据 (用于检测历史穿透)
 * @param direction 可选方向过滤
 */
export function getUnfilledFVGs(
    fvgs: FVG[],
    candles: Candle[],
    direction?: Direction
): FVG[]
⋮----
// 方向过滤
⋮----
// 统一以 fillType 作为权威来源，避免与 midpoint-filled 双重判定造成歧义。
⋮----
/**
 * 检测 IFVG (Inverted Fair Value Gap)
 * IFVG: FVG 被填补后，当价格再次测试该区域时被尊重（反弹）
 * 
 * Bearish FVG -> 被填补后变成支撑 (IFVG 做多)
 * Bullish FVG -> 被填补后变成阻力 (IFVG 做空)
 */
/**
 * 检测 IFVG (Inverted Fair Value Gap)
 * IFVG: FVG 被收盘击穿 (Violated) 后，极性反转
 * 
 * Bearish IFVG (Resist): Bullish FVG (Support) 被向下击穿 -> 变成阻力
 * Bullish IFVG (Support): Bearish FVG (Resist) 被向上击穿 -> 变成支撑
 */
export function detectIFVGs(candles: Candle[], limit: number = 10): FVG[]
⋮----
// 先检测历史 FVG
⋮----
// 1. 识别原始 FVG
⋮----
// Original Bullish FVG (Support)
⋮----
type: 'bullish', // Starts as bullish
⋮----
// Original Bearish FVG (Resistance)
⋮----
type: 'bearish', // Starts as bearish
⋮----
// 2. 检查是否被击穿 (Violated) 并反转 (Inverted)
⋮----
// 检查是否发生破坏 (Violation)
⋮----
// Bullish FVG (Support) 被击穿: 收盘价低于 Bottom
⋮----
fvg.filled = true; // 标记为失效
⋮----
// Bearish FVG (Resist) 被击穿: 收盘价高于 Top
⋮----
fvg.filled = true; // 标记为失效
⋮----
// 已被击穿，检查是否形成反向支撑/阻力 (Inversion Confirm)
// 这里的逻辑可以更灵活：只要它还在，就作为 IFVG 输出。
// 真正的 IFVG 信号是：价格回到该区域并反应。我们这里只输出 IFVG 结构。
⋮----
// 修改 FVG 属性为 IFVG
⋮----
fvg.respectedAt = checkCandle.datetime; // 记录反转确认时间(或首次被击穿后存在的时间)
⋮----
// 翻转类型：Bullish FVG -> Bearish IFVG (Resist)
// 但为了保持数据结构一致性，type 字段通常表示它当前的作用方向？
// 标准做法是：type 保持原始，inverted=true 表示作用反向。
// 或者：type 变反。
// 根据 detectIFVGs 下方的 getRelevantIFVGs 逻辑：
// "做空: 找 Bullish IFVG (原支撑变阻力)"
// 这意味着 type 应该保持原始的 'bullish'，但 inverted=true。
⋮----
break; // 找到一个 IFVG 也就够了，不需要重复添加
⋮----
/**
 * 获取适合入场的 IFVG
 * 做空时找 Bullish IFVG (原支撑变阻力)
 * 做多时找 Bearish IFVG (原阻力变支撑)
 */
export function getRelevantIFVGs(
    ifvgs: FVG[],
    currentPrice: number,
    direction: Direction
): FVG[]
⋮----
// IFVG 方向反转: bearish FVG 变成做多入场区, bullish FVG 变成做空入场区
⋮----
// 做空: 找 Bullish IFVG (原支撑变阻力), 且在当前价格上方
⋮----
// 做多: 找 Bearish IFVG (原阻力变支撑), 且在当前价格下方
⋮----
/**
 * 检测 Volume Imbalance (VI)
 * VI: 相邻两根 K 线实体未重叠，形成实体间隙 (Gap)
 * 即使影线重叠，只要实体不重叠，也是 VI
 */
/**
 * 为 Displacement 附加成交量验证数据
 * 不修改原始检测逻辑，仅在检测后附加 RVol 信息
 */
export function enrichDisplacementWithVolume(
    displacement: Displacement | null,
    candles: Candle[],
    volumeConfig: VolumeValidationConfig,
): Displacement | null
⋮----
export function detectVolumeImbalance(candles: Candle[], limit: number = 5): VolumeImbalance[]
⋮----
// Bullish VI: Next body > Current body
// gap between currentBodyTop ... nextBodyBottom
⋮----
// Bearish VI: Next body < Current body
// gap between nextBodyTop ... currentBodyBottom
```

## File: src/modules/structure-detector/hurst.ts
```typescript
/**
 * 赫斯特指数 (Hurst Exponent) 计算模块
 *
 * 赫斯特指数量化时间序列的"长期记忆性"，用于识别市场状态：
 *
 *   H > 0.6  →  趋势型（持续性）    → 适合 Standard ICT
 *   0.4–0.6  →  随机游走            → 谨慎入场，提高门槛
 *   H < 0.4  →  均值回归（反持续性） → 适合 Turtle Soup
 *
 * 算法：R/S Analysis（重标极差分析）
 *   - 对各子区间计算对数收益率的极差/标准差比值
 *   - 通过最小二乘法对 log(R/S) ~ log(n) 线性拟合，斜率即 H
 *
 * 适用范围：
 *   - 推荐使用 H1 收盘价，最近 64～128 根 K 线
 *   - M5/M15 噪音过大，不建议直接使用
 */
⋮----
import type { CandleWithIndicators } from '../../types/index.js';
⋮----
/** 赫斯特指数分类 */
export type HurstRegime = 'TRENDING' | 'RANDOM_WALK' | 'MEAN_REVERTING';
⋮----
/** 波动率挤压状态 */
export type SqueezeState = 'COILING' | 'BREAKOUT' | 'NONE';
⋮----
export interface VolatilitySqueezeResult {
    state: SqueezeState;
    priorH: number | null;            // H over bars [-128..-65]
    currentH: number | null;          // H over bars [-64..]
    hDelta: number | null;            // currentH - priorH
    currentATR: number;
    meanATR20: number | null;         // 20-bar mean per-candle ATR
    atrExpansionRatio: number | null;
    reason: string;
}
⋮----
priorH: number | null;            // H over bars [-128..-65]
currentH: number | null;          // H over bars [-64..]
hDelta: number | null;            // currentH - priorH
⋮----
meanATR20: number | null;         // 20-bar mean per-candle ATR
⋮----
/** 排列熵 × 赫斯特指数 信号质量分类 */
export type SignalQuality =
    | 'CLEAN_TREND' | 'NOISY_TREND'
    | 'CLEAN_REVERSION' | 'NOISY_REVERSION'
    | 'INDETERMINATE';
⋮----
export interface HurstResult {
    value: number;            // H 值 (0~1)
    regime: HurstRegime;      // 市场状态分类
    confidence: number;       // 置信度 (0~100)，基于样本量和拟合质量
    sampleSize: number;       // 参与计算的价格数量
    description: string;      // 人类可读描述
    entropy?: number;         // 归一化排列熵 [0,1]
    entropyZ?: number;        // 排列熵 Z-score (相对滑动基线)
    signalQuality?: SignalQuality; // 信号质量分类
}
⋮----
value: number;            // H 值 (0~1)
regime: HurstRegime;      // 市场状态分类
confidence: number;       // 置信度 (0~100)，基于样本量和拟合质量
sampleSize: number;       // 参与计算的价格数量
description: string;      // 人类可读描述
entropy?: number;         // 归一化排列熵 [0,1]
entropyZ?: number;        // 排列熵 Z-score (相对滑动基线)
signalQuality?: SignalQuality; // 信号质量分类
⋮----
/** H 值阈值常量 */
⋮----
const HURST_MIN_SAMPLES = 32;         // 最少样本数
const HURST_RECOMMENDED_SAMPLES = 64; // 推荐样本数
⋮----
/** 波动率挤压检测阈值 */
const SQUEEZE_COIL_H_MIN = 0.43;              // 低于 iid 校准带下限 0.42
const SQUEEZE_COIL_H_MAX = 0.57;              // 高于 iid 校准带上限 0.58
const SQUEEZE_H_DELTA_MIN = 0.08;             // ~1σ 估计噪声，排除抖动
const SQUEEZE_H_CURRENT_MIN = 0.53;           // currentH 须在随机游走上半区
const SQUEEZE_ATR_EXPANSION_RATIO = 1.15;     // 15% 扩张 = 早期检测点
const SQUEEZE_ATR_LOOKBACK = 20;              // 过去20根均值
⋮----
/** 排列熵 (Permutation Entropy) 参数 */
const PE_EMBEDDING_DIM = 3;           // 嵌入维度: 3! = 6 种序模式，适合 128 bars
const PE_DELAY = 1;                   // 时间延迟
const PE_BASELINE_STRIDE = 8;         // 滑动窗口步长
const PE_MIN_BASELINE_SAMPLES = 5;    // 最少基线样本数
const ENTROPY_Z_CLEAN = -1.0;         // z < -1 = 显著有序
const ENTROPY_Z_NOISY = 1.0;          // z > +1 = 显著无序
⋮----
/**
 * 计算单个子序列的 R/S 值
 * R/S = (max(累积偏差) - min(累积偏差)) / 标准差
 */
function computeRS(returns: number[]): number
⋮----
// 均值
⋮----
// 累积偏差
⋮----
// 极差
⋮----
// 标准差
⋮----
/**
 * Lanczos 近似计算 ln(Gamma(z))，z > 0
 * 用于 Anis-Lloyd 公式中的 Gamma 比率
 */
function lnGamma(z: number): number
⋮----
// Lanczos coefficients (g=7, n=9)
⋮----
// 反射公式：Gamma(z)*Gamma(1-z) = pi/sin(pi*z)
⋮----
/**
 * Anis-Lloyd (1976) 期望 R/S 值
 *
 * 对 iid 序列长度 n，理论期望为：
 *   E[R/S]_n = Gamma((n-1)/2) / (sqrt(pi) * Gamma(n/2)) * sum_{i=1}^{n-1} sqrt((n-i)/i)
 *
 * 当 n > 340 时使用渐近近似避免溢出：
 *   E[R/S]_n ≈ (1/sqrt(n*pi/2)) * sum
 */
function anisLloydExpectedRS(n: number): number
⋮----
/**
 * R/S Analysis 核心（含 Anis-Lloyd 偏差校正）
 *
 * 对多个子区间尺度计算平均 R/S，除以该尺度下 iid 理论期望值，
 * 对校正后的比值 V_s = RS_obs / E[RS] 进行 log-log 线性回归：
 *   log(V_s) = (H - 0.5) * log(s) + const
 *   H = slope + 0.5
 *
 * 同时返回 R² 用于置信度评估
 */
function rsAnalysis(logReturns: number[]):
⋮----
// 选取尺度（确保每个尺度至少有 4 个子区间）
⋮----
const logV: number[] = [];  // log of corrected ratio V_s
⋮----
// 最小二乘线性回归：logV = slope * logScale + const
// slope = H - 0.5  →  H = slope + 0.5
⋮----
// 计算 R²
⋮----
/**
 * 根据 H 值分类市场状态
 */
function classifyHurst(h: number): HurstRegime
⋮----
/**
 * 根据样本量和回归拟合质量估算置信度
 * R² 低意味着 log-log 拟合差，H 估计不可靠
 */
function estimateConfidence(sampleSize: number, rSquared: number = 1): number
⋮----
// R² 惩罚：低于 0.8 开始降低置信度，线性缩放
⋮----
// ============= 排列熵 (Permutation Entropy) =============
⋮----
/**
 * 计算时间序列的归一化排列熵
 *
 * 提取嵌入维度 m 的序模式，计算 Shannon 熵并归一化到 [0,1]。
 * PE ≈ 0 表示完全有序（如单调递增），PE ≈ 1 表示完全随机。
 *
 * @param series - 时间序列（长度至少 m + (m-1)*d）
 * @param m - 嵌入维度（默认 3，产生 6 种序模式）
 * @param d - 时间延迟（默认 1）
 * @returns 归一化排列熵 [0,1]
 */
export function computePermutationEntropy(series: number[], m: number = PE_EMBEDDING_DIM, d: number = PE_DELAY): number
⋮----
if (n < minLen) return 1.0; // 数据不足时返回最大熵
⋮----
// 提取序模式并计数
⋮----
// 构建嵌入向量的索引
⋮----
// 获取值并按值排序（相等时按索引顺序打破平局）
⋮----
// Shannon 熵
⋮----
// 归一化: H / ln(m!)
⋮----
/**
 * 计算排列熵的 Z-score 基线
 *
 * 在完整 H1 收盘价上滑动窗口，计算每个窗口的 PE，
 * 然后将当前窗口的 PE 与历史均值/标准差比较得出 Z-score。
 *
 * @param closes - 完整收盘价数组（通常 ~336 根 H1 数据）
 * @param window - PE 计算窗口大小（默认 128）
 * @returns 基线结果，或 null（数据不足）
 */
export function computeEntropyBaseline(
    closes: number[],
    window: number = 64,
):
⋮----
// 当前窗口的 PE
⋮----
// 滑动窗口采样
⋮----
// Z-score，std 下限 0.001 防止极端值
⋮----
/**
 * 根据赫斯特指数和排列熵 Z-score 分类信号质量
 *
 * 信号质量矩阵：
 *   H>0.6 + z<-1.0 → CLEAN_TREND       (可靠趋势)
 *   H>0.6 + z>+1.0 → NOISY_TREND       (脆弱趋势)
 *   H<0.4 + z<-1.0 → CLEAN_REVERSION   (可靠均值回归)
 *   H<0.4 + z>+1.0 → NOISY_REVERSION   (不可靠均值回归)
 *   else            → INDETERMINATE
 */
export function classifySignalQuality(h: number, entropyZ: number): SignalQuality
⋮----
/**
 * 计算赫斯特指数
 *
 * @param closes - 收盘价数组（时间升序，最新在末尾）
 *                 推荐使用 H1 数据，最近 64～128 根
 * @returns HurstResult | null（样本不足时返回 null）
 */
export function computeHurst(closes: number[]): HurstResult | null
⋮----
// 使用最近 64 根以内的数据（~2.7天 H1，避免体制混合拉平 H 值）
⋮----
// 计算对数收益率
⋮----
// 排列熵分析（使用完整 closes 数组做滑动基线）
⋮----
/**
 * 根据赫斯特指数调整盘整置信度
 *
 * - H < 0.4（均值回归）：盘整置信度 +20，强化 Turtle Soup 路由
 * - H > 0.6（趋势型）：盘整置信度 -15，支持趋势路由
 * - 0.4–0.6（随机游走）：不调整
 *
 * @returns 调整量（正数 = 增加盘整置信度，负数 = 降低）
 */
export function getHurstConsolidationAdjustment(hurst: HurstResult | null): number
⋮----
/**
 * 根据赫斯特指数调整信号评分
 *
 * 在趋势型市场中奖励 ICT 趋势策略信号，
 * 在均值回归市场中奖励 Turtle Soup 反转信号。
 *
 * @param strategyType - 'TREND_FOLLOWING' | 'MEAN_REVERTING'
 * @returns 分数调整量（最大 ±8 分）
 */
export function getHurstScoreBonus(
    hurst: HurstResult | null,
    strategyType: 'TREND_FOLLOWING' | 'MEAN_REVERTING',
): number
⋮----
// NOISY 信号不可靠，不给予奖励
⋮----
const magnitude = Math.abs(hurst.value - 0.5); // 0～0.4 距离中心越远越强
⋮----
return Math.round(magnitude * 20 * confidenceFactor); // 最大约 8
⋮----
return Math.round(magnitude * 20 * confidenceFactor); // 最大约 8
⋮----
// ============= 波动率挤压 (Volatility Squeeze) =============
⋮----
/**
 * 轻量 H 标量计算，跳过 PE 管线。
 * 内部调用 rsAnalysis 并返回 H ∈ [0.1, 0.9] 或 null。
 *
 * @param closes - 收盘价数组（时间升序）
 * @param window - 使用最近多少根（默认 64）
 */
export function computeHValue(
    closes: number[],
    window: number = HURST_RECOMMENDED_SAMPLES,
): number | null
⋮----
/**
 * 检测波动率挤压→突破的相变时刻。
 *
 * 双窗口 H：priorH = closes[-128..-65], currentH = closes[-64..]
 * ATR 扩张：currentATR / mean(last 20 h1Candles .atr) ≥ 1.15
 *
 * 状态判定：
 *   COILING:   priorH ∈ [0.43, 0.57] + ATR 收缩 + H 未上扬
 *   BREAKOUT:  priorH ∈ [0.43, 0.57] + hDelta ≥ 0.08 + currentH > 0.53 + ATR 扩张
 *   NONE:      其他
 */
export function detectVolatilitySqueeze(params: {
    closes: number[];
    currentATR: number;
    h1Candles?: CandleWithIndicators[];
}): VolatilitySqueezeResult
⋮----
const makeNone = (reason: string): VolatilitySqueezeResult => (
⋮----
// 需要 ≥128 bars 做双窗口
⋮----
// 双窗口 H 计算
const priorH = computeHValue(closes.slice(0, -64));  // last 64 of [0..-65] = bars[-128..-65]
const currentH = computeHValue(closes);                // last 64 = bars[-64..]
⋮----
// ATR 扩张检测
⋮----
// BREAKOUT 判定
⋮----
// COILING 判定
```

## File: src/modules/structure-detector/market-context.ts
```typescript
/**
 * ICT 市场上下文模块
 * 包含 Premium/Discount 区域和 HTF 趋势分析
 */
⋮----
import type { Candle } from '../../types/index.js';
import type { Direction } from './types.js';
import { getLatestEMA } from './trend.js';
import { detectSwingPoints } from './market-structure.js';
⋮----
// ============= Premium/Discount 区域 =============
⋮----
/**
 * 价格位置区域
 */
export type PriceZone = 'premium' | 'discount' | 'equilibrium';
⋮----
/**
 * 计算 Premium/Discount 区域
 * 根据给定范围 (通常是日线或周线范围) 确定当前价格位置
 * - Premium (溢价): position > 0.65 (适合做空)
 * - Discount (折扣): position < 0.35 (适合做多)
 * - Equilibrium (均衡): 0.35 <= position <= 0.65
 * 
 * @param currentPrice 当前价格
 * @param rangeHigh 范围高点
 * @param rangeLow 范围低点
 * @returns 价格区域和比例位置
 */
export function calculatePriceZone(
    currentPrice: number,
    rangeHigh: number,
    rangeLow: number
):
⋮----
// position: 0 = 最低, 1 = 最高
⋮----
/**
 * 获取日级别 Premium/Discount 区域
 */
export function getDailyPriceZone(
    dailyCandles: Candle[],
    currentPrice: number
):
⋮----
// 使用昨日高低点
⋮----
/**
 * 获取周级别 Premium/Discount 区域
 */
export function getWeeklyPriceZone(
    weeklyCandles: Candle[],
    currentPrice: number
):
⋮----
// 使用上周高低点
⋮----
// ============= HTF 趋势分析 =============
⋮----
/**
 * HTF 趋势判断结果
 */
export interface HTFTrend {
    direction: Direction | 'neutral';
    strength: 'strong' | 'moderate' | 'weak';
    higherHighs: boolean;
    lowerLows: boolean;
    aboveEMA: boolean;
}
⋮----
/**
 * 检测 Higher Highs / Lower Lows 结构
 *
 * 使用 swing point（分形摆动点）而非连续 K 线比较。
 * 在 H4/D1 级别，连续 K 线的 high/low 几乎永远不会单调递增/递减，
 * 导致之前的实现几乎总返回 false，使 HTF 趋势判断退化为纯 EMA 检查。
 *
 * 新逻辑：
 * 1. 使用 detectSwingPoints 提取 swing highs/lows
 * 2. 检查最近 N 个 swing highs 是否依次递增 (Higher Highs)
 * 3. 检查最近 N 个 swing lows 是否依次递减 (Lower Lows)
 *
 * @param candles K 线数组 (H4 或 D1)
 * @param minSwings 至少需要多少个 swing point 来判断趋势 (默认 3)
 */
function detectHHLL(candles: Candle[], minSwings: number = 3):
⋮----
// 使用 n=2 的分形检测（左右各 2 根 K 线确认）
⋮----
// 检查最近 minSwings 个 swing highs 是否依次递增
⋮----
// 检查最近 minSwings 个 swing lows 是否依次递减
⋮----
/**
 * 分析 HTF (H4/D1) 趋势方向
 * 用于判断 LTF 信号是否与 HTF 趋势一致
 * 
 * @param candles H4 或 D1 K 线
 * @param currentPrice 当前价格
 * @returns HTF 趋势分析结果
 */
export function analyzeHTFTrend(candles: Candle[], currentPrice: number): HTFTrend
⋮----
const sma20 = getLatestEMA(candles, 20); // 实际使用 EMA
const sma50 = getLatestEMA(candles, 50); // 实际使用 EMA
⋮----
// 默认中性
⋮----
// 判断趋势方向
⋮----
/**
 * 检查 LTF 信号是否与 HTF 趋势一致
 * 
 * @param signalDirection LTF 信号方向
 * @param htfTrend HTF 趋势
 * @returns 是否一致 (true = 顺势, false = 逆势)
 */
export function isAlignedWithHTF(signalDirection: Direction, htfTrend: HTFTrend): boolean
⋮----
return true; // 中性时不限制
⋮----
/**
 * 获取 HTF 对齐评分调整
 * 顺势交易加分，逆势交易减分
 */
export function getHTFAlignmentBonus(
    signalDirection: Direction,
    htfTrend: HTFTrend
):
```

## File: src/modules/structure-detector/market-structure.ts
```typescript
/**
 * 市场结构检测模块
 * 检测 MSS/BOS、OB、OTE
 */
⋮----
import type { Candle } from '../../types/index.js';
import type {
    Direction,
    StructureBreak,
    OrderBlock,
    BreakerBlock,
    OTEZone,
    SwingPoint
} from './types.js';
import type { VolumeValidationConfig } from '../volume-analysis/types.js';
import { calculateRVolByTime, validateOBVolume } from '../volume-analysis/calculator.js';
⋮----
// ============= Swing 点检测 =============
⋮----
/**
 * 检测 Swing 高低点 (分形算法)
 * @param candles K 线数组
 * @param n 左右比较的蜡烛数量
 */
export function detectSwingPoints(
    candles: Candle[],
    n: number = 2
):
⋮----
// 检查 Swing High
⋮----
// 允许 equal-high：当前高点高于或等于左右两侧
⋮----
// 检查 Swing Low
⋮----
// 允许 equal-low：当前低点低于或等于左右两侧
⋮----
// ============= MSS/BOS 检测 =============
⋮----
/**
 * 检测结构破坏 (MSS/BOS)
 * MSS: 反转信号，突破反向摆动点 (例如：在下降趋势中突破 Lower High)
 * BOS: 延续信号，突破同向摆动点 (例如：在上涨趋势中突破 Higher High)
 */
export function detectStructureBreak(
    candles: Candle[],
    swingHighs: SwingPoint[],
    swingLows: SwingPoint[],
    lookback: number = 12
): StructureBreak | null
⋮----
// 分别检查 highs 和 lows 是否有足够的点来判断 MSS/BOS
⋮----
// 至少需要一组有 2 个点才能继续
⋮----
// 获取最近的两个 Swing 点用于判断趋势背景
⋮----
// 从新到旧检查最近几根 K 线是否发生了结构破坏
⋮----
// 1. 多头破坏: 收盘突破前一个 Swing High (需要至少 2 个 swing high)
⋮----
// 判断是 MSS 还是 BOS
// 如果突破的是一个 Lower High (比前一个高点低)，则是 MSS (趋势翻转)
// 如果突破的是一个 Higher High (比前一个高点高)，则是 BOS (趋势延续)
⋮----
// 2. 空头破坏: 收盘跌破前一个 Swing Low (需要至少 2 个 swing low)
⋮----
// 如果跌破的是一个 Higher Low (比前一个低点高)，则是 MSS (趋势翻转)
// 如果跌破的是一个 Lower Low (比前一个低点低)，则是 BOS (趋势延续)
⋮----
// ============= Order Block 检测 =============
⋮----
/**
 * 检测 Order Block
 * OB 是 Displacement 前的最后一根反向蜡烛
 * 
 * 改进项 (ICT 视频核心):
 * 1. OBMT (Mean Threshold): 计算 OB 的 50% 位置
 * 2. formedWithSweep: 检测 OB 形成时是否伴随流动性猎杀
 * 3. weakened: 检测实体是否击穿 OBMT
 * 4. hasAdjacentFVG: OB 的 Displacement 是否同时产生 FVG (核心验证)
 * 
 * ICT 标准: OB 必须与 FVG 关联才有意义
 * Pattern: OB(i) → Displacement(i+1) → FVG形成于 candle[i].high/low 与 candle[i+2].low/high 之间
 /**
 * @param candles K 线数组
 * @param atr ATR 值
 * @param limit 回溯限制
 * @param recentSweepTime 最近 sweep 发生的时间 (可选，用于判断 formedWithSweep)
 */
export function detectOrderBlocks(
    candles: Candle[],
    atr: number,
    limit: number = 5,
    recentSweepTime?: number
): OrderBlock[]
⋮----
// 需要至少 4 根 K 线
⋮----
const minFvgGap = atr * 0.1;  // FVG 最小间隙阈值
const maxLookback = 3;  // 从 Displacement 向前最多找 3 根蜡烛
⋮----
// 新逻辑：先找 Displacement，再反推 OB
⋮----
const afterDisp = candles[dispIdx + 1];  // FVG 验证 K 线
⋮----
// 检查是否是 Displacement (大实体 > 1.5x ATR)
⋮----
// 向前找最后一根反向蜡烛 (OB 候选)
⋮----
// 找到反向蜡烛
⋮----
// 如果是同向蜡烛，继续向前找
⋮----
// OB 最小尺寸验证：避免十字星产生过小的 OB 区域
⋮----
const minOBSize = atr * 0.3;  // OB 范围至少 0.3x ATR
⋮----
// FVG 验证使用 displacement 前一根 K 线 (candles[dispIdx-1])，而非 OB K 线
// ICT FVG 三根 K 线模式: candle[dispIdx-1] → displacement[dispIdx] → afterDisp[dispIdx+1]
// 当 lookback > 1 时，obCandle 不等于 candles[dispIdx-1]，用 obCandle 会导致错误的 gap 计算
const preDispCandle = candles[dispIdx - 1]; // 始终存在，因为 dispIdx >= startIdx >= 2
⋮----
// ========== Bearish Displacement → Bullish OB 候选 ==========
⋮----
// 检查是否形成 Bearish FVG: preDispCandle.low > afterDisp.high
⋮----
// 避免重复添加 (同一个 OB 可能被多个 Displacement 触发)
⋮----
// ========== Bullish Displacement → Bearish OB 候选 ==========
⋮----
// 检查是否形成 Bullish FVG: afterDisp.low > preDispCandle.high
⋮----
// 避免重复添加
⋮----
/**
 * 检测 Order Block 是否已被消耗 (Mitigated)
 * OB 被消耗意味着价格已经回踩过该区域，订单可能已被吸收
 * @param obType OB 类型
 * @param obTop OB 顶部价格
 * @param obBottom OB 底部价格
 * @param candles K 线数组
 * @param obIndex OB 所在索引
 */
export function isOrderBlockMitigated(
    obType: Direction,
    obTop: number,
    obBottom: number,
    candles: Candle[],
    obIndex: number
): boolean
⋮----
// 检查 OB 之后的 K 线（跳过紧跟着的位移 K 线）是否回踩过该区域
⋮----
// Bullish OB: 价格需要回落到 OB 区域（低点触及 OB 顶部以下）
⋮----
// Bearish OB: 价格需要反弹到 OB 区域（高点触及 OB 底部以上）
⋮----
/**
 * 检测 Order Block 是否已被削弱 (Weakened)
 * 当价格实体收盘击穿 OBMT (50% 位置) 时，OB 失效概率大大增加
 * 
 * 规则 (ICT 视频核心):
 * - Bullish OB: 价格实体收盘 < OBMT 则被削弱
 * - Bearish OB: 价格实体收盘 > OBMT 则被削弱
 * 
 * @param obType OB 类型
 * @param obMeanThreshold OBMT: OB 的 50% 位置
 * @param candles K 线数组
 * @param obIndex OB 所在索引
 */
export function isOrderBlockWeakened(
    obType: Direction,
    obMeanThreshold: number,
    candles: Candle[],
    obIndex: number
): boolean
⋮----
// 检查 OB 之后的 K 线实体是否击穿 OBMT
⋮----
// Bullish OB: 价格实体收盘 < OBMT = 被削弱
⋮----
// Bearish OB: 价格实体收盘 > OBMT = 被削弱
⋮----
// ============= Breaker Block 检测 =============
⋮----
/**
 * 检测 Breaker Block - 被击穿的 OB 极性反转后的入场区
 * 
 * ICT 定义:
 * - Bullish OB 被向下击穿 (收盘 < OB.bottom) → 变成 Bearish Breaker (阻力，做空入场区)
 * - Bearish OB 被向上击穿 (收盘 > OB.top) → 变成 Bullish Breaker (支撑，做多入场区)
 * 
 * 检测逻辑:
 * 1. 遍历已检测到的 OB
 * 2. 检查 OB 形成后是否有 K 线收盘击穿 OB 边界
 * 3. 击穿后 OB 转换为 Breaker，方向反转
 * 
 * @param orderBlocks 已检测到的 Order Blocks
 * @param candles K 线数组
 * @returns 检测到的 Breaker Blocks
 */
export function detectBreakerBlocks(
    orderBlocks: OrderBlock[],
    candles: Candle[]
): BreakerBlock[]
⋮----
// 找到 OB 在 candles 中的位置
⋮----
// 检查 OB 之后的 K 线是否击穿 OB
// ICT 标准: 使用收盘价 (c.close) 判断击穿，而非 bodyBottom/bodyTop
// bodyBottom 会导致复合蜡烛（如 doji）误触发 Breaker
⋮----
// Bullish OB 被向下击穿: 收盘 < OB.bottom
// 变成 Bearish Breaker (阻力，做空)
⋮----
// 检查是否已被回测过
⋮----
type: 'bearish',  // 做空方向
⋮----
break;  // 一个 OB 只能产生一个 Breaker
⋮----
// Bearish OB 被向上击穿: 收盘 > OB.top
// 变成 Bullish Breaker (支撑，做多)
⋮----
// 检查是否已被回测过
⋮----
type: 'bullish',  // 做多方向
⋮----
break;  // 一个 OB 只能产生一个 Breaker
⋮----
// ============= OTE 区域计算 =============
⋮----
/**
 * 计算 OTE (Optimal Trade Entry) 区域
 * 斐波那契 61.8% - 79% 回撤区
 */
export function calculateOTE(
    swingHigh: number,
    swingLow: number,
    direction: Direction
): OTEZone
⋮----
// 回调做多：从顶部向下算 61.8% - 79% 的深回撤
⋮----
bottom: swingHigh - range * 0.79,  // 79% 回撤（更深）
top: swingHigh - range * 0.618,    // 61.8% 回撤（较浅）
⋮----
// 回调做空：从底部向上算 61.8% - 79% 的深回撤
⋮----
top: swingLow + range * 0.79,      // 79% 回撤（更深）
bottom: swingLow + range * 0.618,  // 61.8% 回撤（较浅）
⋮----
/**
 * 检查价格是否在 OTE 区域内
 */
export function isInOTEZone(price: number, ote: OTEZone): boolean
⋮----
/**
 * 检查价格是否在有利交易区 (Favorable Zone)
 * 做多: Discount Zone (Price < Equilibrium)
 * 做空: Premium Zone (Price > Equilibrium)
 */
export function isPriceInFavorableZone(
    price: number,
    swingHigh: number,
    swingLow: number,
    direction: Direction
): boolean
⋮----
// 做空时，价格应在均衡点上方 (Premium)
⋮----
// 做多时，价格应在均衡点下方 (Discount)
⋮----
/**
 * 为 OrderBlock 数组附加成交量验证数据
 * 不修改原始检测逻辑，仅在检测后附加 RVol 信息
 */
export function enrichOrderBlocksWithVolume(
    orderBlocks: OrderBlock[],
    candles: Candle[],
    volumeConfig: VolumeValidationConfig,
): OrderBlock[]
```

## File: src/modules/structure-detector/reaction.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { Candle } from '../../types/index.js';
import type { FVG, OrderBlock } from './types.js';
import {
    detectReaction,
    detectAllReactions,
    createZoneFromFVG,
    createZoneFromOB,
    type PDArrayZone,
} from './reaction.js';
⋮----
function c(datetime: number, open: number, high: number, low: number, close: number): Candle
⋮----
function bearishZone(): PDArrayZone
⋮----
c(2000, 107, 110, 106.8, 109), // enter zone
c(3000, 109.6, 111.4, 108.6, 108.7), // strong rejection from bearish zone
⋮----
c(3000, 108.7, 112.5, 108.6, 111.8), // close > zone.top -> piercing
```

## File: src/modules/structure-detector/signal-scorer.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { Displacement, StructureBreak, FVG, OrderBlock, OTEZone, LiquidityLevel } from './types.js';
import { getSignalGradeFromTotal, calculateSignalScore } from './signal-scorer.js';
⋮----
// Helper functions to create test data
function makeDisplacement(overrides: Partial<Displacement> =
⋮----
function makeStructureBreak(overrides: Partial<StructureBreak> =
⋮----
function makeFVG(overrides: Partial<FVG> =
⋮----
function makeOrderBlock(overrides: Partial<OrderBlock> =
⋮----
function makeOTEZone(): OTEZone
⋮----
function makeLiquidityLevel(overrides: Partial<LiquidityLevel> =
⋮----
const displacement = makeDisplacement({ magnitude: 3.0 }); // Strong displacement
⋮----
entryPrice: 101, // At equilibrium
⋮----
// OTE alignment should produce a positive score when entry is in zone
⋮----
// Sweep that occurred should contribute positively
⋮----
// IFVG scoring requires both ifvgs AND structureBreak
⋮----
ifvgs: [makeFVG({ inverted: true, type: 'bearish' })], // Inverted bearish = bullish setup
⋮----
// IFVG should contribute to score when aligned with structure break
⋮----
// Total should be sum of all components
⋮----
// High score setup should produce A-grade under current scoring model.
⋮----
// Empty input is near-baseline and should remain D-grade.
⋮----
// A complete setup should score well
```

## File: src/modules/structure-detector/signal-scorer.ts
```typescript
/**
 * 信号评分系统
 * 综合评估交易信号质量
 *
 * 架构：每个评分维度是一个独立的 section 函数，返回 { score, breakdown[] }。
 * calculateSignalScore 只负责驱动 SCORING_PIPELINE 并汇总结果。
 * 新增评分因子只需：① 编写一个 section 函数 ② 在 SCORING_PIPELINE 注册一行。
 */
⋮----
import type {
    SignalScore,
    SignalGrade,
    Direction,
    Displacement,
    StructureBreak,
    FVG,
    OrderBlock,
    OTEZone,
    LiquidityLevel,
} from './types.js';
import type { VolumeValidationConfig } from '../volume-analysis/types.js';
import type { CausalChainResult } from './causal-chain.js';
import type { SignalGradeConfig } from '../../config/config-manager.js';
import { getDefaultConfigManager } from '../../config/config-manager.js';
⋮----
// ── 内部类型 ───────────────────────────────────────────────────────────────────
⋮----
interface ScoreInput {
    sweep?: { level: LiquidityLevel; occurred: boolean };
    displacement?: Displacement;
    structureBreak?: StructureBreak;
    entryZone?: { type: 'FVG' | 'OB'; zone: FVG | OrderBlock };
    ote?: { zone: OTEZone; entryPrice: number };
    ifvgs?: FVG[];
    mtfAlignment?: boolean;
    isKillzone?: boolean;
    zoneAlignment?: { direction: Direction; zone: 'premium' | 'discount' | 'equilibrium'; breakoutQualified?: boolean };
    trendConfirmed?: boolean;
    priorMSSConfirmed?: boolean;
    pullbackComplete?: boolean;
    volumeConfig?: VolumeValidationConfig;
    causalChain?: CausalChainResult;
}
⋮----
interface SectionResult {
    score: number;
    breakdown: string[];
}
⋮----
/** 所有 components 字段 (内部类型，全部 required，初始化为 0) */
type ScoringComponents = {
    sweepQuality: number;
    displacementStrength: number;
    structureBreak: number;
    entryZoneQuality: number;
    oteAlignment: number;
    ifvgStrength: number;
    mtfBonus: number;
    killzoneBonus: number;
    trendContinuationBonus: number;
    pullbackBonus: number;
    impulseNoSweepBonus: number;
    directionalZonePenalty: number;
    volumeConfirmation: number;
    causalChainBonus: number;
};
⋮----
// ── 查找表 ────────────────────────────────────────────────────────────────────
⋮----
/** 按强度降序排列，find() 返回第一个匹配的层级 */
⋮----
// ── Section 函数 ──────────────────────────────────────────────────────────────
⋮----
function scoreSweep(input: ScoreInput): SectionResult
⋮----
// 假突破陷阱 → 扣分
⋮----
// 清算激增奖励
⋮----
function scoreDisplacement(input: ScoreInput): SectionResult
⋮----
function scoreStructureBreak(input: ScoreInput): SectionResult
⋮----
function scoreEntryZone(input: ScoreInput): SectionResult
⋮----
// OB 细分评分
⋮----
const score = 20; // 15 + 5 bonus
⋮----
function scoreOte(input: ScoreInput): SectionResult
⋮----
function scoreIfvg(input: ScoreInput): SectionResult
⋮----
function scoreMtf(input: ScoreInput): SectionResult
⋮----
function scoreKillzone(input: ScoreInput): SectionResult
⋮----
function scoreZoneAlignment(input: ScoreInput): SectionResult
⋮----
function scoreTrendContinuation(input: ScoreInput): SectionResult
⋮----
function scorePullback(input: ScoreInput): SectionResult
⋮----
function scoreImpulseNoSweep(input: ScoreInput): SectionResult
⋮----
function scoreVolume(input: ScoreInput): SectionResult
⋮----
// Displacement 成交量
⋮----
// Sweep 成交量
⋮----
// OB 成交量
⋮----
function scoreCausalChain(input: ScoreInput): SectionResult
⋮----
// ── 评分流水线 ─────────────────────────────────────────────────────────────────
⋮----
// ── 公开 API ──────────────────────────────────────────────────────────────────
⋮----
export function getSignalGradeFromTotal(total: number, config?: SignalGradeConfig): SignalGrade
⋮----
/**
 * 计算信号评分
 *
 * 驱动 SCORING_PIPELINE：对每个 section 函数求值，汇总到 components 和 breakdown，
 * 最终计算总分和等级。
 */
export function calculateSignalScore(input: ScoreInput, config?: SignalGradeConfig): SignalScore
⋮----
/**
 * 获取信号等级描述
 */
export function getGradeDescription(grade: SignalGrade): string
⋮----
/**
 * 检查是否满足最低入场标准
 */
export function meetsEntryThreshold(score: SignalScore, minGrade: SignalGrade = 'C'): boolean
```

## File: src/modules/structure-detector/summary-generator.ts
```typescript
import type { Candle } from '../../types/index.js';
import type {
    TimeframeStructure,
    LiquidityAnalysis,
    TradeSetup,
    AdjustmentSetup,
    StructureAnalysis,
    StrategyInsight,
    OrderBlock,
    RouteReason,
} from './types.js';
import type { StrategyRoute } from './types.js';
import type { StrategyProfile } from '../../config/strategy-profiles.js';
import { findSignificantHighs, findSignificantLows } from './swing-utils.js';
import { TREND_EMA_PERIOD } from './trend.js';
import { isValidEntryFVG } from './displacement.js';
import { resolveStrategyTakeProfitDistribution } from '../../utils/take-profit-allocation.js';
⋮----
function findOrderBlockForSetup(orderBlocks: OrderBlock[], setup?: TradeSetup): OrderBlock | undefined
⋮----
const tolerance = zoneHeight * 0.01; // 1% zone tolerance for float differences
⋮----
function appendConsolidationIndicators(
    lines: string[],
    consolidation: StructureAnalysis['consolidation'],
): void
⋮----
export function resolveMarketStateLines(
    consolidation: StructureAnalysis['consolidation'],
    strategyRoute?: StrategyRoute,
): string[]
⋮----
/**
 * 生成结构化摘要 (用于 AI prompt)
 */
export function generateSummary(
    m5: TimeframeStructure,
    m15: TimeframeStructure,
    h1: TimeframeStructure,
    h4: TimeframeStructure,
    h4Candles: Candle[],  // 新增：用于显著高低点检测
    liquidity: LiquidityAnalysis,
    setup: TradeSetup | undefined,
    currentPrice: number,
    adjustments: AdjustmentSetup[] = [],
    diagnostics: string[] = [],
    trendContext?: StructureAnalysis['trendContext'],
    pdArrayReactions?: StructureAnalysis['pdArrayReactions'],
    consolidation?: StructureAnalysis['consolidation'],
    strategyInsights?: StrategyInsight[],
    profileContext?: { strategyProfile?: StrategyProfile; volatilityRatio?: number },
    strategyRoute?: StrategyRoute,
    routeReason?: RouteReason,
): string
⋮----
h4Candles: Candle[],  // 新增：用于显著高低点检测
⋮----
// 时间格式化辅助函数 (UTC+0)
const formatTime = (timestamp: number): string =>
⋮----
const formatZonePrice = (price: number): string =>
⋮----
const formatZoneRange = (zone:
⋮----
// 盘整市场状态 (新增)
⋮----
// 流动性扫损 (使用 M15 K线检测)
// 流动性扫损 (区分 H1 和 M15)
// H1 扫损通常意味着回调结束 (The 2/3 Rule 条件之一)
⋮----
// 检查 H1 扫损 (虽然 analyzeLiquidity 聚合了结果，但这里我们尽量从 liquidity.recentSweep 读)
// 如果 recentSweep 是 active 的并且是比较大的 swing，我们标记。
// 由于 liquidity 对象是共用的，我们这里只显示 recentSweep。
// 能够区分的是 sweep 的 level 类型。
⋮----
// Displacement (仅使用 M15 周期)
// Displacement (仅使用 M15 周期)
⋮----
const displacement = m15.displacement;  // ICT 经典模型: 仅使用 M15
⋮----
// H4 关键结构 (显示当前价格附近的重要波段水平)
⋮----
// 辅助函数：检查高点是否已被后续收盘价突破
const isHighBroken = (highPrice: number, highTime: number): boolean =>
⋮----
// 辅助函数：检查低点是否已被后续收盘价跌破
const isLowBroken = (lowPrice: number, lowTime: number): boolean =>
⋮----
// 方法1: 使用传统 Swing 点 (过滤已被突破的)
⋮----
.sort((a, b) => a.price - b.price || b.time - a.time);  // 价格相近时优先显示更近期的
⋮----
.sort((a, b) => b.price - a.price || b.time - a.time);  // 价格相近时优先显示更近期的
⋮----
// 方法2: 扫描所有 H4 K 线，找出价格上方的显著高点和下方的显著低点
// "显著"定义：该点之后有 > 3% 的回撤 (过滤小波动)
⋮----
// 合并去重：取 Swing 点和显著高低点的并集
⋮----
// 按价格排序 (从低到高 = 离当前价格近的在前)，价格相近时优先显示更近期的
⋮----
// 按价格排序 (从高到低 = 离当前价格近的在前)，价格相近时优先显示更近期的
⋮----
// 显示上方最多 2 个关键高点
⋮----
// 显示下方最多 2 个关键低点
⋮----
// 结构破坏
// 结构破坏 (优先 H1，其次 M15) - M5 仅作参考不显示或作为微观确认
⋮----
// 入场区域 (优先 M15，然后 M5，与 scheduler 保持一致)
// 入场区域 (入场决策基于 M15，优化基于 M5)
⋮----
// M15 Zones (决策主区)
⋮----
// M5 Zones (微调参考)
⋮----
// Breaker Block (失败 OB 极性反转)
⋮----
// 流动性水平 (过滤已失效/耗尽的流动性噪音)
// 规则:  1) active/sweeping 始终显示
//        2) purged + 触及 >= 4 次 → 已耗尽，不再有价值
//        3) purged 但距离当前价格 > 3% → 过滤
const isRelevantLiquidity = (level:
⋮----
// purged 状态的额外过滤
⋮----
// 触及 4 次以上的 EQH/EQL 已经没有流动性价值
⋮----
// 距离当前价格过远的也过滤
⋮----
// EQH/EQL (M15 级别) - 只显示 active/sweeping 状态
// purged 的流动性已被消耗，显示太多会造成干扰
const isActiveOrSweeping = (level:
⋮----
// H4 级别 EQH/EQL (高权重流动性目标) - 只显示 active/sweeping 状态
// purged 的 H4 级别流动性已被消耗，没有交易价值
⋮----
// 成交量概况 (汇总各组件 RVol 验证信息)
⋮----
// 信号评分
⋮----
// 处理调整建议
⋮----
// ICT 逆向工程 - 第一层：趋势背景
⋮----
// ICT 逆向工程 - 第三层：价格反应
⋮----
// 格式化时间
⋮----
// Stalling 特有信息
⋮----
// 陷阱警告逻辑
⋮----
function summarizeDiagnostics(rawDiagnostics: string[]): string[]
⋮----
const pushToBucket = (bucket: keyof typeof buckets, message: string) =>
```

## File: src/modules/structure-detector/swing-utils.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { Candle } from '../../types/index.js';
import { findSignificantHighs, findSignificantLows } from './swing-utils.js';
⋮----
/**
 * Helper function to create Candle
 */
function c(datetime: number, open: number, high: number, low: number, close: number): Candle
⋮----
const currentPrice = 110; // Above all highs
⋮----
c(1000, 100, 110, 98, 102),   // High at 110
⋮----
c(3000, 104, 108, 103, 115),  // Close at 115 > 110, breaks the high
⋮----
// The high at 110 should be filtered out because close 115 > 110
⋮----
c(1000, 100, 110, 98, 102),   // High at 110
c(2000, 102, 106, 101, 104),  // Small pullback to 101
c(3000, 104, 105, 103, 104),  // No significant pullback
⋮----
const minPullback = 0.05; // 5% pullback required
⋮----
// Pullback from 110 to 101 = 8.2% > 5%, so this high should be kept.
⋮----
c(1000, 100, 120, 98, 102),   // High at 120
c(2000, 102, 106, 90, 104),   // Pullback to 90 (lowest after)
c(3000, 104, 105, 103, 104),  // No new close above 120
⋮----
const minPullback = 0.2; // 20% pullback required
⋮----
// Pullback from 120 to 90 = (120-90)/120 = 25% > 20%
⋮----
c(1000, 100, 110, 98, 102),      // High at 110
c(2000, 102, 106, 90, 104),      // Pullback
c(1000 + 3600000, 104, 112, 103, 105), // High at 112, within 72h, higher
c(2000 + 3600000, 105, 106, 89, 104),  // Deeper pullback
⋮----
// Should not have duplicate entries for nearby highs
// The higher one (112) should replace the lower one (110) if within 72h
⋮----
c(1000, 100, 130, 98, 102),   // High at 130
c(2000, 102, 106, 80, 104),   // Deep pullback
c(3000, 104, 120, 103, 105),  // High at 120
c(4000, 105, 106, 85, 104),   // Another pullback
c(5000, 104, 140, 103, 105),  // High at 140
c(6000, 105, 106, 75, 104),   // Another pullback
⋮----
// Check sorting (ascending by price)
⋮----
c(1000, 100, 120, 98, 102),   // Index 0, High at 120
c(2000, 102, 106, 90, 104),   // Index 1
c(3000, 104, 105, 103, 104),  // Index 2
⋮----
const currentPrice = 90; // Below all lows
⋮----
c(1000, 100, 105, 90, 102),   // Low at 90
⋮----
c(3000, 104, 108, 103, 85),   // Close at 85 < 90, breaks the low
⋮----
// The low at 90 should be filtered out because close 85 < 90
⋮----
c(1000, 100, 105, 80, 102),   // Low at 80
c(2000, 102, 120, 101, 104),  // Bounce to 120 (highest after)
c(3000, 104, 105, 103, 104),  // No new close below 80
⋮----
const minPullback = 0.3; // 30% bounce required
⋮----
// Bounce from 80 to 120 = (120-80)/80 = 50% > 30%
⋮----
c(1000, 100, 105, 90, 102),   // Low at 90
c(2000, 102, 95, 101, 104),   // Small bounce to 95
c(3000, 104, 105, 103, 104),  // No significant bounce
⋮----
const minPullback = 0.2; // 20% bounce required
⋮----
// Bounce from 90 to 95 = (95-90)/90 = 5.6% < 20%
// Should not be included
⋮----
c(1000, 100, 105, 90, 102),      // Low at 90
c(2000, 102, 120, 101, 104),     // Bounce
c(1000 + 3600000, 104, 105, 88, 105), // Low at 88, within 72h, lower
c(2000 + 3600000, 105, 125, 104, 106), // Higher bounce
⋮----
// Should not have duplicate entries for nearby lows
⋮----
c(1000, 100, 105, 70, 102),   // Low at 70
c(2000, 102, 130, 101, 104),  // Big bounce
c(3000, 104, 105, 80, 105),   // Low at 80
c(4000, 105, 125, 104, 106),  // Another bounce
c(5000, 104, 105, 60, 105),   // Low at 60
c(6000, 105, 140, 104, 106),  // Another bounce
⋮----
// Check sorting (descending by price)
⋮----
c(1000, 100, 130, 80, 102),   // Index 0, Low at 80
c(2000, 102, 120, 101, 104),  // Index 1
c(3000, 104, 105, 103, 104),  // Index 2
```

## File: src/modules/structure-detector/swing-utils.ts
```typescript
import type { Candle } from '../../types/index.js';
import type { SwingPoint } from './types.js';
⋮----
/**
 * 找出价格上方的"显著高点"
 * 显著高点定义：该点之后有 > minPullback 比例的回撤
 * 
 * 过滤条件:
 * 1. 只返回当前价格上方的高点
 * 2. 必须有足够的回撤深度
 * 3. 必须未被后续价格突破 (没有后续收盘价 > 该高点)
 */
export function findSignificantHighs(
    candles: Candle[],
    currentPrice: number,
    minPullback: number  // 例如 0.03 = 3%
): SwingPoint[]
⋮----
minPullback: number  // 例如 0.03 = 3%
⋮----
// 只关注价格上方的高点
⋮----
// 检查该点是否已被后续价格突破 (任意后续收盘价 > 该高点 = 已失效)
⋮----
// 如果已被突破，跳过此点
⋮----
// 计算回撤幅度
⋮----
// 如果有显著回撤，并且是该区域最高的那个点
⋮----
// 检查附近是否已有更高的点被记录
⋮----
h.price >= candle.high && Math.abs(h.time - candle.datetime) < 72 * 60 * 60 * 1000  // 72 小时内
⋮----
// 检查是否需要替换附近的较低点
⋮----
/**
 * 找出价格下方的"显著低点"
 * 显著低点定义：该点之后有 > minPullback 比例的反弹
 * 
 * 过滤条件:
 * 1. 只返回当前价格下方的低点
 * 2. 必须有足够的反弹深度
 * 3. 必须未被后续价格突破 (没有后续收盘价 < 该低点)
 */
export function findSignificantLows(
    candles: Candle[],
    currentPrice: number,
    minPullback: number
): SwingPoint[]
⋮----
// 只关注价格下方的低点
⋮----
// 检查该点是否已被后续价格突破 (任意后续收盘价 < 该低点 = 已失效)
⋮----
// 如果已被突破，跳过此点
⋮----
// 计算反弹幅度
⋮----
// 如果有显著反弹，并且是该区域最低的那个点
```

## File: src/modules/structure-detector/third-push-exhaustion.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { CandleWithIndicators } from '../../types/market-data.js';
import type { SwingPoint, Displacement } from './types.js';
import { detectThirdPushExhaustion } from './third-push-exhaustion.js';
⋮----
function candle(
    datetime: number,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number,
): CandleWithIndicators
⋮----
function buildCandles(): CandleWithIndicators[]
⋮----
if (i >= 10 && i <= 15) volume = 220; // leg1 high volume
if (i >= 20 && i <= 25) volume = 170; // leg2 medium volume
if (i >= 30 && i <= 35) volume = 90;  // leg3 weak volume
⋮----
function bullishSwings(thirdHigh: number = 112):
```

## File: src/modules/structure-detector/third-push-exhaustion.ts
```typescript
import type { CandleWithIndicators } from '../../types/market-data.js';
import type { Direction, Displacement, SwingPoint } from './types.js';
⋮----
interface ThirdPushExhaustionInput {
    direction: Direction;
    candles: CandleWithIndicators[];
    swingHighs: SwingPoint[];
    swingLows: SwingPoint[];
    atr: number;
    currentPrice: number;
    displacement?: Displacement;
}
⋮----
interface ImpulseLeg {
    startIndex: number;
    endIndex: number;
    startPrice: number;
    endPrice: number;
    atrMove: number;
    rVol: number;
}
⋮----
export interface ThirdPushExhaustionResult {
    detected: boolean;
    direction: Direction;
    pushCount: number;
    score: number;
    severity: 'low' | 'medium' | 'high' | 'none';
    reasons: string[];
    metrics: {
        leg1AtrMove?: number;
        leg2AtrMove?: number;
        leg3AtrMove?: number;
        leg1RVol?: number;
        leg2RVol?: number;
        leg3RVol?: number;
        marginalBreakAtr?: number;
        rejectionAtr?: number;
    };
}
⋮----
const createEmptyResult = (direction: Direction): ThirdPushExhaustionResult => (
⋮----
export function detectThirdPushExhaustion(input: ThirdPushExhaustionInput): ThirdPushExhaustionResult
⋮----
function buildImpulseLegs(
    direction: Direction,
    candles: CandleWithIndicators[],
    swingHighs: SwingPoint[],
    swingLows: SwingPoint[],
    atr: number,
    indexOffset: number
): ImpulseLeg[]
⋮----
function getRecentPushRun(direction: Direction, legs: ImpulseLeg[]): ImpulseLeg[]
```

## File: src/modules/structure-detector/vwap.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { Candle } from '../../types/index.js';
import {
    calculateAnchoredVWAP,
    confirmPostDisplacementVwapSide,
    getDualVwapSnapshot,
} from './vwap.js';
⋮----
function candle(datetime: number, open: number, high: number, low: number, close: number, volume: number): Candle
⋮----
// (tp1*vol1 + tp2*vol2) / (vol1+vol2)
// ((100*1) + (101.3333*2)) / 3 = 100.8889
```

## File: src/modules/structure-detector/vwap.ts
```typescript
import type { Candle } from '../../types/index.js';
import type { Direction } from './types.js';
⋮----
export type SessionAnchor = 'LONDON' | 'NEW_YORK';
⋮----
export interface DualVwapSnapshot {
    dailyVwap: number;
    sessionVwap: number;
    sessionAnchor: SessionAnchor;
    sessionAnchorTime: number;
}
⋮----
export interface PostDisplacementVwapConfirmation {
    confirmed: boolean;
    checkedBars: number;
    maxConsecutiveSameSideCloses: number;
    reason: string;
}
⋮----
export function calculateAnchoredVWAP(candles: Candle[], anchorTime: number): number | undefined
⋮----
function getUtcDayStart(timestamp: number): number
⋮----
function resolveLatestSessionAnchor(timestamp: number):
⋮----
export function getDualVwapSnapshot(candles: Candle[], timestamp: number): DualVwapSnapshot | undefined
⋮----
export function confirmPostDisplacementVwapSide(params: {
    candles: Candle[];
    displacementTime: number;
    direction: Direction;
    minBars?: number;
    requiredBars: number;
    maxBars?: number;
}): PostDisplacementVwapConfirmation
```

## File: src/modules/volume-analysis/calculator.ts
```typescript
/**
 * 成交量计算核心模块
 * 提供 RVol 计算和验证功能
 */
⋮----
import type { Candle } from '../../types/index.js';
import type { VolumeValidationConfig, RelativeVolume, VolumeAnalysis, VolumeStrength } from './types.js';
⋮----
/**
 * 计算简单移动平均 (SMA)
 * @param values 数值数组
 * @param window 窗口大小
 * @returns SMA 值，若数据不足返回 undefined
 */
export function calculateSMA(values: number[], window: number): number | undefined
⋮----
/**
 * 计算相对成交量 (RVol)
 * RVol = 当前 K 线成交量 / SMA(Volume, window)
 *
 * @param candles K 线数组
 * @param index 目标 K 线索引
 * @param window SMA 窗口大小
 * @returns RVol 数据，若无法计算返回 undefined
 */
export function calculateRVol(
    candles: Candle[],
    index: number,
    window: number,
): RelativeVolume | undefined
⋮----
// 需要至少 window 根历史 K 线来计算 SMA (不含当前)
⋮----
// 提取历史成交量 (不包括当前 K 线)
⋮----
/**
 * 通过时间戳找到 K 线并计算 RVol
 */
export function calculateRVolByTime(
    candles: Candle[],
    timestamp: number,
    window: number,
): RelativeVolume | undefined
⋮----
// 从后往前查找 (最近的 K 线更可能匹配)
⋮----
/**
 * 分类成交量强度
 */
export function classifyVolumeStrength(rVol: number): VolumeStrength
⋮----
/**
 * 验证 Displacement 成交量
 * 有效位移需要 RVol >= displacementMinRVol (默认 1.5)
 */
export function validateDisplacementVolume(
    rVol: RelativeVolume,
    config: VolumeValidationConfig,
): VolumeAnalysis
⋮----
/**
 * 验证 Sweep 成交量 (检查扫损 K 线和恢复 K 线)
 * 高潮量需要 RVol >= sweepMinRVol (默认 2.0)
 * 优先检查扫损 K 线，不满足则检查恢复 K 线
 */
export function validateSweepVolume(
    sweepCandleRVol: RelativeVolume,
    recoveryCandleRVol: RelativeVolume | undefined,
    config: VolumeValidationConfig,
): VolumeAnalysis
⋮----
// 优先检查扫损 K 线
⋮----
// 检查恢复 K 线
⋮----
/**
 * 验证 OrderBlock 成交量
 * OB 不应在极度缩量下形成，需要 RVol >= obMinRVol (默认 0.8)
 */
export function validateOBVolume(
    rVol: RelativeVolume,
    config: VolumeValidationConfig,
): VolumeAnalysis
```

## File: src/modules/volume-analysis/index.ts
```typescript
/**
 * 成交量分析模块
 * 提供 RVol (相对成交量) 计算和验证功能
 */
```

## File: src/modules/volume-analysis/types.ts
```typescript
/**
 * 成交量验证类型定义
 */
⋮----
/** 成交量验证配置 */
export interface VolumeValidationConfig {
    /** 是否启用成交量验证 */
    enabled: boolean;
    /** SMA 窗口大小 (默认 20 根 K 线) */
    smaWindow: number;
    /** Displacement 最小 RVol 阈值 (默认 1.5) */
    displacementMinRVol: number;
    /** Sweep 最小 RVol 阈值 (默认 2.0) */
    sweepMinRVol: number;
    /** OrderBlock 最小 RVol 阈值 (默认 0.8) */
    obMinRVol: number;
}
⋮----
/** 是否启用成交量验证 */
⋮----
/** SMA 窗口大小 (默认 20 根 K 线) */
⋮----
/** Displacement 最小 RVol 阈值 (默认 1.5) */
⋮----
/** Sweep 最小 RVol 阈值 (默认 2.0) */
⋮----
/** OrderBlock 最小 RVol 阈值 (默认 0.8) */
⋮----
/** 相对成交量数据 */
export interface RelativeVolume {
    /** RVol 值 (currentVolume / SMA) */
    value: number;
    /** 当前成交量 */
    currentVolume: number;
    /** SMA 基准成交量 */
    smaVolume: number;
    /** SMA 窗口大小 */
    window: number;
}
⋮----
/** RVol 值 (currentVolume / SMA) */
⋮----
/** 当前成交量 */
⋮----
/** SMA 基准成交量 */
⋮----
/** SMA 窗口大小 */
⋮----
/** 成交量强度分类 */
export type VolumeStrength = 'extreme' | 'high' | 'normal' | 'weak' | 'very_weak';
⋮----
/** 成交量分析结果 */
export interface VolumeAnalysis {
    rVol: RelativeVolume;
    strength: VolumeStrength;
    isValid: boolean;
    reason?: string;
}
```

## File: src/runtime/node/decision-log-store.ts
```typescript
import type { DecisionLogEntry } from '../../types/index.js';
import type { DecisionLogStore } from '../../modules/state-store/decision-log-store.js';
import type { SqliteDatabase } from './sqlite.js';
import type { TelegramNotifier } from './telegram-notifier.js';
import { logger } from '../../utils/index.js';
⋮----
export class SqliteDecisionLogStore implements DecisionLogStore
⋮----
constructor(private db: SqliteDatabase, private notifier?: TelegramNotifier)
⋮----
async append(entry: DecisionLogEntry): Promise<void>
⋮----
async list(symbol: string, limit: number): Promise<DecisionLogEntry[]>
```

## File: src/runtime/node/experiment-log-stores.test.ts
```typescript
import { expect, it, vi } from 'vitest';
import {
    withExperimentDecisionStore,
    withExperimentTradeStore,
    withLaneDecisionStore,
    withLaneTradeStore,
} from './experiment-log-stores.js';
```

## File: src/runtime/node/experiment-log-stores.ts
```typescript
import type { DecisionLogStore } from '../../modules/state-store/decision-log-store.js';
import type { TradeLogStore } from '../../modules/state-store/trade-log-store.js';
import type { DecisionLogEntry, TradeLogEntry } from '../../types/index.js';
⋮----
export interface LaneLogContext {
    laneId: 'champion' | 'shadow';
    stackId: string;
}
⋮----
export function withExperimentDecisionStore(base: DecisionLogStore, experimentId: string): DecisionLogStore
⋮----
append(entry: DecisionLogEntry): Promise<void>
list(symbol: string, limit: number): Promise<DecisionLogEntry[]>
⋮----
export function withExperimentTradeStore(base: TradeLogStore, experimentId: string): TradeLogStore
⋮----
append(entry: TradeLogEntry): Promise<void>
list(limit: number, symbol?: string): Promise<TradeLogEntry[]>
⋮----
export function withLaneDecisionStore(base: DecisionLogStore, context: LaneLogContext): DecisionLogStore
⋮----
export function withLaneTradeStore(base: TradeLogStore, context: LaneLogContext): TradeLogStore
```

## File: src/runtime/node/lane-runner.test.ts
```typescript
import { expect, it, vi } from 'vitest';
import { buildDualLaneTickInput, runDualLaneTick } from './lane-runner.js';
```

## File: src/runtime/node/lane-runner.ts
```typescript
export interface LaneRunnerLogger {
    error(message: string, context?: Record<string, unknown>): void;
}
⋮----
error(message: string, context?: Record<string, unknown>): void;
⋮----
export interface DualLaneTickInput {
    championRun: () => Promise<void>;
    shadowRun?: (() => Promise<void>) | undefined;
    logger: LaneRunnerLogger;
    cronExpr: string;
}
⋮----
export interface BuildDualLaneTickInput {
    championRun: () => Promise<void>;
    shadowRun?: (() => Promise<void>) | undefined;
    shadowEnabled: boolean;
    logger: LaneRunnerLogger;
    cronExpr: string;
}
⋮----
export function buildDualLaneTickInput(input: BuildDualLaneTickInput): DualLaneTickInput
⋮----
export async function runDualLaneTick(input: DualLaneTickInput): Promise<void>
⋮----
function toErrorMessage(error: unknown): string
```

## File: src/runtime/node/lane-strategy.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import {
    createDefaultLaneStrategyRegistry,
    resolveLaneStrategyFactory,
    resolveStackConfigOverrides,
    resolveStackVariantConfig,
    resolveLaneStrategySelection,
} from './lane-strategy.js';
```

## File: src/runtime/node/lane-strategy.ts
```typescript
import { createScheduler } from '../../controller/scheduler.js';
import type { ConfigOverrides } from '../../config/config-manager.js';
import type { StackVariantConfig } from '../../config/stack-variant.js';
⋮----
export interface LaneStrategyEnv {
    CHAMPION_STACK?: string;
    SHADOW_STACK?: string;
    ICT_STACK_CONFIG_OVERRIDES_JSON?: string;
    ICT_A_CONFIG_OVERRIDES_JSON?: string;
    ICT_B_CONFIG_OVERRIDES_JSON?: string;
    BAND_REV_CONFIG_OVERRIDES_JSON?: string;
    AI_DISP_CONFIG_OVERRIDES_JSON?: string;
    ICT_STACK_VARIANT_JSON?: string;
    ICT_A_VARIANT_JSON?: string;
    ICT_B_VARIANT_JSON?: string;
    BAND_REV_VARIANT_JSON?: string;
    AI_DISP_VARIANT_JSON?: string;
}
⋮----
export interface LaneStrategySelection {
    championStackId: string;
    shadowStackId: string;
}
⋮----
export type LaneSchedulerFactory = (
    config: Parameters<typeof createScheduler>[0]
) => ReturnType<typeof createScheduler>;
⋮----
export type LaneStrategyRegistry = Record<string, LaneSchedulerFactory>;
⋮----
export function createDefaultLaneStrategyRegistry(): LaneStrategyRegistry
⋮----
export function resolveLaneStrategySelection(env: LaneStrategyEnv): LaneStrategySelection
⋮----
export function resolveLaneStrategyFactory(
    stackId: string,
    registry: LaneStrategyRegistry,
    envName: 'CHAMPION_STACK' | 'SHADOW_STACK',
): LaneSchedulerFactory
⋮----
function normalizeStackId(raw: string | undefined): string | undefined
⋮----
export function resolveStackConfigOverrides(
    stackId: string,
    env: LaneStrategyEnv,
): ConfigOverrides | undefined
⋮----
export function resolveStackVariantConfig(
    stackId: string,
    env: LaneStrategyEnv,
): StackVariantConfig | undefined
⋮----
function resolveOverridesEnvNames(
    normalizedStackId: string,
): Array<keyof LaneStrategyEnv>
⋮----
function resolveVariantEnvNames(
    normalizedStackId: string,
): Array<keyof LaneStrategyEnv>
⋮----
function defaultStackVariantConfig(
    normalizedStackId: string,
): StackVariantConfig | undefined
⋮----
function mergeStackVariantConfig(
    base: StackVariantConfig | undefined,
    override: StackVariantConfig,
): StackVariantConfig
⋮----
function safeParseJsonObject(raw: string, envName: string): Record<string, unknown>
```

## File: src/runtime/node/local-trade-replay-query.test.ts
```typescript
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync, spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import type { AddressInfo } from 'node:net';
import { createServer } from 'node:http';
import { afterEach, describe, expect, it } from 'vitest';
```

## File: src/runtime/node/market-snapshot-builder.test.ts
```typescript
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { buildMarketSnapshotPayload, MARKET_SNAPSHOT_CANDLE_LIMITS } from '../../utils/market-snapshot.js';
import { openDatabase } from './sqlite.js';
⋮----
function buildCandles(count: number, startTs: number, stepMs: number)
```

## File: src/runtime/node/market-snapshot-store.test.ts
```typescript
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { buildMarketSnapshotPayload } from '../../utils/market-snapshot.js';
import { openDatabase } from './sqlite.js';
import { SqliteMarketSnapshotStore } from './market-snapshot-store.js';
⋮----
function buildMarketData()
⋮----
const candle = (offset: number) => (
```

## File: src/runtime/node/market-snapshot-store.ts
```typescript
import type { MarketSnapshotStore } from '../../modules/state-store/market-snapshot-store.js';
import type { MarketSnapshotEntry, MarketSnapshotPayload, StoredMarketSnapshot } from '../../types/index.js';
import type { SqliteDatabase } from './sqlite.js';
⋮----
export class SqliteMarketSnapshotStore implements MarketSnapshotStore
⋮----
constructor(private db: SqliteDatabase)
⋮----
async append(entry: MarketSnapshotEntry): Promise<void>
⋮----
async list(params: {
        symbol: string;
        startTs: number;
        endTs: number;
        limit: number;
        traceId?: string;
}): Promise<StoredMarketSnapshot[]>
```

## File: src/runtime/node/shadow-runtime.ts
```typescript
import path from 'node:path';
⋮----
export interface ShadowRuntimeDisabledConfig {
    enabled: false;
}
⋮----
export interface ShadowRuntimeEnabledConfig {
    enabled: true;
    experimentId: string;
    symbols: string[];
    dbPath: string;
}
⋮----
export type ShadowRuntimeConfig = ShadowRuntimeDisabledConfig | ShadowRuntimeEnabledConfig;
⋮----
export interface ShadowRuntimeConfigInput {
    defaultDataDir: string;
}
⋮----
export interface ShadowRuntimeEnv {
    [key: string]: string | undefined;
    SHADOW_ENABLED?: string;
    SHADOW_EXPERIMENT_ID?: string;
    SHADOW_SYMBOLS?: string;
    SHADOW_DB_PATH?: string;
}
⋮----
export function resolveShadowRuntimeConfig(
    env: ShadowRuntimeEnv,
    input: ShadowRuntimeConfigInput,
): ShadowRuntimeConfig
⋮----
function parseSymbols(raw: string | undefined): string[]
```

## File: src/runtime/node/sqlite-kv.ts
```typescript
import type { SqliteDatabase } from './sqlite.js';
import type { KvStore } from '../../types/runtime.js';
⋮----
export class SqliteKv implements KvStore
⋮----
constructor(private db: SqliteDatabase)
⋮----
async get(key: string, type?: 'text' | 'json' |
⋮----
async put(key: string, value: string | ArrayBuffer, _options?: unknown): Promise<void>
⋮----
async delete(key: string): Promise<void>
```

## File: src/runtime/node/sqlite.ts
```typescript
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { logger } from '../../utils/index.js';
⋮----
// eslint-disable-next-line @typescript-eslint/no-var-requires
⋮----
export type SqliteDatabase = any;
⋮----
export function openDatabase(filePath: string): SqliteDatabase
⋮----
function ensureDirectory(dirPath: string)
⋮----
function migrate(db: SqliteDatabase)
⋮----
function ensureColumn(
    db: SqliteDatabase,
    tableName: 'trade_logs' | 'ai_logs',
    columnName: string,
    alterSql: string,
)
```

## File: src/runtime/node/telegram-notifier.test.ts
```typescript
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { DecisionLogEntry } from '../../types/index.js';
import { TelegramNotifier } from './telegram-notifier.js';
```

## File: src/runtime/node/telegram-notifier.ts
```typescript
import type { DecisionLogEntry } from '../../types/index.js';
import { logger } from '../../utils/index.js';
⋮----
type TelegramNotifierOptions = {
    enabled: boolean;
    botToken?: string;
    chatId?: string;
};
⋮----
export class TelegramNotifier
⋮----
constructor(options: TelegramNotifierOptions)
⋮----
isConfigured(): boolean
⋮----
async notifyDecision(entry: DecisionLogEntry): Promise<void>
⋮----
private shouldNotify(entry: DecisionLogEntry): boolean
⋮----
private buildFingerprint(entry: DecisionLogEntry): string
⋮----
private buildMessage(entry: DecisionLogEntry): string
⋮----
private truncate(text: string, maxLength: number): string
```

## File: src/runtime/node/trade-log-store.ts
```typescript
import type { TradeLogEntry } from '../../types/index.js';
import type { TradeLogStore } from '../../modules/state-store/trade-log-store.js';
import type { SqliteDatabase } from './sqlite.js';
⋮----
export class SqliteTradeLogStore implements TradeLogStore
⋮----
constructor(private db: SqliteDatabase)
⋮----
async append(entry: TradeLogEntry): Promise<void>
⋮----
async list(limit: number, symbol?: string): Promise<TradeLogEntry[]>
```

## File: src/services/liquidation-watcher.ts
```typescript
/**
 * Liquidation watcher service (Node runtime)
 * Uses OKX WebSocket to collect liquidation events.
 */
⋮----
import { getLiquidationThresholds, getOkxLiquidationMultiplier, getOkxLiquidationSymbols } from '../config/symbol-settings.js';
import { logger } from '../utils/index.js';
import type { KvStore } from '../types/runtime.js';
⋮----
interface LiquidationEvent {
    symbol: string;
    side: 'long' | 'short';
    size: number;           // USD Value
    price: number;
    timestamp: number;
}
⋮----
size: number;           // USD Value
⋮----
interface LiquidationSummary {
    symbol: string;
    windowMs: number;
    longLiquidations: number;
    shortLiquidations: number;
    count: number;
    latestTimestamp: number;
}
⋮----
export class LiquidationWatcherService
⋮----
constructor(kv: KvStore)
⋮----
async fetch(request: Request): Promise<Response>
⋮----
private async loadState(): Promise<void>
⋮----
private async saveState(): Promise<void>
⋮----
private scheduleAlarm(when: number)
⋮----
private async startWebSocket(): Promise<void>
⋮----
private scheduleHeartbeat()
⋮----
private async alarm(): Promise<void>
⋮----
private scheduleReconnect(): void
⋮----
private cleanOldData(): void
⋮----
private getSummary(symbol: string, windowMs: number): LiquidationSummary
⋮----
private detectSpike(symbol: string, windowMs: number):
⋮----
private confirmSweep(symbol: string, sweepType: 'high_sweep' | 'low_sweep', windowMs: number)
⋮----
private cleanup()
⋮----
private handleMessage(data: string): void
```

## File: src/tests/analyze-snapshot.ts
```typescript
import { createStructureDetector } from '../modules/structure-detector/index.js';
⋮----
import { fileURLToPath } from 'url';
⋮----
async function main()
```

## File: src/tests/fetch-test-data.ts
```typescript
import { YahooFinanceClient } from '../modules/data-fetcher/yahoo-finance.js';
⋮----
import { fileURLToPath } from 'url';
⋮----
/**
 * 历史数据拉取脚本 (Yahoo Finance 版)
 * 使用方式: npx tsx src/tests/fetch-test-data.ts [symbol] [startTime] [outputFile] [endTime]
 * 例如: npx tsx src/tests/fetch-test-data.ts BTC "2025-12-15 00:00:00" src/tests/data/btc_historical_dec.json "2025-12-19 23:59:59"
 */
async function main()
⋮----
const startDateStr = process.argv[3]; // YYYY-MM-DD HH:mm:ss
⋮----
const endDateStr = process.argv[5];   // YYYY-MM-DD HH:mm:ss
⋮----
// 转换日期为 Unix 时间戳 (秒)
⋮----
// 获取最新的 ATR (从 m15 中取)
⋮----
// 确保目录存在
```

## File: src/tests/run-algo-test.ts
```typescript
import { createStructureDetector } from '../modules/structure-detector/index.js';
⋮----
/**
 * 算法离线测试运行器
 * 使用方式: npx ts-node src/tests/run-algo-test.ts [json_file_path]
 */
async function main()
⋮----
// 初始化检测器
⋮----
// 可以通过传入 timestamp 测试 Killzone
⋮----
// 打印结果概要
```

## File: src/types/ai-response.ts
```typescript
/**
 * AI 响应类型定义
 */
⋮----
import type { AIDecision, PendingAction, PositionAction } from './trading-state.js';
export type MoveStopMode = 'BE' | 'STRUCTURE' | 'ATR_TRAIL';
⋮----
/** 空仓分析响应 */
export interface IdleAnalysisResponse {
    decision: AIDecision;
    reasoning: string;
    watchedLevels: number[];
    /** 如果决策是 LONG 或 SHORT，需要提供交易计划 */
    tradePlan?: {
        entryPrice: number;
        stopLoss: number;
        takeProfitLevels: {
            tp1: number;  // 50% @ 1R 或最近流动性
            tp2: number;  // 30% @ 2R 或中级流动性
            tp3: number;  // 20% @ 3R 或远端目标
        };
        takeProfitDistribution?: {
            tp1: number;
            tp2: number;
            tp3: number;
        };
        entryLogic: string;
    };
    /** 市场是否发生显著变化 */
    significantChange: boolean;
}
⋮----
/** 如果决策是 LONG 或 SHORT，需要提供交易计划 */
⋮----
tp1: number;  // 50% @ 1R 或最近流动性
tp2: number;  // 30% @ 2R 或中级流动性
tp3: number;  // 20% @ 3R 或远端目标
⋮----
/** 市场是否发生显著变化 */
⋮----
/** 挂单确认响应 */
export interface PendingConfirmResponse {
    action: PendingAction;
    reasoning: string;
    /** 逻辑是否仍然有效 */
    logicValid: boolean;
}
⋮----
/** 逻辑是否仍然有效 */
⋮----
/** 持仓管理响应 */
export interface OpenManageResponse {
    action: PositionAction;
    reasoning: string;
    /** 如果 action 是 MOVE_SL，提供新的止损价 */
    newStopLoss?: number;
    /** MOVE_SL 的执行意图模式，供执行层做约束审计 */
    moveStopMode?: MoveStopMode;
    /** 是否检测到反转信号 */
    reversalSignal: boolean;
}
⋮----
/** 如果 action 是 MOVE_SL，提供新的止损价 */
⋮----
/** MOVE_SL 的执行意图模式，供执行层做约束审计 */
⋮----
/** 是否检测到反转信号 */
⋮----
/** 心跳响应 (轻量级市场更新) */
export interface HeartbeatResponse {
    decision: 'WAIT';  // 心跳模式只返回 WAIT
    marketUpdate: string;  // AI 对市场的观察总结
    watchedLevels: number[];  // 关键关注位
    /** 是否建议进行完整分析 */
    suggestFullAnalysis?: boolean;
}
⋮----
decision: 'WAIT';  // 心跳模式只返回 WAIT
marketUpdate: string;  // AI 对市场的观察总结
watchedLevels: number[];  // 关键关注位
/** 是否建议进行完整分析 */
⋮----
/** AI 响应解析结果 */
export interface ParsedAIResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    rawResponse?: string;
}
⋮----
/** 狙击模式入场响应 */
export interface SniperEntryResponse {
    decision: 'ENTER' | 'WAIT' | 'ABORT';
    confidence: number;
    reasoning: string;
    entryPrice?: number;
    slPrice?: number;
    tp1Price?: number;
    tp2Price?: number;
    tp3Price?: number;
    m5ConfirmationType?: 'MSS' | 'BOS' | 'Displacement' | 'FVG_Respect' | 'None';
}
⋮----
/** 反向工程分析响应 */
export interface ReversalAnalysisResponse {
    analysis: 'NORMAL_FAILURE' | 'TRAP_DETECTED';
    confidence: number;
    reasoning: string;
    reverseSetup?: {
        decision: 'REVERSE_TRADE' | 'WAIT' | 'NO_ACTION';
        direction: 'LONG' | 'SHORT';
        entryPrice: number;
        slPrice: number;
        tpPrice: number;
        riskRewardRatio: number;
    };
}
⋮----
// ============= AI 双脑架构类型 =============
⋮----
/** Gemini 视觉叙事响应 */
export interface AIVisualNarrative {
    /** H4 周期叙事：整体趋势和关键结构 */
    h4Narrative: string;
    /** M15 周期叙事：近期动能和入场区域 */
    h1Narrative: string;
    /** M5 周期叙事：精细入场确认 */
    m15Narrative: string;
    /** 整体偏向 */
    overallBias: 'bullish' | 'bearish' | 'neutral';
    /** 关键观察点 */
    keyObservations: string[];
    /** 潜在的交易机会描述 */
    tradeOpportunity?: string;
}
⋮----
/** H4 周期叙事：整体趋势和关键结构 */
⋮----
/** M15 周期叙事：近期动能和入场区域 */
⋮----
/** M5 周期叙事：精细入场确认 */
⋮----
/** 整体偏向 */
⋮----
/** 关键观察点 */
⋮----
/** 潜在的交易机会描述 */
⋮----
/** 入场前视觉风控响应 */
export interface VisionEntryVetoResponse {
    verdict: 'ALLOW' | 'VETO';
    confidence: number;
    reasoning: string;
    riskTags?: string[];
    vetoReasonCode?: 'COUNTER_STRUCTURE' | 'THIRD_PUSH_EXHAUSTION' | 'COUNTER_IMPULSE' | 'PATTERN_FAILURE' | 'OTHER' | string;
    evidence?: string[];
}
⋮----
/** 持仓风险事件视觉复核响应 */
export interface VisionOpenRiskReviewResponse {
    riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
    actionBias: 'HOLD' | 'TIGHTEN_SL' | 'CLOSE';
    confidence: number;
    reasoning: string;
    riskTags?: string[];
}
⋮----
/** DeepSeek 推理决策响应 */
export interface AITradeDecision {
    /** 决策类型 (涵盖 IDLE/PENDING/OPEN/SNIPER) */
    decision: 'LONG' | 'SHORT' | 'WAIT' | 'KEEP' | 'CANCEL' | 'HOLD' | 'CLOSE' | 'MOVE_SL' | 'ENTER' | 'ABORT' | 'REVERSE_TRADE';
    /** 动作别名 (兼容旧代码) */
    action?: string;

    /** 信心等级 */
    confidence: 'high' | 'medium' | 'low';
    /** 详细推理过程 */
    reasoning: string;

    /** IDLE 状态: 交易计划 */
    tradePlan?: {
        entryPrice: number;
        stopLoss: number;
        takeProfitLevels: {
            tp1: number;
            tp2: number;
            tp3: number;
        };
        takeProfitDistribution?: {
            tp1: number;
            tp2: number;
            tp3: number;
        };
        entryLogic: string;
    };

    /** OPEN 状态: 新止损价 */
    newStopLoss?: number;
    /** OPEN 状态: 移动止损模式（可选） */
    moveStopMode?: MoveStopMode;

    /** 关注的关键价位 */
    watchedLevels: number[];
    /** Gemini 叙事是否与程序检测一致 */
    narrativeAlignment: boolean;
    /** 风险说明 */
    riskWarning?: string;
}
⋮----
/** 决策类型 (涵盖 IDLE/PENDING/OPEN/SNIPER) */
⋮----
/** 动作别名 (兼容旧代码) */
⋮----
/** 信心等级 */
⋮----
/** 详细推理过程 */
⋮----
/** IDLE 状态: 交易计划 */
⋮----
/** OPEN 状态: 新止损价 */
⋮----
/** OPEN 状态: 移动止损模式（可选） */
⋮----
/** 关注的关键价位 */
⋮----
/** Gemini 叙事是否与程序检测一致 */
⋮----
/** 风险说明 */
```

## File: src/types/index.ts
```typescript
/**
 * 类型定义入口
 */
```

## File: src/types/market-data.ts
```typescript
/**
 * 市场数据类型定义
 */
⋮----
/** 单根 K 线数据 */
export interface Candle {
    timestamp: number;
    datetime: number;     // 等同于 timestamp，为兼容性添加
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}
⋮----
datetime: number;     // 等同于 timestamp，为兼容性添加
⋮----
/** 带 ATR 指标的 K 线数据 */
export interface CandleWithIndicators extends Candle {
    atr?: number;
}
⋮----
/** 多周期市场数据 */
export interface MultiTimeframeData {
    symbol: string;
    m5: CandleWithIndicators[];
    m15: CandleWithIndicators[];
    h1: CandleWithIndicators[];    // 新增 H1
    h4: CandleWithIndicators[];

    // 流动性计算用
    d1: CandleWithIndicators[];    // 日线
    w1: CandleWithIndicators[];    // 周线
    m1: CandleWithIndicators[];    // 月线

    currentPrice: number;
    fetchedAt: number;
}
⋮----
h1: CandleWithIndicators[];    // 新增 H1
⋮----
// 流动性计算用
d1: CandleWithIndicators[];    // 日线
w1: CandleWithIndicators[];    // 周线
m1: CandleWithIndicators[];    // 月线
⋮----
/** 技术图表快照 */
export interface ChartSnapshot {
    symbol: string;
    interval: string;
    imageBase64: string;
    generatedAt: number;
}
⋮----
export type MarketSnapshotSource = 'AI_ANALYSIS' | 'DECISION_LOG';
⋮----
export type MarketSnapshotPhase = 'IDLE' | 'PENDING' | 'OPEN' | 'SNIPER' | 'REVERSAL' | 'HEARTBEAT';
⋮----
export interface MarketSnapshotCandle {
    timestamp: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    atr?: number;
}
⋮----
export interface MarketSnapshotTimeframeSummary {
    high: number;
    low: number;
    lastClose: number;
    range: number;
    atr?: number;
    bullish: number;
    bearish: number;
}
⋮----
export interface MarketSnapshotTimeframe {
    candles: MarketSnapshotCandle[];
    summary: MarketSnapshotTimeframeSummary | null;
}
⋮----
export interface MarketSnapshotPayload {
    currentPrice: number;
    fetchedAt: number;
    triggerReason?: string;
    timeframes: {
        m5: MarketSnapshotTimeframe;
        m15: MarketSnapshotTimeframe;
        h1: MarketSnapshotTimeframe;
        h4: MarketSnapshotTimeframe;
        d1: MarketSnapshotTimeframe;
    };
}
⋮----
export interface MarketSnapshotEntry {
    timestamp: number;
    traceId?: string;
    symbol: string;
    source: MarketSnapshotSource;
    phase: MarketSnapshotPhase;
    payload: MarketSnapshotPayload;
}
⋮----
export interface StoredMarketSnapshot extends MarketSnapshotEntry {
    id: number;
}
```

## File: src/types/runtime.ts
```typescript
export interface KvStore {
    get(key: string, type?: 'text' | 'json' | { type: 'text' | 'json' }): Promise<any | null>;
    put(key: string, value: string | ArrayBuffer, options?: unknown): Promise<void>;
    delete(key: string): Promise<void>;
}
⋮----
get(key: string, type?: 'text' | 'json' |
put(key: string, value: string | ArrayBuffer, options?: unknown): Promise<void>;
delete(key: string): Promise<void>;
⋮----
export interface FetchStub {
    fetch(request: Request): Promise<Response>;
}
⋮----
fetch(request: Request): Promise<Response>;
```

## File: src/utils/cloud-logger-types.ts
```typescript
export interface CloudLogKey {
    key: string;
    size: number;
    symbol?: string;
}
⋮----
export interface CloudLogList {
    keys: CloudLogKey[];
    cursor?: string;
}
⋮----
export interface CloudLogFile {
    stream: ReadableStream | null;
    contentType: string;
}
⋮----
export interface CloudLoggerLike {
    uploadImage(base64: string, mimeType: string, prefix?: string): Promise<string | null>;
    saveLog(data: {
        symbol: string;
        traceId?: string;
        type: string;
        prompt: string;
        response: any;
        images: Array<{ base64: string; mimeType: string }>;
        meta?: {
            provider?: string;
            model?: string;
        };
    }): Promise<string>;
    listLogs(limit?: number, cursor?: string): Promise<CloudLogList>;
    getLog(key: string): Promise<any | null>;
    getFile(key: string): Promise<CloudLogFile>;
}
⋮----
uploadImage(base64: string, mimeType: string, prefix?: string): Promise<string | null>;
saveLog(data: {
        symbol: string;
        traceId?: string;
        type: string;
        prompt: string;
        response: any;
        images: Array<{ base64: string; mimeType: string }>;
        meta?: {
            provider?: string;
            model?: string;
        };
    }): Promise<string>;
listLogs(limit?: number, cursor?: string): Promise<CloudLogList>;
getLog(key: string): Promise<any | null>;
getFile(key: string): Promise<CloudLogFile>;
```

## File: src/utils/font-data.ts
```typescript

```

## File: src/utils/index.ts
```typescript
/**
 * 工具函数入口
 */
```

## File: src/utils/log-entry.ts
```typescript
export interface LogModelMeta {
    provider?: string;
    model?: string;
}
⋮----
export interface LogEntry {
    id: string;
    timestamp: number;
    symbol: string;
    traceId?: string;
    type:
    | 'IDLE' | 'PENDING' | 'OPEN' | 'HEARTBEAT' | 'UNKNOWN'
    | 'ANALYSIS_IDLE'      // 空仓分析
    | 'ANALYSIS_PENDING'   // 挂单分析
    | 'MANAGE_POSITION'    // 持仓管理
    | 'SNIPER_ENTRY'       // 狙击入场
    | 'REVERSAL_CHECK'     // 反转检测
    | 'MARKET_DECISION';   // 综合决策
    prompt: string;
    response: any;
    imagePaths: string[]; // paths
    meta?: LogModelMeta;
}
⋮----
| 'ANALYSIS_IDLE'      // 空仓分析
| 'ANALYSIS_PENDING'   // 挂单分析
| 'MANAGE_POSITION'    // 持仓管理
| 'SNIPER_ENTRY'       // 狙击入场
| 'REVERSAL_CHECK'     // 反转检测
| 'MARKET_DECISION';   // 综合决策
⋮----
imagePaths: string[]; // paths
```

## File: src/utils/logger.ts
```typescript
/**
 * 工具函数 - 日志记录
 */
⋮----
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
⋮----
interface LogEntry {
    level: LogLevel;
    message: string;
    timestamp: string;
    context?: Record<string, unknown>;
}
⋮----
function resolveMinLogLevel(): LogLevel
⋮----
/** 简单日志器 */
⋮----
debug(message: string, context?: Record<string, unknown>)
⋮----
info(message: string, context?: Record<string, unknown>)
⋮----
warn(message: string, context?: Record<string, unknown>)
⋮----
error(message: string, context?: Record<string, unknown>)
⋮----
function log(level: LogLevel, message: string, context?: Record<string, unknown>)
```

## File: src/utils/market-session.ts
```typescript
import type { MarketSessionConfig } from '../config/config-manager.js';
⋮----
type SessionLabel = 'REGULAR' | 'PRE_MARKET' | 'AFTER_HOURS' | 'CLOSED';
⋮----
export type MarketSessionState = {
    isOpen: boolean;
    session: SessionLabel;
    reason?: 'weekend' | 'holiday' | 'outside_hours';
    localDate: string;
    localTime: string;
};
⋮----
export type UsEquityCloseWindow = {
    shouldForceClose: boolean;
    minutesToClose: number | null;
    localDate: string;
    localTime: string;
};
⋮----
type LocalTimeParts = {
    year: number;
    month: number;
    day: number;
    weekday: number;
    hour: number;
    minute: number;
    second: number;
};
⋮----
const formatLocalParts = (date: Date, timeZone: string): LocalTimeParts =>
⋮----
const pad2 = (value: number)
⋮----
export function getMarketSessionState(
    config: MarketSessionConfig,
    now: Date = new Date(),
): MarketSessionState
⋮----
export function getUsEquityCloseWindow(
    config: MarketSessionConfig,
    minutesBeforeClose: number,
    now: Date = new Date(),
): UsEquityCloseWindow
```

## File: src/utils/market-snapshot.ts
```typescript
import type {
    CandleWithIndicators,
    MarketSnapshotCandle,
    MarketSnapshotPayload,
    MarketSnapshotTimeframe,
    MarketSnapshotTimeframeSummary,
    MultiTimeframeData,
} from '../types/index.js';
⋮----
export function buildMarketSnapshotPayload(
    marketData: MultiTimeframeData,
    options?: { triggerReason?: string },
): MarketSnapshotPayload
⋮----
function buildTimeframeSnapshot(
    candles: CandleWithIndicators[],
    limit: number,
): MarketSnapshotTimeframe
⋮----
function toSnapshotCandle(candle: CandleWithIndicators): MarketSnapshotCandle
⋮----
function buildSummary(candles: MarketSnapshotCandle[]): MarketSnapshotTimeframeSummary | null
```

## File: src/utils/retry.ts
```typescript
/**
 * 工具函数 - 重试机制
 */
⋮----
import { logger } from './logger.js';
⋮----
interface RetryOptions {
    maxRetries: number;
    delayMs: number;
    backoff?: boolean;
}
⋮----
/**
 * 带重试的异步操作执行器
 */
export async function withRetry<T>(
    operation: () => Promise<T>,
    options: Partial<RetryOptions> = {}
): Promise<T>
⋮----
/**
 * 延迟函数
 */
export function sleep(ms: number): Promise<void>
```

## File: src/utils/stop-loss-cooldown.ts
```typescript
export interface LastStopLossLike {
    pnl?: number;
}
⋮----
export function isProfitableStopLossRecord(lastStopLoss?: LastStopLossLike): boolean
⋮----
export function shouldApplyPostStopLossCooldown(lastStopLoss?: LastStopLossLike): boolean
```

## File: src/utils/stop-order-guard.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { GenericOpenOrder } from '../modules/executor/types.js';
import { isStopLossTriggerOrder, resolveActiveStopOrderId } from './stop-order-guard.js';
⋮----
function buildOrder(overrides: Partial<GenericOpenOrder>): GenericOpenOrder
```

## File: src/utils/stop-order-guard.ts
```typescript
import type { GenericOpenOrder } from '../modules/executor/types.js';
⋮----
export interface StopOrderGuardResult {
    slOrderId?: string;
    source: 'preferred' | 'fallback' | 'missing';
}
⋮----
type TriggerKind = 'sl' | 'tp';
⋮----
function normalizeTriggerKind(value: unknown): TriggerKind | undefined
⋮----
function readNestedValue(source: unknown, path: string[]): unknown
⋮----
function extractTriggerKind(order: GenericOpenOrder): TriggerKind | undefined
⋮----
/**
 * Resolve whether an open order is an active protective SL trigger.
 *
 * Priority:
 * 1) Trigger kind from raw payload (`tpsl=sl|tp`)
 * 2) Known TP order ID exclusion
 * 3) Legacy fallback (`reduceOnly && isTrigger`)
 */
export function isStopLossTriggerOrder(
    order: GenericOpenOrder,
    knownTpOrderIds?: Set<string>,
): boolean
⋮----
// Hyperliquid `openOrders` may omit trigger metadata for stop orders.
// When TP IDs are known in context, treat remaining reduce-only orders as protective stops.
⋮----
/**
 * Resolve the active stop-loss order ID from open orders.
 *
 * @param openOrders - Current open orders for the symbol
 * @param preferredOrderId - Cached SL order ID to check first
 * @param knownTpOrderIds - Known TP order IDs to exclude from fallback matching
 *   (prevents misidentifying a trigger-type TP order as an SL)
 */
export function resolveActiveStopOrderId(
    openOrders: GenericOpenOrder[],
    preferredOrderId?: string,
    knownTpOrderIds?: Set<string>,
): StopOrderGuardResult
```

## File: src/utils/symbol-extractor.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { extractSymbolFromPrompt, normalizeSymbol } from './symbol-extractor.js';
```

## File: src/utils/symbol-extractor.ts
```typescript
export function normalizeSymbol(value: string | undefined, fallback = 'UNKNOWN'): string
⋮----
export function isPlaceholderSymbol(value: string | undefined): boolean
⋮----
/**
 * Extract trading symbol from AI prompt text.
 * Supports both legacy and current prompt formats, e.g.:
 * - "**标的**: BTC"
 * - "- 标的: HYPE"
 * - "Symbol: ETH-USDC"
 */
export function extractSymbolFromPrompt(prompt: string, fallback = 'UNKNOWN'): string
```

## File: src/utils/take-profit-allocation.test.ts
```typescript
import { describe, expect, it } from 'vitest';
⋮----
import {
    allocateTakeProfitTranches,
    resolveStrategyTakeProfitDistribution,
} from './take-profit-allocation.js';
```

## File: src/utils/take-profit-allocation.ts
```typescript
import type { StrategyRoute, StrategyType, TradeSetup } from '../modules/structure-detector/types.js';
⋮----
export interface TakeProfitDistribution {
    tp1: number;
    tp2: number;
    tp3: number;
}
⋮----
export interface TakeProfitLevels {
    tp1: number;
    tp2: number;
    tp3: number;
}
⋮----
export interface TakeProfitAllocationInput {
    positionSize: number;
    tpLevels: TakeProfitLevels;
    minOrderNotionalUsd: number;
    requestedDistribution?: TakeProfitDistribution;
    strategyContext?: StrategyTakeProfitContext;
}
⋮----
export interface TakeProfitAllocationResult {
    distribution: TakeProfitDistribution;
    sizes: TakeProfitDistribution;
    notes: string[];
}
⋮----
export interface StrategyTakeProfitContext {
    strategy?: StrategyType;
    signalFamily?: TradeSetup['context']['signalFamily'];
    strategyRoute?: StrategyRoute;
}
⋮----
function zeroTinySize(value: number): number
⋮----
export function resolveStrategyTakeProfitDistribution(
    context: StrategyTakeProfitContext,
): TakeProfitDistribution
⋮----
function normalizeDistribution(
    input?: TakeProfitDistribution,
    strategyContext?: StrategyTakeProfitContext,
): TakeProfitDistribution
⋮----
const clampTranche = (value: number | undefined): number =>
⋮----
// Fall back to the default distribution if all tranches are invalid or zero.
⋮----
function trancheNotional(size: number, price: number): number
⋮----
export function allocateTakeProfitTranches(input: TakeProfitAllocationInput): TakeProfitAllocationResult
⋮----
// User rule: keep TP1 50%; when TP3 is too small to place, fallback to TP1/TP2 = 50/50.
⋮----
// If TP2 is still too small after fallback, collapse to single TP1.
```

## File: src/utils/take-profit-levels.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { applyTp3FrontRun } from './take-profit-levels.js';
```

## File: src/utils/take-profit-levels.ts
```typescript
export interface TakeProfitLevels {
    tp1: number;
    tp2: number;
    tp3: number;
}
⋮----
interface ApplyTargetFrontRunParams {
    direction: 'LONG' | 'SHORT';
    entryPrice: number;
    slPrice: number;
    levels: TakeProfitLevels;
    atr?: number;
    enabled?: boolean;
    atrMultiplier?: number;
    minRelativeBuffer?: number;
    maxRiskFraction?: number;
    minTp1RiskMultiple?: number;
}
⋮----
interface ApplyTargetFrontRunResult {
    levels: TakeProfitLevels;
    adjusted: boolean;
    bufferApplied?: number;
    reason?: string;
}
⋮----
interface NormalizeTakeProfitLevelsParams {
    direction: 'LONG' | 'SHORT';
    entryPrice: number;
    slPrice: number;
    levels: Partial<TakeProfitLevels>;
    minTp1RiskMultiple?: number;
}
⋮----
interface NormalizeTakeProfitLevelsResult {
    levels: TakeProfitLevels;
    adjusted: boolean;
    reason?: string;
}
⋮----
export function normalizeTakeProfitLevels(
    params: NormalizeTakeProfitLevelsParams
): NormalizeTakeProfitLevelsResult
⋮----
const toProfitDistance = (price: number): number => (
        params.direction === 'LONG'
            ? price - params.entryPrice
            : params.entryPrice - price
    );
const toPrice = (distance: number): number => (
        params.direction === 'LONG'
            ? params.entryPrice + distance
            : params.entryPrice - distance
    );
⋮----
function applyTargetFrontRun(
    params: ApplyTargetFrontRunParams,
    target: 'tp1' | 'tp3',
): ApplyTargetFrontRunResult
⋮----
export function applyTp1FrontRun(
    params: ApplyTargetFrontRunParams
): ApplyTargetFrontRunResult
⋮----
export function applyTp3FrontRun(
    params: ApplyTargetFrontRunParams
): ApplyTargetFrontRunResult
```

## File: src/utils/time.ts
```typescript
/**
 * 工具函数 - 时间处理
 */
⋮----
/** 时间周期映射到 Twelve Data 的 interval 参数 */
⋮----
export type TimeframeKey = keyof typeof INTERVAL_MAP;
⋮----
/**
 * 获取当前 UTC 时间戳
 */
export function nowUTC(): number
⋮----
/**
 * 格式化时间戳为 ISO 字符串
 */
export function formatTimestamp(ts: number): string
⋮----
/**
 * 检查时间戳是否在指定分钟内
 */
export function isWithinMinutes(timestamp: number, minutes: number): boolean
⋮----
/**
 * 获取指定分钟前的时间戳
 */
export function minutesAgo(minutes: number): number
⋮----
/**
 * 解析 Twelve Data 的日期时间字符串
 * 格式: "2024-01-15 14:30:00"
 */
export function parseTwelveDataDatetime(datetime: string): number
⋮----
// Twelve Data 返回 UTC 时间
```

## File: src/favicon.ts
```typescript

```

## File: frontend/src/api/client.ts
```typescript
export interface SymbolConfigResponse {
  symbols: string[];
  shadowEnabled?: boolean;
  shadowSymbols?: string[];
}
⋮----
interface ApiEnvelopeError {
  code: string;
  message: string;
  details?: unknown;
}
⋮----
interface ApiEnvelope<T> {
  success: boolean;
  data?: T;
  error?: ApiEnvelopeError;
  meta?: Record<string, unknown>;
}
⋮----
export interface ShortTermMemory {
  lastDecision: string;
  lastReasoning: string;
  watchedLevels: number[];
  updatedAt: number;
  lastStopLoss?: {
    direction: 'LONG' | 'SHORT';
    time: number;
    price: number;
  };
  manualIntervention?: {
    activatedAt: number;
    expiresAt?: number;
    reason: string;
  };
}
⋮----
export interface SniperContextSummary {
  triggeredAt: number;
  triggerPrice: number;
  direction: 'LONG' | 'SHORT';
  entryZone: {
    type: 'FVG' | 'OB';
    top: number;
    bottom: number;
  };
  protectionPrice: number;
  expiresAt: number;
  attempts: number;
  signalGrade?: 'A' | 'B';
  structureBreakType?: 'MSS' | 'BOS';
}
⋮----
export interface PendingLimitContextSummary {
  orderId: string;
  direction: 'LONG' | 'SHORT';
  entryPrice: number;
  slPrice: number;
  tpPrice: number;
  tpLevels: {
    tp1: number;
    tp2: number;
    tp3: number;
  };
  tpDistribution?: {
    tp1: number;
    tp2: number;
    tp3: number;
  };
  size: number;
  placedAt: number;
  expiresAt: number;
  reasoning?: string;
}
⋮----
export interface ActiveTradeSummary {
  direction: 'LONG' | 'SHORT';
  entryPrice: number;
  slPrice: number;
  tpPrice: number;
  positionSize: number;
  remainingSize: number;
  createdAt: number;
  entryLogic: string;
}
⋮----
export interface TradingStateResponse {
  symbol?: string;
  status?: string;
  memory?: ShortTermMemory;
  sniperContext?: SniperContextSummary | null;
  pendingLimitContext?: PendingLimitContextSummary | null;
  activeTrade?: ActiveTradeSummary | null;
  lastUpdated?: number;
  latestPrice?: number;
  priceUpdatedAt?: number;
}
⋮----
export interface DecisionLogEntry {
  timestamp: number;
  decision: string;
  reasoning: string;
  price?: number;
  status: string;
  symbol?: string;
  debug?: Record<string, unknown>;
  charts?: Array<{
    symbol?: string;
    interval: string;
    imageBase64: string;
    generatedAt: number;
  }>;
  structureInfo?: {
    pdh?: number;
    pdl?: number;
    pwh?: number;
    pwl?: number;
    londonHigh?: number;
    londonLow?: number;
    nyHigh?: number;
    nyLow?: number;
    equalHighs?: Array<number | string>;
    equalLows?: Array<number | string>;
    recentSweep?: string;
    mss?: string;
    displacement?: string;
    fvg?: string;
    ob?: string;
    signalGrade?: string;
    signalScore?: number;
    strategy?: 'STANDARD_ICT' | 'TURTLE_SOUP' | string;
    strategyRoute?: 'TREND' | 'CONSOLIDATION' | 'HYBRID' | string;
    signalFamily?: string;
    rangeModeActive?: boolean;
    rangeModeReason?: string;
    rangeModeVwapCrossCount?: number;
    rangeModeVwapCrossWindow?: number;
    rangeModeBandwidthPercentile?: number;
    rangeModeExpansionClusterDetected?: boolean;
    hurst?: {
      value: number;
      regime: 'TRENDING' | 'RANDOM_WALK' | 'MEAN_REVERTING';
      description: string;
    };
    d1GateZone?: 'premium' | 'discount' | 'equilibrium';
    d1GatePosition?: number;
    d1GateRangeHigh?: number;
    d1GateRangeLow?: number;
    d1GateEquilibrium?: number;
    d1GateLookbackCandles?: number;
    turtlePriorityContext?: {
      triggered?: boolean;
      source?: 'EXTREME_SWEEP' | 'TREND_EXHAUSTION' | 'H4_RANGE_EDGE' | string;
      direction?: 'bullish' | 'bearish' | string;
      reason?: string;
      h4Range?: {
        high: number;
        low: number;
        position: number;
        edgeRatio: number;
        nearLowerEdge: boolean;
        nearUpperEdge: boolean;
      };
      primaryRangeBoundary?: {
        high: number;
        low: number;
        tolerance: number;
        lowerTestCount: number;
        upperTestCount: number;
        hoveringNearLower: boolean;
        hoveringNearUpper: boolean;
      };
      extremeCandidates?: Array<{
        type: string;
        price: number;
        status: string;
        distanceToPrice: number;
        time?: number;
      }>;
      recentSweepCandidates?: Array<{
        type: string;
        price: number;
        sweepTime: number;
        recovered: boolean;
        distanceToPrice: number;
        priorityEligible: boolean;
      }>;
    };
  };
}
⋮----
export interface DecisionLogResponse {
  logs: DecisionLogEntry[];
  total: number;
  page: number;
  pageSize: number;
  totalPages?: number;
}
⋮----
// Auth Token Management
⋮----
export function setAuthToken(token: string | null)
⋮----
export function buildUrl(path: string): string
⋮----
function buildAuthHeaders(accept: string): Record<string, string>
⋮----
async function handleJson<T>(path: string): Promise<T>
⋮----
async function handleJsonRequest<T>(path: string, init: RequestInit): Promise<T>
⋮----
// Auth failed, clear token and maybe reload/redirect
⋮----
export async function fetchSymbols()
⋮----
export async function fetchState(symbol: string)
⋮----
export interface PauseAutomationRequest {
  reason?: string;
  cancelOpenOrders?: boolean;
  closePosition?: boolean;
}
⋮----
export interface PauseAutomationResponse {
  symbol: string;
  previousStatus: string;
  resetAt: number;
  reason: string;
  holdUntilResume?: boolean;
  canceledOrders: string[];
}
⋮----
export async function pauseAutomation(symbol: string, payload?: PauseAutomationRequest)
⋮----
export interface ResumeAutomationRequest {
  reason?: string;
}
⋮----
export interface ResumeAutomationResponse {
  symbol: string;
  previousStatus: string;
  resumedAt: number;
  reason: string;
}
⋮----
export async function resumeAutomation(symbol: string, payload?: ResumeAutomationRequest)
⋮----
export async function fetchLogs(symbol: string, page = 1, pageSize = 50)
⋮----
export async function fetchShadowLogs(symbol: string, page = 1, pageSize = 50)
⋮----
export interface TradesResponse {
  stats: {
    totalPnl: string;
    totalFees: string;
    netPnl: string;
    winCount: number;
    lossCount: number;
    totalTrades: number;
    winRate: string;
    profitFactor?: string;
    maxDrawdown?: string;
    maxDrawdownPct?: string;
    sharpeRatio?: string;
    longestLosingStreak?: number;
    currentLosingStreak?: number;
    maxSingleWin?: string;
    maxSingleLoss?: string;
    averageWin?: string;
    averageLoss?: string;
    expectancy?: string;
    maxSingleWinTime?: number | null;
    maxSingleWinCoin?: string | null;
    maxSingleWinSide?: string | null;
    maxSingleLossTime?: number | null;
    maxSingleLossCoin?: string | null;
    maxSingleLossSide?: string | null;
  };
  entryLabelBreakdown?: Array<{
    label: string;
    rawLabel?: string;
    trades: number;
    wins: number;
    losses: number;
    winRate: string;
    grossPnl: string;
    fees: string;
    netPnl: string;
  }>;
  monthlyBreakdown?: Array<{
    period: string;
    grossPnl: string;
    fees: string;
    netPnl: string;
    trades: number;
    wins: number;
    losses: number;
    winRate: string;
  }>;
  yearlyBreakdown?: Array<{
    period: string;
    grossPnl: string;
    fees: string;
    netPnl: string;
    trades: number;
    wins: number;
    losses: number;
    winRate: string;
  }>;
  equityCurve?: Array<{
    time: number;
    equity: number;
    drawdown: number;
    drawdownPct: number;
  }>;
  fills: Array<{
    coin: string;
    side: string;
    price: string;
    size: number;
    pnl: string;
    fee: string;
    netPnl: string;
    time: number;
    provider?: string;
    entryLabel?: string;
    rawEntryLabel?: string;
  }>;
  notice?: string;
}
⋮----
export async function fetchTrades(limit = 50, options?:
⋮----
export interface AbTradeLaneSummary {
  totalTrades: number;
  winCount: number;
  lossCount: number;
  winRate: string;
  grossPnl: string;
  totalFees: string;
  netPnl: string;
  profitFactor: string;
  expectancyPerTrade: string;
  pnlPer100Trades: string;
  tradeSharpe: string;
  equityCurve: Array<{
    time: number;
    equity: number;
    drawdown: number;
    drawdownPct: number;
  }>;
}
⋮----
export interface AbTradesResponse {
  shadowEnabled: boolean;
  champion: AbTradeLaneSummary;
  shadow: AbTradeLaneSummary | null;
}
⋮----
export async function fetchAbTrades(limit = 800, options?:
⋮----
export interface CloudLogKey {
  key: string;
  size: number;
  symbol?: string;
}
⋮----
export interface CloudLogsResponse {
  keys: CloudLogKey[];
  cursor?: string;
}
⋮----
export async function fetchCloudLogs(limit = 100, cursor?: string)
⋮----
export interface CloudLogDetail {
  id: string;
  timestamp: number;
  symbol: string;
  type: string;
  prompt: string;
  response: unknown;
  imagePaths?: string[];
  meta?: {
    provider?: string;
    model?: string;
  };
}
⋮----
export async function fetchCloudLogDetail(key: string)
⋮----
export async function downloadCloudLogs(params: {
  symbol: string;
  limit?: number;
  startDate?: string;
  endDate?: string;
}): Promise<
```

## File: src/controller/anchor-entry-policy.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import {
    deriveAnchorDirection,
    enforceBtcLeadEthSymbols,
    isAnchorSymbol,
    isEthExecutionSymbol,
    shouldRejectEntryByAnchor,
    shouldRejectEntryByCycleGuard,
} from './anchor-entry-policy.js';
```

## File: src/controller/anchor-entry-policy.ts
```typescript
import type { StrategyRoute } from '../modules/structure-detector/types.js';
import type { TradeSetup } from '../modules/structure-detector/types.js';
⋮----
export type EntryDirection = 'LONG' | 'SHORT';
export type BtcLeadSource = 'BTC_TURTLE_LEAD' | 'BTC_A_LEAD' | 'BTC_SMT_REVERSAL';
export type EntryGateReason =
    | 'BTC_BIAS_UNAVAILABLE'
    | 'REJECT_BY_BTC_BIAS'
    | 'REJECT_BY_CROSS_SYMBOL_CONFLICT';
⋮----
export interface AnchorDirectionInput {
    strategyRoute?: StrategyRoute;
    trendBias?: 'bullish' | 'bearish' | 'neutral';
    h1BreakDirection?: 'bullish' | 'bearish';
    m15BreakDirection?: 'bullish' | 'bearish';
    d1Gate?: {
        zone: 'premium' | 'discount' | 'equilibrium';
        position: number;
    };
}
⋮----
export interface EntryGateResult {
    reject: boolean;
    reason?: EntryGateReason;
}
⋮----
function normalizeSymbolRoot(symbol: string): string
⋮----
export function isAnchorSymbol(symbol: string): boolean
⋮----
export function isEthExecutionSymbol(symbol: string): boolean
⋮----
/**
 * Simplicity mode: when BTC and ETH are both configured, restrict execution
 * universe to BTC(anchor) + ETH(execution), dropping other symbols.
 */
export function enforceBtcLeadEthSymbols(symbols: string[]): string[]
⋮----
function toLongShort(direction: 'bullish' | 'bearish' | undefined): EntryDirection | undefined
⋮----
export function deriveAnchorDirection(input: AnchorDirectionInput): EntryDirection | undefined
⋮----
const applyD1Gate = (candidate: EntryDirection | undefined): EntryDirection | undefined =>
⋮----
// In non-trend routes, prefer recent structure direction over slower trend bias.
⋮----
// TREND route keeps bias-first behavior.
⋮----
export function shouldRejectEntryByAnchor(input: {
    symbol: string;
    status: string;
    entryDirection: EntryDirection;
    anchorDirection?: EntryDirection;
    leadSource?: BtcLeadSource;
    setup?: TradeSetup;
}): EntryGateResult
⋮----
// BTC acts as lead symbol, but is still tradable now.
⋮----
function isHighConvictionSweepDisplacementSetup(setup?: TradeSetup): boolean
⋮----
export function shouldRejectEntryByCycleGuard(input: {
    symbol: string;
    openedSymbolInScan?: string;
}): EntryGateResult
```

## File: src/controller/btc-lead-eth-follow.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { TradeSetup } from '../modules/structure-detector/types.js';
import { buildBtcLedEthFollowSetup } from './btc-lead-eth-follow.js';
⋮----
function createBtcTurtleSetup(direction: 'bullish' | 'bearish', strategy: 'TURTLE_SOUP' | 'BAND_REVERSION' = 'TURTLE_SOUP'): TradeSetup
```

## File: src/controller/btc-lead-eth-follow.ts
```typescript
import type { TradeSetup } from '../modules/structure-detector/types.js';
⋮----
const FALLBACK_ATR_RATIO = 0.008; // 0.8%
⋮----
export function isBtcLeadTurtleSetup(setup?: TradeSetup): boolean
⋮----
export function buildBtcLedEthFollowSetup(input: {
    btcSetup?: TradeSetup;
    currentPrice: number;
    m15Atr?: number;
    now: number;
    ethH1BreakDirection?: 'bullish' | 'bearish';
    ethM15BreakDirection?: 'bullish' | 'bearish';
}): TradeSetup | undefined
```

## File: src/controller/fill-sync.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { GenericFill } from '../modules/executor/types.js';
import type { TradeLogEntry } from '../types/index.js';
import { resolveFillTraceIdFromRecentLogs } from './fill-sync.js';
```

## File: src/controller/order-fill-watcher-client.ts
```typescript
import type { PendingLimitContext } from '../types/index.js';
import { logger } from '../utils/index.js';
⋮----
export type OrderFillWatcherStub = { fetch: (request: Request) => Promise<Response> };
⋮----
export interface OrderWatchRegistration {
    orderId?: string;
    symbol: string;
    direction: 'LONG' | 'SHORT';
    expectedSize: number;
    entryPrice: number;
    slPrice: number;
    tpLevels: {
        tp1Price: number;
        tp2Price: number;
        tp3Price: number;
    };
    expiresAt?: number;
    strategy?: PendingLimitContext['strategy'];
    strategyRoute?: PendingLimitContext['strategyRoute'];
    signalFamily?: PendingLimitContext['signalFamily'];
    entryLogic?: string;
    tpDistribution?: {
        tp1: number;
        tp2: number;
        tp3: number;
    };
    bracket?: {
        mode: 'SQUEEZE_STRADDLE';
        peerOrderId?: string;
    };
}
⋮----
export async function registerOrderWatch(
    stub: OrderFillWatcherStub | undefined,
    payload: OrderWatchRegistration,
): Promise<boolean>
⋮----
export async function unregisterOrderWatch(
    stub: OrderFillWatcherStub | undefined,
    symbol: string,
    orderId?: string,
): Promise<boolean>
```

## File: src/controller/sl-distance-reprice.ts
```typescript
export interface SlDistanceRepriceParams {
    direction: 'LONG' | 'SHORT';
    entryPrice: number;
    slPrice: number;
    maxSlDistancePercent: number;
}
⋮----
export interface SlDistanceRepriceResult {
    adjusted: boolean;
    adjustedEntryPrice: number;
    originalSlDistancePercent: number;
    adjustedSlDistancePercent: number;
}
⋮----
function calcSlDistancePercent(entryPrice: number, slPrice: number): number
⋮----
export function repriceEntryForMaxSlDistance(params: SlDistanceRepriceParams): SlDistanceRepriceResult
⋮----
// Require LONG stop to be below entry.
⋮----
// Require SHORT stop to be above entry.
```

## File: src/controller/utils.test.ts
```typescript
import { describe, expect, it, vi } from 'vitest';
import type { IExecutor } from '../modules/executor/index.js';
import { buildStructureInfo, cancelTradeOrders } from './utils.js';
⋮----
function mockExecutor()
⋮----
expect(executor.cancelOrder).toHaveBeenCalledTimes(3); // SL + 2 unfilled TPs
```

## File: src/controller/utils.ts
```typescript
/**
 * Scheduler 工具函数
 */
⋮----
import type { MultiTimeframeData } from '../types/index.js';
import type { StructureAnalysis, StrategyRoute, StrategyType } from '../modules/structure-detector/index.js';
import type { LiquidityAnalysis, Direction } from '../modules/structure-detector/types.js';
import type { IExecutor } from '../modules/executor/index.js';
import { isValidEntryFVG } from '../modules/structure-detector/index.js';
import { logger } from '../utils/index.js';
⋮----
/** 高位扫损 → 看空催化；低位扫损 → 看多催化 */
⋮----
function sweepImpliedDirection(levelType: string): Direction | null
⋮----
/**
 * 选择与结构方向一致的 sweep 用于因果链展示。
 * 扫高点 → 看空催化，扫低点 → 看多催化。
 * 如果方向未知或没有匹配的，fallback 到 recentSweep。
 */
function pickDirectionAlignedSweep(
    liquidity: LiquidityAnalysis,
    structureDir: Direction | undefined,
): LiquidityAnalysis['recentSweep']
⋮----
/**
 * 格式化时间戳为可读字符串 (MM-DD HH:MM)
 */
export function formatTime(timestamp: number): string
⋮----
/**
 * 结构信息摘要类型
 */
export interface StructureInfo {
    pdh?: number;
    pdl?: number;
    pwh?: number;
    pwl?: number;
    londonHigh?: number;
    londonLow?: number;
    nyHigh?: number;
    nyLow?: number;
    equalHighs?: string[];
    equalLows?: string[];
    recentSweep?: string;
    mss?: string;
    displacement?: string;
    fvg?: string;
    ob?: string;
    signalGrade?: string;
    signalScore?: number;
    strategy?: StrategyType;
    strategyRoute?: StrategyRoute;
    signalFamily?: string;
    liquiditySweep?: string;
    rangeModeActive?: boolean;
    rangeModeReason?: string;
    rangeModeVwapCrossCount?: number;
    rangeModeVwapCrossWindow?: number;
    rangeModeBandwidthPercentile?: number;
    rangeModeExpansionClusterDetected?: boolean;
    hurst?: {
        value: number;
        regime: 'TRENDING' | 'RANDOM_WALK' | 'MEAN_REVERTING';
        description: string;
    };
    d1GateZone?: 'premium' | 'discount' | 'equilibrium';
    d1GatePosition?: number;
    d1GateRangeHigh?: number;
    d1GateRangeLow?: number;
    d1GateEquilibrium?: number;
    d1GateLookbackCandles?: number;
    turtlePriorityContext?: {
        triggered: boolean;
        source?: 'EXTREME_SWEEP' | 'TREND_EXHAUSTION' | 'H4_RANGE_EDGE';
        direction?: Direction;
        reason?: string;
        h4Range?: {
            high: number;
            low: number;
            position: number;
            edgeRatio: number;
            nearLowerEdge: boolean;
            nearUpperEdge: boolean;
        };
        extremeCandidates?: Array<{
            type: string;
            price: number;
            status: string;
            distanceToPrice: number;
            time?: number;
        }>;
        recentSweepCandidates?: Array<{
            type: string;
            price: number;
            sweepTime: number;
            recovered: boolean;
            distanceToPrice: number;
            priorityEligible: boolean;
        }>;
    };
}
⋮----
/**
 * 构建结构信息摘要（用于日志记录）
 */
export function buildStructureInfo(structureAnalysis: StructureAnalysis): StructureInfo
⋮----
// 获取 FVG 信息（含时间）
⋮----
// 获取 OB 信息（含时间）
⋮----
// 获取 MSS/BOS 信息（含时间）
⋮----
// Displacement（含时间）
⋮----
// 扫损信息（含时间）
// 选择与结构方向一致的 sweep：扫高点 → 看空催化，扫低点 → 看多催化
⋮----
// 流动性点位
⋮----
// Session 高低点
⋮----
// Equal Highs/Lows
⋮----
// 扫损信息
⋮----
// 结构破坏
⋮----
// Displacement
⋮----
// FVG
⋮----
// OB
⋮----
// 信号评分
⋮----
/**
 * 构建最近 K 线摘要 (D1:5, H4:10, M15:20, M5:15)
 * 包含完整的多周期数据供 DeepSeek 推理使用
 */
export function buildRecentCandlesSummary(data: MultiTimeframeData): string
⋮----
// 格式化单根 K 线
const formatCandle = (c: any, includeDate: boolean = false) =>
⋮----
? dateTime.toISOString().slice(5, 16).replace('T', ' ')  // MM-DD HH:MM
: dateTime.toISOString().slice(11, 16);  // HH:MM
⋮----
// 计算周期统计
const calcStats = (candles: any[]) =>
⋮----
// D1 日线 (最近5根)
⋮----
// H4 4小时线 (最近10根)
⋮----
// M15 15分钟线 (最近20根)
⋮----
// H1 1小时线 (最近15根)
⋮----
// M5 5分钟线 (最近10根)
⋮----
// 当前价格和时间
⋮----
/**
 * 取消止损单 + 所有未成交止盈单（共用逻辑）
 */
export async function cancelTradeOrders(
    executor: IExecutor,
    symbol: string,
    trade: { slOrderId?: string; tpLevels?: Array<{ orderId?: string; filled?: boolean; level?: number }> },
    tag: string,
): Promise<void>
```

## File: src/modules/analyzer/prompts/open-turtle-soup.ts
```typescript
import { renderPrompt } from './renderer.js';
import { OPEN_RESPONSE_SCHEMA } from './schema-registry.js';
import { joinPromptLines, optionalTextSection, textSection } from './section-helpers.js';
import { definePromptSpec, type PromptSpec } from './spec.js';
⋮----
/**
 * Turtle Soup 持仓管理 Prompt
 *
 * 与标准趋势持仓分离，避免海龟汤仓位继续吃到趋势单的提前平仓/错误移损叙事。
 */
export type OpenTurtleSoupPromptParams = {
  symbol: string;
  direction: 'LONG' | 'SHORT';
  entryLogic: string;
  entryPrice: number;
  slPrice: number;
  tpPrice: number;
  currentPrice: number;
  pnlR: number;
  structureSummary: string;
  holdingMinutes?: number;
  turtleSoupInsight?: string;
  keyCandlesContext?: string;
  visionRiskContext?: string;
  entryZone?: {
    type?: 'FVG' | 'OB' | 'IFVG' | 'SWEEP';
    top: number;
    bottom: number;
    midpoint?: number;
  };
  breakoutContext?: {
    type: 'BOX_BREAKOUT';
    rangeHigh: number;
    rangeLow: number;
    confirmTimeframe: 'H1' | 'M15';
    reclaimConfirmBars: number;
  };
};
⋮----
function deriveOpenTurtleSoupContext(params: OpenTurtleSoupPromptParams)
⋮----
function buildOpenTurtleSoupHoldingSection(
  params: OpenTurtleSoupPromptParams,
  context: ReturnType<typeof deriveOpenTurtleSoupContext>,
): string
⋮----
function buildOpenTurtleSoupEntryZoneSection(
  params: OpenTurtleSoupPromptParams,
  context: ReturnType<typeof deriveOpenTurtleSoupContext>,
): string
⋮----
function buildOpenTurtleSoupBreakoutSection(params: OpenTurtleSoupPromptParams): string
⋮----
function buildOpenTurtleSoupPrinciples(params: OpenTurtleSoupPromptParams): string
⋮----
function buildOpenTurtleSoupTaskSection(): string
⋮----
export function buildOpenTurtleSoupPromptSpec(params: OpenTurtleSoupPromptParams): PromptSpec<OpenTurtleSoupPromptParams>
⋮----
export function buildOpenTurtleSoupPrompt(params: OpenTurtleSoupPromptParams): string
```

## File: src/modules/analyzer/prompts/open.ts
```typescript
import { buildOpenBandReversionPrompt } from './open-band-reversion.js';
import { buildOpenBandReversionPromptSpec } from './open-band-reversion.js';
import { buildOpenTurtleSoupPrompt } from './open-turtle-soup.js';
import { buildOpenTurtleSoupPromptSpec } from './open-turtle-soup.js';
import { renderPrompt } from './renderer.js';
import { OPEN_RESPONSE_SCHEMA } from './schema-registry.js';
import { joinPromptLines, optionalTextSection, textSection } from './section-helpers.js';
import { definePromptSpec, type PromptSpec } from './spec.js';
⋮----
/**
 * 持仓管理 Prompt 模板
 */
export type OpenPromptParams = {
  symbol: string;
  direction: 'LONG' | 'SHORT';
  entryLogic: string;
  entryPrice: number;
  slPrice: number;
  tpPrice: number;
  currentPrice: number;
  pnlR: number;
  structureSummary: string;
  holdingMinutes?: number;  // 持仓时间（分钟）
  isTurtleSoup?: boolean;
  turtleSoupInsight?: string;
  keyCandlesContext?: string;
  visionRiskContext?: string;
  entryZone?: {
    type?: 'FVG' | 'OB' | 'IFVG' | 'SWEEP';
    top: number;
    bottom: number;
    midpoint?: number;
  };
  breakoutContext?: {
    type: 'BOX_BREAKOUT';
    rangeHigh: number;
    rangeLow: number;
    confirmTimeframe: 'H1' | 'M15';
    reclaimConfirmBars: number;
  };
};
⋮----
holdingMinutes?: number;  // 持仓时间（分钟）
⋮----
function deriveOpenPromptContext(params: OpenPromptParams)
⋮----
function buildOpenHoldingSection(params: OpenPromptParams, context: ReturnType<typeof deriveOpenPromptContext>): string
⋮----
function buildOpenEntryZoneSection(params: OpenPromptParams, context: ReturnType<typeof deriveOpenPromptContext>): string
⋮----
function buildOpenBreakoutSection(params: OpenPromptParams): string
⋮----
function buildOpenDecisionPrinciples(params: OpenPromptParams, context: ReturnType<typeof deriveOpenPromptContext>): string
⋮----
function buildOpenTaskSection(): string
⋮----
export function buildOpenPromptSpec(params: OpenPromptParams): PromptSpec<OpenPromptParams>
⋮----
export function buildOpenPrompt(params: OpenPromptParams): string
⋮----
type OpenSignalFamily =
  | 'SWEEP_SFP'
  | 'VWAP_BOUNCE'
  | 'BAND_REVERSION'
  | 'BAND_REVERSION_SOFT'
  | 'RANGE_TRAP'
  | 'MEAN_REVERSION'
  | 'AI_DISPLACEMENT'
  | string;
⋮----
export type ManagedOpenPromptFamily = 'STANDARD_ICT' | 'TURTLE_SOUP' | 'BAND_REVERSION';
⋮----
export type ManagedOpenPromptParams = OpenPromptParams & {
  signalFamily?: OpenSignalFamily;
  tp1Price?: number;
  tp2Price?: number;
  bbUpper?: number;
  bbMiddle?: number;
  bbLower?: number;
  sessionVwap?: number;
  rangeModeActive?: boolean;
  vwapCrossCount?: number;
};
⋮----
export function resolveManagedOpenPromptFamily(params: {
  signalFamily?: OpenSignalFamily;
  entryLogic: string;
}): ManagedOpenPromptFamily
⋮----
// SMT_REVERSAL uses STANDARD_ICT prompt (not TURTLE_SOUP)
⋮----
function isSmtReversalFamily(signalFamily?: string): boolean
⋮----
export function buildManagedOpenPromptSpec(params: ManagedOpenPromptParams): PromptSpec<any>
⋮----
// Inject SMT reversal guidance when applicable
⋮----
export function buildManagedOpenPrompt(params: ManagedOpenPromptParams): string
⋮----
// Use the spec-based builder (includes SMT section injection)
```

## File: src/modules/analyzer/index.ts
```typescript
/**
 * AI 分析器模块
 *
 * ========== 架构说明 ==========
 *
 * 本模块封装所有 AI 分析逻辑，对外提供简洁的接口：
 *
 * 【对外接口】
 * - analyzeByState(): 根据状态（IDLE/PENDING/OPEN）自动选择分析方法
 * - analyzeSniperEntry(): 狙击入场分析
 * - analyzeHeartbeat(): 心跳分析（轻量级市场更新）
 * - analyzeReversal(): 反向信号分析（陷阱检测）
 *
 * 【分析模式】
 * - useAIVision = false（默认）: 纯文本分析，成本优化
 * - useAIVision = true: IDLE 状态使用视觉叙事(可选 ZAI/Gemini) + 文本推理双脑模式
 *
 * 【分析后端】
 * - DeepSeek: 默认文本后端，成本较低
 * - Qwen: 阿里云百炼提供的通义千问模型
 * - ZAI / Gemini: 视觉叙事分析（仅当 useAIVision=true 时启用）
 *
 * ===========================================
 */
⋮----
import type {
    TradingState,
    MultiTimeframeData,
    ChartSnapshot,
    IdleAnalysisResponse,
    PendingConfirmResponse,
    OpenManageResponse,
    SniperEntryResponse,
    HeartbeatResponse,
    ReversalAnalysisResponse,
    AIVisualNarrative,
    VisionEntryVetoResponse,
    VisionOpenRiskReviewResponse,
    ParsedAIResponse
} from '../../types/index.js';
import type { StructureAnalysis } from '../structure-detector/index.js';
import type { StrategyType } from '../structure-detector/types.js';
import type { CloudLoggerLike } from '../../utils/cloud-logger-types.js';
import type { LogEntry } from '../../utils/log-entry.js';
import { logger } from '../../utils/index.js';
⋮----
import { GeminiVisionClient, createGeminiVisionClient } from './vision-clients/gemini-vision-client.js';
import { DeepSeekClient } from './text-clients/deepseek-client.js';
import { QwenClient } from './text-clients/qwen-client.js';
import { ZaiClient } from './text-clients/zai-client.js';
import { ZaiVisionClient, createZaiVisionClient } from './vision-clients/zai-vision-client.js';
import {
    buildIdlePromptWithStructure,
    buildPendingPrompt,
    buildManagedOpenPrompt,
    buildVisionNarrativePrompt,
    buildVisionEntryVetoPrompt,
    buildOpenVisionRiskReviewPrompt,
    buildSniperEntryPrompt,
    buildAGradeFallbackPrompt,
    buildAiDisplacementEntryPrompt,
    buildReversalAnalysisPrompt,
    getSystemInstruction,
    PENDING_SYSTEM_INSTRUCTION,
    OPEN_SYSTEM_INSTRUCTION,
    SNIPER_SYSTEM_INSTRUCTION,
    A_GRADE_FALLBACK_SYSTEM_INSTRUCTION,
    AI_DISPLACEMENT_ENTRY_SYSTEM_INSTRUCTION,
    HEARTBEAT_SYSTEM_INSTRUCTION,
    compressStructureSummary,
} from './prompts/index.js';
import { analyzeTurtleSoupState } from './utils/turtle-soup.js';
import { buildManagedKeyCandleContextBlock } from './utils/key-candle-context.js';
⋮----
// ============= 类型定义 =============
⋮----
/** 分析后端类型 */
export type AnalysisProvider = 'deepseek' | 'qwen' | 'zai';
export type VisionProvider = 'zai' | 'gemini';
⋮----
/** 图片类型 */
type ChartImage = { base64: string; mimeType: string };
⋮----
/** 通用分析客户端接口 */
interface AnalysisClient {
    chat<T>(
        systemPrompt: string,
        userPrompt: string,
        chartImages?: ChartImage[],
        logType?: LogEntry['type'],
        traceId?: string,
    ): Promise<{ success: boolean; data?: T; error?: string }>;
}
⋮----
chat<T>(
        systemPrompt: string,
        userPrompt: string,
        chartImages?: ChartImage[],
        logType?: LogEntry['type'],
        traceId?: string,
): Promise<
⋮----
interface VisionNarrativeClient {
    analyzeNarrative(
        prompt: string,
        chartImages: ChartImage[],
        traceId?: string,
    ): Promise<ParsedAIResponse<AIVisualNarrative>>;
    analyzeStructured<T>(
        prompt: string,
        chartImages: ChartImage[],
        logType?: LogEntry['type'],
        traceId?: string,
    ): Promise<ParsedAIResponse<T>>;
}
⋮----
analyzeNarrative(
        prompt: string,
        chartImages: ChartImage[],
        traceId?: string,
    ): Promise<ParsedAIResponse<AIVisualNarrative>>;
analyzeStructured<T>(
        prompt: string,
        chartImages: ChartImage[],
        logType?: LogEntry['type'],
        traceId?: string,
    ): Promise<ParsedAIResponse<T>>;
⋮----
type AnalyzeByStateOptions = {
    openVisionRiskReason?: string;
};
⋮----
/** 分析结果联合类型 */
export type AnalysisResult =
    | { type: 'idle'; result: ParsedAIResponse<IdleAnalysisResponse> }
    | { type: 'pending'; result: ParsedAIResponse<PendingConfirmResponse> }
    | { type: 'open'; result: ParsedAIResponse<OpenManageResponse> };
⋮----
// ============= Analyzer 类 =============
⋮----
export class Analyzer
⋮----
// AI 客户端
⋮----
// 配置
⋮----
constructor(
        geminiApiKey: string,
        deepseekApiKey: string,
        cloudLogger?: CloudLoggerLike,
        qwenApiKey?: string,
        zaiApiKey?: string,
        provider: AnalysisProvider = 'zai',
        useAIVision: boolean = false,
        visionProvider: VisionProvider = 'zai',
)
⋮----
// 初始化视觉客户端
⋮----
// 初始化文本分析客户端
⋮----
// ============= 对外接口 =============
⋮----
isVisionRiskGuardEnabled(): boolean
⋮----
/**
     * 根据状态自动选择分析方法
     *
     * 这是主要的对外接口，Scheduler 调用此方法
     *
     * 根据 useAIVision 配置：
     * - false: 所有状态使用纯文本分析
     * - true: IDLE 状态使用视觉+文本双脑分析，其他状态使用纯文本
     */
async analyzeByState(
        state: TradingState,
        marketData: MultiTimeframeData,
        structureAnalysis: StructureAnalysis,
        charts: ChartSnapshot[] = [],
        options?: AnalyzeByStateOptions,
): Promise<AnalysisResult>
⋮----
// SEARCH, SNIPER 等状态当作 IDLE 处理
⋮----
/**
     * 狙击入场分析
     */
async analyzeSniperEntry(
        symbol: string,
        currentPrice: number,
        direction: 'LONG' | 'SHORT',
        entryZone: { type: 'FVG' | 'OB'; top: number; bottom: number },
        m5ConfirmationSignal: string,
        m15DisplacementMagnitude: number,
        structureSummary: string,
        chartImages: ChartImage[],
        recentCandles?: string,
        structureBreakType?: 'MSS' | 'BOS',
        orderType?: 'MARKET' | 'LIMIT',
        higherTfContext?: string,
        signalFamily?: 'SWEEP_SFP' | 'BAND_REVERSION' | 'BAND_REVERSION_SOFT' | 'VWAP_BOUNCE' | string,
        strategyRoute?: 'TREND' | 'HYBRID' | 'CONSOLIDATION' | string,
        rangeModeActive?: boolean,
        rangeModeReason?: string,
        traceId?: string,
): Promise<ParsedAIResponse<SniperEntryResponse>>
⋮----
/**
     * A 级信号被风控拦截后的回退分析（独立提示词）
     */
async analyzeAGradeFallbackEntry(
        symbol: string,
        currentPrice: number,
        direction: 'LONG' | 'SHORT',
        entryZone: { type: 'FVG' | 'OB'; top: number; bottom: number },
        fallbackReason: string,
        m15DisplacementMagnitude: number,
        structureSummary: string,
        chartImages: ChartImage[],
        recentCandles?: string,
        structureBreakType?: 'MSS' | 'BOS',
        higherTfContext?: string,
        premiumDiscountContext?: {
            zone: 'premium' | 'discount' | 'equilibrium';
            position: number;
            rangeLow?: number;
            rangeHigh?: number;
            equilibrium?: number;
            lookbackCandles: number;
            sourceTimeframe?: 'D1' | 'H4';
        },
        vwapContext?: {
            dailyVwap: number;
            sessionVwap: number;
            sessionAnchor: 'LONDON' | 'NEW_YORK';
            displacementTime: number;
            minBars: number;
            requiredConsecutive: number;
            maxBars: number;
            postDispBarsObserved: number;
            consecutiveSameSideCloses: number;
            vwapAccepted: boolean;
            vwapRejectReason?: string;
        },
        traceId?: string,
): Promise<ParsedAIResponse<SniperEntryResponse>>
⋮----
/**
     * 入场前视觉否决层
     * 仅在启用视觉并且有图表时生效，失败时建议 fail-open（由调用方决定）
     */
async analyzeEntryVisionVeto(params: {
        symbol: string;
        signalGrade: 'A' | 'B';
        direction: 'LONG' | 'SHORT';
        currentPrice: number;
        entryPrice: number;
        stopLoss: number;
        tp1: number;
        tp2?: number;
        tp3?: number;
        displacementMagnitude?: number;
        structureSummary: string;
        chartImages: ChartImage[];
        traceId?: string;
}): Promise<ParsedAIResponse<VisionEntryVetoResponse>>
⋮----
/**
     * OPEN 风险事件触发的视觉复核
     */
async analyzeOpenRiskReview(params: {
        symbol: string;
        direction: 'LONG' | 'SHORT';
        currentPrice: number;
        entryPrice: number;
        stopLoss: number;
        tp3: number;
        pnlR: number;
        triggerReason: string;
        structureSummary: string;
        chartImages: ChartImage[];
        traceId?: string;
}): Promise<ParsedAIResponse<VisionOpenRiskReviewResponse>>
⋮----
/**
     * 心跳分析（轻量级市场更新）
     *
     * 不发送图表，只请求 AI 更新市场观察
     */
async analyzeHeartbeat(prompt: string, traceId?: string): Promise<ParsedAIResponse<HeartbeatResponse>>
⋮----
[],  // 心跳不发送图表
⋮----
/**
     * 反向信号分析（陷阱检测）
     *
     * 分析失效信号是否为机构陷阱，评估反向交易机会
     */
async analyzeReversal(
        symbol: string,
        currentPrice: number,
        originalDirection: 'LONG' | 'SHORT',
        originalEntryZone: { type: 'FVG' | 'OB'; top: number; bottom: number },
        zoneBreakPrice: number,
        reverseDispMagnitude: number | undefined,
        structureSummary: string,
        chartImages: ChartImage[],
        traceId?: string,
): Promise<ParsedAIResponse<ReversalAnalysisResponse>>
⋮----
// ============= 内部分析方法 =============
⋮----
/**
     * 空仓分析
     *
     * 根据 useAIVision 配置选择分析模式
     */
private async doIdleAnalysis(
        state: TradingState,
        marketData: MultiTimeframeData,
        structureAnalysis: StructureAnalysis,
        chartImages: ChartImage[]
): Promise<ParsedAIResponse<IdleAnalysisResponse>>
⋮----
// 如果启用视觉分析且有图表，使用双脑模式
⋮----
// 否则使用纯文本分析
⋮----
/**
     * 空仓分析 - 纯文本模式
     */
private async doIdleAnalysisTextOnly(
        state: TradingState,
        marketData: MultiTimeframeData,
        structureAnalysis: StructureAnalysis,
        chartImages: ChartImage[],
        strategy: StrategyType
): Promise<ParsedAIResponse<IdleAnalysisResponse>>
⋮----
/**
     * 空仓分析 - 视觉+文本双脑模式
     */
private async doIdleAnalysisWithVision(
        state: TradingState,
        marketData: MultiTimeframeData,
        structureAnalysis: StructureAnalysis,
        chartImages: ChartImage[],
        strategy: StrategyType
): Promise<ParsedAIResponse<IdleAnalysisResponse>>
⋮----
// 步骤 1: 视觉叙事
⋮----
// 步骤 2: 适配叙事格式
⋮----
// 步骤 3: 构建带叙事的 prompt 并调用文本 AI
⋮----
geminiNarrative: adaptedNarrative,  // 传入视觉叙事
⋮----
/**
     * 挂单分析
     */
private async doPendingAnalysis(
        state: TradingState,
        marketData: MultiTimeframeData,
        structureAnalysis: StructureAnalysis,
        chartImages: ChartImage[]
): Promise<ParsedAIResponse<PendingConfirmResponse>>
⋮----
/**
     * 持仓管理分析
     */
private async doOpenAnalysis(
        state: TradingState,
        marketData: MultiTimeframeData,
        structureAnalysis: StructureAnalysis,
        chartImages: ChartImage[],
        openVisionRiskReason?: string,
): Promise<ParsedAIResponse<OpenManageResponse>>
⋮----
private buildOpenKeyCandleContext(
        direction: 'LONG' | 'SHORT',
        trade: NonNullable<TradingState['activeTrade']>,
        marketData: MultiTimeframeData,
        structureAnalysis: StructureAnalysis,
): string | undefined
⋮----
private buildPendingKeyCandleContext(
        direction: 'LONG' | 'SHORT',
        entryPrice: number,
        marketData: MultiTimeframeData,
        structureAnalysis: StructureAnalysis,
): string | undefined
⋮----
private collectDirectionalRiskReasons(
        tradeDirection: 'LONG' | 'SHORT',
        structureAnalysis: StructureAnalysis,
): string[]
⋮----
private getNearestUnfilledTpPrice(
        trade: NonNullable<TradingState['activeTrade']>,
        currentPrice: number,
): number | undefined
⋮----
private buildKeyCandleContextBlock(
        marketData: MultiTimeframeData,
        reasons: string[],
        h1Count: number,
        m15Count: number,
        m5Count: number,
): string
⋮----
private formatVisionNarrativeContext(
        narrative: AIVisualNarrative,
        triggerReason?: string,
): string
⋮----
private async getVisionNarrativeContext(params: {
        symbol: string;
        currentPrice: number;
        chartImages: ChartImage[];
        triggerReason?: string;
        traceId?: string;
}): Promise<string | undefined>
⋮----
// ============= AI 调用封装 =============
⋮----
private async callVisionNarrative(
        prompt: string,
        chartImages: ChartImage[],
        traceId?: string,
): Promise<ParsedAIResponse<AIVisualNarrative>>
⋮----
private async callVisionStructured<T>(
        prompt: string,
        chartImages: ChartImage[],
        logType: LogEntry['type'],
        traceId?: string,
): Promise<ParsedAIResponse<T>>
⋮----
/**
     * 统一的文本 AI 调用方法
     *
     * 封装了：
     * - 调用主分析后端
     * - 自动 fallback 到备用后端
     * - 统一的错误处理
     */
private async callTextAI<T>(
        systemPrompt: string,
        userPrompt: string,
        chartImages: ChartImage[],
        logType: LogEntry['type'],
        traceId?: string,
): Promise<ParsedAIResponse<T>>
⋮----
// 尝试主分析后端
⋮----
// 主分析失败，尝试 fallback
⋮----
private resolveStateTraceId(state: TradingState): string | undefined
⋮----
// ============= 工厂函数 =============
⋮----
/**
 * 创建分析器实例
 */
export function createAnalyzer(
    geminiApiKey: string,
    deepseekApiKey: string,
    cloudLogger?: CloudLoggerLike,
    qwenApiKey?: string,
    zaiApiKey?: string,
    provider: AnalysisProvider = 'zai',
    useAIVision: boolean = false,
    visionProvider: VisionProvider = 'zai',
): Analyzer
```

## File: src/modules/executor/tiger-adapter.ts
```typescript
import { logger } from '../../utils/index.js';
import type {
    IExecutor,
    GenericOrderParams,
    GenericOrderResult,
    GenericStopParams,
    GenericAccountInfo,
    GenericPosition,
    GenericCandle,
    GenericOpenOrder,
    GenericFill,
} from './types.js';
⋮----
export type TigerAdapterConfig = {
    baseUrl: string;
    apiKey?: string;
};
⋮----
type OrderResponse = {
    status?: string;
    order_id?: number;
};
⋮----
type PositionResponse = {
    symbol: string;
    quantity: number;
    avg_price: number;
    market_price: number;
    unrealized_pnl: number;
};
⋮----
type AccountResponse = {
    cash?: number;
    available_funds?: number;
    net_value?: number;
};
⋮----
type StockBrief = {
    symbol: string;
    close: number;
};
⋮----
type OrderHistoryItem = {
    id?: number;
    order_id?: number;
    contract?: { symbol?: string };
    action?: string;
    order_type?: string;
    limit_price?: number;
    aux_price?: number;
    status?: string;
};
⋮----
export class TigerAdapterExecutor implements IExecutor
⋮----
constructor(config: TigerAdapterConfig)
⋮----
private buildHeaders(): HeadersInit
⋮----
private async get<T>(path: string, params?: Record<string, string | number | undefined>): Promise<T>
⋮----
private async post<T>(path: string, body?: Record<string, unknown>, params?: Record<string, string | number | undefined>): Promise<T>
⋮----
private async del<T>(path: string): Promise<T>
⋮----
private toShareQuantity(size: number): number
⋮----
private normalizePriceForTick(price: number, field: 'limit_price' | 'stop_price', symbol: string): number
⋮----
async placeLimitOrder(params: GenericOrderParams): Promise<GenericOrderResult>
⋮----
async placeStopOrder(params: GenericStopParams): Promise<GenericOrderResult>
⋮----
async cancelOrder(symbol: string, orderId: string): Promise<GenericOrderResult>
⋮----
async closePosition(symbol: string): Promise<GenericOrderResult>
⋮----
async getAccountInfo(): Promise<GenericAccountInfo>
⋮----
private async getPositionsInternal(): Promise<GenericPosition[]>
⋮----
async getPosition(symbol: string): Promise<GenericPosition | undefined>
⋮----
async getCandles(symbol: string, interval: string, startTime?: number, endTime?: number): Promise<GenericCandle[]>
⋮----
async getCurrentPrice(symbol: string): Promise<number>
⋮----
async getOpenOrders(symbol?: string): Promise<GenericOpenOrder[]>
⋮----
// Tiger API does not expose reduceOnly consistently.
// For our adapter-generated stop orders, treat trigger orders as protective.
⋮----
async getUserFills(symbol?: string): Promise<GenericFill[]>
```

## File: src/modules/executor/types.ts
```typescript
export type PositionDirection = 'LONG' | 'SHORT';
⋮----
export interface GenericOrderParams {
    symbol: string;
    direction: PositionDirection;
    price: number;
    size: number;
    reduceOnly?: boolean;
}
⋮----
export interface GenericStopParams {
    symbol: string;
    direction: PositionDirection;
    stopPrice: number;
    size: number;
    reduceOnly?: boolean;
    bracketGroupId?: string;
}
⋮----
export interface GenericOrderResult {
    success: boolean;
    orderId?: string;
    error?: string;
}
⋮----
export interface GenericPosition {
    symbol: string;
    size: number;
    entryPrice: number;
    markPrice?: number;
    unrealizedPnl?: number;
    liquidationPrice?: number;
    returnOnEquity?: number;
}
⋮----
export interface GenericAccountInfo {
    balance: number;
    positions: GenericPosition[];
}
⋮----
export interface GenericCandle {
    timestamp: number;
    datetime: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    atr?: number;
}
⋮----
export interface IExecutor {
    placeLimitOrder(params: GenericOrderParams): Promise<GenericOrderResult>;
    placeStopOrder(params: GenericStopParams): Promise<GenericOrderResult>;
    cancelOrder(symbol: string, orderId: string): Promise<GenericOrderResult>;
    closePosition(symbol: string): Promise<GenericOrderResult>;
    getAccountInfo(): Promise<GenericAccountInfo>;
    getPosition(symbol: string): Promise<GenericPosition | undefined>;
    getCandles(symbol: string, interval: string, startTime?: number, endTime?: number): Promise<GenericCandle[]>;
    getCurrentPrice(symbol: string): Promise<number>;
    getOpenOrders(symbol?: string): Promise<GenericOpenOrder[]>;
    getUserFills(): Promise<GenericFill[]>;
    /** 可选: 刷新交易所元数据 (symbol 列表, 精度等) */
    getMeta?(): Promise<void>;
}
⋮----
placeLimitOrder(params: GenericOrderParams): Promise<GenericOrderResult>;
placeStopOrder(params: GenericStopParams): Promise<GenericOrderResult>;
cancelOrder(symbol: string, orderId: string): Promise<GenericOrderResult>;
closePosition(symbol: string): Promise<GenericOrderResult>;
getAccountInfo(): Promise<GenericAccountInfo>;
getPosition(symbol: string): Promise<GenericPosition | undefined>;
getCandles(symbol: string, interval: string, startTime?: number, endTime?: number): Promise<GenericCandle[]>;
getCurrentPrice(symbol: string): Promise<number>;
getOpenOrders(symbol?: string): Promise<GenericOpenOrder[]>;
getUserFills(): Promise<GenericFill[]>;
/** 可选: 刷新交易所元数据 (symbol 列表, 精度等) */
getMeta?(): Promise<void>;
⋮----
export interface GenericOpenOrder {
    orderId: string;
    symbol: string;
    direction: PositionDirection;
    price?: number;
    triggerPrice?: number;
    reduceOnly?: boolean;
    isTrigger?: boolean;
    raw?: Record<string, unknown>;
}
⋮----
export interface GenericFill {
    orderId?: string;
    symbol: string;
    side: 'BUY' | 'SELL';
    price: number;
    size: number;
    fee?: number;
    pnl?: number;
    time: number;
    raw?: Record<string, unknown>;
}
```

## File: src/modules/paper-trading/matching-engine.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { MatchingEngine } from './matching-engine.js';
import type { KvStore } from '../../types/runtime.js';
import { PAPER_KEYS, type PaperAccount, type PaperOrder } from './types.js';
⋮----
function createMemoryKv(seed: Record<string, string> =
⋮----
async get(key: string, type?: 'json')
async put(key: string, value: string)
async delete(key: string)
async list(prefix?: string)
```

## File: src/modules/position-manager/candle-utils.ts
```typescript
/**
 * Pure utility helpers for candle-based calculations.
 * Extracted from PositionManager to reduce file size.
 */
⋮----
import type { CandleWithIndicators } from '../../types/index.js';
⋮----
/**
 * Estimate ATR from recent candles.
 * Falls back to high-low range average, then to a fixed percentage of price.
 */
export function estimateAtr(candles: CandleWithIndicators[], currentPrice: number): number
⋮----
/**
 * Find the most recent swing low in a candle array using a fixed lookback pivot.
 */
export function findLatestSwingLow(candles: CandleWithIndicators[]): number | undefined
⋮----
/**
 * Find the most recent swing high in a candle array using a fixed lookback pivot.
 */
export function findLatestSwingHigh(candles: CandleWithIndicators[]): number | undefined
⋮----
/**
 * Check whether a signal family belongs to the "range" category
 * (strategies that use different trailing stop policies).
 */
export function isRangeSignalFamily(signalFamily?: string): boolean
```

## File: src/modules/position-manager/stop-computation.ts
```typescript
/**
 * Pure stop-price computation functions.
 * These compute candidate stop prices without side effects.
 * Extracted from PositionManager to reduce file size.
 */
⋮----
import type { CandleWithIndicators, MultiTimeframeData, TradingState } from '../../types/index.js';
import type { FVG, OrderBlock, StructureAnalysis } from '../../modules/structure-detector/types.js';
import { estimateAtr, findLatestSwingLow, findLatestSwingHigh } from './candle-utils.js';
⋮----
// When false: pre-TP1 structure trailing can only move SL toward entry (not beyond it),
// preventing locking in profit before TP1 is filled.
⋮----
type ActiveTrade = NonNullable<TradingState['activeTrade']>;
⋮----
/**
 * Compute a trailing stop based purely on H1 swing structure.
 * Used for post-TP2 runner protection in STANDARD_ICT TREND routes.
 */
export function computeH1StructureTrailingStop(
    trade: ActiveTrade,
    marketData: MultiTimeframeData,
    currentPrice: number,
    options?: { lockBreakEven?: boolean },
): number | undefined
⋮----
/**
 * Compute a stop using a priority chain: Order Block > Swing > FVG.
 * Used for HYBRID strategy pre-TP1 STRUCTURE mode moves.
 */
export function computeHybridStructurePriorityStop(
    trade: ActiveTrade,
    marketData: MultiTimeframeData,
    structureAnalysis: StructureAnalysis,
    currentPrice: number,
): number | undefined
⋮----
/**
 * Compute a stop behind the nearest same-direction Order Block.
 */
export function computeOrderBlockProtectionStop(
    trade: ActiveTrade,
    structureAnalysis: StructureAnalysis,
    buffer: number,
): number | undefined
⋮----
/**
 * Compute a stop behind the nearest swing point (M15 + H1).
 */
export function computeSwingProtectionStop(
    trade: ActiveTrade,
    marketData: MultiTimeframeData,
    buffer: number,
): number | undefined
⋮----
/**
 * Compute a stop behind the nearest unfilled, non-inverted FVG in the trade direction.
 */
export function computeFvgProtectionStop(
    trade: ActiveTrade,
    structureAnalysis: StructureAnalysis,
    buffer: number,
): number | undefined
⋮----
/**
 * Check whether M15 or H1 has confirmed a directional structure break
 * (used to allow early structure trailing before TP1).
 */
export function hasEarlyStructureConfirmation(
    state: TradingState,
    marketData: MultiTimeframeData,
    currentR: number,
): boolean
⋮----
/**
 * Detect whether the latest close broke above the swing high (LONG)
 * or below the swing low (SHORT) on a given timeframe.
 */
export function hasDirectionalStructureBreak(
    candles: CandleWithIndicators[],
    direction: 'LONG' | 'SHORT',
): boolean
⋮----
/**
 * Compute a structure-based trailing stop using M15 + H1 swing points.
 * Respects break-even lock and pre-TP1 profit-lock policy.
 */
export function computeStructureTrailingStop(
    state: TradingState,
    marketData: MultiTimeframeData,
    currentPrice: number,
    options?: { lockBreakEven?: boolean },
): number | undefined
```

## File: src/modules/position-manager/stop-recovery-guard.ts
```typescript
/**
 * Stop-loss recovery guard — prevents repeated recovery attempts
 * for the same trade within a short time window.
 * Extracted from PositionManager to reduce file size.
 */
⋮----
import type { TradingState } from '../../types/index.js';
⋮----
type ActiveTrade = NonNullable<TradingState['activeTrade']>;
⋮----
export interface StopRecoveryEntry {
    attemptedAt: number;
    stopPrice: number;
    size: number;
    orderId?: string;
}
⋮----
export interface SkipRecoveryResult {
    skip: boolean;
    last?: StopRecoveryEntry;
}
⋮----
/**
 * Manages stop-loss recovery deduplication state per trade.
 */
export class StopRecoveryGuard
⋮----
buildKey(trade: ActiveTrade): string
⋮----
shouldSkipRepeated(
        trade: ActiveTrade,
        remainingSize: number,
): SkipRecoveryResult
⋮----
record(trade: ActiveTrade, entry: StopRecoveryEntry): void
⋮----
clear(trade: ActiveTrade): void
```

## File: src/modules/risk-manager/index.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { RiskManager } from './index.js';
import { createInitialState, type TradingState } from '../../types/index.js';
⋮----
function makeOpenState(params: {
    symbol: string;
    direction: 'LONG' | 'SHORT';
    entryPrice: number;
    slPrice: number;
    size: number;
}): TradingState
⋮----
function makeStraddleState(params: {
    symbol: string;
    longTriggerPrice: number;
    shortTriggerPrice: number;
    size: number;
}): TradingState
⋮----
BTC: makeOpenState({ symbol: 'BTC', direction: 'LONG', entryPrice: 100, slPrice: 90, size: 1 }), // 1.0%
TQQQ: makeOpenState({ symbol: 'TQQQ', direction: 'LONG', entryPrice: 100, slPrice: 90, size: 2 }), // 2.0%
⋮----
1, // base maxRiskPercent
⋮----
BTC: makeOpenState({ symbol: 'BTC', direction: 'LONG', entryPrice: 100, slPrice: 95, size: 3 }), // 1.5%
⋮----
TQQQ: makeOpenState({ symbol: 'TQQQ', direction: 'LONG', entryPrice: 100, slPrice: 90, size: 2 }), // separate scope
⋮----
BTC: makeOpenState({ symbol: 'BTC', direction: 'LONG', entryPrice: 100, slPrice: 90, size: 1 }), // 1.0%
TQQQ: makeOpenState({ symbol: 'TQQQ', direction: 'LONG', entryPrice: 100, slPrice: 90, size: 2 }), // 2.0%
```

## File: src/modules/risk-manager/index.ts
```typescript
/**
 * 风险管理器
 * 负责全局风险预算控制、组合风险计算
 */
⋮----
import { logger } from "../../utils/index.js";
import type { TradingState } from "../../types/index.js";
import { type RiskBudgetConfig } from "../../config/config-manager.js";
import type { StateStore } from "../state-store/index.js";
⋮----
type RiskScopeResolver = (symbol: string) => string;
⋮----
interface RiskExposure {
  direction: 'LONG' | 'SHORT';
  percent: number;
  slotKey: string;
  countsTowardTotal: boolean;
}
⋮----
export class RiskManager
⋮----
// Turtle Soup 风险控制参数
⋮----
constructor(
    maxRiskPercent: number,
    symbols: string[],
    stateStore: StateStore,
    maxConcurrentTrades: number = 3,
    config: Partial<RiskBudgetConfig> = {},
    riskScopeResolver?: RiskScopeResolver,
)
⋮----
private resolveRiskScope(symbol: string): string
⋮----
/**
   * 检查是否允许新增风险敞口（全局风险预算检查）
   */
async checkGlobalRiskAllowance(
    direction: 'LONG' | 'SHORT',
    accountBalance: number,
    additionalPercent: number,
    currentSymbol: string,
    currentState?: TradingState
): Promise<boolean>
⋮----
/**
   * 计算当前组合的风险敞口
   */
async computePortfolioRisk(
    accountBalance: number,
    currentSymbol: string,
    currentState?: TradingState
): Promise<
⋮----
/**
   * 获取单个状态的风险敞口
   */
private getStateRiskExposures(
    state: TradingState,
    accountBalance: number
): RiskExposure[]
⋮----
const pushExposure = (
      direction: 'LONG' | 'SHORT',
      entryPrice: number,
      slPrice: number,
      size: number,
      slotKey: string,
      countsTowardTotal: boolean = true,
) =>
⋮----
/**
   * 计算风险百分比
   */
calculateRiskPercent(entryPrice: number, stopLoss: number, size: number, balance: number): number
⋮----
/**
   * 应用 Turtle Soup 止损限制（防止止损距离过小）
   */
applyTurtleStopClamp(
    orderParams: {
      direction: 'LONG' | 'SHORT';
      entryPrice: number;
      stopLoss: number;
      takeProfitLevels: { tp1: number; tp2: number; tp3: number };
      tpDistribution?: { tp1: number; tp2: number; tp3: number };
      positionSize: number;
      entryLogic: string;
    },
    accountBalance: number,
    maxRiskPercent: number
):
⋮----
/**
   * 获取最小订单价值（Hyperliquid 限制）
   */
getMinOrderNotionalUsd(): number
⋮----
/**
   * 获取单笔订单名义价值上限（可选）
   */
getMaxOrderNotionalUsd(): number | undefined
⋮----
/**
   * 获取基于活跃持仓数量的入场风险乘数
   * - 0个持仓: 1.0 (全额风险)
   * - 1个持仓: 0.7 (70%风险)
   * - 2个持仓: 0.5 (50%风险)
   * - 3个或更多: 0 (不允许新开仓)
   */
getEntryRiskMultiplier(activeCount: number): number
⋮----
/**
   * 计算本次新开仓允许的动态 maxRiskPercent（百分比）
   * - 单笔上限：maxRiskPercent
   * - 全局上限：maxPortfolioRiskPercent
   * - 同方向上限：maxDirectionalRiskPercent
   * - 同时持仓数：maxConcurrentTrades
   */
async getDynamicEntryRiskCapPercent(
    direction: 'LONG' | 'SHORT',
    accountBalance: number,
    maxRiskPercent: number,
    currentSymbol: string,
    currentState?: TradingState,
): Promise<number>
⋮----
// 达到最大并发则不允许新仓
```

## File: src/modules/state-store/index.test.ts
```typescript
import { describe, expect, it, vi } from 'vitest';
import { StateStore } from './index.js';
import type { TradeLogEntry } from '../../types/index.js';
⋮----
function createKv(initial: Record<string, string> =
```

## File: src/modules/structure-detector/consolidation.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { CandleWithIndicators } from '../../types/index.js';
import type { LiquidityAnalysis, LiquidityLevel, Displacement, Direction } from './types.js';
import {
    detectConsolidation,
    evaluateConsolidationTradeability,
    getConsolidationAdjustedThreshold,
    type ConsolidationResult,
} from './consolidation.js';
⋮----
function cwi(
    datetime: number,
    open: number,
    high: number,
    low: number,
    close: number,
    atr: number,
    volume: number = 1,
): CandleWithIndicators
⋮----
function makeRangeCandles(params: {
    count: number;
    base: number;
    wiggle: number;
    start: number;
    intervalMs?: number;
    atr: number;
}): CandleWithIndicators[]
⋮----
function makeLiquidityLevel(type: LiquidityLevel['type'], price: number): LiquidityLevel
⋮----
function makeLiquidityWithSweeps(referenceTime: number): LiquidityAnalysis
⋮----
// -------- NEW: No rangeInfo fallback --------
⋮----
// rangeInfo intentionally omitted
⋮----
// rangeInfo intentionally omitted
⋮----
// -------- NEW: Convergence pattern in evaluateConsolidationTradeability --------
⋮----
5, // rangeSize=8, ATR=5, ratio=1.6 < 3.0
⋮----
112,  // above rangeHigh
3,    // rangeSize=10, ATR=3, ratio=3.33 >= 3.0
⋮----
// -------- NEW: Large range (>=4x ATR) edge reversal --------
⋮----
102, // lower 25% of 100-120 range
5,   // rangeSize=20, ATR=5, ratio=4.0
⋮----
expect(result.threshold).toBe(75); // MSS threshold
⋮----
118, // upper 25% of 100-120 range (pos=(118-100)/20=0.9 >= 0.75)
⋮----
expect(result.threshold).toBe(70); // BOS threshold
⋮----
102, // lower edge
⋮----
102, // lower edge
⋮----
'bearish', // bearish at lower edge => mismatch
⋮----
110, // middle of 100-120 range
⋮----
// -------- NEW: Bearish breakout confirmed --------
⋮----
98, // below rangeLow=100
3,  // rangeSize=10, ATR=3, ratio=3.33
⋮----
// H1 candles closing below rangeLow-buffer
⋮----
// ============ NEW describe blocks ============
⋮----
const lookbackBars = 32; // 8h * 4
⋮----
// First half: wider range (high=110, low=90)
⋮----
// Second half: narrower range (high=104, low=96) - compression ratio < 0.7
⋮----
// Need at least 30 candles for ATR contraction
⋮----
// Triangle requires both highs lower and lows higher
⋮----
// Uniform range candles - no compression
⋮----
// With < 30 candles, ATR contraction cannot be detected
⋮----
// detectATRContraction uses candles.slice(-30, -10) for historical ATR.
// With 40 candles total, slice(-30,-10) = candles[10:30].
// We want those to have high ATR, and currentATR to be < 70% of that.
⋮----
// candles[10..29] (the historical window) get high ATR
⋮----
atr: 5, // 50% of historical 10 → contracted (ratio < 0.7)
⋮----
// Create candles where historical ones have 0 ATR
⋮----
i < 20 ? 0 : 5, // historical ATR=0, recent ATR=5
⋮----
// When all historical ATRs are 0, they get filtered out, ratio=1.0
⋮----
// no liquidity provided
⋮----
// Only buyside sweeps, no sellside
⋮----
const lookbackMs = 8 * 60 * 60 * 1000; // 8 hours
⋮----
sweepTime: referenceTime - lookbackMs - 60 * 60 * 1000, // 9h ago, outside window
⋮----
sweepTime: referenceTime - lookbackMs - 60 * 60 * 1000, // 9h ago, outside window
⋮----
// M15: wider range (won't trigger narrow)
⋮----
wiggle: 3, // wider range
⋮----
// H1: narrow range (should trigger narrow)
⋮----
wiggle: 0.3, // very narrow
⋮----
// H1 narrow should still contribute even if M15 didn't fire
⋮----
// Generate mean-reverting-like closes (alternating pattern)
⋮----
// Should have hurst result
⋮----
// H1 candles with enough data for Hurst
⋮----
// Create candles that result in stochastic near 50 with low bandwidth
// All candles close near the middle of a stable range
⋮----
// Tight range around 100 with very slight variation
⋮----
// The stochastic should detect compression with candles closing near the middle
⋮----
// Wild swings that produce wide stochastic bandwidth
⋮----
// Alternate between closing at high and low
⋮----
// Should not crash and should produce a result
⋮----
// We need exactly 50 confidence. ATR contraction (20) + narrow range M15 (25) + some small amount = ~45-50
// Or just whipsaw (15) + narrow range (25) + something = exactly 50 is hard.
// Let's aim for a scenario that yields >=50 and test boundary.
⋮----
// ATR contraction + narrow range = 20 + 25 = 45, not quite 50
// Without whipsaw but with stochastic compression might push over
⋮----
atr: 5, // 50% of 10 → contracted (< 0.7)
⋮----
// With atrContraction(20) + narrowRange(25) = 45 minimum
// If confidence is >= 50, it's consolidating
⋮----
// Create scenario where all indicators fire
// ATR contraction (20) + narrow M15 (25) + whipsaw (15) + stochastic (15) + convergence (30) = 105
// First half: wider range for convergence
⋮----
// Second half: much narrower for convergence compression
⋮----
// Padding for ATR history
⋮----
// Provide enough h1 closes for squeeze detection
⋮----
// no h1Closes, no h1Candles
⋮----
90, // already above 85
⋮----
undefined, // no H1 candles
⋮----
// Without H1 candles, breakout cannot be confirmed
⋮----
[cwi(Date.UTC(2026, 1, 17, 8), 111, 113, 110, 112, 3)], // only 1 H1 candle
⋮----
[], // empty H1 candles
⋮----
// bullish displacement but bearish signal → isBreakoutConfirmed returns false (line 670)
⋮----
98, // below rangeLow → would need bearish displacement, but we provide bullish
⋮----
'bearish', // bearish signal but bullish displacement → mismatch
```

## File: src/modules/structure-detector/displacement.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { Candle } from '../../types/index.js';
import type { FVG, Direction } from './types.js';
import type { StrategyProfile } from '../../config/strategy-profiles.js';
import {
    checkFVGFilled,
    determineFillType,
    getUnfilledFVGs,
    isValidEntryFVG,
    detectDisplacement,
    detectFVGs,
    detectIFVGs,
    getRelevantIFVGs,
    detectVolumeImbalance,
    enrichDisplacementWithVolume,
} from './displacement.js';
⋮----
function c(datetime: number, open: number, high: number, low: number, close: number, volume = 1): Candle
⋮----
/** Helper: create a StrategyProfile with given displacement thresholds */
function makeProfile(minBodyAtr: number, fallbackAtr: number, strongThreshold = 1.5): StrategyProfile
⋮----
/**
 * Helper: build an array of candles suitable for detectDisplacement.
 * Needs at least LOOKBACK_CANDLES(5) + 2 = 7 candles.
 * Pads with small neutral candles, then places a displacement candle near the end.
 */
function buildDisplacementCandles(
    direction: 'bullish' | 'bearish',
    atr: number,
    bodyMultiple: number,
    opts?: {
        withFVG?: boolean;
        extraBefore?: Candle[];
        consecutiveBefore?: number; // how many same-direction candles before the big one
    },
):
⋮----
consecutiveBefore?: number; // how many same-direction candles before the big one
⋮----
const interval = 60_000; // 1min intervals
⋮----
// Padding candles (small, neutral)
⋮----
// Optional extra before candles
⋮----
// Optional consecutive same-direction candles before displacement
⋮----
const body = atr * 0.9; // >= 0.8 ATR threshold for consecutive count
⋮----
// The displacement candle
⋮----
// If FVG is needed, add a candle with a gap (next.low > prev.high)
⋮----
const gapBottom = high + atr * 0.15; // gap above displacement high
⋮----
// Add a candle that overlaps (no FVG)
⋮----
// ============================================================
// Existing tests (unchanged)
// ============================================================
⋮----
c(2_000, 99, 100, 98.8, 99.2), // high == midpoint
⋮----
c(2_000, 101.2, 101.4, 100, 101.1), // low == midpoint
⋮----
c(2_000, 100, 100.2, 99.6, 99.8), // bodyTop == midpoint
⋮----
c(2_000, 99.2, 100, 99, 99.8), // wick touches tapped.bottom (100)
c(2_100, 118, 119, 117.5, 118.4), // untouched FVG not touched
⋮----
c(1_000, 98.5, 99.0, 98.2, 98.7), // 左腿/中间结构
c(2_000, 98.7, 99.0, 98.4, 98.8), // 右腿确认K，high==bottom
c(3_000, 98.6, 98.9, 98.3, 98.7), // 确认后未触碰
⋮----
c(2_000, 98.7, 99.0, 98.4, 98.8), // 确认K
c(3_000, 100.0, 100.1, 99.5, 99.9), // 确认后实体触及中线
⋮----
// ============================================================
// detectDisplacement
// ============================================================
⋮----
// Need 7 candles minimum (LOOKBACK_CANDLES=5 + 2)
⋮----
candles.push(c(i * 1000, 100, 100.5, 99.5, 100.1)); // body=0.1, far below threshold
⋮----
// All candles have range=0 (open=high=low=close)
⋮----
// Hand-craft candles: big-body bullish candle, no FVG gaps anywhere
// All candles have overlapping ranges so no FVG forms
⋮----
// 6 tight padding candles (all in 99-101 range)
⋮----
// Displacement candle: body=13 (1.3x ATR), range=14 (body/range=0.93 > 0.6)
⋮----
// Trailing candle that overlaps with displacement (no gap = no FVG)
// Ensure overlap with candle[5] too: candle[5].high=101, candle[7].low must be <= 101+minGap
⋮----
// Body is above minBodyAtr(0.9) but below fallbackAtr(1.2), no FVG
⋮----
// Displacement candle: body=10 (1.0x ATR), range=11 (body/range=0.91)
⋮----
// Trailing candle overlaps completely (no FVG)
⋮----
// No FVG, body(10) < fallbackAtr(12), so should be null
⋮----
// Build candles with a bearish candle before the bullish displacement
⋮----
// Insert a bearish candle right before the displacement candle
const dispIdx = candles.length - 2; // displacement is second to last
candles[dispIdx - 1] = c(candles[dispIdx - 1].datetime, 101, 101.5, 99, 99.5); // bearish
⋮----
expect(result!.candleCount).toBe(1); // no consecutive, stopped at bearish
⋮----
// Call without profile - uses getDefaultStrategyProfile()
⋮----
// Build candles with two potential displacements of different strengths
⋮----
// Padding
⋮----
// Weaker bullish displacement (body=1.0 ATR with FVG)
⋮----
candles.push(c(5 * t, 100, 100 + weakBody + 0.1, 99.9, 100 + weakBody)); // bullish
// Create FVG: next candle gaps up
⋮----
100 + weakBody + atr * 0.2, 100 + weakBody + atr * 0.4)); // gap above prev high
⋮----
// Stronger bearish displacement (body=1.5 ATR with FVG)
⋮----
candles.push(c(7 * t, 100, 100.1, 100 - strongBody - 0.1, 100 - strongBody)); // bearish
⋮----
100 - strongBody - atr * 0.5, 100 - strongBody - atr * 0.4)); // gap below
⋮----
// Should pick the stronger displacement
⋮----
// Padding
⋮----
// Weaker bullish displacement with FVG
⋮----
// Stronger bearish displacement with FVG
⋮----
// Hint for bullish but only bearish exists
⋮----
expect(result!.direction).toBe('bearish'); // fallback to strongest overall
⋮----
// Padding
⋮----
// Earlier bullish displacement (stronger) with FVG
⋮----
// Later bullish displacement (weaker but near anchor) with FVG
⋮----
const anchorTime = 7 * t; // near the weaker displacement
⋮----
// Should pick the one near anchor time
⋮----
// Only one bullish displacement
⋮----
// Anchor time far from any displacement
⋮----
// Falls back to strongest aligned (the only one)
⋮----
// Two bullish displacements equidistant from anchor, pick the stronger one
⋮----
// Weaker bullish displacement at 5*t with FVG
⋮----
// Stronger bullish displacement at 7*t with FVG
⋮----
// Anchor at 6*t, equidistant from 5*t (gap=1) and 7*t (gap=1)
⋮----
// Both equidistant, should pick stronger (at 7*t)
⋮----
// Anchor within 2 candles of displacement (default gap)
const anchorTime = 5 * t + t; // 1 candle away
⋮----
// no maxAnchorGapCandles -> defaults to 2
⋮----
// Tight padding candles
⋮----
// Candle with body=1.3 ATR (passes fallback threshold) but body/range=0.43 < 0.6
// body=13, range=30, body/range=0.43
⋮----
const close = 113; // body=13
const high = 120;  // big upper wick
const low = 90;    // big lower wick, range=30
⋮----
// Overlapping trailing candle (no FVG anywhere)
// Must overlap with candle[5] (high=101) and candle[6] so no FVG at index 6 or 7
⋮----
// isBigBody=false (body/range < 0.6), no FVG -> rejected
⋮----
// ============================================================
// detectFVGs
// ============================================================
⋮----
// prev.high < next.low
⋮----
c(1_000, 100, 102, 99, 101),   // prev: high=102
c(2_000, 103, 105, 102.5, 104), // current (middle candle)
c(3_000, 106, 108, 104, 107),   // next: low=104, gap = 104-102 = 2 > minGap(1)
⋮----
expect(fvgs[0].bottom).toBe(102);  // prev.high
expect(fvgs[0].top).toBe(104);     // next.low
⋮----
expect(fvgs[0].time).toBe(2_000);        // middle candle time
expect(fvgs[0].confirmedAt).toBe(3_000);  // next candle time
⋮----
// prev.low > next.high
⋮----
c(1_000, 105, 108, 104, 106),   // prev: low=104
c(2_000, 103, 103.5, 101, 101.5), // current
c(3_000, 100, 102, 99, 101),     // next: high=102, gap = 104-102 = 2 > minGap(1)
⋮----
expect(fvgs[0].top).toBe(104);    // prev.low
expect(fvgs[0].bottom).toBe(102); // next.high
⋮----
// gap = 0.5, minGap = 10*0.1 = 1.0 -> too small
⋮----
c(3_000, 101.5, 103, 101.5, 102), // next.low=101.5, prev.high=101, gap=0.5 < 1.0
⋮----
c(1_000, 100, 102, 99, 101),   // prev for first FVG
c(2_000, 103, 106, 103, 105),   // current
c(3_000, 107, 110, 105, 108),   // next for first FVG: gap=105-102=3
// Also: prev for second FVG: high=110
c(4_000, 112, 115, 112, 114),   // current for second FVG
c(5_000, 116, 118, 113, 117),   // next for second: gap=113-110=3
⋮----
// Create consistent gap-up pattern
⋮----
const fvgsLimited = detectFVGs(candles, 1, 2); // small ATR, limit=2
⋮----
// Limited should have fewer or equal FVGs
⋮----
// ============================================================
// determineFillType — comprehensive scenarios
// ============================================================
⋮----
c(2_000, 106, 108, 105.5, 107), // stays above FVG top
⋮----
c(2_000, 106, 107, 104, 105.5), // low=104 (inside FVG), but bodyBottom=105.5 >= top(105)
⋮----
c(2_000, 104, 106, 101, 102.5), // bodyBottom=102.5 == midpoint
⋮----
c(2_000, 103, 104, 98, 99), // bodyBottom=99 < bottom(100)
⋮----
c(2_000, 103, 104, 97, 98), // full fill
c(3_000, 106, 108, 105.5, 107), // this candle won't matter
⋮----
c(2_000, 106, 107, 104, 105.5), // tap: wick enters, body above top
c(3_000, 103, 106, 101, 102),    // partial: bodyBottom=102 <= midpoint(102.5)
⋮----
c(2_000, 103, 104.5, 102, 103.5), // stays below FVG bottom
⋮----
c(2_000, 104, 106, 103, 104.5), // high=106 >= bottom(105), bodyTop=104.5 <= bottom(105)
⋮----
c(2_000, 106, 109, 105, 107.5), // bodyTop=107.5 >= midpoint(107.5)
⋮----
c(2_000, 109, 112, 108, 111), // bodyTop=111 > top(110)
⋮----
c(2_000, 104, 106, 103, 104.5), // tap
c(3_000, 106, 109, 105, 108),    // partial: bodyTop=108 >= midpoint(107.5)
⋮----
c(1_000, 95, 96, 94, 95.5),   // before FVG time, would be 'full' if counted
c(2_000, 95, 96, 94, 95.5),   // at FVG time, still skipped
c(3_000, 106, 108, 106, 107),  // after FVG time, above FVG -> none
⋮----
// ============================================================
// isValidEntryFVG — all combinations
// ============================================================
⋮----
// ============================================================
// checkFVGFilled — additional scenarios
// ============================================================
⋮----
c(2_000, 104, 106, 103, 105), // low=103 > midpoint=102.5
⋮----
c(2_000, 103, 105, 102, 104), // high=105 == midpoint
⋮----
// Candle at time 2_000 (after fvg.time but before confirmedAt)
⋮----
c(2_000, 103, 106, 102, 104), // high=106 > midpoint=105, but before confirmedAt
c(4_000, 103, 104, 102, 103),  // after confirmedAt, but high=104 < midpoint=105
⋮----
// ============================================================
// getUnfilledFVGs — direction filtering and mixed scenarios
// ============================================================
⋮----
// No candles that would fill either
⋮----
const candles = [c(2_000, 150, 155, 145, 152)]; // nowhere near either FVG
⋮----
// Candle wick enters FVG but body below bottom -> tap
const candles = [c(2_000, 104, 106, 103, 104.5)]; // high=106 >= bottom(105), bodyTop=104.5 <= bottom
⋮----
// ============================================================
// detectIFVGs
// ============================================================
⋮----
// Create a bullish FVG (prev.high < next.low) then violate it (close below bottom)
⋮----
c(1_000, 100, 102, 99, 101),     // prev: high=102
c(2_000, 103, 106, 103, 105),     // current (middle)
c(3_000, 107, 110, 105, 108),     // next: low=105, FVG gap=105-102=3 (bullish)
c(4_000, 104, 105, 100, 101),     // close=101 < bottom=102 -> violated
c(5_000, 100, 103, 99, 102),      // after violation -> IFVG exists
⋮----
expect(ifvg!.bottom).toBe(102); // prev.high
expect(ifvg!.top).toBe(105);    // next.low
⋮----
// Create a bearish FVG (prev.low > next.high) then violate it (close above top)
⋮----
c(1_000, 108, 110, 105, 106),   // prev: low=105
c(2_000, 104, 104.5, 101, 102),  // current (middle)
c(3_000, 101, 103, 99, 100),     // next: high=103, FVG gap=105-103=2 (bearish)
c(4_000, 104, 106, 103, 106),    // close=106 > top=105 -> violated
c(5_000, 105, 107, 104, 106),    // after violation -> IFVG exists
⋮----
// Bullish FVG that is never violated
⋮----
c(1_000, 100, 102, 99, 101),     // prev: high=102
c(2_000, 103, 106, 103, 105),     // current
c(3_000, 107, 110, 105, 108),     // next: low=105, bullish FVG
c(4_000, 106, 109, 105, 108),     // close=108 > bottom=102 -> not violated
c(5_000, 107, 110, 106, 109),     // still above
⋮----
// Create many candles with a FVG early on that gets violated
⋮----
// Early bullish FVG
candles.push(c(1_000, 100, 102, 99, 101));   // prev
candles.push(c(2_000, 103, 106, 103, 105));   // current
candles.push(c(3_000, 107, 110, 105, 108));   // next
candles.push(c(4_000, 104, 105, 100, 101));   // violated
candles.push(c(5_000, 100, 103, 99, 102));    // IFVG
⋮----
// Pad with more candles
⋮----
// With limit=1, only checks very recent FVGs (near end)
⋮----
// With limit=20, checks wider range
⋮----
// ============================================================
// getRelevantIFVGs
// ============================================================
⋮----
type: 'bullish', // originally bullish FVG, now inverted -> acts as resistance (sell)
⋮----
type: 'bearish', // originally bearish FVG, now inverted -> acts as support (buy)
⋮----
// price=120, bullish IFVG midpoint=107.5 is below price -> not relevant for bearish (need above)
⋮----
// For bullish, need bearish IFVG below price
⋮----
// Both above price=100, both bullish type -> relevant for bearish
⋮----
// ============================================================
// detectVolumeImbalance
// ============================================================
⋮----
c(1_000, 100, 103, 99, 102),    // bodyTop = 102
c(2_000, 104, 106, 103, 105),    // bodyBottom = 104 > bodyTop(102) -> bullish VI
⋮----
expect(vis[0].bottom).toBe(102);  // currentBodyTop
expect(vis[0].top).toBe(104);     // nextBodyBottom
⋮----
c(1_000, 105, 106, 103, 104),   // bodyBottom = 104
c(2_000, 102, 103, 100, 101),    // bodyTop = 102 < bodyBottom(104) -> bearish VI
⋮----
expect(vis[0].bottom).toBe(102);  // nextBodyTop
expect(vis[0].top).toBe(104);     // currentBodyBottom
⋮----
c(2_000, 101, 104, 100, 103),    // bodies overlap: next bodyBottom(101) < current bodyTop(102)
⋮----
// Wicks overlap but bodies don't
⋮----
c(1_000, 100, 106, 99, 102),    // bodyTop=102, wick high=106
c(2_000, 104, 108, 101, 105),    // bodyBottom=104, wick low=101 (overlaps)
⋮----
// bodyBottom(104) > bodyTop(102) -> bullish VI
⋮----
c(1_000, 100, 103, 99, 102),    // bodyTop=102
c(2_000, 104, 106, 103, 105),    // bodyBottom=104 > 102 -> bullish VI; bodyTop=105
c(3_000, 107, 109, 106, 108),    // bodyBottom=107 > 105 -> another bullish VI
⋮----
// Create many candles with body gaps
⋮----
// Both candles are bearish (close < open)
⋮----
c(1_000, 108, 110, 104, 105),   // open=108, close=105 -> bodyTop=108, bodyBottom=105
c(2_000, 103, 104, 100, 101),    // open=103, close=101 -> bodyTop=103, bodyBottom=101
⋮----
// nextBodyTop(103) < currentBodyBottom(105) -> bearish VI
⋮----
expect(vis[0].top).toBe(105);  // currentBodyBottom
expect(vis[0].bottom).toBe(103); // nextBodyTop
⋮----
// ============================================================
// enrichDisplacementWithVolume
// ============================================================
⋮----
expect(result).toBe(disp); // same reference, unchanged
⋮----
// smaWindow=20, only 3 candles -> can't compute rVol
⋮----
expect(result).toBe(disp); // returned unchanged
⋮----
// Create 25 candles with volume=100 each
⋮----
// Displacement candle with high volume
⋮----
expect(result!.rVol).toBeGreaterThan(1); // 300/100 = 3.0
⋮----
// Low volume displacement candle
⋮----
expect(result!.rVol).toBeLessThan(1); // 50/200 = 0.25
```

## File: src/modules/structure-detector/hurst.test.ts
```typescript
import { describe, it, expect } from 'vitest';
import {
    computeHurst,
    getHurstConsolidationAdjustment,
    getHurstScoreBonus,
    computePermutationEntropy,
    computeEntropyBaseline,
    classifySignalQuality,
    computeHValue,
    detectVolatilitySqueeze,
} from './hurst.js';
import type { HurstResult } from './hurst.js';
import type { CandleWithIndicators } from '../../types/index.js';
⋮----
// 生成确定性趋势序列：线性漂移 + 轻微周期扰动
function makeTrendingPrices(n: number, start = 100, drift = 0.5, phase = 0): number[]
⋮----
// 生成均值回归序列：Ornstein-Uhlenbeck 过程
function makeMeanRevertingPrices(n: number, mean = 100, speed = 0.3, seed = 7): number[]
⋮----
// 生成随机游走序列
function makeRandomWalkPrices(n: number, start = 100, seed = 11): number[]
⋮----
// 多个确定性趋势样本取均值，避免随机噪音导致的脆弱断言
⋮----
// 使用严格交替序列（确定性均值回归：100→102→100→102→...），H 应接近 0
⋮----
// 构造确定性强趋势
⋮----
// 简单的 seeded PRNG (mulberry32) 用于可重复的随机测试
function mulberry32(seed: number): () => number
⋮----
// 生成 128 步 iid 随机游走
⋮----
// 均值应在 [0.42, 0.58] 范围内（centered near 0.5）
⋮----
// 误分类计数：breach TRENDING(>0.6) 或 MEAN_REVERTING(<0.4) 的次数应 < 5
⋮----
// 构造 H 精确在 0.5 附近的序列，直接 mock
⋮----
// ============= 排列熵 (Permutation Entropy) 测试 =============
⋮----
// 平稳序列的当前 PE 应接近基线均值
⋮----
// 前 208 根：随机游走
⋮----
// 后 64 根：强趋势（有序）
⋮----
// 当前窗口（有序）的 PE 应低于历史基线 → zScore < 0
⋮----
// ============= computeHValue =============
⋮----
// 两个值可能不同但都在有效范围内
⋮----
// ============= detectVolatilitySqueeze =============
⋮----
function makeH1CandlesWithATR(count: number, atrValues: number[]): CandleWithIndicators[]
⋮----
// prior = 随机游走, current = 趋势 → H delta 可能大
// 但 ATR 是收缩的 → 不应该触发 BREAKOUT
⋮----
// ATR 收缩: currentATR 低于 mean
const h1Candles = makeH1CandlesWithATR(20, [2.0]); // all ATR=2.0
⋮----
currentATR: 1.5, // 1.5 / 2.0 = 0.75 < 1.15
⋮----
// 构造前后都强趋势的序列
⋮----
closes.push(100 + i * 1.0); // 强趋势
⋮----
// priorH likely > 0.57 → not in coil band → cannot be BREAKOUT
```

## File: src/modules/structure-detector/index.route-selection.test.ts
```typescript
import { describe, expect, it } from 'vitest';
⋮----
import { resolveStrategyIdsForRoute } from './index.js';
```

## File: src/modules/structure-detector/liquidity.test.ts
```typescript
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import type { Candle } from '../../types/index.js';
import type { SwingPoint, LiquidityAnalysis } from './types.js';
import {
    detectEqualLevels,
    getPreviousDayHL,
    getPreviousWeekHL,
    getPreviousMonthHL,
    getCurrentKillzone,
    isInKillzone,
    getSessionHL,
    getTodaySessionHL,
    sweepDisplayScore,
    SWEEP_LEVEL_PRIORITY,
    preprocessCandles,
    checkLiquidityStatusFast,
    checkLiquidityStatus,
    detectSweep,
    detectSwingPoints,
    detectLiquidityPools,
    analyzeLiquidity,
    getNearestLiquidityTarget,
    enrichSweepWithVolume,
    LIQUIDITY_CONFIG,
} from './liquidity.js';
⋮----
/**
 * Helper function to create Candle
 */
function c(datetime: number, open: number, high: number, low: number, close: number): Candle
⋮----
c(1000, 100, 110, 90, 102),   // Older
c(2000, 102, 115, 95, 105),   // Yesterday - PDH=115, PDL=95
c(3000, 105, 120, 100, 108),  // Today
⋮----
c(1000, 100, 110, 90, 102),   // Yesterday
c(2000, 102, 115, 95, 105),   // Today
⋮----
c(1000, 100, 110, 90, 102),   // Older week
c(2000, 102, 115, 95, 105),   // Last week - PWH=115, PWL=95
c(3000, 105, 120, 100, 108),  // This week
⋮----
c(1000, 100, 110, 90, 102),   // Older month
c(2000, 102, 115, 95, 105),   // Last month - PMH=115, PML=95
c(3000, 105, 120, 100, 108),  // This month
⋮----
// Mock Date to control time
⋮----
// Set time to 08:30 UTC
⋮----
// 03:00 UTC - outside all killzones
⋮----
// Even if system time is different, timestamp should be used
⋮----
// Pass timestamp for 08:00 UTC (London KZ)
⋮----
const t = (day: number, hour: number)
⋮----
c(t(15, 7), 100, 105, 99, 101),    // yesterday but before London
c(t(15, 8), 101, 110, 100, 108),   // in London
c(t(15, 9), 108, 112, 99, 107),    // in London
c(t(15, 10), 107, 111, 98, 109),   // in London
c(t(15, 11), 109, 113, 97, 110),   // in London
c(t(15, 12), 110, 115, 96, 111),   // in London: expected high
c(t(15, 13), 111, 114, 95, 112),   // in London: expected low
c(t(15, 16), 112, 113, 97, 110),   // in London
c(t(15, 17), 110, 116, 94, 111),   // yesterday but session end boundary (excluded)
c(t(16, 12), 111, 120, 90, 119),   // today (excluded)
⋮----
c(t(15, 0), 100, 110, 99, 101),    // yesterday, out of NY session
c(t(15, 1), 101, 111, 98, 102),    // yesterday, out of NY session
c(t(15, 6), 102, 112, 97, 103),    // yesterday, out of NY session
c(t(15, 7), 103, 113, 96, 104),    // yesterday, out of NY session
c(t(15, 8), 104, 114, 95, 105),    // yesterday, out of NY session
c(t(15, 12), 105, 115, 94, 106),   // yesterday, out of NY session
c(t(15, 22), 106, 116, 93, 107),   // NY end boundary (excluded)
c(t(15, 23), 107, 117, 92, 108),   // yesterday, out of NY session
c(t(16, 8), 108, 118, 91, 109),    // today
c(t(16, 9), 109, 119, 90, 110),    // today
⋮----
// Simulate 5 days of daily candles
⋮----
c(1000, 100, 110, 90, 105),    // Day -4
c(2000, 105, 115, 95, 110),    // Day -3
c(3000, 110, 112, 98, 108),    // Day -2
c(4000, 108, 120, 100, 115),   // Day -1 (yesterday) - PDH=120, PDL=100
c(5000, 115, 125, 110, 120),   // Day 0 (today)
⋮----
c(1000, 100, 200, 80, 150),    // Week -4
c(2000, 150, 180, 120, 160),   // Week -3
c(3000, 160, 190, 140, 170),   // Week -2
c(4000, 170, 210, 150, 180),   // Week -1 (last week) - PWH=210, PWL=150
c(5000, 180, 220, 160, 190),   // Week 0 (this week)
⋮----
// Exactly 2 candles - minimum required
⋮----
c(1000, 100, 105, 98, 102),   // Yesterday
c(2000, 102, 106, 101, 104),  // Today
⋮----
// index 模拟来自不同 timeframe 的 swing（不可直接比较）
⋮----
{ type: 'low', price: 100.04, time: baseTime + m15Ms, index: 200 }, // 与第一触点仅间隔 1 bar，应被过滤
{ type: 'low', price: 99.98, time: baseTime + 20 * m15Ms, index: 2 }, // 间隔 20 bars，应保留
⋮----
// 两个 Swing Low 间隔 6 小时（满足 minBarGap=16），但中间反弹 < minBounce
⋮----
{ type: 'low', price: 100.05, time: baseTime + 24 * m15Ms, index: 24 }, // 6h later
⋮----
// 中间 K 线最高只到 101 → 反弹 1.0，而 minBounce=1.5
⋮----
1.5 // minBounceAmount = 1.5
⋮----
// 反弹不够，聚类应被淘汰
⋮----
// 中间 K 线反弹到 102 → 反弹 2.0 >= 1.5
⋮----
// 中间最低只到 199.5 → 回撤 0.6，不够 1.5
⋮----
// 中间最低到 198 → 回撤 2.1 >= 1.5
⋮----
// 有 candles 数组但全都在 swing 时间范围之外
⋮----
// 无中间 K 线数据时保守保留
⋮----
// 三个低点：第1→第2反弹不够，第2→第3反弹够
// 过滤后应该保留第1和第3（前面没有被过滤的保留第1，第2→第3够了保留第3）
// 实际上：bounceFiltered = [#1]，然后检查 #1→#2 反弹不够 → 不加 #2
// 再检查 #2→#3 反弹够 → 加 #3
// 结果 [#1, #3] → touchCount=2
⋮----
// 第 1→第 2 之间：反弹仅到 100.8 (不够 1.5)
⋮----
// 第 2→第 3 之间：反弹到 102 (够)
⋮----
candles.push(c(baseTime + i * m15Ms, 100.2, 100.3, 100, 100.1)); // tiny bounce
⋮----
0 // disabled
⋮----
// ============= sweepDisplayScore tests =============
⋮----
function makeSweep(
        type: string,
        price: number,
        sweepPrice: number,
        sweepTime: number,
        overrides: {
            fakeBreakout?: boolean;
            reclaimedWithinBars?: number;
            volumeConfirmed?: boolean;
        } = {},
)
⋮----
// ============= preprocessCandles tests =============
⋮----
// RECENT_WINDOW is 5 by default
⋮----
// Recent window = last 5 candles (indices 5-9)
// highs: 105,106,107,108,109 → max 109
// lows: 95,94,93,92,91 → min 91
⋮----
// Single candle is within the recent window
⋮----
// ============= checkLiquidityStatusFast tests =============
⋮----
// Level high at 110, max high is 105 - never pierced
⋮----
// Level low at 90, min low is 92 - never pierced
⋮----
// Level at 100, but price went up to 110 -> deviation = 10/100 = 10% > 3% threshold
⋮----
// Level at 100, but price dropped to 90 -> deviation = (100-90)/100 = 10% > 3% threshold
⋮----
// Build candles where recent ones pierce the level but close back
⋮----
// Older non-piercing candles
⋮----
// Recent candles: high pierces 105 level but closes below
candles.push(c(10000, 100, 106, 99, 103)); // pierces 105, closes below
candles.push(c(11000, 103, 106, 100, 104)); // pierces 105, closes below
candles.push(c(12000, 104, 106, 101, 104)); // pierces 105, closes below
candles.push(c(13000, 103, 106, 100, 103)); // pierces 105, closes below
candles.push(c(14000, 103, 106, 100, 104)); // pierces 105, closes below
⋮----
// Level 105, type high, current price 104.5 -> distance = (105-104.5)/105 = 0.48% < 2%
⋮----
// Recent: pierce 105, close below
⋮----
// Level 105, current price 90 -> distance = (105-90)/105 ≈ 14.3% > 2%
⋮----
// M15 stats don't show pierce, but HTF does
⋮----
// Level 110 pierced by HTF (maxHigh=115 > 110), deviation = (115-110)/110 ≈ 4.5% > 3%
⋮----
// Candles where level was historically pierced but NOT in recent window
⋮----
// Old candle pierces level
⋮----
// Level 105: historically pierced (maxHigh=106>105), deviation = (106-105)/105 ≈ 0.95% < 3%
// Recent: recentMaxHigh=104 < 105 -> NOT recentlyPierced -> falls to final 'purged'
⋮----
// ============= checkLiquidityStatus (full) tests =============
⋮----
c(1000, 100, 115, 90, 100),  // pierces 105 far above -> deviation > 3%
⋮----
// Level=100, historicalMaxHigh=115, deviation = (115-100)/100 = 15%
⋮----
c(1000, 100, 110, 85, 100), // pierces low 100 down to 85 -> deviation 15%
⋮----
// Build enough candles so last RECENT_WINDOW are recent
⋮----
// Recent candles: pierce 105 but close below
⋮----
// deviation: (106.5-105)/105 ≈ 1.43% < 3%
// recentlyPierced: yes, recentlyRecovered: all close < 105 → true
// priceDistance = (105-104.5)/105 ≈ 0.48% < 2%
⋮----
// M15 candles show no piercing
⋮----
// Daily candles show historical piercing well beyond the level
⋮----
// Level 110, HTF pierced (120 > 110), deviation = (120-110)/110 ≈ 9.1% > 3%
⋮----
// Level 90, HTF pierced low to 80, deviation = (90-80)/90 ≈ 11.1% > 3%
⋮----
// Recent: pierce 105 and close ABOVE → not recovered
⋮----
// deviation: (111-105)/105 ≈ 5.7% > 3% → purged via historical deviation
⋮----
// Recent: pierce low 95 but close above
⋮----
// Level 95: min low = 93.5, deviation = (95-93.5)/95 ≈ 1.58% < 3%
// recentlyPierced: yes (94 < 95), recentlyRecovered: all closes > 95 → yes
// priceDistance = (96 - 95)/95 ≈ 1.05% < 2% → sweeping
⋮----
// ============= detectSweep tests =============
⋮----
c(2000, 100, 106, 98, 99),  // pierces 105 and closes below
⋮----
c(2000, 100, 102, 93, 101),  // pierces 95 and closes above
⋮----
c(2000, 100, 107, 100, 106),  // pierces 105, closes above (no recovery yet)
c(3000, 106, 104, 100, 103),  // high stays BELOW 105, closes below 105 → recovery only (not self-sweep)
⋮----
expect(result.sweepCandle).toBe(candles[1]); // piercing candle
expect(result.recoveryCandle).toBe(candles[2]); // recovery candle
⋮----
c(2000, 100, 100, 93, 94),  // pierces 95, closes below (no recovery)
c(3000, 94, 98, 96, 96),    // low stays ABOVE 95, closes above 95 → recovery only
⋮----
// 6 candles: pierce at index 0, non-piercing rest
⋮----
c(1000, 100, 107, 96, 99),  // index 0: pierces 105 and closes below
c(2000, 99, 104, 96, 100),  // index 1
c(3000, 100, 104, 96, 100), // index 2
c(4000, 100, 104, 96, 100), // index 3
c(5000, 100, 104, 96, 100), // index 4
c(6000, 100, 104, 96, 100), // index 5
⋮----
// lookback=2: outer loop checks i=5,4. Inner loop maxRecoverySearch=min(2,i).
// i=5: close<105 → j=1: candles[4].high=104 NO, j=2: candles[3].high=104 NO
// i=4: close<105 → j=1: candles[3].high=104 NO, j=2: candles[2].high=104 NO
// Not found.
⋮----
// lookback=6: outer loop goes from i=5 down to max(1,0)=1
// i=5: j up to min(6,5)=5 → eventually j=5: candles[0].high=107>105 → found!
⋮----
c(1000, 100, 104, 92, 101), // pierces 95 low
c(2000, 101, 104, 96, 100), // does not pierce
c(3000, 100, 104, 96, 100), // does not pierce, closes > 95 → recovery candidate
⋮----
// lookback=5: i=2 close=100 > 95 → search j=1: candles[1].low=96 > 95 → no, j=2: candles[0].low=92 < 95 → found
⋮----
// ============= detectSwingPoints tests =============
⋮----
// Pattern: lower, lower, HIGH, lower, lower, lower, lower
⋮----
c(4000, 100, 115, 97, 100),  // swing high (115 > all neighbors)
⋮----
c(4000, 100, 105, 85, 100),  // swing low (85 < all neighbors)
⋮----
// A candle that is both the highest high AND lowest low among neighbors
⋮----
c(2000, 100, 120, 80, 100),  // both highest and lowest with lookback=1
⋮----
c(2000, 100, 110, 97, 100),  // equal high with left neighbor
⋮----
c(2000, 100, 115, 97, 100), // swing high at index 1
⋮----
c(4000, 100, 103, 85, 100), // swing low at index 3
⋮----
c(6000, 100, 120, 97, 100), // swing high at index 5
⋮----
c(2000, 100, 108, 97, 100),  // not swing high with lookback=2 if index 3 is higher
c(3000, 100, 115, 97, 100),  // swing high with lookback=2
⋮----
// ============= getTodaySessionHL tests =============
⋮----
// Set time to Jan 16, 2024 at 14:00 UTC (during London session 8-17 and NY session 13-22)
⋮----
c(t(6), 100, 103, 97, 100),  // before London, excluded
c(t(8), 100, 110, 95, 105),  // in London
c(t(9), 105, 112, 98, 108),  // in London - highest
c(t(10), 108, 109, 93, 106), // in London - lowest
c(t(11), 106, 108, 96, 105), // in London
c(t(12), 105, 107, 97, 106), // in London
⋮----
expect(result.isActive).toBe(true); // 14:00 UTC is within London 8-17
⋮----
// At 14:00 UTC, NY session (13-22) is active
⋮----
const t = (hour: number) => Date.UTC(2024, 0, 15, hour, 0, 0); // yesterday
⋮----
// ============= detectLiquidityPools tests =============
⋮----
// Create candles that repeatedly test ~105 as resistance (high reaches 105, close below)
⋮----
// Price oscillates 100-105, closes below the bucket at ~105
⋮----
// Should find a resistance pool near 105
⋮----
// Price tests 95 as support (low reaches 95, close above)
⋮----
// Current price above the resistance bucket → purged
⋮----
// Wide range creates many buckets
⋮----
// Sorted by touchCount descending
⋮----
// All candles at the same price → priceRange = 0 → numBuckets = 0 → empty
⋮----
// ============= getNearestLiquidityTarget tests =============
⋮----
expect(result!.price).toBe(110); // nearest above
⋮----
expect(result!.price).toBe(90); // nearest below
⋮----
expect(result!.price).toBe(110); // skips sweeping PDH at 105
⋮----
// ============= analyzeLiquidity integration tests =============
⋮----
function makeM15Candles(count: number, basePrice: number, baseTime: number): Candle[]
⋮----
c(Date.UTC(2024, 0, 15), 105, 120, 95, 110), // yesterday: PDH=120, PDL=95
⋮----
c(Date.UTC(2024, 0, 8), 110, 125, 90, 115), // last week: PWH=125, PWL=90
⋮----
c(Date.UTC(2023, 11, 1), 100, 140, 75, 115), // last month: PMH=140, PML=75
⋮----
// Create candles with clear swing points
⋮----
const price = 100 + 10 * Math.sin(i * 0.5); // oscillating price
⋮----
// Should contain the swing points we passed in
⋮----
{ type: 'high', price: 120.5, time: baseTime + 10 * h4Ms, index: 10 }, // EQH candidate
⋮----
// Should have H4 related data populated
⋮----
// PDH is at 110. Create M15 candles that sweep 110 and recover.
⋮----
// Add a sweep candle near the end
recentCandles.push(c(baseTime + 100 * m15Ms, 108, 112, 107, 108)); // pierces 110
recentCandles.push(c(baseTime + 101 * m15Ms, 108, 109, 106, 107)); // closes below 110 → recovery
⋮----
c(Date.UTC(2024, 0, 15), 105, 110, 95, 107), // PDH=110
⋮----
// Should have at least one sweep detected
⋮----
sweepTime: baseTime + 50 * m15Ms, // relatively recent
⋮----
// The latched sweep should appear if it passes age/distance checks
⋮----
// May or may not be present depending on detection, but structure should not error
⋮----
// Create candles that will sweep multiple levels
⋮----
// Sweep both PDH (110) and PDL (90)
recentCandles.push(c(baseTime + 95 * m15Ms, 100, 111, 89, 100)); // pierce both
recentCandles.push(c(baseTime + 96 * m15Ms, 100, 103, 97, 100)); // recover
⋮----
c(Date.UTC(2024, 0, 15), 100, 110, 90, 105), // PDH=110, PDL=90
⋮----
// Verify sorted by score (descending)
⋮----
// recentSweep should be the first (highest priority)
⋮----
// ============= enrichSweepWithVolume tests =============
⋮----
expect(result).toBe(level); // unchanged reference
⋮----
// Only 2 candles, not enough for SMA window of 20
⋮----
// Should return unchanged since calculateRVolByTime returns null with insufficient data
⋮----
volume: i === 25 ? 500 : 100, // high volume on sweep candle
⋮----
// The function should at least populate sweepRVol
⋮----
// ============= detectEqualLevels additional edge cases =============
⋮----
// No candles → fallback to price comparison: currentPrice=105 > avgPrice ~100 → purged
⋮----
// currentPrice=95 < avgPrice ~100 → active
⋮----
// currentPrice=95 < avgPrice ~100 → purged for EQL
⋮----
// currentPrice=105 > avgPrice ~100 → active for EQL
⋮----
// Provide candles but no stats → uses checkLiquidityStatus path
⋮----
undefined, // no stats
undefined, // no htfStats
⋮----
expect(result.equalHighs[0].status).toBe('active'); // 99 < 100 → never pierced
⋮----
expect(result.equalLows[0].status).toBe('active'); // min low 100.5 > 100 → never pierced
⋮----
// HTF candle AFTER formation time that pierces the EQH level
⋮----
c(baseTime + 25 * m15Ms, 99, 105, 98, 103), // high=105 > avgPrice ~100 → htfPurged
⋮----
// HTF candle AFTER formation that pierces below EQL
⋮----
c(baseTime + 25 * m15Ms, 101, 102, 95, 99), // low=95 < avgPrice ~100 → htfPurged
⋮----
// Create many distinct clusters of highs
⋮----
// avgPrice should be roughly (100 + 100.2 + 100.1) / 3
⋮----
{ type: 'high', price: 110, time: 2000, index: 10 }, // 10 apart, tolerance 0.5
⋮----
// ============= LIQUIDITY_CONFIG export tests =============
```

## File: src/modules/structure-detector/liquidity.ts
```typescript
/**
 * 流动性区域检测模块
 * 检测 PDH/PDL, PWH/PWL, PMH/PML, Swing H/L
 */
⋮----
import type { Candle } from '../../types/index.js';
import type { LiquidityLevel, LiquidityType, LiquidityStatus, LiquidityAnalysis, SwingPoint, Direction } from './types.js';
import type { VolumeValidationConfig } from '../volume-analysis/types.js';
import { calculateRVolByTime, validateSweepVolume } from '../volume-analysis/calculator.js';
⋮----
// ============= 可配置常量 =============
⋮----
/**
 * 流动性检测配置
 * 这些值可根据不同市场/资产进行调优
 */
/**
 * 流动性级别类型的策略优先级
 * 数值越大 = 越高优先级 (月级 > 周级 > EQ > 日级 > Session > Swing)
 * 共享给 catalyst.ts / recentSweep 排序等场景使n */
⋮----
/** 已确认 sweep 的最大锁存时效 (毫秒): 12 小时 */
⋮----
/** 最近 K 线窗口大小 (用于判断 sweeping) */
⋮----
/** 价格距离阈值 (超过此比例视为 purged) */
⋮----
/** M15 Equal Levels ATR 容差倍数 */
⋮----
/** H4 Equal Levels ATR 容差倍数 */
⋮----
/** H4 最小聚类大小 */
⋮----
/** M15 Equal Levels 触点最小间隔 (bars) */
M15_MIN_BAR_GAP: 16, // 16 * M15 = 4h，确保 H1/H4 Swing 点间有足够间隔
/** H4 Equal Levels 触点最小间隔 (bars) */
H4_MIN_BAR_GAP: 2, // 2 * H4 = 8h
/** EQL/EQH 两触点之间最小反弹幅度 (ATR 倍数) */
MIN_BOUNCE_ATR: 1.5, // 两次测试之间至少反弹 1.5 ATR 才算有效 "双底/双顶"
/** H4 EQL/EQH 两触点之间最小反弹幅度 (ATR 倍数) */
H4_MIN_BOUNCE_ATR: 2.0, // H4 级别要求更高的反弹
/** 流动性池最小触及次数 */
⋮----
/** 流动性池桶大小 (价格百分比) */
⋮----
/** 扫损检测回溯 K 线数 */
⋮----
/** 评分时效衰减 (毫秒) */
⋮----
/** 历史偏离阈值 (3%): 价格穿过流动性水平并运行超过此比例，视为永久失效 (purged) */
⋮----
const INTRADAY_LOOKBACK_MINUTES = 24 * 60; // 24 小时窗口
const INTRADAY_DUPLICATE_TOLERANCE = 0.0015; // 0.15% 允差避免重复记录
⋮----
/**
 * 获取昨日高低点 (PDH/PDL)
 */
export function getPreviousDayHL(dailyCandles: Candle[]):
⋮----
// 最后一根是今天，倒数第二根是昨天
⋮----
/**
 * 获取上周高低点 (PWH/PWL)
 */
export function getPreviousWeekHL(weeklyCandles: Candle[]):
⋮----
/**
 * 获取上月高低点 (PMH/PML)
 */
export function getPreviousMonthHL(monthlyCandles: Candle[]):
⋮----
// ============= Session 高低点计算 =============
⋮----
/**
 * Session 时间定义 (UTC)
 */
⋮----
LONDON: { start: 8, end: 17 },    // 08:00 - 17:00 UTC
NEW_YORK: { start: 13, end: 22 }, // 13:00 - 22:00 UTC (有重叠)
⋮----
/**
 * ICT Killzone 时间定义 (UTC)
 * 这些是 ICT 理论中最高概率的交易时段
 */
⋮----
// London Killzone: 02:00-05:00 EST = 07:00-10:00 UTC
⋮----
// NY AM Killzone: 07:00-10:00 EST = 12:00-15:00 UTC
⋮----
// NY PM Killzone: 13:30-16:00 EST = 18:30-21:00 UTC (简化为 18-21)
⋮----
/**
 * 检查当前时间是否在 Killzone 内
 * @returns 当前 Killzone 名称，或 null 如果不在任何 Killzone
 */
export function getCurrentKillzone(timestamp?: number): 'LONDON' | 'NY_AM' | 'NY_PM' | null
⋮----
/**
 * 检查是否在任意高概率交易时段
 */
export function isInKillzone(timestamp?: number): boolean
⋮----
/**
 * 检查 K 线是否在指定 Session 内
 */
function isInSession(candleTime: number, session:
⋮----
/**
 * 获取昨日 Session 高低点
 * @param candles M15 或 H1 K 线 (需要有昨天的数据)
 * @param session 交易时段
 */
export function getSessionHL(
    candles: Candle[],
    session: 'LONDON' | 'NEW_YORK'
):
⋮----
// 筛选昨天 Session 内的 K 线
⋮----
// 在昨天范围内
⋮----
// 在 Session 时间内
⋮----
// 计算高低点
⋮----
/**
 * 获取今日 Session 高低点 (实时追踪)
 * @param candles M15 或 H1 K 线 (需要有今天的数据)
 * @param session 交易时段
 */
export function getTodaySessionHL(
    candles: Candle[],
    session: 'LONDON' | 'NEW_YORK'
):
⋮----
// 判断当前 Session 是否正在进行中
⋮----
// 筛选今天 Session 内的 K 线
⋮----
// 在今天范围内
⋮----
// 在 Session 时间内
⋮----
// 计算高低点
⋮----
// ============= 流动性状态检测 =============
⋮----
/**
 * K 线统计缓存 - 用于优化 checkLiquidityStatus 的重复遍历
 */
export interface CandleStats {
    maxHigh: number;
    minLow: number;
    recentMaxHigh: number;  // 最近 RECENT_WINDOW 根
    recentMinLow: number;
    recentCloses: number[];  // 最近 RECENT_WINDOW 根收盘价
}
⋮----
recentMaxHigh: number;  // 最近 RECENT_WINDOW 根
⋮----
recentCloses: number[];  // 最近 RECENT_WINDOW 根收盘价
⋮----
/**
 * 预处理 K 线数据，提取统计信息以供多次复用
 */
export function preprocessCandles(candles: Candle[]): CandleStats
⋮----
/**
 * 检查流动性水平的当前状态 (优化版 - 使用预处理数据)
 * 
 * ICT 概念：一旦价格明确突破并远离某个流动性水平，该水平就失效了（流动性已被消耗）
 * 即使价格后来返回到该区域，也不应该重新激活
 * 
 * @param stats 预处理的 K 线统计数据 (可选，如果不提供则回退到原有逻辑)
 */
export function checkLiquidityStatusFast(
    level: number,
    type: 'high' | 'low',
    stats: CandleStats,
    currentPrice: number,
    htfStats?: CandleStats
): LiquidityStatus
⋮----
// 1. 快速判断是否历史上被刺破
⋮----
// 2. 检查历史最大偏离 - ICT 概念：一旦价格远离，流动性就被消耗了
// 修正：只有当价格 **穿过** 该水平并继续运行很远（Break & Run）时，才算彻底失效
⋮----
// 对于 EQL：检查价格是否曾经大幅下跌 **跌破** 该低点
⋮----
// 价格曾经跌破该 EQL 超过阈值，永久失效
⋮----
// 对于 EQH：检查价格是否曾经大幅上涨 **突破** 该高点
⋮----
// 价格曾经突破该 EQH 超过阈值，永久失效
⋮----
// 3. 检查最近是否被刺破并回收（短期 sweeping 逻辑）
⋮----
// fix: 增加非空检查，防止空数组导致 every() 返回 true
⋮----
/**
 * 检查流动性水平的当前状态
 * 
 * ICT 概念：一旦价格明确突破并远离某个流动性水平，该水平就失效了（流动性已被消耗）
 * 
 * @returns 'active' 未被触及, 'sweeping' 正在扫损 (刺穿但回收), 'purged' 已被完全突破
 */
export function checkLiquidityStatus(
    level: number,
    type: 'high' | 'low',
    candles: Candle[],
    currentPrice: number,
    htfCandles: Candle[] = [] // 新增: 高时间框架 K 线 (如 Daily) 用于验证历史状态
): LiquidityStatus
⋮----
htfCandles: Candle[] = [] // 新增: 高时间框架 K 线 (如 Daily) 用于验证历史状态
⋮----
// 1. 全局检查 (当前 timeframe)：是否历史上曾经被刺破过
⋮----
// 【新增】追踪历史极值用于计算最大偏离
⋮----
// 同时也记录最近的行为来判断是否 sweeping
⋮----
// A. 检查当前 Timeframe (M15)
⋮----
// 追踪极值
⋮----
// B. 如果当前 Timeframe 显示 active，再用 HTF (Daily) 进行历史回溯检查
// 防止"失忆": 跌破发生在 M15 数据窗口之前
// 注意: 不能在找到 pierced 后就 break，需要遍历完所有 HTF K 线以获取完整的极值
// (historicalMaxHigh / historicalMinLow)，这些值在后续 purge 阈值判定中使用
⋮----
// 追踪 HTF 极值 (必须遍历全部)
⋮----
// 2. 状态判定
⋮----
// 2.5 检查历史最大偏离 - ICT 概念：一旦价格远离，流动性就被消耗了
// 修正：只有当价格 **穿过** 该水平并继续运行很远（Break & Run）时，才算彻底失效
⋮----
// 对于 EQL：检查价格是否曾经大幅下跌 **跌破** 该低点
⋮----
// 对于 EQH：检查价格是否曾经大幅上涨 **突破** 该高点
⋮----
// 3. 短期 sweeping 逻辑
⋮----
/**
 * 检测扫损事件
 * 扫损 = 刺破 + 收回
 * 支持多 K 线扫损 (例如：第 1 根刺破，第 2 根收回)
 */
export function detectSweep(
    level: number,
    type: 'high' | 'low',
    candles: Candle[],
    lookback: number = 5
):
⋮----
// 从最新蜡烛向前检查“收回”动向
⋮----
// 情况 A: 单根扫损 (刺破 + 收回在同一根)
⋮----
// 情况 B: 多根扫损 (之前刺破，当前收回)
⋮----
// 情况 A: 单根扫损
⋮----
// 情况 B: 多根扫损
⋮----
// ============= Swing Points 检测 =============
⋮----
/**
 * 检测 Swing High/Low 点
 * Swing High: 当前 K 线高点 > 左右 N 根 K 线高点
 * Swing Low: 当前 K 线低点 < 左右 N 根 K 线低点
 */
export function detectSwingPoints(candles: Candle[], lookback: number = 3): SwingPoint[]
⋮----
// 检查左右 N 根 K 线
⋮----
function inferCandleIntervalMs(candles: Candle[]): number | undefined
⋮----
// 使用中位数间隔，降低缺失 K 线或异常点对估算的影响
⋮----
/**
 * 检测 Equal Highs/Lows
 * 将价格相近的 Swing 点聚类，形成流动性区域
 * @param minClusterSize 最小聚类大小，默认 3（对 H4 可设为 2，因为周期长不易形成多次测试）
 */
export function detectEqualLevels(
    swings: SwingPoint[],
    currentPrice: number,
    priceTolerance: number, // 价格误差 (绝对值，例如 0.2 * ATR)
    candles: Candle[] = [], // 新增：用于状态检查的 K 线
    htfCandles: Candle[] = [], // 新增：用于状态检查的 HTF K 线
    minClusterSize: number = 2, // 最小聚类大小 (改为 2)
    minBarGap: number = 0, // 触点最小间隔 bars (0 表示不限制)
    stats?: CandleStats, // [新增] 预计算的统计数据
    htfStats?: CandleStats, // [新增] 预计算的 HTF 统计数据
    barIntervalMs?: number, // [新增] bars -> 时间差(ms) 的换算基准
    minBounceAmount: number = 0 // [新增] 两触点之间最小反弹绝对值 (0 表示不过滤)
):
⋮----
priceTolerance: number, // 价格误差 (绝对值，例如 0.2 * ATR)
candles: Candle[] = [], // 新增：用于状态检查的 K 线
htfCandles: Candle[] = [], // 新增：用于状态检查的 HTF K 线
minClusterSize: number = 2, // 最小聚类大小 (改为 2)
minBarGap: number = 0, // 触点最小间隔 bars (0 表示不限制)
stats?: CandleStats, // [新增] 预计算的统计数据
htfStats?: CandleStats, // [新增] 预计算的 HTF 统计数据
barIntervalMs?: number, // [新增] bars -> 时间差(ms) 的换算基准
minBounceAmount: number = 0 // [新增] 两触点之间最小反弹绝对值 (0 表示不过滤)
⋮----
const clusterSwings = (points: SwingPoint[], levelType: 'EQH' | 'EQL'): LiquidityLevel[] =>
⋮----
// 优化: 排序后单次遍历聚类，O(n log n) 代替 O(n²)
⋮----
// 与当前簇的第一个点比较价格差
⋮----
// 当前簇结束，判断是否满足最小聚类大小
⋮----
// 处理最后一个簇
⋮----
// 转换为 LiquidityLevel
⋮----
// 额外过滤：同一聚类内触点需要满足最小 bars 间隔，避免局部噪音反复计数
⋮----
// 混合周期 swing 时 index 不可比，优先使用时间差作为 bars 间隔约束
⋮----
// 振幅过滤：要求两个相邻触点之间价格有足够反弹，排除横盘噪音
⋮----
// 找两触点之间的 K 线，计算中间最大反弹
⋮----
// 无中间 K 线数据，保守保留
⋮----
// 两个低点之间，价格需要向上反弹足够
⋮----
// 两个高点之间，价格需要向下回撤足够
⋮----
// 使用 checkLiquidityStatus 进行更严谨的状态检查
// 如果没传 candles，则回退到简单的当前价格比较
⋮----
// 【修复】优先使用 HTF (Daily) K 线进行"及格后"的时间过滤检查
// 防止"自我刺破" (Self-Piercing) 和"历史失忆" (Amnesia)
⋮----
// strict check: 只有在形态形成时间之后的 K 线才能算作刺破
⋮----
// 检查是否是 sweeping (这里简化处理，如果是 Daily 级别的刺破通常视为 purge，除非后续有更细致的逻辑)
// 实际上 checkLiquidityStatus 会处理 sweeping，这里先标记历史是否破位
⋮----
// 如果日线级别而在形成后已经破位，直接标记为 purged
// 除非我们需要检测 Daily 级别的 Sweep (目前系统主要检测 M15 Sweep)
⋮----
// 筛选主要的 EQH/EQL (最多各 5 个)
// 评分标准：距离当前价格越近越重要 + 时间越近越重要 + 触及次数越多越重要
⋮----
const scoreLevel = (level: LiquidityLevel, _isHigh: boolean): number =>
⋮----
// 1. 距离分数 (0-40): 距离当前价格越近越高分
⋮----
const distanceScore = Math.max(0, 40 * (1 - pricePercent * 10)); // 10% 以上距离得 0 分
⋮----
// 2. 时效分数 (0-30): 时间越近越高分
⋮----
// 3. 触及次数分数 (0-20): 触及次数越多越高分
⋮----
// 4. 状态分数 (0-1000): active/sweeping 的绝对优先
// Active/Sweeping 是当前的目标或正在发生，Purged 仅作为历史参考
⋮----
/**
 * 检测机构流动性池
 * 价格多次测试但未突破的区域，可能有机构在此建仓
 * 
 * 逻辑:
 * 1. 将价格区间划分为若干 "桶" (bucket)
 * 2. 统计每个桶被触及的次数 (high/low 落入该区间)
 * 3. 触及次数 >= minTouches 且价格收盘未突破 = 流动性池
 */
export function detectLiquidityPools(
    candles: Candle[],
    currentPrice: number,
    minTouches: number = 2,
    bucketSize: number = 0.003  // 0.3% 价格区间作为一个桶
): LiquidityLevel[]
⋮----
bucketSize: number = 0.003  // 0.3% 价格区间作为一个桶
⋮----
// 计算价格范围
⋮----
// 计算桶大小 (基于价格的百分比)
⋮----
if (numBuckets < 1 || numBuckets > 1000) return []; // 防止异常情况
⋮----
// 初始化桶
interface Bucket {
        bottom: number;
        top: number;
        highTouches: number;  // 作为阻力被测试
        lowTouches: number;   // 作为支撑被测试
        lastTouchTime: number;
    }
⋮----
highTouches: number;  // 作为阻力被测试
lowTouches: number;   // 作为支撑被测试
⋮----
// 统计触及次数 - 优化: 使用直接索引计算 O(n) 代替 O(n × buckets)
⋮----
// 计算高点所在的桶索引 (作为阻力)
⋮----
// 高点在桶内，但收盘在桶下方 = 测试阻力后回落
⋮----
// 计算低点所在的桶索引 (作为支撑)
⋮----
// 低点在桶内，但收盘在桶上方 = 测试支撑后反弹
⋮----
// 筛选有效流动性池
⋮----
// 判断是阻力池还是支撑池
⋮----
// 检查是否已被突破
⋮----
// 按触及次数排序，返回最显著的流动性池
⋮----
.slice(0, 5);  // 最多返回 5 个
⋮----
// ============= 综合流动性分析 =============
⋮----
interface LiquidityDataInput {
    dailyCandles: Candle[];
    weeklyCandles: Candle[];
    monthlyCandles: Candle[];
    recentCandles: Candle[];    // M15 或 H1 的近期 K 线
    currentPrice: number;
    atr: number;
    swingPoints?: SwingPoint[]; // [可选] 预先计算好的 Swing 点 (M15)，减少重复计算
    h4SwingPoints?: SwingPoint[]; // [可选] H4 级别的 Swing 点 (用于高权重流动性检测)
    h4Candles?: Candle[]; // [可选] H4 K 线，用于 bars 间隔的时间换算
    volumeConfig?: VolumeValidationConfig; // [可选] 成交量验证配置
    /** [可选] 上一周期已确认的 sweeps，用于锁存防闪烁 */
    previousSweeps?: LiquidityAnalysis['allRecentSweeps'];
}
⋮----
recentCandles: Candle[];    // M15 或 H1 的近期 K 线
⋮----
swingPoints?: SwingPoint[]; // [可选] 预先计算好的 Swing 点 (M15)，减少重复计算
h4SwingPoints?: SwingPoint[]; // [可选] H4 级别的 Swing 点 (用于高权重流动性检测)
h4Candles?: Candle[]; // [可选] H4 K 线，用于 bars 间隔的时间换算
volumeConfig?: VolumeValidationConfig; // [可选] 成交量验证配置
/** [可选] 上一周期已确认的 sweeps，用于锁存防闪烁 */
⋮----
/**
 * 为扫损事件附加成交量验证数据
 * 检查扫损 K 线和恢复 K 线的成交量
 */
export function enrichSweepWithVolume(
    level: LiquidityLevel,
    candles: Candle[],
    volumeConfig: VolumeValidationConfig,
): LiquidityLevel
⋮----
// 尝试找恢复 K 线的 RVol (使用 recoveryTime 精确定位，支持多根扫损场景)
⋮----
// 判断确认源：analysis.rVol 指向触发确认的那根 K 线的 RVol 数据
⋮----
/**
 * 综合流动性分析
 */
export function analyzeLiquidity(input: LiquidityDataInput): LiquidityAnalysis
⋮----
// 预处理 K 线数据，避免重复遍历
⋮----
// 【修复】不再只取最近 30 天，而是使用全部提供的 Daily K 线，以覆盖更久远的历史高低点检测
// checkLiquidityStatusFast 会处理性能问题
⋮----
h4EqualHighs: [],  // H4 级别 EQH
h4EqualLows: [],   // H4 级别 EQL
h4RecentSwings: [], // H4 级别独立 Swing 点（未聚类）
⋮----
// 1. 各级别固定位移 (PDH/PDL, PWH/PWL, PMH/PML)
⋮----
// 2. 检测 Equal Highs/Lows (EQH/EQL) - M15 级别
⋮----
// 容差使用配置常量 (参考 LuxAlgo margin=4 即 ATR*0.4)
// 关键修正: 传入 recentCandles (M15) 和 dailyCandles (D1) 进行双重状态检查，防止历史 Swing 点状态失忆
⋮----
2, // default minClusterSize
⋮----
atr * LIQUIDITY_CONFIG.MIN_BOUNCE_ATR // 两触点之间至少反弹 1.5 ATR
⋮----
// 额外补充：近 24 小时的极值视为关键流动性
⋮----
const pushExtreme = (price: number, label: 'SWING_HIGH' | 'SWING_LOW', time: number) =>
⋮----
// 2.5 检测 H4 级别的 Equal Highs/Lows (高权重流动性目标)
// 使用更大的容差进行聚类，因为 H4 级别的流动性区域通常跨度更宽
⋮----
atr * LIQUIDITY_CONFIG.H4_MIN_BOUNCE_ATR // H4 级别需要更大反弹
⋮----
// 2.6 将未聚类的独立 H4 Swing 点注册为具名流动性水平
⋮----
// 跳过已被 H4 EQH/EQL 覆盖的价格区域
⋮----
// 3. 检测机构流动性池
⋮----
// 4. 检测 Session 高低点
⋮----
// 5. 检测扫损 (Sweep) - 现在所有位移点位都已准备好
⋮----
// H4 级别的 EQH/EQL 也加入扫损检测
⋮----
// H4 独立 Swing 点也加入扫损检测
⋮----
// === Sweep 锁存 (Latch): 恢复上周期已确认但本周期级别消失的 sweep ===
⋮----
// 已在本周期重新检测到 → 跳过
⋮----
// 超过锁存时效 → 丢弃
⋮----
// 价格已远离扫损位 (超过 5% ATR * 8) → 锁存无意义
⋮----
// 恢复到本周期，标记为锁存来源
⋮----
// === 优先级排序: 替代纯时间排序 ===
// 综合 level 重要性 + 质量奖励 + 时间，相同价格侧(buyside/sellside)深度优先
⋮----
// 同分时优先更近的 sweepTime
⋮----
// 成交量验证: 为所有扫损事件附加 RVol 数据
⋮----
/**
 * Sweep 展示/选择评分
 * 综合级别优先级 + 质量特征 (fakeBreakout, volumeConfirmed, quickReclaim)
 * 用于 recentSweep 选择以及 allRecentSweeps 排序
 */
export function sweepDisplayScore(sweep: LiquidityAnalysis['allRecentSweeps'][number]): number
⋮----
/**
 * 获取距离当前价格最近的流动性目标
 */
export function getNearestLiquidityTarget(
    liquidity: LiquidityAnalysis,
    currentPrice: number,
    direction: 'up' | 'down'
): LiquidityLevel | null
⋮----
// 过滤：只要 active 的流动性
⋮----
// 找上方最近的
⋮----
// 找下方最近的
⋮----
function getIntradayExtremes(candles: Candle[], lookbackMinutes: number):
```

## File: src/modules/structure-detector/market-structure.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { Candle } from '../../types/index.js';
import type { SwingPoint, OrderBlock } from './types.js';
import {
    detectSwingPoints,
    detectStructureBreak,
    detectOrderBlocks,
    isOrderBlockMitigated,
    isOrderBlockWeakened,
    detectBreakerBlocks,
    calculateOTE,
    isInOTEZone,
    isPriceInFavorableZone,
    enrichOrderBlocksWithVolume,
} from './market-structure.js';
⋮----
/**
 * Helper function to create Candle
 */
function c(datetime: number, open: number, high: number, low: number, close: number): Candle
⋮----
// With n=2, we need at least n*2+1 = 5 candles
⋮----
// Pattern: lower-high-lower-high-lower (inverted V shape in middle)
⋮----
c(1000, 100, 105, 98, 102),   // 0
c(2000, 102, 106, 101, 104),  // 1
c(3000, 104, 110, 103, 106),  // 2 - Swing High at 110 (higher than neighbors)
c(4000, 106, 108, 105, 104),  // 3
c(5000, 104, 107, 103, 102),  // 4
⋮----
// Pattern: higher-low-higher-low-higher (V shape in middle)
⋮----
c(1000, 104, 107, 103, 102),  // 0
c(2000, 102, 106, 101, 100),  // 1
c(3000, 100, 105, 95, 102),   // 2 - Swing Low at 95 (lower than neighbors)
c(4000, 102, 106, 101, 104),  // 3
c(5000, 104, 108, 103, 106),  // 4
⋮----
// Pattern with equal highs
⋮----
c(1000, 100, 105, 98, 102),   // 0
c(2000, 102, 106, 101, 104),  // 1
c(3000, 104, 110, 103, 106),  // 2 - Swing High at 110
c(4000, 106, 110, 105, 104),  // 3 - Equal high at 110 (not higher)
c(5000, 104, 107, 103, 102),  // 4
⋮----
// Both candles 2 and 3 have high=110, and neither neighbor is higher
⋮----
// Pattern with equal lows
⋮----
c(1000, 104, 107, 103, 102),  // 0
c(2000, 102, 106, 95, 100),   // 1 - Swing Low at 95
c(3000, 100, 105, 95, 102),   // 2 - Equal low at 95 (not lower)
c(4000, 102, 106, 101, 104),  // 3
c(5000, 104, 108, 103, 106),  // 4
⋮----
// Pattern: swing high, then swing low
⋮----
c(1000, 100, 105, 98, 102),   // 0
c(2000, 102, 106, 101, 104),  // 1
c(3000, 104, 110, 103, 106),  // 2 - Swing High
c(4000, 106, 108, 105, 104),  // 3
c(5000, 104, 107, 95, 100),   // 4 - Swing Low
c(6000, 100, 105, 99, 102),   // 5
c(7000, 102, 106, 101, 104),  // 6
⋮----
// With n=1, we need at least 3 candles
⋮----
c(1000, 100, 105, 98, 102),   // 0
c(2000, 102, 110, 101, 104),  // 1 - Swing High with n=1
c(3000, 104, 108, 103, 106),  // 2
⋮----
c(1000, 100, 105, 98, 102),   // 0
c(2000, 102, 112, 101, 104),  // 1 - Higher than candle 2
c(3000, 104, 110, 103, 106),  // 2 - Not a swing high (neighbor is higher)
c(4000, 106, 108, 105, 104),  // 3
c(5000, 104, 107, 103, 102),  // 4
⋮----
// Candle 2 is not a swing high because candle 1 has higher high
⋮----
// Helper to create swing points
function makeSwingHigh(price: number, time: number, index: number): SwingPoint
⋮----
function makeSwingLow(price: number, time: number, index: number): SwingPoint
⋮----
// Only 1 swing high, need at least 2
⋮----
// Downtrend scenario: breaking a Lower High indicates reversal
⋮----
c(1000, 110, 115, 108, 109),   // 0
c(2000, 109, 112, 107, 108),   // 1 - Swing High at 112
c(3000, 108, 110, 105, 106),   // 2
c(4000, 106, 108, 100, 102),   // 3 - Swing Low
c(5000, 102, 106, 101, 105),   // 4 - Swing High at 106 (Lower High)
c(6000, 105, 107, 104, 108),   // 5 - Close at 108 > 106 (breaks Lower High)
c(7000, 108, 110, 107, 112),   // 6 - Close at 112 > 106 (confirms break)
⋮----
makeSwingHigh(106, 5000, 4),   // Lower High
⋮----
// Uptrend scenario: breaking a Higher Low indicates reversal
⋮----
c(1000, 95, 105, 93, 100),     // 0
c(2000, 100, 108, 98, 102),    // 1 - Swing Low at 98
c(3000, 102, 110, 101, 105),   // 2
c(4000, 105, 112, 100, 103),   // 3 - Swing High
c(5000, 103, 106, 99, 101),    // 4 - Swing Low at 99 (Higher Low)
c(6000, 101, 104, 95, 97),     // 5 - Close at 97 < 99 (breaks Higher Low)
⋮----
makeSwingLow(99, 5000, 4),     // Higher Low
⋮----
// Uptrend scenario: breaking the latest Higher High should be BOS
⋮----
c(1000, 95, 105, 93, 100),     // 0
c(2000, 100, 108, 98, 102),    // 1
c(3000, 102, 108, 101, 105),   // 2 - Swing High at 108 (prev high)
c(4000, 105, 112, 100, 103),   // 3 - Swing Low
c(5000, 103, 110, 102, 106),   // 4 - Swing High at 110 (Higher High)
c(6000, 106, 115, 105, 114),   // 5 - Close at 114 > 110 (breaks last high)
⋮----
makeSwingHigh(110, 5000, 4),   // Higher High
⋮----
// Downtrend scenario: breaking a Lower Low confirms trend
⋮----
c(1000, 110, 115, 108, 109),   // 0
c(2000, 109, 112, 100, 102),   // 1 - Swing Low at 100
c(3000, 102, 106, 101, 104),   // 2
c(4000, 104, 108, 99, 100),    // 3 - Swing High
c(5000, 100, 103, 98, 99),     // 4 - Swing Low at 98 (Lower Low)
c(6000, 99, 101, 90, 92),      // 5 - Close at 92 < 98 (breaks Lower Low)
⋮----
makeSwingLow(98, 5000, 4),     // Lower Low
⋮----
// Breaking a Lower Low (98 < 100) is BOS (continuation)
⋮----
// With lookback=2, should only check last 2 candles
⋮----
// The break happened at candle 6 (index 6), which is outside lookback=2
// So should return null
⋮----
// Price stays within swing range, no close crossing
⋮----
// Only 1 swing high but 2 swing lows
⋮----
c(2000, 102, 106, 99, 101),   // 1 - Swing Low at 99
c(3000, 101, 105, 97, 98),    // 2 - Swing Low at 97 (Lower Low)
c(4000, 98, 100, 90, 92),     // 3 - Close at 92 < 97 (breaks)
⋮----
makeSwingHigh(110, 1000, 0),  // only 1
⋮----
// Only 1 swing low but 2 swing highs
⋮----
c(2000, 105, 108, 103, 106),   // Swing High at 108
⋮----
c(4000, 103, 112, 102, 111),   // Swing High at 112 (Higher High)
c(5000, 111, 114, 111, 113),   // Close at 113 > 112 (breaks)
⋮----
makeSwingLow(95, 1000, 0),  // only 1
⋮----
// ============= Order Block Tests =============
⋮----
// Scenario: bearish candle (OB) → bullish displacement → FVG gap
// ATR = 5. Displacement body must be > 1.5 * 5 = 7.5
// OB range must be >= 0.3 * 5 = 1.5
// FVG: afterDisp.low > preDispCandle.high (bullish FVG)
⋮----
c(1000, 100, 105, 98, 102),    // 0 - filler
c(2000, 102, 106, 101, 104),    // 1 - filler
c(3000, 106, 108, 103, 104),    // 2 - OB candidate (bearish candle: close < open)
c(4000, 104, 114, 103, 113),    // 3 - Bullish Displacement (body=9 > 7.5), preDisp=candle[2]
c(5000, 113, 118, 109, 116),    // 4 - afterDisp (low=109 > candle[2].high=108 → FVG)
⋮----
expect(result[0].type).toBe('bullish');  // Bullish Displacement → Bearish OB candidate → type='bullish' wait NO
// Actually: Bullish Displacement → OB type is 'bullish' (per code line 276: type: 'bullish')
// Wait, re-read the code. dispDirection === 'bullish' → obs.push({ type: 'bullish' })
// That's wrong conceptually but it's what the code does. Let me re-check...
// Code line 259: if (dispDirection === 'bullish') → push type: 'bullish'
// This represents the OB that forms before a bullish displacement
// The OB candle is bearish (opposite to displacement), but the OB TYPE is 'bullish'
// meaning it's used as a bullish entry zone (buy the dip into it)
⋮----
// Scenario: bullish candle (OB) → bearish displacement → bearish FVG
// ATR = 5. Displacement body must be > 7.5
// bearish FVG: preDispCandle.low > afterDisp.high
⋮----
c(1000, 100, 105, 98, 102),    // 0 - filler
c(2000, 102, 106, 101, 104),    // 1 - filler
c(3000, 100, 108, 100, 107),    // 2 - OB candidate (bullish: close > open)
c(4000, 107, 108, 97, 98),      // 3 - Bearish Displacement (body=|98-107|=9 > 7.5), preDisp=candle[2]
c(5000, 98, 99, 90, 92),        // 4 - afterDisp (high=99 < candle[2].low=100 → bearish FVG gap=1 > 0.5)
⋮----
c(3000, 106, 108, 103, 104),    // bearish candle
c(4000, 104, 110, 103, 108),    // body=4, < 1.5*10=15 (NOT displacement)
⋮----
c(3000, 105, 106, 105, 105),     // 2 - OB candidate: doji, range=1 < 0.3*10=3
c(4000, 105, 125, 104, 122),     // 3 - Big bullish displacement body=17 > 15
c(5000, 122, 130, 107, 128),     // 4 - afterDisp (low=107 > candle[2].high=106 → FVG=1>1)
⋮----
// Bearish displacement but afterDisp.high is NOT below preDispCandle.low
⋮----
c(3000, 100, 108, 100, 107),     // 2 - OB candidate (bullish)
c(4000, 107, 108, 97, 98),       // 3 - Bearish Displacement (body=9>7.5)
c(5000, 98, 101, 95, 97),        // 4 - afterDisp.high=101 > candle[2].low=100 → NO bearish FVG
⋮----
// Bullish displacement but afterDisp.low is NOT above preDispCandle.high
⋮----
c(3000, 106, 108, 103, 104),     // 2 - OB candidate (bearish)
c(4000, 104, 114, 103, 113),     // 3 - Bullish Displacement (body=9>7.5)
c(5000, 113, 118, 107, 116),     // 4 - afterDisp.low=107 < candle[2].high=108 → NO bullish FVG
⋮----
// OB is 2 candles before displacement (lookback=2)
⋮----
c(1000, 100, 105, 98, 102),      // 0 - filler
c(2000, 102, 106, 101, 104),      // 1 - filler
c(3000, 106, 110, 103, 104),      // 2 - OB candidate (bearish: close < open)
c(4000, 104, 108, 103, 107),      // 3 - same direction as displacement (bullish), skip
c(5000, 107, 118, 106, 117),      // 4 - Bullish Displacement (body=10>7.5), preDisp=candle[3]
c(6000, 117, 122, 109, 120),      // 5 - afterDisp (low=109 > candle[3].high=108 → FVG=1>0.5)
⋮----
expect(result[0].time).toBe(3000);  // OB is at candle[2], lookback=2 from displacement
⋮----
// All candles before displacement are same direction
⋮----
c(1000, 100, 105, 98, 102),      // 0 - bullish
c(2000, 102, 106, 101, 104),      // 1 - bullish
c(3000, 104, 108, 103, 107),      // 2 - bullish
c(4000, 107, 108, 106, 108),      // 3 - bullish (same as displacement direction)
c(5000, 108, 120, 107, 118),      // 4 - Bullish Displacement (body=10>7.5)
c(6000, 118, 125, 109, 122),      // 5 - afterDisp (low=109 > candle[3].high=108 → FVG)
⋮----
// OB at time 3000, sweep at time 3500 (within 2*15*60*1000 = 1,800,000ms)
⋮----
c(3000, 106, 108, 103, 104),     // 2 - OB candidate (bearish)
c(4000, 104, 114, 103, 113),     // 3 - Bullish Displacement (body=9>7.5)
c(5000, 113, 118, 109, 116),     // 4 - afterDisp (low=109 > candle[2].high=108 → FVG)
⋮----
// OB at time 3000, sweep at time 5000000 (way too far)
⋮----
// Two displacements referencing the same OB candle
⋮----
c(3000, 106, 110, 103, 104),       // 2 - OB candidate (bearish candle)
c(4000, 104, 116, 103, 115),       // 3 - Bullish Displacement 1 (body=11>7.5)
c(5000, 115, 120, 111, 118),       // 4 - afterDisp1 (low=111 > candle[2].high=110 → FVG)
// Second displacement referencing same OB won't happen in linear scan,
// but test dedup guard
⋮----
// Should have exactly 1 OB, not duplicated
⋮----
c(3000, 106, 108, 103, 104),      // 2 - OB candidate (bearish: close < open), top=108, bottom=103
c(4000, 104, 114, 103, 113),      // 3 - Bullish Displacement
c(5000, 113, 118, 109, 116),      // 4 - afterDisp (FVG ok)
c(6000, 116, 117, 107, 108),      // 5 - Price drops, low=107 <= OB top=108 → mitigated
⋮----
// Bullish OB (from bullish displacement): OB top=108, bottom=103, OBMT=105.5
// After displacement, a candle with body bottom < 105.5 → weakened
⋮----
c(3000, 106, 108, 103, 104),       // 2 - OB (bearish candle)
c(4000, 104, 114, 103, 113),       // 3 - Bullish Displacement
c(5000, 113, 118, 109, 116),       // 4 - afterDisp (FVG)
c(6000, 116, 117, 104, 105),       // 5 - bodyBottom=105, bodyTop=116 → for bullish OB, bodyBottom < 105.5 → weakened
⋮----
c(3000, 106, 108, 103, 104),       // 2 - OB (bearish candle), top=108, bottom=103
c(4000, 104, 114, 103, 113),       // 3 - Bullish Displacement
c(5000, 113, 118, 109, 116),       // 4 - afterDisp (FVG)
// No candles after that return to OB zone
⋮----
// ============= isOrderBlockMitigated Tests =============
⋮----
c(1000, 100, 108, 98, 105),     // 0 - OB at index 0
c(2000, 105, 115, 104, 114),    // 1 - displacement (skip)
c(3000, 114, 118, 107, 112),    // 2 - price low=107 <= OB top=108 → mitigated
⋮----
c(1000, 100, 108, 98, 105),     // 0 - OB at index 0
c(2000, 105, 115, 104, 114),    // 1 - displacement (skip)
c(3000, 114, 118, 110, 116),    // 2 - price low=110 > OB top=108 → not mitigated
⋮----
c(1000, 108, 112, 105, 106),    // 0 - OB at index 0 (bearish)
c(2000, 106, 107, 95, 96),      // 1 - displacement (skip)
c(3000, 96, 106, 94, 100),      // 2 - price high=106 >= OB bottom=105 → mitigated
⋮----
c(1000, 108, 112, 105, 106),    // 0 - OB at index 0
c(2000, 106, 107, 95, 96),      // 1 - displacement (skip)
c(3000, 96, 103, 94, 100),      // 2 - price high=103 < OB bottom=105 → not mitigated
⋮----
// OB at index 0, only 2 candles total → no candle at index 2
⋮----
// ============= isOrderBlockWeakened Tests =============
⋮----
// Bullish OB: OBMT = 103. Body bottom < 103 → weakened
⋮----
c(1000, 100, 108, 98, 105),     // 0 - OB
c(2000, 105, 115, 104, 114),    // 1 - displacement (skip)
c(3000, 110, 112, 101, 102),    // 2 - body: open=110, close=102 → bodyBottom=102 < 103
⋮----
// OBMT = 103. Body stays above 103
⋮----
c(3000, 106, 112, 104, 110),    // bodyBottom=106 > 103 → not weakened
⋮----
// Bearish OB: OBMT = 107. Body top > 107 → weakened
⋮----
c(1000, 110, 112, 105, 106),    // 0 - OB (bearish)
c(2000, 106, 107, 95, 96),      // 1 - displacement (skip)
c(3000, 100, 109, 99, 108),     // 2 - body: open=100, close=108 → bodyTop=108 > 107
⋮----
// OBMT = 107. Body top stays below 107
⋮----
c(3000, 100, 106, 99, 105),     // bodyTop=105 < 107 → not weakened
⋮----
// First candle after OB is fine, second weakens it
⋮----
c(1000, 100, 108, 98, 105),     // 0 - OB
c(2000, 105, 115, 104, 114),    // 1 - displacement (skip)
c(3000, 110, 112, 106, 110),    // 2 - bodyBottom=110 > OBMT=103 → fine
c(4000, 108, 109, 100, 101),    // 3 - bodyBottom=101 < OBMT=103 → weakened!
⋮----
// ============= Breaker Block Tests =============
⋮----
// Bullish OB at candle[1] (time=2000), top=108, bottom=100
// After OB, price closes below OB.bottom (100) → bearish Breaker
⋮----
c(1000, 95, 100, 93, 98),      // 0
c(2000, 98, 108, 100, 106),     // 1 - OB location
c(3000, 106, 112, 104, 110),    // 2 - price above OB (skip for break check, must be i >= obIndex+2)
c(4000, 110, 111, 95, 97),      // 3 - close=97 < OB.bottom=100 → BROKEN → bearish Breaker
⋮----
// Bearish OB at candle[1] (time=2000), top=112, bottom=105
// After OB, price closes above OB.top (112) → bullish Breaker
⋮----
c(1000, 110, 115, 108, 109),    // 0
c(2000, 109, 112, 105, 106),    // 1 - OB location
c(3000, 106, 108, 100, 102),    // 2 - price below OB
c(4000, 102, 115, 101, 114),    // 3 - close=114 > OB.top=112 → BROKEN → bullish Breaker
⋮----
c(2000, 98, 108, 100, 106),     // 1 - OB
c(3000, 106, 112, 104, 110),    // 2
c(4000, 110, 111, 95, 97),      // 3 - close=97 < bottom=100 → BROKEN
c(5000, 97, 101, 96, 99),       // 4 - high=101 >= bottom=100 → tested!
⋮----
c(2000, 109, 112, 105, 106),    // 1 - OB
c(3000, 106, 108, 100, 102),    // 2
c(4000, 102, 115, 101, 114),    // 3 - close=114 > top=112 → BROKEN
c(5000, 114, 115, 111, 113),    // 4 - low=111 <= top=112 → tested!
⋮----
c(2000, 98, 108, 100, 106),     // 1 - OB
c(3000, 106, 112, 104, 110),    // 2
c(4000, 110, 111, 95, 97),      // 3 - close=97 < bottom=100 → BROKEN
c(5000, 97, 98, 90, 92),        // 4 - high=98 < bottom=100 → NOT tested
⋮----
time: 9999,  // not in any candle's datetime
⋮----
time: 3000,  // last candle - 1 (needs >= length-2 to skip)
⋮----
c(3000, 106, 112, 104, 110),    // OB at index 2, length=3 → index >= 3-2=1 → not skipped
// Actually index 2 >= 3-2=1 is true, so it would try to check candles at i=4 which doesn't exist
⋮----
// OB at index 2, candles.length=3, obIndex(2) >= candles.length-2(1) → skip
⋮----
c(1000, 98, 108, 100, 106),     // 0 - OB
c(2000, 106, 112, 104, 110),    // 1
c(3000, 110, 115, 101, 112),    // 2 - close=112 > bottom=100, not broken
c(4000, 112, 118, 102, 115),    // 3 - close=115 > bottom=100, not broken
⋮----
c(1000, 98, 108, 100, 106),     // 0 - OB1
c(2000, 117, 120, 115, 116),    // 1 - OB2
c(3000, 116, 118, 95, 97),      // 2 - close=97 < OB1.bottom=100 → break OB1
c(4000, 97, 99, 90, 92),        // 3 - close=92 < OB2.bottom=115 → NOT break (close should be > top for bearish)
⋮----
// Only ob1 should produce a breaker (bullish OB broken down → bearish breaker)
⋮----
// ============= OTE Zone Tests =============
⋮----
// Swing High=200, Swing Low=100, range=100
// Bullish: from top down
// top = 200 - 100 * 0.618 = 138.2 (shallower)
// bottom = 200 - 100 * 0.79 = 121 (deeper)
// equilibrium = 200 - 100 * 0.5 = 150
⋮----
// Swing High=200, Swing Low=100, range=100
// Bearish: from bottom up
// bottom = 100 + 100 * 0.618 = 161.8 (shallower)
// top = 100 + 100 * 0.79 = 179 (deeper)
// equilibrium = 100 + 100 * 0.5 = 150
⋮----
// range = 10
⋮----
expect(ote.top).toBeCloseTo(110 - 10 * 0.618, 2);   // 103.82
expect(ote.bottom).toBeCloseTo(110 - 10 * 0.79, 2);  // 102.1
⋮----
expect(ote.top).toBeLessThan(ote.equilibrium);  // OTE is in discount zone
⋮----
expect(ote.bottom).toBeGreaterThan(ote.equilibrium);  // OTE is in premium zone
⋮----
// ============= isInOTEZone Tests =============
⋮----
// ote.top ≈ 138.2, ote.bottom ≈ 121
⋮----
// bearishOte.top ≈ 179, bearishOte.bottom ≈ 161.8
⋮----
// ============= isPriceInFavorableZone Tests =============
⋮----
// Equilibrium = (200 + 100) / 2 = 150
// Price 140 < 150 → discount → favorable for longs
⋮----
// Price 160 > 150 → premium → NOT favorable for longs
⋮----
// Price 160 > 150 → premium → favorable for shorts
⋮----
// Price 140 < 150 → discount → NOT favorable for shorts
⋮----
// Price 150 === equilibrium → NOT strictly discount
⋮----
// Price 150 === equilibrium → NOT strictly premium
⋮----
// ============= enrichOrderBlocksWithVolume Tests =============
⋮----
// Only 2 candles - not enough for SMA window of 20
⋮----
// When rVol can't be calculated, OB is returned as-is
⋮----
// ============= detectStructureBreak additional edge cases =============
⋮----
// 2 candles is not < 3, so it won't return null on first check
// But there may not be a valid break detected
⋮----
// With only 2 candles, the loop checks candle[1] vs candle[0]
// close at 104 < swing high 106, so no bullish break
⋮----
// close never exceeds 112
⋮----
// Two potential breaks: the scanner goes from newest to oldest
⋮----
c(3000, 104, 108, 103, 106),    // close=106, prev close=104 → if SH was at 105, break here
c(4000, 106, 112, 105, 111),    // close=111, prev close=106 → if SH was at 110, break here
⋮----
makeSwingHigh(110, 2000, 1),   // Higher High → BOS
⋮----
// candle[3]: close=111 > SH=110, prev close=106 <= 110 → bullish break
⋮----
// ============= Integration: Order Block + Breaker Block pipeline =============
⋮----
// Step 1: Create candles with bullish OB (bearish candle before bullish displacement)
// Step 2: After displacement, price reverses and closes below OB → Breaker
⋮----
c(1000, 100, 105, 98, 102),       // 0 - filler
c(2000, 102, 106, 101, 104),       // 1 - filler
c(3000, 106, 108, 103, 104),       // 2 - OB (bearish candle: close < open)
c(4000, 104, 114, 103, 113),       // 3 - Bullish Displacement (body=9>7.5)
c(5000, 113, 118, 109, 116),       // 4 - afterDisp (low=109 > candle[2].high=108 → FVG=1>0.5)
c(6000, 116, 117, 108, 110),       // 5 - price holds
c(7000, 110, 111, 95, 97),         // 6 - close=97 < OB.bottom=103 → OB broken!
c(8000, 97, 104, 96, 100),         // 7 - high=104 >= OB.bottom=103 → Breaker tested
⋮----
// Step 1: Detect OBs
⋮----
// Step 2: Detect Breakers from the OBs
⋮----
expect(breakers[0].type).toBe('bearish');       // Bullish OB broken → bearish Breaker
⋮----
expect(breakers[0].tested).toBe(true);           // candle[7] tested it
⋮----
// bearish OB from bearish displacement, then price breaks above OB.top
⋮----
c(1000, 100, 105, 98, 102),       // 0
c(2000, 102, 106, 101, 104),       // 1
c(3000, 100, 108, 100, 107),       // 2 - OB (bullish candle: close > open), bearish OB type
c(4000, 107, 108, 97, 98),         // 3 - Bearish Displacement (body=9>7.5)
c(5000, 98, 99, 90, 92),           // 4 - afterDisp (high=99 < candle[2].low=100 → bearish FVG)
c(6000, 92, 95, 88, 90),           // 5 - price continues down
c(7000, 90, 112, 89, 110),         // 6 - close=110 > OB.top=108 → OB broken! → bullish Breaker
⋮----
// ============= Additional coverage: bearish OB formedWithSweep, dedup, untested bullish Breaker =============
⋮----
// Bearish displacement → bearish OB type
// OB candle at time 3000, sweep at time 3500 (within 1,800,000ms)
⋮----
c(3000, 100, 108, 100, 107),     // 2 - OB (bullish candle: close > open)
c(4000, 107, 108, 97, 98),       // 3 - Bearish Displacement (body=9>7.5)
c(5000, 98, 99, 90, 92),         // 4 - afterDisp (high=99 < candle[2].low=100 → bearish FVG)
⋮----
// Bearish OB: top=108, bottom=100, OBMT=104
// After displacement, candle body top > 104 → weakened
⋮----
c(3000, 100, 108, 100, 107),      // 2 - OB (bullish candle)
c(4000, 107, 108, 97, 98),         // 3 - Bearish Displacement
c(5000, 98, 99, 90, 92),           // 4 - afterDisp (bearish FVG)
c(6000, 92, 95, 88, 90),           // 5 - bodyTop=95 < OBMT=104 → not weakened yet
c(7000, 90, 106, 89, 105),         // 6 - bodyTop=105 > OBMT=104 → weakened!
⋮----
// Bearish OB: top=108, bottom=100
// After displacement, a candle high >= 100 → mitigated
⋮----
c(3000, 100, 108, 100, 107),      // 2 - OB (bullish candle)
c(4000, 107, 108, 97, 98),         // 3 - Bearish Displacement
c(5000, 98, 99, 90, 92),           // 4 - afterDisp (bearish FVG)
c(6000, 92, 101, 88, 95),          // 5 - high=101 >= OB bottom=100 → mitigated
⋮----
// Bearish OB broken upward → bullish Breaker
// After break, price never drops back to ob.top → tested=false
⋮----
c(2000, 109, 112, 105, 106),    // 1 - OB
c(3000, 106, 108, 100, 102),    // 2
c(4000, 102, 118, 101, 115),    // 3 - close=115 > top=112 → BROKEN
c(5000, 115, 120, 114, 118),    // 4 - low=114 > top=112 → NOT tested
c(6000, 118, 125, 113, 122),    // 5 - low=113 > top=112 → NOT tested
⋮----
// Generate enough candles (>= smaWindow) so rVol can be calculated
⋮----
volume: 100 + i * 10,  // increasing volume
⋮----
time: 7000,  // matches candle at index 6
⋮----
// Should have volume enrichment fields
⋮----
// ============= detectOrderBlocks with zero/edge ATR =============
⋮----
// With ATR=0, displacement body > 1.5*0 = 0 → any body > 0 is displacement
// OB range >= 0.3*0 = 0 → any candle qualifies
// FVG gap > 0.1*0 = 0 → any non-zero gap qualifies
⋮----
c(3000, 104, 106, 103, 103),     // 2 - bearish candle (OB candidate)
c(4000, 103, 105, 102, 104),     // 3 - tiny bullish displacement (body=1>0)
c(5000, 104, 107, 103.1, 106),   // 4 - low=103.1 > candle[2].high=106 → NO FVG
⋮----
// With zero ATR, OB detection still works but FVG requirement may filter
⋮----
// This depends on whether FVG gap > 0 is met
// afterDisp.low=103.1, preDispCandle(candle[2]).high=106. 103.1 > 106? No → no FVG
⋮----
// Create many candles but set limit=1 so only the last few are checked
⋮----
c(1000, 100, 105, 98, 102),      // 0
c(2000, 102, 106, 101, 104),      // 1
c(3000, 106, 108, 103, 104),      // 2 - OB candidate (old, outside limit)
c(4000, 104, 114, 103, 113),      // 3 - Displacement
c(5000, 113, 118, 109, 116),      // 4
c(6000, 116, 120, 115, 119),      // 5
c(7000, 119, 122, 118, 121),      // 6
c(8000, 121, 125, 120, 124),      // 7
⋮----
// With limit=1, startIdx = max(2, 8-1-2) = max(2,5) = 5
// Only candles[5] through candles[6] checked as displacement candidates
⋮----
// Candles 5-6 are small bodies, unlikely to be displacement
```

## File: src/modules/structure-detector/reaction.ts
```typescript
/**
 * 价格反应检测模块
 * ICT 逆向工程第三层：监控价格进入 FVG/OB 后的实时表现
 * 
 * 三种反应类型：
 * - Rejection（拒绝）：长影线快速弹出
 * - Stalling（停顿）：小实体横盘积累
 * - Piercing（穿透）：收盘跌破/涨破区域
 */
⋮----
import type { Candle } from '../../types/index.js';
import type { Direction, FVG, OrderBlock } from './types.js';
⋮----
// ============= 类型定义 =============
⋮----
/** 反应类型 */
export type ReactionType =
    | 'rejection'   // 拒绝：长影线快速弹出
    | 'stalling'    // 停顿：小实体横盘积累（可能是陷阱）
    | 'piercing'    // 穿透：收盘跌破/涨破区域（失败）
    | 'pending';    // 尚未确认
⋮----
| 'rejection'   // 拒绝：长影线快速弹出
| 'stalling'    // 停顿：小实体横盘积累（可能是陷阱）
| 'piercing'    // 穿透：收盘跌破/涨破区域（失败）
| 'pending';    // 尚未确认
⋮----
/** 反应强度 */
export type ReactionStrength = 'strong' | 'moderate' | 'weak' | 'none';
⋮----
/** PD Array 区域定义 */
export interface PDArrayZone {
    type: 'FVG' | 'OB' | 'OTE';
    direction: Direction;  // bullish = 做多区域，bearish = 做空区域
    top: number;
    bottom: number;
    midpoint: number;
    time: number;          // 形成时间
}
⋮----
direction: Direction;  // bullish = 做多区域，bearish = 做空区域
⋮----
time: number;          // 形成时间
⋮----
/** 反应证据 */
export interface ReactionEvidence {
    // 用于 Rejection
    wickRatio?: number;              // 影线 / 实体 比例
    wickLength?: number;             // 影线长度 (ATR 倍数)
    closeAwayFromZone?: boolean;     // 收盘是否远离区域

    // 用于 Stalling
    smallBodyCount?: number;         // 连续小实体 K 线数量
    averageBodySize?: number;        // 平均实体大小 (ATR 倍数)
    driftDirection?: 'bullish' | 'bearish' | 'neutral';  // 停顿期间的漂移方向

    // 用于 Piercing
    piercingCandle?: {               // 穿透 K 线信息
        close: number;
        bodySize: number;
        direction: 'bullish' | 'bearish';
    };

    // 通用
    timeInZone?: number;             // 在区域内停留时间 (毫秒)
    timeInZoneMinutes?: number;      // 在区域内停留时间 (分钟)
    candlesInZone?: number;          // 在区域内的 K 线数量
    closeRelativeToZone?: 'above' | 'inside' | 'below';
}
⋮----
// 用于 Rejection
wickRatio?: number;              // 影线 / 实体 比例
wickLength?: number;             // 影线长度 (ATR 倍数)
closeAwayFromZone?: boolean;     // 收盘是否远离区域
⋮----
// 用于 Stalling
smallBodyCount?: number;         // 连续小实体 K 线数量
averageBodySize?: number;        // 平均实体大小 (ATR 倍数)
driftDirection?: 'bullish' | 'bearish' | 'neutral';  // 停顿期间的漂移方向
⋮----
// 用于 Piercing
piercingCandle?: {               // 穿透 K 线信息
⋮----
// 通用
timeInZone?: number;             // 在区域内停留时间 (毫秒)
timeInZoneMinutes?: number;      // 在区域内停留时间 (分钟)
candlesInZone?: number;          // 在区域内的 K 线数量
⋮----
/** PD Array 反应结果 */
export interface PDArrayReaction {
    // 被监控的区域
    zone: PDArrayZone;

    // 检测到的反应
    reactionType: ReactionType;
    reactionStrength: ReactionStrength;

    // 证据
    evidence: ReactionEvidence;

    // 是否符合预期（与区域方向一致）
    // 例如：Bullish FVG + Rejection = 符合预期（看涨信号）
    // 例如：Bullish FVG + Piercing = 不符合预期（看跌信号）
    matchesExpectation: boolean;

    // 交易建议
    tradeImplication: 'bullish' | 'bearish' | 'neutral' | 'trap_warning';

    // 人Readable 描述
    description: string;

    // 检测时间
    detectedAt: number;
}
⋮----
// 被监控的区域
⋮----
// 检测到的反应
⋮----
// 证据
⋮----
// 是否符合预期（与区域方向一致）
// 例如：Bullish FVG + Rejection = 符合预期（看涨信号）
// 例如：Bullish FVG + Piercing = 不符合预期（看跌信号）
⋮----
// 交易建议
⋮----
// 人Readable 描述
⋮----
// 检测时间
⋮----
// ============= 配置常量 =============
⋮----
const STALLING_MIN_CANDLES = 3;      // 判定 Stalling 的最少 K 线数
const SMALL_BODY_THRESHOLD = 0.3;    // 小实体阈值 (ATR 倍数)
const REJECTION_WICK_RATIO = 2.0;    // 拒绝影线比例阈值
const LONG_WICK_THRESHOLD = 0.8;     // 长影线阈值 (ATR 倍数)
⋮----
// ============= 主检测函数 =============
⋮----
/**
 * 检测价格对 PD Array (FVG/OB) 的反应
 * @param candles 近期 K 线数据（按时间升序）
 * @param zone 被监控的区域
 * @param atr ATR 值
 * @param candleIntervalMs K 线间隔（毫秒），如 M15 = 15 * 60 * 1000
 */
export function detectReaction(
    candles: Candle[],
    zone: PDArrayZone,
    atr: number,
    candleIntervalMs: number = 15 * 60 * 1000
): PDArrayReaction | null
⋮----
// 1. 找到价格首次进入 zone 的 K 线
⋮----
// 2. 获取进入 zone 后的所有 K 线
⋮----
// 3. 计算基础指标
⋮----
// 4. 分析最新的 K 线行为
⋮----
// 5. 检测具体反应类型
⋮----
// 5a. 检测 Piercing（优先级最高，因为这意味着失败）
⋮----
// 5b. 检测 Rejection
⋮----
// 5c. 检测 Stalling
⋮----
// 6. 判断是否符合预期
⋮----
// 7. 生成交易建议
⋮----
// 8. 生成描述
⋮----
// ============= 辅助函数 =============
⋮----
/**
 * 找到价格首次进入 zone 的 K 线索引
 */
/**
 * 找到价格最近一次进入 zone 的 K 线索引
 * 从最新的 K 线向前搜索，找到连续在区域内的时间段起点
 */
function findZoneEntryIndex(candles: Candle[], zone: PDArrayZone): number
⋮----
// 如果当前最新的 K 线都不在区域内，说明没有正在进行的反应（或者已经结束）
// 但为了检测 "刚离开" 的情况（如 rejection/piercing），我们允许最新 K 线在区域外
// 只要前一根在区域内即可。
⋮----
// 倒序查找：找到最近一个"不在区域内"的点，那么它是这次进入的前身
⋮----
// 找到了最近的一次"在外面"，那么 i+1 就是最近一次"进入"
⋮----
// 最新 K 线在区域外：
// 允许 "刚离开" 的场景 — 如果前一根在区域内，则以前一根为起点继续检测
⋮----
// 前一根在区域内，继续倒序搜索找到本次进入的起点
⋮----
return 0; // 从 i-1 到 0 全部在区域内
⋮----
// 最新 K 线和前一根都在区域外，确实没有正在进行的反应
⋮----
// 如果循环结束都没找到"在外面"的点，说明整个 provided candles 都在区域内
⋮----
/**
 * 获取收盘价相对于 zone 的位置
 */
function getClosePosition(close: number, zone: PDArrayZone): 'above' | 'inside' | 'below'
⋮----
/**
 * 检测 Piercing（穿透）
 */
function detectPiercing(
    candles: Candle[],
    zone: PDArrayZone,
    atr: number
):
⋮----
// Bullish Zone (做多区域) 被向下穿透 = 失败
⋮----
// Bearish Zone (做空区域) 被向上穿透 = 失败
⋮----
/**
 * 检测 Rejection（拒绝）
 */
function detectRejection(
    candles: Candle[],
    zone: PDArrayZone,
    atr: number
):
⋮----
// 计算影线
⋮----
// Bullish Zone: 期望下影线长（价格触底反弹）
⋮----
// 关键检查：下影线必须实际深入到区域内部
⋮----
const wickReachedZone = latest.low <= zone.top; // 至少触及区域顶部
⋮----
if (!wickReachedZone) return null; // 影线根本没到区域，不算 rejection
⋮----
// 如果影线深入区域内部，强度更高
⋮----
// Bearish Zone: 期望上影线长（价格触顶回落）
⋮----
// 关键检查：上影线必须实际深入到区域内部
⋮----
const wickReachedZone = latest.high >= zone.bottom; // 至少触及区域底部
⋮----
if (!wickReachedZone) return null; // 影线根本没到区域，不算 rejection
⋮----
// 如果影线深入区域内部，强度更高
⋮----
/**
 * 检测 Stalling（停顿）
 */
function detectStalling(
    candles: Candle[],
    zone: PDArrayZone,
    atr: number
):
⋮----
// 统计连续小实体 K 线
⋮----
break; // 连续性被打破
⋮----
// 分析停顿期间的收盘价趋势
⋮----
const firstClose = stallCandles[stallCandles.length - 1].close; // 最早的
const lastClose = stallCandles[0].close; // 最新的
⋮----
const driftThreshold = atr * 0.1; // 10% ATR 作为漂移阈值
⋮----
/**
 * 评估反应是否符合预期
 */
function evaluateExpectation(reactionType: ReactionType, _zoneDirection: Direction): boolean
⋮----
if (reactionType === 'stalling') return false; // Stalling 是中性的
⋮----
// Rejection 符合预期
⋮----
// Piercing 不符合预期
⋮----
/**
 * 生成交易建议
 */
function generateTradeImplication(
    reactionType: ReactionType,
    zoneDirection: Direction,
    _strength: ReactionStrength
): 'bullish' | 'bearish' | 'neutral' | 'trap_warning'
⋮----
// Rejection 意味着区域有效，按区域方向操作
⋮----
// Piercing 意味着区域失效，反向操作
⋮----
// Stalling 可能是陷阱
⋮----
/**
 * 生成人类可读描述
 */
function generateDescription(
    reactionType: ReactionType,
    strength: ReactionStrength,
    zone: PDArrayZone,
    evidence: ReactionEvidence
): string
⋮----
// ============= 便捷函数：从 FVG/OB 创建 Zone =============
⋮----
/**
 * 从 FVG 创建 PDArrayZone
 */
export function createZoneFromFVG(fvg: FVG): PDArrayZone
⋮----
/**
 * 从 OB 创建 PDArrayZone
 */
export function createZoneFromOB(ob: OrderBlock): PDArrayZone
⋮----
/**
 * 批量检测多个 zone 的反应
 */
export function detectAllReactions(
    candles: Candle[],
    fvgs: FVG[],
    obs: OrderBlock[],
    atr: number,
    candleIntervalMs: number = 15 * 60 * 1000
): PDArrayReaction[]
⋮----
// 检测 FVG 反应
⋮----
if (fvg.filled) continue; // 跳过已填补的
⋮----
// 检测 OB 反应
⋮----
if (ob.respected || ob.mitigated) continue; // 跳过已被测试或已消耗的
```

## File: src/modules/structure-detector/summary-generator.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { Candle } from '../../types/index.js';
import type { ConsolidationResult } from './consolidation.js';
import type {
    AdjustmentSetup,
    BreakerBlock,
    Direction,
    Displacement,
    FVG,
    LiquidityAnalysis,
    LiquidityLevel,
    OrderBlock,
    RouteReason,
    SignalScore,
    StrategyInsight,
    StrategyRoute,
    StructureAnalysis,
    StructureBreak,
    TimeframeStructure,
    TradeSetup,
    VolumeImbalance,
} from './types.js';
import { generateSummary, resolveMarketStateLines } from './summary-generator.js';
⋮----
// ---------------------------------------------------------------------------
// Helpers – build minimal valid objects, override per test
// ---------------------------------------------------------------------------
⋮----
function makeTimeframeStructure(
    overrides: Partial<TimeframeStructure> = {},
): TimeframeStructure
⋮----
function makeLiquidity(
    overrides: Partial<LiquidityAnalysis> = {},
): LiquidityAnalysis
⋮----
function makeScore(overrides: Partial<SignalScore> =
⋮----
function makeSetup(overrides: Partial<TradeSetup> =
⋮----
function makeConsolidation(
    overrides: Partial<ConsolidationResult> = {},
): ConsolidationResult
⋮----
function makeCandle(overrides: Partial<Candle> =
⋮----
function makeFVG(overrides: Partial<FVG> =
⋮----
function makeOrderBlock(overrides: Partial<OrderBlock> =
⋮----
function makeDisplacement(overrides: Partial<Displacement> =
⋮----
function makeStructureBreak(overrides: Partial<StructureBreak> =
⋮----
function makeLiquidityLevel(overrides: Partial<LiquidityLevel> =
⋮----
/** Default invocation: all minimal, no setup, no optional params */
function callGenerateSummary(overrides: {
    m5?: Partial<TimeframeStructure>;
    m15?: Partial<TimeframeStructure>;
    h1?: Partial<TimeframeStructure>;
    h4?: Partial<TimeframeStructure>;
    h4Candles?: Candle[];
    liquidity?: Partial<LiquidityAnalysis>;
    setup?: TradeSetup | undefined;
    currentPrice?: number;
    adjustments?: AdjustmentSetup[];
    diagnostics?: string[];
    trendContext?: StructureAnalysis['trendContext'];
    pdArrayReactions?: StructureAnalysis['pdArrayReactions'];
    consolidation?: StructureAnalysis['consolidation'];
    strategyInsights?: StrategyInsight[];
    profileContext?: { strategyProfile?: any; volatilityRatio?: number };
    strategyRoute?: StrategyRoute;
    routeReason?: RouteReason;
} =
⋮----
// ===========================================================================
// Tests
// ===========================================================================
⋮----
// ------------------------------------------------------------------
// Basic / minimal inputs
// ------------------------------------------------------------------
⋮----
// ------------------------------------------------------------------
// Bullish setup
// ------------------------------------------------------------------
⋮----
// ------------------------------------------------------------------
// Bearish setup
// ------------------------------------------------------------------
⋮----
// ------------------------------------------------------------------
// No setup – diagnostics
// ------------------------------------------------------------------
⋮----
// Count occurrences — should be exactly 1 in the diagnostics section
⋮----
// ------------------------------------------------------------------
// Adjustments
// ------------------------------------------------------------------
⋮----
// ------------------------------------------------------------------
// Consolidation section in generateSummary
// ------------------------------------------------------------------
⋮----
// ------------------------------------------------------------------
// Trend context
// ------------------------------------------------------------------
⋮----
// ------------------------------------------------------------------
// PD Array Reactions
// ------------------------------------------------------------------
⋮----
// bearish zone + bullish drift = trap
⋮----
// ------------------------------------------------------------------
// Strategy profile context
// ------------------------------------------------------------------
⋮----
// ------------------------------------------------------------------
// Strategy Insights
// ------------------------------------------------------------------
⋮----
// ------------------------------------------------------------------
// Liquidity section
// ------------------------------------------------------------------
⋮----
// ------------------------------------------------------------------
// Recent sweep
// ------------------------------------------------------------------
⋮----
// ------------------------------------------------------------------
// Displacement section
// ------------------------------------------------------------------
⋮----
// ------------------------------------------------------------------
// H4 key swings
// ------------------------------------------------------------------
⋮----
// Should not have 3rd level
⋮----
// ------------------------------------------------------------------
// Structure break section
// ------------------------------------------------------------------
⋮----
// ------------------------------------------------------------------
// Entry zones
// ------------------------------------------------------------------
⋮----
// ------------------------------------------------------------------
// Volume overview section
// ------------------------------------------------------------------
⋮----
// ------------------------------------------------------------------
// Signal scoring section
// ------------------------------------------------------------------
⋮----
// ------------------------------------------------------------------
// OB entry zone matching for setup
// ------------------------------------------------------------------
⋮----
// Should still display the OB from M15
⋮----
// ------------------------------------------------------------------
// Edge cases
// ------------------------------------------------------------------
⋮----
// Should not throw, should still show displacement detected
⋮----
// ------------------------------------------------------------------
// Diagnostics summarization (exercised via no-setup path)
// ------------------------------------------------------------------
⋮----
// Only 3 should pass through the detection bucket
```

## File: src/modules/structure-detector/trend.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { Candle } from '../../types/index.js';
import type { LiquidityAnalysis, LiquidityLevel } from './types.js';
import { calculateEMA, getLatestEMA, calculateEMASlope, analyzeTrendContext, TREND_EMA_PERIOD } from './trend.js';
⋮----
/**
 * Helper function to create Candle
 */
function c(datetime: number, open: number, high: number, low: number, close: number): Candle
⋮----
/**
 * Create candles with specific close prices
 */
function candlesWithCloses(closes: number[]): Candle[]
⋮----
// With 3 candles and period 5, should return SMA
⋮----
// All values should be the SMA (100+102+104)/3 = 102
⋮----
// With period 3, first EMA should be SMA of first 3 candles
⋮----
// First EMA value at index 2 (period-1)
⋮----
// Values before period-1 should use first EMA value
⋮----
// First EMA (at index 2) = SMA = (100 + 102 + 104) / 3 = 102
⋮----
// Second EMA (at index 3) = (close - prevEMA) * multiplier + prevEMA
// = (106 - 102) * 0.5 + 102 = 2 * 0.5 + 102 = 103
⋮----
// Third EMA (at index 4)
⋮----
// EMA should generally rise with rising prices
⋮----
// EMA should generally fall with falling prices
⋮----
// Create enough candles for TREND_EMA_PERIOD
⋮----
// Should not throw or produce NaN
⋮----
// Need at least slopeLookback + 1 values
⋮----
// Strong uptrend
⋮----
// Strong downtrend
⋮----
// Sideways market
⋮----
// Create enough candles for defaults
⋮----
// Should not throw with defaults
⋮----
expect(result.bias).toBe('bullish'); // Strong uptrend
⋮----
// Weak uptrend - small price changes relative to price
// The strength calculation is based on slope percentage, not absolute slope
⋮----
// Note: strength calculation may vary - just verify it's in valid range
⋮----
// Strong downtrend
⋮----
expect(result.strength).toBeGreaterThan(50); // Strong
⋮----
// Common EMA periods for trend: 20, 30, 50, 200
⋮----
// ============= analyzeTrendContext tests =============
⋮----
/**
 * Helper: create a minimal LiquidityAnalysis with all required fields empty
 */
function emptyLiquidity(): LiquidityAnalysis
⋮----
/**
 * Helper: create a LiquidityLevel
 */
function makeLiqLevel(
    type: LiquidityLevel['type'],
    price: number,
    status: LiquidityLevel['status'] = 'active'
): LiquidityLevel
⋮----
/**
 * Helper: generate HTF candles trending upward from a base price.
 * Produces enough candles for the EMA30 to stabilize (TREND_EMA_PERIOD + extra).
 */
function makeUpwardCandles(basePrice: number, count: number = TREND_EMA_PERIOD + 10, step: number = 2): Candle[]
⋮----
/**
 * Helper: generate HTF candles trending downward from a base price.
 */
function makeDownwardCandles(basePrice: number, count: number = TREND_EMA_PERIOD + 10, step: number = 2): Candle[]
⋮----
/**
 * Helper: generate flat/sideways candles around a price.
 */
function makeFlatCandles(price: number, count: number = TREND_EMA_PERIOD + 10): Candle[]
⋮----
// Current price is well above the lagging EMA
⋮----
// Current price is well below the lagging EMA
⋮----
// getLatestEMA returns null for empty candles -> trendEmaValue = currentPrice
⋮----
// Only 5 candles for EMA30 -> falls back to SMA
⋮----
// Price at 1.5%+ above EMA -> normalizedDistance = 1 -> emaWeight = 50
// bullishScore = 50, bearishScore = 0, diff = 50 > 40 -> strong
⋮----
const currentPrice = 102; // ~2% above EMA of 100
⋮----
const currentPrice = 98; // ~2% below EMA of 100
⋮----
// Price ~0.5% above EMA -> normalizedDistance = 0.5/1.5 ~0.33 -> emaWeight ~30
// bullishScore = 30, diff = 30 -> between 15 and 40 -> moderate
⋮----
const currentPrice = 100.5; // 0.5% above EMA
⋮----
const currentPrice = 99.5; // 0.5% below EMA
⋮----
// Price nearly at EMA -> absDistance tiny -> normalizedDistance ~0 -> emaWeight ~20
// bullishScore = 20, diff = 20 -> 20 > 15 so moderate bullish (barely)
// To get neutral we need diff < 15, which happens when price is extremely close
⋮----
const currentPrice = 100.01; // 0.01% above — emaWeight ~20.13
⋮----
// EMA weight at 0.01% distance: normalizedDistance = 0.01/1.5 ~= 0.007
// emaWeight = 20 + 30*0.007 ~= 20.2 -> diff = 20.2 -> moderate (barely above 15)
⋮----
// With such tiny distance, strength should be moderate at best
⋮----
const currentPrice = 104; // 4% above EMA
⋮----
// bullishScore from EMA above + bearishScore from overextension (20)
// distancePercent = 4% > 3%, so bearishScore += 20
⋮----
// Still bullish because emaWeight >= 50 (normalizedDistance capped at 1)
// bullish = 50, bearish = 20, diff = 30 -> bullish moderate
⋮----
const currentPrice = 96; // 4% below EMA
⋮----
// bearishScore from EMA below + bullishScore from overextension (20)
⋮----
const currentPrice = 106; // 6% above EMA, very overextended
⋮----
// Sellside much closer than buyside -> bearish +15
liquidity.pdl = makeLiqLevel('PDL', 105.5); // 0.5 away below
liquidity.pdh = makeLiqLevel('PDH', 115);   // 9 away above
⋮----
// bullish from EMA position (50) vs bearish from overextension (20) + sellside closer (15) = 35
// diff = 50 - 35 = 15 -> exactly at neutral boundary
⋮----
// PDH below current price should not appear as buyside
⋮----
const currentPrice = 100.1; // slightly above EMA -> mild bullish from EMA
⋮----
// Buyside 1 ATR away, sellside 5 ATR away -> buyside much closer
liquidity.pdh = makeLiqLevel('PDH', 102); // distance = 1.9
liquidity.pdl = makeLiqLevel('PDL', 90);  // distance = 10.1
⋮----
// buysideDistanceATR < sellsideDistanceATR * 0.7 -> +15 bullish
⋮----
const currentPrice = 99.9; // slightly below EMA -> mild bearish from EMA
⋮----
// Sellside 1 ATR away, buyside 5 ATR away -> sellside much closer
liquidity.pdl = makeLiqLevel('PDL', 98);  // distance = 1.9
liquidity.pdh = makeLiqLevel('PDH', 110); // distance = 10.1
⋮----
// Both equidistant -> no extra score for either side
liquidity.pdh = makeLiqLevel('PDH', 105); // distance = 5
liquidity.pdl = makeLiqLevel('PDL', 95);  // distance = 5
⋮----
// Reason should not mention either PDH or PDL as closer
⋮----
// No sellside levels
⋮----
// With only one side, the liquidity proximity comparison is skipped
⋮----
// No buyside levels
⋮----
// Price exactly at EMA -> emaWeight ~20 (normalizedDistance near 0)
// diff = 20 -> slightly above 15 threshold, but if price is exactly at EMA
// distancePercent = 0 -> emaWeight = 20
// When the diff is borderline, the bias depends on above/below
⋮----
// distancePercent = 0, normalizedDistance = 0, emaWeight = 20
// Price at EMA: price is not above (100 > 100 is false), so bearishScore = 20
// diff = 0 - 20 = -20 -> bearish moderate
// Actually since priceAboveTrendEma = (100 > 100) = false, bearishScore += 20
// This makes diff = -20, which is |diff| > 15 -> bearish moderate
⋮----
// Price 5% above EMA + sellside much closer -> can produce near-neutral
⋮----
const currentPrice = 105; // 5% above
⋮----
// Sellside very close -> bearish +15
liquidity.pdl = makeLiqLevel('PDL', 104.5); // 0.5 below current
liquidity.pdh = makeLiqLevel('PDH', 115);   // 10 above current
⋮----
// bullish from EMA above = 50 (normalizedDistance capped at 1)
// bearish from overextension = 20 (5% > 3%)
// bearish from sellside closer = 15
// bullish = 50, bearish = 35, diff = 15 -> exactly threshold for neutral
⋮----
// 4% above EMA -> overextension -> reason mentions distance
⋮----
// Verify all TrendContext fields exist
⋮----
// EMA should be ~100 for flat candles at 100
⋮----
// Buyside: PDH + PWH + EQH + H4_EQH all above
⋮----
// Sellside: PDL + PWL + EQL + H4_EQL all below
⋮----
// Nearest buyside should be H4_EQH at 102 (distance 2)
⋮----
// Nearest sellside should be H4_EQL at 98 (distance 2)
⋮----
// Explicitly remove h4 arrays by setting them to undefined-like state
// The code checks `if (liquidity.h4EqualHighs)` before iterating
⋮----
makeLiqLevel('EQH', 103, 'sweeping'), // inactive
makeLiqLevel('EQH', 107),              // active above
⋮----
makeLiqLevel('EQL', 97, 'sweeping'),   // inactive
makeLiqLevel('EQL', 93),                // active below
```

## File: src/modules/structure-detector/trend.ts
```typescript
/**
 * 趋势背景分析模块
 * 用于判断 HTF 趋势环境（ICT 逆向工程第一层）
 */
⋮----
import type { Candle } from '../../types/index.js';
import type { LiquidityAnalysis } from './types.js';
⋮----
// ============= EMA 计算 =============
⋮----
/**
 * 计算 EMA (指数移动平均线)
 * @param candles K 线数组
 * @param period 周期
 * @returns EMA 值数组（与 candles 对齐）
 */
export function calculateEMA(candles: Candle[], period: number): number[]
⋮----
// 数据不足，返回 SMA
⋮----
// 第一个值用 SMA
⋮----
// 填充前面的值
⋮----
ema[i] = ema[period - 1]; // 使用第一个 EMA 值填充
⋮----
// 计算后续 EMA
⋮----
/**
 * 获取最新的 EMA 值
 */
export function getLatestEMA(candles: Candle[], period: number): number | null
⋮----
// ============= EMA 斜率分析 =============
⋮----
/** EMA 斜率偏见 */
export type EMASlopeBias = 'bullish' | 'bearish' | 'flat';
⋮----
export interface EMASlopeResult {
    slope: number;              // 斜率值 (每根K线的变化量)
    slopePercent: number;       // 斜率百分比
    bias: EMASlopeBias;         // 方向偏见
    strength: number;           // 强度 (0-100)
    reason: string;             // 判定原因
}
⋮----
slope: number;              // 斜率值 (每根K线的变化量)
slopePercent: number;       // 斜率百分比
bias: EMASlopeBias;         // 方向偏见
strength: number;           // 强度 (0-100)
reason: string;             // 判定原因
⋮----
/**
 * 计算 EMA 斜率
 * @param candles K 线数组
 * @param period EMA 周期 (默认 20)
 * @param slopeLookback 斜率计算回溯根数 (默认 3)
 * @returns 斜率分析结果
 */
export function calculateEMASlope(
    candles: Candle[],
    period: number = 20,
    slopeLookback: number = 3
): EMASlopeResult
⋮----
// 计算最近 N 根 K 线的 EMA 变化
⋮----
const slope = (newEMA - oldEMA) / slopeLookback;  // 每根 K 线的平均变化
const slopePercent = (slope / oldEMA) * 100;      // 百分比变化
⋮----
// 判定偏见和强度（默认按 EMA20）
const FLAT_THRESHOLD = 0.03;  // 0.03% 以下视为平坦
const STRONG_THRESHOLD = 0.1; // 0.1% 以上视为强趋势
⋮----
// ============= 趋势背景分析 =============
⋮----
/** 趋势偏见 */
export type TrendBias = 'bullish' | 'bearish' | 'neutral';
⋮----
/** 偏见强度 */
export type BiasStrength = 'strong' | 'moderate' | 'weak';
⋮----
/** 趋势背景 */
export interface TrendContext {
    // EMA 关系
    priceAboveTrendEma: boolean;
    trendEmaValue: number;

    // 距离
    distanceToTrendEma: number;        // 绝对值距离
    distanceToTrendEmaPercent: number; // 百分比距离

    // 最近流动性目标
    nearestBuysideLiquidity?: {
        type: string;
        price: number;
        distance: number;
    };
    nearestSellsideLiquidity?: {
        type: string;
        price: number;
        distance: number;
    };

    // 综合判断
    bias: TrendBias;
    biasStrength: BiasStrength;
    biasReason: string;
}
⋮----
// EMA 关系
⋮----
// 距离
distanceToTrendEma: number;        // 绝对值距离
distanceToTrendEmaPercent: number; // 百分比距离
⋮----
// 最近流动性目标
⋮----
// 综合判断
⋮----
/**
 * 分析趋势背景
 * @param htfCandles 高时间框架 K 线（如 4H）
 * @param currentPrice 当前价格
 * @param liquidity 流动性分析结果
 * @param atr ATR 值（用于判断距离显著性）
 */
export function analyzeTrendContext(
    htfCandles: Candle[],
    currentPrice: number,
    liquidity: LiquidityAnalysis,
    atr: number
): TrendContext
⋮----
// 1. 计算趋势 EMA
⋮----
// 2. 计算距离
⋮----
// 3. 找最近的流动性目标
⋮----
// 4. 综合判断偏见
⋮----
/**
 * 收集上方流动性（Buyside Liquidity）
 */
function collectBuysideLiquidity(
    liquidity: LiquidityAnalysis,
    currentPrice: number
): Array<
⋮----
// PDH
⋮----
// PWH
⋮----
// EQH
⋮----
// H4 EQH (High Importance)
⋮----
// 按距离排序
⋮----
/**
 * 收集下方流动性（Sellside Liquidity）
 */
function collectSellsideLiquidity(
    liquidity: LiquidityAnalysis,
    currentPrice: number
): Array<
⋮----
// PDL
⋮----
// PWL
⋮----
// EQL
⋮----
// H4 EQL (High Importance)
⋮----
// 按距离排序
⋮----
/**
 * 综合判断趋势偏见
 */
function determineBias(
    priceAboveTrendEma: boolean,
    distancePercent: number,
    nearestBuyside?: { type: string; price: number; distance: number },
    nearestSellside?: { type: string; price: number; distance: number },
    atr?: number,
    currentPrice?: number
):
⋮----
// 1. EMA 位置权重最大
⋮----
const normalizedDistance = Math.min(1, absDistance / 1.5); // 距离 1.5% 以上视为极端
const emaWeight = 20 + 30 * normalizedDistance; // 20-50 动态权重
⋮----
// 2. 距离 EMA 的程度
⋮----
// 离 EMA 太远，可能过度延伸，需要回调
⋮----
bearishScore += 20; // 过度上涨，回调可能
⋮----
bullishScore += 20; // 过度下跌，反弹可能
⋮----
// 3. 流动性目标距离
⋮----
// 哪边更近，价格更可能先去那边
⋮----
// 4. 计算最终偏见
```

## File: src/runtime/node/local-cloud-logger.test.ts
```typescript
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { afterEach, describe, expect, it } from 'vitest';
import { LocalCloudLogger } from './local-cloud-logger.js';
import { openDatabase } from './sqlite.js';
⋮----
class SlowLocalCloudLogger extends LocalCloudLogger
⋮----
override async uploadImage(base64: string, mimeType: string, prefix?: string): Promise<string | null>
```

## File: src/runtime/node/local-cloud-logger.ts
```typescript
import fs from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';
import type { CloudLoggerLike, CloudLogList, CloudLogFile, CloudLogKey } from '../../utils/cloud-logger-types.js';
import type { LogEntry } from '../../utils/log-entry.js';
import type { SqliteDatabase } from './sqlite.js';
import { logger } from '../../utils/index.js';
import { extractSymbolFromPrompt, isPlaceholderSymbol, normalizeSymbol } from '../../utils/symbol-extractor.js';
⋮----
const MAX_TIMESTAMP = 9999999999999; // Year 2286
⋮----
interface LocalCloudLoggerConfig {
    db: SqliteDatabase;
    baseDir: string;
}
⋮----
export class LocalCloudLogger implements CloudLoggerLike
⋮----
constructor(config: LocalCloudLoggerConfig)
⋮----
async uploadImage(base64: string, mimeType: string, prefix: string = 'images'): Promise<string | null>
⋮----
async saveLog(data: {
        symbol: string;
        traceId?: string;
        type: string;
        prompt: string;
        response: any;
        images: Array<{ base64: string; mimeType: string }>;
        meta?: {
            provider?: string;
            model?: string;
        };
}): Promise<string>
⋮----
async listLogs(limit: number = 20, _cursor?: string): Promise<CloudLogList>
⋮----
// Backward compatibility: previously some logs were saved with placeholder symbols (QW/DS).
// Recover symbol from prompt so Cloud Logs list stays useful for replay.
⋮----
// ignore parse failures and keep original symbol
⋮----
async getLog(key: string): Promise<LogEntry | null>
⋮----
async getFile(key: string): Promise<CloudLogFile>
⋮----
function cloneForStorage<T>(value: T): T
⋮----
function ensureDir(dirPath: string)
⋮----
function guessContentType(filePath: string): string
```

## File: src/runtime/node/server.ts
```typescript
import path from 'node:path';
import fs from 'node:fs';
import { Readable } from 'node:stream';
import { createRequire } from 'node:module';
import { serve } from '@hono/node-server';
⋮----
import { createApiApp } from '../../http/api.js';
import type { Env } from '../../http/env.js';
import { openDatabase } from './sqlite.js';
import { SqliteKv } from './sqlite-kv.js';
import { SqliteDecisionLogStore } from './decision-log-store.js';
import { SqliteMarketSnapshotStore } from './market-snapshot-store.js';
import { SqliteTradeLogStore } from './trade-log-store.js';
import { LocalCloudLogger } from './local-cloud-logger.js';
import { TelegramNotifier } from './telegram-notifier.js';
import { resolveShadowRuntimeConfig } from './shadow-runtime.js';
import {
    createDefaultLaneStrategyRegistry,
    resolveLaneStrategyFactory,
    resolveLaneStrategySelection,
    resolveStackConfigOverrides,
    resolveStackVariantConfig,
} from './lane-strategy.js';
import {
    withExperimentDecisionStore,
    withExperimentTradeStore,
    withLaneDecisionStore,
    withLaneTradeStore,
} from './experiment-log-stores.js';
import { LiquidationWatcherService } from '../../services/liquidation-watcher.js';
import { OrderFillWatcherService } from '../../services/order-fill-watcher.js';
import { createScheduler } from '../../controller/scheduler.js';
import { logger } from '../../utils/index.js';
// Ensure WebSocket is available in Node
⋮----
// Champion and shadow use independent concurrency guards so that a slow or
// stalled shadow tick never causes the next champion tick to be skipped.
⋮----
const runScheduler = (cronExpr: string): void =>
⋮----
// 单一 1 分钟调度，具体执行由 Scheduler 内部分流
⋮----
function isApiPath(pathname: string): boolean
⋮----
async function serveStatic(req: Request): Promise<Response | null>
⋮----
function fileResponse(filePath: string, headOnly: boolean): Response
⋮----
function guessContentType(filePath: string): string
⋮----
function resolveAnalysisProvider(raw: string | undefined): 'deepseek' | 'qwen' | 'zai'
⋮----
function resolveVisionProvider(raw: string | undefined): 'zai' | 'gemini'
```

## File: src/tests/full-scan-algo.ts
```typescript
import { createStructureDetector } from '../modules/structure-detector/index.js';
⋮----
/**
 * 全量动态扫描运行器
 * 模拟时间推移，逐根 K 线检测信号
 */
async function main()
⋮----
h1Candles: [], // Placeholder
⋮----
// 1. 记录所有扫损
⋮----
// 2. 调试探测到的 EQL
⋮----
// 只在状态变化或第一次发现时打印，或者简单点每根都打 (这里选择每根都打方便定位)
// console.log(`[DEBUG] 探测到 EQL: ${nearbyEQL.price.toFixed(2)} (Status: ${nearbyEQL.status})`);
⋮----
// 3. 记录 A/B 级信号
```

## File: src/controller/m15-reversal-close-guard.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { evaluateM15ReverseCloseGuard } from './m15-reversal-close-guard.js';
```

## File: src/controller/scheduler-risk-caps.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { resolveOrderFillWatcherAddress, resolveSchedulerRiskCaps } from './scheduler.js';
```

## File: src/controller/scheduler-runtime-helpers.test.ts
```typescript
import { describe, expect, it, vi, beforeEach } from 'vitest';
import type { MultiTimeframeData, TradingState, CandleWithIndicators } from '../types/index.js';
import type { StructureAnalysis, TimeframeStructure, LiquidityAnalysis } from '../modules/structure-detector/types.js';
import {
    resolveOpenVisionRiskTriggerReason,
    enforcePendingTimeoutOnAdaptiveSkip,
    fetchAndLogMarketData,
    cacheSwingPoints,
    analyzeMarketStructure,
    recordManagedAISnapshot,
    runAIAnalysis,
    handleSkipAI,
    loadAndReconcileState,
    startOrderFillWatcher,
    handleSniperEntry,
} from './scheduler-runtime-helpers.js';
⋮----
// ─── Minimal factory helpers ────────────────────────────────────────────────
⋮----
function buildMinimalTimeframeStructure(overrides: Partial<TimeframeStructure> =
⋮----
function buildMinimalLiquidityAnalysis(overrides: Partial<LiquidityAnalysis> =
⋮----
function buildMinimalStructureAnalysis(overrides: Partial<StructureAnalysis> =
⋮----
function buildCandle(overrides: Partial<CandleWithIndicators> =
⋮----
function buildMinimalMarketData(overrides: Partial<MultiTimeframeData> =
⋮----
function buildMinimalTradingState(overrides: Partial<TradingState> =
⋮----
// ─── resolveOpenVisionRiskTriggerReason ─────────────────────────────────────
⋮----
// ─── enforcePendingTimeoutOnAdaptiveSkip ────────────────────────────────────
⋮----
function buildMocks()
⋮----
// no activeTrade
⋮----
// Should not throw
⋮----
// resetToIdle should NOT have been called because error was thrown before that
⋮----
// No throw expected
⋮----
// ─── fetchAndLogMarketData ──────────────────────────────────────────────────
⋮----
// ─── cacheSwingPoints ───────────────────────────────────────────────────────
⋮----
// detectSwingPoints needs at least 2*n+1 candles (n=5 → 11 candles)
⋮----
high: 50000 + (i === 7 ? 500 : 0),  // peak at index 7
low: 49000 - (i === 3 ? 500 : 0),    // trough at index 3
⋮----
// If swings are detected they should be cached
⋮----
const candles = [buildCandle(), buildCandle()]; // too few for n=5
⋮----
// ─── analyzeMarketStructure ─────────────────────────────────────────────────
⋮----
function buildAnalyzeMocks(structureResult?: Partial<StructureAnalysis>)
⋮----
expiresAt: Date.now() + 3600000, // 1 hour in future
⋮----
expiresAt: Date.now() - 1000, // expired
⋮----
expiresAt: Date.now() + 3600000, // still active
⋮----
expiresAt: Date.now() - 1000, // expired
⋮----
// ─── recordManagedAISnapshot ────────────────────────────────────────────────
⋮----
// ─── runAIAnalysis ──────────────────────────────────────────────────────────
⋮----
function buildAIMocks()
⋮----
// ─── handleSkipAI ───────────────────────────────────────────────────────────
⋮----
function buildSkipAIMocks()
⋮----
// Use a very specific minute to avoid heartbeat path
⋮----
const mockDate = new originalDate(2026, 0, 1, 0, 15, 0); // minute=15 → not heartbeat time
⋮----
// Build a structure analysis that produces a known signature
⋮----
// First call to establish the signature
vi.setSystemTime(new Date(2026, 0, 1, 0, 15, 0)); // minute=15
⋮----
// First call should log
⋮----
// Now call again with same state (which now has the signature set)
⋮----
// Second call should skip WAIT log since signature matches
⋮----
// minute=5 → isHeartbeatTime = true
⋮----
// sendHeartbeat should call analyzeHeartbeat
⋮----
// Should save heartbeat history
⋮----
// Should update state with watched levels
⋮----
// minute=35 → isHeartbeatTime = true
⋮----
// minute=20 → isHeartbeatTime = false
⋮----
// Heartbeat was attempted but failed — no history saved
⋮----
// History should still be saved
⋮----
// saveState may be called for the signature update, but the heartbeat
// branch itself should NOT call saveState for empty watched levels.
// The second saveState call is from the signature update, so check
// heartbeat did not add watched levels to state
⋮----
// Should not throw
⋮----
// Should be max 5 entries (new one prepended, oldest dropped)
⋮----
expect(savedHistory[0].update).toBe('All quiet'); // new entry first
⋮----
// ─── loadAndReconcileState ──────────────────────────────────────────────────
⋮----
// ─── startOrderFillWatcher ──────────────────────────────────────────────────
⋮----
// Should not throw
⋮----
// ─── handleSniperEntry ──────────────────────────────────────────────────────
⋮----
// Should pass undefined as the grade parameter
```

## File: src/controller/scheduler-runtime-helpers.ts
```typescript
import type { MultiTimeframeData, TradingState } from "../types/index.js";
import type { StructureAnalysis } from "../modules/structure-detector/index.js";
import { createStructureDetector, detectSwingPoints, isValidEntryFVG } from "../modules/structure-detector/index.js";
import { logger } from "../utils/index.js";
import type { DataFetcher } from "../modules/data-fetcher/index.js";
import type { MarketDataFetchMode } from "../modules/data-fetcher/index.js";
import type { Analyzer } from "../modules/analyzer/index.js";
import type { OrderProcessor } from "../modules/order-processor/index.js";
import type { IExecutor } from "../modules/executor/index.js";
import type { CachedSwingPoint, StateStore } from "../modules/state-store/index.js";
import { buildChartIndicators } from "./chart-builder.js";
import { buildStructureInfo } from "./utils.js";
import type { PositionManager } from "../modules/position-manager/index.js";
import type { StateHandlers } from "./state-handlers.js";
import type { ManagedAIPolling } from "./managed-ai-polling.js";
import type { SniperModeHandler } from "./sniper-mode.js";
import type { MarketSnapshotStore } from "../modules/state-store/market-snapshot-store.js";
import { recordAnalysisMarketSnapshot, resolveMarketSnapshotTraceId } from "./market-snapshot-recording.js";
⋮----
type AccountInfo = { balance: number; positions: any[] };
type StructureDetector = ReturnType<typeof createStructureDetector>;
⋮----
export async function enforcePendingTimeoutOnAdaptiveSkip(input: {
  symbol: string;
  state: TradingState;
  currentPrice: number;
  structureAnalysis: StructureAnalysis;
  orderProcessor: OrderProcessor;
  executor: IExecutor;
  stateStore: StateStore;
}): Promise<void>
⋮----
export async function fetchAndLogMarketData(
  symbol: string,
  dataFetcher: DataFetcher,
  options: { mode?: MarketDataFetchMode } = {},
): Promise<MultiTimeframeData>
⋮----
export async function cacheSwingPoints(
  symbol: string,
  marketData: MultiTimeframeData,
  stateStore: StateStore,
): Promise<void>
⋮----
export async function analyzeMarketStructure(input: {
  symbol: string;
  marketData: MultiTimeframeData;
  accountInfo: AccountInfo;
  reconciledState: TradingState;
  stateStore: StateStore;
  positionManager: PositionManager;
  structureDetector: StructureDetector;
  squeezeConsecutiveCycleCount?: number;
}): Promise<StructureAnalysis>
⋮----
export async function recordManagedAISnapshot(input: {
  symbol: string;
  structureAnalysis: StructureAnalysis;
  currentPrice: number;
  stateStore: StateStore;
  managedAIPolling: ManagedAIPolling;
}): Promise<void>
⋮----
export async function runAIAnalysis(input: {
  symbol: string;
  reconciledState: TradingState;
  structureAnalysis: StructureAnalysis;
  marketData: MultiTimeframeData;
  accountBalance: number;
  signalGrade: string | undefined;
  openVisionRiskReason?: string;
  dataFetcher: DataFetcher;
  analyzer: Analyzer;
  stateHandlers: StateHandlers;
  marketSnapshotStore?: MarketSnapshotStore;
}): Promise<boolean>
⋮----
export function resolveOpenVisionRiskTriggerReason(
  state: TradingState,
  managedPollReason: string,
): string | undefined
⋮----
async function sendHeartbeat(input: {
  symbol: string;
  currentPrice: number;
  structureAnalysis: StructureAnalysis;
  state: TradingState;
  analyzer: Analyzer;
  stateStore: StateStore;
}): Promise<void>
⋮----
export async function handleSkipAI(input: {
  symbol: string;
  signalGrade: string | undefined;
  structureAnalysis: StructureAnalysis;
  reconciledState: TradingState;
  marketData: MultiTimeframeData;
  analyzer: Analyzer;
  stateStore: StateStore;
  marketSnapshotStore?: MarketSnapshotStore;
}): Promise<void>
⋮----
function buildSkipStructureSignature(structureAnalysis: StructureAnalysis, signalGrade?: string): string
⋮----
// ─── 状态加载与自愈 ───────────────────────────────────────────────────────────
⋮----
export async function loadAndReconcileState(
  symbol: string,
  accountInfo: { balance: number; positions: any[] },
  stateStore: StateStore,
  positionManager: PositionManager,
): Promise<TradingState>
⋮----
// ─── 订单成交监控启动 ────────────────────────────────────────────────────────
⋮----
export async function startOrderFillWatcher(
  origin: string,
  userAddress: string,
  orderFillWatcherStub: { fetch: (request: Request) => Promise<Response> },
): Promise<void>
⋮----
// ─── SNIPER 入场委托 ─────────────────────────────────────────────────────────
⋮----
export async function handleSniperEntry(
  setup: any,
  signalGrade: string | undefined,
  symbol: string,
  m15Displacement: any,
  structureAnalysis: StructureAnalysis,
  marketData: MultiTimeframeData,
  sniperHandler: SniperModeHandler,
): Promise<void>
```

## File: src/controller/turtle-soup-instant-entry.test.ts
```typescript
import { describe, expect, it, vi } from 'vitest';
import { handleTurtleSoupInstantEntry } from './turtle-soup-instant-entry.js';
import { createInitialState } from '../types/index.js';
⋮----
function buildDeps(overrides?: {
    entryPrice?: number;
    stopLoss?: number;
    size?: number;
    maxOrderNotionalUsd?: number | undefined;
})
⋮----
stopLoss: 101, // tight stop distance
⋮----
stopLoss: 130, // bypass historical stop clamp path
size: 10, // $1000 notional
```

## File: src/controller/turtle-soup-instant-entry.ts
```typescript
/**
 * 海龟汤即时入场模块
 * 使用微距限价单模拟市价成交，在 IDLE 状态下直接执行海龟汤策略
 */
⋮----
import type { MultiTimeframeData, TradingState, IdleAnalysisResponse } from "../types/index.js";
import type { StructureAnalysis } from "../modules/structure-detector/index.js";
import type { IExecutor } from "../modules/executor/index.js";
import type { StateStore } from "../modules/state-store/index.js";
import type { OrderProcessor } from "../modules/order-processor/index.js";
import type { RiskManager } from "../modules/risk-manager/index.js";
import { logger } from "../utils/index.js";
import { buildStructureInfo } from "./utils.js";
import { registerOrderWatch } from "./order-fill-watcher-client.js";
import {
  applyTurtleEntryRiskPolicy,
} from "./turtle-entry-policy.js";
import { shouldApplyPostStopLossCooldown } from "../utils/stop-loss-cooldown.js";
⋮----
type OrderParams = {
  direction: "LONG" | "SHORT";
  entryPrice: number;
  stopLoss: number;
  takeProfitLevels: { tp1: number; tp2: number; tp3: number };
  tpDistribution?: { tp1: number; tp2: number; tp3: number };
  positionSize: number;
  entryLogic: string;
};
⋮----
export async function handleTurtleSoupInstantEntry(deps: {
  state: TradingState;
  setup: any;
  structureAnalysis: StructureAnalysis;
  marketData: MultiTimeframeData;
  accountInfo: { balance: number };
  executor: IExecutor;
  stateStore: StateStore;
  orderProcessor: OrderProcessor;
  riskManager: RiskManager;
  maxRiskPercent: number;
orderFillWatcherStub?:
⋮----
const bufferPct = 0.0005; // 5 bps 微距限价
⋮----
expiresAt: Date.now() + 30 * 60 * 1000, // 30 分钟有效
```

## File: src/modules/executor/index.ts
```typescript
/**
 * Hyperliquid Executor Module
 * Handles order execution using @nktkas/hyperliquid SDK
 */
⋮----
import { privateKeyToAccount } from 'viem/accounts';
import { ExchangeClient, InfoClient, HttpTransport } from '@nktkas/hyperliquid';
import { logger } from '../../utils/index.js';
import type {
    IExecutor,
    GenericOrderParams,
    GenericOrderResult,
    GenericStopParams,
    GenericAccountInfo,
    GenericPosition,
    GenericCandle,
    GenericOpenOrder,
    GenericFill,
} from './types.js';
import { deriveAggressiveClosePrice } from './close-price.js';
import { TigerAdapterExecutor, type TigerAdapterConfig } from './tiger-adapter.js';
import { RouterExecutor } from './router-executor.js';
⋮----
interface HyperliquidConfig {
    privateKey: string;
    testnet?: boolean;
    vaultAddress?: string; // Sub-account address for trading
}
⋮----
vaultAddress?: string; // Sub-account address for trading
⋮----
type Position = GenericPosition & {
    markPrice: number;
    liquidationPrice: number;
    returnOnEquity: number;
};
⋮----
type AccountInfo = GenericAccountInfo & {
    positions: Position[];
};
⋮----
/**
 * Hyperliquid API Client
 * Wraps @nktkas/hyperliquid SDK
 */
export class HyperliquidClient implements IExecutor
⋮----
private vaultAddress?: string; // Sub-account address for trading
⋮----
constructor(config: HyperliquidConfig)
⋮----
// Clean and validate key
⋮----
// Basic validation, strict length check handled by viem/SDK usually but good to keep
// We relax the strict check here to let the SDK/viem handle it or fail gracefully,
// but we successfully debugged it was an address before.
// Let's assume the user put the correct key now.
⋮----
// Disable gzip/deflate compression to avoid runtime/proxy decoding issues
// The SDK default is "gzip, deflate, br, zstd"; we force identity for compatibility
⋮----
// Set defaultVaultAddress for sub-account trading if configured
⋮----
/**
     * Get metadata (Symbol -> Index/Decimals map)
     * Fetches both Perps and Spot universes to support all symbol types
     */
async getMeta(): Promise<void>
⋮----
// 1. 获取永续合约 (Perps) universe
⋮----
// 2. 获取现货/特殊市场 (Spot) universe
// 使用原生 fetch 调用 spotMeta API
⋮----
// Spot 市场的 index 需要加上一个 offset (通常是 10000)
⋮----
// 只添加尚未存在的符号 (避免覆盖 Perps 符号)
⋮----
// Spot 默认使用 8 位小数
⋮----
async getPosition(symbol: string): Promise<GenericPosition | undefined>
⋮----
/**
     * Get asset index
     */
private async getAssetIndex(symbol: string): Promise<number>
⋮----
await this.getMeta(); // Retry once
⋮----
/**
     * Get asset decimals
     */
private getAssetDecimals(symbol: string): number
⋮----
return meta ? meta.szDecimals : 5; // Default to 5 if unknown
⋮----
/**
     * Format price according to Hyperliquid API rules
     * Rules:
     * 1. Max 5 significant figures
     * 2. Max decimal places = MAX_DECIMALS - szDecimals (6 for perps)
     * 3. Remove trailing zeros
     * 4. Integer prices are always valid
     */
private formatPrice(price: number, szDecimals: number): string
⋮----
const MAX_DECIMALS = 6; // For perpetual markets
⋮----
// Handle integer prices (always valid)
⋮----
// Calculate max decimal places based on szDecimals
⋮----
// Convert to string to count significant figures
⋮----
// Count significant figures (excluding leading zeros)
⋮----
// Apply significant figures limit
⋮----
// Use toPrecision for sig figs, but respect decimal limit
⋮----
// Apply decimal places limit
⋮----
// Remove trailing zeros after decimal point
⋮----
/**
     * Execute parsing operation with retry logic
     */
private async executeWithRetry<T>(
        operation: () => Promise<T>,
        maxRetries: number = 3,
        baseDelay: number = 1000
): Promise<T>
⋮----
// Check for rate limit (429) or server errors (5xx)
// Hyperliquid SDK might return error string or object, checking includes '429' is safest
⋮----
const delay = baseDelay * Math.pow(2, i); // Exponential backoff: 1s, 2s, 4s
⋮----
throw error; // Rethrow other errors (e.g., auth failed, invalid params) immediately
⋮----
/**
     * Get account info (balances and positions)
     * Uses vaultAddress (sub-account) if configured, otherwise main wallet
     */
async getAccountInfo(): Promise<AccountInfo>
⋮----
// Use sub-account address if configured, otherwise main wallet
⋮----
// withdrawable 存在于 API 响应中但 SDK 类型定义不完整
⋮----
// 如果余额为 0，记录警告帮助诊断
⋮----
balance: withdrawable, // 使用可用保证金而不是账户总价值
⋮----
/**
     * Get open orders
     * Uses vaultAddress (sub-account) if configured, otherwise main wallet
     */
async getOpenOrders(symbol?: string): Promise<GenericOpenOrder[]>
⋮----
// Prefer frontendOpenOrders: it includes triggerCondition/isTrigger/orderType,
// while openOrders may omit trigger metadata for stop orders.
⋮----
// Some trigger orders expose tpsl=sl/tp but omit reduceOnly field.
// Infer reduceOnly for protective orders to keep SL guards stable.
⋮----
/**
     * Query order status by OID
     */
async queryOrder(oid: number): Promise<any>
⋮----
/**
     * Get user fills
     * Uses vaultAddress (sub-account) if configured, otherwise main wallet
     */
async getUserFills(): Promise<GenericFill[]>
⋮----
/**
     * Place a limit order
     */
async placeLimitOrder(params: GenericOrderParams): Promise<GenericOrderResult>
⋮----
// 格式化价格和数量
⋮----
// 检查最小下单价值 (Hyperliquid要求 ≥ $10)
⋮----
// Check for error in status
⋮----
// unexpected status format
⋮----
// SDK usually throws on error status, but if it returns a wrapper with status
// we handle it. Based on typical SDK response:
⋮----
// SDK throws error like "User or API Wallet does not exist"
⋮----
/**
     * Place a stop order (Stop Loss)
     */
async placeStopOrder(params: GenericStopParams): Promise<GenericOrderResult>
⋮----
// 格式化价格和数量精度
⋮----
// Check for error in status
⋮----
// Stop orders returning "resting" when active
⋮----
/**
     * Cancel an order
     */
async cancelOrder(symbol: string, orderId: string): Promise<GenericOrderResult>
⋮----
/**
     * Close position (Market)
     */
async closePosition(symbol: string): Promise<GenericOrderResult>
⋮----
// 使用激进限价确保成交（买入+10%，卖出-10%），避免低价币 floor 后变成 0。
⋮----
getAddress(): string
⋮----
// ============= 市场数据获取 (替代 Yahoo Finance) =============
⋮----
/**
     * Hyperliquid 支持的 K 线周期
     */
⋮----
/**
     * 获取 K 线数据
     * @param symbol 交易对符号 (e.g., 'BTC', 'ETH', 'SOL')
     * @param interval K 线周期
     * @param startTime 开始时间 (毫秒时间戳)
     * @param endTime 结束时间 (毫秒时间戳)
     */
async getCandles(
        symbol: string,
        interval: '1m' | '3m' | '5m' | '15m' | '30m' | '1h' | '2h' | '4h' | '8h' | '12h' | '1d' | '3d' | '1w' | '1M',
        startTime?: number,
        endTime?: number
): Promise<GenericCandle[]>
⋮----
'1m': 24 * 60 * 60 * 1000,       // 1 天
'3m': 3 * 24 * 60 * 60 * 1000,   // 3 天
'5m': 5 * 24 * 60 * 60 * 1000,   // 5 天
'15m': 7 * 24 * 60 * 60 * 1000,  // 7 天
'30m': 14 * 24 * 60 * 60 * 1000, // 14 天
'1h': 30 * 24 * 60 * 60 * 1000,  // 30 天
'2h': 60 * 24 * 60 * 60 * 1000,  // 60 天
'4h': 45 * 24 * 60 * 60 * 1000,  // 45 天
'8h': 120 * 24 * 60 * 60 * 1000, // 120 天
'12h': 180 * 24 * 60 * 60 * 1000,// 180 天
'1d': 365 * 24 * 60 * 60 * 1000, // 1 年
'3d': 365 * 24 * 60 * 60 * 1000, // 1 年
'1w': 2 * 365 * 24 * 60 * 60 * 1000, // 2 年
'1M': 5 * 365 * 24 * 60 * 60 * 1000, // 5 年
⋮----
// Hyperliquid returns 429 or 5xx status codes
⋮----
t: number;   // 开盘时间
T: number;   // 收盘时间
o: string;   // 开盘价
h: string;   // 最高价
l: string;   // 最低价
c: string;   // 收盘价
v: string;   // 成交量
n: number;   // 成交笔数
⋮----
// 转换为统一格式并计算 ATR
⋮----
/**
     * 获取 H4 K 线数据 (原生支持，无需聚合)
     */
async getH4Candles(symbol: string, days: number = 45): Promise<Array<
⋮----
/**
     * 获取当前价格
     */
async getCurrentPrice(symbol: string): Promise<number>
⋮----
/**
     * 计算 ATR (14 周期)
     */
private calculateATR<T extends { open: number; high: number; low: number; close: number }>(
        candles: T[],
        period: number = 14
): (T &
⋮----
// 简单平均
⋮----
// 指数平均
⋮----
export class MockExecutor implements IExecutor
⋮----
async placeStopOrder(_params: GenericStopParams): Promise<GenericOrderResult>
⋮----
async cancelOrder(_symbol: string, _orderId: string): Promise<GenericOrderResult>
⋮----
async getAccountInfo(): Promise<GenericAccountInfo>
⋮----
async getCandles(symbol: string, interval: string): Promise<GenericCandle[]>
⋮----
// 根据 interval 计算正确的时间间隔
⋮----
async getOpenOrders(): Promise<GenericOpenOrder[]>
⋮----
// MockExecutor 不需要刷新元数据
⋮----
/**
 * Create Hyperliquid Client
 * @param privateKey API wallet private key
 * @param testnet Whether to use testnet
 * @param vaultAddress Optional sub-account address for trading
 */
export function createHyperliquidClient(
    privateKey: string,
    testnet: boolean = true,
    vaultAddress?: string
): HyperliquidClient
⋮----
export function createMockExecutor(): MockExecutor
⋮----
export type ExecutorProvider = 'MOCK' | 'ROUTER';
⋮----
/**
 * 统一的 Executor 工厂函数
 * 用于根据 provider 类型创建对应的执行器实例
 * 便于未来对接其他交易平台 (如 Binance, Bybit 等)
 */
export function createExecutor(
    provider: ExecutorProvider,
    options: { hyperliquid?: HyperliquidConfig; tiger?: TigerAdapterConfig; router?: { getProviderForSymbol: (symbol: string) => string; defaultProvider: string } } = {}
): IExecutor
```

## File: src/modules/paper-trading/client.test.ts
```typescript
import { describe, expect, it, vi } from 'vitest';
import { PaperTradingClient } from './client.js';
import type { KvStore } from '../../types/runtime.js';
⋮----
function createMemoryKv(): KvStore
⋮----
async get(key: string, type?: 'json')
async put(key: string, value: string)
async delete(key: string)
async list(prefix?: string)
```

## File: src/modules/paper-trading/matching-engine.ts
```typescript
/**
 * Paper Trading 撮合引擎
 * 根据实时价格判断模拟订单是否应该成交
 */
⋮----
import type { PaperOrder, PaperPosition, PaperAccount, PaperTrade } from './types.js';
import { PAPER_KEYS } from './types.js';
import { logger } from '../../utils/index.js';
import type { KvStore } from '../../types/runtime.js';
⋮----
export interface MatchingResult {
    filledOrders: PaperOrder[];
    triggeredStops: PaperOrder[];
    closedPositions: PaperTrade[];
}
⋮----
/**
 * 撮合引擎
 */
export class MatchingEngine
⋮----
constructor(private kv: KvStore)
⋮----
/**
     * 处理撮合逻辑
     * @param symbol 交易对
     * @param currentPrice 当前价格
     * @param highPrice 当前 K 线最高价 (用于判断是否触及止损/止盈)
     * @param lowPrice 当前 K 线最低价
     */
async processMatching(
        symbol: string,
        currentPrice: number,
        highPrice: number,
        lowPrice: number
): Promise<MatchingResult>
⋮----
// 获取模拟订单
⋮----
// 限价单撮合逻辑
⋮----
// 买入限价单：价格下触
⋮----
// 卖出限价单：价格上触
⋮----
// 止损单撮合逻辑
⋮----
// 多头止损：价格下触
⋮----
fillPrice = order.price; // 模拟滑点可以用 lowPrice
⋮----
// 空头止损：价格上触
⋮----
// 限价单成交 -> 开仓
⋮----
// 止损单成交 -> 平仓
⋮----
// 保存更新后的订单和账户
⋮----
private cancelBracketPeers(orders: PaperOrder[], filledOrder: PaperOrder): void
⋮----
/**
     * 开仓
     */
private async openPosition(account: PaperAccount, order: PaperOrder): Promise<void>
⋮----
// 已有持仓，可能是加仓或减仓
⋮----
// 同方向加仓
⋮----
// 反方向 -> 平仓/反向开仓
// 简化处理：先平仓再开反向
⋮----
// 新开仓
⋮----
// 扣除保证金 (简化：假设 1x 杠杆)
⋮----
/**
     * 平仓
     */
private async closePosition(
        account: PaperAccount,
        symbol: string,
        exitPrice: number,
        reason: string
): Promise<PaperTrade | null>
⋮----
// 计算盈亏
⋮----
// 计算 R 值 (简化：假设风险是入场价的 1%)
⋮----
// 创建交易记录
⋮----
// 更新账户
⋮----
// 保存交易记录
⋮----
/**
     * 更新持仓未实现盈亏
     */
async updateUnrealizedPnl(symbol: string, currentPrice: number): Promise<void>
⋮----
// ============= KV 操作 =============
⋮----
async getAccount(): Promise<PaperAccount>
⋮----
// 创建默认账户
⋮----
async saveAccount(account: PaperAccount): Promise<void>
⋮----
async getOrders(symbol: string): Promise<PaperOrder[]>
⋮----
async saveOrders(symbol: string, orders: PaperOrder[]): Promise<void>
⋮----
async getTrades(): Promise<PaperTrade[]>
⋮----
async saveTrade(trade: PaperTrade): Promise<void>
```

## File: src/modules/paper-trading/types.ts
```typescript
/**
 * Paper Trading 模拟交易 - 类型定义
 */
⋮----
/** 模拟订单状态 */
export type PaperOrderStatus = 'PENDING' | 'FILLED' | 'CANCELLED';
⋮----
/** 模拟订单类型 */
export type PaperOrderType = 'LIMIT' | 'STOP';
⋮----
/** 模拟订单 */
export interface PaperOrder {
    id: string;
    symbol: string;
    type: PaperOrderType;
    direction: 'LONG' | 'SHORT';
    reduceOnly?: boolean;
    bracketGroupId?: string;
    price: number;
    size: number;
    status: PaperOrderStatus;
    createdAt: number;
    filledAt?: number;
    filledPrice?: number;
}
⋮----
/** 模拟持仓 */
export interface PaperPosition {
    symbol: string;
    direction: 'LONG' | 'SHORT';
    size: number;
    entryPrice: number;
    unrealizedPnl: number;
    slOrderId?: string;
}
⋮----
/** 模拟账户 */
export interface PaperAccount {
    initialBalance: number;
    balance: number;           // 可用余额
    equity: number;            // 权益 (余额 + 未实现盈亏)
    positions: PaperPosition[];
    createdAt: number;
    lastUpdated: number;
}
⋮----
balance: number;           // 可用余额
equity: number;            // 权益 (余额 + 未实现盈亏)
⋮----
/** 已完成交易记录 */
export interface PaperTrade {
    id: string;
    symbol: string;
    direction: 'LONG' | 'SHORT';
    entryPrice: number;
    exitPrice: number;
    size: number;
    pnl: number;               // 已实现盈亏
    rValue: number;            // R 值 (盈亏 / 风险)
    enteredAt: number;
    exitedAt: number;
    exitReason: string;        // 'TP' | 'SL' | 'MANUAL'
}
⋮----
pnl: number;               // 已实现盈亏
rValue: number;            // R 值 (盈亏 / 风险)
⋮----
exitReason: string;        // 'TP' | 'SL' | 'MANUAL'
⋮----
/** 交易统计 */
export interface PaperTradingStats {
    totalTrades: number;
    winningTrades: number;
    losingTrades: number;
    winRate: number;           // 胜率 (0-100)
    totalPnL: number;          // 总盈亏 ($)
    averageWin: number;        // 平均盈利
    averageLoss: number;       // 平均亏损
    profitFactor: number;      // 盈亏比 (总盈利 / 总亏损)
    averageR: number;          // 平均 R 值
    maxDrawdown: number;       // 最大回撤 (%)
    peakEquity: number;        // 历史最高权益
}
⋮----
winRate: number;           // 胜率 (0-100)
totalPnL: number;          // 总盈亏 ($)
averageWin: number;        // 平均盈利
averageLoss: number;       // 平均亏损
profitFactor: number;      // 盈亏比 (总盈利 / 总亏损)
averageR: number;          // 平均 R 值
maxDrawdown: number;       // 最大回撤 (%)
peakEquity: number;        // 历史最高权益
⋮----
/** KV 键名常量 */
```

## File: src/modules/state-store/index.ts
```typescript
/**
 * 状态存储模块 - KV 操作封装
 */
⋮----
import type { TradingState, DecisionLogEntry, TradeLogEntry, TradingStatus } from '../../types/index.js';
import type { KvStore } from '../../types/runtime.js';
import type { DecisionLogStore } from './decision-log-store.js';
import type { TradeLogStore } from './trade-log-store.js';
import { createInitialState, getStateKey, getDecisionLogKey } from '../../types/index.js';
import { logger } from '../../utils/index.js';
⋮----
const MAX_LOG_ENTRIES = 300; // 最多保留 300 条记录 (约 9 天历史)
⋮----
/**
 * 状态存储管理器
 * 封装 KV 存储的读写操作
 */
export class StateStore
⋮----
constructor(kv: KvStore, decisionLogStore?: DecisionLogStore, tradeLogStore?: TradeLogStore)
⋮----
/**
     * 加载交易状态
     * 如果不存在则创建初始状态
     */
async loadState(symbol: string): Promise<TradingState>
⋮----
/**
     * 保存交易状态
     */
async saveState(state: TradingState): Promise<void>
⋮----
/**
     * 更新短期记忆
     */
async updateMemory(
        symbol: string,
        memory: Partial<TradingState['memory']>
): Promise<TradingState>
⋮----
/**
     * 重置为空仓状态
     */
async resetToIdle(symbol: string, reasoning: string): Promise<TradingState>
⋮----
state.sniperContext = undefined; // 同时清除狙击模式上下文
⋮----
/**
     * 转换到挂单状态
     */
async transitionToPending(
        symbol: string,
        activeTrade: TradingState['activeTrade'],
        reasoning?: string  // 可选：入场理由
): Promise<TradingState>
⋮----
reasoning?: string  // 可选：入场理由
⋮----
// 只有传入 reasoning 时才更新，否则保留之前的（handleIdleResult 已更新过）
⋮----
/**
     * 转换到持仓状态
     */
async transitionToOpen(symbol: string): Promise<TradingState>
⋮----
/**
     * 删除状态（用于测试/重置）
     */
async deleteState(symbol: string): Promise<void>
⋮----
/**
     * 记录 AI 决策日志
     */
async logDecision(entry: DecisionLogEntry): Promise<void>
⋮----
// 添加新记录到开头
⋮----
// 限制最大条目数
⋮----
/**
     * 记录交易执行日志
     */
async logTrade(entry: TradeLogEntry): Promise<void>
⋮----
// 回退：无 tradeLogStore 时写入 KV，确保复盘链路不断
⋮----
/**
     * 获取交易执行日志（优先 tradeLogStore，回退 KV fallback）
     */
async getTradeLogs(limit: number = 50, symbol?: string): Promise<TradeLogEntry[]>
⋮----
private async enrichDecisionTraceId(entry: DecisionLogEntry): Promise<DecisionLogEntry>
⋮----
/**
     * 获取决策日志
     */
async getDecisionLogs(symbol: string, limit: number = 20): Promise<DecisionLogEntry[]>
⋮----
// ============= Swing 点历史缓存 (参考 LuxAlgo ZZ 结构) =============
⋮----
/**
     * 缓存的 Swing 点结构
     */
private getSwingCacheKey(symbol: string): string
⋮----
/**
     * 加载 Swing 点历史缓存
     */
async loadSwingCache(symbol: string): Promise<SwingPointCache | null>
⋮----
/**
     * 保存 Swing 点历史缓存
     * 最多保留 100 个点，自动去重和排序
     */
async saveSwingCache(symbol: string, newSwings: CachedSwingPoint[]): Promise<void>
⋮----
// 加载现有缓存
⋮----
// 合并新旧数据，去重（按时间戳）
⋮----
// 按时间排序（最新在前）
⋮----
// 限制数量
⋮----
/**
     * 获取缓存中指定类型的 Swing 点
     */
async getCachedSwings(
        symbol: string,
        type?: 'high' | 'low',
        limit: number = 50
): Promise<CachedSwingPoint[]>
⋮----
// ============= 心跳历史缓存 =============
⋮----
/**
     * 获取心跳历史
     */
async getHeartbeatHistory(symbol: string): Promise<HeartbeatEntry[]>
⋮----
/**
     * 保存心跳历史 (保留最近 5 条)
     */
async saveHeartbeatHistory(symbol: string, history: HeartbeatEntry[]): Promise<void>
⋮----
// ============= Swing 缓存类型定义 =============
⋮----
/** 缓存的 Swing 点 */
export interface CachedSwingPoint {
    type: 'high' | 'low';
    price: number;
    time: number;       // 时间戳
    index?: number;     // bar index (可选，用于兼容)
}
⋮----
time: number;       // 时间戳
index?: number;     // bar index (可选，用于兼容)
⋮----
/** Swing 点历史缓存 */
export interface SwingPointCache {
    symbol: string;
    swings: CachedSwingPoint[];
    lastUpdated: number;
}
⋮----
/** 心跳历史记录 */
export interface HeartbeatEntry {
    time: number;
    update: string;
    levels: number[];
}
⋮----
/**
 * 创建状态存储管理器
 */
export function createStateStore(
    kv: KvStore,
    decisionLogStore?: DecisionLogStore,
    tradeLogStore?: TradeLogStore,
): StateStore
```

## File: src/modules/structure-detector/strategies/turtle-soup/sfp-core.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { Candle } from '../../../../types/index.js';
import type { LiquidityAnalysis, LiquidityLevel, LiquidityType } from '../../types.js';
import {
    detectSfpSetup,
    evaluateLadderState,
    evaluateM5Rejection,
    evaluatePostSweepStability,
    evaluateRangeEdge,
    evaluateResweepProgress,
    collectCandidateLevels,
    calculateLevelQuality,
    resolveThresholds,
} from './sfp-core.js';
⋮----
function makeCandle(o: number, h: number, l: number, c: number): Candle
⋮----
function makeLevel(type: LiquidityType, price: number, time = 0): LiquidityLevel
⋮----
function makeConsolidation()
⋮----
function makeLiquidityForSfp(level: LiquidityLevel): LiquidityAnalysis
⋮----
// ── evaluateLadderState ────────────────────────────────────────────────────────
⋮----
// safeAtrValue(0) returns 1, so normalizedDistance = 0.1 / 1 = 0.1
// 0.1 <= SNIPER threshold (0.15) → SNIPER
⋮----
// ── evaluateM5Rejection ───────────────────────────────────────────────────────
⋮----
// prevCandle: low=99.5 (penetrates 100), close=100.3 (reclaims 100, +0.3 ATR)
// latestCandle: close=100.4 (follow-through +0.4 ATR)
⋮----
// Small wick: lowerBody - low = 100.3 - 100.2 = 0.1 ATR (< 0.35)
⋮----
// prevCandle: large body (0.4 ATR), small wick but body ok (HYBRID_SOFT)
⋮----
// HYBRID_SOFT wick threshold = 0.25
const prev = makeCandle(100.5, 100.7, 99.9, 100.4); // wick = 0.5-0.9 = 0.3 ATR?
// lowerBody = min(100.5, 100.4) = 100.4; wick = 100.4 - 99.9 = 0.5 ATR >= 0.25 ✓
const latest = makeCandle(100.4, 100.4, 100.35, 100.36); // close barely above level
⋮----
// body = |100.4-100.5| = 0.1 ATR, body ≥ 0.15? No. But wick ≥ 0.25 and reclaim ≥ 0.1?
// Let's just check it runs without error and returns a result
⋮----
// ── evaluateRangeEdge ─────────────────────────────────────────────────────────
⋮----
// levelRatio = (29.72 - 29.55) / 0.90 ≈ 0.189 < 0.25 ✓
// entryRatio = (29.80 - 29.55) / 0.90 ≈ 0.278 < 0.45 ✓
⋮----
// levelRatio = (29.82 - 29.55) / 0.90 ≈ 0.30 > 0.25 → rejected
⋮----
// EQL edge ratio = 0.35; 0.30 < 0.35 ✓
⋮----
entryPrice: 30.10, // entryRatio = 0.611 > 0.55 ✓ — wait, 30.10?
⋮----
// levelRatio = (30.36-29.55)/0.90 = 0.90 > 0.75 (1-0.25) ✓
// entryRatio = (30.10-29.55)/0.90 = 0.611 > 0.55 ✓
⋮----
rangeLow: 100, // zero span
⋮----
// ── collectCandidateLevels ────────────────────────────────────────────────────
⋮----
equalLows: [level], // duplicate
⋮----
// ── calculateLevelQuality ─────────────────────────────────────────────────────
⋮----
const overlap = Date.parse('2026-02-20T14:00:00Z'); // 14 UTC
const off = Date.parse('2026-02-20T06:00:00Z');     // 6 UTC
⋮----
const ts = Date.parse('2026-02-20T14:00:00Z'); // overlap
// PWH (+20) + overlap (+15) + fresh (+10) + multiTest (+5) = 50+20+15+10+5 = 100
⋮----
// ── resolveThresholds ─────────────────────────────────────────────────────────
⋮----
makeCandle(100.2, 100.6, 99.8, 99.95), // prior bearish sweep (penetration 0.6)
makeCandle(99.95, 100.1, 99.7, 100.02), // not a bearish sweep (close above level)
makeCandle(100.0, 100.68, 99.8, 99.92), // current bearish sweep (penetration 0.68)
⋮----
minExtensionAtr: 0.15, // required >= 0.75
⋮----
const latest = makeCandle(99.95, 100.7, 99.7, 99.9); // new higher high
```

## File: src/modules/structure-detector/strategies/index.test.ts
```typescript
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { StrategyExecutionContext } from './index.js';
⋮----
import {
    runStrategies,
    runStrategy,
    shouldAllowStandardPullbackContinuation,
    shouldAllowStandardFirstImpulsePullback,
} from './index.js';
⋮----
function createBaseContext(overrides: Partial<StrategyExecutionContext> =
```

## File: src/modules/structure-detector/types.ts
```typescript
/**
 * ICT 结构检测类型定义
 */
⋮----
import type { StrategyProfile } from '../../config/strategy-profiles.js';
import type { VolumeStrength } from '../volume-analysis/types.js';
⋮----
/** 方向类型 */
export type Direction = 'bullish' | 'bearish';
⋮----
/** 流动性状态 */
export type LiquidityStatus =
    | 'active'    // 未被触及
    | 'sweeping'  // 正在被扫损（价格刺穿但未收盘突破）
    | 'purged';   // 已被完全扫损
⋮----
| 'active'    // 未被触及
| 'sweeping'  // 正在被扫损（价格刺穿但未收盘突破）
| 'purged';   // 已被完全扫损
⋮----
/** 流动性类型 */
export type LiquidityType =
    | 'PDH' | 'PDL'   // 昨日高低
    | 'PWH' | 'PWL'   // 上周高低
    | 'PMH' | 'PML'   // 上月高低
    | 'EQH' | 'EQL'   // Equal Highs/Lows
    | 'LDN_H' | 'LDN_L'   // London Session 高低
    | 'NY_H' | 'NY_L'     // New York Session 高低
    | 'SWING_HIGH' | 'SWING_LOW'  // 摆动高低
    | 'H4_SWING_HIGH' | 'H4_SWING_LOW'   // H4 级别独立 Swing 点
    | 'H4_RANGE_HIGH' | 'H4_RANGE_LOW';  // H4 级别主区间边界
⋮----
| 'PDH' | 'PDL'   // 昨日高低
| 'PWH' | 'PWL'   // 上周高低
| 'PMH' | 'PML'   // 上月高低
| 'EQH' | 'EQL'   // Equal Highs/Lows
| 'LDN_H' | 'LDN_L'   // London Session 高低
| 'NY_H' | 'NY_L'     // New York Session 高低
| 'SWING_HIGH' | 'SWING_LOW'  // 摆动高低
| 'H4_SWING_HIGH' | 'H4_SWING_LOW'   // H4 级别独立 Swing 点
| 'H4_RANGE_HIGH' | 'H4_RANGE_LOW';  // H4 级别主区间边界
⋮----
/** 信号等级 */
export type SignalGrade = 'A' | 'B' | 'C' | 'D';
⋮----
// ============= 核心检测结果 =============
⋮----
/** Displacement 检测结果 */
export interface Displacement {
    detected: boolean;
    direction: Direction;
    magnitude: number;        // 单根最大位移幅度 (ATR 倍数)
    totalMagnitude?: number;  // [新增] 累计位移幅度 (序列总 ATR 倍数)
    startPrice: number;
    endPrice: number;
    candleCount: number;      // 位移蜡烛数量
    hasFVG: boolean;          // 是否伴随 FVG
    time: number;             // 检测时间戳
    // 成交量验证数据
    rVol?: number;
    volumeStrength?: VolumeStrength;
    volumeValid?: boolean;
}
⋮----
magnitude: number;        // 单根最大位移幅度 (ATR 倍数)
totalMagnitude?: number;  // [新增] 累计位移幅度 (序列总 ATR 倍数)
⋮----
candleCount: number;      // 位移蜡烛数量
hasFVG: boolean;          // 是否伴随 FVG
time: number;             // 检测时间戳
// 成交量验证数据
⋮----
/** FVG 填补类型 */
export type FillType = 'none' | 'tap' | 'partial' | 'full';
⋮----
/** FVG (Fair Value Gap) */
export interface FVG {
    type: Direction;
    top: number;
    bottom: number;
    midpoint: number;
    filled: boolean;          // 是否已被填补 (兼容旧逻辑)
    fillType: FillType;       // 填补类型: none/tap/partial/full
    inverted: boolean;        // 是否已反转成 IFVG
    respectedAt?: number;     // 填补后被尊重的时间
    /**
     * FVG 结构确认时间（第三根K线收盘时间）
     * 用于避免“确认K本身”被误判成 tap/fill。
     */
    confirmedAt?: number;
    time: number;
}
⋮----
filled: boolean;          // 是否已被填补 (兼容旧逻辑)
fillType: FillType;       // 填补类型: none/tap/partial/full
inverted: boolean;        // 是否已反转成 IFVG
respectedAt?: number;     // 填补后被尊重的时间
/**
     * FVG 结构确认时间（第三根K线收盘时间）
     * 用于避免“确认K本身”被误判成 tap/fill。
     */
⋮----
/** Volume Imbalance (VI) */
export interface VolumeImbalance {
    type: Direction;
    top: number;          // 上方 K 线的收盘/开盘
    bottom: number;       // 下方 K 线的收盘/开盘
    midpoint: number;
    filled: boolean;
    time: number;
}
⋮----
top: number;          // 上方 K 线的收盘/开盘
bottom: number;       // 下方 K 线的收盘/开盘
⋮----
/** OB (Order Block) */
export interface OrderBlock {
    type: Direction;
    top: number;
    bottom: number;
    meanThreshold: number;    // OBMT: 50% 位置，用于判断 OB 有效性
    respected: boolean;       // 是否已被测试
    mitigated: boolean;       // 是否已被消耗（价格回踩过该区域）
    weakened: boolean;        // 实体收盘击穿 OBMT，OB 可能失效
    formedWithSweep: boolean; // 形成时是否伴随流动性猎杀
    time: number;
    // 成交量验证数据
    rVol?: number;
    volumeStrength?: VolumeStrength;
    volumeValid?: boolean;
}
⋮----
meanThreshold: number;    // OBMT: 50% 位置，用于判断 OB 有效性
respected: boolean;       // 是否已被测试
mitigated: boolean;       // 是否已被消耗（价格回踩过该区域）
weakened: boolean;        // 实体收盘击穿 OBMT，OB 可能失效
formedWithSweep: boolean; // 形成时是否伴随流动性猎杀
⋮----
// 成交量验证数据
⋮----
/**
 * Breaker Block - 失败的 OB 极性反转后的入场区
 * 
 * ICT 定义:
 * - Bullish OB 被向下击穿 → 变成 Bearish Breaker (阻力)
 * - Bearish OB 被向上击穿 → 变成 Bullish Breaker (支撑)
 * 
 * 入场方向与原 OB 相反
 */
export interface BreakerBlock {
    type: Direction;          // 交易方向 (与原 OB 相反)
    top: number;
    bottom: number;
    midpoint: number;
    originalOBType: Direction; // 原 OB 的类型
    brokenTime: number;        // 被击穿的时间
    tested: boolean;           // 是否已被回测过
    time: number;              // 原 OB 形成时间
}
⋮----
type: Direction;          // 交易方向 (与原 OB 相反)
⋮----
originalOBType: Direction; // 原 OB 的类型
brokenTime: number;        // 被击穿的时间
tested: boolean;           // 是否已被回测过
time: number;              // 原 OB 形成时间
⋮----
/** MSS/BOS 结构破坏 */
export interface StructureBreak {
    type: 'MSS' | 'BOS';
    direction: Direction;
    price: number;            // 破坏点价格
    swingPrice: number;       // 被突破的摆动点
    time: number;
}
⋮----
price: number;            // 破坏点价格
swingPrice: number;       // 被突破的摆动点
⋮----
/** OTE (Optimal Trade Entry) 区域 */
export interface OTEZone {
    top: number;              // 79% 回撤
    bottom: number;           // 61.8% 回撤
    equilibrium: number;      // 50% 中点
    swingHigh: number;        // Fibonacci 起点高点
    swingLow: number;         // Fibonacci 起点低点
}
⋮----
top: number;              // 79% 回撤
bottom: number;           // 61.8% 回撤
equilibrium: number;      // 50% 中点
swingHigh: number;        // Fibonacci 起点高点
swingLow: number;         // Fibonacci 起点低点
⋮----
/** 流动性水平 */
export interface LiquidityLevel {
    type: LiquidityType;
    price: number;
    zoneTop?: number;         // 区间上沿 (用于 EQH/EQL 区域或 Wick Zone)
    zoneBottom?: number;      // 区间下沿
    status: LiquidityStatus;
    time: number;
    purgedAt?: number;        // 被获取时间
    touchCount?: number;      // 触及次数 (用于 EQH/EQL)
    // 扫损详情 (参考 LuxAlgo)
    sweepDetails?: {
        sweepPrice: number;   // 刺穿价格
        sweepTime: number;    // 刺穿时间
        recovered: boolean;   // 是否已回收（价格回到水平以上/以下）
        recoveryPrice?: number;  // 回收价格
        recoveryTime?: number;   // 回收时间 (用于精确定位 recovery candle)
        reclaimedWithinBars?: number; // 几根 K 线内收回
        wickUpAtr?: number;   // 上影线长度（ATR 倍数）
        wickDownAtr?: number; // 下影线长度（ATR 倍数）
        fakeBreakout?: boolean; // 是否识别为假突破陷阱
        trapDirection?: Direction; // 多/空陷阱方向
        flaggedAt?: number;   // 标记时间
        // 清算数据确认 (Phase 2: Liquidation Integration)
        liquidationConfirmed?: boolean;  // 是否有清算数据确认
        liquidatedAmount?: number;       // 清算金额 (USD)
        liquidatedSide?: 'long' | 'short'; // 被清算的方向
        liquidationSignificance?: 'low' | 'medium' | 'high' | 'extreme'; // 清算激增级别
        // 成交量验证数据
        sweepRVol?: number;
        recoveryRVol?: number;
        volumeConfirmed?: boolean;
        volumeConfirmedBy?: 'sweep' | 'recovery'; // 哪根 K 线触发了成交量确认
    };
    qualityScore?: number;    // [新增] 质量评分 (0-100)
}
⋮----
zoneTop?: number;         // 区间上沿 (用于 EQH/EQL 区域或 Wick Zone)
zoneBottom?: number;      // 区间下沿
⋮----
purgedAt?: number;        // 被获取时间
touchCount?: number;      // 触及次数 (用于 EQH/EQL)
// 扫损详情 (参考 LuxAlgo)
⋮----
sweepPrice: number;   // 刺穿价格
sweepTime: number;    // 刺穿时间
recovered: boolean;   // 是否已回收（价格回到水平以上/以下）
recoveryPrice?: number;  // 回收价格
recoveryTime?: number;   // 回收时间 (用于精确定位 recovery candle)
reclaimedWithinBars?: number; // 几根 K 线内收回
wickUpAtr?: number;   // 上影线长度（ATR 倍数）
wickDownAtr?: number; // 下影线长度（ATR 倍数）
fakeBreakout?: boolean; // 是否识别为假突破陷阱
trapDirection?: Direction; // 多/空陷阱方向
flaggedAt?: number;   // 标记时间
// 清算数据确认 (Phase 2: Liquidation Integration)
liquidationConfirmed?: boolean;  // 是否有清算数据确认
liquidatedAmount?: number;       // 清算金额 (USD)
liquidatedSide?: 'long' | 'short'; // 被清算的方向
liquidationSignificance?: 'low' | 'medium' | 'high' | 'extreme'; // 清算激增级别
// 成交量验证数据
⋮----
volumeConfirmedBy?: 'sweep' | 'recovery'; // 哪根 K 线触发了成交量确认
⋮----
qualityScore?: number;    // [新增] 质量评分 (0-100)
⋮----
export interface TurtlePriorityExtremeCandidate {
    type: LiquidityType;
    price: number;
    status: LiquidityStatus;
    distanceToPrice: number;
    time?: number;
}
⋮----
export interface TurtlePrioritySweepCandidate {
    type: LiquidityType;
    price: number;
    sweepTime: number;
    recovered: boolean;
    distanceToPrice: number;
    priorityEligible: boolean;
}
⋮----
export interface TurtlePriorityContext {
    triggered: boolean;
    source?: 'EXTREME_SWEEP' | 'TREND_EXHAUSTION' | 'H4_RANGE_EDGE';
    direction?: Direction;
    reason?: string;
    h4Range?: {
        high: number;
        low: number;
        position: number;
        edgeRatio: number;
        nearLowerEdge: boolean;
        nearUpperEdge: boolean;
    };
    primaryRangeBoundary?: {
        high: number;
        low: number;
        tolerance: number;
        lowerTestCount: number;
        upperTestCount: number;
        hoveringNearLower: boolean;
        hoveringNearUpper: boolean;
    };
    extremeCandidates?: TurtlePriorityExtremeCandidate[];
    recentSweepCandidates?: TurtlePrioritySweepCandidate[];
}
⋮----
/** Swing 点 */
export interface SwingPoint {
    type: 'high' | 'low';
    price: number;
    time: number;
    index: number;
}
⋮----
// ============= 综合检测结果 =============
⋮----
/** M15/M5 小周期结构检测结果 */
export interface TimeframeStructure {
    interval: string;

    // 结构破坏
    structureBreak?: StructureBreak;

    // Displacement
    displacement?: Displacement;

    // 入场区域
    fvgs: FVG[];
    ifvgs: FVG[];       // Inverted FVGs (填补后被尊重的区域)
    volumeImbalances: VolumeImbalance[]; // 新增 VI
    orderBlocks: OrderBlock[];
    breakerBlocks: BreakerBlock[];  // 被击穿的 OB 转换的反向入场区

    // OTE
    ote?: OTEZone;

    // Swing 点
    swingHighs: SwingPoint[];
    swingLows: SwingPoint[];
}
⋮----
// 结构破坏
⋮----
// Displacement
⋮----
// 入场区域
⋮----
ifvgs: FVG[];       // Inverted FVGs (填补后被尊重的区域)
volumeImbalances: VolumeImbalance[]; // 新增 VI
⋮----
breakerBlocks: BreakerBlock[];  // 被击穿的 OB 转换的反向入场区
⋮----
// OTE
⋮----
// Swing 点
⋮----
/** 流动性检测结果 */
export interface LiquidityAnalysis {
    // 周期高低点
    pdh?: LiquidityLevel;     // 昨日高
    pdl?: LiquidityLevel;     // 昨日低
    pwh?: LiquidityLevel;     // 上周高
    pwl?: LiquidityLevel;     // 上周低
    pmh?: LiquidityLevel;     // 上月高
    pml?: LiquidityLevel;     // 上月低

    // Equal Highs/Lows (多个 swing 点聚集)
    equalHighs: LiquidityLevel[];  // EQH 区域 (基于 M15)
    equalLows: LiquidityLevel[];   // EQL 区域 (基于 M15)

    // H4 级别的 Equal Highs/Lows (高权重流动性目标)
    h4EqualHighs: LiquidityLevel[];  // H4 级别 EQH (周级别关键阻力)
    h4EqualLows: LiquidityLevel[];   // H4 级别 EQL (周级别关键支撑)

    // H4 级别独立 Swing 点（未聚类为 EQH/EQL）
    h4RecentSwings: LiquidityLevel[];

    // 机构流动性池 (多次测试但未突破的区域)
    liquidityPools: LiquidityLevel[];

    // Session 高低点
    londonHigh?: LiquidityLevel;  // London Session 高
    londonLow?: LiquidityLevel;   // London Session 低
    nyHigh?: LiquidityLevel;      // NY Session 高
    nyLow?: LiquidityLevel;       // NY Session 低

    // 近期 Swing 点
    recentSwings: LiquidityLevel[];

    // 最近扫损事件
    recentSweep?: {
        level: LiquidityLevel;
        sweepPrice: number;
        sweepTime: number;
        recoveryPrice: number;
        isFakeBreakout?: boolean;
        trapDirection?: Direction;
    };
    allRecentSweeps: Array<{
        level: LiquidityLevel;
        sweepPrice: number;
        sweepTime: number;
        recoveryPrice: number;
        isFakeBreakout?: boolean;
        trapDirection?: Direction;
    }>;
}
⋮----
// 周期高低点
pdh?: LiquidityLevel;     // 昨日高
pdl?: LiquidityLevel;     // 昨日低
pwh?: LiquidityLevel;     // 上周高
pwl?: LiquidityLevel;     // 上周低
pmh?: LiquidityLevel;     // 上月高
pml?: LiquidityLevel;     // 上月低
⋮----
// Equal Highs/Lows (多个 swing 点聚集)
equalHighs: LiquidityLevel[];  // EQH 区域 (基于 M15)
equalLows: LiquidityLevel[];   // EQL 区域 (基于 M15)
⋮----
// H4 级别的 Equal Highs/Lows (高权重流动性目标)
h4EqualHighs: LiquidityLevel[];  // H4 级别 EQH (周级别关键阻力)
h4EqualLows: LiquidityLevel[];   // H4 级别 EQL (周级别关键支撑)
⋮----
// H4 级别独立 Swing 点（未聚类为 EQH/EQL）
⋮----
// 机构流动性池 (多次测试但未突破的区域)
⋮----
// Session 高低点
londonHigh?: LiquidityLevel;  // London Session 高
londonLow?: LiquidityLevel;   // London Session 低
nyHigh?: LiquidityLevel;      // NY Session 高
nyLow?: LiquidityLevel;       // NY Session 低
⋮----
// 近期 Swing 点
⋮----
// 最近扫损事件
⋮----
/** 信号评分 */
export interface SignalScore {
    total: number;            // 0-100
    grade: SignalGrade;

    components: {
        sweepQuality: number;           // 0-40 (含清算确认奖励)
        displacementStrength: number;   // 0-30
        structureBreak: number;         // 0-20
        entryZoneQuality: number;       // 0-15
        oteAlignment: number;           // 0-10
        ifvgStrength: number;           // 0-15
        mtfBonus: number;               // 0-10
        killzoneBonus: number;          // 0-10
        trendContinuationBonus?: number; // 0-15
        pullbackBonus?: number;          // 0-10
        impulseNoSweepBonus?: number;    // 0-10 (趋势脉冲补偿)
        directionalZonePenalty?: number; // 0 / 负分
        volumeConfirmation?: number;    // -10 ~ +15
        causalChainBonus?: number;      // 0-15 (因果链时序奖励)
    };

    breakdown: string[];      // 评分明细说明
}
⋮----
total: number;            // 0-100
⋮----
sweepQuality: number;           // 0-40 (含清算确认奖励)
displacementStrength: number;   // 0-30
structureBreak: number;         // 0-20
entryZoneQuality: number;       // 0-15
oteAlignment: number;           // 0-10
ifvgStrength: number;           // 0-15
mtfBonus: number;               // 0-10
killzoneBonus: number;          // 0-10
trendContinuationBonus?: number; // 0-15
pullbackBonus?: number;          // 0-10
impulseNoSweepBonus?: number;    // 0-10 (趋势脉冲补偿)
directionalZonePenalty?: number; // 0 / 负分
volumeConfirmation?: number;    // -10 ~ +15
causalChainBonus?: number;      // 0-15 (因果链时序奖励)
⋮----
breakdown: string[];      // 评分明细说明
⋮----
// ============= 交易策略类型 =============
⋮----
/** 交易策略类型 */
export type StrategyType = 'STANDARD_ICT' | 'TURTLE_SOUP' | 'BAND_REVERSION' | 'AI_DISPLACEMENT';
⋮----
/** 策略擅长的市场类型 */
export type StrategyMarketFocus = 'TREND' | 'RANGE' | 'HYBRID';
/** 策略路由结果 */
export type StrategyRoute = 'TREND' | 'CONSOLIDATION' | 'HYBRID';
⋮----
/** 路由决策原因标签 — 一一对应 computeBaseRoute 的每个 return 出口 */
export type RouteReason =
    | 'HTF_CONSOLIDATING'
    | 'TURTLE_PRIORITY_EXHAUSTION'
    | 'TURTLE_PRIORITY_CONSOLIDATION'
    | 'TURTLE_PRIORITY_HYBRID'
    | 'RANGE_MODE_ESCAPE_ALIGNED'
    | 'RANGE_MODE_ESCAPE_UNALIGNED'
    | 'RANGE_MODE_SIGNALS'
    | 'RANGE_MODE_LOW_NOISE'
    | 'TREND_ESCAPE_ALIGNED'
    | 'TREND_ESCAPE_UNALIGNED'
    | 'NEAR_CONSOLIDATION_HARD'
    | 'NEAR_CONSOLIDATION_NOISE'
    | 'QUALIFIES_CONSOLIDATION_BIMSS'
    | 'QUALIFIES_CONSOLIDATION_HYBRID'
    | 'QUALIFIES_HYBRID'
    | 'CLEAR_TREND_BIAS'
    | 'STRONG_TREND_LOW_CONFIDENCE'
    | 'HURST_MEAN_REVERTING'
    | 'HURST_TRENDING'
    | 'HURST_NOISY_TREND'
    | 'HURST_NOISY_REVERSION'
    | 'SQUEEZE_BREAKOUT_OVERRIDE'
    | 'DEFAULT_FALLBACK';
⋮----
export interface StrategyInsight {
    strategy: StrategyType;
    label: string;
    focus: StrategyMarketFocus;
    diagnostics: string[];
    hasSetup: boolean;
    score?: number;
    arbiterScore?: number;
    arbiterReasons?: string[];
}
⋮----
/** 市场环境体制 */
export type Regime = 'TRENDING' | 'RANGING' | 'UNCLEAR';
⋮----
/** 交易设置 (Setup) */
export interface TradeSetup {
    strategy: StrategyType; // 策略类型
    orderType: 'MARKET' | 'LIMIT'; // [新增] 订单类型：海龟汤用 MARKET，ICT 用 LIMIT
    direction: Direction;
    entryZone: {
        type: 'FVG' | 'OB' | 'SWEEP'; // 增加 SWEEP
        top: number;
        bottom: number;
        midpoint?: number;
    };
    stopLoss: number;
    takeProfit: number; // Default TP (usually TP3 or Range Bound)
    takeProfitLevels: {
        tp1: number;
        tp2: number;    // 30% @ 中级流动性或 2R
        tp3: number;    // 20% @ 远端目标或 3R
    };
    takeProfitDistribution?: {
        tp1: number;
        tp2: number;
        tp3: number;
    };

    riskRewardRatio: number; // 盈亏比
    triggerTime: number;

    // 信号质量
    grade: SignalGrade;
    score: SignalScore;

    // 检测来源
    triggeredBy: {
        sweep?: LiquidityLevel; // Optional for Standard
        displacement?: Displacement; // Optional for Turtle
        structureBreak?: any; // Optional for Turtle
    };


    // 上下文详情 (用于 AI 分析)
    context: {
        timeframe: 'M15' | 'H1' | 'M5';
        signalFamily?: 'SWEEP_SFP' | 'VWAP_BOUNCE' | 'BAND_REVERSION' | 'BAND_REVERSION_SOFT' | 'RANGE_TRAP' | 'MEAN_REVERSION' | 'AI_DISPLACEMENT' | 'SMT_REVERSAL';
        structureBreak?: string; // MSS details
        displacement?: number;   // ATR multiple
        liquiditySweep?: string; // Sweep details
        htfTrend?: string;       // HTF direction
        regime?: Regime;         // 市场环境
        momentumPriority?: boolean;
        ladderState?: 'SNIPER' | 'PREWARN' | 'DRIFT';
        entryDistanceAtr?: number;
        rejectionMetrics?: {
            wickAtr: number;
            bodyAtr: number;
            followThroughAtr: number;
        };
        vwapContext?: {
            dailyVwap: number;
            sessionVwap: number;
            sessionAnchor: 'LONDON' | 'NEW_YORK';
            reclaimSide: 'above' | 'below';
        };
        btcLeadAGradeAligned?: boolean;
        btcLeadSource?: 'BTC_TURTLE_LEAD' | 'BTC_A_LEAD' | 'BTC_SMT_REVERSAL';
        smtContext?: {
            direction: 'bullish' | 'bearish';
            anchorType: string;
            btcAnchorPrice: number;
            ethAnchorPrice: number;
            btcOvershootAtr: number;
            ethOvershootAtr: number;
            smtGap: number;
            candidateTime: number;
            expiryTime: number;
            ethSweepExtreme: number;
        };
    };

    executionFlags?: {
        hybridPullbackOnly?: boolean;
        firstImpulsePullback?: boolean;
    };

    /**
     * 算法定价引擎输出 (A级信号可直接使用，跳过 AI 分析)
     * 包含预计算的入场价、止损、止盈价格
     */
    algorithmicEntry?: {
        entryPrice: number;
        stopLoss: number;
        tp1: number;
        tp2: number;
        tp3: number;
    };
}
⋮----
strategy: StrategyType; // 策略类型
orderType: 'MARKET' | 'LIMIT'; // [新增] 订单类型：海龟汤用 MARKET，ICT 用 LIMIT
⋮----
type: 'FVG' | 'OB' | 'SWEEP'; // 增加 SWEEP
⋮----
takeProfit: number; // Default TP (usually TP3 or Range Bound)
⋮----
tp2: number;    // 30% @ 中级流动性或 2R
tp3: number;    // 20% @ 远端目标或 3R
⋮----
riskRewardRatio: number; // 盈亏比
⋮----
// 信号质量
⋮----
// 检测来源
⋮----
sweep?: LiquidityLevel; // Optional for Standard
displacement?: Displacement; // Optional for Turtle
structureBreak?: any; // Optional for Turtle
⋮----
// 上下文详情 (用于 AI 分析)
⋮----
structureBreak?: string; // MSS details
displacement?: number;   // ATR multiple
liquiditySweep?: string; // Sweep details
htfTrend?: string;       // HTF direction
regime?: Regime;         // 市场环境
⋮----
/**
     * 算法定价引擎输出 (A级信号可直接使用，跳过 AI 分析)
     * 包含预计算的入场价、止损、止盈价格
     */
⋮----
/** 交易调整建议 (顺势加仓或移动止损) */
export interface AdjustmentSetup {
    type: 'SCALE_IN' | 'TRAILING_STOP';
    direction: Direction;

    // 移动止损建议
    suggestedStopLoss?: number;

    // 加仓建议
    scalingZone?: {
        type: 'FVG' | 'OB';
        top: number;
        bottom: number;
    };

    reason: string;
    score: SignalScore;
}
⋮----
// 移动止损建议
⋮----
// 加仓建议
⋮----
export interface SqueezeStraddleCandidate {
    score: number;
    detectedAt: number;
    expiresAt: number;
    rangeHigh: number;
    rangeLow: number;
    rangeWidth: number;
    rangePercent: number;
    longTriggerPrice: number;
    shortTriggerPrice: number;
    breakoutBufferPercent: number;
    reason: string;
}
⋮----
/** 完整结构分析结果 */
export interface StructureAnalysis {
    symbol: string;
    analysisTime: number;
    currentPrice: number;
    atr: number;
    strategyProfile?: StrategyProfile;

    // 小周期结构
    h1Structure: TimeframeStructure;
    m15Structure: TimeframeStructure;
    m5Structure: TimeframeStructure;
    h4Structure: TimeframeStructure;

    // 流动性
    liquidity: LiquidityAnalysis;

    // ICT 逆向工程 - 第一层：趋势背景
    trendContext?: {
        priceAboveTrendEma: boolean;
        trendEmaValue: number;
        distanceToTrendEmaPercent: number;
        nearestBuysideLiquidity?: { type: string; price: number; distance: number };
        nearestSellsideLiquidity?: { type: string; price: number; distance: number };
        bias: 'bullish' | 'bearish' | 'neutral';
        biasStrength: 'strong' | 'moderate' | 'weak';
        biasReason: string;
    };

    // 盘整市场检测
    consolidation?: {
        isConsolidating: boolean;
        confidence: number;
        indicators: {
            bidirectionalMSS: boolean;
            atrContraction: boolean;
            narrowRange: boolean;
            whipsawSweeps: boolean;
            convergingPattern: boolean;  // 收敛形态 (楔形/三角形)
        };
        rangeInfo?: {
            high: number;
            low: number;
            rangePercent: number;
        };
        convergenceInfo?: {             // 收敛形态详情
            type: 'wedge' | 'triangle' | 'none';
            compressionRatio: number;   // 压缩比 (< 1 为收敛)
        };
        hurst?: {                       // 赫斯特指数
            value: number;
            regime: 'TRENDING' | 'RANDOM_WALK' | 'MEAN_REVERTING';
            description: string;
            signalQuality?: string;   // PE 信号质量分类
            entropyZ?: number;        // 排列熵 Z-score
        };
        volatilitySqueeze?: {
            state: 'COILING' | 'BREAKOUT' | 'NONE';
            priorH: number | null;
            currentH: number | null;
            hDelta: number | null;
            atrExpansionRatio: number | null;
            reason: string;
        };
        reason: string;
    };

    // ICT 逆向工程 - 第三层：价格反应
    pdArrayReactions?: Array<{
        zoneType: 'FVG' | 'OB';
        zoneDirection: 'bullish' | 'bearish';
        zoneTop: number;       // 区域上边界价格
        zoneBottom: number;    // 区域下边界价格
        zoneTime: number;      // 区域形成时间戳
        reactionType: 'rejection' | 'stalling' | 'piercing' | 'pending';
        reactionStrength: 'strong' | 'moderate' | 'weak' | 'none';
        timeInZoneMinutes?: number;
        tradeImplication: 'bullish' | 'bearish' | 'neutral' | 'trap_warning';
        description: string;
        // Stalling 特有字段
        smallBodyCount?: number;  // 连续小实体 K 线数量
        driftDirection?: 'bullish' | 'bearish' | 'neutral';  // 停顿期间的漂移方向
    }>;

    // 交易设置 (如果有新入场信号)
    setup?: TradeSetup;

    // 调整建议 (如果已有仓位)
    adjustments?: AdjustmentSetup[];

    // 各策略的诊断快照，方便调试/回测
    strategyInsights?: StrategyInsight[];
    // 当前分析轮次的策略路由结果
    strategyRoute?: StrategyRoute;
    strategyRouteReason?: RouteReason;
    rangeModeAssessment?: {
        active: boolean;
        softActive?: boolean;
        reason: string;
        softReason?: string;
        vwapCrossCount: number;
        vwapCrossWindow: number;
        bandwidthPercentile: number;
        bandwidthP60: number;
        currentBandwidth: number;
        expansionClusterDetected: boolean;
    };
    d1Gate?: {
        zone: 'premium' | 'discount' | 'equilibrium';
        position: number;
        rangeHigh: number;
        rangeLow: number;
        equilibrium: number;
        lookbackCandles: number;
    };
    squeezeStraddleCandidate?: SqueezeStraddleCandidate;
    turtlePriorityContext?: TurtlePriorityContext;
    // 建议写回状态记忆的 regime lock（用于下一轮路由抖动抑制）
    regimeLockSuggestion?: {
        route: 'CONSOLIDATION' | 'HYBRID';
        lockedAt: number;
        expiresAt: number;
        reason?: string;
    };

    // 用于 AI 的结构化摘要
    summary: string;
}
⋮----
// 小周期结构
⋮----
// 流动性
⋮----
// ICT 逆向工程 - 第一层：趋势背景
⋮----
// 盘整市场检测
⋮----
convergingPattern: boolean;  // 收敛形态 (楔形/三角形)
⋮----
convergenceInfo?: {             // 收敛形态详情
⋮----
compressionRatio: number;   // 压缩比 (< 1 为收敛)
⋮----
hurst?: {                       // 赫斯特指数
⋮----
signalQuality?: string;   // PE 信号质量分类
entropyZ?: number;        // 排列熵 Z-score
⋮----
// ICT 逆向工程 - 第三层：价格反应
⋮----
zoneTop: number;       // 区域上边界价格
zoneBottom: number;    // 区域下边界价格
zoneTime: number;      // 区域形成时间戳
⋮----
// Stalling 特有字段
smallBodyCount?: number;  // 连续小实体 K 线数量
driftDirection?: 'bullish' | 'bearish' | 'neutral';  // 停顿期间的漂移方向
⋮----
// 交易设置 (如果有新入场信号)
⋮----
// 调整建议 (如果已有仓位)
⋮----
// 各策略的诊断快照，方便调试/回测
⋮----
// 当前分析轮次的策略路由结果
⋮----
// 建议写回状态记忆的 regime lock（用于下一轮路由抖动抑制）
⋮----
// 用于 AI 的结构化摘要
```

## File: src/runtime/node/segment-backtest-core.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { TradeSetup } from '../../modules/structure-detector/types.js';
import {
    renderSegmentBacktestHtml,
    resolveEntryPrice,
    summarizeSignals,
    toSegmentBacktestStraddle,
    toSegmentBacktestSignal,
} from './segment-backtest-core.js';
⋮----
function createMockSetup(overrides: Partial<TradeSetup> =
```

## File: src/runtime/node/segment-backtest-core.ts
```typescript
import type { PendingLimitConfig } from '../../config/config-manager.js';
import type { StructureAnalysis, TradeSetup } from '../../modules/structure-detector/types.js';
import { applyTp1FrontRun, applyTp3FrontRun, type TakeProfitLevels } from '../../utils/take-profit-levels.js';
import { resolveStrategyTakeProfitDistribution } from '../../utils/take-profit-allocation.js';
⋮----
export interface SegmentBacktestSignal {
    symbol: string;
    observedTime: number;
    observedIsoTime: string;
    triggerTime: number;
    triggerIsoTime: string;
    observedPrice: number;
    route: string;
    strategy: TradeSetup['strategy'];
    signalFamily?: TradeSetup['context']['signalFamily'];
    direction: 'LONG' | 'SHORT';
    orderType: TradeSetup['orderType'];
    grade: TradeSetup['grade'];
    score: number;
    riskRewardRatio: number;
    entryPrice: number;
    stopLoss: number;
    tp1: number;
    tp2: number;
    tp3: number;
    zoneType: TradeSetup['entryZone']['type'];
    zoneTop: number;
    zoneBottom: number;
    zoneMidpoint?: number;
    imagePath?: string;
}
⋮----
export interface SegmentBacktestStraddle {
    symbol: string;
    observedTime: number;
    observedIsoTime: string;
    route: string;
    score: number;
    rangeHigh: number;
    rangeLow: number;
    rangeWidth: number;
    rangePercent: number;
    longTriggerPrice: number;
    shortTriggerPrice: number;
    expiresAt: number;
    expiresIsoTime: string;
}
⋮----
export interface SegmentBacktestSummary {
    totalSignals: number;
    totalStraddles: number;
    avgScore: number;
    byStrategy: Record<string, number>;
    byRoute: Record<string, number>;
    byDirection: Record<string, number>;
}
⋮----
export interface SegmentBacktestMeta {
    symbol: string;
    startTime: number;
    endTime: number;
    warmupHours: number;
    generatedAt: number;
    evaluatedTicks: number;
}
⋮----
export interface SegmentBacktestReport {
    meta: SegmentBacktestMeta;
    summary: SegmentBacktestSummary;
    signals: SegmentBacktestSignal[];
    straddles: SegmentBacktestStraddle[];
}
⋮----
interface SegmentBacktestSignalInput {
    symbol: string;
    observedTime: number;
    observedPrice: number;
    atr?: number;
    pendingLimitConfig?: Pick<
        PendingLimitConfig,
        'tp1FrontRunEnabled' |
        'tp1FrontRunAtrMultiplier' |
        'tp1FrontRunMinRelativeBuffer' |
        'tp1FrontRunMaxRiskFraction' |
        'tp1FrontRunMinRiskMultiple'
    >;
    analysis: Pick<StructureAnalysis, 'setup' | 'strategyRoute' | 'squeezeStraddleCandidate'>;
}
⋮----
export function resolveEntryPrice(setup: TradeSetup): number
⋮----
function resolveStopLoss(setup: TradeSetup): number
⋮----
function resolveTakeProfitLevels(setup: TradeSetup): TakeProfitLevels
⋮----
function resolveExecutableTakeProfitLevels(input: SegmentBacktestSignalInput, setup: TradeSetup): TakeProfitLevels
⋮----
export function toSegmentBacktestSignal(input: SegmentBacktestSignalInput): SegmentBacktestSignal | undefined
⋮----
export function toSegmentBacktestStraddle(input: SegmentBacktestSignalInput): SegmentBacktestStraddle | undefined
⋮----
export function summarizeSignals(
    signals: SegmentBacktestSignal[],
    straddles: SegmentBacktestStraddle[] = [],
): SegmentBacktestSummary
⋮----
function escapeHtml(input: string): string
⋮----
export function renderSegmentBacktestHtml(report: SegmentBacktestReport): string
```

## File: src/runtime/node/shadow-runtime.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import { resolveShadowRuntimeConfig } from './shadow-runtime.js';
```

## File: src/tests/quality-gate-lib.test.ts
```typescript
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import {
    evaluateQualityPolicy,
    loadEslintResults,
    normalizeCoveragePath,
} from '../../scripts/quality/lib.mjs';
```

## File: src/controller/fill-sync.ts
```typescript
/**
 * 成交记录同步模块
 * 从交易所拉取 fills 并写入 trade-log
 */
⋮----
import type { GenericFill, IExecutor } from "../modules/executor/index.js";
import type { StateStore } from "../modules/state-store/index.js";
import type { KvStore } from "../types/runtime.js";
import type { ConfigManager } from "../config/config-manager.js";
import { logger } from "../utils/index.js";
import type { TradeLogEntry } from "../types/index.js";
⋮----
function buildFillDedupKey(fill: GenericFill): string
⋮----
function resolveFillProvider(fill: GenericFill, configManager: ConfigManager): string
⋮----
function normalizeOrderId(orderId: string | undefined): string
⋮----
export function resolveFillTraceIdFromRecentLogs(fill: GenericFill, recentLogs: TradeLogEntry[]): string | undefined
⋮----
export async function syncTradeLogsFromFills(deps: {
  executor: IExecutor;
  stateStore: StateStore;
  kv: KvStore;
  configManager: ConfigManager;
}): Promise<void>
```

## File: src/controller/m15-reversal-close-guard.ts
```typescript
import type { CandleWithIndicators } from '../types/market-data.js';
import type { Direction } from '../modules/structure-detector/types.js';
import type { BreakoutContext } from '../types/trading-state.js';
⋮----
type GuardAction = 'HOLD' | 'MOVE_SL' | 'CLOSE';
⋮----
type BreakSnapshot = {
    direction: Direction;
    price?: number;
};
⋮----
export type M15ReverseCloseGuardParams = {
    requestedAction: GuardAction;
    tradeDirection: 'LONG' | 'SHORT';
    signalFamily?: 'SWEEP_SFP' | 'VWAP_BOUNCE' | 'BAND_REVERSION' | 'BAND_REVERSION_SOFT' | 'RANGE_TRAP' | 'MEAN_REVERSION' | 'AI_DISPLACEMENT' | 'SMT_REVERSAL';
    reversalSignal?: boolean;
    tradeOpenedAt?: number;
    evaluatedAt?: number;
    h1Break?: BreakSnapshot;
    m15Break?: BreakSnapshot;
    entryObInvalidationPrice?: number;
    stopLossPrice?: number;
    currentPnlR?: number;
    minLossRToAllowClose?: number;
    m5Closes: number[];
    h1Closes?: number[];
    h1Candles?: CandleWithIndicators[];
    m15Closes?: number[];
    m15Candles?: CandleWithIndicators[];
    breakoutContext?: BreakoutContext;
    requiredConsecutiveCloses?: number;
};
⋮----
export type M15ReverseCloseGuardDecision = {
    allowClose: boolean;
    reason: string;
    forceClose?: boolean;
};
⋮----
type GuardTimeframe = 'M15' | 'H1';
⋮----
function oppositeDirection(direction: 'LONG' | 'SHORT'): Direction
⋮----
function isCloseBeyondBreak(
    tradeDirection: 'LONG' | 'SHORT',
    close: number,
    breakPrice: number,
): boolean
⋮----
function countTrailingConfirmedCloses(
    tradeDirection: 'LONG' | 'SHORT',
    closes: number[],
    breakPrice: number,
): number
⋮----
function evaluateBreakoutFailure(params: {
    tradeDirection: 'LONG' | 'SHORT';
    tradeOpenedAt?: number;
    evaluatedAt?: number;
    breakoutContext?: BreakoutContext;
    h1Closes: number[];
    h1Candles?: CandleWithIndicators[];
    m15Closes: number[];
    m15Candles?: CandleWithIndicators[];
}): M15ReverseCloseGuardDecision | undefined
⋮----
function getBreakoutConfirmationCloses(params: {
    timeframe: GuardTimeframe;
    tradeOpenedAt?: number;
    evaluatedAt?: number;
    candles?: CandleWithIndicators[];
    fallbackCloses: number[];
}): number[]
⋮----
export function evaluateM15ReverseCloseGuard(
    params: M15ReverseCloseGuardParams,
): M15ReverseCloseGuardDecision
⋮----
// SWEEP_SFP (turtle soup core): do not close on reversal momentum.
// Only allow runtime close when stop structure itself is breached.
```

## File: src/controller/state-handlers.test.ts
```typescript
import { describe, expect, it, vi } from 'vitest';
import { StateHandlers } from './state-handlers.js';
import type { TradingState } from '../types/index.js';
⋮----
function createOpenState(): TradingState
⋮----
function createIdleState(): TradingState
⋮----
// Inject a getDynamicEntryRiskCapPercent that returns 1.6
⋮----
// Should have halved: 1.6 * 0.5 = 0.8
⋮----
// Should NOT be halved
```

## File: src/http/api.ts
```typescript
/**
 * ICT Trading Bot - HTTP API (Node runtime)
 */
⋮----
import { Hono } from 'hono';
import type { Context } from 'hono';
import { cors } from 'hono/cors';
import { createScheduler } from '../controller/scheduler.js';
import { logger } from '../utils/index.js';
import { createStateStore } from '../modules/state-store/index.js';
import { createDataFetcher, createHyperliquidMarketClient, createYahooFinanceClient, HyperliquidMarketClient } from '../modules/data-fetcher/index.js';
import { createConfigManager } from '../config/config-manager.js';
import type { Env } from './env.js';
import { resolveCloudLogger } from './cloud-logger.js';
import type { ChartSnapshot, DecisionLogEntry, MultiTimeframeData } from '../types/index.js';
import {
    buildOrderProviderHintsByOrderKey,
    buildEntryLabelBreakdown,
    buildLaneTradeSummary,
    buildRecentTradeRows,
    buildTradeContextByOrderKey,
    collectDecisionContextSymbols,
    filterTradesByExperiment,
    summarizeClosedTrades,
} from './trade-performance.js';
import { emergencyResetToIdle, resumeAutomationFromIdle } from '../controller/emergency-state-reset.js';
⋮----
export function createApiApp()
⋮----
type V1ErrorBody = {
        success: false;
        error: {
            code: string;
            message: string;
            details?: unknown;
        };
    };
⋮----
type V1SuccessBody<T> = {
        success: true;
        data: T;
        meta?: Record<string, unknown>;
    };
⋮----
function getHyperliquidClient(useTestnet: boolean)
⋮----
function shouldUseYahooPrice(symbol: string): boolean
⋮----
function v1Ok<T>(data: T, meta?: Record<string, unknown>): V1SuccessBody<T>
⋮----
function v1Err(code: string, message: string, details?: unknown): V1ErrorBody
⋮----
function getConfiguredBearerToken(env: Env): string
⋮----
function extractBearerToken(headerValue?: string): string
⋮----
function isLocalRequest(c: Context): boolean
⋮----
function isBearerAuthorized(c: Context, env: Env): boolean
⋮----
if (isLocalRequest(c)) return true; // localhost 跳过鉴权
⋮----
if (!configuredToken) return true; // auth disabled when token is not set
⋮----
async function loadStateWithLatestPrice(env: Env, symbol: string)
⋮----
async function loadDecisionLogs(
        env: Env,
        symbol: string,
        page: number,
        pageSize: number
)
⋮----
function isAlgorithmDirectEntryLog(log: DecisionLogEntry): boolean
⋮----
function hasEmbeddedCharts(log: DecisionLogEntry): boolean
⋮----
function buildHistoricalMarketDataSnapshot(
        marketData: MultiTimeframeData,
        cutoffTimestamp: number
): MultiTimeframeData
⋮----
const clipCandles = <T extends
⋮----
async function enrichAlgorithmicEntryCharts(
        env: Env,
        symbol: string,
        logs: DecisionLogEntry[]
): Promise<DecisionLogEntry[]>
⋮----
async function loadCloudLogs(env: Env, limit: number, cursor?: string)
⋮----
function parsePositiveLimit(raw: string | undefined, fallback: number, max: number): number
⋮----
function parseBoolean(raw: string | undefined): boolean
⋮----
function parseShadowSymbols(raw: string | undefined): string[]
⋮----
function resolveAnalysisProvider(raw: string | undefined): 'deepseek' | 'qwen' | 'zai'
⋮----
function resolveVisionProvider(raw: string | undefined): 'zai' | 'gemini'
⋮----
function calculateTradeSharpe(series: number[]): number
⋮----
function compressEquityCurve(
        points: Array<{ time: number; equity: number; drawdown: number; drawdownPct: number }>,
        maxPoints = 220
): Array<
⋮----
function aggregatePnlByPeriod(
        fills: Array<{ pnl?: number; fee?: number; time: number }>,
        granularity: 'month' | 'year'
): Array<
⋮----
type Bucket = {
            grossPnl: number;
            fees: number;
            netPnl: number;
            trades: number;
            wins: number;
            losses: number;
        };
⋮----
async function loadDecisionContexts(
        env: Env,
        symbols: string[],
): Promise<DecisionLogEntry[]>
⋮----
async function loadTrades(
        env: Env,
        limit: number,
        provider: string,
        symbol?: string
): Promise<
⋮----
type NormalizedFill = {
            orderId?: string;
            symbol: string;
            side: 'BUY' | 'SELL';
            price: number;
            size: number;
            pnl?: number;
            fee?: number;
            time: number;
            provider?: string;
        };
⋮----
const aggregateClosedTradesByOrder = (input: NormalizedFill[]): NormalizedFill[] =>
⋮----
async function createApiExecutor(env: Env)
⋮----
function buildOpenApiSpec(c: Context)
⋮----
// debug middleware
⋮----
// Auth Middleware
⋮----
// Public routes
⋮----
if (url.pathname === '/') return next(); // Root path handled separately or redirects
if (url.pathname === '/api/auth/verify' && c.req.method === 'POST') return next(); // Login endpoint
⋮----
// Check Auth
⋮----
/**
      * 根路径 - 返回 Dashboard
      */
function isAuthorized(c: Context, env: Env): boolean
⋮----
function isPublicCloudImage(key: string): boolean
⋮----
// v1 - OpenAPI standardized routes (for dashboard and external agents)
⋮----
/**
      * 获取交易状态
      */
⋮----
/**
      * 获取决策日志 (支持分页)
      */
⋮----
/**
      * 验证凭证
      */
⋮----
/**
      * 手动触发端点（用于测试）
      */
⋮----
/**
      * Get configured symbols for dashboard
      */
⋮----
/**
      * Cloud Logs List
      */
⋮----
/**
      * Cloud Log Content (JSON or Image)
      */
⋮----
// Image or other file
⋮----
/**
      * Download AI Prompts and Responses as TXT
      * Supports filtering by symbol (BTC, ETH, SOL, or ALL) and date range
      */
⋮----
// Parse date range if provided
⋮----
// Note: The local log store does not support cursors.
// We fetch from the beginning (newest first) and filter by date after.
⋮----
const result = await cloudLogger.listLogs(limit * 3); // Fetch without cursor
⋮----
// Collect logs
⋮----
// Filter by symbol if specified
⋮----
// Filter by date range if specified
⋮----
// Build filename with date range if specified
⋮----
/**
      * Trade History (Hyperliquid + Tiger)
      */
⋮----
/**
      * 清算监控相关路由 (转发给监控服务)
      */
⋮----
// 转发请求，剥离 /liquidation 前缀
⋮----
// 如果 path 为空，默认为 /status
⋮----
// 创建新请求
⋮----
/**
      * 404 Handler
      */
```

## File: src/modules/structure-detector/strategies/turtle-soup/sfp-core.ts
```typescript
/**
 * SFP (Swing Failure Pattern) Core
 *
 * 包含 SFP 子策略所需的全部辅助函数及主检测入口 detectSfpSetup。
 * 由 turtle-soup.ts 编排层调用。
 */
⋮----
import type { TradeSetup, LiquidityAnalysis, LiquidityLevel, Direction } from '../../types.js';
import type { ConsolidationResult } from '../../consolidation.js';
import type { Candle } from '../../../../types/index.js';
import type { TurtleSoupConfig, SignalGradeConfig } from '../../../../config/config-manager.js';
import type { ThirdPushExhaustionResult } from '../../third-push-exhaustion.js';
import type { RangeModeAssessment } from './range-mode.js';
import { validateEntryDistance } from '../enhancers/entry-distance.js';
import { ensureRiskRewardGuard } from '../enhancers/risk-metrics.js';
import { getTakeProfitConfig, computeTakeProfitPrices } from '../enhancers/take-profit.js';
import { computeRangeTakeProfitLevels } from '../enhancers/range-take-profit.js';
import { getSignalGradeFromTotal } from '../../signal-scorer.js';
⋮----
// ── 入场检测常量（可通过 TurtleSoupConfig 覆盖）────────────────────────────────
⋮----
// ── 类型定义 ───────────────────────────────────────────────────────────────────
export type TurtleSoupMode = 'DEFAULT' | 'HYBRID_SOFT';
type TurtlePrioritySource = 'EXTREME_SWEEP' | 'TREND_EXHAUSTION' | 'H4_RANGE_EDGE';
⋮----
export interface TurtleSoupInput {
    symbol: string;
    currentPrice: number;
    atr: number;
    liquidity: LiquidityAnalysis;
    consolidation: ConsolidationResult;
    m5Candles: Candle[];
    h1Candles?: Candle[];
    h4Candles?: Candle[];
    timestamp: number;
    mode?: TurtleSoupMode;
    forcePriority?: boolean;
    priorityDirection?: Direction;
    prioritySource?: TurtlePrioritySource;
    preferH1Execution?: boolean;
    preferSfpExecution?: boolean;
    rangeMode?: RangeModeAssessment;
    bandReversionOnly?: boolean;
    signalGradeConfig?: SignalGradeConfig;
    /** Pre-computed 3-push exhaustion for the prior trend (opposite of expected trade direction).
     *  When detected and direction ≠ trade direction, adds a score bonus confirming the reversal. */
    thirdPushExhaustion?: ThirdPushExhaustionResult;
}
⋮----
/** Pre-computed 3-push exhaustion for the prior trend (opposite of expected trade direction).
     *  When detected and direction ≠ trade direction, adds a score bonus confirming the reversal. */
⋮----
export interface TurtleSoupThresholds {
    minPenetrationAtr: number;
    minPenetrationRel: number;
    maxEntryDistanceAtr: number;
    maxEntryDistanceRel: number;
    minRejectionWickAtr: number;
    minRejectionBodyAtr: number;
    minRejectionRecoveryAtr: number;
}
⋮----
type LadderState = 'SNIPER' | 'PREWARN' | 'DRIFT';
⋮----
interface LadderEvaluation {
    state: LadderState;
    normalizedDistance: number;
    bonus: number;
    reason: string;
}
⋮----
interface RejectionEvaluation {
    allowed: boolean;
    bonus: number;
    diagnostics: string[];
    wickAtr: number;
    bodyAtr: number;
    followThroughAtr: number;
}
⋮----
interface PrioritySweepRecoveryEvaluation {
    allowed: boolean;
    diagnostics: string[];
}
⋮----
interface RangeEdgeEvaluation {
    allowed: boolean;
    diagnostics: string[];
}
⋮----
interface ResweepProgressEvaluation {
    allowed: boolean;
    diagnostics: string[];
}
⋮----
interface PostSweepStabilityEvaluation {
    allowed: boolean;
    diagnostics: string[];
}
⋮----
interface SyntheticH4RangeLevels {
    high: number;
    low: number;
    timestamp: number;
}
⋮----
// ── 辅助工具 ───────────────────────────────────────────────────────────────────
export function safeAtrValue(atr: number): number
⋮----
export function resolveThresholds(mode: TurtleSoupMode, config?: TurtleSoupConfig): TurtleSoupThresholds
⋮----
export function evaluateLadderState(
    distance: number,
    atr: number,
    sniperAtrDistance?: number,
    prewarnAtrDistance?: number,
): LadderEvaluation
⋮----
function canRelaxDriftForPrioritySweep(params: {
    input: TurtleSoupInput;
    levelType: string;
    ladder: LadderEvaluation;
    hasRecoveryEvidence: boolean;
}): boolean
⋮----
function canRelaxEntryDistanceForPrioritySweep(params: {
    input: TurtleSoupInput;
    levelType: string;
    entryDistance: number;
    atr: number;
}): boolean
⋮----
function canBypassRangeEdgeForPrioritySweep(params: {
    input: TurtleSoupInput;
    level: LiquidityLevel;
    direction: Direction;
}): boolean
⋮----
function resolveStopLossForPrioritySweep(params: {
    input: TurtleSoupInput;
    level: LiquidityLevel;
    direction: Direction;
    sweepExtreme: number;
    atr: number;
}):
⋮----
function evaluatePrioritySweepRecovery(params: {
    input: TurtleSoupInput;
    level: LiquidityLevel;
    direction: Direction;
    atr: number;
    thresholds: TurtleSoupThresholds;
}): PrioritySweepRecoveryEvaluation
⋮----
function hasPriorityRecoveredSweepPattern(params: {
    input: TurtleSoupInput;
    level: LiquidityLevel;
    direction: Direction;
}): boolean
⋮----
function resolvePrioritySweepExtreme(params: {
    input: TurtleSoupInput;
    level: LiquidityLevel;
    direction: Direction;
    prevCandle: Candle;
}): number
⋮----
export function evaluateM5Rejection(params: {
    prevCandle: Candle;
    latestCandle: Candle;
    direction: Direction;
    atr: number;
    levelPrice: number;
    thresholds: TurtleSoupThresholds;
    timeframeLabel?: 'M5' | 'H1';
}): RejectionEvaluation
⋮----
export function evaluateRangeEdge(params: {
    direction: Direction;
    levelPrice: number;
    entryPrice: number;
    rangeHigh: number;
    rangeLow: number;
    levelType?: string;
    rangeEdgeMaxRatio?: number;
    rangeEdgeMaxRatioEq?: number;
    rangeEntryMaxBullishRatio?: number;
    rangeEntryMinBearishRatio?: number;
}): RangeEdgeEvaluation
⋮----
export function evaluateResweepProgress(params: {
    candles: Candle[];
    direction: Direction;
    levelPrice: number;
    currentPenetration: number;
    atr: number;
    minExtensionAtr?: number;
    lookbackBars?: number;
}): ResweepProgressEvaluation
⋮----
function calculateRangeEdgeConfluenceBonus(params: {
    direction: Direction;
    levelPrice: number;
    rangeHigh: number;
    rangeLow: number;
    atr: number;
}):
⋮----
export function evaluatePostSweepStability(params: {
    prevCandle: Candle;
    latestCandle: Candle;
    direction: Direction;
    atr: number;
    retestToleranceAtr?: number;
}): PostSweepStabilityEvaluation
⋮----
function deriveSyntheticH4RangeLevels(input: TurtleSoupInput): SyntheticH4RangeLevels | null
⋮----
export function collectCandidateLevels(
    liquidity: LiquidityAnalysis,
    syntheticH4Range?: SyntheticH4RangeLevels | null,
): LiquidityLevel[]
⋮----
const pushLevel = (level?: LiquidityLevel) =>
⋮----
export function calculateLevelQuality(level: LiquidityLevel, currentTimestamp: number):
⋮----
// ── SFP 主检测入口 ─────────────────────────────────────────────────────────────
export function detectSfpSetup(input: TurtleSoupInput, config?: TurtleSoupConfig): TradeSetup | null
```

## File: src/modules/structure-detector/strategies/first-impulse.ts
```typescript
import type { CandleWithIndicators } from '../../../types/market-data.js';
import type { Candle } from '../../../types/index.js';
import type { Direction, Displacement, StrategyRoute, TimeframeStructure, FVG } from '../types.js';
import type { ConsolidationResult } from '../consolidation.js';
⋮----
function findCandleByTimestamp(candles: Candle[], timestamp?: number): Candle | undefined
⋮----
function computeImpulseRelativeVolume(candles: Candle[], candleIndex: number): number | undefined
⋮----
export function hasFirstImpulseQuality(params: {
    candles: Candle[];
    breakTime?: number;
    direction: Direction;
}): boolean
⋮----
export function hasExclusiveFirstImpulseFvg(params: {
    fvgs: Array<{
        type: Direction;
        time: number;
        confirmedAt?: number;
        filled?: boolean;
        fillType?: string;
    }>;
    direction: Direction;
    referenceTime: number;
}): boolean
⋮----
export function isFirstImpulsePullbackEligible(params: {
    route?: StrategyRoute;
    consolidation: ConsolidationResult;
    timestamp: number;
    m15Candles: Candle[];
    h1Structure: Pick<TimeframeStructure, 'structureBreak'>;
    m15Structure: Pick<TimeframeStructure, 'structureBreak' | 'displacement' | 'fvgs'>;
}): boolean
```

## File: src/modules/structure-detector/strategies/standard-ict.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import {
    detectStandardSetup,
    findNearestHtfLiquidityTarget,
    findTakeProfitTargets,
    rankStandardIctEntryFvgs,
    rankPostDisplacementEntryFvgs,
    selectStandardIctEntryFvgs,
    resolveStandardIctVwapConfirmationWindow,
    resolveStandardIctVwapEntryPolicy,
    shouldBlockStandardIctByH4Zone,
    shouldBlockStandardIctByKeltnerExtreme,
} from './standard-ict.js';
import type { FVG } from '../types.js';
import type { Candle } from '../../../types/index.js';
⋮----
function buildH1Series(params: {
    start: number;
    base: number;
    closes: number[];
    wick?: number;
    volume?: number;
}): Candle[]
⋮----
function buildM15TrendSeries(params: {
    start: number;
    base: number;
    count?: number;
}): Candle[]
⋮----
const makeFvg = (overrides: Partial<FVG>): FVG => (
⋮----
const makeCandle = (datetime: number, overrides: Partial<Candle> =
⋮----
const makeLiquidity = () => (
⋮----
const makeStructure = (overrides: Record<string, unknown> =
```

## File: src/runtime/node/segment-backtest.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { CandleWithIndicators } from '../../types/index.js';
import type { SegmentBacktestStraddle } from './segment-backtest-core.js';
import {
  candleCloseTime,
  nextSqueezeConsecutiveCycleCount,
  resolveIntradayFetchStart,
  shouldRecordStraddle,
  upperBoundByCloseTime,
} from './segment-backtest.js';
⋮----
function candle(timestamp: string): CandleWithIndicators
```

## File: src/types/trading-state.ts
```typescript
/**
 * 交易状态类型定义
 */
⋮----
import type { ChartSnapshot } from './market-data.js';
import type { StrategyRoute, StrategyType } from '../modules/structure-detector/types.js';
import type { TradeSetup } from '../modules/structure-detector/types.js';
⋮----
/** 交易状态枚举 */
export type TradingStatus = 'IDLE' | 'SNIPER' | 'PENDING_LIMIT' | 'PENDING' | 'OPEN' | 'STRADDLE';
⋮----
/** AI 决策类型 */
export type AIDecision = 'WAIT' | 'LONG' | 'SHORT';
⋮----
/** 挂单确认动作 */
export type PendingAction = 'KEEP' | 'CANCEL';
⋮----
/** 持仓管理动作 */
export type PositionAction = 'HOLD' | 'MOVE_SL' | 'CLOSE';
⋮----
/** 短期记忆 - 上一轮分析上下文 */
export interface ShortTermMemory {
    lastDecision: AIDecision;
    lastReasoning: string;
    watchedLevels: number[];
    updatedAt: number;
    /**
     * IDLE 跳过 AI 时的结构签名，仅在结构变化时写 WAIT 日志
     */
    lastSkipStructureSignature?: string;
    /**
     * OPEN / PENDING 自适应轮询缓存
     * 用于记录上次 AI 分析时的市场快照，避免每轮都重复调用
     */
    adaptivePolling?: {
        lastManagedAiAt?: number;
        lastManagedPrice?: number;
        lastManagedSignature?: string;
        /**
         * 绑定当前管理对象（OPEN/PENDING + activeTrade），避免新仓复用旧 baseline
         */
        tradeKey?: string;
    };
    /** 最近止损记录 (用于反转冷却期) */
    lastStopLoss?: {
        direction: 'LONG' | 'SHORT';
        time: number;
        price: number;
        pnl?: number;
    };
    /** 最近 Runaway 取消记录 (用于避免快速重复挂单) */
    lastRunawayCancel?: {
        direction: 'LONG' | 'SHORT';
        time: number;
        /** 取消时的价格 */
        price: number;
    };
    /** 最近 AI 提前平仓记录 (用于同向短冷却) */
    lastAIEarlyExit?: {
        direction: 'LONG' | 'SHORT';
        time: number;
        /** AI 平仓时价格 */
        price: number;
        /** 冷却失效时间戳 */
        expiresAt: number;
    };
    /** 当前交易链路追踪 ID（用于关联 decision_logs 与 trade_logs） */
    currentTraceId?: string;
    /**
     * 市场体制锁 (Regime Lock)
     * 用于抑制震荡场景中 TREND/HYBRID 高频来回切换造成的噪音入场。
     */
    regimeLock?: {
        route: 'CONSOLIDATION' | 'HYBRID';
        lockedAt: number;
        expiresAt: number;
        reason?: string;
    };
    /** 最近 Squeeze Straddle 止损记录 (用于 whipsaw 冷却) */
    lastStraddleSl?: {
        time: number;
    };
    /**
     * 手工干预锁：用于紧急 reset 后短暂停止自动交易，避免与人工操作冲突。
     */
    manualIntervention?: {
        activatedAt: number;
        expiresAt?: number;
        reason: string;
    };
}
⋮----
/**
     * IDLE 跳过 AI 时的结构签名，仅在结构变化时写 WAIT 日志
     */
⋮----
/**
     * OPEN / PENDING 自适应轮询缓存
     * 用于记录上次 AI 分析时的市场快照，避免每轮都重复调用
     */
⋮----
/**
         * 绑定当前管理对象（OPEN/PENDING + activeTrade），避免新仓复用旧 baseline
         */
⋮----
/** 最近止损记录 (用于反转冷却期) */
⋮----
/** 最近 Runaway 取消记录 (用于避免快速重复挂单) */
⋮----
/** 取消时的价格 */
⋮----
/** 最近 AI 提前平仓记录 (用于同向短冷却) */
⋮----
/** AI 平仓时价格 */
⋮----
/** 冷却失效时间戳 */
⋮----
/** 当前交易链路追踪 ID（用于关联 decision_logs 与 trade_logs） */
⋮----
/**
     * 市场体制锁 (Regime Lock)
     * 用于抑制震荡场景中 TREND/HYBRID 高频来回切换造成的噪音入场。
     */
⋮----
/** 最近 Squeeze Straddle 止损记录 (用于 whipsaw 冷却) */
⋮----
/**
     * 手工干预锁：用于紧急 reset 后短暂停止自动交易，避免与人工操作冲突。
     */
⋮----
/** 止盈级别 */
export interface TakeProfitLevel {
    level: 1 | 2 | 3;           // TP1, TP2, TP3
    price: number;               // 止盈价格
    percentage: number;          // 平仓比例 (0-100)
    filled: boolean;             // 是否已成交
    filledAt?: number;           // 成交时间
    orderId?: string;            // Hyperliquid 订单 ID
}
⋮----
level: 1 | 2 | 3;           // TP1, TP2, TP3
price: number;               // 止盈价格
percentage: number;          // 平仓比例 (0-100)
filled: boolean;             // 是否已成交
filledAt?: number;           // 成交时间
orderId?: string;            // Hyperliquid 订单 ID
⋮----
/** 移动止盈配置 */
export interface TrailingStopConfig {
    enabled: boolean;
    lastMoveR: number;           // 上次移动时的 R 值 (0, 1, 1.5, 2...)
    currentSlPrice: number;      // 当前止损价
    aiLastMoveCandleTime?: number; // 最近一次 AI MOVE_SL 对应的 M15 K 线时间
    aiLastMovePrice?: number;      // 最近一次 AI MOVE_SL 生效价
}
⋮----
lastMoveR: number;           // 上次移动时的 R 值 (0, 1, 1.5, 2...)
currentSlPrice: number;      // 当前止损价
aiLastMoveCandleTime?: number; // 最近一次 AI MOVE_SL 对应的 M15 K 线时间
aiLastMovePrice?: number;      // 最近一次 AI MOVE_SL 生效价
⋮----
export interface BreakoutContext {
    type: 'BOX_BREAKOUT';
    rangeHigh: number;
    rangeLow: number;
    confirmTimeframe: 'H1' | 'M15';
    reclaimConfirmBars: number;
}
⋮----
/** 中期记忆 - 活跃交易上下文 */
export interface ActiveTrade {
    id: string;
    traceId?: string;
    symbol: string;
    direction: 'LONG' | 'SHORT';
    strategy?: StrategyType;
    strategyRoute?: StrategyRoute;
    entryLogic: string;
    entryPrice: number;
    slPrice: number;                    // 初始止损价
    tpPrice: number;                    // 最终目标价 (TP3)
    positionSize: number;               // 初始仓位大小
    remainingSize: number;              // 剩余仓位 (分批止盈后减少)
    setupValidityTime: number;
    createdAt: number;
    signalFamily?: TradeSetup['context']['signalFamily'];
    entryAtr?: number;
    entryZone?: {
        type?: 'FVG' | 'OB' | 'IFVG' | 'SWEEP';
        top: number;
        bottom: number;
        midpoint?: number;
    };
    breakoutContext?: BreakoutContext;

    // 分批止盈
    tpLevels: TakeProfitLevel[];

    // 移动止盈
    trailingStop: TrailingStopConfig;

    // 止损单 ID (用于取消旧止损单)
    slOrderId?: string;
}
⋮----
slPrice: number;                    // 初始止损价
tpPrice: number;                    // 最终目标价 (TP3)
positionSize: number;               // 初始仓位大小
remainingSize: number;              // 剩余仓位 (分批止盈后减少)
⋮----
// 分批止盈
⋮----
// 移动止盈
⋮----
// 止损单 ID (用于取消旧止损单)
⋮----
/** 狙击模式上下文 - B 级信号触发后进入，等待 M5 确认 */
export interface SniperContext {
    triggeredAt: number;        // 触发时间
    triggerPrice: number;       // 触发价格
    direction: 'LONG' | 'SHORT';
    entryZone: {
        type: 'FVG' | 'OB';
        top: number;
        bottom: number;
    };
    entryZoneAdjustment?: 'OTE';     // 是否对入场区做了 OTE 微调
    protectionPrice: number;    // 止损保护价
    expiresAt: number;          // 信号过期时间 (4 小时)
    attempts: number;           // 入场尝试次数
    m15DisplacementMagnitude: number;
    extensionCount?: number;    // 续期次数 (最多 2 次)
    signalGrade?: 'A' | 'B' | 'C';    // 信号等级 (海龟汤场景允许 C 级执行)
    structureBreakType?: 'MSS' | 'BOS';  // 结构破坏类型 (MSS 反转 / BOS 顺势)
    forceM5MSSConfirmation?: boolean;    // 是否强制要求 M5 MSS 确认
    forceM5Reason?: string;              // 强制确认的原因 (HTF 风险提示)
    higherTfContext?: string;            // 提供给 AI 的高周期上下文
    chaseAttempted?: boolean;            // 动能追单是否已触发
    triggerSource?: 'SIGNAL' | 'AUTO_REVERSAL' | 'TREND_RESUMPTION';
    reentryMode?: boolean;               // 平仓后重入（同向续势或反手）场景，执行层优先保证成交
    originStrategy?: StrategyType;       // 触发狙击时的策略来源
    originRoute?: StrategyRoute;         // 触发狙击时的路由体制
    originIsConsolidating?: boolean;     // 触发狙击时 HTF 是否盘整
    riskPercentMultiplier?: number;      // 针对特定 setup 的风险折扣
}
⋮----
triggeredAt: number;        // 触发时间
triggerPrice: number;       // 触发价格
⋮----
entryZoneAdjustment?: 'OTE';     // 是否对入场区做了 OTE 微调
protectionPrice: number;    // 止损保护价
expiresAt: number;          // 信号过期时间 (4 小时)
attempts: number;           // 入场尝试次数
⋮----
extensionCount?: number;    // 续期次数 (最多 2 次)
signalGrade?: 'A' | 'B' | 'C';    // 信号等级 (海龟汤场景允许 C 级执行)
structureBreakType?: 'MSS' | 'BOS';  // 结构破坏类型 (MSS 反转 / BOS 顺势)
forceM5MSSConfirmation?: boolean;    // 是否强制要求 M5 MSS 确认
forceM5Reason?: string;              // 强制确认的原因 (HTF 风险提示)
higherTfContext?: string;            // 提供给 AI 的高周期上下文
chaseAttempted?: boolean;            // 动能追单是否已触发
⋮----
reentryMode?: boolean;               // 平仓后重入（同向续势或反手）场景，执行层优先保证成交
originStrategy?: StrategyType;       // 触发狙击时的策略来源
originRoute?: StrategyRoute;         // 触发狙击时的路由体制
originIsConsolidating?: boolean;     // 触发狙击时 HTF 是否盘整
riskPercentMultiplier?: number;      // 针对特定 setup 的风险折扣
⋮----
/** 限价单等待成交上下文 */
export interface PendingLimitContext {
    orderId: string;           // 限价单 ID
    traceId?: string;
    symbol: string;
    direction: 'LONG' | 'SHORT';
    strategy?: StrategyType;
    strategyRoute?: StrategyRoute;
    entryPrice: number;        // AI 决定的入场价
    slPrice: number;           // 预设止损价（成交后下单）
    tpPrice: number;           // 预设止盈价 (最终目标)
    tpLevels: {                // 具体的止盈阶梯 (ICT 结构目标)
        tp1: number;
        tp2: number;
        tp3: number;
    };
    tpDistribution?: {
        tp1: number;
        tp2: number;
        tp3: number;
    };
    signalFamily?: TradeSetup['context']['signalFamily'];
    entryAtr?: number;
    size: number;              // 下单数量
    placedAt: number;          // 下单时间
    expiresAt: number;         // 订单过期时间
    reasoning: string;         // AI 入场理由
    slOrderId?: string;        // 预先挂出的止损单 ID（双保险）
    watchRegistered?: boolean; // 是否已注册到 OrderFillWatcher
    adaptivePlan?: {
        type: 'A_GRADE_FAST_IMPROVE';
        phase: 'FAST' | 'IMPROVE';
        fastEntryPrice: number;
        improveEntryPrice: number;
        fastExpiresAt: number;
        improveExpiresAt: number;
        displacementMagnitude?: number;
        switchedAt?: number;
    };
    entryZone?: {
        type?: 'FVG' | 'OB' | 'IFVG' | 'SWEEP';
        top: number;
        bottom: number;
        midpoint?: number;
    };
    breakoutContext?: BreakoutContext;
    executionFlags?: {
        hybridPullbackOnly?: boolean;
    };
    repricePolicy?: {
        mode: 'A_FAST_EDGE';
        maxReprices: number;
        repricesDone: number;
    };
}
⋮----
orderId: string;           // 限价单 ID
⋮----
entryPrice: number;        // AI 决定的入场价
slPrice: number;           // 预设止损价（成交后下单）
tpPrice: number;           // 预设止盈价 (最终目标)
tpLevels: {                // 具体的止盈阶梯 (ICT 结构目标)
⋮----
size: number;              // 下单数量
placedAt: number;          // 下单时间
expiresAt: number;         // 订单过期时间
reasoning: string;         // AI 入场理由
slOrderId?: string;        // 预先挂出的止损单 ID（双保险）
watchRegistered?: boolean; // 是否已注册到 OrderFillWatcher
⋮----
export interface StraddleContext {
    longOrderId?: string;
    shortOrderId?: string;
    longTriggerPrice: number;
    shortTriggerPrice: number;
    rangeHigh: number;
    rangeLow: number;
    rangeWidth: number;
    size: number;
    armedAt: number;
    expiresAt: number;
    reason: string;
    breakoutBufferPercent: number;
    watchRegistered?: {
        long: boolean;
        short: boolean;
    };
}
⋮----
/** 完整交易状态（存储在 KV 中） */
export interface TradingState {
    symbol: string;
    status: TradingStatus;
    lastUpdated: number;
    memory: ShortTermMemory;
    activeTrade?: ActiveTrade;
    sniperContext?: SniperContext;              // B 级信号狙击模式上下文
    pendingLimitContext?: PendingLimitContext;  // A 级信号限价单上下文
    straddleContext?: StraddleContext;
    latestPrice?: number;                       // 最近一次查询到的价格
    priceUpdatedAt?: number;                    // 价格更新时间戳
}
⋮----
sniperContext?: SniperContext;              // B 级信号狙击模式上下文
pendingLimitContext?: PendingLimitContext;  // A 级信号限价单上下文
⋮----
latestPrice?: number;                       // 最近一次查询到的价格
priceUpdatedAt?: number;                    // 价格更新时间戳
⋮----
/** 默认初始状态 */
export function createInitialState(symbol: string): TradingState
⋮----
/** KV Key 生成器 */
export function getStateKey(symbol: string): string
⋮----
/** 决策日志条目 */
export interface DecisionLogEntry {
    timestamp: number;
    symbol: string;
    status: TradingStatus;
    decision: string;
    reasoning: string;
    price: number;
    traceId?: string;
    charts?: ChartSnapshot[];

    // 结构检测结果摘要
    structureInfo?: {
        // 流动性 (周期)
        pdh?: number;
        pdl?: number;
        pwh?: number;
        pwl?: number;

        // Session 高低点
        londonHigh?: number;
        londonLow?: number;
        nyHigh?: number;
        nyLow?: number;

        // Equal Highs/Lows (字符串形式已包含区间信息)
        equalHighs?: string[];
        equalLows?: string[];

        // 扫损
        recentSweep?: string;

        // 结构
        mss?: string;
        displacement?: string;
        fvg?: string;
        ob?: string;

        // 信号评分
        signalGrade?: string;
        signalScore?: number;
        strategy?: StrategyType;
        strategyRoute?: StrategyRoute;
        signalFamily?: string;
        rangeModeActive?: boolean;
        rangeModeReason?: string;
        rangeModeVwapCrossCount?: number;
        rangeModeVwapCrossWindow?: number;
        rangeModeBandwidthPercentile?: number;
        rangeModeExpansionClusterDetected?: boolean;
        turtlePriorityContext?: {
            triggered: boolean;
            source?: 'EXTREME_SWEEP' | 'TREND_EXHAUSTION' | 'H4_RANGE_EDGE';
            direction?: 'bullish' | 'bearish';
            reason?: string;
            h4Range?: {
                high: number;
                low: number;
                position: number;
                edgeRatio: number;
                nearLowerEdge: boolean;
                nearUpperEdge: boolean;
            };
            extremeCandidates?: Array<{
                type: string;
                price: number;
                status: string;
                distanceToPrice: number;
                time?: number;
            }>;
            recentSweepCandidates?: Array<{
                type: string;
                price: number;
                sweepTime: number;
                recovered: boolean;
                distanceToPrice: number;
                priorityEligible: boolean;
            }>;
        };
    };

    // AI 返回的关键点位
    watchedLevels?: number[];
    // 结构化附加字段（例如反手拒绝原因、完整长文本）
    debug?: Record<string, unknown>;
}
⋮----
// 结构检测结果摘要
⋮----
// 流动性 (周期)
⋮----
// Session 高低点
⋮----
// Equal Highs/Lows (字符串形式已包含区间信息)
⋮----
// 扫损
⋮----
// 结构
⋮----
// 信号评分
⋮----
// AI 返回的关键点位
⋮----
// 结构化附加字段（例如反手拒绝原因、完整长文本）
⋮----
/** 决策日志 Key 生成器 */
export function getDecisionLogKey(symbol: string): string
⋮----
/** 交易执行日志条目 */
export interface TradeLogEntry {
    timestamp: number;
    provider: string;
    symbol?: string;
    traceId?: string;
    eventType:
    | 'ORDER_SUBMIT'
    | 'ORDER_REJECT'
    | 'ORDER_CANCEL'
    | 'STOP_SUBMIT'
    | 'TP_SUBMIT'
    | 'STOP_TRIGGER'
    | 'TP_TRIGGER'
    | 'POSITION_CLOSE'
    | 'FILL'
    | 'INFO';
    status?: 'SUCCESS' | 'FAILED' | 'FILLED' | 'CANCELED' | 'REJECTED' | 'INFO';
    direction?: 'LONG' | 'SHORT';
    side?: 'BUY' | 'SELL';
    orderId?: string;
    parentOrderId?: string;
    price?: number;
    size?: number;
    fee?: number;
    pnl?: number;
    reason?: string;
    details?: string;
    raw?: Record<string, unknown>;
}
```

## File: src/controller/pending-limit-handler.test.ts
```typescript
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { GenericFill } from '../modules/executor/index.js';
import type { TradingState } from '../types/index.js';
import type { PendingLimitConfig } from '../config/config-manager.js';
⋮----
import {
    aggregateOrderFillsByOrderId,
    buildPendingWaitReasoning,
    evaluateAFastEdgeRepriceCandidate,
    evaluateAFastFreshnessTimeout,
    hasEquivalentFillLog,
    PendingLimitHandler,
    resolvePendingTakeProfitDistribution,
} from './pending-limit-handler.js';
import type { PendingLimitContext } from '../types/index.js';
import type { TradeLogEntry } from '../types/index.js';
⋮----
function buildPendingContext(overrides: Partial<PendingLimitContext> =
⋮----
function buildPendingState(overrides: Partial<TradingState> =
⋮----
function createMockStateStore(initialState: TradingState)
⋮----
function buildPendingLimitConfig(overrides: Partial<PendingLimitConfig> =
⋮----
function createMockExecutor(overrides: Record<string, unknown> =
⋮----
function createMockConfigManager(pendingLimitOverrides: Partial<PendingLimitConfig> =
```

## File: src/controller/sniper-mode.ts
```typescript
/**
 * 狙击模式处理模块
 * 处理 SNIPER 状态的入场检测和失效逻辑
 */
⋮----
import type { TradingState, Candle, ChartSnapshot, MultiTimeframeData } from '../types/index.js';
import type { StructureAnalysis } from '../modules/structure-detector/index.js';
import { createStructureDetector, isValidEntryFVG } from '../modules/structure-detector/index.js';
import type { StrategyType } from '../modules/structure-detector/types.js';
import type { DataFetcher } from '../modules/data-fetcher/index.js';
import type { Analyzer } from '../modules/analyzer/index.js';
import type { IExecutor } from '../modules/executor/index.js';
import { RouterExecutor } from '../modules/executor/index.js';
import type { StateStore } from '../modules/state-store/index.js';
import type { MarketSnapshotStore } from '../modules/state-store/market-snapshot-store.js';
import { logger } from '../utils/index.js';
import { getDefaultConfigManager, type ConfigManager, type SniperConfig } from '../config/config-manager.js';
import { buildStructureInfo, buildRecentCandlesSummary } from './utils.js';
import { buildChartIndicators } from './chart-builder.js';
import { checkPremiumDiscount, selectEntryZone, logICTFilterRejection, type EntryZone, type PremiumDiscountOptions, type PremiumDiscountResult } from './ict-filters.js';
import { repriceEntryForMaxSlDistance } from './sl-distance-reprice.js';
import { LiquidationMonitor, enrichSweepsWithLiquidation } from '../modules/liquidation-monitor/index.js';
import { registerOrderWatch } from './order-fill-watcher-client.js';
import { detectThirdPushExhaustion, type ThirdPushExhaustionResult } from '../modules/structure-detector/third-push-exhaustion.js';
import {
    shouldAllowAGradeFastDirectEntry,
    shouldAllowAGradeChase,
    shouldAllowAGradeFallbackEnter,
    shouldAllowSniperChaseByHtfPd,
    shouldSkipAGradePdDowngrade,
    shouldApplyMomentumOffset
} from './sniper-entry-policy.js';
import { getDualVwapSnapshot, confirmPostDisplacementVwapSide } from '../modules/structure-detector/vwap.js';
import { resolveStandardIctVwapConfirmationWindow } from '../modules/structure-detector/strategies/standard-ict.js';
import { shouldApplyPostStopLossCooldown } from '../utils/stop-loss-cooldown.js';
import { recordAnalysisMarketSnapshot, resolveMarketSnapshotTraceId } from './market-snapshot-recording.js';
import { deriveBreakoutContext } from './breakout-context.js';
import { getSetupRiskMultiplier } from './setup-risk-policy.js';
import { toPositionDirection } from '../modules/structure-detector/strategies/utils/direction.js';
⋮----
const MAX_EXTENSIONS = 3;   // 最多续期次数
const EXTENSION_HOURS = 3;  // 每次续期小时数
⋮----
const formatZonePrice = (price: number): string =>
⋮----
const formatZoneRange = (zone:
⋮----
// 结构检测器类型
type StructureDetector = ReturnType<typeof createStructureDetector>;
⋮----
type HigherTfRisk = {
    requiresM5MSS: boolean;
    reason?: string;
    higherTfContext?: string;
};
⋮----
type BosBreakoutValidation = {
    isBosSignal: boolean;
    trendConfirmed: boolean;
    strongDisplacement: boolean;
    volumeConfirmed: boolean;
    consolidationBreakout: boolean;
    weakVolumeVeto: boolean;
    distanceAtr?: number;
    barrierType?: string;
    barrierPrice?: number;
    skipPremiumDiscount: boolean;
};
⋮----
type MssVolumeGuard = {
    hardReject: boolean;
    requireM5MSS: boolean;
    reason?: string;
};
⋮----
type AGradeExecutionStatus =
    | 'PLACED'
    | 'REJECTED_SL_DISTANCE'
    | 'REJECTED_RR'
    | 'ORDER_FAILED'
    | 'ERROR';
⋮----
type AGradeExecutionResult = {
    status: AGradeExecutionStatus;
    reason: string;
};
⋮----
type AGradeAdaptiveEntryPlan = {
    improveEntryPrice: number;
    fastPhaseMs: number;
    improvePhaseMs: number;
    reason: string;
};
⋮----
type AGradeExecutionOptions = {
    executionFlags?: {
        hybridPullbackOnly?: boolean;
    };
    momentumOffsetPercentOverride?: number;
    maxEntryGapAtr?: number;
    atrForGap?: number;
    enforceMarketableEntry?: boolean;
    marketableSlippageBps?: number;
    aFastEdgeReprice?: {
        enabled: boolean;
        entryZone?: {
            type?: 'FVG' | 'OB' | 'IFVG' | 'SWEEP';
            top: number;
            bottom: number;
        };
    };
    entryZone?: {
        type?: 'FVG' | 'OB' | 'IFVG' | 'SWEEP';
        top: number;
        bottom: number;
    };
};
⋮----
type SniperEntryMeta = {
    triggerSource?: 'SIGNAL' | 'AUTO_REVERSAL' | 'TREND_RESUMPTION';
    reentryMode?: boolean;
};
⋮----
type MomentumPolicyContext = {
    strategy?: StrategyType;
    route?: 'TREND' | 'CONSOLIDATION' | 'HYBRID';
    isConsolidating?: boolean;
    vwapAccepted?: boolean;
    breakoutContext?: import('../types/trading-state.js').BreakoutContext;
};
⋮----
type VisionImage = { base64: string; mimeType: string };
⋮----
type AGradeFallbackVwapContext = {
    dailyVwap: number;
    sessionVwap: number;
    sessionAnchor: 'LONDON' | 'NEW_YORK';
    displacementTime: number;
    minBars: number;
    requiredConsecutive: number;
    maxBars: number;
    postDispBarsObserved: number;
    consecutiveSameSideCloses: number;
    vwapAccepted: boolean;
    vwapRejectReason?: string;
};
⋮----
// ===== Shared entry execution helper types =====
⋮----
type ValidateAndCorrectStopLossParams = {
    logPrefix: string;
    symbol: string;
    direction: 'LONG' | 'SHORT';
    entryPrice: number;
    slPrice: number;
    fallbackSlPrice: number;  // pre-computed fallback SL price (used when SL is on wrong side)
};
⋮----
fallbackSlPrice: number;  // pre-computed fallback SL price (used when SL is on wrong side)
⋮----
type ValidateAndCorrectStopLossResult = {
    corrected: boolean;
    slPrice: number;
};
⋮----
type ValidateRiskRewardParams = {
    logPrefix: string;
    symbol: string;
    entryPrice: number;
    dist: number;
    tp1Price: number;
    tp2Price?: number;
    tp3Price?: number;
};
⋮----
type ValidateRiskRewardResult = {
    valid: boolean;
    actualRR: number;
    reason?: string;
};
⋮----
type ApplyMomentumOffsetParams = {
    logPrefix: string;
    symbol: string;
    direction: 'LONG' | 'SHORT';
    decision: any;  // mutable - entry/TP prices are adjusted in place
    displacementMagnitude: number;
    currentPrice: number;
    riskAmount: number;
    maxSlDistancePercent: number;
    momentumPolicyContext?: MomentumPolicyContext;
    /** Extra momentum offset options (A-grade only) */
    offsetPercentOverride?: number;
    maxEntryGapAtr?: number;
    atrForGap?: number;
    /** Additional gate: if false, offset is skipped even if policy allows (A-grade chase gate) */
    additionalGateAllowed?: boolean;
    additionalGateReason?: string;
};
⋮----
decision: any;  // mutable - entry/TP prices are adjusted in place
⋮----
/** Extra momentum offset options (A-grade only) */
⋮----
/** Additional gate: if false, offset is skipped even if policy allows (A-grade chase gate) */
⋮----
type ApplyMomentumOffsetResult = {
    applied: boolean;
    offset: number;
    dist: number;
    size: number;
    orderValue: number;
};
⋮----
/**
 * 狙击模式处理器
 */
export class SniperModeHandler
⋮----
constructor(
        private dataFetcher: DataFetcher,
        private stateStore: StateStore,
        private analyzer: Analyzer,
        private executor: IExecutor,
        private structureDetector: StructureDetector,
        private liquidationMonitor: LiquidationMonitor,
        private orderFillWatcherStub?: { fetch: (request: Request) => Promise<Response> },
        private marketSnapshotStore?: MarketSnapshotStore,
        private sniperRiskPercent: number = 1,
        private configManager: ConfigManager = getDefaultConfigManager(),
)
⋮----
private isAGradeFastStrictNoAi(): boolean
⋮----
private async getAccountInfo(symbol: string)
⋮----
private getRiskSettings(symbol: string):
⋮----
private buildPremiumDiscountOptions(
        structureAnalysis: StructureAnalysis,
        currentPrice: number
): PremiumDiscountOptions
⋮----
private buildHistoricalMarketDataSnapshot(
        marketData: MultiTimeframeData,
        cutoffTimestamp: number
): MultiTimeframeData
⋮----
const clipCandles = <T extends
⋮----
private async captureDecisionCharts(params: {
        symbol: string;
        structureAnalysis: StructureAnalysis;
        logTimestamp: number;
        marketData?: MultiTimeframeData;
}): Promise<ChartSnapshot[]>
⋮----
private toVisionImages(charts: ChartSnapshot[]): VisionImage[]
⋮----
private evaluateBosBreakoutValidation(params: {
        direction: 'LONG' | 'SHORT';
        structureBreakType?: 'MSS' | 'BOS';
        trendContext?: StructureAnalysis['trendContext'];
        consolidation?: StructureAnalysis['consolidation'];
        currentPrice: number;
        atr: number;
        displacementMagnitude: number;
        displacementVolumeValid?: boolean;
}): BosBreakoutValidation
⋮----
// 只有在已确认远离 HTF 屏障时才允许 BOS 跳过 PD 过滤。
// 例外: 盘整区间边界被强动能+放量有效突破时，也允许跳过 PD 过滤（趋势逃逸）。
⋮----
private isConsolidationRangeBreakout(params: {
        direction: 'LONG' | 'SHORT';
        currentPrice: number;
        consolidation?: StructureAnalysis['consolidation'];
        displacementMagnitude: number;
        displacementVolumeValid?: boolean;
}): boolean
⋮----
const breakBuffer = Math.abs(midpoint) * 0.001; // 0.1% 有效突破缓冲
⋮----
private evaluateMssVolumeGuard(structureAnalysis: StructureAnalysis): MssVolumeGuard
⋮----
private evaluateThirdPushExhaustion(
        structureAnalysis: StructureAnalysis,
        marketData?: MultiTimeframeData,
):
⋮----
// H1 is the structure timeframe — use H1 candles, swing points, and H1 ATR
⋮----
private getRunawayRel(ctx: NonNullable<TradingState['sniperContext']>): number
⋮----
private getAdjustedMaxSlDistance(
        baseMax: number,
        displacementMagnitude?: number
): number
⋮----
// ===== Shared entry execution helpers =====
⋮----
/**
     * Validates that the stop-loss is on the correct side of entry and auto-corrects if needed.
     * LONG: SL must be below entry. SHORT: SL must be above entry.
     */
private validateAndCorrectStopLoss(params: ValidateAndCorrectStopLossParams): ValidateAndCorrectStopLossResult
⋮----
/**
     * Validates risk-reward ratio using TP2 (or estimated TP2) as the target,
     * with TP3 fallback if TP2 RR is insufficient.
     * Returns { valid, actualRR, reason } without performing any side effects.
     */
private validateRiskReward(params: ValidateRiskRewardParams): ValidateRiskRewardResult
⋮----
// TP2 RR insufficient — try TP3 fallback
⋮----
/**
     * Applies momentum offset to entry price and TPs, validates SL distance after offset,
     * and rolls back if offset would breach max SL distance.
     *
     * Mutates `params.decision` entry/TP prices when offset is applied.
     * Returns the final { dist, size, orderValue } after offset (or original values if not applied).
     */
private applyMomentumOffset(params: ApplyMomentumOffsetParams): ApplyMomentumOffsetResult
⋮----
// Start from current decision state
⋮----
// Apply offset
⋮----
// Shift TP prices by the same offset
⋮----
// Recalculate dist, size, orderValue
⋮----
// Validate order value after offset
⋮----
// Validate SL distance after offset — rollback if exceeded
⋮----
// Rollback
⋮----
private getChaseSlOverride(displacementMagnitude: number): number | undefined
⋮----
private buildMomentumChaseDecision(params: {
        ctx: NonNullable<TradingState['sniperContext']>;
        currentPrice: number;
        atr: number;
}):
⋮----
private async tryMomentumChase(
        state: TradingState,
        ctx: NonNullable<TradingState['sniperContext']>,
        symbol: string,
        currentPrice: number,
        atr: number,
        marketData?: MultiTimeframeData,
): Promise<boolean>
⋮----
// ========== 基于动能的激进偏置配置 ==========
⋮----
/**
     * 计算基于动能的激进偏置
     * 当 displacement >= 1.5x ATR 时激活，对入场价应用小幅偏置以提高成交概率
     * @returns 偏置后的入场价，如果不满足条件则返回原价
     */
private calculateMomentumOffset(params: {
        entryPrice: number;
        direction: 'LONG' | 'SHORT';
        displacementMagnitude: number;  // 位移强度 (xATR)
        currentPrice: number;
        stopLoss: number;
        takeProfit: number;
        minRR: number;  // 最小盈亏比要求
        offsetPercentOverride?: number;
        maxEntryGapAtr?: number;
        atrForGap?: number;
}):
⋮----
displacementMagnitude: number;  // 位移强度 (xATR)
⋮----
minRR: number;  // 最小盈亏比要求
⋮----
// 偏置触发条件: displacement.magnitude >= 1.5x ATR
⋮----
// 计算偏置
⋮----
adjustedEntry = params.entryPrice + offset;  // 做多: 提高入场价（更激进）
⋮----
adjustedEntry = params.entryPrice - offset;  // 做空: 降低入场价（更激进）
⋮----
// 成交保护：限制入场价离现价过远（基于 ATR 夹紧）
⋮----
// 安全约束: 验证偏置后的盈亏比
⋮----
private buildAGradeAdaptiveEntryPlan(params: {
        direction: 'LONG' | 'SHORT';
        fastEntryPrice: number;
        entryZone?: { top: number; bottom: number };
        displacementMagnitude: number;
}): AGradeAdaptiveEntryPlan | undefined
⋮----
// IMPROVE 优先挂在入场区中线，避免过深导致长期无法成交
⋮----
// 延长 A 级两阶段挂单窗口，给回踩成交更多时间。
⋮----
private alignAdaptivePlanToFinalFastEntry(params: {
        plan?: AGradeAdaptiveEntryPlan;
        direction: 'LONG' | 'SHORT';
        initialFastEntryPrice: number;
        finalFastEntryPrice: number;
}): AGradeAdaptiveEntryPlan | undefined
⋮----
private toMarketableAGradeEntry(params: {
        direction: 'LONG' | 'SHORT';
        desiredEntry: number;
        currentPrice: number;
        slippageBps?: number;
}):
⋮----
/**
     * 狙击模式 - 5 分钟轮询执行
     * 检测 M5 回调到入场区并执行 AI 双脑分析
     */
async runSniperMode(
        state: TradingState,
        symbol: string,
): Promise<void>
⋮----
// 提前续期检查：如果距离过期不到 30 分钟，提前尝试续期
⋮----
const EARLY_EXTENSION_THRESHOLD = 30 * 60 * 1000; // 30 分钟
⋮----
// 尝试提前续期
⋮----
// 续期成功，更新 ctx 引用
⋮----
// 1. 获取 M5 数据
⋮----
// 2. 检测价格是否回调到入场区
⋮----
// 3. 方案 C：首次进入入场区直接触发 AI 分析
⋮----
// 检测 M5 入场确认信号（仅非首次时需要）
⋮----
// 注入清算数据
⋮----
// ===== 盘整市场过滤 (Consolidation Filter) =====
⋮----
// 1. 高置信度盘整 Kill Switch (>=70%)
// 盘整中的 MSS 反转信号极易失败，直接过滤
⋮----
// 2. 中等盘整质量检查 (>=50%)
// 此时 structureDetector 已将门槛提高到 80 分
// 如果 setup 不存在，说明分数未达标，信号质量不足以对抗盘整
⋮----
// 检查 M5 顺势信号
⋮----
const originalBreakType = ctx.structureBreakType; // MSS 或 BOS
⋮----
// 根据原始信号类型决定确认标准
⋮----
// MSS 反转信号：需要 M5 也出现反转迹象（MSS 或强 Displacement）
⋮----
// BOS 顺势信号：任何同向信号都可以确认（包括 BOS 和较弱的 Displacement）
⋮----
// 检查是否有反向信号（阻止入场）
⋮----
// 入场条件：首次进入入场区 OR 有 M5 确认信号（且无反向信号）
⋮----
// 更新尝试次数
⋮----
// 首次进入时记录日志
⋮----
// 4. AI 狙击入场分析
// 构建 M5 确认信号描述
⋮----
// ★ M5 方向硬性校验 ★
// 如果 M5 有明确信号，方向必须与预期入场方向一致
// 注意: expectedDirection 已在第 169 行定义
⋮----
return;  // 直接返回，不调用 AI
⋮----
ctx.forceM5MSSConfirmation ? 'MSS' : ctx.structureBreakType,  // 传入原始信号类型 (MSS/BOS)
⋮----
/**
     * 执行狙击入场
     */
private async executeSniperEntry(
        state: TradingState,
        ctx: NonNullable<TradingState['sniperContext']>,
        decision: any,
        symbol: string,
        currentPrice: number,
        atr?: number,
        momentumPolicyContext?: MomentumPolicyContext,
): Promise<void>
⋮----
// 获取账户信息并记录日志
⋮----
// 检查余额是否有效
⋮----
// 计算仓位大小
⋮----
// ===== 止损方向验证 =====
⋮----
// 动态止损距离：保证最小空间，避免轻微扫损
⋮----
// 确保止损在保护价之外，额外退让一些 buffer
⋮----
// ===== 止损距离验证 =====
⋮----
// ===== 盈亏比硬性校验 (使用 TP2 作为最终目标校验，因为 TP1 只是 1R) =====
⋮----
// ===== 基于动能的激进偏置 =====
⋮----
status: 'PENDING_LIMIT',  // 改为 PENDING_LIMIT 以复用订单监控逻辑
⋮----
activeTrade: undefined,   // 清除 activeTrade
pendingLimitContext: {    // 使用 pendingLimitContext
⋮----
expiresAt: Date.now() + 6 * 60 * 60 * 1000,  // 6 小时有效期（与 Sniper 一致）
⋮----
// 记录成功下单日志
⋮----
// 记录下单失败日志
⋮----
status: 'SNIPER', // 保持 SNIPER 或转 IDLE
⋮----
// 记录异常日志
⋮----
/**
     * M15 失效检测 - 15 分钟轮询时执行
     */
async checkSniperInvalidation(
        state: TradingState,
        symbol: string,
): Promise<void>
⋮----
// 1. 检查超时
⋮----
// 检查是否可以续期
⋮----
// 获取当前市场数据检查信号是否仍然有效
⋮----
// 检查入场区是否被突破
⋮----
// 入场区仍有效，可以续期
// 放宽条件：不再强制要求重新检测到 A/B/C 级信号
// 原因：原始信号结构可能已经弱化，但入场区仍然有效
⋮----
// 注入清算数据
⋮----
// 续期条件：入场区未被突破 + (有新的有效信号 OR 原始信号是 A/B 级)
// 注意：只有明确记录的 A/B 级才算高质量，未记录的不算
const originalGrade = ctx.signalGrade;  // 不再默认为 'B'
⋮----
// 续期！
⋮----
// 更新状态
⋮----
// 记录续期日志
⋮----
return; // 续期成功，不重置
⋮----
// 无法续期，记录超时日志并重置
const totalHours = 6 + (currentExtensions * EXTENSION_HOURS);  // 6 + 3n 小时
⋮----
// 2. 获取 M15 数据检查入场区是否被穿透
⋮----
// 3. ★ 反向 Displacement 失效检测 ★
// 当等待 LONG 时检测到 bearish displacement，或等待 SHORT 时检测到 bullish displacement
// 这表明市场结构已经反转，原信号失效
const COUNTER_DISP_THRESHOLD = 2.5;  // 反向 Displacement 阈值 (较高以减少假阳性)
⋮----
// 记录失效日志
⋮----
// 注入清算数据用于可能的反转
⋮----
// 检查是否可以反转入场
⋮----
// 有反向入场区，自动反转
⋮----
// 无反向入场区，直接重置
⋮----
// 4. 检查入场区是否被 M15 收盘穿透
// 添加 ATR 缓冲：只有当价格显著穿透入场区时才视为失效（至少 0.3x ATR）
// 这样可以避免入场区边缘的微小穿透立即触发 zone_broken
const ZONE_BROKEN_ATR_BUFFER = 0.3;  // 入场区击穿容差 (ATR 倍数)
⋮----
// 检查是否为陷阱
⋮----
// 注入清算数据
⋮----
// 自动反手逻辑：如果 AI 强烈建议反向交易，直接切换到反向狙击模式
⋮----
magnitude: reverseDisp?.magnitude || 2.0, // 既然是陷阱，动能肯定够
⋮----
// 无缝切换到反向 SNIPER 模式 (视为 B 级信号，因为有陷阱作为强确认)
⋮----
analysis, // 使用最新的结构分析
⋮----
return; // 成功切换模式，退出当前函数，不执行 resetToIdle
⋮----
/**
     * 进入狙击等待模式 (A/B/C 级信号)
     * A 级信号: 跳过 M5 确认，可按配置走 AI 入场分析或算法直连。
     * B/C 级信号: 进入 SNIPER 状态等待 M5 确认
     */
async enterSniperWait(
        symbol: string,
        displacement: {
            direction: 'bullish' | 'bearish';
            magnitude: number;
            startPrice: number;
            endPrice: number;
        },
        structureAnalysis: StructureAnalysis,
        currentPrice: number,
        h4Candles?: { high: number; low: number }[],
        dailyCandles?: Candle[],
        signalGrade?: 'A' | 'B' | 'C',
        marketData?: MultiTimeframeData,
        entryMeta?: SniperEntryMeta,
): Promise<void>
⋮----
// H4-level exhaustion is a stronger signal: block both A and B grade entries
⋮----
// B 级信号进入狙击等待模式 (现有逻辑)
⋮----
/**
     * A 级信号直接入场处理
     * 优先使用算法定价引擎直接下单，跳过 AI 分析
     */
private async handleAGradeDirectEntry(
        symbol: string,
        displacement: {
            direction: 'bullish' | 'bearish';
            magnitude: number;
            startPrice: number;
            endPrice: number;
        },
        structureAnalysis: StructureAnalysis,
        currentPrice: number,
        h4Candles?: { high: number; low: number }[],
        marketData?: MultiTimeframeData,
): Promise<void>
⋮----
// 明确不传 trendDirection，避免 checkPremiumDiscount 在顺势场景自动放行。
⋮----
// ========== 算法回踩挂单模式（兼容保留，可通过配置启用） ==========
// 如果有预计算的算法入场参数，直接使用，跳过 AI 分析，但仅允许回踩限价入场
⋮----
// 构造与 AI 返回兼容的 decision 对象
⋮----
confidence: 95,  // 算法直连固定高信心
⋮----
// 先执行下单，避免图表生成阻塞关键执行路径
⋮----
// STANDARD_ICT 统一回踩挂单，不做动能追价。
⋮----
// 按策略要求仅允许 FVG 回踩限价，不做追价可成交化。
⋮----
// ========== 回退模式：无预计算参数 ==========
⋮----
/**
     * A 级信号 AI 入场分析（主路径或规则回退）
     */
private async runAGradeAIFallback(params: {
        symbol: string;
        direction: 'LONG' | 'SHORT';
        displacement: {
            direction: 'bullish' | 'bearish';
            magnitude: number;
            startPrice: number;
            endPrice: number;
        };
        structureAnalysis: StructureAnalysis;
        currentPrice: number;
        structureBreakType?: 'MSS' | 'BOS';
        fallbackReason: string;
        premiumDiscountContext?: PremiumDiscountResult;
        analysisMode?: 'PRIMARY' | 'FALLBACK';
}): Promise<void>
⋮----
private buildAGradeFallbackVwapContext(params: {
        analysis: StructureAnalysis;
        m15Candles: Candle[];
        direction: 'LONG' | 'SHORT';
}): AGradeFallbackVwapContext | undefined
⋮----
private buildPremiumDiscountFactLine(
        direction: 'LONG' | 'SHORT',
        pdResult?: PremiumDiscountResult,
): string | undefined
⋮----
/**
     * B 级信号狙击模式处理（原有逻辑）
     */
private async handleBGradeSniperMode(
        symbol: string,
        displacement: {
            direction: 'bullish' | 'bearish';
            magnitude: number;
            startPrice: number;
            endPrice: number;
        },
        structureAnalysis: StructureAnalysis,
        currentPrice: number,
        h4Candles?: { high: number; low: number }[],
        dailyCandles?: { high: number; low: number }[],
        signalGrade?: 'A' | 'B' | 'C',
        htRisk?: HigherTfRisk,
        entryMeta?: SniperEntryMeta,
        options?: {
            skipPremiumDiscountFilter?: boolean;
            downgradeReason?: string;
        },
): Promise<void>
⋮----
// ========== ICT 过滤: Premium/Discount ==========
// 仅在“合格突破”(趋势确认+强位移+量能确认+远离HTF屏障)时跳过。
⋮----
// 明确不传 trendDirection，避免顺势场景被自动放行。
⋮----
// ========== HTF 流动性距离熔断 (BOS 专用) ==========
// 当 BOS 做多/做空时，检查是否距离 HTF 关键阻力/支撑太近
// 如果太近 (< 1.5 ATR)，等待扫损后的 MSS 反转，不做 BOS 追涨/追跌
⋮----
// ========== 入场区选择 (带优先级) ==========
// 传入信号类型和动能强度，强动能优先 FVG
⋮----
displacement.magnitude,  // 传入动能强度
⋮----
// 计算保护价
⋮----
// 创建 SniperContext
⋮----
expiresAt: Date.now() + 6 * 60 * 60 * 1000,  // 6 小时（原来 4 小时）
⋮----
signalGrade,  // 保存信号等级
structureBreakType: structureBreakType as 'MSS' | 'BOS' | undefined,  // 保存结构破坏类型
⋮----
// 记录日志
⋮----
/**
     * A 级信号直接下单执行
     */
private async executeAGradeEntry(
        symbol: string,
        direction: 'LONG' | 'SHORT',
        decision: any,
        currentPrice: number,
        displacementMagnitude?: number,
        adaptivePlan?: AGradeAdaptiveEntryPlan,
        options?: AGradeExecutionOptions,
        momentumPolicyContext?: MomentumPolicyContext,
): Promise<AGradeExecutionResult>
⋮----
// 获取账户信息
⋮----
// 检查余额是否有效
⋮----
// 计算仓位大小
⋮----
const baseRiskAmount = accountInfo.balance * (this.sniperRiskPercent / 100); // 与 B 级狙击统一风险参数
⋮----
// ===== 止损方向验证 =====
⋮----
const estimatedAtr = currentPrice * 0.01; // 假设 ATR 约为价格的 1%
⋮----
// ===== 止损距离验证 =====
⋮----
// ===== 盈亏比校验 =====
⋮----
// ===== 基于动能的激进偏置 =====
⋮----
// 下限价单
⋮----
// 转入 PENDING_LIMIT 状态等待成交
⋮----
expiresAt: adaptivePendingPlan?.improveExpiresAt ?? (now + 6 * 60 * 60 * 1000),  // 默认 6 小时
⋮----
// 记录成功下单日志
⋮----
// 记录下单失败日志
⋮----
// 记录异常日志
⋮----
private evaluateHigherTimeframeRisk(params: {
        direction: 'LONG' | 'SHORT';
        signalType?: 'MSS' | 'BOS';
        dailyCandles?: Candle[];
        trendContext?: StructureAnalysis['trendContext'];
        atr: number;
}): HigherTfRisk
⋮----
private computeDailyWickRatio(candle: Candle, direction: 'LONG' | 'SHORT'): number
⋮----
private shouldFavorOte(_symbol: string, atr: number, currentPrice: number): boolean
⋮----
private isHighImpactWindow(): boolean
⋮----
return utcHour >= 17 && utcHour <= 20;  // FOMC/美盘高波动窗口
⋮----
private applyOteBiasIfNeeded(params: {
        zone: EntryZone;
        displayType: 'OB' | 'FVG';
        signalType?: 'MSS' | 'BOS';
        direction: 'LONG' | 'SHORT';
        symbol: string;
        atr: number;
        currentPrice: number;
}):
⋮----
/**
     * 重置状态到 IDLE
     */
async resetToIdle(symbol: string, reason: string, price?: number): Promise<void>
⋮----
/**
     * 处理 SNIPER 模式下的信号升级/刷新逻辑
     * @returns true 如果处理了 SNIPER 模式逻辑（升级/刷新/保持），false 如果不在 SNIPER 模式
     */
async handleSniperModeUpgrade(
        reconciledState: TradingState,
        setup: any, // StructureAnalysis['setup']
        hasValidEntryZone: boolean,
        m15Displacement: any, // Displacement data
        signalGrade: string | undefined,
        structureAnalysis: StructureAnalysis,
        symbol: string,
        currentPrice: number,
        h4Candles?: { high: number; low: number }[],
        marketData?: MultiTimeframeData,
): Promise<boolean>
⋮----
setup: any, // StructureAnalysis['setup']
⋮----
m15Displacement: any, // Displacement data
⋮----
// 不在 SNIPER 模式，直接返回 false
⋮----
// 没有有效 setup、入场区或位移检测，保持 SNIPER 状态但不处理
⋮----
return true; // 返回 true 表示我们处理了 SNIPER 模式（即使是保持状态）
⋮----
// 只有当新信号存在且有效时才考虑升级
⋮----
return true; // 返回 true 保持 SNIPER 状态
⋮----
const oldGrade = currentContext.signalGrade || 'B'; // 兼容旧状态
⋮----
// 转换方向
⋮----
// 升级条件:
// 1. 之前是 B，现在是 A (Grade Upgrade)
⋮----
// 刷新条件:
// 同级信号 + 同方向 + 入场区发生变化 (新的 OB/FVG)
⋮----
return true; // 表示我们处理了 SNIPER 模式
⋮----
/**
     * 尝试续期 Sniper 模式
     * @returns true 如果成功续期，false 如果无法续期
     */
private async tryExtendSniper(state: TradingState, symbol: string): Promise<boolean>
⋮----
// 检查是否还能续期
⋮----
// 获取当前市场数据检查信号是否仍然有效
⋮----
// 检查入场区是否被突破
⋮----
// 入场区仍有效，检查是否应该续期
⋮----
// 注入清算数据
⋮----
// 续期条件：入场区未被突破 + (有新的有效信号 OR 原始信号是 A/B 级)
// 注意：只有明确记录的 A/B 级才算高质量，未记录的不算
const originalGrade = ctx.signalGrade;  // 不再默认为 'B'
⋮----
// 续期！
⋮----
// 更新状态
⋮----
// 记录续期日志
⋮----
private calculateMinStopDistance(zoneSpan: number, entryPrice: number, atr?: number): number
⋮----
private shouldAbortRunaway(ctx: NonNullable<TradingState['sniperContext']>, price: number):
```

## File: src/modules/paper-trading/client.ts
```typescript
/**
 * Paper Trading Client
 * 与 HyperliquidClient 接口兼容的模拟执行器
 */
⋮----
import type { PaperOrder, PaperAccount, PaperTradingStats } from './types.js';
import { PAPER_KEYS } from './types.js';
import { MatchingEngine } from './matching-engine.js';
import { calculateStats } from './stats.js';
import { logger } from '../../utils/index.js';
import type { KvStore } from '../../types/runtime.js';
import type {
    IExecutor,
    GenericOrderParams,
    GenericOrderResult,
    GenericStopParams,
    GenericAccountInfo,
    GenericPosition,
    GenericOpenOrder,
    GenericFill,
} from '../executor/index.js';
⋮----
/**
 * Paper Trading 模拟客户端
 * 实现与 HyperliquidClient 相同的接口
 */
export class PaperTradingClient implements IExecutor
⋮----
constructor(
        private kv: KvStore,
        private realClient: IExecutor // 用于获取真实价格
)
⋮----
private realClient: IExecutor // 用于获取真实价格
⋮----
/**
     * 下限价单 (模拟)
     */
async placeLimitOrder(params: GenericOrderParams): Promise<GenericOrderResult>
⋮----
// 保存订单
⋮----
/**
     * 下止损单 (模拟)
     */
async placeStopOrder(params: GenericStopParams): Promise<GenericOrderResult>
⋮----
// 保存订单
⋮----
// 更新持仓的 slOrderId
⋮----
/**
     * 取消订单 (模拟)
     */
async cancelOrder(symbol: string, orderId: string): Promise<GenericOrderResult>
⋮----
/**
     * 平仓 (模拟)
     */
async closePosition(symbol: string): Promise<GenericOrderResult>
⋮----
return { success: true }; // 无持仓
⋮----
// 取消相关止损单
⋮----
// 平仓处理 (通过撮合引擎)
⋮----
/**
     * 获取账户信息 (模拟)
     */
async getAccountInfo(): Promise<GenericAccountInfo>
⋮----
// 获取每个持仓的当前价格并更新未实现盈亏
⋮----
/**
     * 获取开放订单 (模拟)
     */
async getOpenOrders(symbol?: string): Promise<GenericOpenOrder[]>
⋮----
async getPosition(symbol: string): Promise<GenericPosition | undefined>
⋮----
// ============= 真实 API 代理 (使用真实市场数据) =============
⋮----
async getCurrentPrice(symbol: string): Promise<number>
⋮----
async getCandles(symbol: string, interval: string, startTime?: number, endTime?: number)
⋮----
async getMeta(): Promise<void>
⋮----
getAddress(): string
⋮----
async getUserFills(): Promise<GenericFill[]>
⋮----
// getTrades() 返回的是已平仓的交易记录
// side 表示平仓方向: 平多仓 = SELL, 平空仓 = BUY
⋮----
side: trade.direction === 'LONG' ? 'SELL' : 'BUY', // 平仓方向与开仓方向相反
⋮----
// ============= Paper Trading 专有方法 =============
⋮----
/**
     * 处理撮合 (每次 Cron 调用)
     */
async processMatching(symbol: string): Promise<void>
⋮----
/**
     * 获取交易统计
     */
async getStats(): Promise<PaperTradingStats>
⋮----
/**
     * 重置模拟账户
     */
async resetAccount(initialBalance: number = 1000): Promise<void>
```

## File: src/modules/structure-detector/strategies/index.ts
```typescript
import type { Candle } from '../../../types/index.js';
import type {
    AdjustmentSetup,
    Direction,
    LiquidityAnalysis,
    TurtlePriorityContext,
    TradeSetup,
    TimeframeStructure,
    FVG,
    OrderBlock,
    StrategyType,
    StrategyMarketFocus,
} from '../types.js';
import type { StrategyRoute } from '../types.js';
import type { PDArrayReaction } from '../reaction.js';
import type { TrendContext } from '../trend.js';
import type { ConsolidationResult } from '../consolidation.js';
⋮----
import type { StrategyProfile } from '../../../config/strategy-profiles.js';
import type { VolumeValidationConfig } from '../../volume-analysis/types.js';
import type { TurtleSoupConfig, SignalGradeConfig } from '../../../config/config-manager.js';
import type { CandleWithIndicators } from '../../../types/market-data.js';
import { getDefaultConfigManager } from '../../../config/config-manager.js';
import { detectStandardSetup } from './standard-ict.js';
import { detectRangeMode, detectTurtleSoupSetup, type RangeModeAssessment } from './turtle-soup.js';
import { detectThirdPushExhaustion, type ThirdPushExhaustionResult } from '../third-push-exhaustion.js';
import { detectBandReversionOnlySetup } from './band-reversion-only.js';
import { detectAiDisplacementOnlySetup } from './ai-displacement-only.js';
import { evaluateRangeProtection } from './enhancers/range-protector.js';
import { isFirstImpulsePullbackEligible } from './first-impulse.js';
import { logger } from '../../../utils/index.js';
⋮----
interface CurrentPosition {
    direction: 'LONG' | 'SHORT';
    entryPrice: number;
    size: number;
}
⋮----
export interface StrategyExecutionContext {
    symbol: string;
    currentPrice: number;
    atr: number;
    timestamp: number;
    m5Candles: Candle[];
    h1Candles?: Candle[];
    m15Candles: Candle[];
    h1Structure: TimeframeStructure;
    m15Structure: TimeframeStructure;
    m5Structure: TimeframeStructure;
    h4Structure: TimeframeStructure;
    h4Candles: Candle[];
    liquidity: LiquidityAnalysis;
    trendContext?: TrendContext;
    consolidation: ConsolidationResult;
    currentPosition?: CurrentPosition;
    allFVGs: FVG[];
    allOBs: OrderBlock[];
    h4FVGs?: FVG[];
    h4OBs?: OrderBlock[];
    pdArrayReactions: PDArrayReaction[];
    riskContext?: {
        cooldown?: {
            direction: 'LONG' | 'SHORT';
            expiresAt: number;
        };
    };
    strategyProfile: StrategyProfile;
    volumeConfig?: VolumeValidationConfig;
    turtleSoupConfig?: TurtleSoupConfig;
    signalGradeConfig?: SignalGradeConfig;
    route?: StrategyRoute;
    turtlePrioritySignal?: {
        triggered: boolean;
        direction?: Direction;
        reason?: string;
        source?: 'EXTREME_SWEEP' | 'TREND_EXHAUSTION' | 'H4_RANGE_EDGE';
    };
    turtlePriorityContext?: TurtlePriorityContext;
    rangeModeAssessment?: RangeModeAssessment;
}
⋮----
export interface StrategyExecutionResult {
    strategy: StrategyType;
    setup?: TradeSetup;
    adjustments: AdjustmentSetup[];
    diagnostics: string[];
}
⋮----
export type StrategyHandler = (context: StrategyExecutionContext) => StrategyExecutionResult;
⋮----
export interface StrategyDefinition {
    id: StrategyType;
    label: string;
    description: string;
    focus: StrategyMarketFocus;
    handler: StrategyHandler;
    priority: number;
}
⋮----
export interface StrategySnapshot extends StrategyExecutionResult {
    label: string;
    description: string;
    focus: StrategyMarketFocus;
    priority: number;
}
⋮----
const handleStandard: StrategyHandler = (context) =>
⋮----
export function shouldAllowStandardPullbackContinuation(context: StrategyExecutionContext): boolean
⋮----
export function shouldAllowStandardFirstImpulsePullback(context: StrategyExecutionContext): boolean
⋮----
const handleTurtleSoup: StrategyHandler = (context) =>
⋮----
// Compute H1 3-push exhaustion for the prior trend direction.
// H1 is the structure timeframe; exhaustion on H1 confirms the turtle soup reversal.
// sfp-core will apply a score bonus when exhaustion.direction ≠ trade direction.
⋮----
function shouldPreferSfpExecution(context: StrategyExecutionContext): boolean
⋮----
function isH4BoundarySweepCandidate(
    candidate: NonNullable<TurtlePriorityContext['recentSweepCandidates']>[number],
    liquidity: LiquidityAnalysis,
): boolean
⋮----
const samePrice = (price: number)
⋮----
const handleBandReversion: StrategyHandler = (context) =>
⋮----
const handleAiDisplacementOnly: StrategyHandler = (context) =>
⋮----
function shouldBlockStandardByTurtlePriority(context: StrategyExecutionContext, standardSnapshot?: StrategySnapshot):
⋮----
export function listStrategyDefinitions(): StrategyDefinition[]
⋮----
export function runStrategy(strategy: StrategyType, context: StrategyExecutionContext): StrategySnapshot
⋮----
export function runStrategies(strategies: StrategyType[], context: StrategyExecutionContext): StrategySnapshot[]
```

## File: src/modules/structure-detector/index.ts
```typescript
/**
 * 结构检测模块 - 统一入口
 */
⋮----
import type { Candle, CandleWithIndicators } from '../../types/index.js';
⋮----
import { aggregateToH1 } from './data-utils.js';
import { generateSummary } from './summary-generator.js';
import type {
    StructureAnalysis,
    TimeframeStructure,
    LiquidityAnalysis,
    OTEZone,
    StrategyType,
    StrategyRoute,
} from './types.js';
⋮----
// 导出所有类型
⋮----
import type { SwingPoint } from './types.js';
⋮----
// 导出子模块
// 核心计算函数导入
import {
    detectDisplacement,
    detectFVGs,
    detectIFVGs,
    getRelevantIFVGs,
    detectVolumeImbalance,
    enrichDisplacementWithVolume,
    determineFillType,
    checkFVGFilled,
    isValidEntryFVG,
} from './displacement.js';
import { detectSwingPoints, detectStructureBreak, detectOrderBlocks, detectBreakerBlocks, calculateOTE, isOrderBlockMitigated, enrichOrderBlocksWithVolume } from './market-structure.js';
import { analyzeLiquidity, getNearestLiquidityTarget, getCurrentKillzone, isInKillzone } from './liquidity.js';
import { calculateSignalScore, meetsEntryThreshold } from './signal-scorer.js';
import { analyzeTrendContext, calculateEMA, getLatestEMA, calculateEMASlope } from './trend.js';
import { detectReaction, detectAllReactions, createZoneFromFVG, createZoneFromOB } from './reaction.js';
import { detectConsolidation, getConsolidationAdjustedThreshold, evaluateConsolidationTradeability } from './consolidation.js';
import { calculatePriceZone } from './market-context.js';
⋮----
// Strategy Modules
import {
    runStrategies,
    type StrategyExecutionContext,
    type StrategySnapshot,
    shouldAllowStandardPullbackContinuation,
    shouldAllowStandardFirstImpulsePullback,
} from './strategies/index.js';
import { detectSqueezeStraddle } from './strategies/squeeze-straddle.js';
import { detectRangeMode } from './strategies/turtle-soup.js';
import {
    resolveStrategyRoute,
    describeRoute,
    buildTurtlePriorityContext,
} from './strategies/route.js';
import { arbitrateStrategies } from './strategies/arbiter.js';
import type { ConfigManager, VolumeValidationConfig } from '../../config/config-manager.js';
import { getDefaultConfigManager } from '../../config/config-manager.js';
import type { StrategyProfile } from '../../config/strategy-profiles.js';
⋮----
// 导出供外部使用
⋮----
interface AnalyzeStructureInput {
    symbol: string;
    currentPrice: number;
    atr: number;

    // 当前持仓状态 (可选)
    currentPosition?: {
        direction: 'LONG' | 'SHORT';
        entryPrice: number;
        size: number;
    };

    // K 线数据
    m5Candles: Candle[];
    m15Candles: Candle[];
    h1Candles: Candle[]; // 新增 H1
    h4Candles: Candle[];
    dailyCandles: Candle[];
    weeklyCandles: Candle[];
    monthlyCandles: Candle[];
    timestamp?: number;

    // 历史缓存的 Swing 点 (可选，用于增强流动性检测)
    swingPoints?: SwingPoint[];

    /** 上一周期已确认的 sweeps，用于锁存防闪烁 */
    previousSweeps?: LiquidityAnalysis['allRecentSweeps'];

    /** Squeeze straddle: how many consecutive scheduler cycles the squeeze has been detected */
    squeezeConsecutiveCycleCount?: number;

    riskContext?: {
        cooldown?: {
            direction: 'LONG' | 'SHORT';
            expiresAt: number;
        };
        regimeLock?: {
            route: 'CONSOLIDATION' | 'HYBRID';
            lockedAt: number;
            expiresAt: number;
            reason?: string;
        };
    };
}
⋮----
// 当前持仓状态 (可选)
⋮----
// K 线数据
⋮----
h1Candles: Candle[]; // 新增 H1
⋮----
// 历史缓存的 Swing 点 (可选，用于增强流动性检测)
⋮----
/** 上一周期已确认的 sweeps，用于锁存防闪烁 */
⋮----
/** Squeeze straddle: how many consecutive scheduler cycles the squeeze has been detected */
⋮----
function deriveD1Gate(
    dailyCandles: Candle[],
    currentPrice: number,
): StructureAnalysis['d1Gate'] | undefined
⋮----
function computeAtrPriceRatioFromH1(currentPrice: number, h1Candles: Candle[]): number | undefined
⋮----
export function resolveStrategyIdsForRoute(input: {
    route: StrategyRoute;
    consolidationConfidence: number;
    rangeModeActive: boolean;
    allowConsolidationContinuation?: boolean;
    allowFirstImpulsePullback?: boolean;
}):
⋮----
/**
 * 计算智能止损 (基于结构 + 灵敏度缓冲)
 */
/**
 * 计算智能止损价格 (结构化止损)
 * 
 * 核心思路：止损放在关键结构点之外，避免被正常的流动性清理扫掉
 * 
 * @param direction 交易方向
 * @param entryPrice 入场价格
 * @param protectionPrice 保护价（Swing 点或入场区边界）
 * @param atr 当前 ATR
 * @param displacementExtreme Displacement 蜡烛的极值（可选）
 * @param maxRiskAtr 最大风险 ATR 倍数（默认 3.0）
 */
// calculateSmartStopLoss removed - extracted to strategies/standard-ict.ts (if used there) or not needed anymore
⋮----
/**
 * 寻找催化扫损 (ICT 因果关系核心)
 * 
 * 逻辑: 对于做多信号，真正的动力源是价格扫到的**最低点**，而非级别最高的点
 * 例如: 如果 EQL@85330 被扫，而 PWL@87130 只是路过，则 EQL 才是催化剂
 * 
 * @param allSweeps 所有检测到的扫损事件
 * @param direction 信号方向
 * @param displacementStartTime 位移开始时间 (可选，用于时间过滤)
 */
⋮----
/**
 * 寻找智能止盈目标 (FTA 逻辑: First Trouble Area)
 */
⋮----
/**
 * 分析单个周期的结构
 */
function analyzeTimeframe(
    interval: string,
    candles: Candle[],
    atr: number,
    profile: StrategyProfile,
    volumeConfig?: VolumeValidationConfig,
): TimeframeStructure
⋮----
// 动态确定 Swing 点检测的回溯范围
// M5: n=5 (25 分钟) - 过滤噪音
// M15: n=3 (45 分钟) - 短期结构
// H4: n=5 (左右各 5 根 K 线 ≈ 约 20 小时) - 识别日级别的关键波段点
// 注意: 使用太大的 n 值会导致最近的 Swing 点无法被检测（需要右侧 n 根确认）
⋮----
// 结构破坏
⋮----
// Displacement (检测 + 成交量验证)
⋮----
// FVG (使用动态 ATR 阈值)
// 在结构阶段统一补全 fillType/filled，避免后续执行层误用“已回补”区间。
⋮----
// IFVG (回溯 30 根 K 线)
⋮----
// Order Block (检测 + 成交量验证)
⋮----
// Breaker Block - 被击穿的 OB 转换的反向入场区
⋮----
// Volume Imbalance (回溯 30 根)
⋮----
// OTE (如果有结构破坏)
⋮----
/**
 * 综合结构分析
 */
export function analyzeStructure(
    input: AnalyzeStructureInput,
    configManager: ConfigManager = getDefaultConfigManager()
): StructureAnalysis
⋮----
// 分析各周期结构 (含成交量验证)
⋮----
// 流动性分析 (优先使用传入的缓存 Swing 点，否则通过 H1/M15 实时计算)
⋮----
// [升级] 使用 H1 和 H4 的 Swing 点 (更稳健)
⋮----
// 分离 H4 Swing 点用于高权重流动性检测
⋮----
recentCandles: m15Candles, // 保持 M15 用于近期扫损检测
⋮----
// ... (trendContext 保持不变)
⋮----
// ... (reactions 监控升级到 M15)
// 监控 H4/H1/M15 关键位的反应
⋮----
// 使用 M15 K线检测反应 (原 M5 太快)
// 传入正确的 15 分钟间隔，避免在反应分析中夸大停留时间
⋮----
// ... (pdArrayReactions 保持不变)
⋮----
// 盘整检测 (升级到 H1/H4)
// 如果传入了原生 H1，直接使用；否则聚合
⋮----
m15Candles, // 辅助
h1Candles: effectiveH1, // 主力检测
⋮----
// ... (Setup 变量初始化)
⋮----
// =================================================================
// 策略分发器 (Strategy Dispatcher)
// =================================================================
⋮----
// 1. 获取所有 FVG 和 OB 用于 HTF 校验
⋮----
// 2. 决策逻辑
// 如果市场处于震荡 (Consolidating) -> 走海龟汤策略
// 如果市场处于趋势 (Trending) -> 走标准 ICT 策略
⋮----
// 注意: 海龟汤策略目前设定为激进模式，只要符合扫损条件就尝试入场
// 标准策略则严格要求结构破坏
⋮----
// 生成摘要 (包含 ICT 逆向工程分析)
⋮----
h4Structure, // 导出 H4 结构
⋮----
consolidation,  // 盘整市场检测结果
⋮----
/**
 * 创建结构检测器 (带 sweep 锁存状态)
 */
export function createStructureDetector(configManager: ConfigManager = getDefaultConfigManager())
⋮----
/** 每个 symbol 上一周期的 sweeps 缓存 */
⋮----
// 更新缓存供下一周期使用
```

## File: src/runtime/node/segment-backtest.ts
```typescript
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import type { CandleWithIndicators } from '../../types/index.js';
import { createHyperliquidMarketClient } from '../../modules/data-fetcher/hyperliquid-market.js';
import { createCanvasChartClient } from '../../modules/data-fetcher/canvas-chart.js';
import { createStructureDetector } from '../../modules/structure-detector/index.js';
import { getDefaultConfigManager } from '../../config/config-manager.js';
import {
    renderSegmentBacktestHtml,
    summarizeSignals,
    toSegmentBacktestStraddle,
    toSegmentBacktestSignal,
    type SegmentBacktestReport,
    type SegmentBacktestSignal,
    type SegmentBacktestStraddle,
} from './segment-backtest-core.js';
⋮----
interface CliOptions {
    symbol: string;
    startTime: number;
    endTime: number;
    outDir: string;
    warmupHours: number;
    minBarsM5: number;
    minBarsM15: number;
    minBarsH1: number;
    minBarsH4: number;
    minBarsD1: number;
    minBarsW1: number;
    minBarsM1: number;
    withImages: boolean;
    imageWindowBars: number;
    imageLimit: number;
}
⋮----
function printUsage(): void
⋮----
function parseTimestamp(value: string): number
⋮----
function parseNumber(value: string, fieldName: string): number
⋮----
function parseCliArgs(argv: string[]): CliOptions
⋮----
export function candleCloseTime(openTimestamp: number, intervalMs: number): number
⋮----
export function upperBoundByCloseTime(
    candles: CandleWithIndicators[],
    ts: number,
    intervalMs: number,
): number
⋮----
export function shouldRecordStraddle(
    previous: SegmentBacktestStraddle | undefined,
    next: SegmentBacktestStraddle,
): boolean
⋮----
export function nextSqueezeConsecutiveCycleCount(
    previousCount: number,
    squeezeState: 'COILING' | 'BREAKOUT' | 'NONE' | null | undefined,
): number
⋮----
export function resolveIntradayFetchStart(params: {
    startTime: number;
    warmupHours: number;
    minBarsM5: number;
    minBarsM15: number;
    minBarsH1: number;
    minBarsH4: number;
}): number
⋮----
function formatForFile(ts: number): string
⋮----
function formatCompactIso(ts: number): string
⋮----
function ensureDir(dirPath: string): void
⋮----
async function main(): Promise<void>
```

## File: src/services/order-fill-watcher.ts
```typescript
/**
 * Order fill watcher service (Node runtime)
 * Uses Hyperliquid WebSocket to monitor user fills.
 */
⋮----
import { createHyperliquidClient, type HyperliquidClient } from '../modules/executor/index.js';
import { getStateKey } from '../types/trading-state.js';
import type { ActiveTrade, BreakoutContext, PendingLimitContext } from '../types/trading-state.js';
import { logger } from '../utils/index.js';
import { applyTp1FrontRun, applyTp3FrontRun, normalizeTakeProfitLevels } from '../utils/take-profit-levels.js';
import {
    allocateTakeProfitTranches,
    resolveStrategyTakeProfitDistribution,
    type TakeProfitDistribution,
} from '../utils/take-profit-allocation.js';
import { resolveActiveStopOrderId } from '../utils/stop-order-guard.js';
import type { KvStore } from '../types/runtime.js';
import { getDefaultConfigManager } from '../config/config-manager.js';
⋮----
interface WatchedOrder {
    orderId: string;
    symbol: string;
    direction: 'LONG' | 'SHORT';
    expectedSize: number;
    entryPrice: number;
    slPrice: number;
    tpLevels: {
        tp1Price: number;
        tp2Price: number;
        tp3Price: number;
    };
    createdAt: number;
    expiresAt: number;  // 监听过期时间 (24h)
    filledSize?: number;
    filledNotional?: number;
    filledEntryPrice?: number;
    strategy?: PendingLimitContext['strategy'];
    strategyRoute?: PendingLimitContext['strategyRoute'];
    signalFamily?: PendingLimitContext['signalFamily'];
    entryLogic?: string;
    tpDistribution?: TakeProfitDistribution;
    bracket?: {
        mode: 'SQUEEZE_STRADDLE';
        peerOrderId?: string;
    };
}
⋮----
expiresAt: number;  // 监听过期时间 (24h)
⋮----
interface FillEvent {
    oid: number;          // Order ID
    px: string;           // Filled price
    sz: string;           // Filled size
    side: string;         // 'B' or 'A'
    coin: string;         // Symbol (e.g., 'BTC')
    time: number;         // Timestamp
}
⋮----
oid: number;          // Order ID
px: string;           // Filled price
sz: string;           // Filled size
side: string;         // 'B' or 'A'
coin: string;         // Symbol (e.g., 'BTC')
time: number;         // Timestamp
⋮----
interface OrderFillWatcherConfig {
    kv: KvStore;
    tradingState: KvStore;
    hyperliquidPrivateKey: string;
    vaultAddress?: string;
    testnet?: boolean;
}
⋮----
export class OrderFillWatcherService
⋮----
private readonly ORDER_RETENTION_MS = 24 * 60 * 60 * 1000; // 24 hours
private readonly HEARTBEAT_INTERVAL_MS = 30000; // 30s
⋮----
constructor(private config: OrderFillWatcherConfig)
⋮----
static extractTradeLevelDistribution(existingTrade?: Pick<ActiveTrade, 'tpLevels'>): TakeProfitDistribution | undefined
⋮----
async fetch(request: Request): Promise<Response>
⋮----
private async loadWatchedOrders(): Promise<void>
⋮----
private async addWatchedOrder(order: WatchedOrder): Promise<void>
⋮----
private async saveWatchedOrders(): Promise<void>
⋮----
private cleanExpiredOrders(): void
⋮----
private getWsUrl(): string
⋮----
private async startWebSocket(): Promise<void>
⋮----
private scheduleAlarm(when: number)
⋮----
private scheduleHeartbeat(): void
⋮----
private async alarm(): Promise<void>
⋮----
private scheduleReconnect(): void
⋮----
private cleanup(): void
⋮----
private async handleMessage(rawData: string): Promise<void>
⋮----
private async handleFill(fill: FillEvent): Promise<void>
⋮----
private async cancelBracketPeer(order: WatchedOrder): Promise<void>
⋮----
private getExecutor(): HyperliquidClient
⋮----
private async fetchLatestM15Atr(symbol: string): Promise<number | undefined>
⋮----
private async placeProtectiveOrders(
        order: WatchedOrder,
        actualEntryPrice: number,
        actualSize: number
): Promise<void>
⋮----
// Collect known TP order IDs so the guard won't misidentify a TP trigger as the SL
⋮----
// Reset state to IDLE only when emergency close succeeded.
⋮----
private async updateTradingStateToOpen(
        order: WatchedOrder,
        actualEntryPrice: number,
        actualSize: number,
        tpLevels: {
            tp1: number;
            tp2: number;
            tp3: number;
        },
        orderIds: {
            slOrderId?: string;
            tp1OrderId?: string;
            tp2OrderId?: string;
            tp3OrderId?: string;
        },
        distribution: TakeProfitDistribution,
): Promise<void>
⋮----
private async fetchTradingState(symbol: string): Promise<any | null>
⋮----
private extractExistingStop(state: any, order: WatchedOrder): string | undefined
⋮----
private extractExistingTps(state: any, order: WatchedOrder):
⋮----
export function resolveWatchedOrderTakeProfitDistribution(input: {
    pendingContext?: Pick<PendingLimitContext, 'tpDistribution' | 'strategy' | 'strategyRoute' | 'signalFamily'>;
    existingTrade?: Pick<ActiveTrade, 'tpLevels' | 'strategy' | 'strategyRoute' | 'signalFamily'>;
    watchedOrder?: Pick<WatchedOrder, 'tpDistribution' | 'strategy' | 'strategyRoute' | 'signalFamily'>;
}): TakeProfitDistribution
```

## File: src/http/trade-performance.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { DecisionLogEntry, TradeLogEntry } from '../types/index.js';
import {
    buildOrderProviderHintsByOrderKey,
    buildEntryLabelBreakdown,
    buildLaneTradeSummary,
    buildRecentTradeRows,
    buildTradeContextByOrderKey,
    collectDecisionContextSymbols,
    filterTradesByExperiment,
    normalizeEntryLabel,
    summarizeClosedTrades,
} from './trade-performance.js';
⋮----
function makeEntry(input: Partial<TradeLogEntry>): TradeLogEntry
⋮----
function makeDecision(input: Partial<DecisionLogEntry>): DecisionLogEntry
```

## File: src/http/trade-performance.ts
```typescript
import type { DecisionLogEntry, TradeLogEntry } from '../types/index.js';
⋮----
export type EquityPoint = {
    time: number;
    equity: number;
    drawdown: number;
    drawdownPct: number;
};
⋮----
export type LaneTradeSummary = {
    totalTrades: number;
    winCount: number;
    lossCount: number;
    winRate: string;
    grossPnl: string;
    totalFees: string;
    netPnl: string;
    profitFactor: string;
    expectancyPerTrade: string;
    pnlPer100Trades: string;
    tradeSharpe: string;
    equityCurve: EquityPoint[];
};
⋮----
export type ClosedTradeLike = {
    orderId?: string;
    symbol: string;
    side: 'BUY' | 'SELL';
    price: number;
    size: number;
    pnl?: number;
    fee?: number;
    time: number;
    provider?: string;
};
⋮----
export type ClosedTradeStats = {
    totalPnl: string;
    totalFees: string;
    netPnl: string;
    winCount: number;
    lossCount: number;
    totalTrades: number;
    winRate: string;
    profitFactor: string;
    maxDrawdown: string;
    maxDrawdownPct: string;
    sharpeRatio: string;
    longestLosingStreak: number;
    currentLosingStreak: number;
    maxSingleWin: string;
    maxSingleLoss: string;
    averageWin: string;
    averageLoss: string;
    expectancy: string;
    maxSingleWinTime: number | null;
    maxSingleWinCoin: string | null;
    maxSingleWinSide: string | null;
    maxSingleLossTime: number | null;
    maxSingleLossCoin: string | null;
    maxSingleLossSide: string | null;
};
⋮----
export type EntryLabelContext = {
    label: string;
    rawLabel?: string;
};
⋮----
export type EntryLabelSummary = {
    label: string;
    rawLabel?: string;
    trades: number;
    wins: number;
    losses: number;
    winRate: string;
    grossPnl: string;
    fees: string;
    netPnl: string;
};
⋮----
export type RecentTradeRow = {
    coin: string;
    side: string;
    price: string;
    size: number;
    pnl: string;
    fee: string;
    netPnl: string;
    time: number;
    provider?: string;
    entryLabel?: string;
    rawEntryLabel?: string;
};
⋮----
type ProviderHintsByOrderKey = Map<string, string[]>;
⋮----
export function filterTradesByExperiment(
    entries: TradeLogEntry[],
    experimentId: string | undefined,
): TradeLogEntry[]
⋮----
export function buildLaneTradeSummary(entries: TradeLogEntry[]): LaneTradeSummary
⋮----
export function summarizeClosedTrades(trades: ClosedTradeLike[]):
⋮----
export function normalizeEntryLabel(input: {
    entryLogic?: string;
    reasoning?: string;
    strategy?: string;
    signalFamily?: string;
}): EntryLabelContext
⋮----
export function buildTradeContextByOrderKey(
    entries: TradeLogEntry[],
    decisions: DecisionLogEntry[],
    providerHintsByOrderKey?: ProviderHintsByOrderKey,
): Map<string, EntryLabelContext>
⋮----
export function buildOrderProviderHintsByOrderKey(trades: ClosedTradeLike[]): ProviderHintsByOrderKey
⋮----
export function collectDecisionContextSymbols(
    trades: Array<{ symbol: string }>,
    fallbackSymbols: string[],
): string[]
⋮----
export function buildEntryLabelBreakdown(
    trades: ClosedTradeLike[],
    contextByOrderKey: Map<string, EntryLabelContext>,
): EntryLabelSummary[]
⋮----
type Bucket = {
        label: string;
        rawLabel?: string;
        trades: number;
        wins: number;
        losses: number;
        grossPnl: number;
        fees: number;
        netPnl: number;
    };
⋮----
export function buildRecentTradeRows(
    trades: ClosedTradeLike[],
    contextByOrderKey: Map<string, EntryLabelContext>,
): RecentTradeRow[]
⋮----
function dedupeRealizedEntries(entries: TradeLogEntry[]): TradeLogEntry[]
⋮----
function isRealizedEntry(entry: TradeLogEntry): boolean
⋮----
function buildDecisionContextByTraceId(decisions: DecisionLogEntry[]): Map<string, DecisionLogEntry>
⋮----
function isEntryDecision(decision: string | undefined): boolean
⋮----
function withRawLabel(label: string, rawLabel: string | undefined): EntryLabelContext
⋮----
function sanitizeRawLabel(value: string | undefined): string | undefined
⋮----
function shouldReplaceEntryLabelContext(existing: EntryLabelContext, candidate: EntryLabelContext): boolean
⋮----
function resolveTradeProvider(entry: TradeLogEntry): string
⋮----
export function buildTradeOrderKey(provider: string | undefined, symbol: string, orderId: string | undefined): string | undefined
⋮----
function buildTradeOrderLookupKey(symbol: string, orderId: string | undefined): string | undefined
⋮----
function resolveTradeContextTargetKeys(
    entry: TradeLogEntry,
    providerHintsByOrderKey?: ProviderHintsByOrderKey,
): string[]
⋮----
function resolveEntryLabelContextForTrade(
    trade: ClosedTradeLike,
    contextByOrderKey: Map<string, EntryLabelContext>,
): EntryLabelContext
⋮----
function resolveCloseAction(side: 'BUY' | 'SELL'): string
⋮----
function compressEquityCurve(points: EquityPoint[], maxPoints = 220): EquityPoint[]
⋮----
function calculateTradeSharpe(series: number[]): number
```

## File: src/services/order-fill-watcher.test.ts
```typescript
import { describe, expect, it, vi } from 'vitest';
import { OrderFillWatcherService, resolveWatchedOrderTakeProfitDistribution } from './order-fill-watcher.js';
```

## File: src/config/config-manager.test.ts
```typescript
import { afterEach, describe, expect, it } from 'vitest';
import {
    createConfigManager,
    getDefaultConfigManager,
    runWithDefaultConfigManager,
    setDefaultConfigManager,
} from './config-manager.js';
⋮----
const resetDefaultConfigManager = () =>
```

## File: src/config/config-manager.ts
```typescript
import { AsyncLocalStorage } from 'node:async_hooks';
import type { ProfileOptions, StrategyProfile, StrategyProfileId } from './strategy-types.js';
⋮----
import type { VolumeValidationConfig } from '../modules/volume-analysis/types.js';
⋮----
export type SymbolRiskOverrides = {
    maxStopLossDistancePercent?: number;
    minRiskUsd?: number;
    maxDrawdownHold?: number;
};
⋮----
export type LiquidationThresholds = {
    low: number;
    medium: number;
    high: number;
    extreme: number;
};
⋮----
export type SniperConfig = {
    minStopRel: number;
    minStopZoneRatio: number;
    minStopAtrRatio: number;
    runawayRR: number;
    runawayRel: number;
    runawayRelStrong: number;
    runawayRelExtreme: number;
    runawayTimeoutMs: number;
    d1WickRatioThreshold: number;
    htfBarrierAtrThreshold: number;
    volatileAtrRatio: number;
    chaseMinDisplacement: number;
    chaseOffsetPercent: number;
    chaseSlTierLow: number;
    chaseSlTierMid: number;
    chaseSlTierHigh: number;
    momentumOffsetThreshold: number;
    momentumOffsetPercent: number;
    aGradeFallbackMomentumOffsetPercent: number;
    aGradeFallbackMaxEntryGapAtr: number;
    aGradePrimaryAiEntryEnabled: boolean;
    aGradeFastStrictNoAi: boolean;
    aGradeAdaptiveImproveEnabled: boolean;
    aGradeFastTakerSlippageBps: number;
    idleScanIntervalMinutes: number;
    turtleSoupCGradeExecutionEnabled: boolean;
    postStopLossSignalCooldownMs: number;
    autoReversalDirectionLockMs: number;
    /** AI 提前平仓后的冷却时间，默认 3 * 15 * 60 * 1000 = 45min */
    aiEarlyExitCooldownMs: number;
};
⋮----
/** AI 提前平仓后的冷却时间，默认 3 * 15 * 60 * 1000 = 45min */
⋮----
export type PendingLimitConfig = {
    entryZoneBuffer: number;
    runawayRiskMultiple: number;
    runawayMinPercent: number;
    runawayFallbackRiskPercent: number;
    aFastFreshnessTimeoutMinutes: number;
    improveAdverseMoveRiskMultiple: number;
    aFastAutoRepriceEnabled: boolean;
    aFastAutoRepriceMaxCount: number;
    aFastAutoRepriceTriggerBps: number;
    tp1FrontRunEnabled: boolean;
    tp1FrontRunAtrMultiplier: number;
    tp1FrontRunMinRelativeBuffer: number;
    tp1FrontRunMaxRiskFraction: number;
    tp1FrontRunMinRiskMultiple: number;
};
⋮----
export type PremiumDiscountConfig = {
    defaultLookbackH4: number;
    minLookbackH4: number;
    maxLookbackH4: number;
    profileLookbackH4: Record<StrategyProfileId, number>;
    volatilityHighThreshold: number;
    volatilityLowThreshold: number;
    highVolLookbackH4: number;
    lowVolLookbackH4: number;
};
⋮----
export type OrderRiskConfig = {
    maxRiskPercent: number;
    minRiskReward: number;
    maxPriceDeviation: number;
    minStopDistance: number;
    minNotionalUsd: number;
    leverage: number;
};
⋮----
export type OrderProcessorConfig = {
    maxRiskPercent: number;
    pendingTimeoutMinutes: number;
};
⋮----
export type RiskBudgetConfig = {
    maxRiskPercent: number;
    maxConcurrentTrades: number;
    turtleMinStopPercent: number;
    turtleMinStopAbsolute: number;
    minOrderNotionalUsd: number;
    maxOrderNotionalUsd?: number;
};
⋮----
export type EmergencyCloseConfig = {
    /** 触发紧急平仓所需的最小反向 Displacement 强度（倍 ATR） */
    minReversalDisplacementMagnitude: number;
    /** 止损/AI平仓后自动反转所需的最小位移幅度（倍 ATR），默认 1.5 */
    minAutoReversalDisplacementMagnitude: number;
};
⋮----
/** 触发紧急平仓所需的最小反向 Displacement 强度（倍 ATR） */
⋮----
/** 止损/AI平仓后自动反转所需的最小位移幅度（倍 ATR），默认 1.5 */
⋮----
export type SignalGradeConfig = {
    aGradeThreshold: number;   // 默认 90
    bGradeThreshold: number;   // 默认 75
    cGradeThreshold: number;   // 默认 60
};
⋮----
aGradeThreshold: number;   // 默认 90
bGradeThreshold: number;   // 默认 75
cGradeThreshold: number;   // 默认 60
⋮----
export type TurtleSoupConfig = {
    minSfpPenetrationAtr: number;           // 0.2  — 至少要有 N ATR 的刺透幅度
    minSfpPenetrationRel: number;           // 0.003 — 或至少 N% 的相对幅度
    maxEntryDistanceAtr: number;            // 0.6  — 入场价距扫损位最大 ATR 倍数
    maxEntryDistanceRel: number;            // 0.004 — 或最大相对距离
    prewarnAtrDistance: number;             // 0.5  — 进入 N ATR 视为预警区
    sniperAtrDistance: number;              // 0.15 — 进入 N ATR 视为狙击区
    minRejectionWickAtr: number;            // 0.35 — M5 拒绝影线最小 ATR 倍数
    minRejectionBodyAtr: number;            // 0.2  — 或实体推动最小 ATR 倍数
    minRejectionRecoveryAtr: number;        // 0.15 — 收盘/跟进最小 ATR 倍数
    rangeEdgeMaxRatio: number;              // 0.25 — 允许区间两侧 N 内的扫损位
    rangeEdgeMaxRatioEq: number;            // 0.35 — EQH/EQL 放宽至 N（bounce filter 已保证质量）
    rangeEntryMaxBullishRatio: number;      // 0.45 — 多头入场必须保持在中轴下方
    rangeEntryMinBearishRatio: number;      // 0.55 — 空头入场必须保持在中轴上方
};
⋮----
minSfpPenetrationAtr: number;           // 0.2  — 至少要有 N ATR 的刺透幅度
minSfpPenetrationRel: number;           // 0.003 — 或至少 N% 的相对幅度
maxEntryDistanceAtr: number;            // 0.6  — 入场价距扫损位最大 ATR 倍数
maxEntryDistanceRel: number;            // 0.004 — 或最大相对距离
prewarnAtrDistance: number;             // 0.5  — 进入 N ATR 视为预警区
sniperAtrDistance: number;              // 0.15 — 进入 N ATR 视为狙击区
minRejectionWickAtr: number;            // 0.35 — M5 拒绝影线最小 ATR 倍数
minRejectionBodyAtr: number;            // 0.2  — 或实体推动最小 ATR 倍数
minRejectionRecoveryAtr: number;        // 0.15 — 收盘/跟进最小 ATR 倍数
rangeEdgeMaxRatio: number;              // 0.25 — 允许区间两侧 N 内的扫损位
rangeEdgeMaxRatioEq: number;            // 0.35 — EQH/EQL 放宽至 N（bounce filter 已保证质量）
rangeEntryMaxBullishRatio: number;      // 0.45 — 多头入场必须保持在中轴下方
rangeEntryMinBearishRatio: number;      // 0.55 — 空头入场必须保持在中轴上方
⋮----
export type ManagedAIPollingConfig = {
    openAiMinIntervalMs: number;            // 30 * 60 * 1000
    openAiMaxIntervalMs: number;            // 90 * 60 * 1000
    pendingAiMinIntervalMs: number;         // 30 * 60 * 1000
    pendingAiMaxIntervalMs: number;         // 75 * 60 * 1000
    openPriceMoveAtrThreshold: number;      // 0.55
    pendingPriceMoveAtrThreshold: number;   // 0.75
    reverseDisplacementThreshold: number;   // 1.5
    actionProximityAtr: number;             // 0.35
};
⋮----
openAiMinIntervalMs: number;            // 30 * 60 * 1000
openAiMaxIntervalMs: number;            // 90 * 60 * 1000
pendingAiMinIntervalMs: number;         // 30 * 60 * 1000
pendingAiMaxIntervalMs: number;         // 75 * 60 * 1000
openPriceMoveAtrThreshold: number;      // 0.55
pendingPriceMoveAtrThreshold: number;   // 0.75
reverseDisplacementThreshold: number;   // 1.5
actionProximityAtr: number;             // 0.35
⋮----
export type SqueezeStraddleConfig = {
    enabled: boolean;
    minCycles: number;
    maxWaitHours: number;
    minRangePercent: number;
    maxRangePercent: number;
    breakoutBufferPercent: number;
    minScore: number;
    adx?: {
        enabled?: boolean;
        period?: number;
        sweetSpotMin?: number;
        sweetSpotMax?: number;
        moderateMax?: number;
        lowPenaltyThreshold?: number;
        highPenaltyThreshold?: number;
        sweetSpotBonus?: number;
        moderateBonus?: number;
        lowPenalty?: number;
        highPenalty?: number;
        slopeLookback?: number;
        requireFlatOrFalling?: boolean;
    };
};
⋮----
export type MarketSessionType = 'CRYPTO_24X7' | 'US_EQUITY';
⋮----
export type MarketSessionConfig = {
    type: MarketSessionType;
    enforce?: boolean;
    allowPreMarket?: boolean;
    allowAfterHours?: boolean;
    holidayCalendar?: string[];
};
⋮----
export type SymbolExecutionProvider = 'HYPERLIQUID' | 'TIGER';
⋮----
export type ConfigOverrides = {
    strategyProfiles?: Partial<Record<StrategyProfileId, Partial<StrategyProfile>>>;
    defaultProfileId?: StrategyProfileId;
    symbolProfileMap?: Record<string, StrategyProfileId>;
    symbolRiskOverrides?: Record<string, SymbolRiskOverrides>;
    symbolSessions?: Record<string, Partial<MarketSessionConfig>>;
    symbolExecutionProviders?: Record<string, SymbolExecutionProvider>;
    liquidationThresholds?: Record<string, LiquidationThresholds>;
    narrowRangeThresholds?: Record<string, number>;
    okxLiquidationMultipliers?: Record<string, number>;
    okxLiquidationSymbols?: string[];
    yahooFinanceSymbols?: string[];
    yahooFinanceCryptoSymbols?: string[];
    sniper?: Partial<SniperConfig>;
    pendingLimit?: Partial<PendingLimitConfig>;
    premiumDiscount?: Partial<PremiumDiscountConfig>;
    orderRisk?: Partial<OrderRiskConfig>;
    orderProcessor?: Partial<OrderProcessorConfig>;
    riskBudget?: Partial<RiskBudgetConfig>;
    volumeValidation?: Partial<VolumeValidationConfig>;
    emergencyClose?: Partial<EmergencyCloseConfig>;
    signalGrade?: Partial<SignalGradeConfig>;
    turtleSoup?: Partial<TurtleSoupConfig>;
    managedAiPolling?: Partial<ManagedAIPollingConfig>;
    squeezeStraddle?: Partial<SqueezeStraddleConfig>;
};
⋮----
const createAliasMap = <T>(symbols: readonly string[], value: T): Record<string, T>
⋮----
const createRiskOverrideMap = (
    symbols: readonly string[],
    override: SymbolRiskOverrides
): Record<string, SymbolRiskOverrides>
⋮----
// US index ETFs typically run on tighter hourly ATR/price ranges than crypto.
⋮----
// Symbols that should be fetched from Yahoo Finance (equities/ETFs only by default)
⋮----
// 默认保持 A-fast 算法直连，避免 AI 主路径放大噪音入场。
⋮----
// 默认使用最近 7 天 H4 区间估算 PD。
⋮----
const normalizeSymbol = (symbol?: string): string
⋮----
const cloneProfile = (profile: StrategyProfile): StrategyProfile => (
⋮----
export class ConfigManager
⋮----
constructor(overrides: ConfigOverrides =
⋮----
getDefaultStrategyProfileId(): StrategyProfileId
⋮----
getDefaultStrategyProfile(): StrategyProfile
⋮----
getProfileForSymbol(symbol: string, options?: ProfileOptions): StrategyProfile
⋮----
// Keep explicitly mapped low-vol profiles (e.g. CALM for SPY/QQQ),
// only downgrade more aggressive profiles to STABLE.
⋮----
getSymbolStrategyProfileId(symbol: string): StrategyProfileId | undefined
⋮----
getSymbolRiskOverrides(symbol: string): SymbolRiskOverrides | undefined
⋮----
getSymbolExecutionProvider(symbol: string): SymbolExecutionProvider
⋮----
getMarketSessionConfig(symbol: string): MarketSessionConfig
⋮----
getLiquidationThresholds(symbol: string): LiquidationThresholds
⋮----
getNarrowRangeThreshold(symbol: string): number
⋮----
getOkxLiquidationMultiplier(symbol: string): number
⋮----
getOkxLiquidationSymbols(): string[]
⋮----
getYahooFinanceSymbols(): string[]
⋮----
getYahooFinanceCryptoSymbols(): string[]
⋮----
getSniperConfig(): SniperConfig
⋮----
getPendingLimitConfig(): PendingLimitConfig
⋮----
getPremiumDiscountConfig(): PremiumDiscountConfig
⋮----
getOrderRiskConfig(): OrderRiskConfig
⋮----
getOrderProcessorConfig(): OrderProcessorConfig
⋮----
getRiskBudgetConfig(): RiskBudgetConfig
⋮----
getVolumeValidationConfig(): VolumeValidationConfig
⋮----
getEmergencyCloseConfig(): EmergencyCloseConfig
⋮----
getSignalGradeConfig(): SignalGradeConfig
⋮----
getTurtleSoupConfig(): TurtleSoupConfig
⋮----
getManagedAIPollingConfig(): ManagedAIPollingConfig
⋮----
getSqueezeStraddleConfig(): SqueezeStraddleConfig
⋮----
export function createConfigManager(overrides?: ConfigOverrides): ConfigManager
⋮----
export function getDefaultConfigManager(): ConfigManager
⋮----
export function setDefaultConfigManager(manager: ConfigManager): void
⋮----
export async function runWithDefaultConfigManager<T>(
    manager: ConfigManager,
    task: () => Promise<T> | T
): Promise<T>
```

## File: src/controller/state-handlers.ts
```typescript
/**
 * 状态处理器
 * 处理 IDLE/PENDING/OPEN 状态的 AI 分析结果
 */
⋮----
import type { TradingState, MultiTimeframeData } from '../types/index.js';
import type { StructureAnalysis } from '../modules/structure-detector/index.js';
import type { Analyzer } from '../modules/analyzer/index.js';
import type { OrderProcessor } from '../modules/order-processor/index.js';
import type { GenericFill, IExecutor } from '../modules/executor/index.js';
import type { StateStore } from '../modules/state-store/index.js';
import type { AiMoveStopRejectionReason, PositionManager } from '../modules/position-manager/index.js';
import { logger } from '../utils/index.js';
import { buildStructureInfo, cancelTradeOrders } from './utils.js';
import { deriveAIEarlyExitCooldown } from './ai-close-cooldown.js';
import { deriveBreakoutContext } from './breakout-context.js';
import {
    deriveBandReversionTimeStopCooldown,
    evaluateBandReversionTimeStop,
    inferSignalFamilyFromEntryLogic,
} from './range-time-stop.js';
import { evaluateM15ReverseCloseGuard } from './m15-reversal-close-guard.js';
import type { OrderFillWatcherStub } from './order-fill-watcher-client.js';
import { registerOrderWatch } from './order-fill-watcher-client.js';
import { resolveStrategyTakeProfitDistribution } from '../utils/take-profit-allocation.js';
import { applySetupRiskMultiplier } from './setup-risk-policy.js';
⋮----
interface AICloseContext {
    symbol: string;
    closedDirection: 'LONG' | 'SHORT';
    exitPrice: number;
    reason: string;
    reversalSignal: boolean;
}
⋮----
function normalizeZoneBoundary(top: number, bottom: number):
⋮----
function resolveEntryObInvalidationPriceForReverseGuard(
    trade: TradingState['activeTrade'],
    structureAnalysis?: StructureAnalysis,
): number | undefined
⋮----
function calculateCurrentPnlR(trade: NonNullable<TradingState['activeTrade']>, currentPrice: number): number | undefined
⋮----
/**
 * 状态处理器
 */
export class StateHandlers
⋮----
constructor(
⋮----
private buildTraceId(symbol: string, orderId?: string): string
⋮----
private async logTradeEvent(entry: {
        symbol: string;
        traceId?: string;
        eventType: 'ORDER_SUBMIT' | 'ORDER_REJECT' | 'ORDER_CANCEL' | 'STOP_SUBMIT' | 'POSITION_CLOSE' | 'INFO';
        status?: 'SUCCESS' | 'FAILED' | 'CANCELED' | 'REJECTED' | 'INFO';
        direction?: 'LONG' | 'SHORT';
        orderId?: string;
        parentOrderId?: string;
        price?: number;
        size?: number;
        reason?: string;
        details?: string;
        raw?: Record<string, unknown>;
}): Promise<void>
⋮----
private calculateWeightedFillPrice(fills: GenericFill[]): number | undefined
⋮----
private async resolveCloseExecutionPrice(symbol: string, orderId: string | undefined, fallbackPrice: number): Promise<number>
⋮----
private compressReasoningForDecisionLog(
        analysisType: 'idle' | 'pending' | 'open',
        decision: string,
        reasoning: string,
):
⋮----
/**
     * 处理 AI 分析结果
     */
async handleAnalysisResult(
        state: TradingState,
        analysis: Awaited<ReturnType<Analyzer['analyzeByState']>>,
        marketData: MultiTimeframeData,
        accountBalance: number,
        structureAnalysis?: StructureAnalysis,
): Promise<void>
⋮----
// 执行具体的业务处理逻辑
⋮----
// 基于处理后的 data 生成最终日志决策，确保记录执行链路中的 runtime guard 结果。
⋮----
// 附加执行信息到推理末尾
⋮----
// 构建结构信息摘要
⋮----
// 统一记录决策日志
⋮----
/**
     * Helper to format reason avoiding duplication
     */
private formatReason(resultReason: string | undefined, originalReasoning: string, defaultMsg: string = ''): string
⋮----
// If result reason is effectively the same as original reasoning (or contains it), don't repeat it
⋮----
private describeMoveSlGuardReason(reason?: AiMoveStopRejectionReason): string
⋮----
private async registerOrderWatcher(params: {
        orderId?: string;
        symbol: string;
        direction: 'LONG' | 'SHORT';
        size: number;
        entryPrice: number;
        slPrice: number;
        tp1: number;
        tp2: number;
        tp3: number;
}): Promise<void>
⋮----
/**
     * 处理 IDLE 状态结果
     */
async handleIdleResult(
        state: TradingState,
        data: any,
        marketData: MultiTimeframeData,
        accountBalance: number,
        structureAnalysis?: StructureAnalysis,
): Promise<string>
⋮----
// 无论结果如何，都更新 memory（记录本次分析的决策和理由）
⋮----
// 更新 memory
⋮----
// 更新 watchedLevels（如果 AI 返回了新的关注位）
⋮----
// 先保存更新后的 memory
⋮----
// 动态风险预算（可选）：只有一个信号时吃满，信号扎堆时自动降档
⋮----
// 如果动态预算计算失败，不阻塞交易流程，回退到静态风控
⋮----
// 下限价单
⋮----
// 下止损单
⋮----
// 更新状态为 PENDING
⋮----
// 如果被风控拒绝或 AI 决定 WAIT
⋮----
/**
     * 处理 PENDING 状态结果
     */
async handlePendingResult(
        state: TradingState,
        data: any,
): Promise<string>
⋮----
// 更新 memory（记录本次分析的决策和理由）
⋮----
/**
     * 处理 OPEN 状态结果
     */
async handleOpenResult(
        state: TradingState,
        data: any,
        marketData: MultiTimeframeData,
        structureAnalysis?: StructureAnalysis,
): Promise<string>
⋮----
// 更新 memory（记录本次分析的决策和理由）
⋮----
// 1. 先处理 Trailing Stop
⋮----
// 2. 处理 AI 分析结果
⋮----
// 平仓
⋮----
// 取消止损单 + 所有未成交止盈单
```

## File: src/modules/position-manager/index.test.ts
```typescript
import { describe, expect, it, vi } from 'vitest';
import type { CandleWithIndicators, MultiTimeframeData, TradingState } from '../../types/index.js';
import { classifyExitDecisionFromFill, formatExitClassificationSource, PositionManager } from './index.js';
⋮----
function createOpenState(direction: 'LONG' | 'SHORT'): TradingState
⋮----
function createCandle(timestamp: number, high: number, low: number, close: number, atr = 1): CandleWithIndicators
⋮----
function createLongStructureMarketData(): MultiTimeframeData
⋮----
function createHybridLongProtectionStructureAnalysis()
⋮----
function createHybridShortProtectionStructureAnalysis()
⋮----
function createProtectedLongStructureMarketData(): MultiTimeframeData
⋮----
function createProtectedShortStructureMarketData(): MultiTimeframeData
⋮----
function createTrendRunnerLongMarketData(): MultiTimeframeData
```

## File: src/modules/structure-detector/strategies/squeeze-straddle.test.ts
```typescript
import { describe, expect, it } from 'vitest';
import type { CandleWithIndicators } from '../../../types/index.js';
import type { ConsolidationResult } from '../consolidation.js';
import { detectSqueezeStraddle } from './squeeze-straddle.js';
⋮----
function buildCandle(index: number, overrides: Partial<CandleWithIndicators> =
⋮----
function buildConsolidation(overrides: Partial<ConsolidationResult> =
```

## File: src/modules/structure-detector/strategies/squeeze-straddle.ts
```typescript
import type { CandleWithIndicators } from '../../../types/index.js';
import type { SqueezeStraddleConfig } from '../../../config/config-manager.js';
import type { ConsolidationResult } from '../consolidation.js';
import type { SqueezeStraddleCandidate } from '../types.js';
⋮----
interface DetectSqueezeStraddleInput {
    currentPrice: number;
    timestamp: number;
    m15Candles: CandleWithIndicators[];
    consolidation?: ConsolidationResult;
    config: SqueezeStraddleConfig;
    consecutiveCycleCount?: number;
}
⋮----
interface ResolvedAdxConfig {
    enabled: boolean;
    period: number;
    sweetSpotMin: number;
    sweetSpotMax: number;
    moderateMax: number;
    lowPenaltyThreshold: number;
    highPenaltyThreshold: number;
    sweetSpotBonus: number;
    moderateBonus: number;
    lowPenalty: number;
    highPenalty: number;
    slopeLookback: number;
    requireFlatOrFalling: boolean;
}
⋮----
interface AdxScoreAdjustment {
    adjustment: number;
    adx: number | null;
    slope: number | null;
    bucket: 'disabled' | 'unavailable' | 'sweet' | 'moderate' | 'neutral';
}
⋮----
function clampScore(score: number): number
⋮----
function resolveAdxConfig(config: SqueezeStraddleConfig): ResolvedAdxConfig
⋮----
function calculateAdxSeries(candles: CandleWithIndicators[], period: number): number[]
⋮----
function evaluateAdxScore(
    candles: CandleWithIndicators[],
    config: ResolvedAdxConfig,
): AdxScoreAdjustment
⋮----
export function detectSqueezeStraddle(input: DetectSqueezeStraddleInput): SqueezeStraddleCandidate | undefined
⋮----
// Use the local M15 squeeze box directly.
// Broad consolidation windows (e.g. 8h) can stay informative for context,
// but should not widen the straddle bracket.
⋮----
// Hurst COILING strength: how close priorH is to 0.50 (perfect random walk)
⋮----
? Math.max(0, 25 - Math.abs(squeeze.priorH - 0.50) * 250)  // 25 pts at H=0.50, 0 pts at H=0.40 or 0.60
⋮----
// Consolidation confidence: scaled to 25 max
⋮----
// ATR contraction ratio: deeper contraction = more stored energy
⋮----
? Math.min(15, (1.0 - atrRatio) * 75)  // 15 pts at ratio 0.80, 0 at 1.0
⋮----
// Compression indicators: up to 20 pts
⋮----
// Duration bonus: longer coiling = bigger expected breakout. Up to 15 pts
```

## File: src/modules/structure-detector/strategies/standard-ict.ts
```typescript
/**
 * 标准 ICT 趋势跟踪策略
 * 
 * 核心逻辑:
 * 1. 顺势交易 (Trend Following)
 * 2. 必须有 H1 级别的结构破坏 (MSS/BOS)
 * 3. 必须有 M15 级别的动能 (Displacement)
 * 4. 入场寻找 FVG 或 OB
 */
⋮----
import type {
    TradeSetup,
    Direction,
    LiquidityAnalysis,
    TimeframeStructure,
    LiquidityLevel,
    Displacement,
    FVG,
    FillType,
    OrderBlock,
    AdjustmentSetup
} from '../types.js';
import type { Candle } from '../../../types/index.js';
import type { CandleWithIndicators } from '../../../types/market-data.js';
import type { TrendContext } from '../trend.js';
import type { ConsolidationResult } from '../consolidation.js';
⋮----
import { calculateSignalScore, getSignalGradeFromTotal } from '../signal-scorer.js';
import { determineFillType, isValidEntryFVG } from '../displacement.js';
import { generateSummary } from '../summary-generator.js';
import { evaluateCausalChain, type CausalChainInput } from '../causal-chain.js';
import { isInKillzone } from '../liquidity.js';
import { evaluateConsolidationTradeability } from '../consolidation.js';
import { getNearestLiquidityTarget } from '../liquidity.js';
import { calculatePriceZone } from '../market-context.js';
import { confirmPostDisplacementVwapSide } from '../vwap.js';
import { detectThirdPushExhaustion } from '../third-push-exhaustion.js';
import { evaluateStandardPreflight } from './preflight/standard.js';
import { ensureRiskRewardGuard, type RiskRewardProfile } from './enhancers/risk-metrics.js';
import { getTakeProfitConfig, computeTakeProfitPrices } from './enhancers/take-profit.js';
import {
    FIRST_IMPULSE_PULLBACK_MIN_DISPLACEMENT,
    isFirstImpulsePullbackEligible,
} from './first-impulse.js';
import type { StrategyProfile } from '../../../config/strategy-profiles.js';
import { getDefaultStrategyProfile } from '../../../config/strategy-profiles.js';
import type { VolumeValidationConfig } from '../../volume-analysis/types.js';
import type { SignalGradeConfig } from '../../../config/config-manager.js';
import type { StrategyRoute } from '../types.js';
import { detectKeltnerExtremeState } from './turtle-soup/range-mode.js';
⋮----
interface StandardIctInput {
    symbol: string;
    currentPrice: number;
    atr: number;
    m5Candles: Candle[];
    m15Candles: Candle[];
    h1Candles?: Candle[];
    h1Structure: TimeframeStructure;
    m15Structure: TimeframeStructure;
    m5Structure: TimeframeStructure; // Needed for TP calc
    h4Structure: TimeframeStructure; // Needed for TP calc
    h4Candles: Candle[];
    liquidity: LiquidityAnalysis;
    trendContext?: TrendContext;
    consolidation: ConsolidationResult;
    currentPosition?: any;
    timestamp: number;
    allFVGs: FVG[];  // legacy mixed-TF context
    allOBs: OrderBlock[]; // legacy mixed-TF context
    h4FVGs?: FVG[];  // strict H4-only PD array context
    h4OBs?: OrderBlock[]; // strict H4-only PD array context
    pdArrayReactions: any[]; // for summary
    profile?: StrategyProfile;
    volumeConfig?: VolumeValidationConfig;
    signalGradeConfig?: SignalGradeConfig;
    route?: StrategyRoute;
}
⋮----
m5Structure: TimeframeStructure; // Needed for TP calc
h4Structure: TimeframeStructure; // Needed for TP calc
⋮----
allFVGs: FVG[];  // legacy mixed-TF context
allOBs: OrderBlock[]; // legacy mixed-TF context
h4FVGs?: FVG[];  // strict H4-only PD array context
h4OBs?: OrderBlock[]; // strict H4-only PD array context
pdArrayReactions: any[]; // for summary
⋮----
export interface StandardResult {
    setup?: TradeSetup;
    adjustments: AdjustmentSetup[];
    diagnostics: string[];
    summary: string;
}
⋮----
function isProtectiveSwingForEntry(params: {
    direction: Direction;
    swingPrice: number;
    entryPrice: number;
}): boolean
⋮----
function findLatestProtectiveSwing<T extends { price: number }>(params: {
    swings: T[];
    direction: Direction;
    entryPrice: number;
}): T | undefined
⋮----
// TP1 抢跑：在 swing 目标前留出一小段 ATR 缓冲，提高成交概率
⋮----
export function resolveStandardIctVwapConfirmationWindow(params: {
    displacementMagnitude: number;
    trendStrength?: 'strong' | 'moderate' | 'weak';
    consolidationConfidence: number;
    isConsolidating: boolean;
}):
⋮----
export function resolveStandardIctVwapEntryPolicy(vwapConfirmed: boolean):
⋮----
export function shouldBlockStandardIctByH4Zone(params: {
    direction: Direction;
    zone?: 'premium' | 'discount' | 'equilibrium';
}): boolean
⋮----
export function shouldBlockStandardIctByKeltnerExtreme(params: {
    direction: Direction;
    currentPrice: number;
    h1Candles?: Candle[];
}):
⋮----
export function rankStandardIctEntryFvgs(
    fvgs: FVG[],
    direction: Direction,
    currentPrice: number,
): FVG[]
⋮----
export interface PostDisplacementFvgRanking {
    ranked: FVG[];
    directionalCount: number;
    validDirectionalCount: number;
    staleValidCount: number;
    invalidFillCounts: Partial<Record<FillType, number>>;
    acceptedTapCount: number;
}
⋮----
export interface StandardIctEntryFvgSelection {
    source?: 'H1' | 'M15';
    ranked: FVG[];
    m15Ranking?: PostDisplacementFvgRanking;
}
⋮----
export function rankPostDisplacementEntryFvgs(params: {
    fvgs: FVG[];
    candles: Candle[];
    direction: Direction;
    currentPrice: number;
    displacementTime: number;
    allowTappedFvg?: boolean;
}): PostDisplacementFvgRanking
⋮----
export function selectStandardIctEntryFvgs(params: {
    h1Fvgs: FVG[];
    m15Fvgs: FVG[];
    m15Candles: Candle[];
    direction: Direction;
    currentPrice: number;
    displacementTime: number;
    allowTappedFvg?: boolean;
    allowM15Fallback?: boolean;
    preferM15Fallback?: boolean;
}): StandardIctEntryFvgSelection
⋮----
function shouldAllowConsolidationPullbackContinuation(params: {
    route?: StrategyRoute;
    consolidation: ConsolidationResult;
    breakInfo?: TimeframeStructure['structureBreak'];
    displacement?: Displacement;
}): boolean
⋮----
function shouldAllowFirstImpulsePullback(params: {
    route?: StrategyRoute;
    consolidation: ConsolidationResult;
    timestamp: number;
    m15Candles: Candle[];
    h1Structure: TimeframeStructure;
    m15Structure: TimeframeStructure;
}): boolean
⋮----
function createFirstImpulseProxyDisplacement(params: {
    breakInfo: NonNullable<TimeframeStructure['structureBreak']>;
    m15Structure: TimeframeStructure;
}): Displacement
⋮----
function formatFillCounts(counts: Partial<Record<FillType, number>>): string | null
⋮----
export function detectStandardSetup(input: StandardIctInput): StandardResult
⋮----
const buildResult = (s?: TradeSetup): StandardResult =>
⋮----
// =================================================================
// [核心] H1 结构 + M15 入场
// =================================================================
⋮----
// M15 Displacement 捕捉入场时机
⋮----
// --- Early return: no structure break or no displacement ---
⋮----
// [风控] H4 趋势硬过滤
⋮----
// --- Early return: direction mismatch ---
⋮----
// --- Early return: H4 zone block ---
⋮----
// --- Early return: Keltner extreme block ---
⋮----
// =================================================================
// 入场区选择 + 预检 + 新仓位评估
// =================================================================
⋮----
// Adjustment logic...
⋮----
// ---------------- Extracted sub-functions for detectStandardSetup ----------------
⋮----
function runEntryZonePipeline(params: {
    direction: Direction;
    isBOS: boolean;
    isMSS: boolean;
    breakInfo: NonNullable<TimeframeStructure['structureBreak']>;
    breakOrigin: 'H1' | 'M15' | null;
    displacement: Displacement;
    displacementProfile: StrategyProfile['displacement'];
    filterProfile: StrategyProfile['filters'];
    route?: StrategyRoute;
    consolidation: ConsolidationResult;
    m15Structure: TimeframeStructure;
    h1Structure: TimeframeStructure;
    m5Structure: TimeframeStructure;
    h4Structure: TimeframeStructure;
    m15Candles: Candle[];
    h1Candles?: Candle[];
    currentPrice: number;
    atr: number;
    timestamp: number;
    liquidity: LiquidityAnalysis;
    trendContext?: TrendContext;
    h4PriceZone: ReturnType<typeof deriveH4PriceZone>;
    allFVGs: FVG[];
    allOBs: OrderBlock[];
    h4FVGs?: FVG[];
    h4OBs?: OrderBlock[];
    currentPosition?: any;
    vwapEntryAllowed: boolean;
    htfBias: string | undefined;
    input: StandardIctInput;
    profile: StrategyProfile;
    diagnostics: string[];
    allowFirstImpulsePullback: boolean;
}): TradeSetup | undefined
⋮----
// =================================================================
// 核心校验: H1 回调完成确认
// =================================================================
⋮----
// 尝试建立新仓位
⋮----
function runVwapConfirmation(params: {
    displacement: Displacement;
    trendContext?: TrendContext;
    consolidation: ConsolidationResult;
    m15Candles: Candle[];
    direction: Direction;
    diagnostics: string[];
}): boolean
⋮----
function isHybridPullbackOnly(params: {
    route?: StrategyRoute;
    consolidation: ConsolidationResult;
    currentPrice: number;
    entryZone: TradeSetup['entryZone'];
    momentumPriority: boolean | undefined;
}): boolean
⋮----
function checkH4ZoneBlock(params: {
    direction: Direction;
    h4PriceZone: ReturnType<typeof deriveH4PriceZone>;
    diagnostics: string[];
}): boolean
⋮----
function collectPositionAdjustments(params: {
    currentPosition: any;
    breakInfo: NonNullable<TimeframeStructure['structureBreak']>;
    h1Structure: TimeframeStructure;
    atr: number;
    adjustments: AdjustmentSetup[];
}): void
⋮----
// Map position direction ('LONG'/'SHORT') to structure direction ('bullish'/'bearish')
⋮----
function checkHtfTrendFilter(params: {
    htfBias: string | undefined;
    htfStrength: 'strong' | 'moderate' | 'weak' | undefined;
    breakDirection: Direction;
    displacementMagnitude: number;
    allowFirstImpulsePullback?: boolean;
}):
⋮----
function shouldBlockLateThirdPushContinuation(params: {
    direction: Direction;
    atr: number;
    currentPrice: number;
    h1Candles?: Candle[];
    h1Structure: TimeframeStructure;
    m15Candles: Candle[];
    m15Structure: TimeframeStructure;
    displacement?: Displacement;
    allowFirstImpulsePullback: boolean;
    diagnostics: string[];
}): boolean
⋮----
function emitFvgSelectionDiagnostics(params: {
    activeFvgSource: 'H1' | 'M15' | undefined;
    relevantFVGs: FVG[];
    fvgSelection: StandardIctEntryFvgSelection;
    allowTappedFvg: boolean;
    diagnostics: string[];
}): void
⋮----
function resolveEntryZone(params: {
    preferFVG: boolean;
    relevantFVGs: FVG[];
    activeFvgSource: 'H1' | 'M15' | undefined;
    m15Structure: TimeframeStructure;
    diagnostics: string[];
}):
⋮----
interface EvaluateNewPositionInput {
    direction: Direction;
    isBOS: boolean;
    isMSS: boolean;
    entryZone: TradeSetup['entryZone'];
    entryZoneObj: FVG | OrderBlock;
    h4PriceZone: ReturnType<typeof deriveH4PriceZone>;
    displacement: Displacement;
    breakInfo: NonNullable<TimeframeStructure['structureBreak']>;
    breakOrigin: 'H1' | 'M15' | null;
    isStrongDisplacement: boolean;
    displacementMagnitude: number;
    displacementTime: number;
    atr: number;
    currentPrice: number;
    timestamp: number;
    m5Structure: TimeframeStructure;
    m15Structure: TimeframeStructure;
    h1Structure: TimeframeStructure;
    h4Structure: TimeframeStructure;
    liquidity: LiquidityAnalysis;
    trendContext?: TrendContext;
    consolidation: ConsolidationResult;
    preDispOBs: OrderBlock[];
    activeFvgSource: 'H1' | 'M15' | undefined;
    momentumPriority: boolean | undefined;
    catalystSweep: any;
    isAPlusSetup: boolean;
    allowConsolidationPullbackContinuation: boolean;
    allowFirstImpulsePullback: boolean;
    route?: StrategyRoute;
    filterProfile: StrategyProfile['filters'];
    htfBias: string | undefined;
    input: StandardIctInput;
    profile: StrategyProfile;
    diagnostics: string[];
    hybridPullbackOnly: boolean;
    preflight: ReturnType<typeof evaluateStandardPreflight>;
    h1Candles?: Candle[];
}
⋮----
function evaluateNewPosition(params: EvaluateNewPositionInput): TradeSetup | undefined
⋮----
// MTF Alignment: 检查 M5 结构/位移是否与 M15 方向一致
// 条件：M5 有同向的结构破坏 或 同向的 displacement
⋮----
// ICT 因果链时序评估
⋮----
// 1. 计算止损
⋮----
const buildTargets = (price: number): RiskRewardProfile<StandardTargetPayload> =>
⋮----
score: score, // 使用完整 signal score 对象
⋮----
// 算法定价引擎输出 - A 级信号可直接使用，跳过 AI 分析
⋮----
// priorMSSConfirmed: 验证在当前 BOS 之前，H1 结构中是否已有同向趋势迹象
// (HH+HL 序列 = 之前有过 bullish MSS; LL+LH 序列 = 之前有过 bearish MSS)
// 仅依赖 isBOS 会导致每个 BOS 都获得历史 MSS 奖励，不合理
function checkPriorMSSConfirmed(params: {
    isBOS: boolean;
    direction: Direction;
    h1Structure: TimeframeStructure;
}): boolean
⋮----
// HH + HL 序列表示之前有 bullish MSS 建立趋势
⋮----
// LL + LH 序列表示之前有 bearish MSS 建立趋势
⋮----
function evaluateSignalEligibility(params: {
    isMSS: boolean;
    trendConfirmed: boolean;
    filterProfile: StrategyProfile['filters'];
    allowConsolidationPullbackContinuation: boolean;
    allowFirstImpulsePullback: boolean;
    route?: StrategyRoute;
    consolidation: ConsolidationResult;
    currentPrice: number;
    atr: number;
    displacement: Displacement;
    direction: Direction;
    entryZone: TradeSetup['entryZone'];
    activeFvgSource: 'H1' | 'M15' | undefined;
    h1Candles?: Candle[];
    diagnostics: string[];
}):
⋮----
// 盘整市场过滤
⋮----
// @ts-ignore
⋮----
function calculateStopLossForSetup(params: {
    direction: Direction;
    entryZone: TradeSetup['entryZone'];
    entryPrice: number;
    atr: number;
    isStrongDisplacement: boolean;
    displacement: Displacement;
    h1Structure: TimeframeStructure;
    m15Structure: TimeframeStructure;
    diagnostics: string[];
}):
⋮----
// 强动能用 M15 Swing，其余用 H1 Swing
⋮----
// ---------------- Helper Functions From index.ts ----------------
⋮----
interface StandardTargetPayload {
    tp1: number;
    tp2: number;
    tp3: number;
    risk: number;
    tp1RR: number;
    riskRewardRatio: number;
}
⋮----
interface HtfLiquidityTp1Input {
    direction: Direction;
    entryPrice: number;
    risk: number;
    atr: number;
    liquidity: LiquidityAnalysis;
}
⋮----
function deriveH4PriceZone(
    currentPrice: number,
    h4Candles: Candle[]
):
⋮----
export function findNearestHtfLiquidityTarget(params: HtfLiquidityTp1Input): number | undefined
⋮----
export function findTakeProfitTargets(params: any)
⋮----
// TP1 不追求过远：若超过 1R，优先回退到 1R，避免第一目标过深导致不易成交
⋮----
function findNearestSwingTarget(params: {
    direction: Direction;
    entryPrice: number;
    risk: number;
    atr: number;
    h1Structure: TimeframeStructure;
    m15Structure: TimeframeStructure;
    h4Structure: TimeframeStructure;
}): number | undefined
⋮----
const pickNearest = (prices: number[]): number | undefined =>
⋮----
const applyFrontRun = (target: number | undefined): number | undefined =>
⋮----
const pickSwingPrices = (structure: TimeframeStructure): number[] =>
⋮----
// 优先使用更“明显”的高周期 swing（H1/H4），其次使用 M15
⋮----
interface EntryPriceParams {
    direction: Direction;
    entryZone: TradeSetup['entryZone'];
    entryZoneObj?: FVG | OrderBlock;
    isBOS: boolean;
    displacementMagnitude?: number;
    atr: number;
    currentPrice: number;
    momentumPriority?: boolean;
    hybridPullbackOnly?: boolean;
    profile: StrategyProfile;
}
⋮----
interface EntryPriceResult {
    entryPrice: number;
    fallbackEntry: number;
}
⋮----
function calculateDynamicEntryPrice(params: EntryPriceParams): EntryPriceResult
⋮----
function getZoneMidpoint(entryZone: TradeSetup['entryZone'], entryZoneObj?: FVG | OrderBlock): number
```

## File: src/controller/pending-limit-handler.ts
```typescript
/**
 * 限价单等待处理模块
 * 监控限价单状态，成交后下止损单并进入 OPEN 状态
 */
⋮----
import type { TradingState, PendingLimitContext, TradeLogEntry } from '../types/index.js';
import type { GenericFill, IExecutor } from '../modules/executor/index.js';
import type { StateStore } from '../modules/state-store/index.js';
import { createHyperliquidMarketClient } from '../modules/data-fetcher/index.js';
import { logger } from '../utils/index.js';
import type { OrderFillWatcherStub } from './order-fill-watcher-client.js';
import { registerOrderWatch, unregisterOrderWatch } from './order-fill-watcher-client.js';
import { getDefaultConfigManager, type ConfigManager, type PendingLimitConfig } from '../config/config-manager.js';
import type { StrategyProfile } from '../config/strategy-profiles.js';
import { applyTp1FrontRun, applyTp3FrontRun, normalizeTakeProfitLevels } from '../utils/take-profit-levels.js';
import {
    allocateTakeProfitTranches,
    resolveStrategyTakeProfitDistribution,
    type TakeProfitDistribution,
} from '../utils/take-profit-allocation.js';
import { resolveActiveStopOrderId } from '../utils/stop-order-guard.js';
⋮----
type TakeProfitPlacementResult =
    | { status: 'skipped' }
    | { status: 'placed'; orderId?: string }
    | { status: 'failed'; error?: string };
⋮----
type AFastEdgeRepriceParams = {
    ctx: PendingLimitContext;
    currentPrice: number;
    enabled: boolean;
    triggerBps: number;
    minOrderNotionalUsd: number;
};
⋮----
type AFastEdgeRepriceDecision = {
    shouldReprice: boolean;
    reason: string;
    targetEntryPrice?: number;
    targetSize?: number;
};
⋮----
type AFastFreshnessTimeoutParams = {
    ctx: PendingLimitContext;
    now: number;
    timeoutMs: number;
};
⋮----
type AFastFreshnessTimeoutDecision = {
    shouldCancel: boolean;
    reason: string;
};
⋮----
type PendingWaitReasoningParams = {
    ctx: PendingLimitContext;
    now: number;
    aFastFreshnessTimeoutMs: number;
};
⋮----
export type AggregatedOrderFill = {
    orderId: string;
    averagePrice: number;
    totalSize: number;
    totalFee: number;
    totalPnl: number;
    latestFill: GenericFill;
    fills: GenericFill[];
};
⋮----
type CancelOrderAndLogParams = {
    symbol: string;
    orderId: string;
    direction: PendingLimitContext['direction'];
    traceId: string;
    price: number;
    reason: string;
    details: string;
    logLevel?: 'warn' | 'error';
};
⋮----
function getAFastEdgeRepriceBlocker(
    ctx: PendingLimitContext,
    enabled: boolean,
    currentPrice: number,
): string | undefined
⋮----
function resolveAFastEdgeTargetEntryPrice(ctx: PendingLimitContext): number | undefined
⋮----
function improvesEdgeMeaningfully(ctx: PendingLimitContext, targetEntryPrice: number, minMeaningfulGap: number): boolean
⋮----
function isPriceMovingAwayForReprice(
    ctx: PendingLimitContext,
    currentPrice: number,
    triggerDistance: number,
): boolean
⋮----
export function evaluateAFastEdgeRepriceCandidate(params: AFastEdgeRepriceParams): AFastEdgeRepriceDecision
⋮----
function isAFastPendingContext(ctx: PendingLimitContext): boolean
⋮----
export function evaluateAFastFreshnessTimeout(params: AFastFreshnessTimeoutParams): AFastFreshnessTimeoutDecision
⋮----
export function buildPendingWaitReasoning(params: PendingWaitReasoningParams): string
⋮----
export function aggregateOrderFillsByOrderId(
    fills: GenericFill[],
    orderId: string,
): AggregatedOrderFill | undefined
⋮----
export function hasEquivalentFillLog(
    entries: TradeLogEntry[],
    target: {
        orderId?: string;
        side?: 'BUY' | 'SELL';
        size?: number;
        fillTs?: number;
    },
): boolean
⋮----
export function resolvePendingTakeProfitDistribution(
    ctx: Pick<PendingLimitContext, 'tpDistribution' | 'strategy' | 'strategyRoute' | 'signalFamily'>,
): TakeProfitDistribution
⋮----
/**
 * 限价单等待处理器
 */
export class PendingLimitHandler
⋮----
constructor(
        private stateStore: StateStore,
        private executor: IExecutor,
        testnet: boolean = false,
        private orderFillWatcherStub?: OrderFillWatcherStub,
        private configManager: ConfigManager = getDefaultConfigManager(),
)
⋮----
private buildTraceId(symbol: string, orderId?: string): string
⋮----
private async logTradeEvent(entry: {
        symbol: string;
        traceId?: string;
        eventType: 'ORDER_CANCEL' | 'STOP_SUBMIT' | 'TP_SUBMIT' | 'FILL' | 'POSITION_CLOSE' | 'INFO';
        status?: 'SUCCESS' | 'FAILED' | 'CANCELED' | 'FILLED' | 'INFO';
        direction?: 'LONG' | 'SHORT';
        side?: 'BUY' | 'SELL';
        orderId?: string;
        parentOrderId?: string;
        price?: number;
        size?: number;
        fee?: number;
        pnl?: number;
        reason?: string;
        details?: string;
        raw?: Record<string, unknown>;
}): Promise<void>
⋮----
/**
     * Cancel order + log trade event. Returns true if cancel succeeded.
     */
private async cancelOrderAndLog(params: CancelOrderAndLogParams): Promise<boolean>
⋮----
private async placeTakeProfitOrder(input: {
        symbol: string;
        direction: 'LONG' | 'SHORT';
        price: number;
        size: number;
        level: 'TP1' | 'TP2' | 'TP3';
}): Promise<TakeProfitPlacementResult>
⋮----
private async ensurePendingTraceContext(
        state: TradingState,
        symbol: string,
        ctx: PendingLimitContext,
): Promise<
⋮----
private async handleFilledPendingOrder(
        state: TradingState,
        symbol: string,
        ctx: PendingLimitContext,
        traceId: string,
        aggregatedFill: AggregatedOrderFill,
        orders: Awaited<ReturnType<IExecutor['getOpenOrders']>>,
): Promise<void>
⋮----
private async ensureProtectiveStopAfterPendingFill(params: {
        symbol: string;
        ctx: PendingLimitContext;
        traceId: string;
        actualEntryPrice: number;
        actualSize: number;
        orders: Awaited<ReturnType<IExecutor['getOpenOrders']>>;
        currentState: TradingState;
}): Promise<string | undefined>
⋮----
private async finalizePendingFillToOpen(params: {
        state: TradingState;
        symbol: string;
        ctx: PendingLimitContext;
        traceId: string;
        actualEntryPrice: number;
        actualSize: number;
        slOrderId: string;
}): Promise<void>
⋮----
private async handleMissingPendingOrder(
        state: TradingState,
        symbol: string,
        ctx: PendingLimitContext,
        traceId: string,
        orders: Awaited<ReturnType<IExecutor['getOpenOrders']>>,
): Promise<void>
⋮----
private async getPendingCurrentPrice(symbol: string, fallbackPrice: number): Promise<number>
⋮----
private async logPendingWaitIfChanged(
        orderCacheKey: string,
        symbol: string,
        ctx: PendingLimitContext,
        now: number,
        currentPrice: number,
): Promise<void>
⋮----
private async handleOpenPendingOrder(
        state: TradingState,
        symbol: string,
        ctx: PendingLimitContext,
        traceId: string,
        profile: StrategyProfile,
        orderCacheKey: string,
): Promise<void>
⋮----
/**
     * 检查限价单状态
     */
async checkPendingLimit(state: TradingState, symbol: string): Promise<void>
⋮----
/**
     * 重置状态到 IDLE，可选带冷却期（用于 runaway 取消后防止快速重复挂单）
     */
async resetToIdle(
        symbol: string,
        reason: string,
        cooldown?: { direction: 'LONG' | 'SHORT'; price: number },
): Promise<void>
⋮----
private shouldAbortRunaway(ctx: PendingLimitContext, currentPrice: number):
⋮----
// 当 SL 未设置或与入场价相同（rawRiskUnit 为 0 或非有限数）时，使用基于入场价的默认 Risk 单位
⋮----
private shouldAbortImproveOnReverse(ctx: PendingLimitContext, currentPrice: number):
⋮----
private async tryAutoRepriceAFastEdge(
        state: TradingState,
        ctx: PendingLimitContext,
        currentPrice: number,
): Promise<boolean>
⋮----
private deriveTpLevels(
        ctx: PendingLimitContext,
        entryPriceOverride?: number,
):
⋮----
private async fetchLatestM15Atr(symbol: string): Promise<number | undefined>
⋮----
private async deriveTpLevelsForPlacement(
        ctx: PendingLimitContext,
        actualEntryPrice?: number,
): Promise<
⋮----
private buildPendingWaitFingerprint(ctx: PendingLimitContext): string
⋮----
private getOrderCacheKey(symbol: string, orderId: string): string
⋮----
private markOrderMissing(symbol: string, orderId: string):
⋮----
private clearOrderTransientCache(symbol: string, orderId: string): void
⋮----
private clearSymbolTransientCache(symbol: string): void
⋮----
private async trySwitchToImprovePhase(
        state: TradingState,
        ctx: PendingLimitContext,
        currentPrice: number,
): Promise<boolean>
⋮----
private async ensureWatcherRegistered(state: TradingState, ctx: PendingLimitContext): Promise<void>
⋮----
private async cancelPendingStop(symbol: string, ctx?: PendingLimitContext): Promise<void>
⋮----
private getStrategyProfile(symbol: string): StrategyProfile
```

## File: src/controller/straddle-handler.test.ts
```typescript
import { describe, expect, it, vi } from 'vitest';
import type { TradingState } from '../types/index.js';
import type { StructureAnalysis } from '../modules/structure-detector/index.js';
import { maybePlaceSqueezeStraddle, maintainSqueezeStraddle } from './straddle-handler.js';
⋮----
function buildState(overrides: Partial<TradingState> =
⋮----
function buildStructureAnalysis(overrides: Partial<StructureAnalysis> =
⋮----
lastStraddleSl: { time: Date.now() - 30 * 60 * 1000 }, // 30 min ago, within 2h cooldown
```

## File: src/controller/straddle-handler.ts
```typescript
import type { StructureAnalysis } from '../modules/structure-detector/index.js';
import type { IExecutor } from '../modules/executor/index.js';
import type { RiskManager } from '../modules/risk-manager/index.js';
import type { StateStore } from '../modules/state-store/index.js';
import type { TradingState } from '../types/index.js';
import type { OrderFillWatcherStub } from './order-fill-watcher-client.js';
import { registerOrderWatch, unregisterOrderWatch } from './order-fill-watcher-client.js';
import { logger } from '../utils/index.js';
⋮----
interface MaybePlaceSqueezeStraddleInput {
    state: TradingState;
    structureAnalysis: StructureAnalysis;
    accountBalance: number;
    maxRiskPercent: number;
    executor: Pick<IExecutor, 'placeStopOrder' | 'cancelOrder'>;
    stateStore: Pick<StateStore, 'saveState' | 'logDecision'>;
    riskManager: Pick<RiskManager, 'checkGlobalRiskAllowance' | 'getMinOrderNotionalUsd'>;
    orderFillWatcherStub?: OrderFillWatcherStub;
}
⋮----
interface MaintainSqueezeStraddleInput {
    state: TradingState;
    now: number;
    structureAnalysis?: StructureAnalysis;
    accountBalance?: number;
    maxRiskPercent?: number;
    executor: Pick<IExecutor, 'cancelOrder' | 'placeStopOrder'>;
    stateStore: Pick<StateStore, 'resetToIdle' | 'saveState' | 'logDecision'>;
    riskManager?: Pick<RiskManager, 'checkGlobalRiskAllowance' | 'getMinOrderNotionalUsd'>;
    orderFillWatcherStub?: OrderFillWatcherStub;
}
⋮----
interface SqueezeStraddlePlaceResult {
    armed: boolean;
}
⋮----
interface MaintainSqueezeStraddleResult {
    handled: boolean;
    nextState?: TradingState;
}
⋮----
function hasRangeBeenReplaced(
    current: NonNullable<TradingState['straddleContext']>,
    candidate: NonNullable<StructureAnalysis['squeezeStraddleCandidate']>,
): boolean
⋮----
async function cancelActiveStraddleOrders(input: {
    state: TradingState;
    executor: Pick<IExecutor, 'cancelOrder'>;
    orderFillWatcherStub?: OrderFillWatcherStub;
}): Promise<boolean>
⋮----
function buildTpLevels(direction: 'LONG' | 'SHORT', triggerPrice: number, rangeWidth: number):
⋮----
function resolveStraddleStopDistance(candidate: NonNullable<StructureAnalysis['squeezeStraddleCandidate']>): number
⋮----
export async function maybePlaceSqueezeStraddle(
    input: MaybePlaceSqueezeStraddleInput,
): Promise<SqueezeStraddlePlaceResult>
⋮----
// Check straddle cooldown
const STRADDLE_COOLDOWN_MS = 2 * 60 * 60 * 1000; // 2 hours
⋮----
export async function maintainSqueezeStraddle(
    input: MaintainSqueezeStraddleInput,
): Promise<MaintainSqueezeStraddleResult>
⋮----
// Check squeeze invalidation: cancel if Hurst exits COILING or consolidation drops
// (check underlying COILING state, not candidate — candidate can be absent due to
// scoring/range filters while the squeeze itself is still valid)
⋮----
return { handled: true }; // cancel failed, retry next cycle
```

## File: src/modules/position-manager/index.ts
```typescript
/**
 * 持仓管理模块
 * 处理 Trailing Stop 和止损更新逻辑
 */
⋮----
import type { MoveStopMode, MultiTimeframeData, TradingState } from '../../types/index.js';
import type { StructureAnalysis } from '../../modules/structure-detector/types.js';
import type { IExecutor } from '../executor/index.js';
import type { GenericOpenOrder } from '../executor/types.js';
import { RouterExecutor } from '../executor/index.js';
import type { StateStore } from '../state-store/index.js';
import { logger } from '../../utils/index.js';
import { isStopLossTriggerOrder, resolveActiveStopOrderId } from '../../utils/stop-order-guard.js';
import { shouldApplyPostStopLossCooldown } from '../../utils/stop-loss-cooldown.js';
import { isRangeSignalFamily } from './candle-utils.js';
import { resolveStrategyTakeProfitDistribution } from '../../utils/take-profit-allocation.js';
import {
    computeH1StructureTrailingStop,
    computeHybridStructurePriorityStop,
    hasEarlyStructureConfirmation,
    computeStructureTrailingStop,
} from './stop-computation.js';
import { StopRecoveryGuard } from './stop-recovery-guard.js';
⋮----
/**
 * Trailing Stop 里程碑配置
 */
⋮----
// Runtime policy: stop-loss movement must be explicitly requested by AI MOVE_SL.
⋮----
function normalizeOrderSize(value: number): number
⋮----
export type ReconciledExitDecision = 'WAIT' | 'STOP_LOSS' | 'TAKE_PROFIT';
export type AiMoveStopRejectionReason =
    | 'NO_ACTIVE_TRADE'
    | 'INVALID_REQUEST'
    | 'NON_IMPROVING'
    | 'DUPLICATE_PRICE'
    | 'THROTTLED_PER_CANDLE'
    | 'TOO_CLOSE_TO_PRICE'
    | 'UPDATE_FAILED';
⋮----
export interface ApplyAiMoveStopResult {
    applied: boolean;
    reason?: AiMoveStopRejectionReason;
    finalStopLoss?: number;
}
⋮----
export function classifyExitDecisionFromFill(params: {
    fillOrderId?: string;
    fillPnl?: number;
    slOrderId?: string;
    tpOrderIds?: string[];
    fillRaw?: Record<string, unknown>;
}):
⋮----
export function formatExitClassificationSource(
    decision: ReconciledExitDecision,
    source: 'order_id' | 'fill_raw' | 'pnl_fallback' | 'none',
): string
⋮----
function parseFillTimestamp(value: unknown): number
⋮----
type ActiveTrade = NonNullable<TradingState['activeTrade']>;
type MissingOpenExitResolution = {
    decision: ReconciledExitDecision;
    reason: string;
    price: number;
    pnl?: number;
    orderId?: string;
};
⋮----
type EntryFillReconciliationContext = {
    orderId: string;
    traceId?: string;
    direction: 'LONG' | 'SHORT';
    strategy?: ActiveTrade['strategy'];
    strategyRoute?: ActiveTrade['strategyRoute'];
    signalFamily?: ActiveTrade['signalFamily'];
    entryLogic: string;
    entryAtr?: ActiveTrade['entryAtr'];
    entryZone?: ActiveTrade['entryZone'];
    breakoutContext?: ActiveTrade['breakoutContext'];
    slPrice: number;
    tpLevels: { tp1: number; tp2: number; tp3: number };
    tpDistribution: { tp1: number; tp2: number; tp3: number };
    setupValidityTime: number;
    existingSlOrderId?: string;
    peerOrderId?: string;
};
⋮----
function buildStraddleTakeProfitLevels(
    direction: 'LONG' | 'SHORT',
    entryPrice: number,
    rangeWidth: number,
):
⋮----
function resolveTpDistributionFromActiveTrade(
    trade: ActiveTrade,
):
⋮----
function allocateTpSizes(
    positionSize: number,
    distribution: { tp1: number; tp2: number; tp3: number },
):
⋮----
function resolveEntryFillReconciliationContext(
    state: TradingState,
    actualEntryPrice: number,
    actualDirection: 'LONG' | 'SHORT',
): EntryFillReconciliationContext | undefined
⋮----
/**
 * 持仓管理器
 */
export class PositionManager
⋮----
constructor(
⋮----
/**
     * 获取当前持仓
     */
getCurrentPosition(
        symbol: string,
        accountInfo: { balance: number; positions: any[] }
):
⋮----
/**
     * 检查冷却期（止损冷却期 30分钟，Runaway 冷却期 15分钟）
     */
checkCooldownPeriod(state: TradingState):
⋮----
// 优先使用止损冷却期（更长），其次是 runaway 冷却期
⋮----
/**
     * 处理 Trailing Stop 逻辑
     * 1) 同步 TP 成交进度
     * 2) (可选) 自动 trailing 调整
     */
async processTrailingStop(
        state: TradingState,
        currentPrice: number,
        marketData?: MultiTimeframeData,
): Promise<void>
⋮----
private computeCurrentRiskMultiple(
        trade: ActiveTrade,
        currentPrice: number,
):
⋮----
private async applyMilestoneTrailingStop(
        state: TradingState,
        currentR: number,
        initialRisk: number,
): Promise<void>
⋮----
private async applyStructureTrailingStop(
        state: TradingState,
        currentPrice: number,
        marketData: MultiTimeframeData | undefined,
        currentR: number,
        initialRisk: number,
): Promise<void>
⋮----
private collectKnownTpOrderIds(trade: NonNullable<TradingState['activeTrade']>): Set<string>
⋮----
private listActiveStopOrderIds(
        orders: GenericOpenOrder[],
        knownTpOrderIds: Set<string>,
): string[]
⋮----
private async syncMissingTakeProfitFills(
        trade: NonNullable<TradingState['activeTrade']>,
        missingLevels: Array<NonNullable<TradingState['activeTrade']>['tpLevels'][number]>,
): Promise<boolean>
⋮----
private buildActiveTakeProfitSizeMap(
        trade: NonNullable<TradingState['activeTrade']>,
): Map<1 | 2 | 3, number>
⋮----
private async recoverMissingTakeProfitOrders(
        state: TradingState,
        openOrders: GenericOpenOrder[],
): Promise<void>
⋮----
private async refreshRemainingSizeFromPosition(state: TradingState): Promise<void>
⋮----
private isImprovingStopLoss(
        direction: 'LONG' | 'SHORT',
        currentSl: number,
        nextSl: number,
        minMove: number,
): boolean
⋮----
private resolveAiMoveCandleAnchor(m15CandleTime?: number): number
⋮----
private clampPreTp1AiMoveStopToEntry(
        state: TradingState,
        requestedSlPrice: number,
): number
⋮----
/**
     * AI 移动止损执行入口（执行层硬风控）
     * - 仅允许收紧风险，不允许放宽
     * - 限制同一根 M15 K 线最多移动一次
     * - 拒绝同价/近似同价重复移动
     * - 保证新止损与现价至少保持最小 ATR 间距
     */
async applyAIMoveStopLoss(input: {
        state: TradingState;
        requestedSlPrice: number;
        currentPrice: number;
        atr?: number;
        marketData?: MultiTimeframeData;
        structureAnalysis?: StructureAnalysis;
        m15CandleTime?: number;
        mode?: MoveStopMode;
}): Promise<ApplyAiMoveStopResult>
⋮----
private normalizeAiMoveStopRequest(input: {
        state: TradingState;
        requestedSlPrice: number;
        currentPrice: number;
        marketData?: MultiTimeframeData;
        structureAnalysis?: StructureAnalysis;
        mode?: MoveStopMode;
}):
⋮----
private normalizeHybridPreTp1MoveStopRequest(input: {
        state: TradingState;
        requestedSlPrice: number;
        currentPrice: number;
        marketData?: MultiTimeframeData;
        structureAnalysis?: StructureAnalysis;
        mode?: MoveStopMode;
}):
⋮----
private normalizeTp1RunnerMoveStopRequest(input: {
        state: TradingState;
        requestedSlPrice: number;
        currentPrice: number;
        marketData?: MultiTimeframeData;
        mode?: MoveStopMode;
}):
⋮----
/**
     * 更新止损订单
     */
async updateStopLoss(
        state: TradingState,
        newSlPrice: number,
): Promise<boolean>
⋮----
// 下新止损单
⋮----
// 更新状态
⋮----
trade.slOrderId = slResult.orderId; // 更新止损单 ID
⋮----
private async logStopLossUpdateFailure(params: {
        trade: NonNullable<TradingState['activeTrade']>;
        requestedSlPrice: number;
        size: number;
        reason: string;
        details: string;
}): Promise<void>
⋮----
private hasTakeProfitFilled(state: TradingState, level: 1 | 2 | 3): boolean
⋮----
private async moveStopToBreakEvenAfterTp1(
        state: TradingState,
        currentPrice?: number,
        marketData?: MultiTimeframeData,
): Promise<void>
⋮----
private async syncTakeProfitProgress(state: TradingState): Promise<
⋮----
private async loadOpenOrderIdsForTakeProfitSync(symbol: string): Promise<Set<string>>
⋮----
private async loadTakeProfitFillsByOrderId(
        trade: ActiveTrade,
        trackedTpOrderIds: Set<string>,
): Promise<Map<string,
⋮----
private syncMissingTakeProfitLevels(
        trade: ActiveTrade,
        openOrderIds: Set<string>,
        fillsByOrderId: Map<string, { lastFillTime: number }>,
):
⋮----
private async syncRemainingSizeWithPosition(trade: ActiveTrade): Promise<boolean>
⋮----
private syncTrailingMilestonesWithCurrentStop(
        trade: NonNullable<TradingState['activeTrade']>,
        initialRisk: number,
): void
⋮----
/**
     * 验证止损单是否有效
     * 检测止损单丢失时自动重新下单
     */
async verifyStopLossOrder(state: TradingState): Promise<boolean>
⋮----
// 重新下止损单
⋮----
private collectTrackedExitOrderIds(trade: ActiveTrade): Set<string>
⋮----
private findLatestMatchedExitFill(
        trade: ActiveTrade,
        fills: Awaited<ReturnType<IExecutor['getUserFills']>>,
        trackedOrderIds: Set<string>,
):
⋮----
private async resolveMissingOpenExit(
        state: TradingState,
        symbol: string,
): Promise<MissingOpenExitResolution>
⋮----
private async persistReconciledStopLoss(
        state: TradingState,
        symbol: string,
        exitPrice: number,
        exitPnl: number | undefined,
): Promise<void>
⋮----
private async reconcileOpenStateWithoutPosition(
        state: TradingState,
        symbol: string,
): Promise<TradingState>
⋮----
/**
     * 状态自愈 - 同步 KV 状态与链上实际状态
     */
async reconcileState(
        state: TradingState,
        symbol: string,
): Promise<TradingState>
⋮----
// 1. 状态不一致检测: KV 显示 OPEN 但链上无持仓 (可能被止损/止盈)
⋮----
// 2. OPEN 状态且有持仓时，验证止损单是否有效
⋮----
// 3. IDLE 状态但链上有持仓 (可能是手动开仓或状态丢失)
⋮----
// 尝试获取当前挂单以推断止损
⋮----
// 查找止损单 (Trigger Order)
⋮----
// 查找止盈单 (Limit Order, Reduce Only)
⋮----
// 取最近的一个作为当前 TP (简化处理)
⋮----
// 如果没找到止损，使用默认风险设置 (例如 1% 风险)
⋮----
// 创建一个同步的持仓状态
⋮----
tpLevels: [], // 暂时留空，TODO: 可以从 openOrders 恢复
⋮----
private async reconcileEntryStateFill(
        state: TradingState,
        symbol: string,
        position: { symbol: string; size: number; entryPrice: number },
): Promise<TradingState | undefined>
```

## File: src/controller/scheduler.ts
```typescript
/**
 * Cron 调度控制器
 * 负责编排完整的交易流程
 *
 * 重构后的简化版本 - 核心调度逻辑
 */
⋮----
import type { MultiTimeframeData, TradingState } from "../types/index.js";
import type { StructureAnalysis } from "../modules/structure-detector/index.js";
import type { TradeSetup, StrategyType } from "../modules/structure-detector/types.js";
import { createStructureDetector } from "../modules/structure-detector/index.js";
import { runStrategy } from "../modules/structure-detector/strategies/index.js";
import { logger } from "../utils/index.js";
import { getMarketSessionState, getUsEquityCloseWindow } from "../utils/market-session.js";
import type { CloudLoggerLike } from "../utils/cloud-logger-types.js";
import type { DecisionLogStore } from "../modules/state-store/decision-log-store.js";
import type { MarketSnapshotStore } from "../modules/state-store/market-snapshot-store.js";
import type { TradeLogStore } from "../modules/state-store/trade-log-store.js";
import { createDataFetcher, type DataFetcher } from "../modules/data-fetcher/index.js";
import { createStateStore, type StateStore } from "../modules/state-store/index.js";
import { createAnalyzer, type Analyzer } from "../modules/analyzer/index.js";
import { createOrderProcessor, type OrderProcessor } from "../modules/order-processor/index.js";
import { createHyperliquidClient, createMockExecutor, HyperliquidClient, TigerAdapterExecutor, RouterExecutor, type IExecutor, type ExecutorProvider } from "../modules/executor/index.js";
import {
  createConfigManager,
  runWithDefaultConfigManager,
  type ConfigManager,
  type ConfigOverrides,
} from "../config/config-manager.js";
import type { StackVariantConfig } from "../config/stack-variant.js";
import { evaluateStandardIctEmaDirectionFilter } from "./stack-variant-filters.js";
import type { FetchStub, KvStore } from "../types/runtime.js";
⋮----
// 导入拆分的模块
import { buildStructureInfo } from "./utils.js";
import { PositionManager } from "../modules/position-manager/index.js";
import { StateHandlers } from "./state-handlers.js";
import { SniperModeHandler } from "./sniper-mode.js";
import { PendingLimitHandler } from "./pending-limit-handler.js";
import { RiskManager } from "../modules/risk-manager/index.js";
import { SignalEvaluator } from "../modules/signal-evaluator/index.js";
import { PaperTradingClient } from "../modules/paper-trading/index.js";
import { LiquidationMonitor, startWatcherWebSocket } from "../modules/liquidation-monitor/index.js";
import { HighAlertMonitor } from "./high-alert-monitor.js";
import { ManagedAIPolling } from "./managed-ai-polling.js";
import { AutoReversalHandler } from "./auto-reversal-handler.js";
import {
  analyzeMarketStructure,
  enforcePendingTimeoutOnAdaptiveSkip,
  fetchAndLogMarketData,
  handleSkipAI,
  handleSniperEntry,
  loadAndReconcileState,
  recordManagedAISnapshot,
  resolveOpenVisionRiskTriggerReason,
  runAIAnalysis,
  startOrderFillWatcher,
} from "./scheduler-runtime-helpers.js";
import { syncTradeLogsFromFills } from "./fill-sync.js";
import { checkEmergencyClose } from "./emergency-close.js";
import { handleUsEquityForceClose } from "./us-equity-force-close.js";
import { handleTurtleSoupInstantEntry } from "./turtle-soup-instant-entry.js";
import { maintainSqueezeStraddle, maybePlaceSqueezeStraddle } from "./straddle-handler.js";
import { evaluateManualInterventionWindow } from "./manual-intervention.js";
import {
  deriveAnchorDirection,
  enforceBtcLeadEthSymbols,
  isAnchorSymbol,
  isEthExecutionSymbol,
  shouldRejectEntryByAnchor,
  shouldRejectEntryByCycleGuard,
  type EntryGateReason,
} from "./anchor-entry-policy.js";
import { isBtcLeadTurtleSetup, buildBtcLedEthFollowSetup } from "./btc-lead-eth-follow.js";
import { buildBtcSmtReference, deriveEthSmtCandidate, buildEthSmtReversalSetup, type BtcSmtReference } from "./eth-smt-reversal.js";
import { applySetupRiskMultiplier } from "./setup-risk-policy.js";
import { toPositionDirection } from "../modules/structure-detector/strategies/utils/direction.js";
⋮----
/** 交易模式 */
export type TradingMode = 'LIVE' | 'PAPER';
⋮----
interface SchedulerConfig {
  geminiApiKey: string;
  hyperliquidPrivateKey: string;
  deepseekApiKey?: string;
  qwenApiKey?: string;  // Qwen API Key
  zaiApiKey?: string;   // Z AI API Key
  analysisProvider?: 'deepseek' | 'qwen' | 'zai';  // 分析客户端
  visionProvider?: 'zai' | 'gemini';  // 视觉推送客户端
  enableVisionAnalysis?: boolean;
  symbols: string[];
  maxRiskPercent?: number;
  testnet: boolean;
  tradingMode: TradingMode;
  kv: KvStore;
  cloudLogger?: CloudLoggerLike;
  decisionLogStore?: DecisionLogStore;
  tradeLogStore?: TradeLogStore;
  marketSnapshotStore?: MarketSnapshotStore;
  subAccountAddress?: string; // 子账户地址
  liquidationWatcher?: FetchStub; // 清算监控 (可选)
  orderFillWatcher?: FetchStub; // 订单成交监控 (可选)
  userAddress?: string; // 用户钱包地址 (用于 WebSocket 订单审核)
  executorProvider?: ExecutorProvider;
  tigerAdapterUrl?: string;
  tigerAdapterApiKey?: string;
  stackId?: string;
  configOverrides?: ConfigOverrides;
  stackVariantConfig?: StackVariantConfig;
}
⋮----
qwenApiKey?: string;  // Qwen API Key
zaiApiKey?: string;   // Z AI API Key
analysisProvider?: 'deepseek' | 'qwen' | 'zai';  // 分析客户端
visionProvider?: 'zai' | 'gemini';  // 视觉推送客户端
⋮----
subAccountAddress?: string; // 子账户地址
liquidationWatcher?: FetchStub; // 清算监控 (可选)
orderFillWatcher?: FetchStub; // 订单成交监控 (可选)
userAddress?: string; // 用户钱包地址 (用于 WebSocket 订单审核)
⋮----
interface ProcessSymbolOptions {
  suppressHighAlert?: boolean;
  invokedByHighAlert?: boolean;
  scanId?: number;
}
⋮----
/** Shared context flowing through the processSymbol pipeline stages. */
interface PipelineContext {
  symbol: string;
  options: ProcessSymbolOptions;
  runSniperExecutionOnlyTick: boolean;
  reconciledState: TradingState;
  structureAnalysis: StructureAnalysis;
  marketData: MultiTimeframeData;
  accountInfo: { balance: number; positions: unknown[] };
}
⋮----
interface BtcLeadContext {
  scanId: number;
  anchorDirection?: 'LONG' | 'SHORT';
  turtleSetup?: TradeSetup;
  aGradeDirection?: TradeSetup['direction'];
  smtReference?: BtcSmtReference;
}
⋮----
export function resolveSchedulerRiskCaps(input: {
  envMaxRiskPercent: number | undefined;
  orderProcessorDefaultMaxRiskPercent: number;
  riskBudgetDefaultMaxRiskPercent: number;
}):
⋮----
export function resolveOrderFillWatcherAddress(input: {
  userAddress?: string;
  subAccountAddress?: string;
addressSource?:
⋮----
/**
 * 调度器 - 系统核心控制器
 */
export class Scheduler
⋮----
// === Risk budget (hardcoded defaults) ===
// 单笔风险上限（% of withdrawable balance）
⋮----
// 拆分的处理器
⋮----
private sniperHandler: SniperModeHandler;     // B 级信号 - 等待 M5 确认
⋮----
/** Tracks consecutive scheduler cycles where squeeze COILING is detected, per symbol */
⋮----
constructor(config: SchedulerConfig)
⋮----
// 初始化订单成交监控 (实时 WebSocket)
⋮----
// 初始化拆分的处理器
⋮----
// 激活进场风控预测（仅一个信号时满足，信号撤销时自动降档）
⋮----
// 初始化清算监控
⋮----
this.orderFillWatcherStub,  // 实时订单监控
⋮----
// Best-effort bootstrap: start the order fill watcher immediately so fills
// before the first cron tick are still captured.
⋮----
/**
   * 主调度循环 - 由 Cron 触发
   */
async run(cronExpression?: string): Promise<void>
⋮----
private async runInConfigScope(cronExpression?: string): Promise<void>
⋮----
// 确保清算监控服务的 WebSocket 连接已启动 (每次调度检查一次)
⋮----
// 确保订单成交监控服务的 WebSocket 连接已启动
⋮----
// SNIPER 状态在非搜索节拍下仅执行策略逻辑（runSniperMode）
⋮----
// 兼容历史 5 分钟触发：仅处理 SNIPER / PENDING_LIMIT
⋮----
// 特殊处理 Unknown symbol 错误
⋮----
// 可以选择在这里将非合法 symbol 从 this.symbols 移除，避免下次轮询再报错
// this.symbols = this.symbols.filter(s => s !== symbol);
⋮----
private upsertBtcLeadContext(scanId: number, patch: Partial<Omit<BtcLeadContext, 'scanId'>>): void
⋮----
private getBtcLeadContextForScan(scanId?: number): BtcLeadContext | undefined
⋮----
/**
   * 处理单个标的
   */
private async processSymbol(
    symbol: string,
    runSniperExecutionOnlyTick: boolean = false,
    options: ProcessSymbolOptions = {},
): Promise<void>
⋮----
// Stage 1: Load state + manual intervention check
⋮----
if (!state) return; // Manual intervention lock active
⋮----
// Stage 2: Session checks + force close
⋮----
// Stage 3: SNIPER/PENDING_LIMIT fast paths
⋮----
// Stage 4: Account info + state reconciliation
⋮----
// Stage 5: Fetch market data + analyze structure
⋮----
// Update squeeze cycle tracker: track COILING state from consolidation, not candidate output
// (candidate requires cycle count >= minCycles, so we must track the underlying COILING state)
⋮----
// Stage 6: Emergency close check
⋮----
// Build shared pipeline context for remaining stages
⋮----
// Stage 7: Stack variant filter + anchor/follow context
⋮----
// Stage 8: Entry gate checks (anchor + cycle guard)
⋮----
// Stage 9: Signal evaluation + turtle soup instant entry
⋮----
// Stage 10: High alert + sniper upgrade + sniper entry
⋮----
// Stage 11: AI analysis path (skip check + adaptive polling + AI decision)
⋮----
// ─── processSymbol sub-stages ──────────────────────────────────────
⋮----
/**
   * Load state and clear expired manual intervention lock.
   * Returns null if manual intervention is active (caller should return early).
   */
private async loadStateAndClearExpiredIntervention(symbol: string): Promise<TradingState | null>
⋮----
/**
   * Session checks: force close + market-closed gating.
   * Returns:
   *  - 'HALT' → caller should return immediately
   *  - 'OPEN_ONLY' → market closed but OPEN/PENDING positions exist; skip analysis after reconciliation
   *  - false → market is open, continue normally
   */
private async handleSessionChecks(
    state: TradingState,
    symbol: string,
    runSniperExecutionOnlyTick: boolean,
): Promise<'HALT' | 'OPEN_ONLY' | false>
⋮----
// IDLE or SNIPER on search tick
⋮----
/**
   * SNIPER execution-only tick and PENDING_LIMIT fast paths.
   * Returns true if the fast path fully handled processing (caller should return).
   */
private async handleStateFastPaths(
    state: TradingState,
    symbol: string,
    runSniperExecutionOnlyTick: boolean,
): Promise<boolean>
⋮----
// 检测失效并继续扫描更好的信号 (Signal Upgrade)
⋮----
// 不返回，继续执行以检测可能的信号升级
⋮----
/**
   * Update BTC anchor direction and capture lead setups for ETH follow.
   */
private updateBtcAnchorContext(ctx: Pick<PipelineContext, 'symbol' | 'options' | 'structureAnalysis'>): void
⋮----
// Capture BTC SMT reference for ETH divergence detection
⋮----
/**
   * Apply ETH follow setups: A-grade alignment, turtle mirror, SMT reversal.
   */
private applyEthFollowSetups(
    ctx: Pick<PipelineContext, 'symbol' | 'options' | 'reconciledState' | 'structureAnalysis' | 'marketData'>,
): void
⋮----
// ETH A-grade 与 BTC A-grade 对齐标记
⋮----
// BTC Turtle 镜像入场：当 ETH 没有自己的 setup 时，使用 BTC turtle 信号创建镜像入场
⋮----
// ETH SMT reversal: BTC 未确认同向扫损时的背离反转
⋮----
/**
   * Check entry gates (BTC anchor + scan cycle guard).
   * Returns true if entry was rejected (caller should return).
   */
private async checkEntryGates(
    ctx: Pick<PipelineContext, 'symbol' | 'options' | 'reconciledState' | 'structureAnalysis' | 'marketData'>,
): Promise<boolean>
⋮----
const logGateRejection = (reasoning: string) => this.stateStore.logDecision(
⋮----
/**
   * Handle turtle soup instant entry for IDLE state.
   * Returns true if turtle soup was executed (caller should return).
   */
private async handleTurtleSoupInstant(
    ctx: PipelineContext,
    signal: {
      setup: StructureAnalysis['setup'];
      signalGrade: string | undefined;
      isTurtleSoup: boolean;
      isSniperEligibleGrade: boolean;
      allowTurtleSoupCGradeExecution: boolean;
    },
): Promise<boolean>
⋮----
/**
   * Handle high alert scheduling, sniper mode upgrade, and new sniper entry.
   * Returns true if sniper path fully handled processing (caller should return).
   */
private async handleSniperEntryPath(
    ctx: PipelineContext,
    signal: {
      setup: StructureAnalysis['setup'];
      signalGrade: string | undefined;
      m15Displacement: StructureAnalysis['m15Structure']['displacement'];
      hasValidEntryZone: boolean;
      isSniperEligibleGrade: boolean;
    },
): Promise<boolean>
⋮----
// SNIPER 模式下的信号升级/刷新逻辑
⋮----
/**
   * Handle AI analysis path: low-quality signal skip, adaptive polling, and AI decision.
   */
private async handleAIAnalysisPath(
    ctx: PipelineContext,
    signal: {
      signalGrade: string | undefined;
      hasValidEntryZone: boolean;
      isTurtleSoup: boolean;
      allowTurtleSoupCGradeExecution: boolean;
    },
): Promise<void>
⋮----
// 非信号或无进场区域 - IDLE 状态下处理
⋮----
// AI 决策（图表 + 双脑/单脑）
⋮----
/**
   * Evaluate adaptive polling for OPEN/PENDING positions.
   * Returns 'SKIP' if polling decided to skip AI, or the vision trigger reason string (possibly undefined).
   */
private async handleAdaptivePollingSkip(
    symbol: string,
    reconciledState: TradingState,
    structureAnalysis: StructureAnalysis,
    marketData: MultiTimeframeData,
): Promise<'SKIP' | string | undefined>
⋮----
// ─── end processSymbol sub-stages ──────────────────────────────────
⋮----
private describeEntryGateReason(reason?: EntryGateReason): string
⋮----
/**
   * 对 setup 应用 stack 级别的可配置过滤器（用于 A/B）
   */
private applyStackVariantEntryFilter(input: {
    symbol: string;
    structureAnalysis: StructureAnalysis;
    marketData: MultiTimeframeData;
}): void
⋮----
// ── strategyOverride: 独立运行目标策略，覆盖 arbiter 结果 ──
⋮----
return; // arbiter 已选中间接目标策略，直接执行
⋮----
// 独立运行目标策略获取 setup
⋮----
// ── EMA direction filter (仅对 STANDARD_ICT) ──
⋮----
/**
   * 为 strategyOverride 独立运行一个策略 handler。
   * 利用 structureAnalysis 中已有的检测结果构建 StrategyExecutionContext，
   * 避免重复抓取数据或重复运行 analyzeStructure。
   */
private runStrategyOverride(
    strategyId: StrategyType,
    input: {
      symbol: string;
      structureAnalysis: StructureAnalysis;
      marketData: MultiTimeframeData;
    },
): TradeSetup | undefined
⋮----
/**
 * 创建调度器
 */
export function createScheduler(config: SchedulerConfig): Scheduler
```
