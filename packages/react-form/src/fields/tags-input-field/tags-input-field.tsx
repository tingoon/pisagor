import type { TagsInputProps } from "@pisagor/react";
import { TagsInput } from "@pisagor/react";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

// #region Types
type TagsInputControlProps = SetRequired<Omit<TagsInputProps, "invalid" | "name">, "onValueChange">;

export interface TagsInputFieldProps extends FieldPresentationProps, TagsInputControlProps {
  name?: string;
  onBlur?: () => void;
}
// #endregion

// #region Component
export function TagsInputField({
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
  value,
  ...tagsInputProps
}: TagsInputFieldProps) {
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
      <TagsInput
        {...tagsInputProps}
        id={id}
        invalid={invalid}
        name={name}
        onBlur={onBlur}
        onValueChange={onValueChange}
        {...(value !== undefined ? { value } : {})}
      />
    </FieldShell>
  );
}
// #endregion
