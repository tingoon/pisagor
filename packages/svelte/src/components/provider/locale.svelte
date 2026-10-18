<script lang="ts">
  import { LocaleProvider } from "@ark-ui/svelte";
  import { type LocaleConfig, resolveLocale } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import {
    createLocaleValue,
    setLocaleValue,
    useResolvedLocale,
  } from "./context";
  import ProviderDir from "./dir.svelte";

  /**
   * Override the locale and/or UI messages for a subtree. Feeds Ark's
   * `LocaleProvider`, which derives `dir`.
   */
  let { children, locale, messages }: LocaleConfig & { children?: Snippet } =
    $props();

  const parentLocale = useResolvedLocale();
  const resolved = $derived(resolveLocale({ locale, messages }, parentLocale));
  const value = setLocaleValue(createLocaleValue(() => resolved));
</script>

<LocaleProvider locale={value.locale}>
  <ProviderDir part="locale">{@render children?.()}</ProviderDir>
</LocaleProvider>
