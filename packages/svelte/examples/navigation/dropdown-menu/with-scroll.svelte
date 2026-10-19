<script lang="ts">
  import { Button, DropdownMenu } from "@pisagor/svelte";

  const items = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);
</script>

<DropdownMenu classNames={{ content: "max-h-60 min-w-40" }}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}

  {#each items as label, index}
    <DropdownMenu.Item value={`item-${index + 1}`}>
      {label}
    </DropdownMenu.Item>
  {/each}
</DropdownMenu>
