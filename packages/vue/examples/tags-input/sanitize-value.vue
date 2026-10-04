<script lang="ts" setup>
import { Field, TagsInput } from "@pisagor/vue";

const sanitizeValue = (value) => value.trim().toLowerCase();
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
