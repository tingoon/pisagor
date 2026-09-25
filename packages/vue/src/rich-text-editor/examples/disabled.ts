import { RichTextEditor } from "..";

export function Disabled() {
  return {
    components: { RichTextEditor },
    template:
      '<RichTextEditor default-value="<p>This editor is unavailable.</p>" disabled />',
  };
}
