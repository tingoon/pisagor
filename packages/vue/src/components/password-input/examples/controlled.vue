<script lang="ts" setup>
import { ref } from "vue";
import { PasswordInput } from "..";

const password = ref("");
const onChange = (event) => setPassword(event.target.value);
</script>

<template>
  <PasswordInput placeholder="Enter password" :value="password" @change="onChange" />
</template>
