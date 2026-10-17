<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Button, Toaster, toast } from "@pisagor/svelte";

  function showToast() {
    toast.create({
      description: "Your changes have been saved.",
      title: "Success",
      type: "success",
    });
  }
</script>

<Toaster />
<Button onclick={showToast}>Show toast</Button>
