<script lang="ts">
import type {
  ProgressRangeProps,
  ProgressRootProps,
  ProgressTrackProps,
  ProgressValueTextProps,
} from "@ark-ui/svelte/progress";
import type { ProgressProps as BaseProgressProps } from "@pisagor/props";
import type { ProgressRecipeSlot } from "@pisagor/recipes";
import type { Snippet } from "svelte";
import type { VariantClassNames } from "../../internal/types";
import { Field } from "../field";
import ProgressHeader from "./progress-header.svelte";
import ProgressRange from "./progress-range.svelte";
import ProgressRoot from "./progress-root.svelte";
import ProgressTrack from "./progress-track.svelte";
import ProgressValue from "./progress-value.svelte";

type Props = Omit<ProgressRootProps, "children" | "value"> & {
  children?: Snippet;
  /** Slot class names */
  classNames?: VariantClassNames<ProgressRecipeSlot>;
  /**
   * Whether to show indeterminate progress.
   * @defaultValue false
   */
  indeterminate?: boolean;
  /** When true, renders the numeric value text beside the label. */
  isValueVisible?: boolean;
  /** Optional label rendered above the progress bar. */
  label?: string;
  /** Extra props forwarded to the progress range element */
  rangeProps?: Omit<ProgressRangeProps, "children" | "class">;
  /** Extra props forwarded to the progress track element */
  trackProps?: Omit<ProgressTrackProps, "children" | "class">;
  /**
   * The value of the progress bar
   * @defaultValue 0
   */
  value?: number;
  /** Extra props forwarded to the progress value text element */
  valueProps?: Omit<ProgressValueTextProps, "children" | "class">;
} & BaseProgressProps;

let {
  orientation = "horizontal",
  indeterminate = false,
  isValueVisible,
  defaultValue = 0,
  value,
  children,
  label,
  rangeProps,
  trackProps,
  valueProps,
  classNames,
  ...rest
}: Props = $props();

const showHeader = $derived(Boolean(label || isValueVisible));
</script>

<ProgressRoot
  {...rest}
  {defaultValue}
  {orientation}
  value={indeterminate ? null : value}
>
  {#if showHeader}
    <ProgressHeader class={classNames?.header}>
      {#if label}
        <Field.Label>{label}</Field.Label>
      {/if}
      {#if isValueVisible}
        <Field.Label>
          {#snippet asChild(
            props,
          )}
            <ProgressValue
              {...props({ ...valueProps, class: classNames?.value })}
            />
          {/snippet}
        </Field.Label>
      {/if}
    </ProgressHeader>
  {/if}

  {@render children?.()}

  <ProgressTrack {...trackProps} class={classNames?.track}>
    <ProgressRange {...rangeProps} class={classNames?.range} />
  </ProgressTrack>
</ProgressRoot>
