<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Autocomplete, InputGroup } from "@pisagor/svelte";
import AppleLogoIcon from "phosphor-svelte/lib/AppleLogoIcon";

const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });
</script>

<Autocomplete.Root
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Autocomplete.Input placeholder="Search fruits...">
        <InputGroup.Addon align="inline-start">
          <AppleLogoIcon />
        </InputGroup.Addon>
      </Autocomplete.Input>
      <Autocomplete.Content>
        <Autocomplete.Empty />
        <Autocomplete.List>
          {#each collection.items as item}
<Autocomplete.Item item={item}>
              {item.label}
            </Autocomplete.Item>
{/each}
        </Autocomplete.List>
      </Autocomplete.Content>
    </Autocomplete.Root>
