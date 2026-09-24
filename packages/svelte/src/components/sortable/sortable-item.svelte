<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { sortableItemRecipe } from "@pisagor/recipes/sortable";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setSortableItemContext, useSortable } from "./sortable.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  class?: string | undefined;
  itemRecipe?: typeof sortableItemRecipe;
  value: string;
};

let {
  value,
  children,
  itemRecipe = sortableItemRecipe,
  class: className,
  ...rest
}: Props = $props();

const sortable = useSortable();
const itemProps = $derived(sortable.getItemProps(value));
const isDragging = $derived(sortable.activeId === value);
const slots = $derived(itemRecipe());

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
  as="div"
  {...rest}
  {...itemProps}
  class={slots.base({ class: cn(className) })}
  data-part="item"
  data-scope="sortable"
  role="listitem"
>
  {@render children?.()}
</Ark>
