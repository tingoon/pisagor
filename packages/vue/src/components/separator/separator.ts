import { separatorVariants } from "@pisagor/styles/ui/separator";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";

export interface SeparatorProps extends WithTestId {
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
    testId: String,
  },
  setup(props, { attrs }) {
    return () =>
      h("div", {
        ...attrs,
        "aria-orientation": props.orientation,
        class: cn(separatorVariants(), props.class),
        "data-orientation": props.orientation,
        "data-part": props.dataPart,
        "data-scope": props.dataScope,
        "data-testid": props.testId,
        role: "separator",
      });
  },
});
