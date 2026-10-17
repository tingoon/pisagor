<script lang="ts">
import source from "./invalid.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { RichTextEditor } from "@pisagor/vue/rich-text-editor";
</script>

<template>
  <RichTextEditor default-value="<p></p>" invalid />
</template>
