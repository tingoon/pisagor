<script lang="ts" setup>
import { Button, Field, Input, Popover } from "@pisagor/vue";

const fields = [
  { label: "Width", value: "100%" },
  { label: "Max. width", value: "300px" },
  { label: "Height", value: "25px" },
  { label: "Max. height", value: "none" },
];
</script>

<template>
  <Popover
    :class-names="{ base: 'w-80' }"
    description="Set the dimensions for the layer."
    title="Dimensions"
  >
    <template #trigger>
      <Button variant="outline">Open</Button>
    </template>
    <Field.Group class="gap-2">
      <Field
        v-for="field in fields"
        :key="field.label"
        class="grid grid-cols-3 items-center gap-2"
      >
        <Field.Label>{{ field.label }}</Field.Label>
        <Input class="col-span-2" :default-value="field.value" />
      </Field>
    </Field.Group>
  </Popover>
</template>
