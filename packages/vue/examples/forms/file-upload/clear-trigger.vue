<script lang="ts" setup>
import { PhTrash } from "@phosphor-icons/vue";
import { Button, FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload
    :class-names="{
      clearTrigger: 'absolute top-2 right-2',
      dropzone: 'w-full',
    }"
    title="Drop files here"
  >
    <template #clearTrigger>
      <Button size="icon-sm" variant="ghost">
        <PhTrash />
      </Button>
    </template>
  </FileUpload>
</template>
