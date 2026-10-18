<script lang="ts" setup>
import { PhTrash } from "@phosphor-icons/vue";
import { Button, FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload>
    <FileUpload.ClearTrigger as-child class="absolute top-2 right-2">
      <Button aria-label="Clear files" size="icon-sm" variant="ghost">
        <PhTrash />
      </Button>
    </FileUpload.ClearTrigger>
    <FileUpload.Dropzone class="w-full">
      <FileUpload.DropzoneIcon />
      <FileUpload.Title>Drop files here</FileUpload.Title>
    </FileUpload.Dropzone>
    <FileUpload.List />
  </FileUpload>
</template>
