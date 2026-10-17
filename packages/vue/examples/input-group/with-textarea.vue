<script lang="ts">
import source from "./with-textarea.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { InputGroup } from "@pisagor/vue";
</script>

<template>
  <InputGroup>
    <InputGroup.Textarea placeholder="Write a comment..." rows="3" />
  </InputGroup>
</template>
