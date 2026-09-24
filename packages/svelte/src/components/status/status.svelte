<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { statusRecipe } from "@pisagor/recipes/status";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  recipe?: typeof statusRecipe;
  size?: import("@pisagor/recipes/status").StatusVariantProps["size"];
  variant?: import("@pisagor/recipes/status").StatusVariantProps["variant"];
};

let { recipe = statusRecipe, class: className, children, size, variant, ...rest }: Props = $props();
</script>

<Ark
  as="span"
  {...rest}
  class={recipe({ class: cn(className), size, variant })}
  data-part="indicator"
  data-scope="status"
  data-size={size}
>
  {@render children?.()}
</Ark>
