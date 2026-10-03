<script lang="ts">
import { Button } from "@pisagor/svelte";
import { Collapsible } from "@pisagor/svelte/collapsible";

let open = $state(false);
</script>

<div class="w-64 space-y-2">
  <Collapsible onOpenChange={({ open: next }) => (open = next)} {open}>
    <Collapsible.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} class="w-full" variant="outline">
          {open ? "Collapse" : "Expand"}
          <Collapsible.Indicator />
        </Button>
      {/snippet}
    </Collapsible.Trigger>
    <Collapsible.Content class="p-2">
      <p class="text-muted-foreground text-sm">
        This collapsible is controlled. The state is managed externally.
      </p>
    </Collapsible.Content>
  </Collapsible>
  <p class="text-center text-muted-foreground text-sm">
    {open ? "✅" : "❌"}
  </p>
</div>
