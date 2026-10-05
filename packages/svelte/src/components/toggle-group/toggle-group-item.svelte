<script lang="ts">
import {
  type ToggleGroupItemProps as ArkToggleGroupItemProps,
  ToggleGroup as ToggleGroupPrimitive,
} from "@ark-ui/svelte/toggle-group";
import { buttonRecipe, toggleRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useToggleGroup } from "./toggle-group.context";

let {
  value,
  class: className,
  children,
  ...rest
}: ArkToggleGroupItemProps = $props();

const ctx = useToggleGroup();
</script>

<ToggleGroupPrimitive.Item
  {...rest}
  class={cn(
    buttonRecipe({ clickEffect: false, variant: ctx.variant }).base(),
    toggleRecipe({ size: ctx.size }),
    ctx.slots.item({ class: cn(className) }),
  )}
  data-spacing={ctx.spacing}
  data-variant={ctx.variant}
  {value}
>
  {@render children?.()}
</ToggleGroupPrimitive.Item>
