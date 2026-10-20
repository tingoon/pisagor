import {
  Editable as EditablePrimitive,
  type EditableRootProps as EditableRootPrimitiveProps,
  type EditableValueChangeDetails,
} from "@ark-ui/vue";
import { PhCheck, PhX } from "@phosphor-icons/vue";
import type {
  EditableContract,
  EditableRootContract,
} from "@pisagor/contracts";
import { buttonRecipe, editableRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { type Component, defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { Button, type ButtonProps } from "./button";
import { Input as TextInput, type InputProps } from "./input";
import { useLocale } from "./provider/context";
import { Textarea } from "./textarea";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Editable",
  recipe: editableRecipe,
});
// #endregion

type FormControlVariant = "primary" | "secondary";

// #region Types
type EditableRootProps = Omit<
  EditableRootPrimitiveProps,
  "onValueChange" | "value" | "defaultValue"
> &
  EditableRootContract;

export interface EditableProps
  extends Omit<EditableRootProps, "class">, EditableRootContract {
  /** The activation mode for the preview element. */
  activationMode?: "focus" | "dblclick" | "click" | "none";
  /** Whether the editable should auto-resize to fit the content. */
  autoResize?: boolean;
  class?: unknown;
  /** Whether the editable is in edit mode by default. */
  defaultEdit?: boolean;
  defaultValue?: string;
  /** Whether the editable is disabled. */
  disabled?: boolean;
  /** Whether the editable is in edit mode. */
  edit?: boolean;
  /** Whether the input's value is invalid. */
  invalid?: boolean;
  /** The maximum number of characters allowed in the editable */
  maxLength?: number;
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
  value?: string;
}

export interface EditablePreviewProps {
  class?: unknown;
  /** Form shell variant. Defaults to `primary`. */
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
  /**
   * Button style recipe. Defaults to `buttonRecipe` from
   * `@pisagor/recipes/button`.
   *
   * @defaultValue buttonRecipe
   */
  buttonRecipe?: typeof buttonRecipe;
}
export interface EditableShorthandProps
  extends EditableProps, EditableContract {
  /** Render a `Textarea` instead of a single-line `Input`. */
  multiline?: boolean;
  /**
   * Whether to render cancel and submit buttons.
   *
   * @defaultValue true
   */
  showControls?: boolean;
  /** Input and preview size. */
  size?: InputProps["size"];
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const RootBase = withProvider<EditableRootContract>(EditablePrimitive.Root, {
  name: "Root",
});

const Root = defineComponent({
  inheritAttrs: false,
  name: "Editable.Root",
  props: {
    activationMode: {
      default: undefined,
      type: String as PropType<EditableProps["activationMode"]>,
    },
    autoResize: { default: undefined, type: Boolean },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
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
    orientation: {
      default: "horizontal",
      type: String as PropType<EditableProps["orientation"]>,
    },
    placeholder: {
      default: undefined,
      type: [String, Object] as PropType<EditableProps["placeholder"]>,
    },
    readOnly: { default: undefined, type: Boolean },
    required: { default: undefined, type: Boolean },
    selectOnFocus: { default: undefined, type: Boolean },
    submitMode: {
      default: undefined,
      type: String as PropType<EditableProps["submitMode"]>,
    },
    value: { default: undefined, type: String },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        RootBase,
        {
          ...attrs,
          activationMode: props.activationMode,
          autoResize: props.autoResize,
          class: props.class,
          "data-orientation": props.orientation,
          defaultEdit: props.defaultEdit,
          defaultValue: props.defaultValue,
          disabled: props.disabled,
          edit: props.edit,
          invalid: props.invalid,
          maxLength: props.maxLength,
          modelValue: props.value,
          onValueChange: props.onValueChange
            ? (details: EditableValueChangeDetails) =>
                props.onValueChange?.(details.value)
            : undefined,
          placeholder: props.placeholder,
          readOnly: props.readOnly,
          required: props.required,
          selectOnFocus: props.selectOnFocus,
          submitMode: props.submitMode,
        },
        slots,
      );
  },
});

