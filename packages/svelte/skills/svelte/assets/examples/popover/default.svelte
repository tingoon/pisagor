<script lang="ts">
import { Button } from "@pisagor/svelte/button";
import { Popover } from "@pisagor/svelte/popover";
</script>

<Popover>
  <Popover.Trigger>
    <Button variant="outline">Open</Button>
  </Popover.Trigger>
  <Popover.Content>
    <Popover.Header description="Popover description" title="Popover title" />
    <Popover.Body>
      <p class="text-sm">Body content</p>
    </Popover.Body>
  </Popover.Content>
</Popover>
