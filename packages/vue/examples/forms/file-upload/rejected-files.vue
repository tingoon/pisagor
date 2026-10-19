<script lang="ts" setup>
import { FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload
    accept="image/*"
    :class-names="{ dropzone: 'w-full' }"
    helper="Images only, max 1 MB each."
    :max-file-size="1024 * 1024"
    :max-files="3"
    title="Drop up to 3 images"
  />
</template>
