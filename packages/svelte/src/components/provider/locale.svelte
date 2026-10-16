<script lang="ts">
import { LocaleProvider } from "@ark-ui/svelte/locale";
import type { Snippet } from "svelte";
import { setLocaleConfig } from "./context";
import ProviderDir from "./dir.svelte";

/** Override only the locale (and Ark-derived `dir`) for a subtree. */
let { children, locale }: { children?: Snippet; locale?: string } = $props();

const config = setLocaleConfig({ locale });
</script>

<LocaleProvider locale={config.locale}>
  <ProviderDir part="locale">{@render children?.()}</ProviderDir>
</LocaleProvider>
