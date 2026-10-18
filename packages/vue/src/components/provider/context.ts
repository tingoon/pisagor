import { DEFAULT_LOCALE, useLocaleContext } from "@ark-ui/vue";
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
import { inject, unref } from "vue";
import type { ComputedRef, InjectionKey, Ref } from "vue";

export type {
  LocaleConfig,
  LocaleContextValue,
  MessageKey,
  MessageLookup,
  Messages,
  MotionConfig,
  ProviderContextValue,
} from "@pisagor/utils";

type MaybeRef<T> = T | Ref<T> | ComputedRef<T>;

export const LocaleKey: InjectionKey<MaybeRef<ResolvedLocale>> =
  Symbol("Locale");
export const MotionKey: InjectionKey<MaybeRef<MotionConfig>> = Symbol("Motion");
export const ProviderKey: InjectionKey<MaybeRef<ProviderConfig> | undefined> =
  Symbol("Provider");

/**
 * Nearest locale context: `{ locale, dir, messages, m }`. Call once in `setup`
 * and use `m(key, override)` in the render function or template, e.g.
 * `m("spinner.loading", props.ariaLabel)`. `dir` comes from Ark's locale
 * context. Every property reads the injected values on access, so renders track
 * locale and message changes (avoid destructuring `locale` / `dir` / `messages`
 * in `setup`). Safe outside a `Provider` (English defaults, `en-US`, `ltr`).
 */
export function useLocale(): LocaleContextValue {
  const injected = inject(LocaleKey, defaultLocale);
  const ark = useLocaleContext(DEFAULT_LOCALE);
  const current = () => unref(injected);
  return {
    get dir() {
      return ark.value.dir;
    },
    get locale() {
      return current().locale;
    },
    get messages() {
      return current().messages;
    },
    m: ((key: MessageKey, override?: unknown) =>
      override ?? current().messages[key]) as MessageLookup,
  };
}

/**
 * Getter for the stored locale (no `dir`), read inside a `computed` so nested
 * `Provider`s track their parent.
 */
export function useResolvedLocale(): () => ResolvedLocale {
  const injected = inject(LocaleKey, defaultLocale);
  return () => unref(injected);
}

export function useMotion(): MotionConfig {
  return unref(inject(MotionKey, defaultMotion));
}

export function useProvider(): ProviderConfig | undefined {
  const value = inject(ProviderKey, undefined);
  return value === undefined ? undefined : unref(value);
}

/**
 * Full library context: `{ locale, motion }`. Safe outside a `Provider` —
 * defaults apply.
 */
export function useProviderValue(): ProviderContextValue {
  return resolveProviderValue(useLocale(), useMotion());
}
