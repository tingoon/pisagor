<script lang="ts">
import type { ProgressRootProps } from "@ark-ui/svelte/progress";
import { Progress as ProgressPrimitive } from "@ark-ui/svelte/progress";
import {
  type CircularProgressRecipeSlot,
  circularProgressRecipe,
} from "@pisagor/recipes/circular-progress";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import { setCircularProgressContext } from "./circular-progress.context";
import CircularProgressTrack from "./circular-progress-track.svelte";

type Props = Omit<ProgressRootProps, "class" | "children" | "value"> & {
  children?: Snippet;
  class?: string | undefined;
  classNames?: Partial<Record<CircularProgressRecipeSlot, string>>;
  /**
   * Whether to show indeterminate progress.
   * @defaultValue false
   */
  indeterminate?: boolean;
  /** When true, renders the numeric value text centered inside the circle. */
  isValueVisible?: boolean;
  recipe?: typeof circularProgressRecipe;
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
  value?: number;
};

let {
  size = 32,
  indeterminate = false,
  isValueVisible,
  value,
  children,
  thickness = 4,
  class: className,
  classNames,
  recipe = circularProgressRecipe,
  ...rest
}: Props = $props();

const slots = $derived(recipe());

setCircularProgressContext({
  get slots() {
    return slots;
  },
});
</script>

<ProgressPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  value={indeterminate ? null : value}
>
  {#if isValueVisible}
    <span class={slots.valueWrapper({ class: cn(classNames?.valueWrapper) })}>
      <ProgressPrimitive.ValueText class={slots.value({ class: cn(classNames?.value) })} />
    </span>
  {/if}

  {@render children?.()}

  <CircularProgressTrack
    class={classNames?.track}
    rangeClassName={classNames?.range}
    {size}
    {thickness}
  />
</ProgressPrimitive.Root>
