<script lang="ts">
import { Button } from "@pisagor/svelte/button";
import { Sheet } from "@pisagor/svelte/sheet";
</script>

<Sheet modal={false}>
  <Sheet.Trigger>
    <Button variant="outline">Open</Button>
  </Sheet.Trigger>
  <Sheet.Content>
    <Sheet.Header>
      <Sheet.Title>Non-modal sheet</Sheet.Title>
      <Sheet.Description>This is a non-modal sheet. You can interact with elements outside the sheet.</Sheet.Description>
    </Sheet.Header>
    <Sheet.Body>
      <p class="text-muted-foreground text-sm">
        Non-modal sheets allow interaction with elements outside. Focus trapping and scroll prevention are turned off.
      </p>
    </Sheet.Body>
    <Sheet.Footer>
      <Sheet.CloseTrigger>
        <Button variant="outline">Close</Button>
      </Sheet.CloseTrigger>
    </Sheet.Footer>
  </Sheet.Content>
</Sheet>
