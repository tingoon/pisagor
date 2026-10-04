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
  <Button onClick={showSuccess} variant="outline">Success</Button>
  <Button onClick={showError} variant="outline">Error</Button>
  <Button onClick={showWarning} variant="outline">Warning</Button>
  <Button onClick={showInfo} variant="outline">Info</Button>
</div>
