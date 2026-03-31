export function isContextCollapseEnabled(): boolean { return false }
export function resetContextCollapse(): void {}
export function getStats() {
  return {
    collapsedSpans: 0,
    collapsedMessages: 0,
    stagedSpans: 0,
    health: {
      totalSpawns: 0,
      totalErrors: 0,
      totalEmptySpawns: 0,
      emptySpawnWarningEmitted: false,
      lastError: undefined,
    },
  }
}
