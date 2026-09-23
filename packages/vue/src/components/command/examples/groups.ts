import { useListCollection } from "@ark-ui/vue/collection";
import { useFilter } from "@ark-ui/vue/locale";
import { defineComponent, h } from "vue";
import type { ArkPart } from "../../../internal/types";
import { Command } from "..";

export default defineComponent({
  name: "Groups",
  setup() {
    const initialItems = [
      { group: "Fruit", label: "Apple", value: "apple" },
      { group: "Fruit", label: "Banana", value: "banana" },
      { group: "Fruit", label: "Cherry", value: "cherry" },
      { group: "Countries", label: "United States", value: "us" },
      { group: "Countries", label: "United Kingdom", value: "uk" },
      { group: "Countries", label: "Germany", value: "de" },
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
                .map(([group, items], index) => [
                  index !== 0 ? h(Command.Separator, { key: `${group}-separator` }) : null,
                  h(Command.ItemGroup, { heading: group, key: group }, () =>
                    items.map((item) =>
                      h(Command.Item as ArkPart, { item, key: item.value }, () => item.label),
                    ),
                  ),
                ]),
            ),
          ]),
        ],
      );
  },
});
