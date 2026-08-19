import { Field as FieldPrimitive } from "@ark-ui/vue/field";
import { Fieldset as FieldsetPrimitive } from "@ark-ui/vue/fieldset";
import {
  fieldContentVariants,
  fieldDescriptionVariants,
  fieldErrorVariants,
  fieldGroupVariants,
  fieldHelperVariants,
  fieldInlineVariants,
  fieldLabelVariants,
  fieldLegendVariants,
  fieldRequiredIndicatorVariants,
  fieldSeparatorVariants,
  fieldSetVariants,
  fieldTitleVariants,
  fieldVariants,
} from "@pisagor/styles/ui/field";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import {
  formControlSeparatorVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";
import { Separator } from "../separator/separator";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface FieldProps extends WithTestId {
  class?: unknown;
  orientation?: "horizontal" | "responsive" | "vertical";
  reverse?: boolean;
}

export interface FieldLabelProps {
  asChild?: boolean;
  class?: unknown;
}
// #endregion

// #region Components
export const FieldRoot = defineComponent({
  inheritAttrs: false,
  name: "FieldRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    orientation: { default: "vertical", type: String as PropType<FieldProps["orientation"]> },
    reverse: { default: false, type: Boolean },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        FieldPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(
            fieldVariants({ orientation: props.orientation, reverse: props.reverse }),
            props.class,
          ),
          "data-orientation": props.orientation,
          "data-testid": props.testId,
        },
        slots,
      );
  },
});

export const FieldSet = defineComponent({
  inheritAttrs: false,
  name: "FieldSet",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        FieldsetPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(fieldSetVariants(), props.class),
        },
        slots,
      );
  },
});

export const FieldLegend = defineComponent({
  inheritAttrs: false,
  name: "FieldLegend",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    variant: { default: "legend", type: String as PropType<"label" | "legend"> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        FieldsetPrimitive.Legend as ArkPart,
        {
          ...attrs,
          class: cn(fieldLegendVariants(), props.class),
          "data-variant": props.variant,
        },
        slots,
      );
  },
});

export const FieldGroup = defineComponent({
  inheritAttrs: false,
  name: "FieldGroup",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(fieldGroupVariants(), props.class),
          "data-part": "group",
          "data-scope": "field",
        },
        slots.default?.(),
      );
  },
});

export const FieldContent = defineComponent({
  inheritAttrs: false,
  name: "FieldContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(fieldContentVariants(), props.class),
          "data-part": "content",
          "data-scope": "field",
        },
        slots.default?.(),
      );
  },
});

export const FieldLabel = defineComponent({
  inheritAttrs: false,
  name: "FieldLabel",
  props: {
    asChild: Boolean,
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        FieldPrimitive.Label as ArkPart,
        {
          ...attrs,
          asChild: props.asChild,
          class: cn(fieldLabelVariants(), props.class),
        },
        slots,
      );
  },
});

export const FieldRequiredIndicator = defineComponent({
  inheritAttrs: false,
  name: "FieldRequiredIndicator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        FieldPrimitive.RequiredIndicator as ArkPart,
        {
          ...attrs,
          "aria-hidden": true,
          class: cn(fieldRequiredIndicatorVariants(), props.class),
        },
        () => slots.default?.() ?? "*",
      );
  },
});

export const FieldTitle = defineComponent({
  inheritAttrs: false,
  name: "FieldTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(fieldTitleVariants(), props.class),
          "data-part": "title",
          "data-scope": "field",
        },
        slots.default?.(),
      );
  },
});

export const FieldDescription = defineComponent({
  inheritAttrs: false,
  name: "FieldDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "p",
        {
          ...attrs,
          class: cn(fieldDescriptionVariants(), props.class),
          "data-part": "description",
          "data-scope": "field",
        },
        slots.default?.(),
      );
  },
});

export const FieldSeparator = defineComponent({
  inheritAttrs: false,
  name: "FieldSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const resolved = useFormControlVariant();
      const shellArgs = shellVariantArgs(resolved);
      const children = slots.default?.();

      return h(
        "div",
        {
          ...attrs,
          class: cn(fieldSeparatorVariants(), props.class),
          "data-content": !!children,
          "data-part": "separator",
          "data-scope": "field",
        },
        [
          h(Separator as ArkPart, { class: fieldInlineVariants() }),
          children
            ? h("span", { class: cn(formControlSeparatorVariants({ ...shellArgs })) }, children)
            : null,
        ],
      );
    };
  },
});

export const FieldHelper = defineComponent({
  inheritAttrs: false,
  name: "FieldHelper",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        FieldPrimitive.HelperText as ArkPart,
        {
          ...attrs,
          class: cn(fieldHelperVariants(), props.class),
        },
        slots,
      );
  },
});

export const FieldError = defineComponent({
  inheritAttrs: false,
  name: "FieldError",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        FieldPrimitive.ErrorText as ArkPart,
        {
          ...attrs,
          class: cn(fieldErrorVariants(), props.class),
        },
        slots,
      );
  },
});
// #endregion
