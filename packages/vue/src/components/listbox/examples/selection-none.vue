<script setup lang="ts">
import { PhPencilSimple, PhPlusSquare, PhTrash } from "@phosphor-icons/vue";
import { Item, Separator } from "@pisagor/vue";
import { Listbox } from "..";

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
</script>

<template>
        <Item.Group variant="outline">
        <Item class="p-1">
          <Listbox.Root aria-label="File actions" class="w-full" :collection="collection" selectionMode="none">
            <Listbox.Content>
              <Listbox.ItemGroup heading="Actions">
                <Listbox.Item :item="collection.items[0]">
                  <div class="flex h-8 items-start justify-start">
                    <PhPlusSquare />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col">
                    <Listbox.ItemText>New file</Listbox.ItemText>
                    <span class="text-muted-foreground text-xs">Create a new file</span>
                  </div>
                  <Listbox.Shortcut>⌘N</Listbox.Shortcut>
                </Listbox.Item>
                <Listbox.Item :item="collection.items[1]">
                  <div class="flex h-8 items-start justify-start">
                    <PhPencilSimple />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col">
                    <Listbox.ItemText>Edit file</Listbox.ItemText>
                    <span class="text-muted-foreground text-xs">Make changes</span>
                  </div>
                  <Listbox.Shortcut>⌘E</Listbox.Shortcut>
                </Listbox.Item>
              </Listbox.ItemGroup>
              <Separator />
              <Listbox.ItemGroup heading="Danger zone">
                <Listbox.Item :item="collection.items[2]" variant="destructive">
                  <div class="flex h-8 items-start justify-start">
                    <PhTrash />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col">
                    <Listbox.ItemText>Delete file</Listbox.ItemText>
                    <span class="text-muted-foreground text-xs">Move to trash</span>
                  </div>
                  <Listbox.Shortcut>⌘D</Listbox.Shortcut>
                </Listbox.Item>
              </Listbox.ItemGroup>
            </Listbox.Content>
          </Listbox.Root>
        </Item>
        </Item.Group>
  
</template>
