import {
  defaultLocale,
  defaultMotion,
  defaultProviderConfig,
  defaultTranslations,
  resolveMessage,
  resolveProviderValue,
} from "@pisagor/utils";
import type {
  LocaleConfig,
  MessageKey,
  MotionConfig,
  ProviderConfig,
  ProviderContextValue,
  TranslationsConfig,
} from "@pisagor/utils";
import { inject, unref } from "vue";
import type { ComputedRef, InjectionKey, Ref } from "vue";

export type {
  LocaleConfig,
  MessageKey,
  MotionConfig,
  ProviderContextValue,
  TranslationsConfig,
} from "@pisagor/utils";

type MaybeRef<T> = T | Ref<T> | ComputedRef<T>;

export const LocaleKey: InjectionKey<MaybeRef<LocaleConfig>> = Symbol("Locale");
export const TranslationsKey: InjectionKey<MaybeRef<TranslationsConfig>> =
  Symbol("Translations");
export const MotionKey: InjectionKey<MaybeRef<MotionConfig>> = Symbol("Motion");
export const ProviderKey: InjectionKey<MaybeRef<ProviderConfig> | undefined> =
  Symbol("Provider");

export function useLocale(): LocaleConfig {
  return unref(inject(LocaleKey, defaultLocale));
}

export function useTranslations(): TranslationsConfig {
  return unref(inject(TranslationsKey, defaultTranslations));
}

export function useMotion(): MotionConfig {
  return unref(inject(MotionKey, defaultMotion));
}

export function useProvider(): ProviderConfig | undefined {
  const value = inject(ProviderKey, undefined);
  return value === undefined ? undefined : unref(value);
}

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
  const motion = useMotion();
  const locale = useLocale();
  return {
    ...resolveProviderValue({ ...config, locale, motion }, translations),
    locale,
    motion,
  };
}
