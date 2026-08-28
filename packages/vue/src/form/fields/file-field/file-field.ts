import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { FileInputProps } from "../../../components";
import { FileInput } from "../../../components";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

type ArkPart = Parameters<typeof h>[0];

// #region Types
type FileInputControlProps = SetRequired<
  Omit<FileInputProps, "invalid" | "name" | "onFilesChange">,
  "onValueChange"
>;

export interface FileFieldProps extends FieldPresentationProps, FileInputControlProps {
  name?: string;
  onBlur?: () => void;
}
// #endregion

// #region Part
export const FileField = defineComponent({
  inheritAttrs: false,
  name: "FileField",
  props: {
    accept: { default: undefined, type: String },
    browseLabel: { default: undefined, type: String },
    capture: { default: undefined, type: String as PropType<FileInputProps["capture"]> },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
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
    multiple: { default: undefined, type: Boolean },
    name: { default: undefined, type: String },
    onBlur: { default: undefined, type: Function as PropType<() => void> },
    onValueChange: {
      required: true,
      type: Function as PropType<(files: File[]) => void>,
    },
    orientation: {
      default: undefined,
      type: String as PropType<FieldPresentationProps["orientation"]>,
    },
    placeholder: { default: undefined, type: String },
    required: { default: undefined, type: Boolean },
    size: { default: undefined, type: String as PropType<FileInputProps["size"]> },
    variant: { default: undefined, type: String as PropType<FileInputProps["variant"]> },
  },
  setup(props, { attrs }) {
    return () =>
      h(
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
          h(FileInput as ArkPart, {
            ...attrs,
            accept: props.accept,
            browseLabel: props.browseLabel,
            capture: props.capture,
            disabled: props.disabled,
            id: props.id,
            invalid: props.invalid,
            multiple: props.multiple,
            name: props.name,
            onBlur: props.onBlur,
            onValueChange: props.onValueChange,
            placeholder: props.placeholder,
            required: props.required,
            size: props.size,
            variant: props.variant,
          }),
      );
  },
});
// #endregion
