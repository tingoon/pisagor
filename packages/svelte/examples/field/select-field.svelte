<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Field, Select } from "@pisagor/svelte";

const collection = createListCollection({
    items: ["Brazil", "Mexico", "Ireland"],
  });
</script>

<Field>
      <Field.Label>Country</Field.Label>
      <Select.Root collection={collection}>
        <Select.Trigger class="w-full">
          <Select.ValueText placeholder="Select a country" />
        </Select.Trigger>
        <Select.Content>
          {#each collection.items as item}
<Select.Item item={item}>
              {item}
            </Select.Item>
{/each}
        </Select.Content>
      </Select.Root>
      <Field.Description>Used for shipping estimates</Field.Description>
    </Field>
