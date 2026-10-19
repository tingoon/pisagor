<script lang="ts" setup>
import { Button, FileUpload, Separator } from "@pisagor/vue";
</script>

<template>
  <FileUpload
    helper="You can upload up to 2 files at a time."
    title="Drop files here"
  >
    <template #description>
      <div class="flex items-center justify-center gap-2">
        <Separator />
        or
        <Separator />
      </div>
    </template>
    <template #trigger>
      <Button>Browse files</Button>
    </template>
  </FileUpload>
</template>
