<script lang="ts">
import type { ToggleGroupRootProps as ArkToggleGroupRootProps } from "@ark-ui/svelte/toggle-group";
import { ToggleGroup as ToggleGroupPrimitive } from "@ark-ui/svelte/toggle-group";
import type { ToggleGroupProps as ToggleGroupSharedProps } from "@pisagor/props";
import { type ButtonVariantProps, type ToggleVariantProps, toggleGroupRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setToggleGroupContext } from "./toggle-group.context";

type Props = Omit<ArkToggleGroupRootProps, "class" | "onValueChange" | "style"> &
  {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  onValueChange?: (value: string[]) => void;
  size?: NonNullable<ToggleVariantProps["size"]>;
  spacing?: number;
  variant?: Extract<ButtonVariantProps["variant"], "outline" | "ghost">;
  style?: string | undefined;
  } & ToggleGroupSharedProps;

let {
  orientation = "horizontal",
  size = "md",
  variant = "ghost",
  multiple = true,
  children,
  spacing = 0,
  onValueChange,
  recipe = toggleGroupRecipe,
  class: className,
  style,
  ...rest
}: Props = $props();

const slots = $derived(recipe({ orientation }));

setToggleGroupContext({
  get size() {
    return size;
  },
  get slots() {
    return slots;
  },
  get spacing() {
    return spacing;
  },
  get variant() {
    return variant;
  },
});

function handleValueChange(
  details: Parameters<NonNullable<ArkToggleGroupRootProps["onValueChange"]>>[0],
) {
  onValueChange?.(details.value);
}

const mergedStyle = $derived([style, `--gap: ${spacing}`].filter(Boolean).join("; "));
</script>

<ToggleGroupPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  {multiple}
  onValueChange={onValueChange ? handleValueChange : undefined}
  {orientation}
  style={mergedStyle}
>
  {@render children?.()}
</ToggleGroupPrimitive.Root>
