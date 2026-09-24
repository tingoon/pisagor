<script lang="ts" setup>
import { ref } from "vue";

import { PasswordInput } from "..";

const value = ref("");
</script>

<template>
  <PasswordInput clearable placeholder="Enter password" v-model:value="value" />
</template>
