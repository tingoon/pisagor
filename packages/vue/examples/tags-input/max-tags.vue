<script lang="ts">
import source from "./max-tags.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Field, TagsInput } from "@pisagor/vue";
</script>

<template>
  <Field>
    <Field.Label>Frameworks (max 3)</Field.Label>
    <TagsInput class="w-full" :default-value="['React', 'Solid']" :max="3" />
  </Field>
</template>
