import { Command } from "@pisagor/react";

export function Shortcuts() {
  const initialItems = [
    { label: "New file", shortcut: "⌘N", value: "new" },
    { label: "Save", shortcut: "⌘S", value: "save" },
    { label: "Copy", shortcut: "⌘C", value: "copy" },
    { label: "Paste", shortcut: "⌘V", value: "paste" },
    { label: "Undo", shortcut: "⌘Z", value: "undo" },
    { label: "Find", shortcut: "⌘F", value: "find" },
  ];

  return <Command items={initialItems} placeholder="Search..." />;
}
