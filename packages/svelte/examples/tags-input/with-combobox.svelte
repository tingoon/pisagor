<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Combobox, Field, TagsInput } from "@pisagor/svelte";

const frameworks = [
  "React",
  "Solid",
  "Vue",
  "Svelte",
  "Angular",
  "Preact",
  "Next.js",
  "Astro",
];

let tags = $state<string[]>(["React", "Solid"]);

const collection = $derived(
  createListCollection({
    items: frameworks.filter((item) => !tags.includes(item)),
  }),
);
</script>

<Field>
  <Field.Label>Frameworks</Field.Label>
  <Combobox.Root
    allowCustomValue
    collection={collection}
    onValueChange={(value) => {
      const next = value[0];
      if (next && !tags.includes(next)) {
        tags = [...tags, next];
      }
    }}
    selectionBehavior="clear"
    value={[]}
  >
    <TagsInput
      class="w-full"
      onValueChange={(v) => (tags = v)}
      placeholder="Search framework"
      value={tags}
    />
    <Combobox.Content>
      <Combobox.List>
        <Combobox.Empty>No frameworks found. Try a different search.</Combobox.Empty>
        {#each collection.items as item}
          <Combobox.Item {item}>{item}</Combobox.Item>
        {/each}
      </Combobox.List>
    </Combobox.Content>
  </Combobox.Root>
</Field>
