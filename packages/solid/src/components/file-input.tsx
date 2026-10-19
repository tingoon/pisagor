import type { FileInputRootContract } from "@pisagor/contracts";
import { fileInputRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { createSignal, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";
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
type NativeFileInputProps = Omit<
  ComponentProps<"input">,
  "defaultValue" | "onChange" | "size" | "type" | "value"
>;

type FileInputRootProps = ComponentProps<"div"> &
  FileInputRootContract & {
    /** Disables the control and sets `data-disabled` on the root. */
    disabled?: boolean;
  };

export interface FileInputProps
  extends NativeFileInputProps, FileInputRootContract {
  /** Marks the control invalid for styling and assistive tech. */
  invalid?: boolean;
  /** Label for the browse button. */
  browseLabel?: string;
  /** Text shown when no file is selected. */
  placeholder?: string;
  onChange?: (
    event: Event & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    },
  ) => void;
  /** Called with accepted files when the selection changes. */
  onFilesChange?: (files: File[]) => void;
}

type FileInputControlProps = ComponentProps<"input">;

type FileInputLabelProps = InputGroupTextProps;
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

// #region Parts
const RootBase = withProvider<FileInputRootProps>("div", {
  defaultProps: {
    role: "group",
  },
  name: "Root",
  slot: "root",
});

function Root(props: FileInputRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["disabled"]);

  return (
    <RootBase {...rest} data-disabled={local.disabled ? true : undefined} />
  );
}

const Control = withContext<FileInputControlProps>("input", {
  defaultProps: {
    type: "file",
  },
  name: "Control",
});

const LabelBase = withContext<FileInputLabelProps>(InputGroupText, {
  name: "Label",
});

function Label(props: FileInputLabelProps): JSX.Element {
  return <LabelBase {...props} />;
}
// #endregion

// #region Closed
function FileInputShorthand(props: FileInputProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "accept",
    "disabled",
    "invalid",
    "multiple",
    "name",
    "required",
    "browseLabel",
    "capture",
    "id",
    "placeholder",
    "ref",
    "onChange",
    "onFilesChange",
    "recipe",
    "class",
  ]);

  let inputEl: HTMLInputElement | undefined;
  const [fileLabel, setFileLabel] = createSignal<string>();

  const openPicker = () => {
    inputEl?.click();
  };

  const changeHandler = (
    event: Event & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    },
  ) => {
    local.onChange?.(event);
    const files = getSelectedFiles(event.currentTarget);
    local.onFilesChange?.(files);
    setFileLabel(formatFileLabel(files));
  };

  return (
    <Root
      class={local.class}
      disabled={local.disabled}
      recipe={local.recipe}
      size={local.size ?? "md"}
      variant={local.variant}
    >
      <Control
        tabIndex={-1}
        {...rest}
        accept={local.accept}
        aria-invalid={local.invalid || undefined}
        capture={local.capture}
        data-invalid={local.invalid || undefined}
        disabled={local.disabled}
        id={local.id}
        multiple={local.multiple}
        name={local.name}
        onChange={changeHandler}
        ref={(el) => {
          inputEl = el;
          if (typeof local.ref === "function") {
            local.ref(el);
          }
        }}
        required={local.required}
      />

      <InputGroupAddon align="inline-start">
        <InputGroupButton
          disabled={local.disabled}
          onClick={openPicker}
          type="button"
        >
          {m("fileInput.browse", local.browseLabel)}
        </InputGroupButton>
      </InputGroupAddon>

      <Label onClick={local.disabled ? undefined : openPicker}>
        {fileLabel() ?? m("fileInput.placeholder", local.placeholder)}
      </Label>
    </Root>
  );
}
// #endregion

export const FileInput = Object.assign(FileInputShorthand, {
  Control,
  Label,
  Root,
});
