<script lang="ts">
  import { useLocaleContext } from "@ark-ui/svelte/locale";
  import type { Snippet } from "svelte";

  let {
    children,
    motion,
    part,
  }: { children?: Snippet; motion?: "disabled" | "enabled"; part: string } =
    $props();

  const locale = useLocaleContext();
</script>

<div
  data-motion={motion}
  data-part={part}
  data-scope="provider"
  dir={locale().dir}
  style="display: contents"
>
  {@render children?.()}
</div>
