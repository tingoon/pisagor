<script lang="ts">
import type { ListboxItemProps as ArkListboxItemProps } from "@ark-ui/svelte/listbox";
import { Listbox as ListboxPrimitive } from "@ark-ui/svelte/listbox";
import type { ListboxItemProps as ListboxItemSharedProps } from "@pisagor/props";
import { listboxItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setListboxItemContext } from "./listbox.context";

type Props = Omit<ArkListboxItemProps, "class"> &
  {
    class?: string | undefined;
  } & ListboxItemSharedProps;

let {
  variant = "default",
  recipe = listboxItemRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();

const slots = $derived(recipe({ variant }));
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
