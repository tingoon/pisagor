<script lang="ts">
  import {
    Listbox as ListboxPrimitive,
    type ListboxItemProps as ArkListboxItemProps,
  } from "@ark-ui/svelte";
  import type {
    ListboxItemRootContract,
    ListboxItemContract,
  } from "@pisagor/props";
  import { listboxItemRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { ListboxItemStylesContext } from "./listbox.context";

  type Props = ArkListboxItemProps &
    ListboxItemRootContract &
    ListboxItemContract;

  let {
    variant = "default",
    recipe = listboxItemRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();

  const slots = $derived(recipe({ variant }));
  ListboxItemStylesContext.set({
    get slots() {
      return slots;
    },
  });
</script>

<ListboxPrimitive.Item
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-variant={variant}
>
  {@render children?.()}
</ListboxPrimitive.Item>
