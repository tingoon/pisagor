<script lang="ts">
import source from "./sanitize-value.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Field, TagsInput } from "@pisagor/vue";

const sanitizeValue = (value: string) => value.trim().toLowerCase();
</script>

<template>
  <Field>
    <Field.Label>Frameworks</Field.Label>
    <TagsInput
      class="w-full"
      :default-value="['react']"
      :sanitize-value="sanitizeValue"
    />
  </Field>
</template>
