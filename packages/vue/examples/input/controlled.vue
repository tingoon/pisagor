<script lang="ts" setup>
import { Input } from "@pisagor/vue";
import { ref } from "vue";

const value = ref("");

function onValueChange(next: string) {
  value.value = next;
}
</script>

<template>
  <Input
    placeholder="Enter your message"
    :value="value"
    @value-change="onValueChange"
  />
</template>
