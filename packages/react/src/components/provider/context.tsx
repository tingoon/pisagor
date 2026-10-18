import { useLocaleContext } from "@ark-ui/react";
import {
  defaultLocale,
  defaultMotion,
  resolveProviderValue,
} from "@pisagor/utils";
import type {
  LocaleContextValue,
  MotionConfig,
  ProviderConfig,
  ProviderContextValue,
  ResolvedLocale,
} from "@pisagor/utils";
import { useMemo } from "react";
import { createContext } from "../../utils";

export type {
  LocaleConfig,
  LocaleContextValue,
  MessageKey,
  MessageLookup,
  Messages,
  MotionConfig,
  ProviderContextValue,
} from "@pisagor/utils";

export const { LocaleContext, useLocale: useResolvedLocale } = createContext(
  "Locale",
)<ResolvedLocale>({
  defaultValue: defaultLocale,
  strict: false,
});

/**
 * Nearest locale context: `{ locale, dir, messages, m }`. Call once at the top
 * of a component and use `m(key, override)` in JSX, e.g. `m("spinner.loading",
 * ariaLabel)`. `dir` comes from Ark's locale context. Safe outside a `Provider`
 * (English defaults, `en-US`, `ltr`).
 */
export function useLocale(): LocaleContextValue {
  const value = useResolvedLocale() ?? defaultLocale;
  const { dir } = useLocaleContext();

  return useMemo(() => ({ ...value, dir }), [value, dir]);
}

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
 * Full library context: `{ locale, motion }`. Safe outside a `Provider` —
 * defaults apply.
 */
export function useProviderValue(): ProviderContextValue {
  const locale = useLocale();
  const motion = useMotion();

  return useMemo(() => resolveProviderValue(locale, motion), [locale, motion]);
}
