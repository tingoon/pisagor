<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { breadcrumbItemRecipe } from "@pisagor/recipes/breadcrumb";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setBreadcrumbItemContext } from "./breadcrumb.context";

type Props = Omit<HTMLAttributes<HTMLLIElement>, "class"> & {
  class?: string | undefined;
  itemRecipe?: typeof breadcrumbItemRecipe;
};

let { children, itemRecipe = breadcrumbItemRecipe, class: className, ...rest }: Props = $props();

const slots = $derived(itemRecipe());
setBreadcrumbItemContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="li"
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-part="item"
  data-scope="breadcrumb"
>
  {@render children?.()}
</Ark>
