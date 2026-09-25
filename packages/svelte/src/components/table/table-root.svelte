<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { tableRecipe } from "@pisagor/recipes/table";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setTableContext } from "./table.context";

type Props = Omit<HTMLAttributes<HTMLTableElement>, "class"> & {
  class?: string | undefined;
  isHoverable?: boolean;
  recipe?: typeof tableRecipe;
  variant?: "plain" | "striped";
};

let {
  variant = "plain",
  isHoverable = true,
  recipe = tableRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
setTableContext({
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
