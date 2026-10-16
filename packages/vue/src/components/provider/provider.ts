import { LocaleProvider as ArkLocaleProvider } from "@ark-ui/vue/locale";
import {
  defaultLocale,
  defaultMotion,
  type LocaleConfig,
  type MotionConfig,
  type TranslationsConfig,
} from "@pisagor/utils";
import { isNullish, merge, mergeDeep, omitBy } from "remeda";
import { computed, defineComponent, h, type PropType, provide } from "vue";
import { Toaster } from "../toast";
import {
  LocaleKey,
  MotionKey,
  ProviderKey,
  TranslationsKey,
  useLocale,
  useMotion,
  useProvider,
  useTranslations,
} from "./context";
import { ProviderDir } from "./dir";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface ProviderProps {
  locale?: Partial<LocaleConfig>;
  translations?: TranslationsConfig;
  motion?: Partial<MotionConfig>;
}

export type LocaleProviderProps = Partial<LocaleConfig>;
export type TranslationsProviderProps = {
  translations?: TranslationsConfig;
};
export type MotionProviderProps = Partial<MotionConfig>;
// #endregion

// #region Parts
export const LocaleProvider = defineComponent({
  name: "PisagorLocaleProvider",
  props: {
    locale: { default: undefined, type: String },
  },
  setup(props, { slots }) {
    const parentLocale = useLocale();
    const config = computed(
      () =>
        mergeDeep(
          mergeDeep(defaultLocale, parentLocale),
          omitBy({ locale: props.locale }, isNullish),
        ) as LocaleConfig,
    );
    provide(LocaleKey, config);

    return () =>
      h(
        ArkLocaleProvider as ArkPart,
        { locale: config.value.locale },
        {
          default: () => [
            h(
              ProviderDir,
              { part: "locale" },
              { default: () => slots.default?.() },
            ),
          ],
        },
      );
  },
});

export const TranslationsProvider = defineComponent({
  name: "PisagorTranslationsProvider",
  props: {
    translations: {
      default: undefined,
      type: Object as PropType<TranslationsConfig>,
    },
  },
  setup(props, { slots }) {
    const parentTranslations = useTranslations();
    const config = computed(() =>
      merge(parentTranslations, props.translations ?? {}),
    );
    provide(TranslationsKey, config);

    return () => slots.default?.();
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
    locale: {
      default: undefined,
      type: Object as PropType<Partial<LocaleConfig>>,
    },
    motion: {
      default: undefined,
      type: Object as PropType<Partial<MotionConfig>>,
    },
    translations: {
      default: undefined,
      type: Object as PropType<TranslationsConfig>,
    },
  },
  setup(props, { attrs, slots }) {
    const parentConfig = useProvider();
    const parentLocale = useLocale();
    const parentMotion = useMotion();
    const root = !parentConfig;

    const config = computed(() => ({
      locale: mergeDeep(
        mergeDeep(defaultLocale, parentLocale),
        omitBy(props.locale ?? {}, isNullish),
      ) as LocaleConfig,
      motion: mergeDeep(
        mergeDeep(defaultMotion, parentMotion),
        omitBy(props.motion ?? {}, isNullish),
      ) as MotionConfig,
    }));

    provide(ProviderKey, config);

    return () =>
      h(
        LocaleProvider,
        { ...attrs, locale: props.locale?.locale },
        {
          default: () =>
            h(
              MotionProvider,
              { disabled: props.motion?.disabled },
              {
                default: () =>
                  h(
                    TranslationsProvider,
                    { translations: props.translations },
                    {
                      default: () => [
                        root ? h(ToasterProvider) : null,
                        slots.default?.(),
                      ],
                    },
                  ),
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
  Translations: TranslationsProvider,
});
// #endregion
