import { JsonTreeView as JsonTreeViewPrimitive } from "@ark-ui/vue/json-tree-view";
import { PhCaretRight } from "@phosphor-icons/vue";
import type { JsonTreeViewProps as BaseJsonTreeViewProps } from "@pisagor/props";
import {
  type JsonTreeViewRecipeSlot,
  jsonTreeViewRecipe,
} from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "JsonTreeView",
  recipe: jsonTreeViewRecipe,
});
// #endregion

// #region Types
type JsonTreeViewClassNames = VariantClassNames<JsonTreeViewRecipeSlot>;

type JsonTreeViewRenderValue = (props: { node: unknown }) => unknown;

export interface JsonTreeViewProps extends BaseJsonTreeViewProps {
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

// #region Parts
const JsonTreeViewRoot = withProvider(JsonTreeViewPrimitive.Root, {
  name: "Root",
  slot: "base",
});

const JsonTreeViewTree = withContext(JsonTreeViewPrimitive.Tree, {
  name: "Tree",
});
// #endregion

// #region Closed
export const JsonTreeView = defineComponent({
  inheritAttrs: false,
  name: "JsonTreeView",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<JsonTreeViewClassNames>,
    },
    data: { required: true, type: Object as PropType<object> },
    defaultExpandedDepth: { default: undefined, type: Number },
    lazyMount: { default: true, type: Boolean },
    recipe: {
      default: undefined,
      type: Function as PropType<typeof jsonTreeViewRecipe>,
    },
    renderValue: {
      default: undefined,
      type: Function as PropType<JsonTreeViewRenderValue>,
    },
    treeProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    unmountOnExit: { default: true, type: Boolean },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        JsonTreeViewRoot,
        {
          ...attrs,
          class: props.class,
          data: props.data,
          defaultExpandedDepth: props.defaultExpandedDepth,
          lazyMount: props.lazyMount,
          recipe: props.recipe,
          unmountOnExit: props.unmountOnExit,
        },
        () =>
          h(
            JsonTreeViewTree,
            { ...props.treeProps, class: props.classNames?.tree },
            {
              arrow: () => h(PhCaretRight),
              renderValue: props.renderValue,
            },
          ),
      );
  },
});
// #endregion
