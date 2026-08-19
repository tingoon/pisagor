import { RichTextEditor, type RichTextEditorRootProps } from "@pisagor/react/rich-text-editor";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

// #region Types
type RichTextEditorControlProps = SetRequired<
  Omit<RichTextEditorRootProps, "onBlur" | "onChange" | "value" | "children">,
  "onValueChange"
>;

export interface RichTextEditorFieldProps
  extends FieldPresentationProps,
    RichTextEditorControlProps {
  name?: string;
  onBlur?: () => void;
  value?: string;
}
// #endregion

// #region Component
export function RichTextEditorField({
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
  "aria-label": ariaLabel,
  ...editorProps
}: RichTextEditorFieldProps) {
  const hasVisibleLabel = Boolean(label || labelAccessory);

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
      <RichTextEditor
        {...editorProps}
        aria-label={hasVisibleLabel ? ariaLabel : (ariaLabel ?? "Rich text editor")}
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
