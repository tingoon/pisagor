<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue";
import { PhX } from "@phosphor-icons/vue";
import { Combobox, Field, InputGroup, TagsInput } from "@pisagor/vue";
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
      <TagsInput.Root class="w-full" :value="tags" @value-change="onTagsChange">
        <TagsInput.Control as-child>
          <InputGroup>
            <TagsInput.Context v-slot="{ value }">
              <TagsInput.Item
                v-for="(tag, index) in value"
                :key="tag"
                :index="index"
                :value="tag"
              >
                <TagsInput.ItemPreview>
                  <TagsInput.ItemText>{{ tag }}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger as-child>
                    <InputGroup.Button size="icon-xs" variant="ghost">
                      <PhX aria-hidden />
                    </InputGroup.Button>
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.ItemPreview>
                <TagsInput.ItemInput as-child>
                  <InputGroup.Input />
                </TagsInput.ItemInput>
              </TagsInput.Item>
              <Combobox.Input as-child>
                <TagsInput.Input as-child>
                  <InputGroup.Input placeholder="Add framework" />
                </TagsInput.Input>
              </Combobox.Input>
            </TagsInput.Context>
          </InputGroup>
        </TagsInput.Control>
      </TagsInput.Root>
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
