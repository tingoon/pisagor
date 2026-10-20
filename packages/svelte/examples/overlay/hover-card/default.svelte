<script lang="ts">
  import { Button, HoverCard } from "@pisagor/svelte";
</script>

<HoverCard>
  {#snippet trigger(props)}
    <Button {...props()} variant="link">@pisagor</Button>
  {/snippet}

  <p class="text-sm">Hover card content</p>
</HoverCard>
