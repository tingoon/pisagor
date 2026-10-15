import {
  type MessageKey,
  type ProviderMessages,
  resolveMessage,
} from "@pisagor/utils";
import { createContext } from "../../utils";

export type { MessageKey, ProviderMessages } from "@pisagor/utils";

export const { ProviderMessagesContext, useProviderMessages } = createContext(
  "ProviderMessages",
)<ProviderMessages>({
  defaultValue: {},
  strict: false,
});

/**
 * Resolve a library message key. User `messages` from the nearest `Provider`
 * are merged over the built-in English `defaultMessages`.
 */
export function useProviderMessage(key: MessageKey): string {
  return resolveMessage(useProviderMessages(), key);
}
