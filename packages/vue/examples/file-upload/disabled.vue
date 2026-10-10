<script lang="ts" setup>
import { Button, FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload disabled>
    <FileUpload.Dropzone>
      <FileUpload.DropzoneIcon />
      <FileUpload.Title>Drop files here</FileUpload.Title>
      <FileUpload.Trigger as-child>
        <Button>Browse files</Button>
      </FileUpload.Trigger>
    </FileUpload.Dropzone>
    <FileUpload.List />
  </FileUpload>
</template>
