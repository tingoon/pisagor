import { useListCollection } from "@ark-ui/vue/collection";
import { useFilter } from "@ark-ui/vue/locale";
import { defineComponent, h } from "vue";
import type { ArkPart } from "../../../internal/types";
import { Command } from "..";

export default defineComponent({
  name: "Shortcuts",
  setup() {
    const initialItems = [
      { label: "New file", shortcut: "⌘N", value: "new" },
      { label: "Save", shortcut: "⌘S", value: "save" },
      { label: "Copy", shortcut: "⌘C", value: "copy" },
      { label: "Paste", shortcut: "⌘V", value: "paste" },
      { label: "Undo", shortcut: "⌘Z", value: "undo" },
      { label: "Find", shortcut: "⌘F", value: "find" },
    ];
    const { contains } = useFilter({ sensitivity: "base" }).value;
    const { collection, filter } = useListCollection({
      filter: contains,
      initialItems,
    });

    return () =>
      h(
        Command,
        {
          collection: collection.value,
          onInputValueChange: (details: { inputValue: string }) =>
            filter(details.inputValue),
        },
        () => [
          h(Command.Input, { placeholder: "Search..." }),
          h(Command.Content, null, () => [
            h(Command.Empty),
            h(Command.List, null, () =>
              collection.value.items.map((item) =>
                h(Command.Item as ArkPart, { item, key: item.value }, () => [
                  item.label,
                  h(Command.Shortcut, null, () => item.shortcut),
                ]),
              ),
            ),
          ]),
        ],
      );
  },
});
