<script lang="ts">
  import { Portal } from "@ark-ui/svelte";
  import { Button, HoverCard } from "@pisagor/svelte";
</script>

<HoverCard.Root>
  <HoverCard.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="link">Hover here</Button>
    {/snippet}
  </HoverCard.Trigger>
  <Portal>
    <HoverCard.Positioner>
      <HoverCard.Content>
        <p class="text-muted-foreground text-sm">
          Built from parts with an explicit portal and positioner.
        </p>
        <HoverCard.Arrow />
      </HoverCard.Content>
    </HoverCard.Positioner>
  </Portal>
</HoverCard.Root>
