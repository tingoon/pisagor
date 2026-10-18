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
} from "@pisagor/utils";
import { useMemo } from "react";
import { createContext } from "../../utils";

export type {
  LocaleConfig,
  LocaleContextValue,
  LocaleDir,
  MessageKey,
  MessageLookup,
  Messages,
  MotionConfig,
  ProviderContextValue,
} from "@pisagor/utils";

const { LocaleContext, useLocale: useLocaleContextValue } = createContext(
  "Locale",
)<LocaleContextValue>({
  defaultValue: defaultLocale,
  strict: false,
});

export { LocaleContext };

/**
 * Nearest locale context: `{ locale, dir, messages, m }`. Call once at the top
 * of a component and use `m(key, override)` in JSX, e.g. `m("spinner.loading",
 * ariaLabel)`. Safe outside a `Provider` (English defaults, `en-US`, `ltr`).
 */
export function useLocale(): LocaleContextValue {
  return useLocaleContextValue() ?? defaultLocale;
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
