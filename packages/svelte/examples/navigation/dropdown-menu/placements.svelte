<script lang="ts">
  import { Button, DropdownMenu } from "@pisagor/svelte";

  const placements = ["left", "top", "bottom", "right"] as const;
</script>

<div class="flex flex-wrap justify-center gap-2">
  {#each placements as placement}
    <DropdownMenu classNames={{ content: "w-36" }} positioning={{ placement }}>
      {#snippet trigger(props)}
        <Button {...props()} class="capitalize" variant="outline">
          {placement}
        </Button>
      {/snippet}

      <DropdownMenu.Item value="edit">Edit</DropdownMenu.Item>
      <DropdownMenu.Item value="copy">Copy</DropdownMenu.Item>
      <DropdownMenu.Item value="share">Share</DropdownMenu.Item>
    </DropdownMenu>
  {/each}
</div>
