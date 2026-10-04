<script lang="ts">
import { Button, Sheet } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap justify-center gap-2">
  <Sheet closeOnInteractOutside={false}>
    <Sheet.Trigger>
      <Button variant="outline">No close on outside click</Button>
    </Sheet.Trigger>
    <Sheet.Content>
      <Sheet.Header>
        <Sheet.Title>Stays on outside click</Sheet.Title>
        <Sheet.Description>
          Clicking outside does not close this sheet. Press ESC or use the close
          button.
        </Sheet.Description>
      </Sheet.Header>
    </Sheet.Content>
  </Sheet>
  <Sheet closeOnEscape={false}>
    <Sheet.Trigger>
      <Button variant="outline">No close on Escape</Button>
    </Sheet.Trigger>
    <Sheet.Content>
      <Sheet.Header>
        <Sheet.Title>Escape key unavailable</Sheet.Title>
        <Sheet.Description>
          Pressing Escape does not close this sheet. Click outside or use the
          close button.
        </Sheet.Description>
      </Sheet.Header>
    </Sheet.Content>
  </Sheet>
</div>
