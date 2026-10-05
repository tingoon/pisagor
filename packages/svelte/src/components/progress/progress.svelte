<script lang="ts">
import {
  Progress as ProgressPrimitive,
  type ProgressRootProps,
} from "@ark-ui/svelte/progress";
import type { ProgressProps as BaseProgressProps } from "@pisagor/props";
import { type ProgressRecipeSlot, progressRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import { setProgressContext } from "./progress.context";

type Props = Omit<ProgressRootProps, "children" | "value"> & {
  children?: Snippet;
  classNames?: Partial<Record<ProgressRecipeSlot, string>>;
  /**
   * Whether to show indeterminate progress.
   * @defaultValue false
   */
  indeterminate?: boolean;
  /** When true, renders the numeric value text beside the label. */
  isValueVisible?: boolean;
  /** Optional label rendered above the progress bar. */
  label?: string;
  /**
   * The value of the progress bar
   * @defaultValue 0
   */
  value?: number;
} & BaseProgressProps;

let {
  orientation = "horizontal",
  indeterminate = false,
  isValueVisible,
  value = 0,
  children,
  label,
  class: className,
  classNames,
  recipe = progressRecipe,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
const showHeader = $derived(Boolean(label || isValueVisible));

setProgressContext({
  get slots() {
    return slots;
  },
});
</script>

<ProgressPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  {orientation}
  value={indeterminate ? null : value}
>
  {#if showHeader}
    <div class={slots.header({ class: classNames?.header })}>
      {#if label}
        <span>{label}</span>
      {/if}
      {#if isValueVisible}
        <ProgressPrimitive.ValueText
          class={slots.value({ class: classNames?.value })}
        />
      {/if}
    </div>
  {/if}

  {@render children?.()}

  <ProgressPrimitive.Track class={slots.track({ class: classNames?.track })}>
    <ProgressPrimitive.Range
      class={slots.range({ class: classNames?.range })}
    />
  </ProgressPrimitive.Track>
</ProgressPrimitive.Root>
