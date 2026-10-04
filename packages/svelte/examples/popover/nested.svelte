<script lang="ts">
import { Button, Popover } from "@pisagor/svelte";
</script>

<Popover>
  <Popover.Trigger>
    <Button variant="outline"> Open </Button>
  </Popover.Trigger>
  <Popover.Content>
    <Popover.Header
      description="Check your notifications."
      title="Notifications"
    />
    <Popover.Body>
      <Popover>
        <Popover.Trigger>
          <Button size="sm" variant="outline"> Open nested </Button>
        </Popover.Trigger>
        <Popover.Content class="w-56">
          <Popover.Header
            description="You're all caught up. Check back later for new notifications."
            title="Nested popover"
          />
        </Popover.Content>
      </Popover>
    </Popover.Body>
  </Popover.Content>
</Popover>
