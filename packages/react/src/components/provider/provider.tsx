import { LocaleProvider as ArkLocaleProvider } from "@ark-ui/react";
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
  useLocale,
  useMotion,
  useProvider,
} from "./context";

// #region Types
export interface ProviderProps extends LocaleConfig {
  children: ReactNode;
  /** Animation settings merged over the parent `Provider`. */
  motion?: Partial<MotionConfig>;
}

/**
 * `locale`, `dir` and partial `messages` merged over the parent `Provider` for
 * a subtree.
 */
export type LocaleProviderProps = PropsWithChildren<LocaleConfig>;

export type MotionProviderProps = PropsWithChildren<Partial<MotionConfig>>;

export interface ToasterProviderProps extends ToasterProps {}
// #endregion

// #region Parts
/**
 * Override the locale, direction and/or UI messages for a subtree. Feeds Ark's
 * `LocaleProvider` and mirrors Phosphor icons for `rtl`.
 */
export function LocaleProvider({
  children,
  dir,
  locale,
  messages,
}: LocaleProviderProps) {
  const parentLocale = useLocale();

  const value = useMemo(
    () => resolveLocale({ dir, locale, messages }, parentLocale),
    [dir, locale, messages, parentLocale],
  );

  return (
    <ArkLocaleProvider locale={value.locale}>
      <LocaleContext value={value}>
        <IconContext
          value={{
            color: "currentColor",
            mirrored: value.dir === "rtl",
            size: "1em",
            weight: "regular",
          }}
        >
          <div
            className="contents"
            data-part="locale"
            data-scope="provider"
            dir={value.dir}
          >
            {children}
          </div>
        </IconContext>
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

function ProviderRoot({
  children,
  dir,
  locale,
  messages,
  motion,
}: ProviderProps) {
  const parentConfig = useProvider();
  const parentMotion = useMotion();
  const parentLocale = useLocale();
  const root = !parentConfig;

  const config = useMemo(
    () => ({
      locale: resolveLocale({ dir, locale, messages }, parentLocale),
      motion: mergeDeep(
        mergeDeep(defaultMotion, parentMotion ?? {}),
        omitBy(motion ?? {}, isNullish),
      ) as MotionConfig,
    }),
    [dir, locale, messages, parentLocale, motion, parentMotion],
  );

  return (
    <ProviderContext value={config}>
      <LocaleProvider dir={dir} locale={locale} messages={messages}>
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
