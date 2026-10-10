<script lang="ts" setup>
import { CircularSlider } from "@pisagor/vue";
import { ref } from "vue";

const value = ref(45);
function onValueChange(next: typeof value.value) {
  value.value = next;
}
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
      {{ value > 180 ? "✅" : "❌" }}
    </div>
  </div>
</template>
