<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { TagsInput } from "..";

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
