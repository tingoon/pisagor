import {
  type MessageKey,
  type ProviderMessages,
  resolveMessage,
} from "@pisagor/utils";
import { createContext } from "../../utils/create-context";

export type { MessageKey, ProviderMessages } from "@pisagor/utils";

const ctx = createContext("ProviderMessages")<ProviderMessages>({
  defaultValue: {},
  strict: false,
});

export const setProviderMessagesContext = ctx.setContext;
export const useProviderMessages = ctx.getContext;

/**
 * Resolve a library message key. User `messages` from the nearest `Provider`
 * are merged over the built-in English `defaultMessages`.
 */
export function useProviderMessage(key: MessageKey): string {
  return resolveMessage(useProviderMessages(), key);
}

/**
 * Return a resolver bound to the nearest `Provider` messages. Call it during
 * component init and use the returned function in markup.
 */
export function useMessageResolver(): (key: MessageKey) => string {
  const messages = useProviderMessages();
  return (key) => resolveMessage(messages, key);
}
