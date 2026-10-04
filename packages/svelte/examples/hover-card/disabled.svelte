<script lang="ts">
import { Button, HoverCard } from "@pisagor/svelte";
</script>

<HoverCard disabled>
  <HoverCard.Trigger>
    <Button variant="link"> Hover here </Button>
  </HoverCard.Trigger>
  <HoverCard.Content>IT WILL NOT OPEN</HoverCard.Content>
</HoverCard>
