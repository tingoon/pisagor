import {
  ArrowBendDownLeftIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@phosphor-icons/react";
import { Command, Kbd } from "@pisagor/react";

export function WithFooter() {
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

  return (
    <Command
      footer={
        <>
          <div className="flex items-center gap-2">
            <Kbd variant="outline">
              <ArrowBendDownLeftIcon className="size-3" />
            </Kbd>
            <span>Select</span>
          </div>
          <div className="flex items-center gap-2">
            <Kbd variant="outline">
              <ArrowUpIcon className="size-3" />
            </Kbd>
            <Kbd variant="outline">
              <ArrowDownIcon className="size-3" />
            </Kbd>
            <span>Navigate</span>
          </div>
        </>
      }
      items={initialItems}
      placeholder="Search..."
    />
  );
}
