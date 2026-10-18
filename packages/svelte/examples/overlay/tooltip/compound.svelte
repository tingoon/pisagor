<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal";
  import { Button, Tooltip } from "@pisagor/svelte";
</script>

<Tooltip.Root>
  <Tooltip.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Hover me</Button>
    {/snippet}
  </Tooltip.Trigger>
  <Portal>
    <Tooltip.Positioner>
      <Tooltip.Content>
        <Tooltip.Arrow>
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>
        Composed from parts
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Portal>
</Tooltip.Root>
