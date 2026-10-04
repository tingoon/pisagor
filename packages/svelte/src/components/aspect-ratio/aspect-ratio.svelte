<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { AspectRatioProps as BaseAspectRatioProps } from "@pisagor/props";
import { aspectRatioRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> &
  {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  } & BaseAspectRatioProps;

let { recipe = aspectRatioRecipe, class: className, children, ...rest }: Props = $props();
</script>

<Ark
  as="div"
  {...rest}
  class={recipe({ class: cn(className) })}
  data-part="root"
  data-scope="aspect-ratio"
>
  {@render children?.()}
</Ark>
