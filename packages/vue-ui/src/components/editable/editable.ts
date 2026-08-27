import {
  Editable as EditablePrimitive,
  type EditableValueChangeDetails,
} from "@ark-ui/vue/editable";
import { buttonVariants } from "@pisagor/recipes/button";
import { editableVariants } from "@pisagor/recipes/editable";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import { formControlShellProps } from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { ButtonProps } from "../button";

// #region Types
export interface EditableProps {
  /** The activation mode for the preview element. */
  activationMode?: "focus" | "dblclick" | "click" | "none";
  /** Whether the editable should auto-resize to fit the content. */
  autoResize?: boolean;
  class?: unknown;
  /** Whether the editable is in edit mode by default. */
  defaultEdit?: boolean;
  /**
   * Initial text value when uncontrolled.
   *
   * @remarks
   * Ignored when `value` is set.
   */
  defaultValue?: string;
  /** Whether the editable is disabled. */
  disabled?: boolean;
  /** Whether the editable is in edit mode. */
  edit?: boolean;
  /** Whether the input's value is invalid. */
  invalid?: boolean;
  /** The maximum number of characters allowed in the editable */
  maxLength?: number;
  /**
   * Called when the text value changes.
   *
   * @remarks
   * Receives the string value directly, not Ark UI event details.
   */
  onValueChange?: (value: string) => void;
  /** The orientation of the editable */
  orientation?: "horizontal" | "vertical";
  /** The placeholder text for the editable. */
  placeholder?: string | { edit: string; preview: string };
  /** Whether the editable is read-only. */
  readOnly?: boolean;
  /** Whether the editable is required. */
  required?: boolean;
  /** Whether to select the text in the input when it is focused. */
  selectOnFocus?: boolean;
  /** The action that triggers submit in the edit mode. */
  submitMode?: "enter" | "blur" | "both" | "none";
  /**
   * Controlled text value.
   *
   * @remarks
   * When set, `defaultValue` is ignored. Pair with `onValueChange` to handle updates.
   */
  value?: string;
}

export interface EditablePreviewProps {
  class?: unknown;
  /** Form shell variant. When omitted, resolves from the nearest `Surface` context. */
  controlVariant?: FormControlVariant;
  /**
   * The size of the preview
   *
   * @defaultValue "md"
   */
  size?: ButtonProps["size"];
  /**
   * The variant of the preview
   *
   * @defaultValue "outline"
   */
  variant?: ButtonProps["variant"];
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const EditableRoot = defineComponent({
  inheritAttrs: false,
  name: "EditableRoot",
  props: {
    activationMode: {
      default: undefined,
      type: String as PropType<EditableProps["activationMode"]>,
    },
    autoResize: { default: undefined, type: Boolean },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    defaultEdit: { default: undefined, type: Boolean },
    defaultValue: { default: undefined, type: String },
    disabled: { default: undefined, type: Boolean },
    edit: { default: undefined, type: Boolean },
    invalid: { default: undefined, type: Boolean },
    maxLength: { default: undefined, type: Number },
    onValueChange: {
      default: undefined,
      type: Function as PropType<EditableProps["onValueChange"]>,
    },
    orientation: { default: "horizontal", type: String as PropType<EditableProps["orientation"]> },
    placeholder: {
      default: undefined,
      type: [String, Object] as PropType<EditableProps["placeholder"]>,
    },
    readOnly: { default: undefined, type: Boolean },
    required: { default: undefined, type: Boolean },
    selectOnFocus: { default: undefined, type: Boolean },
    submitMode: { default: undefined, type: String as PropType<EditableProps["submitMode"]> },
    value: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = editableVariants();

      return h(
        EditablePrimitive.Root as ArkPart,
        {
          ...attrs,
          activationMode: props.activationMode,
          autoResize: props.autoResize,
          class: variantSlots.base({ class: props.class }),
          "data-orientation": props.orientation,
          defaultEdit: props.defaultEdit,
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          edit: props.edit,
          invalid: props.invalid,
          maxLength: props.maxLength,
          modelValue: props.value,
          onValueChange: props.onValueChange
            ? (details: EditableValueChangeDetails) => props.onValueChange?.(details.value)
            : undefined,
          placeholder: props.placeholder,
          readOnly: props.readOnly,
          required: props.required,
          selectOnFocus: props.selectOnFocus,
          submitMode: props.submitMode,
        },
        slots,
      );
    };
  },
});

export const EditableArea = defineComponent({
  inheritAttrs: false,
  name: "Editable.Area",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = editableVariants();

      return h(
        EditablePrimitive.Area as ArkPart,
        {
          ...attrs,
          class: variantSlots.area({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const EditableInput = defineComponent({
  inheritAttrs: false,
  name: "Editable.Input",
  setup(_, { attrs, slots }) {
    return () => h(EditablePrimitive.Input as ArkPart, { ...attrs }, slots);
  },
});

export const EditablePreview = defineComponent({
  inheritAttrs: false,
  name: "Editable.Preview",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    controlVariant: {
      default: undefined,
      type: String as PropType<EditablePreviewProps["controlVariant"]>,
    },
    size: { default: "md", type: String as PropType<EditablePreviewProps["size"]> },
    variant: { default: "outline", type: String as PropType<EditablePreviewProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = editableVariants();
      const resolved = useFormControlVariant(props.controlVariant);
      const controlProps = formControlShellProps(resolved);
      const previewShellClass =
        resolved.variant === "secondary" && resolved.surfaceVariant === "default"
          ? "bg-muted/40 shadow-none hover:bg-muted/40 dark:hover:bg-muted/40"
          : resolved.variant === "secondary" && resolved.surfaceVariant
            ? "bg-background shadow-none hover:bg-background dark:hover:bg-background/90"
            : resolved.variant === "secondary"
              ? "bg-muted/40 shadow-none hover:bg-muted/40 dark:hover:bg-muted/40"
              : undefined;

      return h(
        EditablePrimitive.Preview as ArkPart,
        {
          ...attrs,
          ...controlProps,
          class: cn(
            buttonVariants({ clickEffect: false, size: props.size, variant: props.variant }),
            previewShellClass,
            variantSlots.preview(),
            previewShellClass ? "dark:hover:bg-transparent" : undefined,
            props.class,
          ),
        },
        slots,
      );
    };
  },
});

export const EditableControl = defineComponent({
  inheritAttrs: false,
  name: "Editable.Control",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = editableVariants();

      return h(
        EditablePrimitive.Control as ArkPart,
        {
          ...attrs,
          class: variantSlots.control({ class: props.class }),
        },
        slots,
      );
    };
  },
});

export const EditableEditTrigger = defineComponent({
  inheritAttrs: false,
  name: "Editable.EditTrigger",
  setup(_, { attrs, slots }) {
    return () => h(EditablePrimitive.EditTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const EditableCancelTrigger = defineComponent({
  inheritAttrs: false,
  name: "Editable.CancelTrigger",
  setup(_, { attrs, slots }) {
    return () => h(EditablePrimitive.CancelTrigger as ArkPart, { ...attrs }, slots);
  },
});

export const EditableSubmitTrigger = defineComponent({
  inheritAttrs: false,
  name: "Editable.SubmitTrigger",
  setup(_, { attrs, slots }) {
    return () => h(EditablePrimitive.SubmitTrigger as ArkPart, { ...attrs }, slots);
  },
});
// #endregion
