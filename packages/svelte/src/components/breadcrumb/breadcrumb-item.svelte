<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { BreadcrumbItemProps as BreadcrumbItemSharedProps } from "@pisagor/props";
import { breadcrumbItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setBreadcrumbItemContext } from "./breadcrumb.context";

type Props = Omit<HTMLAttributes<HTMLLIElement>, "class"> &
  {
  class?: string | undefined;
  } & BreadcrumbItemSharedProps;

let { children, recipe = breadcrumbItemRecipe, class: className, ...rest }: Props = $props();

const slots = $derived(recipe());
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
