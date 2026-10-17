<script lang="ts">
import source from "./trigger.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PhPaperclip } from "@phosphor-icons/vue";
import { Button, FileUpload } from "@pisagor/vue";
</script>

<template>
  <FileUpload>
    <div class="flex justify-center">
      <FileUpload.Trigger as-child>
        <Button variant="outline">
          <PhPaperclip />
          Browse files
        </Button>
      </FileUpload.Trigger>
    </div>
    <FileUpload.List />
  </FileUpload>
</template>
