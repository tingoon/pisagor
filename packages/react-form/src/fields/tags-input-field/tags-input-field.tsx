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
  orientation,
  invalid,
  name,
  value,
  description,
  error,
  id,
  label,
  labelAccessory,
  labelProps,
  onBlur,
  onValueChange,
  className,
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
      orientation={orientation}
    >
      <TagsInput
        {...tagsInputProps}
        {...(value !== undefined ? { value } : {})}
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
