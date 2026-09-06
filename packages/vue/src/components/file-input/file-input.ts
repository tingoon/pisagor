import { fileInputRecipe } from "@pisagor/recipes/file-input";
import { formControlGroupShellRecipe } from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, ref } from "vue";
import { InputGroupAddon, InputGroupButton, InputGroupText } from "../input-group/input-group-core";

type FormControlVariant = "primary" | "secondary";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface FileInputProps {
  accept?: string;
  /** Label for the browse button. */
  browseLabel?: string;
  capture?: "environment" | "user";
  /**
   * Style recipe. Defaults to `fileInputRecipe` from `@pisagor/recipes/file-input`.
   *
   * @defaultValue fileInputRecipe
   */
  recipe?: typeof fileInputRecipe;
  class?: unknown;
  disabled?: boolean;
  id?: string;
  /** Marks the control invalid for styling and assistive tech. */
  invalid?: boolean;
  multiple?: boolean;
  name?: string;
  onChange?: (event: Event) => void;
  /** Called with accepted files when the selection changes. */
  onFilesChange?: (files: File[]) => void;
  /** Alias for `onFilesChange`; matches `FileUpload` callback naming. */
  onValueChange?: (files: File[]) => void;
  /** Text shown when no file is selected. */
  placeholder?: string;
  required?: boolean;
  size?: "lg" | "md" | "sm";
  /**
   * Visual shell variant. Defaults to `primary`.
   */
  variant?: FormControlVariant;
}
// #endregion

// #region Helpers
function getSelectedFiles(input: HTMLInputElement): File[] {
  return input.files ? Array.from(input.files) : [];
}

function formatFileLabel(files: File[]): string | undefined {
  if (files.length === 0) {
    return undefined;
  }

  if (files.length === 1) {
    return files[0]?.name;
  }

  return `${files.length} files selected`;
}
// #endregion

// #region Component
export const FileInput = defineComponent({
  inheritAttrs: false,
  name: "FileInput",
  props: {
    accept: { default: undefined, type: String },
    browseLabel: { default: "Choose file", type: String },
    capture: { default: undefined, type: String as PropType<FileInputProps["capture"]> },
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    disabled: { default: undefined, type: Boolean },
    id: { default: undefined, type: String },
    invalid: { default: undefined, type: Boolean },
    multiple: { default: undefined, type: Boolean },
    name: { default: undefined, type: String },
    onChange: { default: undefined, type: Function as PropType<FileInputProps["onChange"]> },
    onFilesChange: {
      default: undefined,
      type: Function as PropType<FileInputProps["onFilesChange"]>,
    },
    onValueChange: {
      default: undefined,
      type: Function as PropType<FileInputProps["onValueChange"]>,
    },
    placeholder: { default: "No file chosen", type: String },
    recipe: {
      default: fileInputRecipe,
      type: Function as PropType<typeof fileInputRecipe>,
    },
    required: { default: undefined, type: Boolean },
    size: { default: "md", type: String as PropType<FileInputProps["size"]> },
    variant: { default: undefined, type: String as PropType<FormControlVariant> },
  },
  setup(props, { attrs }) {
    const inputRef = ref<HTMLInputElement | null>(null);
    const fileLabel = ref<string>();

    const openPicker = () => {
      inputRef.value?.click();
    };

    const handleChange = (event: Event) => {
      props.onChange?.(event);
      const files = getSelectedFiles(event.currentTarget as HTMLInputElement);
      props.onFilesChange?.(files);
      props.onValueChange?.(files);
      fileLabel.value = formatFileLabel(files);
    };

    return () => {
      const resolved = {
        surfaceVariant: undefined,
        variant: props.variant ?? ("primary" as FormControlVariant),
      };
      const shellArgs = { variant: resolved.variant };
      const controlProps = { "data-variant": resolved.variant };
      const slots = props.recipe();

      return h(
        "div",
        {
          ...attrs,
          ...controlProps,
          class: cn(formControlGroupShellRecipe({ size: props.size, ...shellArgs }), props.class),
          "data-disabled": props.disabled || undefined,
          "data-part": "root",
          "data-scope": "file-input",
          "data-size": props.size,
          role: "group",
        },
        [
          h("input", {
            accept: props.accept,
            "aria-invalid": props.invalid || undefined,
            capture: props.capture,
            class: slots.control(),
            "data-invalid": props.invalid || undefined,
            "data-part": "control",
            "data-scope": "file-input",
            disabled: props.disabled,
            id: props.id,
            multiple: props.multiple,
            name: props.name,
            onChange: handleChange,
            ref: inputRef,
            required: props.required,
            type: "file",
          }),
          h(InputGroupAddon as ArkPart, { align: "inline-start" }, () =>
            h(
              InputGroupButton as ArkPart,
              { disabled: props.disabled, onClick: openPicker, type: "button" },
              () => props.browseLabel,
            ),
          ),
          h(
            InputGroupText as ArkPart,
            {
              class: slots.label(),
              onClick: props.disabled ? undefined : openPicker,
            },
            () => fileLabel.value ?? props.placeholder,
          ),
        ],
      );
    };
  },
});
// #endregion
