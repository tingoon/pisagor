<script lang="ts">
  import type { LocaleConfig, MotionConfig } from "@pisagor/utils";
  import { defaultMotion, resolveLocale } from "@pisagor/utils";
  import { isNullish, mergeDeep, omitBy } from "remeda";
  import type { Snippet } from "svelte";
  import { Toaster } from "../toast";
  import {
    createLocaleValue,
    setProviderConfig,
    useMotion,
    useProvider,
    useResolvedLocale,
  } from "./context";
  import LocaleProvider from "./locale.svelte";
  import MotionProvider from "./motion.svelte";

  type Props = LocaleConfig & {
    children?: Snippet;
    /** Animation settings merged over the parent `Provider`. */
    motion?: Partial<MotionConfig>;
  };

  let { children, locale, messages, motion }: Props = $props();

  const parentConfig = useProvider();
  const parentLocale = useResolvedLocale();
  const parentMotion = useMotion();
  const root = !parentConfig;

  const resolvedLocale = $derived(
    resolveLocale({ locale, messages }, parentLocale),
  );
  const resolvedMotion = $derived(
    mergeDeep(
      mergeDeep(defaultMotion, parentMotion),
      omitBy(motion ?? {}, isNullish),
    ) as MotionConfig,
  );

  setProviderConfig({
    locale: createLocaleValue(() => resolvedLocale),
    get motion() {
      return resolvedMotion;
    },
  });
</script>

<LocaleProvider {locale} {messages}>
  <MotionProvider disabled={motion?.disabled}>
    {#if root}
      <Toaster />
    {/if}
    {@render children?.()}
  </MotionProvider>
</LocaleProvider>
