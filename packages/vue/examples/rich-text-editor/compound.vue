<script lang="ts">
import source from "./compound.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { RichTextEditor } from "@pisagor/vue/rich-text-editor";
</script>

<template>
  <RichTextEditor.Root
    default-value="<p>Compose the toolbar and content yourself.</p>"
  >
    <RichTextEditor.Toolbar />
    <RichTextEditor.Content />
  </RichTextEditor.Root>
</template>
