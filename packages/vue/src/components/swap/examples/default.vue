<script setup lang="ts">
import { Button } from "@pisagor/vue";
import { ref } from "vue";
import { Swap } from "..";

const active = ref(false);
function toggle() {
  active.value = !active.value;
}
</script>

<template>
        <Button @click="toggle" size="icon-lg" variant="outline">
          <Swap :off="renderOff()" :on="renderOn()" :swap="state.swap" />
        </Button>
  
</template>
