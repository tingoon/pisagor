<script lang="ts">
import type { ProgressRootProps } from "@ark-ui/svelte/progress";
import { Progress as ProgressPrimitive } from "@ark-ui/svelte/progress";
import { type ProgressRecipeSlot, progressRecipe } from "@pisagor/recipes/progress";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import { setProgressContext } from "./progress.context";

type Props = Omit<ProgressRootProps, "class" | "children" | "value"> & {
  children?: Snippet;
  class?: string | undefined;
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
  recipe?: typeof progressRecipe;
  /**
   * The value of the progress bar
   * @defaultValue 0
   */
  value?: number;
};

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
    <div class={slots.header({ class: cn(classNames?.header) })}>
      {#if label}
        <span>{label}</span>
      {/if}
      {#if isValueVisible}
        <ProgressPrimitive.ValueText class={slots.value({ class: cn(classNames?.value) })} />
      {/if}
    </div>
  {/if}

  {@render children?.()}

  <ProgressPrimitive.Track class={slots.track({ class: cn(classNames?.track) })}>
    <ProgressPrimitive.Range class={slots.range({ class: cn(classNames?.range) })} />
  </ProgressPrimitive.Track>
</ProgressPrimitive.Root>
