<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import type { TableProps as BaseTableProps } from "@pisagor/props";
  import { tableRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import type { SizeScaleProps } from "../../internal";
  import { Context } from "./table.context";

  type Props = HTMLAttributes<HTMLTableElement> & {
    isHoverable?: boolean;
    variant?: "plain" | "striped";
  } & BaseTableProps &
    SizeScaleProps;

  let {
    variant = "plain",
    isHoverable = true,
    size = "md",
    recipe = tableRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();

  const slots = $derived(recipe({ size }));
  Context.set({
    get slots() {
      return slots;
    },
  });
</script>

<div class={slots.wrapper()} data-part="wrapper" data-scope="table">
  <Ark
    as="table"
    {...rest}
    class={slots.base({ class: cn(className) })}
    data-hoverable={isHoverable}
    data-part="root"
    data-scope="table"
    data-variant={variant}
  >
    {@render children?.()}
  </Ark>
</div>
