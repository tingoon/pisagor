<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Button, Item } from "@pisagor/svelte";
import { Listbox } from "@pisagor/svelte/listbox";
import CaretLeftIcon from "phosphor-svelte/lib/CaretLeftIcon";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";

let available = $state(["Brazil", "Ireland"]);
let selected = $state<string[]>(["Mexico"]);
let availableValue = $state<string[]>([]);
let selectedValue = $state<string[]>([]);

const availableCollection = $derived(
  createListCollection({
    items: available.map((label) => ({ label, value: label })),
  }),
);
const selectedCollection = $derived(
  createListCollection({
    items: selected.map((label) => ({ label, value: label })),
  }),
);

const moveToSelected = () => {
  const moving = availableValue;
  available = available.filter((item) => !moving.includes(item));
  selected = [...selected, ...moving];
  availableValue = [];
};

const moveToAvailable = () => {
  const moving = selectedValue;
  selected = selected.filter((item) => !moving.includes(item));
  available = [...available, ...moving];
  selectedValue = [];
};
</script>

<div class="flex gap-2 max-sm:flex-col">
  <Item.Group variant="outline">
    <Item class="w-full p-1">
      <Listbox.Root
        class="min-h-40"
        collection={availableCollection}
        onValueChange={(next) =>
          (availableValue = Array.isArray(next) ? next : [next])}
        selectionMode="multiple"
        value={availableValue}
      >
        <Listbox.Content>
          <Listbox.ItemGroup heading="Available">
            {#each availableCollection.items as item}
              <Listbox.Item {item}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            {/each}
          </Listbox.ItemGroup>
        </Listbox.Content>
      </Listbox.Root>
    </Item>
  </Item.Group>

  <div class="flex flex-col justify-center gap-2">
    <Button
      aria-label="Move to selected"
      disabled={availableValue.length === 0}
      onClick={moveToSelected}
      size="icon-sm"
      variant="outline"
    >
      <CaretRightIcon />
    </Button>
    <Button
      aria-label="Move to available"
      disabled={selectedValue.length === 0}
      onClick={moveToAvailable}
      size="icon-sm"
      variant="outline"
    >
      <CaretLeftIcon />
    </Button>
  </div>

  <Item.Group variant="outline">
    <Item class="w-full p-1">
      <Listbox.Root
        class="min-h-40"
        collection={selectedCollection}
        onValueChange={(next) =>
          (selectedValue = Array.isArray(next) ? next : [next])}
        selectionMode="multiple"
        value={selectedValue}
      >
        <Listbox.Content>
          <Listbox.ItemGroup heading="Selected">
            {#each selectedCollection.items as item}
              <Listbox.Item {item}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            {/each}
          </Listbox.ItemGroup>
        </Listbox.Content>
      </Listbox.Root>
    </Item>
  </Item.Group>
</div>
