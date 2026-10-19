<script lang="ts" setup>
import { useFilter, useListCollection } from "@ark-ui/vue";
import { PhArrowBendDownLeft, PhMagnifyingGlass } from "@phosphor-icons/vue";
import { Button, Command, InputGroup, Kbd } from "@pisagor/vue";
import { ref } from "vue";

const initialItems = [
  { group: "File", label: "New file", shortcut: "⌘N", value: "new" },
  { group: "File", label: "Save", shortcut: "⌘S", value: "save" },
  { group: "File", label: "Open", shortcut: "⌘O", value: "open" },
  { group: "Edit", label: "Undo", shortcut: "⌘Z", value: "undo" },
  { group: "Edit", label: "Redo", shortcut: "⌘Z", value: "redo" },
  { group: "Edit", label: "Cut", shortcut: "⌘X", value: "cut" },
  { group: "Edit", label: "Copy", shortcut: "⌘C", value: "copy" },
];
const open = ref(false);
const filterFn = useFilter({ sensitivity: "base" });
const { collection, filter } = useListCollection({
  filter: (itemText, query) => filterFn.value.contains(itemText, query),
  groupBy: (item) => item.group,
  initialItems,
});
</script>

<template>
  <Command.Dialog
    :open="open"
    @open-change="(details: { open: boolean }) => (open = details.open)"
  >
    <template #trigger>
      <Button variant="outline">Open Command Palette</Button>
    </template>
    <Command.Root
      :collection="collection"
      @input-value-change="
        (details: { inputValue: string }) => filter(details.inputValue)
      "
      @value-change="open = false"
    >
      <Command.Control>
        <InputGroup class="bg-input/32 rounded-lg">
          <InputGroup.Addon>
            <PhMagnifyingGlass aria-hidden class="opacity-64" />
          </InputGroup.Addon>
          <Command.Input as-child>
            <InputGroup.Input placeholder="Search commands..." />
          </Command.Input>
        </InputGroup>
      </Command.Control>
      <Command.Content>
        <Command.Empty>No results found. Try a different search.</Command.Empty>
        <Command.List>
          <Command.ItemGroup
            v-for="[group, items] in collection.group()"
            :key="group"
          >
            <Command.ItemGroupLabel>{{ group }}</Command.ItemGroupLabel>
            <Command.Item v-for="item in items" :key="item.value" :item="item">
              {{ item.label }}
              <Command.Shortcut>{{ item.shortcut }}</Command.Shortcut>
            </Command.Item>
          </Command.ItemGroup>
        </Command.List>
      </Command.Content>
      <Command.Footer>
        <div class="flex items-center gap-2">
          <Kbd variant="outline">
            <PhArrowBendDownLeft class="size-3" />
          </Kbd>
          <span class="text-muted-foreground">To select</span>
        </div>
      </Command.Footer>
    </Command.Root>
  </Command.Dialog>
</template>
