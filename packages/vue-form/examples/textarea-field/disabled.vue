<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { TextareaField } from "@pisagor/vue-form";
</script>

<template>
  <TextareaField
    disabled
    id="textarea-field-bio-disabled"
    label="Bio"
    placeholder="Tell us about yourself…"
  />
</template>
