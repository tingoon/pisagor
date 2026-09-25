<script lang="ts" setup>
import { ref } from "vue";
import { Input } from "..";

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
