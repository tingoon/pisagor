import type { FileInputRootContract } from "@pisagor/contracts";
import { fileInputRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, ref } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import {
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  type InputGroupTextProps,
} from "./input-group/input-group-core";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "FileInput",
  recipe: fileInputRecipe,
});
// #endregion

// #region Types
type FileInputRootProps = FileInputRootContract & {
  class?: unknown;
  /** Disables the control and sets `data-disabled` on the root. */
  disabled?: boolean;
};

export interface FileInputProps extends FileInputRootContract {
  accept?: string;
  /** Label for the browse button. */
  browseLabel?: string;
  capture?: "environment" | "user";
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
  /** Text shown when no file is selected. */
  placeholder?: string;
  required?: boolean;
}

type FileInputControlProps = {
  class?: unknown;
};

type FileInputLabelProps = InputGroupTextProps;
// #endregion

type ArkPart = Parameters<typeof h>[0];

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

// #region Parts
const RootBase = withProvider<FileInputRootProps>("div", {
  defaultProps: {
    role: "group",
  },
  name: "Root",
  slot: "root",
});

const Root = defineComponent({
  inheritAttrs: false,
  name: "FileInput.Root",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    disabled: { default: undefined, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        RootBase,
        {
          ...attrs,
          class: props.class,
          "data-disabled": props.disabled ? true : undefined,
        },
        slots,
      );
  },
});

const Control = withContext<FileInputControlProps>("input", {
  defaultProps: {
    type: "file",
  },
  name: "Control",
});

const LabelBase = withContext<FileInputLabelProps>(InputGroupText, {
  name: "Label",
});

const Label = defineComponent({
  inheritAttrs: false,
  name: "FileInput.Label",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        LabelBase,
        {
          ...attrs,
          class: props.class,
        },
        slots,
      );
  },
});
// #endregion

// #region Closed
const FileInputShorthand = defineComponent({
  inheritAttrs: false,
  name: "FileInput",
  props: {
    accept: { default: undefined, type: String },
    browseLabel: { default: undefined, type: String },
    capture: {
      default: undefined,
      type: String as PropType<FileInputProps["capture"]>,
    },
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    disabled: { default: undefined, type: Boolean },
    id: { default: undefined, type: String },
    invalid: { default: undefined, type: Boolean },
    multiple: { default: undefined, type: Boolean },
    name: { default: undefined, type: String },
    onChange: {
      default: undefined,
      type: Function as PropType<FileInputProps["onChange"]>,
    },
    onFilesChange: {
      default: undefined,
      type: Function as PropType<FileInputProps["onFilesChange"]>,
    },
    placeholder: { default: undefined, type: String },
    recipe: {
      default: undefined,
      type: Function as PropType<typeof fileInputRecipe>,
    },
    required: { default: undefined, type: Boolean },
    size: { default: "md", type: String as PropType<"sm" | "md" | "lg"> },
    variant: {
      default: undefined,
      type: String as PropType<FileInputRootContract["variant"]>,
    },
  },
  setup(props, { attrs }) {
    const { m } = useLocale();
    const inputRef = ref<HTMLInputElement | null>(null);
    const fileLabel = ref<string>();

    const openPicker = () => {
      inputRef.value?.click();
    };

    const changeHandler = (event: Event) => {
      props.onChange?.(event);
      const files = getSelectedFiles(event.currentTarget as HTMLInputElement);
      props.onFilesChange?.(files);
      fileLabel.value = formatFileLabel(files);
    };

    return () =>
      h(
        Root,
        {
          class: props.class,
          disabled: props.disabled,
          recipe: props.recipe,
          size: props.size,
          variant: props.variant,
        },
        () => [
          h(Control, {
            ...attrs,
            accept: props.accept,
            "aria-invalid": props.invalid || undefined,
            capture: props.capture,
            "data-invalid": props.invalid || undefined,
            disabled: props.disabled,
            id: props.id,
            multiple: props.multiple,
            name: props.name,
            onChange: changeHandler,
            ref: inputRef,
            required: props.required,
            tabIndex: -1,
          }),
          h(InputGroupAddon as ArkPart, { align: "inline-start" }, () =>
            h(
              InputGroupButton as ArkPart,
              {
                disabled: props.disabled,
                onClick: openPicker,
                type: "button",
              },
              () => m("fileInput.browse", props.browseLabel),
            ),
          ),
          h(
            Label,
            {
              onClick: props.disabled ? undefined : openPicker,
            },
            () =>
              fileLabel.value ?? m("fileInput.placeholder", props.placeholder),
          ),
        ],
      );
  },
});
// #endregion

export const FileInput = Object.assign(FileInputShorthand, {
  Control,
  Label,
  Root,
});
