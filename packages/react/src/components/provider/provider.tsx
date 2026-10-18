import {
  LocaleProvider as ArkLocaleProvider,
  useLocaleContext,
} from "@ark-ui/react";
import { IconContext } from "@phosphor-icons/react";
import { defaultLocale, defaultMotion } from "@pisagor/utils";
import type {
  LocaleConfig,
  MotionConfig,
  TranslationsConfig,
} from "@pisagor/utils";
import { type PropsWithChildren, type ReactNode, useMemo } from "react";
import { isNullish, merge, mergeDeep, omitBy } from "remeda";
import { Toaster, type ToasterProps } from "../toast";
import {
  LocaleContext,
  MotionContext,
  ProviderContext,
  TranslationsContext,
  useLocale,
  useMotion,
  useProvider,
  useTranslations,
} from "./context";

// #region Types
export interface ProviderProps {
  children: ReactNode;
  /** Locale settings merged over the parent `Provider`. */
  locale?: Partial<LocaleConfig>;
  /**
   * Partial translation overrides merged over the parent `Provider`
   * translations and the built-in English defaults.
   */
  translations?: TranslationsConfig;
  /** Animation settings merged over the parent `Provider`. */
  motion?: Partial<MotionConfig>;
}

export type LocaleProviderProps = PropsWithChildren<Partial<LocaleConfig>>;

export interface TranslationsProviderProps {
  children: ReactNode;
  /** Partial overrides merged over the parent translations for a subtree. */
  translations?: TranslationsConfig;
}

export type MotionProviderProps = PropsWithChildren<Partial<MotionConfig>>;

export interface ToasterProviderProps extends ToasterProps {}
// #endregion

// #region Parts
/** Mirrors Phosphor icons for the nearest Ark `dir`. */
function IconProvider({ children }: { children: ReactNode }) {
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
      {children}
    </IconContext>
  );
}

/** Override only the locale (and Ark-derived `dir`) for a subtree. */
export function LocaleProvider({ children, locale }: LocaleProviderProps) {
  const parentLocale = useLocale();

  const config = useMemo(
    () =>
      mergeDeep(
        mergeDeep(defaultLocale, parentLocale ?? {}),
        omitBy({ locale }, isNullish),
      ) as LocaleConfig,
    [locale, parentLocale],
  );

  return (
    <ArkLocaleProvider locale={config.locale}>
      <LocaleContext value={config}>
        <IconProvider>
          <LocaleDir>{children}</LocaleDir>
        </IconProvider>
      </LocaleContext>
    </ArkLocaleProvider>
  );
}

function LocaleDir({ children }: { children: ReactNode }) {
  const { dir } = useLocaleContext();

  return (
    <div
      className="contents"
      data-part="locale"
      data-scope="provider"
      dir={dir}
    >
      {children}
    </div>
  );
}

/** Override only translations for a subtree. */
export function TranslationsProvider({
  translations,
  children,
}: TranslationsProviderProps) {
  const parentTranslations = useTranslations();

  const config = useMemo(
    () => merge(parentTranslations ?? {}, translations ?? {}),
    [parentTranslations, translations],
  );

  return <TranslationsContext value={config}>{children}</TranslationsContext>;
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

function ProviderRoot({
  locale,
  children,
  translations,
  motion,
}: ProviderProps) {
  const parentConfig = useProvider();
  const parentMotion = useMotion();
  const parentLocale = useLocale();
  const root = !parentConfig;

  const config = useMemo(
    () => ({
      locale: mergeDeep(
        mergeDeep(defaultLocale, parentLocale ?? {}),
        omitBy(locale ?? {}, isNullish),
      ) as LocaleConfig,
      motion: mergeDeep(
        mergeDeep(defaultMotion, parentMotion ?? {}),
        omitBy(motion ?? {}, isNullish),
      ) as MotionConfig,
    }),
    [locale, parentLocale, motion, parentMotion],
  );

  return (
    <ProviderContext value={config}>
      <LocaleProvider {...locale}>
        <MotionProvider {...motion}>
          <TranslationsProvider translations={translations}>
            {root ? <ToasterProvider /> : null}
            {children}
          </TranslationsProvider>
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
  Translations: TranslationsProvider,
});
