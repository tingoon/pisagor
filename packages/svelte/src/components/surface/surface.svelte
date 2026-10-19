<script lang="ts">
  import type { SurfaceRootContract } from "@pisagor/contracts";
  import { surfaceRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import {
    type SurfaceVariant,
    setSurfaceContext,
    useSurface,
  } from "./surface.context";

  const AUTO_VARIANTS = [
    "default",
    "secondary",
    "tertiary",
    "tertiary",
  ] as const satisfies readonly SurfaceVariant[];

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  } & SurfaceRootContract;

  let {
    bordered = false,
    rounded = true,
    variant: variantProp,
    children,
    padding,
    recipe = surfaceRecipe,
    class: className,
    ...rest
  }: Props = $props();

  const parent = useSurface();

  const surface = $derived.by(() => {
    const depth = parent ? parent.depth + 1 : 0;
    const variant =
      variantProp ??
      AUTO_VARIANTS[Math.min(depth, AUTO_VARIANTS.length - 1)] ??
      "default";

    return { depth, variant };
  });

  setSurfaceContext({
    get depth() {
      return surface.depth;
    },
    get variant() {
      return surface.variant;
    },
  });
</script>

<div
  {...rest}
  class={recipe({
    bordered,
    class: cn(className),
    padding,
    rounded,
    variant: surface.variant,
  })}
  data-depth={surface.depth}
  data-part="root"
  data-scope="surface"
  data-variant={surface.variant}
>
  {@render children?.()}
</div>
