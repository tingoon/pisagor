<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";
import { Field, Select } from "@pisagor/vue";

const collection = createListCollection({
  items: ["Brazil", "Mexico", "Ireland"],
});
</script>

<template>
  <Field>
    <Field.Label>Country</Field.Label>
    <Select.Root :collection="collection">
      <Select.Trigger class="w-full">
        <Select.ValueText placeholder="Select a country" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item v-for="item in collection.items" :key="item" :item="item">
          {{ item }}
        </Select.Item>
      </Select.Content>
    </Select.Root>
    <Field.Description>Used for shipping estimates</Field.Description>
  </Field>
</template>
