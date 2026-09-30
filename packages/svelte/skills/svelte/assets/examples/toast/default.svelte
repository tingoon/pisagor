<script lang="ts">
import { Button } from "@pisagor/svelte/button";
import { Toaster, toast } from "@pisagor/svelte/toast";
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
