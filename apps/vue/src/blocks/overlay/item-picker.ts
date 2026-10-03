import { itemPickerBlock } from "@pisagor/recipes/blocks/overlay";
import { Avatar, Button, DropdownMenu } from "@pisagor/vue";
import { defineComponent, h } from "vue";

const styles = itemPickerBlock();

type ArkPart = Parameters<typeof h>[0];

const people = [
  { email: "jane.doe@example.com", id: "jane", username: "jane.doe" },
  { email: "john.doe@example.com", id: "john", username: "john.doe" },
  { email: "alex.morgan@example.com", id: "alex", username: "alex.morgan" },
];

export const ItemPicker = defineComponent({
  inheritAttrs: false,
  name: "ItemPicker",
  setup() {
    const dropdownMenuParts = DropdownMenu as unknown as {
      Trigger: ArkPart;
      Content: ArkPart;
      Item: ArkPart;
    };

    return () =>
      h(DropdownMenu as ArkPart, null, () => [
        h(dropdownMenuParts.Trigger, { asChild: true }, () =>
          h(
            Button as ArkPart,
            { type: "button", variant: "outline" },
            () => "Choose person",
          ),
        ),
        h(dropdownMenuParts.Content, { class: styles.content() }, () =>
          people.map((person) =>
            h(
              dropdownMenuParts.Item,
              { key: person.id, value: person.username },
              () => [
                h("div", { class: styles.row() }, () => [
                  h(Avatar as ArkPart, {
                    alt: "",
                    class: styles.avatar(),
                    fallback: person.username.charAt(0).toUpperCase(),
                    size: "sm",
                  }),
                  h("div", { class: styles.meta() }, () => [
                    h("div", { class: styles.name() }, () => person.username),
                    h("div", { class: styles.email() }, () => person.email),
                  ]),
                ]),
              ],
            ),
          ),
        ),
      ]);
  },
});
