import { PhX } from "@phosphor-icons/vue";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import { h, type VNode } from "vue";

export function renderIconCloseButton(inlineClass: string): VNode {
  return h(
    "button",
    {
      "aria-label": "Close",
      class: cn(buttonRecipe({ size: "icon-sm", variant: "ghost" }).base(), inlineClass),
      type: "button",
    },
    () => h(PhX),
  );
}
