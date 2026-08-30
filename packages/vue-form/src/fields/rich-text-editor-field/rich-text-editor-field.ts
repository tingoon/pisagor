import { RichTextEditor, type RichTextEditorRootProps } from "@pisagor/vue/rich-text-editor";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types
type RichTextEditorControlProps = SetRequired<
  Omit<RichTextEditorRootProps, "onBlur" | "onChange" | "value">,
  "onValueChange"
>;

export interface RichTextEditorFieldProps
  extends FieldPresentationProps,
    RichTextEditorControlProps {
  name?: string;
  onBlur?: () => void;
  value?: string;
}
// #endregion

// #region Component
export const RichTextEditorField = defineComponent({
  inheritAttrs: false,
  name: "RichTextEditorField",
  props: {
    "aria-label": { default: undefined, type: String },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    defaultValue: { default: undefined, type: String },
    description: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    disabled: { default: undefined, type: Boolean },
    error: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    id: { default: undefined, type: String },
    invalid: { default: undefined, type: Boolean },
    label: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    labelAccessory: { default: undefined, type: null as unknown as PropType<VNodeChild> },
    labelProps: {
      default: undefined,
      type: Object as PropType<FieldPresentationProps["labelProps"]>,
    },
    name: { default: undefined, type: String },
    onBlur: { default: undefined, type: Function as PropType<() => void> },
    onValueChange: {
      required: true,
      type: Function as PropType<(value: string) => void>,
    },
    orientation: {
      default: undefined,
      type: String as PropType<FieldPresentationProps["orientation"]>,
    },
    readOnly: { default: undefined, type: Boolean },
    value: { default: undefined, type: String },
    variant: { default: undefined, type: String as PropType<RichTextEditorRootProps["variant"]> },
  },
  setup(props, { attrs }) {
    return () => {
      const hasVisibleLabel = Boolean(props.label || props.labelAccessory);
      const ariaLabel = props["aria-label"];

      return h(
        FieldShell as ArkPart,
        {
          class: props.class,
          description: props.description,
          error: props.error,
          id: props.id,
          invalid: props.invalid,
          label: props.label,
          labelAccessory: props.labelAccessory,
          labelProps: props.labelProps,
          orientation: props.orientation,
        },
        () =>
          h(RichTextEditor as ArkPart, {
            ...attrs,
            "aria-label": hasVisibleLabel ? ariaLabel : (ariaLabel ?? "Rich text editor"),
            defaultValue: props.defaultValue,
            disabled: props.disabled,
            id: props.id,
            invalid: props.invalid,
            name: props.name,
            onBlur: props.onBlur,
            onValueChange: props.onValueChange,
            readOnly: props.readOnly,
            variant: props.variant,
            ...(props.value !== undefined ? { value: props.value } : {}),
          }),
      );
    };
  },
});
// #endregion
