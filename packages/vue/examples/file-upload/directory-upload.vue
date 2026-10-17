<script lang="ts" setup>
import { PhFolder } from "@phosphor-icons/vue";
import { Button, FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload directory>
    <div class="flex justify-center">
      <FileUpload.Trigger as-child>
        <Button size="sm" variant="outline">
          <PhFolder />
          Select folder
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List />
    </div>
  </FileUpload>
</template>
