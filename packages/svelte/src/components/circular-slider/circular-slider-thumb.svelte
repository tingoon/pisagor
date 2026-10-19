<script lang="ts">
  import {
    AngleSlider as AngleSliderPrimitive,
    type AngleSliderThumbProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useCircularSlider } from "./circular-slider.context";

  let {
    children,
    class: className,
    style,
    ...rest
  }: AngleSliderThumbProps = $props();
  const ctx = useCircularSlider();
  const halfThumb = $derived(ctx.thumbSize / 2);
</script>

<!-- Thumb positioned on the ring; renders its handle unless you pass children. -->
<AngleSliderPrimitive.Thumb
  {...rest}
  class={ctx.slots.thumb({ class: cn(className) })}
  style={`--size: ${ctx.thumbSize}px; ${style ?? ""}`}
>
  {#if children}
    {@render children()}
  {:else}
    <span
      class={ctx.slots.thumbHandle()}
      style={`inset-block-start: calc(50% - ${ctx.ringRadius}px - ${halfThumb}px); inset-inline-start: calc(50% - ${halfThumb}px);`}
    ></span>
  {/if}
</AngleSliderPrimitive.Thumb>
