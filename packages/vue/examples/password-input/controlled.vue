<script lang="ts" setup>
import { PasswordInput } from "@pisagor/vue";
import { ref } from "vue";

const password = ref("");
const onChange = (event) => setPassword(event.target.value);
</script>

<template>
  <PasswordInput
    placeholder="Enter password"
    :value="password"
    @change="onChange"
  />
</template>
