import { ark } from "@ark-ui/react/factory";
import { fileInputVariants } from "@pisagor/styles/ui/file-input";
import type { FormControlGroupShellVariantProps } from "@pisagor/styles/ui/form-control";
import { cn } from "@pisagor/utils";
import { type ChangeEventHandler, type ComponentProps, useRef, useState } from "react";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlGroupShellVariants,
  formControlShellProps,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";
import { InputGroupAddon, InputGroupButton, InputGroupText } from "../input-group/input-group-core";

// #region Types
type FileInputVariantProps = FormControlGroupShellVariantProps;

type NativeFileInputProps = Omit<
  ComponentProps<"input">,
  "defaultValue" | "onChange" | "size" | "type" | "value"
>;

export interface FileInputProps extends NativeFileInputProps, FileInputVariantProps, WithTestId {
  /**
   * Visual shell variant. When omitted, resolves from the nearest `Surface` context.
   */
  variant?: FormControlVariant;
  /** Marks the control invalid for styling and assistive tech. */
  invalid?: boolean;
  /** Label for the browse button. */
  browseLabel?: string;
  /** Text shown when no file is selected. */
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Called with accepted files when the selection changes. */
  onFilesChange?: (files: File[]) => void;
  /** Alias for `onFilesChange`; matches `FileUpload` callback naming. */
  onValueChange?: (files: File[]) => void;
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

// #region Part
export function FileInput({
  size = "md",
  variant: variantProp,
  accept,
  browseLabel = "Choose file",
  capture,
  className,
  disabled,
  id,
  invalid,
  multiple,
  name,
  onChange,
  onFilesChange,
  onValueChange,
  placeholder = "No file chosen",
  ref,
  required,
  testId,
  ...rest
}: FileInputProps) {
  const resolved = useFormControlVariant(variantProp);
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileLabel, setFileLabel] = useState<string>();
  const recipe = fileInputVariants();

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
    onValueChange?.(files);
    setFileLabel(formatFileLabel(files));
  };

  return (
    <ark.div
      {...controlProps}
      className={cn(formControlGroupShellVariants({ size, ...shellArgs }), className)}
      data-disabled={disabled ? true : undefined}
      data-part="root"
      data-scope="file-input"
      data-size={size}
      data-testid={testId}
      role="group"
    >
      <input
        {...rest}
        accept={accept}
        aria-invalid={invalid || undefined}
        capture={capture}
        className={recipe.control()}
        data-invalid={invalid || undefined}
        data-part="control"
        data-scope="file-input"
        disabled={disabled}
        id={id}
        multiple={multiple}
        name={name}
        onChange={changeHandler}
        ref={setRefs}
        required={required}
        type="file"
      />
      <InputGroupAddon align="inline-start">
        <InputGroupButton disabled={disabled} onClick={openPicker} type="button">
          {browseLabel}
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupText className={recipe.label()} onClick={disabled ? undefined : openPicker}>
        {fileLabel ?? placeholder}
      </InputGroupText>
    </ark.div>
  );
}
FileInput.displayName = "FileInput";
// #endregion
