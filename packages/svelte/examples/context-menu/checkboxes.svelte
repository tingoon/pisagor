<script module lang="ts">
  import source from "./checkboxes.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { ContextMenu } from "@pisagor/svelte";

  let showGrid = $state(true);
  let zoom = $state("100");
</script>

<ContextMenu>
  <ContextMenu.ContextTrigger
    class="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm"
  >
    Right-click or long press here
  </ContextMenu.ContextTrigger>
  <ContextMenu.Content class="w-44">
    <ContextMenu.CheckboxItem
      checked={showGrid}
      onCheckedChange={(checked) => (showGrid = checked)}
      value="grid"
    >
      Show grid
    </ContextMenu.CheckboxItem>
    <ContextMenu.Separator />
    <ContextMenu.RadioItemGroup
      onValueChange={(details) => (zoom = details.value)}
      value={zoom}
    >
      <ContextMenu.ItemGroupLabel>Zoom</ContextMenu.ItemGroupLabel>
      <ContextMenu.RadioItem value="50">50%</ContextMenu.RadioItem>
      <ContextMenu.RadioItem value="100">100%</ContextMenu.RadioItem>
      <ContextMenu.RadioItem value="200">200%</ContextMenu.RadioItem>
    </ContextMenu.RadioItemGroup>
  </ContextMenu.Content>
</ContextMenu>
