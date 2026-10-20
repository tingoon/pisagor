import {
  ArrowBendDownLeftIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@squidlab/phosphor-solid/icons";
import { Command, Kbd } from "@pisagor/solid";

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
          <div class="flex items-center gap-2">
            <Kbd variant="outline">
              <ArrowBendDownLeftIcon class="size-3" />
            </Kbd>
            <span>Select</span>
          </div>
          <div class="flex items-center gap-2">
            <Kbd variant="outline">
              <ArrowUpIcon class="size-3" />
            </Kbd>
            <Kbd variant="outline">
              <ArrowDownIcon class="size-3" />
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
