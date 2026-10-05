<script lang="ts">
import { Button, Popover } from "@pisagor/svelte";

const items = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: `Item ${i + 1}`,
}));

let open = $state(false);
</script>

<Popover onOpenChange={({ open: next }) => (open = next)} {open}>
  <Popover.Trigger>
    <Button variant="outline"> Open </Button>
  </Popover.Trigger>
  <Popover.Content class="h-80 w-72">
    <Popover.Header title="Scrollable content" />
    <Popover.Body>
      <ul class="flex flex-col gap-1">
        {#each items as item}
          <li class="rounded-md px-2 py-1.5 text-sm hover:bg-muted">
            {item.label}
          </li>
        {/each}
      </ul>
    </Popover.Body>
    <Popover.Footer>
      <Button onclick={() => (open = false)}>Close</Button>
    </Popover.Footer>
  </Popover.Content>
</Popover>
