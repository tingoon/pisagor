<script setup lang="ts">
import { ref } from "vue";
import { PasswordInput } from "..";

const visible = ref(false);
const onVisibilityChange = ({ visible }) => handleVisibilityChange(visible);
</script>

<template>
  <PasswordInput @visibility-change="onVisibilityChange" placeholder="Enter password" :visible="visible" />
</template>
