<script lang="ts">
  import {
    Slider as SliderPrimitive,
    type SliderRootProps,
  } from "@ark-ui/svelte";
  import type { SliderRootContract } from "@pisagor/contracts";

  import { withProvider } from "./slider.context";

  type Props = SliderRootProps & SliderRootContract;

  let {
    children,
    value = $bindable<number[] | undefined>(undefined),
    ...rest
  }: Props = $props();

  const root = withProvider(() => rest, { name: "Root" });
</script>

<SliderPrimitive.Root {...root.props} bind:value>
  {@render children?.()}
</SliderPrimitive.Root>
