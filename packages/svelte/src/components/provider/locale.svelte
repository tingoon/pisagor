<script lang="ts">
  import { LocaleProvider } from "@ark-ui/svelte";
  import { type LocaleConfig, resolveLocale } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import { createLocaleValue, setLocaleValue, useLocale } from "./context";

  /** Override the locale, direction and/or UI messages for a subtree. */
  let {
    children,
    dir,
    locale,
    messages,
  }: LocaleConfig & { children?: Snippet } = $props();

  const parentLocale = useLocale();
  const resolved = $derived(
    resolveLocale({ dir, locale, messages }, parentLocale),
  );
  const value = setLocaleValue(createLocaleValue(() => resolved));
</script>

<LocaleProvider locale={value.locale}>
  <div
    data-part="locale"
    data-scope="provider"
    dir={value.dir}
    style="display: contents"
  >
    {@render children?.()}
  </div>
</LocaleProvider>
