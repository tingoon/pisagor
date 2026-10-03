import type { FileInputProps } from "@pisagor/solid";
import { FileInput } from "@pisagor/solid";
import { splitProps } from "solid-js";
import {
  type FieldPresentationProps,
  FieldShell,
} from "../../internal/field-shell";

// #region Types
type FileInputControlProps = Omit<
  FileInputProps,
  "invalid" | "name" | "onFilesChange" | "onValueChange"
>;

export interface FileFieldProps
  extends FieldPresentationProps,
    FileInputControlProps {
  name?: string;
  onBlur?: () => void;
  onValueChange?: (files: File[]) => void;
}
// #endregion

// #region Component
export function FileField(props: FileFieldProps) {
  const [local, fileInputProps] = splitProps(props, [
    "orientation",
    "invalid",
    "name",
    "description",
    "error",
    "id",
    "label",
    "labelAccessory",
    "labelProps",
    "onBlur",
    "onValueChange",
    "class",
  ]);

  return (
    <FieldShell
      class={local.class}
      description={local.description}
      error={local.error}
      id={local.id}
      invalid={local.invalid}
      label={local.label}
      labelAccessory={local.labelAccessory}
      labelProps={local.labelProps}
      orientation={local.orientation}
    >
      <FileInput
        {...fileInputProps}
        id={local.id}
        invalid={local.invalid}
        name={local.name}
        onBlur={local.onBlur}
        onValueChange={local.onValueChange}
      />
    </FieldShell>
  );
}
// #endregion
