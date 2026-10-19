<script lang="ts">
  import { DotsThreeIcon } from "phosphor-svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { useBreadcrumb } from "./breadcrumb.context";

  let { class: className, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
  const styles = useBreadcrumb();
  const slots = $derived(styles.slots);
</script>

<span
  {...rest}
  aria-hidden="true"
  class={className}
  data-part="ellipsis"
  data-scope="breadcrumb"
  role="presentation"
>
  <DotsThreeIcon class={slots.ellipsis()} />
</span>
