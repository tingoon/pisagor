<script lang="ts">
  import { Button, Popover } from "@pisagor/svelte";

  const placements = ["left", "top", "bottom", "right"] as const;
</script>

<div class="flex flex-wrap justify-center gap-2">
  {#each placements as placement}
    <Popover
      classNames={{ base: "w-56" }}
      description={`This popover appears on the ${placement} placement of the trigger.`}
      positioning={{ placement }}
      title="Popover"
    >
      {#snippet trigger(props)}
        <Button {...props()} class="capitalize" variant="outline"
          >{placement}</Button
        >
      {/snippet}
    </Popover>
  {/each}
</div>
