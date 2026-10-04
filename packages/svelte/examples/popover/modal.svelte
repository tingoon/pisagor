<script lang="ts">
import { Button } from "@pisagor/svelte";
import { Popover } from "@pisagor/svelte/popover";
</script>

<Popover modal>
      <Popover.Trigger>
            <Button variant="outline">
            Open
          </Button>
          </Popover.Trigger>
      <Popover.Content>
        <Popover.Header
          description="You're all caught up. Check back later for new notifications."
          title="Notifications"
        />
      </Popover.Content>
    </Popover>
