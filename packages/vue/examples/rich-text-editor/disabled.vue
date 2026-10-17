<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { RichTextEditor } from "@pisagor/vue/rich-text-editor";
</script>

<template>
  <RichTextEditor default-value="<p>This editor is unavailable.</p>" disabled />
</template>
