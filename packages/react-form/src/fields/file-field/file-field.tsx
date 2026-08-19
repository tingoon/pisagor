import { FileInput, type FileInputProps } from "@pisagor/react/file-input";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

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

// #region Component
export function FileField({
  className,
  description,
  error,
  id,
  invalid,
  label,
  labelAccessory,
  labelProps,
  name,
  onBlur,
  onValueChange,
  ...fileInputProps
}: FileFieldProps) {
  return (
    <FieldShell
      className={className}
      description={description}
      error={error}
      id={id}
      invalid={invalid}
      label={label}
      labelAccessory={labelAccessory}
      labelProps={labelProps}
    >
      <FileInput
        {...fileInputProps}
        id={id}
        invalid={invalid}
        name={name}
        onBlur={onBlur}
        onValueChange={onValueChange}
      />
    </FieldShell>
  );
}
// #endregion
