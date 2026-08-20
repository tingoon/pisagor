import { JsonTreeView as JsonTreeViewPrimitive } from "@ark-ui/vue/json-tree-view";
import { PhCaretRight } from "@phosphor-icons/vue";
import { type JsonTreeViewSlots, jsonTreeViewVariants } from "@pisagor/styles/ui/json-tree-view";
import { defineComponent, h, type PropType } from "vue";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Types
type JsonTreeViewClassNames = VariantClassNames<JsonTreeViewSlots>;

type JsonTreeViewRenderValue = (props: { node: unknown }) => unknown;

export interface JsonTreeViewProps extends WithTestId {
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

// #region Part
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
    testId: String,
    treeProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs }) {
    return () => {
      const slots_ = jsonTreeViewVariants();

      return h(
        JsonTreeViewPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: slots_.base({ class: props.class }),
          data: props.data,
          "data-testid": props.testId,
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
