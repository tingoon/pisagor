import {
  Highlight as HighlightPrimitive,
  type HighlightProps as HighlightPrimitiveProps,
} from "@ark-ui/solid/highlight";
import type { HighlightProps as BaseHighlightProps } from "@pisagor/props";
import { highlightRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface HighlightProps
  extends HighlightPrimitiveProps,
    BaseHighlightProps {}

export function Highlight(props: HighlightProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "class"]);
  return (
    <HighlightPrimitive
      {...rest}
      class={(local.recipe ?? highlightRecipe)({ class: local.class })}
    />
  );
}
