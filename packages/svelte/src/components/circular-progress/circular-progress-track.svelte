<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { useProgressContext } from "@ark-ui/svelte/progress";
import type { SVGAttributes } from "svelte/elements";
import { useCircularProgress } from "./circular-progress.context";

type Props = {
  class?: string;
  rangeClassName?: string;
  size?: number;
  thickness?: number;
  trackProps?: Omit<
    SVGAttributes<SVGSVGElement>,
    "class" | "height" | "viewBox" | "width"
  >;
};

let {
  size = 32,
  thickness = 4,
  rangeClassName,
  trackProps,
  class: className,
}: Props = $props();

const styles = useCircularProgress();
const progress = useProgressContext();

const metrics = $derived.by(() => {
  const { max, min, value } = progress();
  const radius = size / 2 - thickness / 2;
  const circumference = 2 * Math.PI * radius;
  const range = Math.max(max - min, 1);
  const normalizedValue =
    value == null ? min : Math.min(Math.max(value, min), max);
  const percent = (normalizedValue - min) / range;
  const dashOffset = circumference * (1 - percent);
  return { circumference, dashOffset, radius, value };
});
</script>

<Ark
  as="svg"
  {...trackProps}
  aria-hidden="true"
  class={styles.slots.track({ class: className })}
  data-part="circle"
  data-scope="circular-progress"
  height={size}
  viewBox={`0 0 ${size} ${size}`}
  width={size}
>
  <circle
    cx={size / 2}
    cy={size / 2}
    data-part="track-bg"
    data-scope="circular-progress"
    r={metrics.radius}
    stroke-width={thickness}
  ></circle>
  <circle
    class={styles.slots.range({ class: rangeClassName })}
    cx={size / 2}
    cy={size / 2}
    data-part="range"
    data-scope="circular-progress"
    r={metrics.radius}
    stroke-dasharray={metrics.circumference}
    stroke-dashoffset={metrics.value == null
      ? metrics.circumference * 0.7
      : metrics.dashOffset}
    stroke-linecap="round"
    stroke-width={thickness}
  ></circle>
</Ark>
