<script lang="ts">
  import { CaretDownIcon } from "phosphor-svelte";
  import { Button, Collapsible } from "@pisagor/svelte";
</script>

<Collapsible.Root>
  <Collapsible.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} size="sm" variant="outline">
        Details
        <Collapsible.Indicator>
          <CaretDownIcon />
        </Collapsible.Indicator>
      </Button>
    {/snippet}
  </Collapsible.Trigger>
  <Collapsible.Content>
    <Collapsible.Body class="text-sm">
      <p class="text-muted-foreground mt-2">Collapsed details go here.</p>
    </Collapsible.Body>
  </Collapsible.Content>
</Collapsible.Root>
