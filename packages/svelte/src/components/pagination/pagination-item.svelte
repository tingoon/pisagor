<script lang="ts">
  import {
    Pagination as PaginationPrimitive,
    type PaginationItemProps,
  } from "@ark-ui/svelte";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./pagination.context";

  let { class: className, children, ...rest }: PaginationItemProps = $props();
  const styles = useStyles();
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
