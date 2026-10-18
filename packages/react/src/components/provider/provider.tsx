import {
  LocaleProvider as ArkLocaleProvider,
  useLocaleContext,
} from "@ark-ui/react";
import { IconContext } from "@phosphor-icons/react";
import { defaultMotion, resolveLocale } from "@pisagor/utils";
import type { LocaleConfig, MotionConfig } from "@pisagor/utils";
import { type PropsWithChildren, type ReactNode, useMemo } from "react";
import { isNullish, mergeDeep, omitBy } from "remeda";
import { Toaster, type ToasterProps } from "../toast";
import {
  LocaleContext,
  MotionContext,
  ProviderContext,
  useMotion,
  useProvider,
  useResolvedLocale,
} from "./context";

// #region Types
export interface ProviderProps extends LocaleConfig {
  children: ReactNode;
  /** Animation settings merged over the parent `Provider`. */
  motion?: Partial<MotionConfig>;
}

/** `locale` and partial `messages` merged over the parent `Provider`. */
export type LocaleProviderProps = PropsWithChildren<LocaleConfig>;

export type MotionProviderProps = PropsWithChildren<Partial<MotionConfig>>;

export type ToasterProviderProps = ToasterProps;
// #endregion

// #region Parts
/** Mirrors Phosphor icons and sets `dir` from the nearest Ark locale. */
function LocaleDir({ children }: { children: ReactNode }) {
  const { dir } = useLocaleContext();

  return (
    <IconContext
      value={{
        color: "currentColor",
        mirrored: dir === "rtl",
        size: "1em",
        weight: "regular",
      }}
    >
      <div
        className="contents"
        data-part="locale"
        data-scope="provider"
        dir={dir}
      >
        {children}
      </div>
    </IconContext>
  );
}

/**
 * Override the locale and/or UI messages for a subtree. Feeds Ark's
 * `LocaleProvider`, which derives `dir`.
 */
export function LocaleProvider({
  children,
  locale,
  messages,
}: LocaleProviderProps) {
  const parentLocale = useResolvedLocale();

  const value = useMemo(
    () => resolveLocale({ locale, messages }, parentLocale),
    [locale, messages, parentLocale],
  );

  return (
    <ArkLocaleProvider locale={value.locale}>
      <LocaleContext value={value}>
        <LocaleDir>{children}</LocaleDir>
      </LocaleContext>
    </ArkLocaleProvider>
  );
}

/** Override only motion settings for a subtree. */
export function MotionProvider({ children, disabled }: MotionProviderProps) {
  const parentMotion = useMotion();

  const config = useMemo(
    () =>
      mergeDeep(
        mergeDeep(defaultMotion, parentMotion ?? {}),
        omitBy({ disabled }, isNullish),
      ) as MotionConfig,
    [disabled, parentMotion],
  );

  return (
    <MotionContext value={config}>
      <div
        className="contents"
        data-motion={config.disabled ? "disabled" : "enabled"}
        data-part="motion"
        data-scope="provider"
      >
        {children}
      </div>
    </MotionContext>
  );
}

/** Renders the library toaster portal (mounted once on the root `Provider`). */
export function ToasterProvider(props: ToasterProviderProps) {
  return <Toaster {...props} />;
}

function ProviderRoot({ children, locale, messages, motion }: ProviderProps) {
  const parentConfig = useProvider();
  const parentMotion = useMotion();
  const parentLocale = useResolvedLocale();
  const root = !parentConfig;

  const config = useMemo(
    () => ({
      locale: resolveLocale({ locale, messages }, parentLocale),
      motion: mergeDeep(
        mergeDeep(defaultMotion, parentMotion ?? {}),
        omitBy(motion ?? {}, isNullish),
      ) as MotionConfig,
    }),
    [locale, messages, parentLocale, motion, parentMotion],
  );

  return (
    <ProviderContext value={config}>
      <LocaleProvider locale={locale} messages={messages}>
        <MotionProvider {...motion}>
          {root ? <ToasterProvider /> : null}
          {children}
        </MotionProvider>
      </LocaleProvider>
    </ProviderContext>
  );
}
// #endregion

export const Provider = Object.assign(ProviderRoot, {
  Locale: LocaleProvider,
  Motion: MotionProvider,
  Toaster: ToasterProvider,
});
