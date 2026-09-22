import { RichTextEditor } from "..";

export function Invalid() {
  return {
    components: { RichTextEditor },
    template: '<RichTextEditor default-value="<p></p>" invalid />',
  };
}
