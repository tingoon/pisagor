<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Button, Collapsible } from "@pisagor/svelte";
</script>

<Collapsible>
  <Collapsible.Trigger>
    <Button size="sm" variant="outline">
      Details
      <Collapsible.Indicator />
    </Button>
  </Collapsible.Trigger>
  <Collapsible.Content class="text-sm">
    <p class="text-muted-foreground mt-2">Collapsed details go here.</p>
  </Collapsible.Content>
</Collapsible>
