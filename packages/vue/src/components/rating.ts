import { RatingGroup as RatingGroupPrimitive } from "@ark-ui/vue";
import type {
  RatingGroupControlProps,
  RatingGroupItemProps,
  RatingGroupRootProps,
} from "@ark-ui/vue";
import { PhStar } from "@phosphor-icons/vue";
import type { RatingContract, RatingRootContract } from "@pisagor/contracts";
import { ratingRecipe } from "@pisagor/recipes";
import { type Component, defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Rating",
  recipe: ratingRecipe,
});
// #endregion

// #region Types
type RatingControlProps = RatingGroupControlProps;

type RatingItemProps = RatingGroupItemProps;

type RatingIndicatorProps = {
  class?: ClassValue;
  half?: boolean;
  highlighted?: boolean;
};

type RatingRootProps = RatingGroupRootProps & RatingRootContract;

export interface RatingProps
  extends Omit<RatingRootProps, "children" | "onValueChange">, RatingContract {
  defaultValue?: number;
  value?: number;
  icon?: Component;
  onValueChange?: (value: number) => void;
  /** Extra props forwarded to the rating control element */
  controlProps?: Omit<RatingControlProps, "children" | "class">;
  /** Extra props forwarded to each rating item indicator element */
  indicatorProps?: Omit<RatingIndicatorProps, "children" | "class">;
  /** Extra props forwarded to each rating item element */
  itemProps?: Omit<RatingItemProps, "children" | "index" | "class">;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const Root = withProvider<RatingRootProps>(RatingGroupPrimitive.Root, {
  name: "Root",
});

const Control = withContext<RatingControlProps>(RatingGroupPrimitive.Control, {
  name: "Control",
});

const Item = withContext<RatingItemProps>(RatingGroupPrimitive.Item, {
  name: "Item",
});

const Indicator = withContext<RatingIndicatorProps>("span", {
  name: "Indicator",
  part: "item-indicator",
});
// #endregion

// #region Closed
const RatingShorthand = defineComponent({
  inheritAttrs: false,
  name: "Rating",
  props: {
    allowHalf: { default: false, type: Boolean },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<RatingProps["classNames"]>,
    },
    controlProps: {
      default: undefined,
      type: Object as PropType<RatingProps["controlProps"]>,
    },
    count: { default: 5, type: Number },
    defaultValue: { default: undefined, type: Number },
    disabled: { default: undefined, type: Boolean },
    icon: {
      default: undefined,
      type: [Object, Function] as PropType<Component>,
    },
    indicatorProps: {
      default: undefined,
      type: Object as PropType<RatingProps["indicatorProps"]>,
    },
    itemProps: {
      default: undefined,
      type: Object as PropType<RatingProps["itemProps"]>,
    },
    onValueChange: {
      default: undefined,
      type: Function as PropType<RatingProps["onValueChange"]>,
    },
    readOnly: { default: undefined, type: Boolean },
    value: { default: undefined, type: Number },
  },
  setup(props, { attrs }) {
    return () => {
      const icon = props.icon ?? PhStar;

      return h(
        Root,
        {
          ...attrs,
          allowHalf: props.allowHalf,
          class: props.class as string | undefined,
          count: props.count,
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          modelValue: props.value,
          onValueChange: props.onValueChange
            ? (details: { value: number }) =>
                props.onValueChange?.(details.value)
            : undefined,
          readOnly: props.readOnly,
        },
        () =>
          h(
            Control,
            { ...props.controlProps, class: props.classNames?.control },
            () => [
              ...Array.from({ length: props.count }, (_, i) => i + 1).map(
                (index) =>
                  h(
                    Item,
                    {
                      ...props.itemProps,
                      class: props.classNames?.item,
                      index,
                      key: index,
                    },
                    () =>
                      h(RatingGroupPrimitive.ItemContext as ArkPart, null, {
                        default: (itemState: {
                          half: boolean;
                          highlighted: boolean;
                        }) =>
                          h(
                            Indicator,
                            {
                              ...props.indicatorProps,
                              class: props.classNames?.indicator,
                              half: itemState.half,
                              highlighted: itemState.highlighted,
                            },
                            () => [
                              h(icon as ArkPart, {
                                "aria-hidden": true,
                                "data-bg": "",
                              }),
                              h(icon as ArkPart, {
                                "aria-hidden": true,
                                "data-fg": "",
                                weight: "fill",
                              }),
                            ],
                          ),
                      }),
                  ),
              ),
              h(RatingGroupPrimitive.HiddenInput as ArkPart),
            ],
          ),
      );
    };
  },
});
// #endregion

export const Rating = Object.assign(RatingShorthand, {
  Context: RatingGroupPrimitive.Context,
  Control,
  HiddenInput: RatingGroupPrimitive.HiddenInput,
  Indicator,
  Item,
  ItemContext: RatingGroupPrimitive.ItemContext,
  Root,
});
