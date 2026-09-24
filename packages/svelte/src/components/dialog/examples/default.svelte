<script lang="ts">
import { Button } from "../../button";
import { Dialog } from "../index";
</script>

<Dialog description="This is a dialog description." title="Dialog title">
  {#snippet trigger()}
    <Button>Open</Button>
  {/snippet}
  <p class="text-sm">Dialog body</p>
</Dialog>
