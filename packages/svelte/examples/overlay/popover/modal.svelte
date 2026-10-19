<script lang="ts">
  import { Button, Popover } from "@pisagor/svelte";
</script>

<Popover
  description="You're all caught up. Check back later for new notifications."
  modal
  title="Notifications"
>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
</Popover>
