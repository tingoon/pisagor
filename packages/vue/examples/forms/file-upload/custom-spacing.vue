<script lang="ts" setup>
import { FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload
    :class-names="{
      dropzone: '[--space:--spacing(4)] md:[--space:--spacing(6)]',
    }"
    title="Drop your files here"
  />
</template>
