<script lang="ts">
  import {
    Drawer as DrawerPrimitive,
    type DrawerRootProps,
  } from "@ark-ui/svelte";
  import type { DrawerRootContract } from "@pisagor/contracts";
  import { withProvider } from "./drawer.context";

  /**
   * `placement` is not a prop: it always follows `swipeDirection` so the slide
   * animation and rounded edge match the dismiss gesture.
   */
  type Props = DrawerRootProps & Omit<DrawerRootContract, "placement">;

  const SWIPE_DIRECTION_TO_PLACEMENT = {
    down: "bottom",
    end: "right",
    start: "left",
    up: "top",
  } as const;

  let { swipeDirection = "down", children, ...rest }: Props = $props();
  const root = withProvider(
    () => ({
      ...rest,
      placement: SWIPE_DIRECTION_TO_PLACEMENT[swipeDirection],
      swipeDirection,
    }),
    { name: "Root" },
  );
</script>

<DrawerPrimitive.Root {...root.props}>
  {@render children?.()}
</DrawerPrimitive.Root>
