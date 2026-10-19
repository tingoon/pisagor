import type {
  DataListContract,
  DataListItemContract,
  DataListItemRootContract,
  DataListPresetItem as BaseDataListPresetItem,
  DataListRootContract,
} from "@pisagor/contracts";
import { dataListItemRecipe, dataListRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "DataList",
  recipe: dataListItemRecipe,
});
// #endregion

// #region Types
interface DataListPresetItem extends Omit<
  BaseDataListPresetItem,
  "label" | "value"
> {
  label: VNodeChild;
  value: VNodeChild;
}

interface DataListRootProps extends DataListRootContract {
  /**
   * The orientation of the data list.
   *
   * @defaultValue "horizontal"
   */
  orientation?: "horizontal" | "vertical";
  class?: unknown;
}

export interface DataListProps
  extends
    Omit<DataListRootProps, "children">,
    DataListRootContract,
    DataListContract {
  items?: DataListPresetItem[];
}

export interface DataListItemProps
  extends DataListItemRootContract, DataListItemContract {
  class?: unknown;
  value?: VNodeChild;
}
// #endregion

// #region Parts
export const DataListRoot = defineComponent({
  inheritAttrs: false,
  name: "DataList.Root",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    orientation: {
      default: "horizontal",
      type: String as PropType<DataListRootProps["orientation"]>,
    },
    recipe: {
      default: dataListRecipe,
      type: Function as PropType<typeof dataListRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "dl",
        {
          ...attrs,
          class: props.recipe({ class: props.class }),
          "data-orientation": props.orientation,
          "data-part": "root",
          "data-scope": "data-list",
        },
        slots.default?.(),
      );
  },
});

const DataListItemRoot = withProvider("div", {
  defaultProps: { "data-part": "item" },
  name: "Item",
  slot: "base",
});

const DataListItemLabel = withContext("dt", {
  defaultProps: { "data-part": "item-label" },
  name: "ItemLabel",
  slot: "label",
});

const DataListItemValue = withContext("dd", {
  defaultProps: { "data-part": "item-value" },
  name: "ItemValue",
  slot: "value",
});

export const DataListItem = defineComponent({
  inheritAttrs: false,
  name: "DataList.Item",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<DataListItemProps["classNames"]>,
    },
    value: {
      default: undefined,
      type: [String, Number, Boolean, Object, Array] as PropType<VNodeChild>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const label = slots.default?.();

      return h(DataListItemRoot, { ...attrs, class: props.class }, () => [
        label !== undefined
          ? h(
              DataListItemLabel,
              { class: props.classNames?.label },
              () => label,
            )
          : null,
        props.value !== undefined
          ? h(
              DataListItemValue,
              { class: props.classNames?.value },
              () => props.value,
            )
          : null,
      ]);
    };
  },
});

export const DataListShorthand = defineComponent({
  inheritAttrs: false,
  name: "DataList",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    items: {
      default: undefined,
      type: Array as PropType<DataListPresetItem[]>,
    },
    orientation: {
      default: "horizontal",
      type: String as PropType<DataListRootProps["orientation"]>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        DataListRoot,
        {
          ...attrs,
          class: props.class,
          orientation: props.orientation,
        },
        () =>
          props.items?.map((item, index) =>
            h(
              DataListItem,
              { key: index, value: item.value },
              () => item.label,
            ),
          ),
      );
  },
});
// #endregion

export const DataList = Object.assign(DataListShorthand, {
  Item: DataListItem,
  Root: DataListRoot,
});
