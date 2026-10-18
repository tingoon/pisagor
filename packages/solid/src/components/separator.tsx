import type { SeparatorRootContract } from "@pisagor/props";
import { separatorRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { splitProps } from "solid-js";

export interface SeparatorProps
  extends ComponentProps<"div">, SeparatorRootContract {
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
    <div
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
