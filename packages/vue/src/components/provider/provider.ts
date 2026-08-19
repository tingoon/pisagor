import { LocaleProvider } from "@ark-ui/vue/locale";
import { computed, defineComponent, h, type InjectionKey, inject, provide } from "vue";

// #region Types
export type ProviderMessages = Record<string, string>;

export interface ProviderProps {
  /**
   * Document / layout direction. When omitted, inferred from `locale`
   * (`ar`, `he`, `fa`, `ur` → `rtl`).
   */
  dir?: "ltr" | "rtl";
  locale?: string;
  /**
   * Optional message map for library default strings. Consumers own localization;
   * components may look up keys via `useProviderMessages`.
   */
  messages?: ProviderMessages;
}
// #endregion

// #region Context
const ProviderMessagesKey: InjectionKey<ProviderMessages> = Symbol("ProviderMessages");

/**
 * Resolve a library message key from the nearest `Provider` message map.
 * Falls back to `fallback` when the key is missing.
 */
export function useProviderMessage(key: string, fallback: string) {
  const messages = useProviderMessages() ?? {};
  return messages[key] ?? fallback;
}

export function useProviderMessages() {
  return inject(ProviderMessagesKey, {});
}

const RTL_LANGS = new Set(["ar", "fa", "he", "ur"]);

function resolveDir(locale: string, dir?: "ltr" | "rtl"): "ltr" | "rtl" {
  if (dir) {
    return dir;
  }
  const language = locale.split("-")[0]?.toLowerCase() ?? "en";
  return RTL_LANGS.has(language) ? "rtl" : "ltr";
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Component
export const Provider = defineComponent({
  inheritAttrs: false,
  name: "PisagorProvider",
  props: {
    dir: { default: undefined, type: String as () => "ltr" | "rtl" | undefined },
    locale: { default: "en-US", type: String },
    messages: { default: () => ({}), type: Object as () => ProviderMessages },
  },
  setup(props, { attrs, slots }) {
    const dir = computed(() => resolveDir(props.locale, props.dir));

    provide(ProviderMessagesKey, props.messages);

    return () =>
      h(
        LocaleProvider as ArkPart,
        { ...attrs, locale: props.locale },
        {
          default: () => [
            h("div", { dir: dir.value, style: "display: contents" }, slots.default?.()),
          ],
        },
      );
  },
});
// #endregion
