<script lang="ts">
import type { ToggleGroupItemProps as ArkToggleGroupItemProps } from "@ark-ui/svelte/toggle-group";
import { ToggleGroup as ToggleGroupPrimitive } from "@ark-ui/svelte/toggle-group";
import { buttonRecipe } from "@pisagor/recipes/button";
import { toggleRecipe } from "@pisagor/recipes/toggle";
import { cn } from "@pisagor/utils";
import { useToggleGroup } from "./toggle-group.context";

type Props = Omit<ArkToggleGroupItemProps, "class"> & {
  class?: string | undefined;
};

let { value, class: className, children, ...rest }: Props = $props();

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
