<script module lang="ts">
  import source from "./without-arrow.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { HoverCard } from "@pisagor/svelte";
</script>

<HoverCard>
  <HoverCard.Trigger>Hover here</HoverCard.Trigger>
  <HoverCard.Content showArrow={false}>
    <p class="text-muted-foreground text-sm">
      A card without an arrow for flush layouts.
    </p>
  </HoverCard.Content>
</HoverCard>
