import { createListCollection } from "@ark-ui/solid/collection";
import { Button } from "../../button";
import { Command } from "../index";

const items = [
  { label: "Calendar", value: "calendar" },
  { label: "Search Emoji", value: "emoji" },
  { label: "Calculator", value: "calculator" },
] as const;

const collection = createListCollection({ items: [...items] });

export function Default() {
  return (
    <Command.Dialog>
      <Command.DialogTrigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open command
          </Button>
        )}
      />
      <Command.DialogContent>
        <Command collection={collection}>
          <Command.Input placeholder="Type a command..." />
          <Command.List>
            <Command.Empty />
            <Command.ItemGroup>
              <Command.ItemGroupLabel>Suggestions</Command.ItemGroupLabel>
              <Command.Item item={items[0]}>{items[0].label}</Command.Item>
              <Command.Item item={items[1]}>{items[1].label}</Command.Item>
              <Command.Item item={items[2]}>{items[2].label}</Command.Item>
            </Command.ItemGroup>
          </Command.List>
        </Command>
      </Command.DialogContent>
    </Command.Dialog>
  );
}
