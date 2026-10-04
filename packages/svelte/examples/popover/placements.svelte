<script lang="ts">
import { Button, Popover } from "@pisagor/svelte";

const placements = ["left", "top", "bottom", "right"] as const;
</script>

<div class="flex flex-wrap justify-center gap-2">
  {#each placements as placement}
    <Popover positioning={{ placement }}>
      <Popover.Trigger>
        <Button class="capitalize" variant="outline">
          {placement}
        </Button>
      </Popover.Trigger>
      <Popover.Content class="w-56">
        <Popover.Header
          description={`This popover appears on the ${placement} placement of the trigger.`}
          title="Popover"
        />
      </Popover.Content>
    </Popover>
  {/each}
</div>
