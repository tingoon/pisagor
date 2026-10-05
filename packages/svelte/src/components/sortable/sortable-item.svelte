<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { SortableItemProps as BaseSortableItemProps } from "@pisagor/props";
import { sortableItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setSortableItemContext, useSortable } from "./sortable.context";

type Props = HTMLAttributes<HTMLLIElement> & {
  value: string;
} & BaseSortableItemProps;

let {
  value,
  children,
  recipe = sortableItemRecipe,
  class: className,
  ...rest
}: Props = $props();

const sortable = useSortable();
const itemProps = $derived(sortable.getItemProps(value));
const isDragging = $derived(sortable.activeId === value);
const slots = $derived(recipe());

setSortableItemContext({
  get id() {
    return value;
  },
  get isDragging() {
    return isDragging;
  },
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="li"
  {...rest}
  {...itemProps}
  class={slots.base({ class: cn(className), disabled: sortable.disabled })}
  data-part="item"
  data-scope="sortable"
>
  {@render children?.()}
</Ark>
