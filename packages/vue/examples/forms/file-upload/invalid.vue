<script lang="ts" setup>
import { Button, FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload helper="This field is required." invalid title="Drop files here">
    <template #trigger>
      <Button>Browse files</Button>
    </template>
  </FileUpload>
</template>
