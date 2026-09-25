import { useListCollection } from "@ark-ui/vue/collection";
import { useFilter } from "@ark-ui/vue/locale";
import { defineComponent, h } from "vue";
import type { ArkPart } from "../../../internal/types";
import { Command } from "..";

export default defineComponent({
  name: "Default",
  setup() {
    const initialItems = [
      {
        group: "Suggestions",
        label: "Linear",
        shortcut: "⌘L",
        value: "linear",
      },
      { group: "Suggestions", label: "Figma", shortcut: "⌘F", value: "figma" },
      { group: "Suggestions", label: "Slack", shortcut: "⌘S", value: "slack" },
      {
        group: "Suggestions",
        label: "YouTube",
        shortcut: "⌘Y",
        value: "youtube",
      },
      {
        group: "Suggestions",
        label: "Raycast",
        shortcut: "⌘R",
        value: "raycast",
      },
      {
        group: "Settings",
        label: "Settings",
        shortcut: "⌘,",
        value: "settings",
      },
      { group: "Settings", label: "Help", shortcut: "⌘?", value: "help" },
      { group: "Settings", label: "About", shortcut: "⌘I", value: "about" },
      {
        group: "Settings",
        label: "Feedback",
        shortcut: "⌘F",
        value: "feedback",
      },
      { group: "Settings", label: "Support", shortcut: "⌘S", value: "support" },
      { group: "Settings", label: "Updates", shortcut: "⌘U", value: "updates" },
      { group: "Settings", label: "Logout", shortcut: "⌘L", value: "logout" },
      {
        group: "Settings",
        label: "Sign out",
        shortcut: "⌘O",
        value: "sign out",
      },
      { group: "Settings", label: "Sign in", shortcut: "⌘I", value: "sign in" },
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
          onInputValueChange: (details: { inputValue: string }) =>
            filter(details.inputValue),
        },
        () => [
          h(Command.Input),
          h(Command.Content, null, () => [
            h(Command.Empty),
            h(Command.List, null, () =>
              collection.value
                .group()
                .map(([group, items], index) => [
                  h(Command.ItemGroup, { heading: group, key: group }, () =>
                    items.map((item) =>
                      h(
                        Command.Item as ArkPart,
                        { item, key: item.value },
                        () => [
                          item.label,
                          h(Command.Shortcut, null, () => item.shortcut),
                        ],
                      ),
                    ),
                  ),
                  index < collection.value.group().length - 1
                    ? h(Command.Separator)
                    : null,
                ]),
            ),
          ]),
        ],
      );
  },
});
