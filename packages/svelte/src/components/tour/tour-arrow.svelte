<script lang="ts">
  import { Tour as TourPrimitive, type TourArrowProps } from "@ark-ui/svelte";
  import { withContext } from "./tour.context";
  import TourArrowTip from "./tour-arrow-tip.svelte";

  const ARROW_STYLE =
    "--arrow-background: var(--background); --arrow-size: calc(1.5 * var(--spacing));";

  let { children, style, ...rest }: TourArrowProps = $props();
  const part = withContext(
    () => ({ ...rest, style: style ? `${ARROW_STYLE} ${style}` : ARROW_STYLE }),
    { name: "Arrow" },
  );
</script>

<TourPrimitive.Arrow {...part.props}>
  {#if children}
    {@render children()}
  {:else}
    <TourArrowTip />
  {/if}
</TourPrimitive.Arrow>
