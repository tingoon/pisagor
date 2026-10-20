<script lang="ts" setup>
import {
  PhCaretDown,
  PhCaretLeft,
  PhCaretRight,
  PhCaretUp,
  PhGearSix,
} from "@phosphor-icons/vue";
import { Button, FloatingPanel } from "@pisagor/vue";
import { ref } from "vue";

const position = ref({ x: 200, y: 200 });
function onPositionChange(details: { position: { x: number; y: number } }) {
  position.value = details.position;
}
function moveUp() {
  position.value = { ...position.value, y: position.value.y - 20 };
}
function moveDown() {
  position.value = { ...position.value, y: position.value.y + 20 };
}
function moveLeft() {
  position.value = { ...position.value, x: position.value.x - 20 };
}
function moveRight() {
  position.value = { ...position.value, x: position.value.x + 20 };
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <FloatingPanel
      :position="position"
      :class-names="{ body: 'text-muted-foreground text-center text-sm' }"
      title="Settings"
      @position-change="onPositionChange"
    >
      <template #trigger><Button variant="outline">Open</Button></template>
      <template #icon><PhGearSix /></template>
      <p>Position: ({{ position.x }}, {{ position.y }}).</p>
      <p>Use the buttons to move the panel.</p>
      <div class="flex flex-col items-center gap-1">
        <div>
          <Button
            aria-label="Move up"
            size="icon-md"
            variant="outline"
            @click="moveUp"
          >
            <PhCaretUp aria-hidden="true" />
          </Button>
        </div>
        <div class="flex gap-1">
          <Button
            aria-label="Move left"
            size="icon-md"
            variant="outline"
            @click="moveLeft"
          >
            <PhCaretLeft aria-hidden="true" />
          </Button>
          <Button
            aria-label="Move down"
            size="icon-md"
            variant="outline"
            @click="moveDown"
          >
            <PhCaretDown aria-hidden="true" />
          </Button>
          <Button
            aria-label="Move right"
            size="icon-md"
            variant="outline"
            @click="moveRight"
          >
            <PhCaretRight aria-hidden="true" />
          </Button>
        </div>
      </div>
    </FloatingPanel>
  </div>
</template>
