<script lang="ts" setup>
import { RichTextEditorField } from "@pisagor/vue-form";
</script>

<template>
  <RichTextEditorField
    error="Please enter some content."
    id="rich-text-editor-field-body-invalid"
    invalid
    label="Body"
  />
</template>
