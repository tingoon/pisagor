import { LocaleProvider as ArkLocaleProvider } from "@ark-ui/solid";
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
  useLocale,
  useMotion,
  useProvider,
} from "./context";

// #region Types
export interface ProviderProps extends ParentProps, LocaleConfig {
  /** Animation settings merged over the parent `Provider`. */
  motion?: Partial<MotionConfig>;
}

/**
 * `locale`, `dir` and partial `messages` merged over the parent `Provider` for
 * a subtree.
 */
export interface LocaleProviderProps extends ParentProps, LocaleConfig {}

export type MotionProviderProps = ParentProps & Partial<MotionConfig>;

export type ToasterProviderProps = ToasterProps;
// #endregion

// #region Parts
/** Override the locale, direction and/or UI messages for a subtree. */
export function LocaleProvider(props: LocaleProviderProps): JSX.Element {
  const [local] = splitProps(props, ["children", "dir", "locale", "messages"]);
  const parentLocale = useLocale();
  const resolved = createMemo(() =>
    resolveLocale(
      { dir: local.dir, locale: local.locale, messages: local.messages },
      parentLocale,
    ),
  );
  const value = createLocaleValue(resolved);

  return (
    <ArkLocaleProvider locale={value.locale}>
      <LocaleContext value={value}>
        <div
          data-part="locale"
          data-scope="provider"
          dir={value.dir}
          style={{ display: "contents" }}
        >
          {local.children}
        </div>
      </LocaleContext>
    </ArkLocaleProvider>
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
    "dir",
    "locale",
    "messages",
    "motion",
  ]);
  const parentConfig = useProvider();
  const parentMotion = useMotion();
  const parentLocale = useLocale();
  const root = !parentConfig;

  const locale = createLocaleValue(
    createMemo(() =>
      resolveLocale(
        { dir: local.dir, locale: local.locale, messages: local.messages },
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
      <LocaleProvider
        dir={local.dir}
        locale={local.locale}
        messages={local.messages}
      >
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
