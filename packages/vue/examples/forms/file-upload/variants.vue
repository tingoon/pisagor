<script lang="ts" setup>
import { Button, FileUpload } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <FileUpload>
      <FileUpload.Dropzone variant="primary">
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Primary</FileUpload.Title>
        <FileUpload.Trigger as-child>
          <Button>Browse files</Button>
        </FileUpload.Trigger>
      </FileUpload.Dropzone>
    </FileUpload>
    <FileUpload>
      <FileUpload.Dropzone variant="secondary">
        <FileUpload.DropzoneIcon />
        <FileUpload.Title>Secondary</FileUpload.Title>
        <FileUpload.Trigger as-child>
          <Button>Browse files</Button>
        </FileUpload.Trigger>
      </FileUpload.Dropzone>
    </FileUpload>
  </div>
</template>
