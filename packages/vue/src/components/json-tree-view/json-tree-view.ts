import { JsonTreeView as JsonTreeViewPrimitive } from "@ark-ui/vue/json-tree-view";
import { PhCaretRight } from "@phosphor-icons/vue";
import { type JsonTreeViewSlots, jsonTreeViewRecipe } from "@pisagor/recipes/json-tree-view";
import { defineComponent, h, type PropType } from "vue";
import type { VariantClassNames } from "../../internal/types";

// #region Types
type JsonTreeViewClassNames = VariantClassNames<JsonTreeViewSlots>;

type JsonTreeViewRenderValue = (props: { node: unknown }) => unknown;

export interface JsonTreeViewProps {
  class?: unknown;
  /** Slot class names */
  classNames?: JsonTreeViewClassNames;
  data: object;
  defaultExpandedDepth?: number;
  lazyMount?: boolean;
  renderValue?: JsonTreeViewRenderValue;
  /** Extra props forwarded to the json tree view tree element */
  treeProps?: Record<string, unknown>;
  unmountOnExit?: boolean;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Component
export const JsonTreeView = defineComponent({
  inheritAttrs: false,
  name: "PisagorJsonTreeView",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<JsonTreeViewClassNames> },
    data: { required: true, type: Object as PropType<object> },
    defaultExpandedDepth: { default: undefined, type: Number },
    lazyMount: { default: true, type: Boolean },
    renderValue: { default: undefined, type: Function as PropType<JsonTreeViewRenderValue> },
    treeProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs }) {
    return () => {
      const slots_ = jsonTreeViewRecipe();

      return h(
        JsonTreeViewPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: slots_.base({ class: props.class }),
          data: props.data,
          defaultExpandedDepth: props.defaultExpandedDepth,
          lazyMount: props.lazyMount,
          unmountOnExit: props.unmountOnExit,
        },
        () =>
          h(
            JsonTreeViewPrimitive.Tree as ArkPart,
            {
              ...props.treeProps,
              class: slots_.tree({ class: props.classNames?.tree }),
            },
            {
              arrow: () => h(PhCaretRight),
              renderValue: props.renderValue,
            },
          ),
      );
    };
  },
});
// #endregion
