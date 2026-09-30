<script lang="ts">
import { Button } from "../../../../../src/components/button";
import { Dialog } from "../../../../../src/components/dialog/index";
</script>

<Dialog description="This is a dialog description." title="Dialog title">
  {#snippet trigger()}
    <Button>Open</Button>
  {/snippet}
  <p class="text-sm">Dialog body</p>
</Dialog>
