<script lang="ts" setup>
import { FileField } from "@pisagor/vue-form";
</script>

<template>
  <FileField
    accept="application/pdf"
    description="PDF only, up to 5 MB."
    id="file-field-resume"
    label="Resume"
  />
</template>
