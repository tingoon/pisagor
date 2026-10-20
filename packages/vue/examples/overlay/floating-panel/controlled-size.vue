<script lang="ts" setup>
import { PhGearSix } from "@phosphor-icons/vue";
import { Button, FloatingPanel } from "@pisagor/vue";
import { ref } from "vue";

const size = ref({ height: 200, width: 360 });
function onSizeChange(details: { size: { height: number; width: number } }) {
  size.value = details.size;
}
function grow() {
  size.value = { height: size.value.height + 40, width: size.value.width + 40 };
}
function shrink() {
  size.value = {
    height: Math.max(120, size.value.height - 40),
    width: Math.max(200, size.value.width - 40),
  };
}
</script>

<template>
  <FloatingPanel
    :size="size"
    :class-names="{ body: 'text-muted-foreground text-center text-sm' }"
    title="Settings"
    @size-change="onSizeChange"
  >
    <template #trigger><Button variant="outline">Open</Button></template>
    <template #icon><PhGearSix /></template>
    <p>Size: {{ size.width }} × {{ size.height }}.</p>
    <p>Use the buttons above or drag the edges to resize.</p>
    <div class="flex gap-2">
      <Button class="flex-1" variant="outline" @click="shrink">Shrink</Button>
      <Button class="flex-1" variant="outline" @click="grow">Grow</Button>
    </div>
  </FloatingPanel>
</template>
