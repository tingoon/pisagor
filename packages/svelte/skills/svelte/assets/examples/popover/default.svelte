<script lang="ts">
import { Button } from "../../../../../src/components/button";
import { Popover } from "../../../../../src/components/popover/index";
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
