import { LocaleProvider } from "@ark-ui/solid/locale";
import type { JSX, ParentProps } from "solid-js";
import { createMemo, splitProps } from "solid-js";
import { Toaster } from "../toast";
import { type ProviderMessages, ProviderMessagesContext } from "./provider.context";

export type { ProviderMessages } from "./provider.context";

export interface ProviderProps extends ParentProps {
  dir?: "ltr" | "rtl";
  locale?: string;
  messages?: ProviderMessages;
}

const RTL_LANGS = new Set(["ar", "fa", "he", "ur"]);

function resolveDir(locale: string, dir?: "ltr" | "rtl"): "ltr" | "rtl" {
  if (dir) {
    return dir;
  }
  const language = locale.split("-")[0]?.toLowerCase() ?? "en";
  return RTL_LANGS.has(language) ? "rtl" : "ltr";
}

export function Provider(props: ProviderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["dir", "locale", "children", "messages"]);
  const locale = () => local.locale ?? "en-US";
  const messages = () => local.messages ?? {};
  const dir = createMemo(() => resolveDir(locale(), local.dir));

  return (
    <LocaleProvider locale={locale()} {...rest}>
      <ProviderMessagesContext value={messages()}>
        <Toaster />
        <div dir={dir()} style={{ display: "contents" }}>
          {local.children}
        </div>
      </ProviderMessagesContext>
    </LocaleProvider>
  );
}
