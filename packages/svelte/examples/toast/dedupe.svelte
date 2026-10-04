<script lang="ts">
import { Button, toast } from "@pisagor/svelte";

function showWithId() {
  toast.create({
    description: "This is a toast with id.",
    id: "dedupe-on",
    title: "New event",
  });
}

function showWithoutId() {
  toast.create({
    description: "This is a toast without id.",
    title: "New event",
  });
}
</script>

<div class="flex gap-2">
  <Button onClick={showWithId} variant="outline">Toast with id</Button>
  <Button onClick={showWithoutId} variant="outline">Toast without id</Button>
</div>
