import type { FileInputProps as BaseFileInputProps } from "@pisagor/props";
import {
  type FormControlGroupShellVariantProps,
  fileInputRecipe,
  formControlGroupShellRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useRef, useState } from "react";
import type {
  ChangeEventHandler,
  ComponentProps,
  ComponentPropsWithRef,
} from "react";
import { type FormControlVariant, createSlotRecipeContext } from "../internal";
import {
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  type InputGroupTextProps,
} from "./input-group/input-group-core";
import { useLocale } from "./provider/context";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: FileInputStylesContext, useStyles } = createSlotRecipeContext({
  name: "FileInput",
  recipe: fileInputRecipe,
});
// #endregion

// #region Types

type FileInputVariantProps = FormControlGroupShellVariantProps;

type NativeFileInputProps = Omit<
  ComponentProps<"input">,
  "defaultValue" | "onChange" | "size" | "type" | "value"
>;

type FileInputRootProps = ComponentPropsWithRef<"div"> &
  FileInputVariantProps &
  BaseFileInputProps & {
    /** Disables the control and sets `data-disabled` on the root. */
    disabled?: boolean;
  };

export interface FileInputProps
  extends NativeFileInputProps, FileInputVariantProps, BaseFileInputProps {
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
function FileInputRoot({
  size = "md",
  variant: variantProp,
  disabled,
  children,
  recipe = fileInputRecipe,
  className,
  ...rest
}: FileInputRootProps) {
  const resolved = {
    surfaceVariant: useFormControlSurface(),
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = {
    surfaceVariant: resolved.surfaceVariant,
    variant: resolved.variant,
  };
  const controlProps = { "data-variant": resolved.variant };
  const slots = recipe();

  return (
    <FileInputStylesContext value={{ slots, variants: {} as never }}>
      <div
        {...rest}
        {...controlProps}
        className={formControlGroupShellRecipe({
          className: cn(slots.root(), className),
          size,
          ...shellArgs,
        })}
        data-disabled={disabled ? true : undefined}
        data-part="root"
        data-scope="file-input"
        data-size={size}
        role="group"
      >
        {children}
      </div>
    </FileInputStylesContext>
  );
}

function FileInputControl({ className, ...rest }: FileInputControlProps) {
  const { slots } = useStyles();

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
  const { slots } = useStyles();

  return (
    <InputGroupText {...rest} className={slots.label({ className })}>
      {children}
    </InputGroupText>
  );
}
// #endregion

// #region Closed
export function FileInput({
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
    <FileInputRoot
      className={className}
      disabled={disabled}
      recipe={recipe}
      size={size}
      variant={variant}
    >
      <FileInputControl
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
