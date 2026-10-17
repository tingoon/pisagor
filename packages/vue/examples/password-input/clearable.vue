<script lang="ts">
import source from "./clearable.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { PasswordInput } from "@pisagor/vue";
import { ref } from "vue";

const value = ref("");

function onValueChange(next: string) {
  value.value = next;
}
</script>

<template>
  <PasswordInput
    clearable
    placeholder="Enter password"
    :value="value"
    @value-change="onValueChange"
  />
</template>
