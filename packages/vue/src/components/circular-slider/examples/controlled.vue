<script lang="ts" setup>
import { ref } from "vue";
import { CircularSlider } from "..";

const value = ref(45);
const onValueChange = setValue;
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="text-muted-foreground text-sm">More than: 180</div>
    <CircularSlider
      aria-label="Angle"
      :on-value-change="onValueChange"
      :value="value"
    />
    <div class="text-center text-muted-foreground text-sm">
      {{ isGreaterThan180 ? "✅" : "❌" }}
    </div>
  </div>
</template>
