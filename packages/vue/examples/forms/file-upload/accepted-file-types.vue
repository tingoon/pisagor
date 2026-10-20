<script lang="ts" setup>
import { FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload
    accept="image/png,image/jpeg"
    :class-names="{ dropzone: 'w-full' }"
    helper="Only PNG and JPEG formats are allowed."
    title="Drop your images here"
  />
</template>
