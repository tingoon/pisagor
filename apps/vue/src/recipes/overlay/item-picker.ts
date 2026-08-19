import { Avatar } from "@pisagor/vue/avatar";
import { Button } from "@pisagor/vue/button";
import { DropdownMenu } from "@pisagor/vue/dropdown-menu";
import { defineComponent, h } from "vue";

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
          h(Button as ArkPart, { type: "button", variant: "outline" }, () => "Open"),
        ),
        h(dropdownMenuParts.Content, { class: "w-72" }, () =>
          people.map((person) =>
            h(dropdownMenuParts.Item, { key: person.id, value: person.username }, () => [
              h("div", { class: "[--space:--spacing(2)] flex items-center gap-2" }, () => [
                h(Avatar as ArkPart, {
                  alt: "",
                  class: "grayscale",
                  fallback: person.username.charAt(0).toUpperCase(),
                  size: "sm",
                }),
                h("div", { class: "min-w-0" }, () => [
                  h("div", { class: "font-medium truncate" }, () => person.username),
                  h("div", { class: "text-muted-foreground text-sm truncate" }, () => person.email),
                ]),
              ]),
            ]),
          ),
        ),
      ]);
  },
});
