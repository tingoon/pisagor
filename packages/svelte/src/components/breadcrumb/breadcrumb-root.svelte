<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import type { BreadcrumbProps as BaseBreadcrumbProps } from "@pisagor/props";
  import { breadcrumbRecipe } from "@pisagor/recipes";
  import type { HTMLAttributes } from "svelte/elements";
  import { useMessageResolver } from "../provider/context";
  import { Context } from "./breadcrumb.context";

  const t = useMessageResolver();

  type Props = HTMLAttributes<HTMLElement> & BaseBreadcrumbProps;

  let {
    "aria-label": ariaLabel = t("breadcrumb.label"),
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
