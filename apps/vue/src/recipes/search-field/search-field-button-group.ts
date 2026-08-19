import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue/button";
import { InputGroup } from "@pisagor/vue/input-group";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const SearchFieldButtonGroup = defineComponent({
  inheritAttrs: false,
  name: "SearchFieldButtonGroup",
  setup() {
    return () =>
      h(InputGroup as ArkPart, null, () => [
        h(InputGroup.Input as ArkPart, { placeholder: "Search...", type: "search" }),
        h(InputGroup.Addon as ArkPart, { align: "inline-end" }, () =>
          h(Button as ArkPart, { type: "button", variant: "outline" }, () =>
            h(PhMagnifyingGlass, { "aria-hidden": true }),
          ),
        ),
      ]);
  },
});
