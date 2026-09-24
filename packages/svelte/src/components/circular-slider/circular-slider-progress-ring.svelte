<script lang="ts">
import { useAngleSliderContext } from "@ark-ui/svelte/angle-slider";
import { useCircularSlider } from "./circular-slider.context";

const api = useAngleSliderContext();
const ctx = useCircularSlider();

const percent = $derived(api().value / 360);
const dashLength = $derived(percent * ctx.ringCircumference);
const gapLength = $derived(ctx.ringCircumference - dashLength);
const center = $derived(ctx.size / 2);
</script>

<svg
  aria-hidden="true"
  class={ctx.slots.ring()}
  height={ctx.size}
  viewBox={`0 0 ${ctx.size} ${ctx.size}`}
  width={ctx.size}
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
