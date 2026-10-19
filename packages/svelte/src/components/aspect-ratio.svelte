<script lang="ts">
  import type {
    AspectRatioRootContract,
    AspectRatioContract,
  } from "@pisagor/contracts";
  import { aspectRatioRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLElement> & {
    children?: import("svelte").Snippet;
  } & AspectRatioRootContract &
    AspectRatioContract;

  let {
    ratio,
    style,
    recipe = aspectRatioRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();
</script>

<div
  {...rest}
  class={recipe({ class: cn(className) })}
  data-part="root"
  data-scope="aspect-ratio"
  style={ratio === undefined ? style : `--ratio: ${ratio}; ${style ?? ""}`}
>
  {@render children?.()}
</div>
