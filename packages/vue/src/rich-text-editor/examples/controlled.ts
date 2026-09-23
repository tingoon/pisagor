import { ref } from "vue";
import { RichTextEditor } from "..";

export function Controlled() {
  return {
    components: { RichTextEditor },
    setup() {
      const value = ref("<p>Controlled content</p>");
      const onValueChange = (next: string) => {
        value.value = next;
      };
      return { onValueChange, value };
    },
    template: `
        <div class="flex w-full flex-col gap-3">
          <RichTextEditor :on-value-change="onValueChange" :value="value" />
          <pre class="overflow-auto rounded-lg bg-muted p-3 text-xs">{{ value }}</pre>
        </div>
      `,
  };
}
