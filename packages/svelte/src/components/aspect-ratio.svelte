<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { AspectRatioProps as BaseAspectRatioProps } from "@pisagor/props";
import { aspectRatioRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = HTMLAttributes<HTMLElement> & {
  children?: import("svelte").Snippet;
  /**
   * Width divided by height, e.g. `16 / 9`. Overrides the `--ratio` CSS variable.
   *
   * @defaultValue 1
   */
  ratio?: number;
} & BaseAspectRatioProps;

let {
  ratio,
  style,
  recipe = aspectRatioRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
</script>

<Ark
  as="div"
  {...rest}
  class={recipe({ class: cn(className) })}
  data-part="root"
  data-scope="aspect-ratio"
  style={ratio === undefined ? style : `--ratio: ${ratio}; ${style ?? ""}`}
>
  {@render children?.()}
</Ark>
