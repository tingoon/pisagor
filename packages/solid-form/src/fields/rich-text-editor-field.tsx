import {
  RichTextEditor,
  type RichTextEditorRootProps,
} from "@pisagor/solid/rich-text-editor";
import { splitProps } from "solid-js";
import {
  type FieldPresentationProps,
  FieldShell,
} from "../internal/field-shell";

// #region Types
type RichTextEditorControlProps = Omit<
  RichTextEditorRootProps,
  "onBlur" | "onChange" | "value" | "children" | "onValueChange"
>;

export interface RichTextEditorFieldProps
  extends FieldPresentationProps,
    RichTextEditorControlProps {
  name?: string;
  value?: string;
  onBlur?: () => void;
  onValueChange?: (value: string) => void;
}
// #endregion

// #region Component
export function RichTextEditorField(props: RichTextEditorFieldProps) {
  const [local, editorProps] = splitProps(props, [
    "orientation",
    "invalid",
    "name",
    "value",
    "aria-label",
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
  const hasVisibleLabel = () => Boolean(local.label || local.labelAccessory);

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
      <RichTextEditor
        {...editorProps}
        {...(local.value !== undefined ? { value: local.value } : {})}
        aria-label={
          hasVisibleLabel()
            ? local["aria-label"]
            : (local["aria-label"] ?? "Rich text editor")
        }
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
