<script lang="ts">
import {
  type PaginationItemProps,
  Pagination as PaginationPrimitive,
} from "@ark-ui/svelte/pagination";
import { buttonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { usePagination } from "./pagination.context";

let { class: className, children, ...rest }: PaginationItemProps = $props();
const styles = usePagination();
const slots = $derived(styles.slots);
</script>

<PaginationPrimitive.Item
  {...rest}
  class={cn(
    buttonRecipe({ size: "icon-md", variant: "ghost" }).base(),
    slots.item({ class: cn(className) }),
  )}
>
  {@render children?.()}
</PaginationPrimitive.Item>
