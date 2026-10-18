<script lang="ts" setup>
import { TextareaField } from "@pisagor/vue-form";
</script>

<template>
  <TextareaField
    error="Please enter a short bio."
    id="textarea-field-bio-invalid"
    invalid
    label="Bio"
    placeholder="Tell us about yourself…"
  />
</template>
