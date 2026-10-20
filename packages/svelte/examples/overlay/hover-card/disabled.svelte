<script lang="ts">
  import { Button, HoverCard } from "@pisagor/svelte";
</script>

<HoverCard disabled>
  {#snippet trigger(props)}
    <Button {...props()} variant="link">Hover here</Button>
  {/snippet}

  IT WILL NOT OPEN
</HoverCard>
