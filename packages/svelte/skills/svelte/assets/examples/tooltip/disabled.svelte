<script lang="ts">
import { Button } from "@pisagor/svelte";
import { Tooltip } from "@pisagor/svelte/tooltip";
</script>

<Tooltip>
  {#snippet content()}
    <p>You can still show a tooltip on an unavailable element</p>
  {/snippet}
  <Button disabled variant="outline">Unavailable</Button>
</Tooltip>
