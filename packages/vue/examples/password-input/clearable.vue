<script lang="ts" setup>
import { ref } from "vue";

import { PasswordInput } from "../../src/components/password-input";

const value = ref("");
</script>

<template>
  <PasswordInput clearable placeholder="Enter password" v-model:value="value" />
</template>
