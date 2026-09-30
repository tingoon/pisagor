<script lang="ts">
import { Button } from "../../../../../src/components/button";
import { Toaster, toast } from "../../../../../src/components/toast/index";
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
