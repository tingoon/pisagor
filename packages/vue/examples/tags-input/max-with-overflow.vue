<script lang="ts" setup>
import { Field } from "@pisagor/vue";
import { TagsInput } from "../../src/components/tags-input";
</script>

<template>
  <Field>
    <Field.Label>Frameworks</Field.Label>
    <TagsInput
      allow-overflow
      class="w-full"
      :default-value="['React', 'Solid', 'Vue']"
      :max="3"
    />
  </Field>
</template>
