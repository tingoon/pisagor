import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue/button";
import { Field } from "@pisagor/vue/field";
import { Input } from "@pisagor/vue/input";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const SearchFieldInline = defineComponent({
  inheritAttrs: false,
  name: "SearchFieldInline",
  setup() {
    return () =>
      h(Field as ArkPart, { orientation: "horizontal" }, () => [
        h(Input as ArkPart, { placeholder: "Search..." }),
        h(Button as ArkPart, { "aria-label": "Search", size: "icon-md", type: "button" }, () =>
          h(PhMagnifyingGlass, { "aria-hidden": true }),
        ),
      ]);
  },
});
