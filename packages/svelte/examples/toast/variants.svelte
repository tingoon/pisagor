<script lang="ts">
import { Button, toast } from "@pisagor/svelte";

function showSuccess() {
  toast.success({
    description: "Event has been created.",
    title: "Event created",
  });
}

function showError() {
  toast.error({
    description:
      "Event has not been created. Check your connection and try again.",
    title: "Something went wrong",
  });
}

function showWarning() {
  toast.warning({
    description: "Your session will expire soon.",
    title: "Session expiring soon",
  });
}

function showInfo() {
  toast.info({
    description: "You have a new event.",
    title: "New event",
  });
}
</script>

<div class="flex flex-wrap gap-2">
  <Button onclick={showSuccess} variant="outline">Success</Button>
  <Button onclick={showError} variant="outline">Error</Button>
  <Button onclick={showWarning} variant="outline">Warning</Button>
  <Button onclick={showInfo} variant="outline">Info</Button>
</div>
