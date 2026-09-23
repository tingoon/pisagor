<script lang="ts" setup >
import { createListCollection } from "@ark-ui/vue/collection";
import { Combobox, Field } from "@pisagor/vue";
import { computed, ref } from "vue";
import { TagsInput } from "..";

const frameworks = ["React", "Solid", "Vue", "Svelte", "Angular", "Qwik"];
const tags = ref<string[]>(["React", "Vue"]);
const collection = computed(() =>
  createListCollection({
    items: frameworks.filter((item) => !tags.value.includes(item)),
  }),
);

function onTagsChange(details: { value: string[] }) {
  tags.value = details.value;
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
      <TagsInput.Root class="w-full" :value="tags" @value-change="onTagsChange">
        <TagsInput.Context v-slot="{ value }">
          <TagsInput.Item v-for="(tag, index) in value" :key="tag" :index="index" :value="tag">
            {{ tag }}
          </TagsInput.Item>
          <Combobox.Control>
            <TagsInput.Input placeholder="Add framework" />
          </Combobox.Control>
        </TagsInput.Context>
      </TagsInput.Root>
      <Combobox.Content>
        <Combobox.Item v-for="item in collection.items" :key="item" :item="item">
          {{ item }}
        </Combobox.Item>
      </Combobox.Content>
    </Combobox.Root>
  </Field>
</template>
