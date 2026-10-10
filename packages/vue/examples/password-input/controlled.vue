<script lang="ts" setup>
import { PasswordInput } from "@pisagor/vue";
import { ref } from "vue";

const password = ref("");
function onValueChange(next: string) {
  password.value = next;
}
</script>

<template>
  <PasswordInput
    placeholder="Enter password"
    :value="password"
    @value-change="onValueChange"
  />
</template>
