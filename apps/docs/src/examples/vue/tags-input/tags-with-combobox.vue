<script lang="ts" setup>
import { useFilter, useListCollection } from "@ark-ui/vue";
import { useTagsInput } from "@ark-ui/vue/tags-input";
import { Combobox, Field, TagsInput } from "@pisagor/vue";
import { computed, useId } from "vue";
import { tagsWithComboboxBlock } from "#/recipes/blocks/tags-input";

defineOptions({ inheritAttrs: false });

const props = defineProps<{ class?: unknown }>();

const styles = tagsWithComboboxBlock();

const FRAMEWORK_ITEMS = [
  "React",
  "Solid",
  "Vue",
  "Svelte",
  "Angular",
  "Preact",
  "Next.js",
  "Astro",
] as const;

const uid = useId();
const ids = {
  control: `tags-control-${uid}`,
  input: `tags-input-${uid}`,
};

const filterReturn = useFilter({ sensitivity: "base" });
const { collection, filter } = useListCollection<string>({
  filter: (itemText: string, filterText: string) =>
    filterReturn.value.contains(itemText, filterText),
  initialItems: [...FRAMEWORK_ITEMS],
});

const tagsInput = useTagsInput({ ids });

const availableItems = computed(() =>
  (collection.value.items ?? []).filter(
    (item: string) => !tagsInput.value.value.includes(item),
  ),
);

function onValueChange(details: string[] | { value: string[] }) {
  const next = Array.isArray(details) ? details[0] : details.value[0];
  if (!next || tagsInput.value.value.includes(next)) return;
  tagsInput.value.addValue(next);
}
</script>

<template>
  <Field :class="props.class">
    <Field.Label :for="ids.input">Frameworks</Field.Label>
    <Combobox.Root
      allow-custom-value
      selection-behavior="clear"
      :collection="collection"
      :ids="ids"
      :model-value="[]"
      @input-value-change="({ inputValue }) => filter(inputValue)"
      @value-change="onValueChange"
    >
      <TagsInput.RootProvider :class="styles.root()" :value="tagsInput">
        <TagsInput.Context v-slot="api">
          <TagsInput.Item
            v-for="(tag, index) in api.value"
            :key="tag"
            :index="index"
            :value="tag"
          >
            {{ tag }}
          </TagsInput.Item>
          <Combobox.FieldInput as-child>
            <TagsInput.Input placeholder="Search framework" />
          </Combobox.FieldInput>
        </TagsInput.Context>
      </TagsInput.RootProvider>
      <Combobox.Content>
        <Combobox.List>
          <Combobox.Empty>No frameworks found</Combobox.Empty>
          <Combobox.Item
            v-for="item in availableItems"
            :key="item"
            :item="item"
          >
            {{ item }}
          </Combobox.Item>
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Root>
  </Field>
</template>
