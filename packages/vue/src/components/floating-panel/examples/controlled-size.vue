<script lang="ts" setup >
import { PhGearSix, PhX } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { ref } from "vue";
import { FloatingPanel } from "..";

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
        <FloatingPanel :size="size" @size-change="onSizeChange">
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
              <p>Size: {{ size.width }} × {{ size.height }}.</p>
              <p>Use the buttons above or drag the edges to resize.</p>
              <div class="flex gap-2">
                <Button class="flex-1" variant="outline" @click="shrink" >Shrink</Button>
                <Button class="flex-1" variant="outline" @click="grow" >Grow</Button>
              </div>
            </FloatingPanel.Body>
          </FloatingPanel.Content>
        </FloatingPanel>
  
</template>
