import { LocaleProvider } from "@ark-ui/react";
import { IconContext } from "@phosphor-icons/react";
import { HotkeysProvider } from "@tanstack/react-hotkeys";
import type { ReactNode } from "react";
import { Toaster } from "../toast";
import { type ProviderMessages, ProviderMessagesContext } from "./provider.context";

// #region Types
export type { ProviderMessages } from "./provider.context";

export interface ProviderProps {
  /**
   * Document / layout direction. When omitted, inferred from `locale`
   * (`ar`, `he`, `fa`, `ur` → `rtl`).
   */
  dir?: "ltr" | "rtl";
  locale?: string;
  children: ReactNode;
  /**
   * Optional message map for library default strings. Consumers own localization;
   * components may look up keys via `useProviderMessages`.
   */
  messages?: ProviderMessages;
}
// #endregion

const RTL_LANGS = new Set(["ar", "fa", "he", "ur"]);

function resolveDir(locale: string, dir?: "ltr" | "rtl"): "ltr" | "rtl" {
  if (dir) {
    return dir;
  }
  const language = locale.split("-")[0]?.toLowerCase() ?? "en";
  return RTL_LANGS.has(language) ? "rtl" : "ltr";
}

// #region Component
export function Provider({
  dir: dirProp,
  locale = "en-US",
  children,
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
// #endregion
