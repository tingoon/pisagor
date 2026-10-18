<script lang="ts" setup>
import { PasswordInput } from "@pisagor/vue";
import { ref } from "vue";

const visible = ref(false);
function onVisibilityChange(details: { visible: boolean }) {
  visible.value = details.visible;
}
</script>

<template>
  <PasswordInput
    placeholder="Enter password"
    :visible="visible"
    @visibility-change="onVisibilityChange"
  />
</template>
