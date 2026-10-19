import { JsonTreeView as JsonTreeViewPrimitive } from "@ark-ui/vue";
import { PhCaretRight } from "@phosphor-icons/vue";
import type {
  JsonTreeViewContract,
  JsonTreeViewRootContract,
} from "@pisagor/contracts";
import { jsonTreeViewRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "JsonTreeView",
  recipe: jsonTreeViewRecipe,
});
// #endregion

// #region Types

type JsonTreeViewRenderValue = (props: { node: unknown }) => unknown;

export interface JsonTreeViewProps
  extends JsonTreeViewRootContract, JsonTreeViewContract {
  class?: unknown;
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
const JsonTreeViewRoot = withProvider<JsonTreeViewRootContract>(
  JsonTreeViewPrimitive.Root,
  {
    name: "Root",
    slot: "base",
  },
);

const JsonTreeViewTree = withContext(JsonTreeViewPrimitive.Tree, {
  name: "Tree",
});
// #endregion

// #region Closed
const JsonTreeViewShorthand = defineComponent({
  inheritAttrs: false,
  name: "JsonTreeView",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<JsonTreeViewProps["classNames"]>,
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

export const JsonTreeView = Object.assign(JsonTreeViewShorthand, {
  Root: JsonTreeViewRoot,
  Tree: JsonTreeViewTree,
});
