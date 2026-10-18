import { useLocaleContext } from "@ark-ui/svelte";
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
import { isNullish, mergeDeep, omitBy } from "remeda";
import { createContext } from "../../utils/create-context";

export type {
  LocaleConfig,
  LocaleContextValue,
  MessageKey,
  MessageLookup,
  Messages,
  MotionConfig,
  ProviderContextValue,
} from "@pisagor/utils";

const localeCtx = createContext("Locale")<ResolvedLocale>({
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
 * markup, e.g. `m("spinner.loading", ariaLabel)`. `dir` comes from Ark's locale
 * context. The properties are getters over the current state, so markup stays
 * reactive (avoid destructuring `locale` / `dir` / `messages` in the script).
 * Safe outside a `Provider` (English defaults, `en-US`, `ltr`).
 */
export function useLocale(): LocaleContextValue {
  const value = useResolvedLocale();
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

/** Stored locale (no `dir`), for nested `Provider` merging. */
export const useResolvedLocale = (): ResolvedLocale =>
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
 * `locale`, `messages` and `m` stay reactive for consumers.
 */
export function createLocaleValue(
  resolved: () => ResolvedLocale,
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

export function setLocaleValue(value: ResolvedLocale): ResolvedLocale {
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
