<script lang="ts">
  import { Resizable } from "@pisagor/svelte";

  let width = $state(256);
</script>

<div class="h-96 w-full">
  <div class="flex size-full overflow-hidden rounded-md border">
    <aside
      class="bg-muted text-muted-foreground relative flex shrink-0 flex-col overflow-visible border-e"
      style={`width: ${width}px`}
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
      class="bg-muted/30 flex min-w-0 flex-1 items-center justify-center text-sm"
    >
      Main
    </div>
  </div>
</div>
