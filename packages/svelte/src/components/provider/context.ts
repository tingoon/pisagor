import {
  defaultLocale,
  defaultMotion,
  defaultProviderConfig,
  defaultTranslations,
  type LocaleConfig,
  type MessageKey,
  type MotionConfig,
  type ProviderConfig,
  type ProviderContextValue,
  resolveMessage,
  resolveProviderValue,
  type TranslationsConfig,
} from "@pisagor/utils";
import { isNullish, merge, mergeDeep, omitBy } from "remeda";
import { createContext } from "../../utils/create-context";

export type {
  LocaleConfig,
  MessageKey,
  MotionConfig,
  ProviderContextValue,
  TranslationsConfig,
} from "@pisagor/utils";

const localeCtx = createContext("Locale")<LocaleConfig>({
  defaultValue: defaultLocale,
  strict: false,
});

const translationsCtx = createContext("Translations")<TranslationsConfig>({
  defaultValue: defaultTranslations,
  strict: false,
});

const motionCtx = createContext("Motion")<MotionConfig>({
  defaultValue: defaultMotion,
  strict: false,
});

const providerCtx = createContext("Provider")<ProviderConfig>({
  strict: false,
});

export const setLocaleContext = localeCtx.setContext;
export const useLocale = (): LocaleConfig =>
  localeCtx.getContext() ?? defaultLocale;

export const setTranslationsContext = translationsCtx.setContext;
export const useTranslations = (): TranslationsConfig =>
  translationsCtx.getContext() ?? defaultTranslations;

export const setMotionContext = motionCtx.setContext;
export const useMotion = (): MotionConfig =>
  motionCtx.getContext() ?? defaultMotion;

export const setProviderContext = providerCtx.setContext;
export const useProvider = (): ProviderConfig | undefined =>
  providerCtx.getContext();

/** Resolve a library translation key from the nearest `Provider`. */
export function useTranslation(key: MessageKey): string {
  return resolveMessage(useTranslations(), key);
}

/**
 * Return a resolver bound to the nearest `Provider` translations. Call during
 * component init and use the returned function in markup.
 */
export function useMessageResolver(): (key: MessageKey) => string {
  const translations = useTranslations();
  return (key) => resolveMessage(translations, key);
}

/**
 * Full library context: `{ locale, translations, motion }`. Safe outside a
 * `Provider` — English defaults apply.
 */
export function useProviderValue(): ProviderContextValue {
  const config = useProvider() ?? defaultProviderConfig;
  const translations = useTranslations();
  const motion = useMotion();
  const locale = useLocale();
  return {
    ...resolveProviderValue({ ...config, locale, motion }, translations),
    locale,
    motion,
  };
}

export function setLocaleConfig(partial?: Partial<LocaleConfig>): LocaleConfig {
  const config = mergeDeep(
    mergeDeep(defaultLocale, useLocale()),
    omitBy(partial ?? {}, isNullish),
  ) as LocaleConfig;
  setLocaleContext(config);
  return config;
}

export function setTranslationsConfig(
  translations?: TranslationsConfig,
): TranslationsConfig {
  const config = merge(useTranslations(), translations ?? {});
  setTranslationsContext(config);
  return config;
}

export function setMotionConfig(partial?: Partial<MotionConfig>): MotionConfig {
  const config = mergeDeep(
    mergeDeep(defaultMotion, useMotion()),
    omitBy(partial ?? {}, isNullish),
  ) as MotionConfig;
  setMotionContext(config);
  return config;
}

export function setProviderConfig(value: ProviderConfig): ProviderConfig {
  setProviderContext(value);
  return value;
}
