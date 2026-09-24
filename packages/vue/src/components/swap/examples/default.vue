<script lang="ts" setup>
import { Button } from "@pisagor/vue";
import { ref } from "vue";
import { Swap } from "..";

const active = ref(false);
function toggle() {
  active.value = !active.value;
}
</script>

<template>
  <Button size="icon-lg" variant="outline" @click="toggle">
    <Swap :off="renderOff()" :on="renderOn()" :swap="state.swap" />
  </Button>
</template>
