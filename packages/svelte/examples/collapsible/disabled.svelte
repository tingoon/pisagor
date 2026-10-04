<script lang="ts">
import { Button, Collapsible } from "@pisagor/svelte";
</script>

<div>
  <Collapsible disabled>
    <Collapsible.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} class="w-full" variant="outline">
          Disabled collapsible
          <Collapsible.Indicator />
        </Button>
      {/snippet}
    </Collapsible.Trigger>
    <Collapsible.Content class="pt-2">
      <p class="text-muted-foreground text-sm">
        This content cannot be accessed because the collapsible is unavailable.
      </p>
    </Collapsible.Content>
  </Collapsible>
</div>
