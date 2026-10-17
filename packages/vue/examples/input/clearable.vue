<script lang="ts" setup>
import { Input } from "@pisagor/vue";
import { ref } from "vue";

const value = ref("Hello world");

function onValueChange(next: string) {
  value.value = next;
}
</script>

<template>
  <Input
    clearable
    placeholder="Type to clear"
    :value="value"
    @value-change="onValueChange"
  />
</template>
