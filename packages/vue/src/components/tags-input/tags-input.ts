import {
  TagsInput as TagsInputPrimitive,
  type TagsInputValueChangeDetails,
  useTagsInputContext,
} from "@ark-ui/vue/tags-input";
import { PhX } from "@phosphor-icons/vue";
import {
  tagsInputInline2Variants,
  tagsInputInline3Variants,
  tagsInputInline4Variants,
  tagsInputInline5Variants,
  tagsInputInlineVariants,
  tagsInputItemPreviewVariants,
  tagsInputItemTextVariants,
  tagsInputItemVariants,
  tagsInputRootProviderVariants,
  tagsInputVariants,
} from "@pisagor/styles/ui/tags-input";
import { cn } from "@pisagor/utils";

type ClassValue = Parameters<typeof cn>[0];

import { defineComponent, h, type PropType } from "vue";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import type { WithTestId } from "../../internal/types";
import { InputGroup } from "../input-group";
import type { InputGroupProps } from "../input-group/input-group-core";

type ArkPart = Parameters<typeof h>[0];

type TagsInputSize = NonNullable<InputGroupProps["size"]>;

export interface TagsInputProps extends WithTestId {
  class?: ClassValue;
  clearable?: boolean;
  defaultValue?: string[];
  disabled?: boolean;
  editable?: boolean;
  placeholder?: string;
  onValueChange?: (value: string[]) => void;
  size?: TagsInputSize;
  testId?: string;
  variant?: FormControlVariant;
  value?: string[];
  tabIndex?: number;
}

export interface TagsInputItemProps {
  class?: ClassValue;
  disabled?: boolean;
  showDelete?: boolean;
  value: string;
  index: number;
}
// #endregion

// #region Parts
export const TagsInputContext = TagsInputPrimitive.Context;

export const TagsInputInput = defineComponent({
  inheritAttrs: false,
  name: "TagsInput.Input",
  props: {
    placeholder: { default: "", type: String },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        TagsInputPrimitive.Input as ArkPart,
        {
          ...(attrs as object),
          asChild: true,
          placeholder: props.placeholder,
        },
        () => h(InputGroup.Input as ArkPart, { class: cn(tagsInputInline4Variants()) }),
      );
  },
});

export const TagsInputItemDeleteTrigger = defineComponent({
  inheritAttrs: false,
  name: "TagsInput.ItemDeleteTrigger",
  props: {
    "aria-label": { default: "Remove tag", type: String },
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        TagsInputPrimitive.ItemDeleteTrigger as ArkPart,
        {
          ...(attrs as object),
          "aria-label": props["aria-label"],
          asChild: true,
        },
        () =>
          h(
            InputGroup.Button as ArkPart,
            {
              "aria-label": props["aria-label"],
              class: cn(
                tagsInputInline2Variants(),
                props.class,
                (attrs as { class?: ClassValue }).class,
              ),
              size: "icon-xs",
              type: "button",
              variant: "ghost",
            },
            () => slots.default?.() ?? h(PhX, { "aria-hidden": true }),
          ),
      );
  },
});

export const TagsInputItemText = defineComponent({
  inheritAttrs: false,
  name: "TagsInput.ItemText",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        TagsInputPrimitive.ItemText as ArkPart,
        {
          ...(attrs as object),
          class: cn(
            tagsInputItemTextVariants(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        slots.default?.(),
      );
  },
});

export const TagsInputItemPreview = defineComponent({
  inheritAttrs: false,
  name: "TagsInput.ItemPreview",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        TagsInputPrimitive.ItemPreview as ArkPart,
        {
          ...(attrs as object),
          class: cn(
            tagsInputItemPreviewVariants(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
        },
        slots.default?.(),
      );
  },
});

export const TagsInputItemInput = defineComponent({
  inheritAttrs: false,
  name: "TagsInput.ItemInput",
  setup(_, { attrs }) {
    return () =>
      h(
        TagsInputPrimitive.ItemInput as ArkPart,
        {
          ...(attrs as object),
          asChild: true,
        },
        () =>
          h(InputGroup.Input as ArkPart, {
            class: cn(tagsInputInline3Variants()),
          }),
      );
  },
});

export const TagsInputItem = defineComponent({
  inheritAttrs: false,
  name: "TagsInput.Item",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    disabled: { default: undefined, type: Boolean },
    index: { required: true, type: Number },
    showDelete: { default: true, type: Boolean },
    value: { required: true, type: String },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        TagsInputPrimitive.Item as ArkPart,
        {
          ...(attrs as object),
          class: cn(tagsInputItemVariants(), props.class, (attrs as { class?: ClassValue }).class),
          disabled: props.disabled,
          index: props.index,
          value: props.value,
        },
        () => [
          h(TagsInputItemPreview, null, () => [
            h(TagsInputItemText, null, () => slots.default?.() ?? props.value),
            props.showDelete ? h(TagsInputItemDeleteTrigger) : null,
          ]),
          h(TagsInputItemInput),
        ],
      );
  },
});

