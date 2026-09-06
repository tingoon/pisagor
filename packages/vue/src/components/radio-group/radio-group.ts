import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/vue/radio-group";
import { formControlRadioToggleRecipe } from "@pisagor/recipes/form-control";
import { radioGroupItemRecipe, radioGroupRecipe } from "@pisagor/recipes/radio-group";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { FieldLabel } from "../field/field";

type FormControlVariant = "primary" | "secondary";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface RadioGroupPresetItem {
  disabled?: boolean;
  label: VNodeChild;
  value: string;
}

export interface RadioGroupRootProps {
  /**
   * Style recipe. Defaults to `radioGroupRecipe` from `@pisagor/recipes/radio-group`.
   *
   * @defaultValue radioGroupRecipe
   */
  recipe?: typeof radioGroupRecipe;
  class?: unknown;
  defaultValue?: string | null;
  disabled?: boolean;
  name?: string;
  onValueChange?: (value: string | null) => void;
  orientation?: "horizontal" | "vertical";
  value?: string | null;
}

export interface RadioGroupProps extends Omit<RadioGroupRootProps, "class"> {
  items?: RadioGroupPresetItem[];
}

export interface RadioGroupItemProps {
  /**
   * Style recipe. Defaults to `radioGroupItemRecipe` from `@pisagor/recipes/radio-group-item`.
   *
   * @defaultValue radioGroupItemRecipe
   */
  itemRecipe?: typeof radioGroupItemRecipe;
  class?: unknown;
  disabled?: boolean;
  tabIndex?: number;
  value: string;
  variant?: FormControlVariant;
}
// #endregion

// #region Parts
export const RadioGroupRoot = defineComponent({
  inheritAttrs: false,
  name: "RadioGroupRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    defaultValue: { default: undefined, type: [String, null] as PropType<string | null> },
    disabled: { default: undefined, type: Boolean },
    name: { default: undefined, type: String },
    onValueChange: {
      default: undefined,
      type: Function as PropType<RadioGroupRootProps["onValueChange"]>,
    },
    orientation: { default: undefined, type: String as PropType<"horizontal" | "vertical"> },
    recipe: {
      default: radioGroupRecipe,
      type: Function as PropType<typeof radioGroupRecipe>,
    },
    value: { default: undefined, type: [String, null] as PropType<string | null> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        RadioGroupPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(props.recipe(), props.class),
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          modelValue: props.value,
          name: props.name,
          onValueChange: props.onValueChange
            ? (details: { value: string | null }) => props.onValueChange?.(details.value)
            : undefined,
          orientation: props.orientation,
        },
        slots,
      );
  },
});

export const RadioGroupItem = defineComponent({
  inheritAttrs: false,
  name: "RadioGroupItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    disabled: { default: undefined, type: Boolean },
    itemRecipe: {
      default: radioGroupItemRecipe,
      type: Function as PropType<typeof radioGroupItemRecipe>,
    },
    tabIndex: { default: undefined, type: Number },
    value: { required: true, type: String },
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
  },
  setup(props, { attrs, slots: children }) {
    return () => {
      const resolved = {
        surfaceVariant: undefined,
        variant: props.variant ?? ("primary" as FormControlVariant),
      };
      const shellArgs = { variant: resolved.variant };
      const controlProps = { "data-variant": resolved.variant };
      const slots = props.itemRecipe();

      return h(
        RadioGroupPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: slots.base({ class: props.class }),
          disabled: props.disabled,
          value: props.value,
        },
        () => [
          h(RadioGroupPrimitive.ItemControl as ArkPart, {
            ...controlProps,
            class: cn(formControlRadioToggleRecipe({ ...shellArgs }), slots.control()),
          }),
          h(RadioGroupItemText as ArkPart, null, children.default),
          h(RadioGroupPrimitive.ItemHiddenInput as ArkPart, { tabIndex: props.tabIndex }),
        ],
      );
    };
  },
});

export const RadioGroupItemText = defineComponent({
  inheritAttrs: false,
  name: "RadioGroupItemText",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(FieldLabel as ArkPart, { asChild: true }, () =>
        h(
          RadioGroupPrimitive.ItemText as ArkPart,
          {
            ...(attrs as object),
            class: props.class,
          },
          slots,
        ),
      );
  },
});

export const RadioGroupLabel = defineComponent({
  inheritAttrs: false,
  name: "RadioGroupLabel",
  setup(_props, { attrs, slots }) {
    return () =>
      h(FieldLabel as ArkPart, { asChild: true }, () =>
        h(
          RadioGroupPrimitive.Label as ArkPart,
          {
            ...(attrs as object),
          },
          slots,
        ),
      );
  },
});

export const RadioGroupShorthand = defineComponent({
  inheritAttrs: false,
  name: "RadioGroupShorthand",
  props: {
    defaultValue: { default: undefined, type: [String, null] as PropType<string | null> },
    disabled: { default: undefined, type: Boolean },
    items: { default: () => [], type: Array as PropType<RadioGroupPresetItem[]> },
    name: { default: undefined, type: String },
    onValueChange: {
      default: undefined,
      type: Function as PropType<RadioGroupRootProps["onValueChange"]>,
    },
    orientation: { default: undefined, type: String as PropType<"horizontal" | "vertical"> },
    value: { default: undefined, type: [String, null] as PropType<string | null> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        RadioGroupRoot as ArkPart,
        {
          ...(attrs as object),
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          name: props.name,
          onValueChange: props.onValueChange,
          orientation: props.orientation,
          value: props.value,
        },
        () =>
          props.items?.map((item) =>
            h(
              RadioGroupItem as ArkPart,
              { disabled: item.disabled, key: item.value, value: item.value },
              () => item.label,
            ),
          ),
      );
  },
});
// #endregion
