<script setup lang="ts">
import { ref } from "vue";

import { PasswordInput } from "..";

const value = ref("");
</script>

<template>
  <PasswordInput v-model:value="value" clearable placeholder="Enter password" />
</template>
