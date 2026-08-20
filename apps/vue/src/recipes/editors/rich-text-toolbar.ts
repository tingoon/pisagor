import { PhTextB, PhTextItalic, PhTextStrikethrough, PhTextUnderline } from "@phosphor-icons/vue";
import { Button, Tooltip } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const RichTextToolbar = defineComponent({
  inheritAttrs: false,
  name: "RichTextToolbar",
  setup() {
    return () =>
      h("div", { class: "flex items-center gap-2" }, () => [
        h(
          Tooltip as ArkPart,
          {
            children: h(
              Button as ArkPart,
              { size: "icon-md", type: "button", variant: "outline" },
              () => h(PhTextB, { "aria-hidden": true }),
            ),
            content: "Bold",
          },
          () => undefined,
        ),
        h(
          Tooltip as ArkPart,
          {
            children: h(
              Button as ArkPart,
              { size: "icon-md", type: "button", variant: "outline" },
              () => h(PhTextItalic, { "aria-hidden": true }),
            ),
            content: "Italic",
          },
          () => undefined,
        ),
        h(
          Tooltip as ArkPart,
          {
            children: h(
              Button as ArkPart,
              { size: "icon-md", type: "button", variant: "outline" },
              () => h(PhTextUnderline, { "aria-hidden": true }),
            ),
            content: "Underline",
          },
          () => undefined,
        ),
        h(
          Tooltip as ArkPart,
          {
            children: h(
              Button as ArkPart,
              { size: "icon-md", type: "button", variant: "outline" },
              () => h(PhTextStrikethrough, { "aria-hidden": true }),
            ),
            content: "Strikethrough",
          },
          () => undefined,
        ),
      ]);
  },
});
