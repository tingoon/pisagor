<script lang="ts">
import {
  type ProgressRootProps,
  type ProgressValueTextProps,
  useProgress,
} from "@ark-ui/svelte/progress";
import type { CircularProgressProps as BaseCircularProgressProps } from "@pisagor/props";
import type { CircularProgressRecipeSlot } from "@pisagor/recipes";
import type { Snippet } from "svelte";
import type { SVGAttributes } from "svelte/elements";
import type { VariantClassNames } from "../../internal/types";
import { getProgressbarProps } from "./circular-progress.context";
import CircularProgressRoot from "./circular-progress-root.svelte";
import CircularProgressTrack from "./circular-progress-track.svelte";
import CircularProgressValue from "./circular-progress-value.svelte";
import CircularProgressValueWrapper from "./circular-progress-value-wrapper.svelte";

type Props = Omit<ProgressRootProps, "children"> & {
  children?: Snippet;
  /** Slot class names */
  classNames?: VariantClassNames<CircularProgressRecipeSlot>;
  /**
   * Whether to show indeterminate progress.
   * @defaultValue false
   */
  indeterminate?: boolean;
  /** When true, renders the numeric value text centered inside the circle. */
  isValueVisible?: boolean;
  /**
   * Visual size preset for the progress circle.
   * @defaultValue 32
   */
  size?: number;
  /**
   * Stroke thickness in pixels.
   * @defaultValue 4
   */
  thickness?: number;
  /** Extra props forwarded to the circular progress track element */
  trackProps?: Omit<
    SVGAttributes<SVGSVGElement>,
    "class" | "height" | "viewBox" | "width"
  >;
  /** Extra props forwarded to the circular progress value element */
  valueProps?: Omit<ProgressValueTextProps, "children" | "class">;
} & BaseCircularProgressProps;

let {
  size = 32,
  indeterminate = false,
  isValueVisible,
  children,
  thickness = 4,
  trackProps,
  valueProps,
  classNames,
  defaultValue,
  formatOptions,
  id,
  ids,
  locale,
  max,
  min,
  onValueChange,
  orientation,
  translations,
  value,
  ...rest
}: Props = $props();

const fallbackId = $props.id();
const progress = useProgress(() => ({
  defaultValue,
  formatOptions,
  id: id ?? fallbackId,
  ids,
  locale,
  max,
  min,
  onValueChange,
  orientation,
  translations,
  value: indeterminate ? null : value,
}));
</script>

<CircularProgressRoot
  {...rest}
  {...getProgressbarProps(progress())}
  value={progress}
>
  {#if isValueVisible}
    <CircularProgressValueWrapper class={classNames?.valueWrapper}>
      <CircularProgressValue {...valueProps} class={classNames?.value} />
    </CircularProgressValueWrapper>
  {/if}

  {@render children?.()}

  <CircularProgressTrack
    class={classNames?.track}
    rangeClassName={classNames?.range}
    {size}
    {thickness}
    {trackProps}
  />
</CircularProgressRoot>
