<script lang="ts">
import { Button, toast } from "@pisagor/svelte";

function showToast() {
  toast.create({
    closable: false,
    description: "Tuesday, February 10, 2026 at 10:00 AM.",
    title: "Event created",
  });
}
</script>

<div class="flex flex-wrap gap-2">
  <Button onclick={showToast} variant="outline">Toast</Button>
</div>
