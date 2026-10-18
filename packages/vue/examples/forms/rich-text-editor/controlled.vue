<script lang="ts" setup>
import { RichTextEditor } from "@pisagor/vue/rich-text-editor";
import { ref } from "vue";

const value = ref("<p>Controlled content</p>");
const onValueChange = (next: string) => {
  value.value = next;
};
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <RichTextEditor :on-value-change="onValueChange" :value="value" />
    <pre class="bg-muted overflow-auto rounded-lg p-3 text-xs">{{ value }}</pre>
  </div>
</template>
