<script lang="ts">
import { Button } from "@pisagor/svelte";
import { DropdownMenu } from "@pisagor/svelte/dropdown-menu";

const placements = ["left", "top", "bottom", "right"] as const;
</script>

<div class="flex flex-wrap justify-center gap-2">
      {#each placements as placement}
        <DropdownMenu positioning={{ placement }}>
          <DropdownMenu.Trigger>
            <Button class="capitalize" variant="outline">
                {placement}
              </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content class="w-36">
            <DropdownMenu.Item value="edit">Edit</DropdownMenu.Item>
            <DropdownMenu.Item value="copy">Copy</DropdownMenu.Item>
            <DropdownMenu.Item value="share">Share</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      {/each}
    </div>
