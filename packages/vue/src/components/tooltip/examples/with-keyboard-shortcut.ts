import { Button, Kbd } from "@pisagor/vue";
import { defineComponent, Fragment, h } from "vue";
import type { ArkPart } from "../../../internal/types";
import { Tooltip } from "..";
export default defineComponent({
  name: "WithKeyboardShortcut",
  setup() {
    return () =>
      h(
        Tooltip as ArkPart,
        {
          children: h(
            Button as ArkPart,
            { variant: "outline" },
            () => "Add to library",
          ),
          classNames: { content: "flex items-center gap-2" },
          content: h(Fragment, null, [
            h("p", null, "Add to library"),
            h(Kbd.Group as ArkPart, { class: "ml-1.5 inline" }, () => [
              h(Kbd as ArkPart, null, () => "⌘"),
              h(Kbd as ArkPart, null, () => "K"),
            ]),
          ]),
        },
        () => undefined,
      );
  },
});
