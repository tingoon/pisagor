import { useLocaleContext } from "@ark-ui/solid";
import {
  defaultLocale,
  defaultMotion,
  resolveProviderValue,
} from "@pisagor/utils";
import type {
  LocaleContextValue,
  MessageKey,
  MessageLookup,
  MotionConfig,
  ProviderConfig,
  ProviderContextValue,
  ResolvedLocale,
} from "@pisagor/utils";
import type { Accessor } from "solid-js";
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
 * Wrap a resolved locale accessor in a getter object so `locale`, `messages`
 * and `m` stay reactive for consumers.
 */
export function createLocaleValue(
  resolved: Accessor<ResolvedLocale>,
): ResolvedLocale {
  return {
    get locale() {
      return resolved().locale;
    },
    get messages() {
      return resolved().messages;
    },
    m: ((key: MessageKey, override?: unknown) =>
      override ?? resolved().messages[key]) as MessageLookup,
  };
}

/**
 * Nearest locale context: `{ locale, dir, messages, m }`. Call once during
 * component setup and use `m(key, override)` in JSX, e.g. `m("spinner.loading",
 * local.ariaLabel)`. `dir` comes from Ark's locale context. `m` and the getters
 * read the current values, so they stay reactive (avoid destructuring `locale`
 * / `dir` / `messages` outside a tracked scope). Safe outside a `Provider`
 * (English defaults, `en-US`, `ltr`).
 */
export function useLocale(): LocaleContextValue {
  const value = useResolvedLocale() ?? defaultLocale;
  const ark = useLocaleContext();
  return {
    get dir() {
      return ark().dir;
    },
    get locale() {
      return value.locale;
    },
    get messages() {
      return value.messages;
    },
    m: value.m,
  };
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
  return resolveProviderValue(useLocale(), useMotion());
}
