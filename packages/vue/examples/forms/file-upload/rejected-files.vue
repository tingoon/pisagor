<script lang="ts" setup>
import { FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload accept="image/*" :max-file-size="1024 * 1024" :max-files="3">
    <FileUpload.Dropzone class="w-full">
      <FileUpload.DropzoneIcon />
      <FileUpload.Title>Drop up to 3 images</FileUpload.Title>
      <FileUpload.Helper>Images only, max 1 MB each.</FileUpload.Helper>
    </FileUpload.Dropzone>
    <FileUpload.List />
  </FileUpload>
</template>
