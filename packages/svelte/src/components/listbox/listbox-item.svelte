<script lang="ts">
import {
  type ListboxItemProps as ArkListboxItemProps,
  Listbox as ListboxPrimitive,
} from "@ark-ui/svelte/listbox";
import type { ListboxItemProps as BaseListboxItemProps } from "@pisagor/props";
import { listboxItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { ListboxItemStylesContext } from "./listbox.context";

type Props = ArkListboxItemProps & BaseListboxItemProps;

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
