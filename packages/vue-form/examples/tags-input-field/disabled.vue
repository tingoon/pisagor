<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { TagsInputField } from "@pisagor/vue-form";
</script>

<template>
  <TagsInputField
    disabled
    id="tags-input-field-skills-disabled"
    label="Skills"
    :value="['TypeScript']"
  />
</template>
