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
 * Translation lookup. Pass `override` (e.g. a consumer prop) instead of
 * `useMessage(key, prop)` so the hook is never called conditionally. Returns
 * the nearest `Provider` override, else the built-in English default.
 */
export function useMessage(key: MessageKey): string;
export function useMessage<T>(
  key: MessageKey,
  override: T,
): NonNullable<T> | string;
export function useMessage<T>(key: MessageKey, override?: T) {
  const message = resolveMessage(use(TranslationsContext), key);
  return override ?? message;
}

/**
 * Resolver bound to the nearest `Provider` translations, for keys only known
 * inside callbacks or loops (e.g. `fileUpload.error.${code}`).
 */
export function useMessageResolver(): (key: MessageKey) => string {
  const translations = use(TranslationsContext);
  return (key) => resolveMessage(translations, key);
}

/** Hook form of {@link useMessage}. */
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
