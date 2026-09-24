<script lang="ts">
import { LocaleProvider } from "@ark-ui/svelte/locale";
import type { Snippet } from "svelte";
import { Toaster } from "../toast";
import { type ProviderMessages, setProviderMessagesContext } from "./provider.context";

type Props = {
  children?: Snippet;
  /**
   * Document / layout direction. When omitted, inferred from `locale`
   * (`ar`, `he`, `fa`, `ur` → `rtl`).
   *
   * Note: phosphor-svelte has no IconContext equivalent.
   */
  dir?: "ltr" | "rtl";
  locale?: string;
  /**
   * Optional message map for library default strings. Consumers own localization;
   * components may look up keys via `useProviderMessages`.
   */
  messages?: ProviderMessages;
};

const RTL_LANGS = new Set(["ar", "fa", "he", "ur"]);

function resolveDir(localeValue: string, dir?: "ltr" | "rtl"): "ltr" | "rtl" {
  if (dir) return dir;
  const language = localeValue.split("-")[0]?.toLowerCase() ?? "en";
  return RTL_LANGS.has(language) ? "rtl" : "ltr";
}

let { dir: dirProp, locale = "en-US", children, messages = {} }: Props = $props();

const dir = $derived(resolveDir(locale, dirProp));

setProviderMessagesContext(
  new Proxy({} as ProviderMessages, {
    get(_target, prop) {
      if (typeof prop !== "string") return undefined;
      return messages[prop];
    },
    getOwnPropertyDescriptor(_target, prop) {
      if (typeof prop === "string" && Object.hasOwn(messages, prop)) {
        return {
          configurable: true,
          enumerable: true,
          value: messages[prop],
        };
      }
      return undefined;
    },
    has(_target, prop) {
      return typeof prop === "string" && Object.hasOwn(messages, prop);
    },
    ownKeys() {
      return Reflect.ownKeys(messages);
    },
  }),
);
</script>

<LocaleProvider {locale}>
  <div data-dir={dir} data-part="root" data-scope="provider" style="display: contents">
    <Toaster />
    {@render children?.()}
  </div>
</LocaleProvider>
