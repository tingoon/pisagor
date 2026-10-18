import type { AspectRatioProps as BaseAspectRatioProps } from "@pisagor/props";
import { aspectRatioRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface AspectRatioProps
  extends ComponentProps<"div">, BaseAspectRatioProps {
  /**
   * Width divided by height, e.g. `16 / 9`. Overrides the `--ratio` CSS
   * variable.
   *
   * @defaultValue 1
   */
  ratio?: number;
}

export function AspectRatio(props: AspectRatioProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "class",
    "recipe",
    "ratio",
    "style",
  ]);
  const recipeFn = () => local.recipe ?? aspectRatioRecipe;

  return (
    <div
      {...rest}
      class={recipeFn()({ class: local.class })}
      data-part="root"
      data-scope="aspect-ratio"
      style={
        local.ratio === undefined
          ? local.style
          : typeof local.style === "string"
            ? `--ratio: ${local.ratio}; ${local.style}`
            : { "--ratio": String(local.ratio), ...local.style }
      }
    />
  );
}
