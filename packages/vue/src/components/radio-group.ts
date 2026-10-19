import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/vue";
import type {
  RadioGroupItemControlProps,
  RadioGroupItemProps as RadioGroupItemPrimitiveProps,
  RadioGroupRootProps as RadioGroupRootPrimitiveProps,
} from "@ark-ui/vue";
import type {
  RadioGroupContract,
  RadioGroupItemRootContract,
  RadioGroupPresetItem as BaseRadioGroupPresetItem,
  RadioGroupRootContract,
} from "@pisagor/contracts";
import {
  fieldRecipe,
  radioGroupItemRecipe,
  radioGroupRecipe,
} from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "RadioGroup",
  recipe: radioGroupItemRecipe,
});
// #endregion

// #region Types
interface RadioGroupPresetItem extends Omit<BaseRadioGroupPresetItem, "label"> {
  label: VNodeChild;
}

export type RadioGroupRootProps = Omit<
  RadioGroupRootPrimitiveProps,
  "onValueChange"
> &
  RadioGroupRootContract & {
    onValueChange?: (value: string | null) => void;
  };

export interface RadioGroupProps
  extends Omit<RadioGroupRootProps, "children">, RadioGroupContract {
  items?: RadioGroupPresetItem[];
}

type RadioGroupItemProps = RadioGroupItemPrimitiveProps &
  RadioGroupItemRootContract;
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const Root = defineComponent({
  inheritAttrs: false,
  name: "RadioGroup.Root",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    onValueChange: {
      default: undefined,
      type: Function as PropType<RadioGroupRootProps["onValueChange"]>,
    },
    recipe: {
      default: radioGroupRecipe,
      type: Function as PropType<typeof radioGroupRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        RadioGroupPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: props.recipe({ class: props.class }),
          onValueChange: props.onValueChange
            ? (details: { value: string | null }) =>
                props.onValueChange?.(details.value)
            : undefined,
        },
        slots,
      );
  },
});

const Item = withProvider<RadioGroupItemProps>(RadioGroupPrimitive.Item, {
  name: "Item",
  slot: "base",
});

const ItemControl = withContext<RadioGroupItemControlProps>(
  RadioGroupPrimitive.ItemControl,
  {
    name: "ItemControl",
    slot: "control",
  },
);

const ItemText = defineComponent({
  inheritAttrs: false,
  name: "RadioGroup.ItemText",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        RadioGroupPrimitive.ItemText as ArkPart,
        {
          ...attrs,
          class: fieldRecipe().label({ class: props.class }),
        },
        slots,
      );
  },
});

const ItemHiddenInput = RadioGroupPrimitive.ItemHiddenInput;

const Label = defineComponent({
  inheritAttrs: false,
  name: "RadioGroup.Label",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        RadioGroupPrimitive.Label as ArkPart,
        {
          ...attrs,
          class: fieldRecipe().label({ class: props.class }),
        },
        slots,
      );
  },
});
// #endregion

// #region Shorthand
const RadioGroupShorthand = defineComponent({
  inheritAttrs: false,
  name: "RadioGroup",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    items: {
      default: () => [],
      type: Array as PropType<RadioGroupPresetItem[]>,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        Root,
        {
          ...attrs,
          class: props.class,
        },
        () =>
          props.items?.map((item) =>
            h(
              Item as ArkPart,
              {
                disabled: item.disabled,
                key: item.value,
                value: item.value,
              },
              () => [
                h(ItemControl),
                h(ItemText, null, () => item.label),
                h(ItemHiddenInput as ArkPart),
              ],
            ),
          ),
      );
  },
});
// #endregion

export type {
  RadioGroupItemControlProps,
  RadioGroupItemHiddenInputProps,
  RadioGroupItemTextProps,
  RadioGroupLabelProps,
} from "@ark-ui/vue";

export const RadioGroup = Object.assign(RadioGroupShorthand, {
  Item,
  ItemControl,
  ItemHiddenInput,
  ItemText,
  Label,
  Root,
});
