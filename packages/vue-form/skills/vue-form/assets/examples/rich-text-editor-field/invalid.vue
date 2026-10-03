<script lang="ts" setup>
import { RichTextEditorField } from "../../../../../src/fields/rich-text-editor-field";
</script>

<template>
  <RichTextEditorField
    error="Please enter some content."
    id="rich-text-editor-field-body-invalid"
    invalid
    label="Body"
  />
</template>
