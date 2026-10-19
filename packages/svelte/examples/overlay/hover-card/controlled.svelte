<script lang="ts">
  import { Button, HoverCard } from "@pisagor/svelte";

  let open = $state(false);
</script>

<div class="flex flex-col gap-2">
  <HoverCard onOpenChange={(details) => (open = details.open)} {open}>
    {#snippet trigger(props)}
      <Button {...props()} variant="outline">Hover here</Button>
    {/snippet}

    <div class="flex flex-col gap-1">
      <h4 class="font-medium">Controlled</h4>
      <p class="text-muted-foreground text-sm">
        The open state is managed externally with <code>open</code> and
        <code>onOpenChange</code>.
      </p>
    </div>
  </HoverCard>
  <p class="text-muted-foreground text-center text-sm">
    {open ? "✅" : "❌"}
  </p>
</div>
