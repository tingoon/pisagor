<script lang="ts" setup>
import { PhMinus, PhPlus } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { ref } from "vue";
import { CircularProgress } from "..";

const value = ref(55);
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <div class="flex gap-2">
      <Button
        size="icon-sm"
        variant="outline"
        @click="value = Math.max(0, value - 10)"
      >
        <PhMinus />
      </Button>
      <Button
        size="icon-sm"
        variant="outline"
        @click="value = Math.min(100, value + 10)"
      >
        <PhPlus />
      </Button>
    </div>
    <CircularProgress :value="value" />
  </div>
</template>
