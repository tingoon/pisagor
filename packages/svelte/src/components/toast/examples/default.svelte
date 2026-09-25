<script lang="ts">
import { Button } from "../../button";
import { Toaster, toast } from "../index";
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
