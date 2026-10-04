<script lang="ts" setup>
import { PasswordInput } from "@pisagor/vue";
import { ref } from "vue";

const value = ref("");
</script>

<template>
  <PasswordInput clearable placeholder="Enter password" v-model:value="value" />
</template>
