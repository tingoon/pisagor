import { PhX } from "@phosphor-icons/vue";
import { buttonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { h, type VNode } from "vue";

/**
 * Renders an icon-only close button.
 *
 * @defaultValue buttonRecipe — for the `recipe` parameter
 * @param ariaLabel - Accessible label, e.g. `m("dialog.close")`.
 * @param inlineClass - Extra classes for the button.
 * @param recipe - Style recipe. Defaults to `buttonRecipe` from
 *   `@pisagor/recipes/button`.
 */
export function renderIconCloseButton(
  ariaLabel: string,
  inlineClass: string,
  recipe: typeof buttonRecipe = buttonRecipe,
): VNode {
  return h(
    "button",
    {
      "aria-label": ariaLabel,
      class: cn(
        recipe({ size: "icon-sm", variant: "ghost" }).base(),
        inlineClass,
      ),
      type: "button",
    },
    h(PhX),
  );
}
