import { ark } from "@ark-ui/react/factory";
import { fileInputVariants } from "@pisagor/styles/ui/file-input";
import type { FormControlGroupShellVariantProps } from "@pisagor/styles/ui/form-control";
import { type ChangeEventHandler, type ComponentProps, useRef, useState } from "react";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlGroupShellVariants,
  formControlShellProps,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import {
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  type InputGroupTextProps,
} from "../input-group/input-group-core";
import { FileInputContext, useFileInput } from "./file-input.context";

// #region Types
type FileInputVariantProps = FormControlGroupShellVariantProps;

type NativeFileInputProps = Omit<
  ComponentProps<"input">,
  "defaultValue" | "onChange" | "size" | "type" | "value"
>;

type FileInputRootProps = ComponentProps<typeof ark.div> &
  FileInputVariantProps & {
    /** Disables the control and sets `data-disabled` on the root. */
    disabled?: boolean;
    /**
     * Visual shell variant. When omitted, resolves from the nearest `Surface` context.
     */
    variant?: FormControlVariant;
  };

export interface FileInputProps extends NativeFileInputProps, FileInputVariantProps {
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

interface FileInputControlProps extends ComponentProps<"input"> {}

interface FileInputLabelProps extends InputGroupTextProps {}
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
function FileInputRoot({
  children,
  className,
  disabled,
  size = "md",
  variant: variantProp,
  ...rest
}: FileInputRootProps) {
  const resolved = useFormControlVariant(variantProp);
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);
  const slots = fileInputVariants();

  return (
    <FileInputContext value={{ slots }}>
      <ark.div
        {...rest}
        {...controlProps}
        className={formControlGroupShellVariants({ className, size, ...shellArgs })}
        data-disabled={disabled ? true : undefined}
        data-part="root"
        data-scope="file-input"
        data-size={size}
        role="group"
      >
        {children}
      </ark.div>
    </FileInputContext>
  );
}

function FileInputControl({ className, ...rest }: FileInputControlProps) {
  const { slots } = useFileInput();

  return (
    <input
      {...rest}
      className={slots.control({ className })}
      data-part="control"
      data-scope="file-input"
      type="file"
    />
  );
}

function FileInputLabel({ children, className, ...rest }: FileInputLabelProps) {
  const { slots } = useFileInput();

  return (
    <InputGroupText {...rest} className={slots.label({ className })}>
      {children}
    </InputGroupText>
  );
}
// #endregion

// #region Closed
export function FileInput({
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
  size = "md",
  variant,
  ...rest
}: FileInputProps) {
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
    onValueChange?.(files);
    setFileLabel(formatFileLabel(files));
  };

  return (
    <FileInputRoot className={className} disabled={disabled} size={size} variant={variant}>
      <FileInputControl
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
        <InputGroupButton disabled={disabled} onClick={openPicker} type="button">
          {browseLabel}
        </InputGroupButton>
      </InputGroupAddon>

      <FileInputLabel onClick={disabled ? undefined : openPicker}>
        {fileLabel ?? placeholder}
      </FileInputLabel>
    </FileInputRoot>
  );
}
// #endregion

// #region Display Names
FileInputRoot.displayName = "FileInput.Root";
FileInputControl.displayName = "FileInput.Control";
FileInputLabel.displayName = "FileInput.Label";
FileInput.displayName = "FileInput";
// #endregion
