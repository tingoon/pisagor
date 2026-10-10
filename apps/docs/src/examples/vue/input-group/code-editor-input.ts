import { PhCopy, PhFile } from "@phosphor-icons/vue";
import { InputGroup } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { codeEditorInputBlock } from "#/recipes/blocks/input-group";

const styles = codeEditorInputBlock();

type ArkPart = Parameters<typeof h>[0];

export const CodeEditorInput = defineComponent({
  inheritAttrs: false,
  name: "CodeEditorInput",
  setup() {
    return () =>
      h(InputGroup as ArkPart, null, () => [
        h(InputGroup.Textarea as ArkPart, {
          class: styles.textarea(),
          placeholder: "console.log('Hello, world!');",
        }),
        h(InputGroup.Addon as ArkPart, { align: "block-start" }, () => [
          h(PhFile, { class: styles.icon() }),
          h(
            InputGroup.Text as ArkPart,
            { class: styles.filename() },
            () => "script.js",
          ),
          h(
            InputGroup.Button as ArkPart,
            {
              "aria-label": "Copy",
              class: styles.copy(),
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
