<script lang="ts" setup>
import { Textarea } from "@pisagor/vue";
import { ref } from "vue";

const value = ref("");

function onValueChange(next: string) {
  value.value = next;
}
</script>

<template>
  <Textarea
    clearable
    placeholder="Type to clear"
    :value="value"
    @value-change="onValueChange"
  />
</template>
