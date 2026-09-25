<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { separatorRecipe } from "@pisagor/recipes/separator";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  recipe?: typeof separatorRecipe;
  orientation?: "horizontal" | "vertical";
};

let {
  recipe = separatorRecipe,
  class: className,
  children,
  orientation = "horizontal",
  ...rest
}: Props = $props();
</script>

<Ark
  as="div"
  {...rest}
  aria-orientation={orientation}
  class={recipe({ class: cn(className) })}
  data-orientation={orientation}
  data-part="root"
  data-scope="separator"
  role="separator"
>
  {@render children?.()}
</Ark>
