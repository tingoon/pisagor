<script setup lang="ts">
import { ref } from "vue";
import { PasswordInput } from "..";

const password = ref("");
const onChange = (event) => setPassword(event.target.value);
</script>

<template>
  <PasswordInput @change="onChange" placeholder="Enter password" :value="password" />
</template>
