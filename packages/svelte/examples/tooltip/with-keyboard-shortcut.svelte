<script lang="ts">
import { Button, Kbd, Tooltip } from "@pisagor/svelte";
</script>

<Tooltip classNames={{ content: "flex items-center gap-2" }}>
  {#snippet content()}
    <p>Add to library</p>
    <Kbd.Group class="ml-1.5 inline">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </Kbd.Group>
  {/snippet}
  <Button variant="outline">Add to library</Button>
</Tooltip>
