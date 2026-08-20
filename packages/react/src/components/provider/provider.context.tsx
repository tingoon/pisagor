import { createContext } from "../../utils";

export type ProviderMessages = Record<string, string>;

const [ProviderMessagesContext, useProviderMessagesContext] = createContext<ProviderMessages>({
  defaultValue: {},
  name: "ProviderMessages",
  strict: false,
});

/**
 * Resolve a library message key from the nearest `Provider` message map.
 * Falls back to `fallback` when the key is missing.
 */
function useProviderMessage(key: string, fallback: string) {
  const messages = useProviderMessagesContext() ?? {};
  return messages[key] ?? fallback;
}

export {
  ProviderMessagesContext,
  useProviderMessage,
  useProviderMessagesContext as useProviderMessages,
};
