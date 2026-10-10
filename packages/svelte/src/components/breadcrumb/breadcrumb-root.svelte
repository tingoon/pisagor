<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { BreadcrumbProps as BaseBreadcrumbProps } from "@pisagor/props";
import { breadcrumbRecipe } from "@pisagor/recipes";
import type { HTMLAttributes } from "svelte/elements";
import { Context } from "./breadcrumb.context";

type Props = HTMLAttributes<HTMLElement> & BaseBreadcrumbProps;

let {
  "aria-label": ariaLabel = "Breadcrumb",
  children,
  recipe = breadcrumbRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
Context.set({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="nav"
  {...rest}
  aria-label={ariaLabel}
  class={className}
  data-part="root"
  data-scope="breadcrumb"
>
  {@render children?.()}
</Ark>
