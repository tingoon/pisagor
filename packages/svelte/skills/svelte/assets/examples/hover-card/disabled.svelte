<script lang="ts">
import { Button } from "@pisagor/svelte";
import { HoverCard } from "@pisagor/svelte/hover-card";
</script>

<HoverCard disabled>
      <HoverCard.Trigger>
            <Button variant="link">
            Hover here
          </Button>
          </HoverCard.Trigger>
      <HoverCard.Content>IT WILL NOT OPEN</HoverCard.Content>
    </HoverCard>
