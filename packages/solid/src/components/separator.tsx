import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type { SeparatorProps as BaseSeparatorProps } from "@pisagor/props";
import { separatorRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface SeparatorProps
  extends HTMLArkProps<"div">, BaseSeparatorProps {
  orientation?: "horizontal" | "vertical";
  /**
   * Purely visual separator: hidden from assistive tech (`role="none"`).
   *
   * @defaultValue false
   */
  decorative?: boolean;
}

export function Separator(props: SeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "class",
    "recipe",
    "orientation",
    "decorative",
  ]);
  const recipeFn = () => local.recipe ?? separatorRecipe;

  return (
    <ark.div
      {...rest}
      aria-orientation={
        local.decorative ? undefined : (local.orientation ?? "horizontal")
      }
      class={recipeFn()({ class: local.class })}
      data-orientation={local.orientation ?? "horizontal"}
      data-part="root"
      data-scope="separator"
      role={local.decorative ? "none" : "separator"}
    />
  );
}
