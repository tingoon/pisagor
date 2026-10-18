<script lang="ts">
  import type { BreadcrumbProps as BaseBreadcrumbProps } from "@pisagor/props";
  import { breadcrumbRecipe } from "@pisagor/recipes";
  import type { HTMLAttributes } from "svelte/elements";
  import { useLocale } from "../provider/context";
  import { Context } from "./breadcrumb.context";

  const { m } = useLocale();

  type Props = HTMLAttributes<HTMLElement> & BaseBreadcrumbProps;

  let {
    "aria-label": ariaLabel = m("breadcrumb.label"),
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

<nav
  {...rest}
  aria-label={ariaLabel}
  class={className}
  data-part="root"
  data-scope="breadcrumb"
>
  {@render children?.()}
</nav>
