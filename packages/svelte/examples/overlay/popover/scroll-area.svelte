<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { Button, Popover } from "@pisagor/svelte";

  const items = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    label: `Item ${i + 1}`,
  }));
</script>

<Popover.Root>
  <Popover.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open</Button>
    {/snippet}
  </Popover.Trigger>
  <Portal>
    <Popover.Positioner>
      <Popover.Content class="h-80 w-72">
        <Popover.Header>
          <Popover.Title>Scrollable content</Popover.Title>
        </Popover.Header>
        <Popover.Body>
          <ul class="flex flex-col gap-1">
            {#each items as item (item.id)}
              <li class="hover:bg-muted rounded-md px-2 py-1.5 text-sm">
                {item.label}
              </li>
            {/each}
          </ul>
        </Popover.Body>
        <Popover.Footer>
          <Popover.CloseTrigger>
            {#snippet asChild(props)}
              <Button {...props()}>Close</Button>
            {/snippet}
          </Popover.CloseTrigger>
        </Popover.Footer>
      </Popover.Content>
    </Popover.Positioner>
  </Portal>
</Popover.Root>
