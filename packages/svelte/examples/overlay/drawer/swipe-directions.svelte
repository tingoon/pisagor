<script lang="ts">
  import { Button, Drawer } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap justify-center gap-2">
  <Drawer swipeDirection="down" title="Bottom drawer">
    {#snippet trigger(props)}
      <Button {...props()} variant="outline">Bottom</Button>
    {/snippet}

    <p class="text-muted-foreground text-sm">
      Swipe down to close this drawer.
    </p>
  </Drawer>
  <Drawer swipeDirection="up" title="Top drawer">
    {#snippet trigger(props)}
      <Button {...props()} variant="outline">Top</Button>
    {/snippet}

    <p class="text-muted-foreground text-sm">Swipe up to close this drawer.</p>
  </Drawer>
  <Drawer swipeDirection="start" title="Start drawer">
    {#snippet trigger(props)}
      <Button {...props()} variant="outline">Left</Button>
    {/snippet}

    <p class="text-muted-foreground text-sm">
      Swipe left to close this drawer.
    </p>
  </Drawer>
  <Drawer swipeDirection="end" title="End drawer">
    {#snippet trigger(props)}
      <Button {...props()} variant="outline">Right</Button>
    {/snippet}

    <p class="text-muted-foreground text-sm">
      Swipe right to close this drawer.
    </p>
  </Drawer>
</div>
