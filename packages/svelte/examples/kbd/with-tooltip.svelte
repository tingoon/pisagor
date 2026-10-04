<script lang="ts">
import { Button, Kbd, Tooltip } from "@pisagor/svelte";
</script>

<Tooltip classNames={{ content: "flex items-center gap-2" }}>
  {#snippet content()}
    Toggle mode
    <Kbd.Group class="ml-1.5 inline">
      <Kbd>D</Kbd>
    </Kbd.Group>
  {/snippet}
  <Button size="sm" variant="outline">Dark mode</Button>
</Tooltip>
