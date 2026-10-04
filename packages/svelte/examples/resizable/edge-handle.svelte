<script lang="ts">
import { Resizable } from "@pisagor/svelte";

let width = $state(256);
</script>

<ResizableFrame>
  <div class="flex size-full overflow-hidden rounded-md border">
    <aside
      class="relative flex shrink-0 flex-col overflow-visible border-e bg-muted text-muted-foreground"
      style={{ width }}
    >
      <Resizable.EdgeHandle
        handlePosition="top"
        label="Resize panel"
        onResizeChange={(v) => (width = v)}
        onWidthChange={(v) => (width = v)}
        placement="start"
        {width}
      />
      <div class="flex flex-1 items-center justify-center p-4 text-sm">
        Panel
      </div>
    </aside>
    <div
      class="flex min-w-0 flex-1 items-center justify-center bg-muted/30 text-sm"
    >
      Main
    </div>
  </div>
</ResizableFrame>
