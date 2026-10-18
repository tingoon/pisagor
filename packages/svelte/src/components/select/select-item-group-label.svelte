<script lang="ts">
  import {
    Select as SelectPrimitive,
    type SelectItemGroupLabelProps,
  } from "@ark-ui/svelte";
  import { selectRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useSelectRoot } from "./select.context";

  let {
    class: className,
    children,
    ...rest
  }: SelectItemGroupLabelProps = $props();
  const ctx = useSelectRoot();
  const slots = $derived(ctx?.slots ?? selectRecipe());
</script>

<SelectPrimitive.ItemGroupLabel
  {...rest}
  class={slots.itemGroupLabel({ class: cn(className) })}
>
  {@render children?.()}
</SelectPrimitive.ItemGroupLabel>
