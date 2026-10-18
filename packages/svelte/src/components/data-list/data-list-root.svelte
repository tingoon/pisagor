<script lang="ts">
  import type { DataListRootContract } from "@pisagor/props";
  import { dataListRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLDListElement> & {
    children?: import("svelte").Snippet;
    orientation?: "horizontal" | "vertical";
  } & DataListRootContract;

  let {
    orientation = "horizontal",
    children,
    recipe = dataListRecipe,
    class: className,
    ...rest
  }: Props = $props();
</script>

<dl
  {...rest}
  class={recipe({ class: cn(className) })}
  data-orientation={orientation}
  data-part="root"
  data-scope="data-list"
>
  {@render children?.()}
</dl>