export const TagsInputClearTrigger = defineComponent({
  inheritAttrs: false,
  name: "TagsInput.ClearTrigger",
  props: {
    "aria-label": { default: "Clear all tags", type: String },
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        TagsInputPrimitive.ClearTrigger as ArkPart,
        {
          ...(attrs as object),
          "aria-label": props["aria-label"],
          asChild: true,
        },
        () =>
          h(
            InputGroup.Button as ArkPart,
            {
              "aria-label": props["aria-label"],
              class: cn(
                tagsInputInline5Variants(),
                props.class,
                (attrs as { class?: ClassValue }).class,
              ),
              size: "icon-xs",
              type: "button",
              variant: "ghost",
            },
            () => slots.default?.() ?? h(PhX, { "aria-hidden": true }),
          ),
      );
  },
});

export const TagsInputControl = defineComponent({
  inheritAttrs: false,
  name: "TagsInput.Control",
  props: {
    clearable: { default: false, type: Boolean },
    size: { default: "md", type: String as PropType<TagsInputSize> },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs, slots }) {
    const api = useTagsInputContext();

    return () =>
      h(
        TagsInputPrimitive.Control as ArkPart,
        {
          ...(attrs as object),
          asChild: true,
        },
        () =>
          h(
            InputGroup as ArkPart,
            {
              class: cn(tagsInputInlineVariants(), (attrs as { class?: ClassValue }).class),
              size: props.size,
              variant: props.variant,
            },
            () => [
              slots.default?.(),
              props.clearable && api.value.value.length > 0 ? h(TagsInputClearTrigger) : null,
            ],
          ),
      );
  },
});

export const TagsInputRoot = defineComponent({
  inheritAttrs: false,
  name: "TagsInput",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    clearable: { default: false, type: Boolean },
    defaultValue: { default: undefined, type: Array as PropType<string[] | undefined> },
    editable: { default: false, type: Boolean },
    onValueChange: {
      default: undefined,
      type: Function as PropType<TagsInputProps["onValueChange"]>,
    },
    placeholder: { default: "", type: String },
    placeholderText: { default: "", type: String },
    size: { default: "md", type: String as PropType<TagsInputSize> },
    tabIndex: { default: undefined, type: Number },
    testId: String,
    value: { default: undefined, type: Array as PropType<string[] | undefined> },
    variant: { default: undefined, type: String as PropType<FormControlVariant | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(FormControlVariantProvider as ArkPart, { value: props.variant }, () =>
        h(
          TagsInputPrimitive.Root as ArkPart,
          {
            ...(attrs as object),
            class: cn(tagsInputVariants(), props.class, (attrs as { class?: ClassValue }).class),
            "data-size": props.size,
            "data-testid": props.testId,
            defaultValue: props.defaultValue,
            editable: props.editable,
            modelValue: props.value,
            onValueChange: props.onValueChange
              ? (details: TagsInputValueChangeDetails) => props.onValueChange?.(details.value)
              : undefined,
            tabIndex: props.tabIndex,
          },
          () => [
            h(
              TagsInputControl as ArkPart,
              { clearable: props.clearable, size: props.size, variant: props.variant },
              () => [
                h(
                  TagsInputPrimitive.Context as ArkPart,
                  null,
                  () => (api: { value: string[] }) =>
                    api.value.map((value: string, index: number) =>
                      h(TagsInputItem as ArkPart, { index, key: value, value }),
                    ),
                ),
                slots.default?.(),
                h(TagsInputInput as ArkPart, { placeholder: props.placeholder }),
              ],
            ),
            h(TagsInputPrimitive.HiddenInput as ArkPart, { tabIndex: props.tabIndex }),
          ],
        ),
      );
  },
});

export const TagsInputRootProvider = defineComponent({
  inheritAttrs: false,
  name: "TagsInputRootProvider",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<ClassValue> },
    clearable: { default: false, type: Boolean },
    size: { default: "md", type: String as PropType<TagsInputSize> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        TagsInputPrimitive.RootProvider as ArkPart,
        {
          ...(attrs as object),
          class: cn(
            tagsInputRootProviderVariants(),
            props.class,
            (attrs as { class?: ClassValue }).class,
          ),
          "data-size": props.size,
          "data-testid": props.testId,
        },
        () => [
          h(
            TagsInputControl as ArkPart,
            { clearable: props.clearable, size: props.size, variant: undefined },
            () => slots.default?.(),
          ),
          h(TagsInputPrimitive.HiddenInput as ArkPart),
        ],
      );
  },
});
// #endregion
