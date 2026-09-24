<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { dataListRecipe } from "@pisagor/recipes/data-list";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLDListElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  orientation?: "horizontal" | "vertical";
  recipe?: typeof dataListRecipe;
};

let {
  orientation = "horizontal",
  children,
  recipe = dataListRecipe,
  class: className,
  ...rest
}: Props = $props();
</script>

<Ark
  as="dl"
  {...rest}
  class={recipe({ class: cn(className) })}
  data-orientation={orientation}
  data-part="root"
  data-scope="data-list"
>
  {@render children?.()}
</Ark>
