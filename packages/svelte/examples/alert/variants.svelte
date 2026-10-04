<script lang="ts">
import { Alert } from "@pisagor/svelte";
import CheckCircleIcon from "phosphor-svelte/lib/CheckCircleIcon";
import ChecksIcon from "phosphor-svelte/lib/ChecksIcon";
import ClockCounterClockwiseIcon from "phosphor-svelte/lib/ClockCounterClockwiseIcon";
import WarningIcon from "phosphor-svelte/lib/WarningIcon";
</script>

<div class="flex flex-col gap-2">
  <Alert
    description="You can now start building your next great project."
    title="Deployment successful"
    variant="default"
  >
    {#snippet icon()}
      <ChecksIcon />
    {/snippet}
  </Alert>
  <Alert
    description="Your session has expired. Please log in again."
    title="Session expired"
    variant="destructive"
  >
    {#snippet icon()}
      <WarningIcon />
    {/snippet}
  </Alert>
  <Alert
    description="A new update is available. Review the update when you're ready."
    title="New update available"
    variant="info"
  >
    {#snippet icon()}
      <ClockCounterClockwiseIcon />
    {/snippet}
  </Alert>
  <Alert
    description="Your payment has been processed successfully. You will receive a receipt in your email."
    title="Payment successful"
    variant="success"
  >
    {#snippet icon()}
      <CheckCircleIcon />
    {/snippet}
  </Alert>
  <Alert
    description="Your storage is almost full. Consider upgrading your plan to avoid losing data."
    title="Storage almost full"
    variant="warning"
  >
    {#snippet icon()}
      <WarningIcon />
    {/snippet}
  </Alert>
</div>
