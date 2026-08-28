import { createContext } from "../../internal/utils";

export type ProviderMessages = Record<string, string>;

export const { ProviderMessagesContext, useProviderMessages } = createContext<ProviderMessages>()({
  defaultValue: {},
  name: "ProviderMessages",
  strict: false,
});

/**
 * Resolve a library message key from the nearest `Provider` message map.
 * Falls back to `fallback` when the key is missing.
 */
export function useProviderMessage(key: string, fallback: string) {
  const messages = useProviderMessages() ?? {};
  return messages[key] ?? fallback;
}
