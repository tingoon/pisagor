<script lang="ts">
  import { CaretDownIcon } from "phosphor-svelte";
  import { Button, Collapsible } from "@pisagor/svelte";
</script>

<div>
  <Collapsible.Root disabled>
    <Collapsible.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} class="w-full" variant="outline">
          Disabled collapsible
          <Collapsible.Indicator>
            <CaretDownIcon />
          </Collapsible.Indicator>
        </Button>
      {/snippet}
    </Collapsible.Trigger>
    <Collapsible.Content>
      <Collapsible.Body class="pt-2">
        <p class="text-muted-foreground text-sm">
          This content cannot be accessed because the collapsible is
          unavailable.
        </p>
      </Collapsible.Body>
    </Collapsible.Content>
  </Collapsible.Root>
</div>
