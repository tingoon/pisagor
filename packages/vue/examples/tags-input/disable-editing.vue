<script lang="ts">
import source from "./disable-editing.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Field, TagsInput } from "@pisagor/vue";
</script>

<template>
  <Field>
    <Field.Label>Frameworks</Field.Label>
    <TagsInput
      class="w-full"
      :default-value="['React', 'Solid']"
      :editable="false"
    />
  </Field>
</template>
