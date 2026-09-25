<script lang="ts">
import type { AngleSliderThumbProps } from "@ark-ui/svelte/angle-slider";
import { AngleSlider as AngleSliderPrimitive } from "@ark-ui/svelte/angle-slider";
import { cn } from "@pisagor/utils";
import { useCircularSlider } from "./circular-slider.context";

type Props = Omit<AngleSliderThumbProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { thumbSize, ringRadius, slots } = useCircularSlider();
const halfThumb = $derived(thumbSize / 2);
</script>

<AngleSliderPrimitive.Thumb
  {...rest}
  class={slots.thumb({ class: cn(className) })}
  style={`--size: ${thumbSize}px;`}
>
  <span
    class={slots.thumbHandle()}
    style={`inset-block-start: calc(50% - ${ringRadius}px - ${halfThumb}px); inset-inline-start: calc(50% - ${halfThumb}px);`}
  ></span>
</AngleSliderPrimitive.Thumb>
