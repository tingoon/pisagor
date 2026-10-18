<script lang="ts" setup>
import { PasswordInput } from "@pisagor/vue";
import { ref } from "vue";

const HIDE_DELAY_MS = 3000;
const visible = ref(false);

function onVisibilityChange(details: { visible: boolean }) {
  visible.value = details.visible;

  if (details.visible) {
    setTimeout(() => {
      visible.value = false;
    }, HIDE_DELAY_MS);
  }
}
</script>

<template>
  <PasswordInput
    placeholder="Enter password"
    :visible="visible"
    @visibility-change="onVisibilityChange"
  />
</template>
