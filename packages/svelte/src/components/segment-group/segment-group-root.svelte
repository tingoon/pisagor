<script lang="ts">
import type { SegmentGroupRootProps as ArkRootProps } from "@ark-ui/svelte/segment-group";
import { SegmentGroup as SegmentGroupPrimitive } from "@ark-ui/svelte/segment-group";
import type { SegmentGroupProps as SegmentGroupSharedProps } from "@pisagor/props";
import { segmentGroupRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setSegmentGroupContext } from "./segment-group.context";
import SegmentGroupIndicator from "./segment-group-indicator.svelte";

type SegmentGroupVariant = "default" | "underline";

type Props = Omit<ArkRootProps, "class" | "onValueChange"> &
  {
  class?: string | undefined;
  onValueChange?: (value: string | null) => void;
  variant?: SegmentGroupVariant;
  } & SegmentGroupSharedProps;

let {
  orientation = "horizontal",
  variant = "default",
  children,
  onValueChange,
  recipe = segmentGroupRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
setSegmentGroupContext({
  get slots() {
    return slots;
  },
});

function handleValueChange(details: Parameters<NonNullable<ArkRootProps["onValueChange"]>>[0]) {
  onValueChange?.(details.value);
}
</script>

<SegmentGroupPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-variant={variant}
  onValueChange={onValueChange ? handleValueChange : undefined}
  {orientation}
>
  <SegmentGroupIndicator />
  {@render children?.()}
</SegmentGroupPrimitive.Root>
