import { RichTextEditor } from "../../src/rich-text-editor";

export function Invalid() {
  return {
    components: { RichTextEditor },
    template: '<RichTextEditor default-value="<p></p>" invalid />',
  };
}
