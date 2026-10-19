<script lang="ts">
  import { Button, Popover } from "@pisagor/svelte";
</script>

<Popover
  classNames={{ base: "w-72" }}
  description="You're all caught up. Check back later for new notifications."
  showCloseButton
  title="Notifications"
>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}
</Popover>
