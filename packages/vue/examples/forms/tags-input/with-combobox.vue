<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue";
import { Combobox, Field, TagsInput } from "@pisagor/vue";
import { computed, ref } from "vue";

const frameworks = ["React", "Solid", "Vue", "Svelte", "Angular", "Qwik"];
const tags = ref<string[]>(["React", "Vue"]);
const collection = computed(() =>
  createListCollection({
    items: frameworks.filter((item) => !tags.value.includes(item)),
  }),
);

function onTagsChange(value: string[]) {
  tags.value = value;
}
function onComboboxChange(details: { value: string[] }) {
  const next = details.value[0];
  if (!next || tags.value.includes(next)) return;
  tags.value = [...tags.value, next];
}
</script>

<template>
  <Field>
    <Field.Label>Frameworks</Field.Label>
    <Combobox.Root
      selection-behavior="clear"
      :collection="collection"
      :value="[]"
      @value-change="onComboboxChange"
    >
      <TagsInput class="w-full" :value="tags" @value-change="onTagsChange">
        <TagsInput.Context v-slot="{ value }">
          <TagsInput.Item
            v-for="(tag, index) in value"
            :key="tag"
            :index="index"
            :value="tag"
          >
            {{ tag }}
          </TagsInput.Item>
          <Combobox.Input as-child>
            <TagsInput.Input placeholder="Add framework" />
          </Combobox.Input>
        </TagsInput.Context>
      </TagsInput>
      <Teleport to="body">
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.List>
              <Combobox.Empty>
                No frameworks found. Try a different search.
              </Combobox.Empty>
              <Combobox.Item
                v-for="item in collection.items"
                :key="item"
                :item="item"
              >
                {{ item }}
              </Combobox.Item>
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Positioner>
      </Teleport>
    </Combobox.Root>
  </Field>
</template>
