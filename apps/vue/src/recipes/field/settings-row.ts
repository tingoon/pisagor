import { Checkbox } from "@pisagor/vue/checkbox";
import { Field } from "@pisagor/vue/field";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const SettingsRow = defineComponent({
  inheritAttrs: false,
  name: "SettingsRow",
  setup() {
    return () =>
      h(Field.Label as ArkPart, null, () =>
        h(Field as ArkPart, { orientation: "horizontal" }, () => [
          h(Checkbox as ArkPart),
          h(Field.Content as ArkPart, null, () => [
            h(Field.Title as ArkPart, null, () => "Enable notifications"),
            h(
              Field.Description as ArkPart,
              null,
              () => "You can enable or disable notifications at any time.",
            ),
          ]),
        ]),
      );
  },
});
