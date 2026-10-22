<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue";
import { PhCaretUpDown, PhCheck } from "@phosphor-icons/vue";
import { Combobox, InputGroup } from "@pisagor/vue";
import { computed } from "vue";

const initialItems = [
  { continent: "North America", label: "Canada", value: "ca" },
  { continent: "North America", label: "United States", value: "us" },
  { continent: "North America", label: "Mexico", value: "mx" },
  { continent: "Europe", label: "United Kingdom", value: "uk" },
  { continent: "Europe", label: "Germany", value: "de" },
  { continent: "Europe", label: "France", value: "fr" },
  { continent: "Asia", label: "Japan", value: "jp" },
  { continent: "Asia", label: "South Korea", value: "kr" },
  { continent: "Asia", label: "China", value: "cn" },
];

const groups = computed(() => collection.group());

const collection = createListCollection({
  groupBy: (item) => item.continent,
  items: initialItems,
});

function filter(_inputValue: string) {}
</script>

<template>
  <Combobox.Root
    :collection="collection"
    @input-value-change="
      (details: { inputValue: string }) => filter(details.inputValue)
    "
  >
    <Combobox.Control>
      <InputGroup>
        <Combobox.Input as-child>
          <InputGroup.Input placeholder="Select a timezone" />
        </Combobox.Input>
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button as-child size="icon-xs" variant="ghost">
            <Combobox.Trigger>
              <PhCaretUpDown aria-hidden />
            </Combobox.Trigger>
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup>
    </Combobox.Control>
    <Teleport to="body">
      <Combobox.Positioner>
        <Combobox.Content class="w-60">
          <Combobox.List>
            <Combobox.ItemGroup
              v-for="[continent, group] in groups"
              :key="continent"
            >
              <Combobox.ItemGroupLabel>{{ continent }}</Combobox.ItemGroupLabel>
              <Combobox.Item
                v-for="item in group"
                :key="item.value"
                :item="item"
                persist-focus
              >
                {{ item.label }}
                <Combobox.ItemIndicator>
                  <PhCheck />
                </Combobox.ItemIndicator>
              </Combobox.Item>
            </Combobox.ItemGroup>
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Positioner>
    </Teleport>
  </Combobox.Root>
</template>
