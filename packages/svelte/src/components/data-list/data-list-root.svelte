<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { DataListProps as BaseDataListProps } from "@pisagor/props";
import { dataListRecipe } from "@pisagor/recipes";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLDListElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  orientation?: "horizontal" | "vertical";
} & BaseDataListProps;

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
  class={recipe({ class: className })}
  data-orientation={orientation}
  data-part="root"
  data-scope="data-list"
>
  {@render children?.()}
</Ark>
