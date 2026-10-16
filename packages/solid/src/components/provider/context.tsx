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
import { createContext } from "../../utils";

export type {
  LocaleConfig,
  MessageKey,
  MotionConfig,
  ProviderContextValue,
  TranslationsConfig,
} from "@pisagor/utils";

export const { LocaleContext, useLocale } = createContext(
  "Locale",
)<LocaleConfig>({
  defaultValue: defaultLocale,
  strict: false,
});

export const { TranslationsContext, useTranslations } = createContext(
  "Translations",
)<TranslationsConfig>({
  defaultValue: defaultTranslations,
  strict: false,
});

export const { MotionContext, useMotion } = createContext(
  "Motion",
)<MotionConfig>({
  defaultValue: defaultMotion,
  strict: false,
});

export const { ProviderContext, useProvider } = createContext(
  "Provider",
)<ProviderConfig>({
  strict: false,
});

/** Resolve a library translation key from the nearest `Provider`. */
export function useTranslation(key: MessageKey): string {
  return resolveMessage(useTranslations(), key);
}

/**
 * Full library context: `{ locale, translations, motion }`. Safe outside a
 * `Provider` — English defaults apply.
 */
export function useProviderValue(): ProviderContextValue {
  const config = useProvider() ?? defaultProviderConfig;
  const translations = useTranslations();
  const motion = useMotion() ?? defaultMotion;
  const locale = useLocale() ?? defaultLocale;
  return {
    ...resolveProviderValue({ ...config, locale, motion }, translations),
    locale,
    motion,
  };
}
