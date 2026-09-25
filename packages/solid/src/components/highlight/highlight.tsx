import {
  Highlight as HighlightPrimitive,
  type HighlightProps as HighlightPrimitiveProps,
} from "@ark-ui/solid/highlight";
import { highlightRecipe } from "@pisagor/recipes/highlight";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface HighlightProps extends HighlightPrimitiveProps {
  recipe?: typeof highlightRecipe;
}

export function Highlight(props: HighlightProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);
  return (
    <HighlightPrimitive
      {...rest}
      class={(local.recipe ?? highlightRecipe)({ class: cn(local.class) })}
    />
  );
}
