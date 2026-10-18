import type { SeparatorRootContract } from "@pisagor/props";
import { separatorRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { ClassValue } from "../internal";

export interface SeparatorProps extends SeparatorRootContract {
  class?: unknown;
  dataPart?: string;
  dataScope?: string;
  orientation?: "horizontal" | "vertical";
  /**
   * Purely visual separator: hidden from assistive tech (`role="none"`).
   *
   * @defaultValue false
   */
  decorative?: boolean;
}

export const Separator = defineComponent({
  inheritAttrs: false,
  name: "PisagorSeparator",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    dataPart: { default: "root", type: String },
    dataScope: { default: "separator", type: String },
    decorative: { default: false, type: Boolean },
    orientation: {
      default: "horizontal",
      type: String as PropType<"horizontal" | "vertical">,
    },
    recipe: {
      default: separatorRecipe,
      type: Function as PropType<typeof separatorRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h("div", {
        ...attrs,
        "aria-orientation": props.decorative ? undefined : props.orientation,
        class: cn(props.recipe(), props.class),
        "data-orientation": props.orientation,
        "data-part": props.dataPart,
        "data-scope": props.dataScope,
        role: props.decorative ? "none" : "separator",
      });
  },
});
