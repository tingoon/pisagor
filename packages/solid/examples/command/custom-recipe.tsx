import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { commandRecipe } from "@pisagor/recipes";
import { Command } from "@pisagor/solid";
import { For } from "solid-js";
import { tv } from "tailwind-variants";

const brandCommandRecipe = tv({
  extend: commandRecipe,
  slots: {
    base: "border-emerald-500/40",
    inputIcon: "text-emerald-600",
  },
  variants: {},
});

export function CustomRecipe() {
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
  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  return (
    <Command
      collection={collection()}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
      recipe={brandCommandRecipe}
    >
      <Command.Input />
      <Command.Content>
        <Command.Empty />
        <Command.List>
          <For each={collection().group()}>
            {([group, items], index) => (
              <>
                {index() !== 0 && <Command.Separator />}
                <Command.ItemGroup heading={group}>
                  <For each={items}>
                    {(item) => (
                      <Command.Item item={item}>
                        {item.label}
                        <Command.Shortcut>{item.shortcut}</Command.Shortcut>
                      </Command.Item>
                    )}
                  </For>
                </Command.ItemGroup>
              </>
            )}
          </For>
        </Command.List>
      </Command.Content>
    </Command>
  );
}
