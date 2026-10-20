<script lang="ts">
  import {
    Popover as PopoverPrimitive,
    type PopoverArrowProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./popover.context";
  import PopoverArrowTip from "./popover-arrow-tip.svelte";

  const ARROW_STYLE =
    "--arrow-background: var(--popover); --arrow-size: calc(1.5 * var(--spacing));";

  let { children, style, ...rest }: PopoverArrowProps = $props();
  const part = withContext(
    () => ({ ...rest, style: style ? `${ARROW_STYLE} ${style}` : ARROW_STYLE }),
    { name: "Arrow" },
  );
</script>

<PopoverPrimitive.Arrow {...part.props}>
  {#if children}
    {@render children()}
  {:else}
    <PopoverArrowTip />
  {/if}
</PopoverPrimitive.Arrow>
