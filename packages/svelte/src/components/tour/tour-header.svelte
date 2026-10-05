<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";

let {
  children,
  class: className,
  ...rest
}: HTMLAttributes<HTMLDivElement> = $props();
</script>

<Ark as="div" {...rest} class={className} data-part="header" data-scope="tour">
  {@render children?.()}
</Ark>
