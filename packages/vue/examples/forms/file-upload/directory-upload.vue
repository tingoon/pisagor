<script lang="ts" setup>
import { PhFolder } from "@phosphor-icons/vue";
import { Button, FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload class="items-center" directory :dropzone="false">
    <template #trigger>
      <Button size="sm" variant="outline">
        <PhFolder />
        Select folder
      </Button>
    </template>
  </FileUpload>
</template>
