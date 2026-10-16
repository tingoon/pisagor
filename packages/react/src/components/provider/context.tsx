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
import { use, useMemo } from "react";
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

/**
 * Render-time translation lookup that is safe inside conditional JSX (uses React `use`).
 * Returns the nearest `Provider` override, else the built-in English default.
 */
export function getMessage(key: MessageKey) {
  return resolveMessage(use(TranslationsContext), key);
}

/** Hook form of {@link getMessage}. */
export function useTranslation(key: MessageKey) {
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
  return useMemo(
    () => ({
      ...resolveProviderValue({ ...config, locale, motion }, translations),
      locale,
      motion,
    }),
    [config, translations, motion, locale],
  );
}
