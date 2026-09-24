<script lang="ts">
import type { PaginationItemProps } from "@ark-ui/svelte/pagination";
import { Pagination as PaginationPrimitive } from "@ark-ui/svelte/pagination";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import { usePagination } from "./pagination.context";

type Props = Omit<PaginationItemProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = usePagination();
</script>

<PaginationPrimitive.Item
  {...rest}
  class={cn(buttonRecipe({ size: "icon-md", variant: "ghost" }).base(), slots.item({ class: cn(className) }))}
>
  {@render children?.()}
</PaginationPrimitive.Item>
