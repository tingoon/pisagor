<script lang="ts" setup>
import { PasswordInput } from "@pisagor/vue";
import { ref } from "vue";

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
