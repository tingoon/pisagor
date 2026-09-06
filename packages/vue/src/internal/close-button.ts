import { PhX } from "@phosphor-icons/vue";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import { h, type VNode } from "vue";

/**
 * Renders an icon-only close button.
 *
 * @param inlineClass - Extra classes for the button.
 * @param recipe - Style recipe. Defaults to `buttonRecipe` from `@pisagor/recipes/button`.
 *
 * @defaultValue buttonRecipe — for the `recipe` parameter
 */
export function renderIconCloseButton(
  inlineClass: string,
  recipe: typeof buttonRecipe = buttonRecipe,
): VNode {
  return h(
    "button",
    {
      "aria-label": "Close",
      class: cn(recipe({ size: "icon-sm", variant: "ghost" }).base(), inlineClass),
      type: "button",
    },
    () => h(PhX),
  );
}
