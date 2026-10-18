import {
  LocaleProvider as ArkLocaleProvider,
  useLocaleContext,
} from "@ark-ui/solid";
import { defaultMotion, resolveLocale } from "@pisagor/utils";
import type { LocaleConfig, MotionConfig } from "@pisagor/utils";
import { isNullish, mergeDeep, omitBy } from "remeda";
import type { JSX, ParentProps } from "solid-js";
import { createMemo, Show, splitProps } from "solid-js";
import { Toaster, type ToasterProps } from "../toast";
import {
  createLocaleValue,
  LocaleContext,
  MotionContext,
  ProviderContext,
  useMotion,
  useProvider,
  useResolvedLocale,
} from "./context";

// #region Types
export interface ProviderProps extends ParentProps, LocaleConfig {
  /** Animation settings merged over the parent `Provider`. */
  motion?: Partial<MotionConfig>;
}

/** `locale` and partial `messages` merged over the parent `Provider`. */
export interface LocaleProviderProps extends ParentProps, LocaleConfig {}

export type MotionProviderProps = ParentProps & Partial<MotionConfig>;

export type ToasterProviderProps = ToasterProps;
// #endregion

// #region Parts
/**
 * Override the locale and/or UI messages for a subtree. Feeds Ark's
 * `LocaleProvider`, which derives `dir`.
 */
export function LocaleProvider(props: LocaleProviderProps): JSX.Element {
  const [local] = splitProps(props, ["children", "locale", "messages"]);
  const parentLocale = useResolvedLocale();
  const value = createLocaleValue(
    createMemo(() =>
      resolveLocale(
        { locale: local.locale, messages: local.messages },
        parentLocale,
      ),
    ),
  );

  return (
    <ArkLocaleProvider locale={value.locale}>
      <LocaleContext value={value}>
        <LocaleDir>{local.children}</LocaleDir>
      </LocaleContext>
    </ArkLocaleProvider>
  );
}

/** Sets `dir` from the nearest Ark locale. */
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
    "children",
    "locale",
    "messages",
    "motion",
  ]);
  const parentConfig = useProvider();
  const parentMotion = useMotion();
  const parentLocale = useResolvedLocale();
  const root = !parentConfig;

  const locale = createLocaleValue(
    createMemo(() =>
      resolveLocale(
        { locale: local.locale, messages: local.messages },
        parentLocale,
      ),
    ),
  );
  const config = {
    locale,
    get motion() {
      return mergeDeep(
        mergeDeep(defaultMotion, parentMotion ?? {}),
        omitBy(local.motion ?? {}, isNullish),
      ) as MotionConfig;
    },
  };

  return (
    <ProviderContext value={config}>
      <LocaleProvider locale={local.locale} messages={local.messages}>
        <MotionProvider {...local.motion}>
          <Show when={root}>
            <ToasterProvider />
          </Show>
          {local.children}
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
