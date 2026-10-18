<script lang="ts">
  import { Button, FloatingPanel } from "@pisagor/svelte";
  import {
    CaretDownIcon,
    CaretLeftIcon,
    CaretRightIcon,
    CaretUpIcon,
    GearSixIcon,
    XIcon,
  } from "phosphor-svelte";

  let position = $state({ x: 120, y: 80 });
</script>

<div class="relative h-80 w-full">
  <FloatingPanel
    onPositionChange={(details) => (position = details.position)}
    {position}
  >
    <FloatingPanel.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} variant="outline">Open</Button>
      {/snippet}
    </FloatingPanel.Trigger>
    <FloatingPanel.Content>
      <FloatingPanel.Header>
        <GearSixIcon />
        <FloatingPanel.Title>Settings</FloatingPanel.Title>
        <FloatingPanel.Control>
          <FloatingPanel.Minimize />
          <FloatingPanel.Maximize />
          <FloatingPanel.Restore />
          <FloatingPanel.CloseTrigger>
            {#snippet asChild(props)}
              <Button {...props()} aria-label="Close" size="icon-sm">
                <XIcon aria-hidden />
              </Button>
            {/snippet}
          </FloatingPanel.CloseTrigger>
        </FloatingPanel.Control>
      </FloatingPanel.Header>
      <FloatingPanel.Body class="text-muted-foreground text-center text-sm">
        <p>Position: ({position.x}, {position.y}).</p>
        <p>Use the buttons to move the panel.</p>
        <div class="flex flex-col items-center gap-1">
          <div>
            <Button
              aria-label="Move up"
              onclick={() => (position = { ...position, y: position.y - 20 })}
              size="icon-md"
              variant="outline"
            >
              <CaretUpIcon aria-hidden />
            </Button>
          </div>
          <div class="flex gap-1">
            <Button
              aria-label="Move left"
              onclick={() => (position = { ...position, x: position.x - 20 })}
              size="icon-md"
              variant="outline"
            >
              <CaretLeftIcon aria-hidden />
            </Button>
            <Button
              aria-label="Move down"
              onclick={() => (position = { ...position, y: position.y + 20 })}
              size="icon-md"
              variant="outline"
            >
              <CaretDownIcon aria-hidden />
            </Button>
            <Button
              aria-label="Move right"
              onclick={() => (position = { ...position, x: position.x + 20 })}
              size="icon-md"
              variant="outline"
            >
              <CaretRightIcon aria-hidden />
            </Button>
          </div>
        </div>
      </FloatingPanel.Body>
    </FloatingPanel.Content>
  </FloatingPanel>
</div>
