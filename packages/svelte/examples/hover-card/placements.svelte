<script lang="ts">
import { Button, HoverCard } from "@pisagor/svelte";

const placements = ["left", "top", "bottom", "right"] as const;
</script>

<div class="flex flex-wrap justify-center gap-2">
      {#each placements as placement}
        <HoverCard positioning={{ placement }}>
          <HoverCard.Trigger>
            <Button class="capitalize" variant="outline">
                {placement}
              </Button>
          </HoverCard.Trigger>
          <HoverCard.Content class="flex flex-col gap-1">
            <h4 class="font-medium">Hover Card</h4>
            <p class="text-muted-foreground text-sm">
              This hover card appears on the {placement} placement of the
              trigger.
            </p>
          </HoverCard.Content>
        </HoverCard>
      {/each}
    </div>
