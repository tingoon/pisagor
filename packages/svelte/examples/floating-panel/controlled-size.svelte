<script lang="ts">
import { Button } from "@pisagor/svelte";
import { FloatingPanel } from "@pisagor/svelte/floating-panel";
import GearSixIcon from "phosphor-svelte/lib/GearSixIcon";
import XIcon from "phosphor-svelte/lib/XIcon";

let size = $state({ height: 200, width: 360 });
</script>

<FloatingPanel onSizeChange={(details) => (size = details.size)} {size}>
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
    <FloatingPanel.Body class="text-center text-muted-foreground text-sm">
      <p>Size: {size.width} × {size.height}.</p>
      <p>Use the buttons above or drag the edges to resize.</p>
      <div class="flex gap-2">
        <Button
          class="flex-1"
          onClick={() =>
            (size = {
              height: size.height - 40,
              width: size.width - 50,
            })}
          variant="outline"
        >
          Shrink
        </Button>
        <Button
          class="flex-1"
          onClick={() =>
            (size = {
              height: size.height + 40,
              width: size.width + 50,
            })}
          variant="outline"
        >
          Grow
        </Button>
      </div>
    </FloatingPanel.Body>
  </FloatingPanel.Content>
</FloatingPanel>
