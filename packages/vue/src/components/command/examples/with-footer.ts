import { useListCollection } from "@ark-ui/vue/collection";
import { useFilter } from "@ark-ui/vue/locale";
import { PhArrowBendDownLeft, PhArrowDown, PhArrowUp } from "@phosphor-icons/vue";
import { Kbd } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import type { ArkPart } from "../../../internal/types";
import { Command } from "..";
export default defineComponent({
  name: "WithFooter",
  setup() {
    const initialItems = [
      { group: "App", label: "Settings", shortcut: "⌘,", value: "settings" },
      {
        group: "App",
        label: "Keyboard Shortcuts",
        shortcut: "⌘K",
        value: "shortcuts",
      },
      { group: "App", label: "Help", shortcut: "⌘?", value: "help" },
    ];
    const { contains } = useFilter({ sensitivity: "base" }).value;
    const { collection, filter } = useListCollection({
      filter: contains,
      groupBy: (item) => item.group,
      initialItems,
    });

    return () =>
      h(
        Command,
        {
          collection: collection.value,
          onInputValueChange: (details: { inputValue: string }) => filter(details.inputValue),
        },
        () => [
          h(Command.Input, { placeholder: "Search..." }),
          h(Command.Content, null, () => [
            h(Command.Empty),
            h(Command.List, null, () =>
              collection.value
                .group()
                .map(([group, items]) =>
                  h(Command.ItemGroup, { heading: group, key: group }, () =>
                    items.map((item) =>
                      h(Command.Item as ArkPart, { item, key: item.value }, () => [
                        item.label,
                        h(Command.Shortcut, null, () => item.shortcut),
                      ]),
                    ),
                  ),
                ),
            ),
          ]),
          h(Command.Footer, null, () => [
            h("div", { class: "flex items-center gap-2" }, [
              h(Kbd, { variant: "outline" }, () => h(PhArrowBendDownLeft, { class: "size-3" })),
              h("span", null, "Select"),
            ]),
            h("div", { class: "flex items-center gap-2" }, [
              h(Kbd, { variant: "outline" }, () => h(PhArrowUp, { class: "size-3" })),
              h(Kbd, { variant: "outline" }, () => h(PhArrowDown, { class: "size-3" })),
              h("span", null, "Navigate"),
            ]),
          ]),
        ],
      );
  },
});
