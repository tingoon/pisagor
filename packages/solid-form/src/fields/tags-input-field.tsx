import { TagsInput, type TagsInputProps } from "@pisagor/solid";
import { splitProps } from "solid-js";
import {
  type FieldPresentationProps,
  FieldShell,
} from "../internal/field-shell";

// #region Types
type TagsInputControlProps = Omit<TagsInputProps, "invalid" | "name">;

export interface TagsInputFieldProps
  extends FieldPresentationProps,
    TagsInputControlProps {
  name?: string;
  onBlur?: () => void;
}
// #endregion

// #region Component
export function TagsInputField(props: TagsInputFieldProps) {
  const [local, tagsInputProps] = splitProps(props, [
    "orientation",
    "invalid",
    "name",
    "value",
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
      <TagsInput
        {...tagsInputProps}
        {...(local.value !== undefined ? { value: local.value } : {})}
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
