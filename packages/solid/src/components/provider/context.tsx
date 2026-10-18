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
} from "@pisagor/utils";
import type { Accessor } from "solid-js";
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
 * Wrap a resolved locale accessor in a getter object so `locale`, `dir`,
 * `messages` and `m` stay reactive for consumers.
 */
export function createLocaleValue(
  resolved: Accessor<LocaleContextValue>,
): LocaleContextValue {
  return {
    get dir() {
      return resolved().dir;
    },
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
 * local.ariaLabel)`. `m` and the getters read the current `Provider` values, so
 * they stay reactive (avoid destructuring `locale` / `dir` / `messages` outside
 * a tracked scope). Safe outside a `Provider` (English defaults, `en-US`,
 * `ltr`).
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
  return resolveProviderValue(useLocale(), useMotion());
}
