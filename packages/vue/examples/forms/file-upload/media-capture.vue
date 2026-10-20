<script lang="ts" setup>
import { PhCamera } from "@phosphor-icons/vue";
import { Button, FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload capture="environment" class="items-center" :dropzone="false">
    <template #trigger>
      <Button variant="outline">
        <PhCamera />
        Take a picture
      </Button>
    </template>
  </FileUpload>
</template>
