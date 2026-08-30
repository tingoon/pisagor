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
  value?: string;
  onBlur?: () => void;
}
// #endregion

// #region Component
export function RichTextEditorField({
  orientation,
  invalid,
  name,
  value,
  "aria-label": ariaLabel,
  description,
  error,
  id,
  label,
  labelAccessory,
  labelProps,
  onBlur,
  onValueChange,
  className,
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
      orientation={orientation}
    >
      <RichTextEditor
        {...editorProps}
        {...(value !== undefined ? { value } : {})}
        aria-label={hasVisibleLabel ? ariaLabel : (ariaLabel ?? "Rich text editor")}
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
