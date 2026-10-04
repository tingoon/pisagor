import type { ComponentProps } from "svelte";
import type RichTextEditorField from "./rich-text-editor-field.svelte";

export type RichTextEditorFieldProps = ComponentProps<
  typeof RichTextEditorField
>;
export { default as RichTextEditorField } from "./rich-text-editor-field.svelte";
