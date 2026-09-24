<script lang="ts" setup>
import { ref } from "vue";
import { PasswordInput } from "..";

const visible = ref(false);
const onVisibilityChange = ({ visible }) => handleVisibilityChange(visible);
</script>

<template>
  <PasswordInput
    placeholder="Enter password"
    :visible="visible"
    @visibility-change="onVisibilityChange"
  />
</template>
