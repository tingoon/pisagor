import { ark } from "@ark-ui/vue/factory";
import {
  type DataListItemRecipeSlot,
  dataListItemRecipe,
  dataListRecipe,
} from "@pisagor/recipes/data-list";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { VariantClassNames } from "../../internal/types";

// #region Types
interface DataListPresetItem {
  label: VNodeChild;
  value: VNodeChild;
}

type DataListClassNames = VariantClassNames<DataListItemRecipeSlot>;

type ArkPart = Parameters<typeof h>[0];

interface DataListRootProps {
  /**
   * The orientation of the data list.
   *
   * @defaultValue "horizontal"
   */
  orientation?: "horizontal" | "vertical";
  class?: unknown;
}

export interface DataListProps extends Omit<DataListRootProps, "children"> {
  items?: DataListPresetItem[];
}

export interface DataListItemLabelProps {
  /**
   * Style recipe. Defaults to `dataListItemRecipe` from `@pisagor/recipes/data-list-item`.
   *
   * @defaultValue dataListItemRecipe
   */
  itemRecipe?: typeof dataListItemRecipe;
  /**
   * Style recipe. Defaults to `dataListRecipe` from `@pisagor/recipes/data-list`.
   *
   * @defaultValue dataListRecipe
   */
  recipe?: typeof dataListRecipe;
  class?: unknown;
}
// #endregion

// #region Parts
export const DataListRoot = defineComponent({
  inheritAttrs: false,
  name: "DataListRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
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
        ark.dl,
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

export const DataListItemLabel = defineComponent({
  inheritAttrs: false,
  name: "DataListItemLabel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: dataListItemRecipe,
      type: Function as PropType<typeof dataListItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots_ = props.itemRecipe();

      return h(
        ark.dt,
        {
          ...attrs,
          class: slots_.label({ class: props.class }),
          "data-part": "item-label",
          "data-scope": "data-list",
        },
        slots.default?.(),
      );
    };
  },
});

export const DataListItemValue = defineComponent({
  inheritAttrs: false,
  name: "DataListItemValue",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    itemRecipe: {
      default: dataListItemRecipe,
      type: Function as PropType<typeof dataListItemRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots_ = props.itemRecipe();

      return h(
        ark.dd,
        {
          ...attrs,
          class: slots_.value({ class: props.class }),
          "data-part": "item-value",
          "data-scope": "data-list",
        },
        slots.default?.(),
      );
    };
  },
});

export const DataListItem = defineComponent({
  inheritAttrs: false,
  name: "DataListItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: { default: undefined, type: Object as PropType<DataListClassNames> },
    itemRecipe: {
      default: dataListItemRecipe,
      type: Function as PropType<typeof dataListItemRecipe>,
    },
    value: {
      default: undefined,
      type: [String, Number, Boolean, Object, Array] as PropType<VNodeChild>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slots_ = props.itemRecipe();

      const label = slots.default?.();

      return h(
        ark.div,
        {
          ...attrs,
          class: slots_.base({ class: props.class }),
          "data-part": "item",
          "data-scope": "data-list",
        },
        () => [
          label !== undefined
            ? h(
                DataListItemLabel as ArkPart,
                { class: props.classNames?.label } as unknown as Parameters<typeof h>[1],
                () => label,
              )
            : null,
          props.value !== undefined
            ? h(
                DataListItemValue as ArkPart,
                { class: props.classNames?.value } as unknown as Parameters<typeof h>[1],
                () => props.value,
              )
            : null,
        ],
      );
    };
  },
});

export const DataListShorthand = defineComponent({
  inheritAttrs: false,
  name: "DataListShorthand",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    items: { default: undefined, type: Array as PropType<DataListPresetItem[]> },
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
            h(DataListItem, { key: index, value: item.value }, () => item.label),
          ),
      );
  },
});
// #endregion
