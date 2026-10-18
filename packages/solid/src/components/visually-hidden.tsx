import type { VisuallyHiddenRootContract } from "@pisagor/props";
import { visuallyHiddenRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface VisuallyHiddenProps
  extends ComponentProps<"span">, VisuallyHiddenRootContract {}

export function VisuallyHidden(props: VisuallyHiddenProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "recipe"]);
  const recipeFn = () => local.recipe ?? visuallyHiddenRecipe;

  return (
    <span
      {...rest}
      class={recipeFn()({ class: local.class })}
      data-part="root"
      data-scope="visually-hidden"
    />
  );
}
