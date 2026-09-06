import { separatorRecipe } from "@pisagor/recipes/separator";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";

export interface SeparatorProps {
  /**
   * Style recipe. Defaults to `separatorRecipe` from `@pisagor/recipes/separator`.
   *
   * @defaultValue separatorRecipe
   */
  recipe?: typeof separatorRecipe;
  class?: unknown;
  dataPart?: string;
  dataScope?: string;
  orientation?: "horizontal" | "vertical";
}

export const Separator = defineComponent({
  inheritAttrs: false,
  name: "PisagorSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    dataPart: { default: "root", type: String },
    dataScope: { default: "separator", type: String },
    orientation: { default: "horizontal", type: String as PropType<"horizontal" | "vertical"> },
    recipe: {
      default: separatorRecipe,
      type: Function as PropType<typeof separatorRecipe>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h("div", {
        ...attrs,
        "aria-orientation": props.orientation,
        class: cn(props.recipe(), props.class),
        "data-orientation": props.orientation,
        "data-part": props.dataPart,
        "data-scope": props.dataScope,
        role: "separator",
      });
  },
});
