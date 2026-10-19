<script lang="ts">
  import { CaretDownIcon } from "phosphor-svelte";
  import { Button, Collapsible } from "@pisagor/svelte";

  let open = $state(false);
</script>

<div class="w-64 space-y-2">
  <Collapsible.Root onOpenChange={({ open: next }) => (open = next)} {open}>
    <Collapsible.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} class="w-full" variant="outline">
          {open ? "Collapse" : "Expand"}
          <Collapsible.Indicator>
            <CaretDownIcon />
          </Collapsible.Indicator>
        </Button>
      {/snippet}
    </Collapsible.Trigger>
    <Collapsible.Content>
      <Collapsible.Body class="p-2">
        <p class="text-muted-foreground text-sm">
          This collapsible is controlled. The state is managed externally.
        </p>
      </Collapsible.Body>
    </Collapsible.Content>
  </Collapsible.Root>
  <p class="text-muted-foreground text-center text-sm">
    {open ? "✅" : "❌"}
  </p>
</div>
