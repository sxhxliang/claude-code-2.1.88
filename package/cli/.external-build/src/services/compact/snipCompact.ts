import type { Message } from '../../types/message.js'

export type SnipCompactResult = {
  messages: Message[]
  tokensFreed: number
  boundaryMessage?: Message
}

export function isSnipRuntimeEnabled(): boolean {
  return false
}

export function shouldNudgeForSnips(_messages: Message[]): boolean {
  return false
}

export function snipCompactIfNeeded(messages: Message[], _options?: { force?: boolean }): SnipCompactResult {
  return { messages, tokensFreed: 0 }
}
