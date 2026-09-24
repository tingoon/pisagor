<script lang="ts">
import type { ListboxItemProps as ArkListboxItemProps } from "@ark-ui/svelte/listbox";
import { Listbox as ListboxPrimitive } from "@ark-ui/svelte/listbox";
import { type ListboxItemVariantProps, listboxItemRecipe } from "@pisagor/recipes/listbox";
import { cn } from "@pisagor/utils";
import { setListboxItemContext } from "./listbox.context";

type Props = Omit<ArkListboxItemProps, "class"> &
  ListboxItemVariantProps & {
    class?: string | undefined;
    itemRecipe?: typeof listboxItemRecipe;
  };

let {
  variant = "default",
  itemRecipe = listboxItemRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();

const slots = $derived(itemRecipe({ variant }));
setListboxItemContext({
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
