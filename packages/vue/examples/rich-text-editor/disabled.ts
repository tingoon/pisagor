import { RichTextEditor } from "../../src/rich-text-editor";

export function Disabled() {
  return {
    components: { RichTextEditor },
    template:
      '<RichTextEditor default-value="<p>This editor is unavailable.</p>" disabled />',
  };
}
