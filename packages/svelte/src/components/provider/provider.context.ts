import { createContext } from "../../utils/create-context";

export type ProviderMessages = Record<string, string>;

const ctx = createContext<ProviderMessages>({
  defaultValue: {},
  name: "ProviderMessages",
  strict: false,
});

export const setProviderMessagesContext = ctx.setContext;
export const useProviderMessages = ctx.getContext;

/**
 * Resolve a library message key from the nearest `Provider` message map.
 * Falls back to `fallback` when the key is missing.
 */
export function useProviderMessage(key: string, fallback: string) {
  const messages = useProviderMessages() ?? {};
  return messages[key] ?? fallback;
}
