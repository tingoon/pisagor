<script lang="ts" setup>
import { Button, FileUpload } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <FileUpload title="Primary" variant="primary">
      <template #trigger>
        <Button>Browse files</Button>
      </template>
    </FileUpload>
    <FileUpload title="Secondary" variant="secondary">
      <template #trigger>
        <Button>Browse files</Button>
      </template>
    </FileUpload>
  </div>
</template>
