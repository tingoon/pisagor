import type {
  AspectRatioRootContract,
  AspectRatioContract,
} from "@pisagor/contracts";
import { aspectRatioRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

export type AspectRatioProps = ComponentProps<"div"> &
  AspectRatioRootContract &
  AspectRatioContract;

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
