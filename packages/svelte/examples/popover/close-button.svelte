<script lang="ts">
import { Button, Popover } from "@pisagor/svelte";
</script>

<Popover>
  <Popover.Trigger>
    <Button variant="outline"> Open </Button>
  </Popover.Trigger>
  <Popover.Content class="w-72" showCloseButton>
    <Popover.Header
      description="You're all caught up. Check back later for new notifications."
      title="Notifications"
    />
  </Popover.Content>
</Popover>
