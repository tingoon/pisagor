import { RichTextEditor } from "@pisagor/solid/rich-text-editor";
import { createSignal } from "solid-js";

export function Controlled() {
  const [value, setValue] = createSignal("<p>Controlled content</p>");

  return (
    <div class="flex w-full flex-col gap-3">
      <RichTextEditor onValueChange={setValue} value={value()} />
      <pre class="bg-muted overflow-auto rounded-lg p-3 text-xs">{value()}</pre>
    </div>
  );
}
