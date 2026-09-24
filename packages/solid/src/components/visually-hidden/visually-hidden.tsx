import { ark } from "@ark-ui/solid/factory";
import { visuallyHiddenRecipe } from "@pisagor/recipes/visually-hidden";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface VisuallyHiddenProps extends ComponentProps<typeof ark.span> {
  recipe?: typeof visuallyHiddenRecipe;
}

export function VisuallyHidden(props: VisuallyHiddenProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "recipe"]);
  const recipeFn = () => local.recipe ?? visuallyHiddenRecipe;

  return (
    <ark.span
      {...rest}
      class={recipeFn()({ class: cn(local.class) })}
      data-part="root"
      data-scope="visually-hidden"
    />
  );
}
