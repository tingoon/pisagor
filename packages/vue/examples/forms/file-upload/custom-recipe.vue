<script lang="ts" setup>
import { fileUploadRecipe } from "@pisagor/recipes";
import { Button, FileUpload, Separator } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandFileUploadRecipe = tv({
  extend: fileUploadRecipe,
  slots: {
    dropzone:
      "border-emerald-500/40 bg-emerald-500/5 data-dragging:border-emerald-600 data-dragging:bg-emerald-500/10",
    dropzoneIcon: "text-emerald-600",
  },
  variants: {},
});
</script>

<template>
  <FileUpload
    helper="You can upload up to 2 files at a time."
    :recipe="brandFileUploadRecipe"
    title="Drop files here"
  >
    <template #description>
      <div class="flex items-center justify-center gap-2">
        <Separator />
        or
        <Separator />
      </div>
    </template>
    <template #trigger>
      <Button>Browse files</Button>
    </template>
  </FileUpload>
</template>
