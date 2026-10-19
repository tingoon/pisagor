import type { FileInputRootContract } from "@pisagor/contracts";
import { fileInputRecipe } from "@pisagor/recipes";
import { useRef, useState } from "react";
import type {
  ChangeEventHandler,
  ComponentProps,
  ComponentPropsWithRef,
} from "react";
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

type FileInputRootProps = ComponentPropsWithRef<"div"> &
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
  onChange?: ChangeEventHandler<HTMLInputElement>;
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

function Root({ disabled, ...rest }: FileInputRootProps) {
  return <RootBase {...rest} data-disabled={disabled ? true : undefined} />;
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

function Label(props: FileInputLabelProps) {
  return <LabelBase {...props} />;
}
// #endregion

// #region Closed
function FileInputShorthand({
  size = "md",
  variant,
  accept,
  disabled,
  invalid,
  multiple,
  name,
  required,
  browseLabel: browseLabelProp,
  capture,
  id,
  placeholder: placeholderProp,
  ref,
  onChange,
  onFilesChange,
  recipe,
  className,
  ...rest
}: FileInputProps) {
  const { m } = useLocale();
  const placeholder = m("fileInput.placeholder", placeholderProp);
  const browseLabel = m("fileInput.browse", browseLabelProp);
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileLabel, setFileLabel] = useState<string>();

  const setRefs = (node: HTMLInputElement | null) => {
    inputRef.current = node;

    if (typeof ref === "function") {
      ref(node);

      return;
    }

    if (ref) {
      ref.current = node;
    }
  };

  const openPicker = () => {
    inputRef.current?.click();
  };

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(event);
    const files = getSelectedFiles(event.currentTarget);
    onFilesChange?.(files);
    setFileLabel(formatFileLabel(files));
  };

  return (
    <Root
      className={className}
      disabled={disabled}
      recipe={recipe}
      size={size}
      variant={variant}
    >
      <Control
        tabIndex={-1}
        {...rest}
        accept={accept}
        aria-invalid={invalid || undefined}
        capture={capture}
        data-invalid={invalid || undefined}
        disabled={disabled}
        id={id}
        multiple={multiple}
        name={name}
        onChange={changeHandler}
        ref={setRefs}
        required={required}
      />

      <InputGroupAddon align="inline-start">
        <InputGroupButton
          disabled={disabled}
          onClick={openPicker}
          type="button"
        >
          {browseLabel}
        </InputGroupButton>
      </InputGroupAddon>

      <Label onClick={disabled ? undefined : openPicker}>
        {fileLabel ?? placeholder}
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
