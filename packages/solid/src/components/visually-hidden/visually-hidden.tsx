import { ark } from "@ark-ui/solid/factory";
import type { VisuallyHiddenProps as VisuallyHiddenSharedProps } from "@pisagor/props";
import { visuallyHiddenRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface VisuallyHiddenProps
  extends ComponentProps<typeof ark.span>,
    VisuallyHiddenSharedProps {}

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
