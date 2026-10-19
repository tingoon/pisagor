<script lang="ts">
  import { Button, Sheet } from "@pisagor/svelte";

  const sides = ["top", "right", "bottom", "left"] as const;
</script>

<div class="flex flex-wrap justify-center gap-2">
  {#each sides as side}
    <Sheet
      description={`This sheet opens from the ${side}.`}
      placement={side}
      title={`${side} sheet`}
    >
      {#snippet trigger(props)}
        <Button {...props()} class="capitalize" variant="outline">{side}</Button
        >
      {/snippet}
    </Sheet>
  {/each}
</div>
