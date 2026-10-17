<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { HoverCard } from "@pisagor/svelte";
</script>

<HoverCard>
  <HoverCard.Trigger>@pisagor</HoverCard.Trigger>
  <HoverCard.Content>
    <p class="text-sm">Hover card content</p>
  </HoverCard.Content>
</HoverCard>
