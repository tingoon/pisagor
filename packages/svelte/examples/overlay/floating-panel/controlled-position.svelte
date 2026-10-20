<script lang="ts">
  import { Button, FloatingPanel } from "@pisagor/svelte";
  import {
    CaretDownIcon,
    CaretLeftIcon,
    CaretRightIcon,
    CaretUpIcon,
    GearSixIcon,
  } from "phosphor-svelte";

  let position = $state({ x: 120, y: 80 });
</script>

<div class="relative h-80 w-full">
  <FloatingPanel
    onPositionChange={(details) => (position = details.position)}
    {position}
    classNames={{ body: "text-muted-foreground text-center text-sm" }}
    title="Settings"
  >
    {#snippet trigger(props)}
      <Button {...props()} variant="outline">Open</Button>
    {/snippet}
    {#snippet icon()}
      <GearSixIcon />
    {/snippet}

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
  </FloatingPanel>
</div>
