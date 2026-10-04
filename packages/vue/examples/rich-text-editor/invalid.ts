import { RichTextEditor } from "@pisagor/vue/rich-text-editor";

export function Invalid() {
  return {
    components: { RichTextEditor },
    template: '<RichTextEditor default-value="<p></p>" invalid />',
  };
}
