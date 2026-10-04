<script lang="ts">
import { Button, Sheet } from "@pisagor/svelte";

const sides = ["top", "right", "bottom", "left"] as const;
</script>

<div class="flex flex-wrap justify-center gap-2">
  {#each sides as side}
    <Sheet>
      <Sheet.Trigger>
        <Button class="capitalize" variant="outline">{side}</Button>
      </Sheet.Trigger>
      <Sheet.Content placement={side}>
        <Sheet.Header>
          <Sheet.Title class="capitalize">{side} sheet</Sheet.Title>
          <Sheet.Description>This sheet opens from the {side}.</Sheet.Description>
        </Sheet.Header>
      </Sheet.Content>
    </Sheet>
  {/each}
</div>
