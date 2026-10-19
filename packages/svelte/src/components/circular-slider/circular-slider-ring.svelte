<script lang="ts">
  import { useAngleSliderContext } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import type { SVGAttributes } from "svelte/elements";
  import { useCircularSlider } from "./circular-slider.context";

  type Props = Omit<SVGAttributes<SVGSVGElement>, "children">;

  let { class: className, ...rest }: Props = $props();
  const api = useAngleSliderContext();
  const ctx = useCircularSlider();

  const dashLength = $derived((api().value / 360) * ctx.ringCircumference);
  const gapLength = $derived(ctx.ringCircumference - dashLength);
  const center = $derived(ctx.size / 2);
</script>

<!-- SVG progress ring (track + range) sized from the root geometry. -->
<svg
  aria-hidden="true"
  height={ctx.size}
  viewBox={`0 0 ${ctx.size} ${ctx.size}`}
  width={ctx.size}
  {...rest}
  class={ctx.slots.ring({ class: cn(className) })}
  data-part="ring"
  data-scope="circular-slider"
>
  <circle
    class={ctx.slots.ringTrack()}
    cx={center}
    cy={center}
    fill="transparent"
    r={ctx.ringRadius}
    stroke-width={ctx.thickness}
  />
  <circle
    class={ctx.slots.ringRange()}
    cx={center}
    cy={center}
    fill="transparent"
    r={ctx.ringRadius}
    stroke-dasharray={`${dashLength} ${gapLength}`}
    stroke-width={ctx.thickness}
  />
</svg>
