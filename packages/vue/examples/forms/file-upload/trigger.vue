<script lang="ts" setup>
import { PhPaperclip } from "@phosphor-icons/vue";
import { Button, FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload class="items-center" :dropzone="false">
    <template #trigger>
      <Button variant="outline">
        <PhPaperclip />
        Browse files
      </Button>
    </template>
  </FileUpload>
</template>
