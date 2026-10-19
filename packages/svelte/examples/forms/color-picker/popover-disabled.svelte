<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { Button, ColorPicker } from "@pisagor/svelte";
</script>

<ColorPicker.Root disabled value="#eb5e41">
  <ColorPicker.Control>
    <ColorPicker.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} size="lg" variant="ghost">
          <ColorPicker.SwatchPreview class="size-6" />
          Pick as color
        </Button>
      {/snippet}
    </ColorPicker.Trigger>
  </ColorPicker.Control>
  <Portal>
    <ColorPicker.Positioner>
      <ColorPicker.Content>
        <ColorPicker.Area>
          <ColorPicker.AreaBackground />
          <ColorPicker.AreaThumb />
        </ColorPicker.Area>
      </ColorPicker.Content>
    </ColorPicker.Positioner>
  </Portal>
</ColorPicker.Root>
