<script lang="ts" setup>
import { ref } from "vue";
import { Input } from "..";

const value = ref("");
function onValueChange(details?: { value?: unknown; page?: unknown }) {
  if (details && "value" in details) value.value = details.value;
  else if (details && "page" in details) value.value = details.page;
}
</script>

<template>
  <Input placeholder="Enter your message" :value="value" @value-change="onValueChange" />
</template>
