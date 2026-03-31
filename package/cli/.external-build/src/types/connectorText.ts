export type ConnectorTextBlock = {
  type: 'connector_text'
  text?: string
  content?: string
  connector_name?: string
}

export type ConnectorTextDelta = {
  type?: 'connector_text_delta'
  text?: string
  content?: string
}

export function isConnectorTextBlock(value: unknown): value is ConnectorTextBlock {
  return !!value && typeof value === 'object' && (value as { type?: unknown }).type === 'connector_text'
}
