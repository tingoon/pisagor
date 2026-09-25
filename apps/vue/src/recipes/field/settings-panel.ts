import { Checkbox, Field, Surface } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const SettingsPanel = defineComponent({
  inheritAttrs: false,
  name: "SettingsPanel",
  setup() {
    return () =>
      h(
        Surface as ArkPart,
        {
          bordered: true,
          class: "flex w-full max-w-md flex-col gap-1",
          padding: "sm",
          rounded: true,
          variant: "secondary",
        },
        () =>
          h(Field.Group as ArkPart, null, () => [
            h(Field as ArkPart, { orientation: "horizontal" }, () => [
              h(Checkbox as ArkPart, { defaultChecked: true }),
              h(
                Field.Label as ArkPart,
                null,
                () => "Accept terms and conditions",
              ),
            ]),
            h(Field as ArkPart, { orientation: "horizontal" }, () => [
              h(Checkbox as ArkPart, null),
              h(Field.Content as ArkPart, null, () => [
                h(Field.Label as ArkPart, null, () => "Receive notifications"),
                h(
                  Field.Description as ArkPart,
                  null,
                  () =>
                    "You'll receive a notification when someone posts a comment",
                ),
              ]),
            ]),
            h(Field as ArkPart, { orientation: "horizontal" }, () => [
              h(Checkbox as ArkPart, null),
              h(Field.Content as ArkPart, null, () => [
                h(
                  Field.Label as ArkPart,
                  null,
                  () => "Receive marketing emails",
                ),
              ]),
            ]),
          ]),
      );
  },
});
