<script lang="ts" setup>
import { Button, FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload disabled title="Drop files here">
    <template #trigger>
      <Button>Browse files</Button>
    </template>
  </FileUpload>
</template>
