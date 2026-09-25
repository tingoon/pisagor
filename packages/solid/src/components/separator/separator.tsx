import { ark } from "@ark-ui/solid/factory";
import { separatorRecipe } from "@pisagor/recipes/separator";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface SeparatorProps extends ComponentProps<typeof ark.div> {
  recipe?: typeof separatorRecipe;
  orientation?: "horizontal" | "vertical";
}

export function Separator(props: SeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "recipe", "orientation"]);
  const recipeFn = () => local.recipe ?? separatorRecipe;

  return (
    <ark.div
      {...rest}
      aria-orientation={local.orientation ?? "horizontal"}
      class={recipeFn()({ class: cn(local.class) })}
      data-orientation={local.orientation ?? "horizontal"}
      data-part="root"
      data-scope="separator"
      role="separator"
    />
  );
}
