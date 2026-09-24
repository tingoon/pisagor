<script lang="ts">
import { Button } from "../../button";
import { Collapsible } from "../index";
</script>

<Collapsible>
  <Collapsible.Trigger>
    <Button size="sm" variant="outline">
      Details
      <Collapsible.Indicator />
    </Button>
  </Collapsible.Trigger>
  <Collapsible.Content class="text-sm">
    <p class="mt-2 text-muted-foreground">Collapsed details go here.</p>
  </Collapsible.Content>
</Collapsible>
