import { useFilter, useListCollection } from "@ark-ui/react";
import { Command } from "..";

export function Default() {
  const initialItems = [
    { group: "Suggestions", label: "Linear", shortcut: "⌘L", value: "linear" },
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
    { group: "Settings", label: "Settings", shortcut: "⌘,", value: "settings" },
    { group: "Settings", label: "Help", shortcut: "⌘?", value: "help" },
    { group: "Settings", label: "About", shortcut: "⌘I", value: "about" },
    { group: "Settings", label: "Feedback", shortcut: "⌘F", value: "feedback" },
    { group: "Settings", label: "Support", shortcut: "⌘S", value: "support" },
    { group: "Settings", label: "Updates", shortcut: "⌘U", value: "updates" },
    { group: "Settings", label: "Logout", shortcut: "⌘L", value: "logout" },
    { group: "Settings", label: "Sign out", shortcut: "⌘O", value: "sign out" },
    { group: "Settings", label: "Sign in", shortcut: "⌘I", value: "sign in" },
  ];
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  return (
    <Command
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Command.Input />
      <Command.Content>
        <Command.Empty />
        <Command.List>
          {collection.group().map(([group, items], index) => (
            <Command.ItemGroup heading={group} key={group}>
              {items.map((item) => (
                <Command.Item item={item} key={item.value}>
                  {item.label}
                  <Command.Shortcut>{item.shortcut}</Command.Shortcut>
                </Command.Item>
              ))}
              {index < collection.group().length - 1 && <Command.Separator />}
            </Command.ItemGroup>
          ))}
        </Command.List>
      </Command.Content>
    </Command>
  );
}
