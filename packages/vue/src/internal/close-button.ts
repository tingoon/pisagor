import { PhX } from "@phosphor-icons/vue";
import { buttonVariants } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import { h, type VNode } from "vue";

export function renderIconCloseButton(inlineClass: string): VNode {
  return h(
    "button",
    {
      "aria-label": "Close",
      class: cn(buttonVariants({ size: "icon-sm", variant: "ghost" }), inlineClass),
      type: "button",
    },
    () => h(PhX),
  );
}
