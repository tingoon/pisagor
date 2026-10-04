<script lang="ts">
import { Alert, Button } from "@pisagor/svelte";
import ClockCounterClockwiseIcon from "phosphor-svelte/lib/ClockCounterClockwiseIcon";
</script>

<Alert
  description="Review the update when you're ready."
  title="New update available"
>
  {#snippet icon()}
    <ClockCounterClockwiseIcon />
  {/snippet}
  {#snippet action()}
    <Button size="xs" variant="ghost">Ignore</Button>
    <Button size="xs">Update</Button>
  {/snippet}
</Alert>
