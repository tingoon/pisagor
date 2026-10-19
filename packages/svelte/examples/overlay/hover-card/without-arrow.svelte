<script lang="ts">
  import { Button, HoverCard } from "@pisagor/svelte";
</script>

<HoverCard showArrow={false}>
  {#snippet trigger(props)}
    <Button {...props()} variant="link">Hover here</Button>
  {/snippet}

  <p class="text-muted-foreground text-sm">
    A card without an arrow for flush layouts.
  </p>
</HoverCard>
