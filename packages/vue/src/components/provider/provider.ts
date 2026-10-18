import {
  LocaleProvider as ArkLocaleProvider,
  useLocaleContext,
} from "@ark-ui/vue";
import { defaultMotion, resolveLocale } from "@pisagor/utils";
import type { LocaleConfig, Messages, MotionConfig } from "@pisagor/utils";
import { isNullish, mergeDeep, omitBy } from "remeda";
import { computed, defineComponent, h, type PropType, provide } from "vue";
import { Toaster } from "../toast";
import {
  LocaleKey,
  MotionKey,
  ProviderKey,
  useMotion,
  useProvider,
  useResolvedLocale,
} from "./context";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface ProviderProps extends LocaleConfig {
  motion?: Partial<MotionConfig>;
}

/** `locale` and partial `messages` merged over the parent `Provider`. */
export type LocaleProviderProps = LocaleConfig;
export type MotionProviderProps = Partial<MotionConfig>;
// #endregion

const localeProps = {
  locale: { default: undefined, type: String },
  messages: { default: undefined, type: Object as PropType<Messages> },
};

// #region Parts
/** Sets `dir` from the nearest Ark locale. */
const LocaleDir = defineComponent({
  name: "PisagorLocaleDir",
  setup(_, { slots }) {
    const locale = useLocaleContext();

    return () =>
      h(
        "div",
        {
          "data-part": "locale",
          "data-scope": "provider",
          dir: locale.value.dir,
          style: "display: contents",
        },
        slots.default?.(),
      );
  },
});

/**
 * Override the locale and/or UI messages for a subtree. Feeds Ark's
 * `LocaleProvider`, which derives `dir`.
 */
export const LocaleProvider = defineComponent({
  name: "PisagorLocaleProvider",
  props: localeProps,
  setup(props, { slots }) {
    const parentLocale = useResolvedLocale();
    const config = computed(() =>
      resolveLocale(
        { locale: props.locale, messages: props.messages },
        parentLocale(),
      ),
    );
    provide(LocaleKey, config);

    return () =>
      h(
        ArkLocaleProvider as ArkPart,
        { locale: config.value.locale },
        {
          default: () => [
            h(LocaleDir, null, { default: () => slots.default?.() }),
          ],
        },
      );
  },
});

export const MotionProvider = defineComponent({
  name: "PisagorMotionProvider",
  props: {
    disabled: { default: undefined, type: Boolean },
  },
  setup(props, { slots }) {
    const parentMotion = useMotion();
    const config = computed(
      () =>
        mergeDeep(
          mergeDeep(defaultMotion, parentMotion),
          omitBy({ disabled: props.disabled }, isNullish),
        ) as MotionConfig,
    );
    provide(MotionKey, config);

    return () =>
      h(
        "div",
        {
          "data-motion": config.value.disabled ? "disabled" : "enabled",
          "data-part": "motion",
          "data-scope": "provider",
          style: "display: contents",
        },
        slots.default?.(),
      );
  },
});

export const ToasterProvider = defineComponent({
  name: "PisagorToasterProvider",
  setup() {
    return () => h(Toaster as ArkPart);
  },
});

const ProviderRoot = defineComponent({
  inheritAttrs: false,
  name: "PisagorProvider",
  props: {
    ...localeProps,
    motion: {
      default: undefined,
      type: Object as PropType<Partial<MotionConfig>>,
    },
  },
  setup(props, { attrs, slots }) {
    const parentConfig = useProvider();
    const parentLocale = useResolvedLocale();
    const parentMotion = useMotion();
    const root = !parentConfig;

    const config = computed(() => ({
      locale: resolveLocale(
        { locale: props.locale, messages: props.messages },
        parentLocale(),
      ),
      motion: mergeDeep(
        mergeDeep(defaultMotion, parentMotion),
        omitBy(props.motion ?? {}, isNullish),
      ) as MotionConfig,
    }));

    provide(ProviderKey, config);

    return () =>
      h(
        LocaleProvider,
        {
          ...attrs,
          locale: props.locale,
          messages: props.messages,
        },
        {
          default: () =>
            h(
              MotionProvider,
              { disabled: props.motion?.disabled },
              {
                default: () => [
                  root ? h(ToasterProvider) : null,
                  slots.default?.(),
                ],
              },
            ),
        },
      );
  },
});

export const Provider = Object.assign(ProviderRoot, {
  Locale: LocaleProvider,
  Motion: MotionProvider,
  Toaster: ToasterProvider,
});
// #endregion