const Area = withContext(EditablePrimitive.Area, {
  name: "Area",
});

// Cast: the Ark input props union is too complex for `withContext` to infer.
const Input = withContext(EditablePrimitive.Input as Component, {
  name: "Input",
});

const Preview = defineComponent({
  inheritAttrs: false,
  name: "Editable.Preview",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    controlVariant: {
      default: undefined,
      type: String as PropType<EditablePreviewProps["controlVariant"]>,
    },
    size: {
      default: "md",
      type: String as PropType<EditablePreviewProps["size"]>,
    },
    variant: {
      default: "outline",
      type: String as PropType<EditablePreviewProps["variant"]>,
    },
    buttonRecipe: {
      default: buttonRecipe,
      type: Function as PropType<typeof buttonRecipe>,
    },
  },
  setup(props, { attrs, slots }) {
    const surfaceVariant = useFormControlSurface();

    return () => {
      const controlVariant =
        props.controlVariant ?? ("primary" as FormControlVariant);
      const slots_ = editableRecipe({
        surfaceVariant,
        variant: controlVariant,
      });

      return h(
        EditablePrimitive.Preview as ArkPart,
        {
          ...attrs,
          class: cn(
            props
              .buttonRecipe({
                clickEffect: false,
                size: props.size,
                variant: props.variant,
              })
              .base(),
            slots_.preview(),
            props.class,
          ),
          "data-variant": controlVariant,
        },
        slots,
      );
    };
  },
});

const Control = withContext(EditablePrimitive.Control, {
  name: "Control",
});

const EditTrigger = withContext(EditablePrimitive.EditTrigger, {
  name: "EditTrigger",
});

const CancelTrigger = withContext(EditablePrimitive.CancelTrigger, {
  name: "CancelTrigger",
});

const SubmitTrigger = withContext(EditablePrimitive.SubmitTrigger, {
  name: "SubmitTrigger",
});
// #endregion

// #region Shorthand
const iconSize = { lg: "icon-lg", md: "icon-md", sm: "icon-sm" } as const;

export const EditableShorthand = defineComponent({
  inheritAttrs: false,
  name: "Editable",
  props: {
    classNames: {
      default: undefined,
      type: Object as PropType<EditableShorthandProps["classNames"]>,
    },
    multiline: { default: false, type: Boolean },
    showControls: { default: true, type: Boolean },
    size: {
      default: "md",
      type: String as PropType<EditableShorthandProps["size"]>,
    },
  },
  setup(props, { attrs }) {
    const { m } = useLocale();

    return () => {
      const classNames = props.classNames;
      const size = props.size ?? "md";
      const buttonSize = iconSize[size as keyof typeof iconSize] ?? "icon-md";

      return h(Root as ArkPart, { ...attrs }, () => [
        h(Area, { class: classNames?.area }, () => [
          h(Input, { asChild: true, class: classNames?.input }, () =>
            props.multiline
              ? h(Textarea as ArkPart)
              : h(TextInput as ArkPart, { size }),
          ),
          h(Preview, { class: classNames?.preview, size }),
        ]),
        props.showControls
          ? h(Control, { class: classNames?.control }, () => [
              h(
                CancelTrigger,
                { asChild: true, class: classNames?.cancelTrigger },
                () =>
                  h(
                    Button,
                    {
                      "aria-label": m("editable.cancel"),
                      size: buttonSize,
                      variant: "outline",
                    },
                    () => h(PhX),
                  ),
              ),
              h(
                SubmitTrigger,
                { asChild: true, class: classNames?.submitTrigger },
                () =>
                  h(
                    Button,
                    {
                      "aria-label": m("editable.submit"),
                      size: buttonSize,
                      variant: "outline",
                    },
                    () => h(PhCheck),
                  ),
              ),
            ])
          : null,
      ]);
    };
  },
});
// #endregion

export const Editable = Object.assign(EditableShorthand, {
  Area,
  CancelTrigger,
  Control,
  EditTrigger,
  Input,
  Preview,
  Root,
  SubmitTrigger,
});
