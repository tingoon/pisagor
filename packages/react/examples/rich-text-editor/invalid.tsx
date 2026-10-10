import { RichTextEditor } from "@pisagor/react/rich-text-editor";

export function Invalid() {
  return (
    <RichTextEditor defaultValue="<p>Add at least 20 characters.</p>" invalid />
  );
}
