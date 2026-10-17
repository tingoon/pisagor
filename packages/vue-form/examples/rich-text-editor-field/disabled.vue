<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { RichTextEditorField } from "@pisagor/vue-form";
</script>

<template>
  <RichTextEditorField
    default-value="<p>Write a short announcement…</p>"
    disabled
    id="rich-text-editor-field-body-disabled"
    label="Body"
  />
</template>
