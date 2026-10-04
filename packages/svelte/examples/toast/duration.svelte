<script lang="ts">
import { Button, toast } from "@pisagor/svelte";

function showShort() {
  toast.create({
    description: "This toast disappears after 2 seconds.",
    duration: 2000,
    title: "Short duration",
  });
}

function showLong() {
  toast.create({
    description: "This toast stays for 10 seconds.",
    duration: 10_000,
    title: "Long duration",
  });
}

function showPersistent() {
  toast.create({
    closable: true,
    description: "This toast stays until you close it.",
    duration: Number.POSITIVE_INFINITY,
    title: "Persistent",
  });
}
</script>

<div class="flex flex-wrap gap-2">
  <Button onClick={showShort} variant="outline">2 seconds</Button>
  <Button onClick={showLong} variant="outline">10 seconds</Button>
  <Button onClick={showPersistent} variant="outline">Until dismissed</Button>
</div>
