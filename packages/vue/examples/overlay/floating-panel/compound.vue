<script lang="ts" setup>
import { PhArrowsOut, PhMinus, PhX } from "@phosphor-icons/vue";
import { Button, FloatingPanel } from "@pisagor/vue";
</script>

<template>
  <FloatingPanel.Root :default-size="{ height: 240, width: 320 }">
    <FloatingPanel.Trigger as-child>
      <Button variant="outline">Open</Button>
    </FloatingPanel.Trigger>
    <Teleport to="body">
      <FloatingPanel.Positioner>
        <FloatingPanel.Content>
          <FloatingPanel.DragTrigger>
            <FloatingPanel.Header>
              <FloatingPanel.Title>Notes</FloatingPanel.Title>
              <FloatingPanel.Control>
                <FloatingPanel.StageTrigger as-child stage="minimized">
                  <Button aria-label="Minimize" size="icon-xs" variant="ghost">
                    <PhMinus />
                  </Button>
                </FloatingPanel.StageTrigger>
                <FloatingPanel.StageTrigger as-child stage="maximized">
                  <Button aria-label="Maximize" size="icon-xs" variant="ghost">
                    <PhArrowsOut />
                  </Button>
                </FloatingPanel.StageTrigger>
                <FloatingPanel.CloseTrigger as-child>
                  <Button aria-label="Close" size="icon-xs">
                    <PhX />
                  </Button>
                </FloatingPanel.CloseTrigger>
              </FloatingPanel.Control>
            </FloatingPanel.Header>
          </FloatingPanel.DragTrigger>
          <FloatingPanel.Body>
            <p class="text-muted-foreground text-sm">
              Built from parts. Drag the header to move the panel.
            </p>
          </FloatingPanel.Body>
          <FloatingPanel.ResizeTrigger axis="se" />
        </FloatingPanel.Content>
      </FloatingPanel.Positioner>
    </Teleport>
  </FloatingPanel.Root>
</template>
