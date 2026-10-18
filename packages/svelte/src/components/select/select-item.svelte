<script lang="ts">
  import {
    Select as SelectPrimitive,
    type SelectItemProps,
  } from "@ark-ui/svelte";
  import { selectRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import CheckIcon from "phosphor-svelte/lib/CheckIcon";
  import { useSelectRoot } from "./select.context";

  let { class: className, children, ...rest }: SelectItemProps = $props();
  const ctx = useSelectRoot();
  const slots = $derived(ctx?.slots ?? selectRecipe());
</script>

<SelectPrimitive.Item {...rest} class={slots.item({ class: cn(className) })}>
  <SelectPrimitive.ItemText class={slots.itemText()}>
    {@render children?.()}
  </SelectPrimitive.ItemText>
  <span class={slots.itemIndicator()}>
    <SelectPrimitive.ItemIndicator>
      <CheckIcon />
    </SelectPrimitive.ItemIndicator>
  </span>
</SelectPrimitive.Item>
