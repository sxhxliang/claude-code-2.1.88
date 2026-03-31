export type CacheEditsBlock = { edits: unknown[] }
export type PinnedCacheEdits = { userMessageIndex: number; block: CacheEditsBlock }
export type CachedMCState = {
  pinnedEdits: PinnedCacheEdits[]
  registeredTools: Set<string>
  toolOrder: string[]
  deletedRefs: Set<string>
}

export function isCachedMicrocompactEnabled(): boolean { return false }
export function isModelSupportedForCacheEditing(_model: string): boolean { return false }
export function getCachedMCConfig() {
  return { supportedModels: [], triggerThreshold: 0, keepRecent: 0 }
}
export function createCachedMCState(): CachedMCState {
  return { pinnedEdits: [], registeredTools: new Set(), toolOrder: [], deletedRefs: new Set() }
}
export function markToolsSentToAPI(_state: CachedMCState): void {}
export function resetCachedMCState(_state: CachedMCState): void {}
export function registerToolResult(_state: CachedMCState, _toolId: string): void {}
export function registerToolMessage(_state: CachedMCState, _groupIds: string[]): void {}
export function getToolResultsToDelete(_state: CachedMCState): string[] { return [] }
export function createCacheEditsBlock(_state: CachedMCState, _toolsToDelete: string[]): CacheEditsBlock | null { return null }
