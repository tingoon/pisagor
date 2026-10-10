<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { commandRecipe } from "@pisagor/recipes";
import { Command } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandCommandRecipe = tv({
  extend: commandRecipe,
  slots: {
    base: "border-emerald-500/40",
    inputIcon: "text-emerald-600",
  },
  variants: {},
});

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
const filters = useFilter({ sensitivity: "base" });
const { collection, filter } = useListCollection({
  filter(itemString, filterText) {
    return filters().contains(itemString, filterText);
  },
  groupBy: (item) => item.group,
  initialItems,
});
</script>

<Command
  {collection}
  onInputValueChange={({ inputValue }) => filter(inputValue)}
  recipe={brandCommandRecipe}
>
  <Command.Input />
  <Command.Content>
    <Command.Empty />
    <Command.List>
      {#each collection().group() as [group, items], index}
        {#if index !== 0}
          <Command.Separator />
        {/if}
        <Command.ItemGroup heading={group}>
          {#each items as item}
            <Command.Item {item}>
              {item.label}
              <Command.Shortcut>{item.shortcut}</Command.Shortcut>
            </Command.Item>
          {/each}
        </Command.ItemGroup>
      {/each}
    </Command.List>
  </Command.Content>
</Command>
