import { PhCopy, PhFile } from "@phosphor-icons/vue";
import { InputGroup } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const CodeEditorInput = defineComponent({
  inheritAttrs: false,
  name: "CodeEditorInput",
  setup() {
    return () =>
      h(InputGroup as ArkPart, null, () => [
        h(InputGroup.Textarea as ArkPart, {
          class: "font-mono text-sm",
          placeholder: "console.log('Hello, world!');",
        }),
        h(InputGroup.Addon as ArkPart, { align: "block-start" }, () => [
          h(PhFile, { class: "text-muted-foreground" }),
          h(InputGroup.Text as ArkPart, { class: "font-mono" }, () => "script.js"),
          h(
            InputGroup.Button as ArkPart,
            {
              "aria-label": "Copy",
              class: "ml-auto",
              size: "icon-xs",
              type: "button",
              variant: "ghost",
            },
            () => h(PhCopy, { "aria-hidden": true }),
          ),
        ]),
      ]);
  },
});
