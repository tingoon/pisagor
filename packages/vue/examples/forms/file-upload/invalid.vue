<script lang="ts" setup>
import { Button, FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload invalid>
    <FileUpload.Dropzone>
      <FileUpload.DropzoneIcon />
      <FileUpload.Title>Drop files here</FileUpload.Title>
      <FileUpload.Trigger as-child>
        <Button>Browse files</Button>
      </FileUpload.Trigger>
      <FileUpload.Helper>This field is required.</FileUpload.Helper>
    </FileUpload.Dropzone>
    <FileUpload.List />
  </FileUpload>
</template>
