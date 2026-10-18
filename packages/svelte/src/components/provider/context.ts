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
import { isNullish, mergeDeep, omitBy } from "remeda";
import { createContext } from "../../utils/create-context";

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

const localeCtx = createContext("Locale")<LocaleContextValue>({
  defaultValue: defaultLocale,
  strict: false,
});

const motionCtx = createContext("Motion")<MotionConfig>({
  defaultValue: defaultMotion,
  strict: false,
});

const providerCtx = createContext("Provider")<ProviderConfig>({
  strict: false,
});

/**
 * Nearest locale context: `{ locale, dir, messages, m }`. Call once during
 * component init (context is only readable there) and use `m(key, override)` in
 * markup, e.g. `m("spinner.loading", ariaLabel)`. The properties are getters
 * over the `Provider` state, so markup stays reactive (avoid destructuring
 * `locale` / `dir` / `messages` in the script). Safe outside a `Provider`
 * (English defaults, `en-US`, `ltr`).
 */
export const useLocale = (): LocaleContextValue =>
  localeCtx.getContext() ?? defaultLocale;

export const useMotion = (): MotionConfig =>
  motionCtx.getContext() ?? defaultMotion;

export const useProvider = (): ProviderConfig | undefined =>
  providerCtx.getContext();

/**
 * Full library context: `{ locale, motion }`. Safe outside a `Provider` —
 * defaults apply.
 */
export function useProviderValue(): ProviderContextValue {
  return resolveProviderValue(useLocale(), useMotion());
}

/**
 * Wrap a resolved locale getter (e.g. a `$derived` value) in a getter object so
 * `locale`, `dir`, `messages` and `m` stay reactive for consumers.
 */
export function createLocaleValue(
  resolved: () => LocaleContextValue,
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

export function setLocaleValue(value: LocaleContextValue): LocaleContextValue {
  localeCtx.setContext(value);
  return value;
}

export function setMotionConfig(partial?: Partial<MotionConfig>): MotionConfig {
  const config = mergeDeep(
    mergeDeep(defaultMotion, useMotion()),
    omitBy(partial ?? {}, isNullish),
  ) as MotionConfig;
  motionCtx.setContext(config);
  return config;
}

export function setProviderConfig(value: ProviderConfig): ProviderConfig {
  providerCtx.setContext(value);
  return value;
}
