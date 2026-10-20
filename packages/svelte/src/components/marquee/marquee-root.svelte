<script lang="ts">
  import {
    Marquee as MarqueePrimitive,
    type MarqueeRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type { MarqueeRootContract } from "@pisagor/contracts";
  import { withProvider } from "./marquee.context";

  type Props = Omit<ArkRootProps, "side"> & {
    /** @defaultValue "horizontal" */
    orientation?: "horizontal" | "vertical";
  } & Omit<MarqueeRootContract, "items">;

  /**
   * Root; maps `orientation` to the Ark `side` and sets spacing / speed
   * defaults.
   */
  let {
    orientation = "horizontal",
    children,
    spacing = "calc(var(--spacing) * 4)",
    speed = 50,
    ...rest
  }: Props = $props();
  const side = $derived<"start" | "bottom">(
    orientation === "horizontal" ? "start" : "bottom",
  );
  const root = withProvider(
    () => ({
      ...rest,
      "data-orientation": orientation,
      side,
      spacing,
      speed,
    }),
    { name: "Root" },
  );
</script>

<MarqueePrimitive.Root {...root.props}>
  {@render children?.()}
</MarqueePrimitive.Root>
