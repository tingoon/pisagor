<script lang="ts">
  import { Button, FloatingPanel } from "@pisagor/svelte";
  import { GearSixIcon } from "phosphor-svelte";

  let size = $state({ height: 200, width: 360 });

  function shrink() {
    size = {
      height: size.height - 40,
      width: size.width - 50,
    };
  }

  function grow() {
    size = {
      height: size.height + 40,
      width: size.width + 50,
    };
  }
</script>

<FloatingPanel
  onSizeChange={(details) => (size = details.size)}
  {size}
  classNames={{ body: "text-muted-foreground text-center text-sm" }}
  title="Settings"
>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
  {#snippet icon()}
    <GearSixIcon />
  {/snippet}

  <p>Size: {size.width} × {size.height}.</p>
  <p>Use the buttons above or drag the edges to resize.</p>
  <div class="flex gap-2">
    <Button class="flex-1" onclick={shrink} variant="outline">Shrink</Button>
    <Button class="flex-1" onclick={grow} variant="outline">Grow</Button>
  </div>
</FloatingPanel>
