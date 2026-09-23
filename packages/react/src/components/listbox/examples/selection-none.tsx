import { createListCollection } from "@ark-ui/react";
import { PencilSimpleIcon, PlusSquareIcon, TrashIcon } from "@phosphor-icons/react";
import { Item, Separator } from "@pisagor/react";
import { Listbox } from "..";
export function SelectionNone() {
  const collection = createListCollection({
    items: [
      { label: "New file", section: "actions", value: "new-file" },
      { label: "Edit file", section: "actions", value: "edit-file" },
      {
        label: "Delete file",
        section: "danger",
        value: "delete-file",
      },
    ],
  });
  return (
    <Item.Group variant="outline">
      <Item className="p-1">
        <Listbox.Root
          aria-label="File actions"
          className="w-full"
          collection={collection}
          selectionMode="none"
        >
          <Listbox.Content>
            <Listbox.ItemGroup heading="Actions">
              <Listbox.Item item={collection.items[0]}>
                <div className="flex h-8 items-start justify-start">
                  <PlusSquareIcon />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <Listbox.ItemText>New file</Listbox.ItemText>
                  <span className="text-muted-foreground text-xs">Create a new file</span>
                </div>
                <Listbox.Shortcut>⌘N</Listbox.Shortcut>
              </Listbox.Item>
              <Listbox.Item item={collection.items[1]}>
                <div className="flex h-8 items-start justify-start">
                  <PencilSimpleIcon />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <Listbox.ItemText>Edit file</Listbox.ItemText>
                  <span className="text-muted-foreground text-xs">Make changes</span>
                </div>
                <Listbox.Shortcut>⌘E</Listbox.Shortcut>
              </Listbox.Item>
            </Listbox.ItemGroup>
            <Separator />
            <Listbox.ItemGroup heading="Danger zone">
              <Listbox.Item item={collection.items[2]} variant="destructive">
                <div className="flex h-8 items-start justify-start">
                  <TrashIcon />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <Listbox.ItemText>Delete file</Listbox.ItemText>
                  <span className="text-muted-foreground text-xs">Move to trash</span>
                </div>
                <Listbox.Shortcut>⌘D</Listbox.Shortcut>
              </Listbox.Item>
            </Listbox.ItemGroup>
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    </Item.Group>
  );
}
