<script lang="ts">
import { Button, Toaster, toast } from "@pisagor/svelte";
</script>

<Toaster />
<Button
  onclick={() =>
  toast.create({
    description: "Your changes have been saved.",
    title: "Success",
    type: "success",
  })}
>
  Show toast
</Button>
