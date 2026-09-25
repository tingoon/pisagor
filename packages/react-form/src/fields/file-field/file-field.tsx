import type { FileInputProps } from "@pisagor/react";
import { FileInput } from "@pisagor/react";
import {
  type FieldPresentationProps,
  FieldShell,
} from "../../internal/field-shell";

// #region Types
type FileInputControlProps = Omit<
  FileInputProps,
  "invalid" | "name" | "onFilesChange"
>;

export interface FileFieldProps
  extends FieldPresentationProps,
    FileInputControlProps {
  name?: string;
  onBlur?: () => void;
}
// #endregion

// #region Component
export function FileField({
  orientation,
  invalid,
  name,
  description,
  error,
  id,
  label,
  labelAccessory,
  labelProps,
  onBlur,
  onValueChange,
  className,
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
      orientation={orientation}
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
