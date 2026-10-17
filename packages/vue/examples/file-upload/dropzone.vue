<script lang="ts">
import source from "./dropzone.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload>
    <FileUpload.Dropzone>
      <FileUpload.DropzoneIcon />
      <FileUpload.Title>Drop your files here</FileUpload.Title>
    </FileUpload.Dropzone>
    <FileUpload.List />
  </FileUpload>
</template>
