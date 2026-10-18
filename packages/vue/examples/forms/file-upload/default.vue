<script lang="ts" setup>
import { Button, FileUpload, Separator } from "@pisagor/vue";
</script>

<template>
  <FileUpload>
    <FileUpload.Dropzone>
      <FileUpload.DropzoneIcon />
      <FileUpload.Title>Drop files here</FileUpload.Title>
      <div class="flex items-center justify-center gap-2">
        <Separator />
        <FileUpload.Description>or</FileUpload.Description>
        <Separator />
      </div>
      <FileUpload.Trigger as-child>
        <Button>Browse files</Button>
      </FileUpload.Trigger>
      <FileUpload.Helper>
        You can upload up to 2 files at a time.
      </FileUpload.Helper>
    </FileUpload.Dropzone>
    <FileUpload.List />
  </FileUpload>
</template>
