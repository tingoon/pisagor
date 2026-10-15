import {
  type MessageKey,
  type ProviderMessages,
  resolveMessage,
} from "@pisagor/utils";
import { use } from "react";
import { createContext } from "../../utils";

export type { MessageKey, ProviderMessages } from "@pisagor/utils";

export const { ProviderMessagesContext, useProviderMessages } = createContext(
  "ProviderMessages",
)<ProviderMessages>({
  defaultValue: {},
  strict: false,
});

/**
 * Render-time message lookup that is safe inside conditional JSX (uses React `use`).
 * Returns the nearest `Provider` override, else the built-in English default.
 */
export function getMessage(key: MessageKey) {
  return resolveMessage(use(ProviderMessagesContext), key);
}

/** Hook form of {@link getMessage}. */
export function useProviderMessage(key: MessageKey) {
  return resolveMessage(useProviderMessages(), key);
}
