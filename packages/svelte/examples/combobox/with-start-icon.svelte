<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Combobox, InputGroup } from "@pisagor/svelte";
import AppleLogoIcon from "phosphor-svelte/lib/AppleLogoIcon";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];
const filters = useFilter({ sensitivity: "base" });

const { collection, filter } = useListCollection({
  filter(itemString, filterText) {
    return filters().contains(itemString, filterText);
  },
  initialItems,
});
</script>

<Combobox.Root
  {collection}
  onInputValueChange={({ inputValue }) => filter(inputValue)}
>
  <Combobox.Input placeholder="Search fruits...">
    <InputGroup.Addon align="inline-start">
      <AppleLogoIcon />
    </InputGroup.Addon>
  </Combobox.Input>
  <Combobox.Content>
    <Combobox.List>
      {#each collection().items as item}
        <Combobox.Item {item}>
          {item.label}
        </Combobox.Item>
      {/each}
    </Combobox.List>
  </Combobox.Content>
</Combobox.Root>
