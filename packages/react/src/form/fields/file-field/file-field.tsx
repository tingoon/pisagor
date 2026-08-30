import type { FileInputProps } from "../../../components";
import { FileInput } from "../../../components";
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
