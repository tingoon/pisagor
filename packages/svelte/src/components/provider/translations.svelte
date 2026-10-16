<script lang="ts">
import type { Snippet } from "svelte";
import { setTranslationsConfig, type TranslationsConfig } from "./context";

/** Override only translations for a subtree. */
let {
  children,
  translations,
}: { children?: Snippet; translations?: TranslationsConfig } = $props();

setTranslationsConfig(translations);
</script>

{@render children?.()}
