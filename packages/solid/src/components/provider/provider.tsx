import {
  LocaleProvider as ArkLocaleProvider,
  useLocaleContext,
} from "@ark-ui/solid";
import {
  defaultLocale,
  defaultMotion,
  type LocaleConfig,
  type MotionConfig,
  type TranslationsConfig,
} from "@pisagor/utils";
import { isNullish, merge, mergeDeep, omitBy } from "remeda";
import type { JSX, ParentProps } from "solid-js";
import { Show, splitProps } from "solid-js";
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
export interface ProviderProps extends ParentProps {
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

export interface LocaleProviderProps
  extends ParentProps, Partial<LocaleConfig> {}

export interface TranslationsProviderProps extends ParentProps {
  translations?: TranslationsConfig;
}

export type MotionProviderProps = ParentProps & Partial<MotionConfig>;

export type ToasterProviderProps = ToasterProps;
// #endregion

// #region Parts
/** Override only the locale (and Ark-derived `dir`) for a subtree. */
export function LocaleProvider(props: LocaleProviderProps): JSX.Element {
  const [local] = splitProps(props, ["children", "locale"]);
  const parentLocale = useLocale();
  const config = () =>
    mergeDeep(
      mergeDeep(defaultLocale, parentLocale ?? {}),
      omitBy({ locale: local.locale }, isNullish),
    ) as LocaleConfig;

  return (
    <ArkLocaleProvider locale={config().locale}>
      <LocaleContext value={config()}>
        <LocaleDir>{local.children}</LocaleDir>
      </LocaleContext>
    </ArkLocaleProvider>
  );
}

function LocaleDir(props: ParentProps): JSX.Element {
  const locale = useLocaleContext();
  return (
    <div
      data-part="locale"
      data-scope="provider"
      dir={locale().dir}
      style={{ display: "contents" }}
    >
      {props.children}
    </div>
  );
}

/** Override only translations for a subtree. */
export function TranslationsProvider(
  props: TranslationsProviderProps,
): JSX.Element {
  const [local] = splitProps(props, ["children", "translations"]);
  const parentTranslations = useTranslations();
  const config = () =>
    merge(parentTranslations ?? {}, local.translations ?? {});

  return (
    <TranslationsContext value={config()}>{local.children}</TranslationsContext>
  );
}

/** Override only motion settings for a subtree. */
export function MotionProvider(props: MotionProviderProps): JSX.Element {
  const [local] = splitProps(props, ["children", "disabled"]);
  const parentMotion = useMotion();
  const config = () =>
    mergeDeep(
      mergeDeep(defaultMotion, parentMotion ?? {}),
      omitBy({ disabled: local.disabled }, isNullish),
    ) as MotionConfig;

  return (
    <MotionContext value={config()}>
      <div
        data-motion={config().disabled ? "disabled" : "enabled"}
        data-part="motion"
        data-scope="provider"
        style={{ display: "contents" }}
      >
        {local.children}
      </div>
    </MotionContext>
  );
}

/** Renders the library toaster portal (mounted once on the root `Provider`). */
export function ToasterProvider(props: ToasterProviderProps): JSX.Element {
  return <Toaster {...props} />;
}

function ProviderRoot(props: ProviderProps): JSX.Element {
  const [local] = splitProps(props, [
    "locale",
    "children",
    "translations",
    "motion",
  ]);
  const parentConfig = useProvider();
  const parentMotion = useMotion();
  const parentLocale = useLocale();
  const root = !parentConfig;

  const config = () => ({
    locale: mergeDeep(
      mergeDeep(defaultLocale, parentLocale ?? {}),
      omitBy(local.locale ?? {}, isNullish),
    ) as LocaleConfig,
    motion: mergeDeep(
      mergeDeep(defaultMotion, parentMotion ?? {}),
      omitBy(local.motion ?? {}, isNullish),
    ) as MotionConfig,
  });

  return (
    <ProviderContext value={config()}>
      <LocaleProvider {...local.locale}>
        <MotionProvider {...local.motion}>
          <TranslationsProvider translations={local.translations}>
            <Show when={root}>
              <ToasterProvider />
            </Show>
            {local.children}
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
