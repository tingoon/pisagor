<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { BadgeProps as BaseBadgeProps } from "@pisagor/props";
import { badgeRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLSpanElement>, "class"> &
  {
    children?: import("svelte").Snippet;
    class?: string | undefined;
  } & BaseBadgeProps;

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

<Ark
  as="span"
  {...rest}
  class={recipe({ class: cn(className), pill, size, variant })}
  data-part="root"
  data-scope="badge"
  data-size={size}
  data-variant={variant}
>
  {@render children?.()}
</Ark>
