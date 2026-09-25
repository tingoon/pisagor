<script lang="ts" setup>
import {
  PhCaretDown,
  PhCaretLeft,
  PhCaretRight,
  PhCaretUp,
  PhGearSix,
  PhX,
} from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { ref } from "vue";
import { FloatingPanel } from "..";

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
    <FloatingPanel :position="position" @position-change="onPositionChange">
      <FloatingPanel.Trigger as-child>
        <Button variant="outline">Open</Button>
      </FloatingPanel.Trigger>
      <FloatingPanel.Content>
        <FloatingPanel.Header>
          <PhGearSix />
          <FloatingPanel.Title>Settings</FloatingPanel.Title>
          <FloatingPanel.Control>
            <FloatingPanel.Minimize />
            <FloatingPanel.Maximize />
            <FloatingPanel.Restore />
            <FloatingPanel.CloseTrigger as-child>
              <Button aria-label="Close" size="icon-sm">
                <PhX aria-hidden="true" />
              </Button>
            </FloatingPanel.CloseTrigger>
          </FloatingPanel.Control>
        </FloatingPanel.Header>
        <FloatingPanel.Body class="text-center text-muted-foreground text-sm">
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
        </FloatingPanel.Body>
      </FloatingPanel.Content>
    </FloatingPanel>
  </div>
</template>
