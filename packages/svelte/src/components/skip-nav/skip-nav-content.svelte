<script lang="ts">
  import type { SkipNavRootContract } from "@pisagor/contracts";
  import { skipNavRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  const SKIP_NAV_ID = "skip-nav-content";

  type Props = Omit<HTMLAttributes<HTMLDivElement>, "id"> & {
    children?: import("svelte").Snippet;
    id?: string;
  } & SkipNavRootContract;

  let {
    id = SKIP_NAV_ID,
    recipe = skipNavRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();

  const slots = $derived(recipe());
</script>

<div
  {...rest}
  class={slots.content({ class: cn(className) })}
  data-part="content"
  data-scope="skip-nav"
  {id}
  tabindex={-1}
>
  {@render children?.()}
</div>
