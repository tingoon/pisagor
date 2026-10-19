<script lang="ts">
  import { Button, Popover } from "@pisagor/svelte";
</script>

<Popover description="Popover description" title="Popover title">
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}

  <p class="text-sm">Body content</p>
</Popover>
