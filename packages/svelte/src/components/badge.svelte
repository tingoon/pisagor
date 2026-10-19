<script lang="ts">
  import type { BadgeRootContract } from "@pisagor/contracts";
  import { badgeRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLSpanElement> & {
    children?: import("svelte").Snippet;
  } & BadgeRootContract;

  let {
    pill = false,
    size = "md",
    variant = "default",
    recipe = badgeRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();
</script>

<span
  {...rest}
  class={recipe({ class: cn(className), pill, size, variant })}
  data-part="root"
  data-scope="badge"
  data-size={size}
  data-variant={variant}
>
  {@render children?.()}
</span>
