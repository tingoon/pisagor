import { LocaleProvider } from "@ark-ui/react";
import { IconContext } from "@phosphor-icons/react";
import { HotkeysProvider } from "@tanstack/react-hotkeys";
import type { ReactNode } from "react";
import { createContext } from "../../utils";
import { Toaster } from "../toast";

// #region Types
export type ProviderMessages = Record<string, string>;

export interface ProviderProps {
  children: ReactNode;
  locale?: string;
  /**
   * Document / layout direction. When omitted, inferred from `locale`
   * (`ar`, `he`, `fa`, `ur` → `rtl`).
   */
  dir?: "ltr" | "rtl";
  /**
   * Optional message map for library default strings. Consumers own localization;
   * components may look up keys via `useProviderMessages`.
   */
  messages?: ProviderMessages;
}
// #endregion

// #region Context
const [ProviderMessagesContext, useProviderMessagesContext] = createContext<ProviderMessages>({
  defaultValue: {},
  name: "ProviderMessages",
  strict: false,
});

/**
 * Resolve a library message key from the nearest `Provider` message map.
 * Falls back to `fallback` when the key is missing.
 */
export function useProviderMessage(key: string, fallback: string) {
  const messages = useProviderMessagesContext() ?? {};
  return messages[key] ?? fallback;
}

export { useProviderMessagesContext as useProviderMessages };

const RTL_LANGS = new Set(["ar", "fa", "he", "ur"]);

function resolveDir(locale: string, dir?: "ltr" | "rtl"): "ltr" | "rtl" {
  if (dir) {
    return dir;
  }
  const language = locale.split("-")[0]?.toLowerCase() ?? "en";
  return RTL_LANGS.has(language) ? "rtl" : "ltr";
}
// #endregion

// #region Component
export function Provider({
  children,
  locale = "en-US",
  dir: dirProp,
  messages = {},
}: ProviderProps) {
  const dir = resolveDir(locale, dirProp);

  return (
    <LocaleProvider locale={locale}>
      <ProviderMessagesContext value={messages}>
        <Toaster />
        <IconContext
          value={{
            color: "currentColor",
            mirrored: dir === "rtl",
            size: "1em",
            weight: "regular",
          }}
        >
          <HotkeysProvider>{children}</HotkeysProvider>
        </IconContext>
      </ProviderMessagesContext>
    </LocaleProvider>
  );
}

Provider.displayName = "Provider";
// #endregion
