import { LocaleProvider } from "@ark-ui/vue/locale";
import {
  type MessageKey,
  type ProviderMessages,
  resolveMessage,
} from "@pisagor/utils";
import {
  computed,
  defineComponent,
  h,
  type InjectionKey,
  inject,
  provide,
} from "vue";

// #region Types
export type { MessageKey, ProviderMessages } from "@pisagor/utils";

export interface ProviderProps {
  /**
   * Document / layout direction. When omitted, inferred from `locale`
   * (`ar`, `he`, `fa`, `ur` → `rtl`).
   */
  dir?: "ltr" | "rtl";
  locale?: string;
  /**
   * Partial message overrides merged over the built-in English
   * `defaultMessages` from `@pisagor/utils`.
   */
  messages?: ProviderMessages;
}
// #endregion

// #region Context
const ProviderMessagesKey: InjectionKey<ProviderMessages> =
  Symbol("ProviderMessages");

/**
 * Resolve a library message key. User `messages` from the nearest `Provider`
 * are merged over the built-in English `defaultMessages`.
 */
export function useProviderMessage(key: MessageKey): string {
  return resolveMessage(useProviderMessages(), key);
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
    dir: {
      default: undefined,
      type: String as () => "ltr" | "rtl" | undefined,
    },
    locale: { default: "en-US", type: String },
    messages: { default: () => ({}), type: Object as () => ProviderMessages },
  },
  setup(props, { attrs, slots }) {
    const dir = computed(() => resolveDir(props.locale, props.dir));

    provide(
      ProviderMessagesKey,
      new Proxy({} as ProviderMessages, {
        get: (_target, key) =>
          typeof key === "string"
            ? (props.messages as Record<string, string>)[key]
            : undefined,
      }),
    );

    return () =>
      h(
        LocaleProvider as ArkPart,
        { ...attrs, locale: props.locale },
        {
          default: () => [
            h(
              "div",
              { dir: dir.value, style: "display: contents" },
              slots.default?.(),
            ),
          ],
        },
      );
  },
});
// #endregion
