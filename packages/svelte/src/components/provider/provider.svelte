<script lang="ts">
import type {
  LocaleConfig,
  MotionConfig,
  TranslationsConfig,
} from "@pisagor/utils";
import { defaultLocale, defaultMotion } from "@pisagor/utils";
import { isNullish, mergeDeep, omitBy } from "remeda";
import type { Snippet } from "svelte";
import { Toaster } from "../toast";
import {
  setProviderConfig,
  useLocale,
  useMotion,
  useProvider,
} from "./context";
import LocaleProvider from "./locale.svelte";
import MotionProvider from "./motion.svelte";
import TranslationsProvider from "./translations.svelte";

type Props = {
  children?: Snippet;
  /** Locale settings merged over the parent `Provider`. */
  locale?: Partial<LocaleConfig>;
  /**
   * Partial translation overrides merged over the parent `Provider`
   * translations and the built-in English defaults.
   */
  translations?: TranslationsConfig;
  /** Animation settings merged over the parent `Provider`. */
  motion?: Partial<MotionConfig>;
};

let { locale, children, translations, motion }: Props = $props();

const parentConfig = useProvider();
const parentLocale = useLocale();
const parentMotion = useMotion();
const root = !parentConfig;

setProviderConfig({
  locale: mergeDeep(
    mergeDeep(defaultLocale, parentLocale),
    omitBy(locale ?? {}, isNullish),
  ) as LocaleConfig,
  motion: mergeDeep(
    mergeDeep(defaultMotion, parentMotion),
    omitBy(motion ?? {}, isNullish),
  ) as MotionConfig,
});
</script>

<LocaleProvider locale={locale?.locale}>
  <MotionProvider disabled={motion?.disabled}>
    <TranslationsProvider {translations}>
      {#if root}
        <Toaster />
      {/if}
      {@render children?.()}
    </TranslationsProvider>
  </MotionProvider>
</LocaleProvider>
