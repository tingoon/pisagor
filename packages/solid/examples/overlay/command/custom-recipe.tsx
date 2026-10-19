import { Command } from "@pisagor/solid";
import { commandRecipe } from "@pisagor/recipes";
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

  return <Command items={initialItems} recipe={brandCommandRecipe} />;
}
