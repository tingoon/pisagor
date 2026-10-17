<script module lang="ts">
  import source from "./number-story.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Format } from "@pisagor/svelte";
</script>

<div class="inline-flex items-baseline gap-1">
  <span class="text-muted-foreground text-sm">Downloads</span>
  <span class="text-foreground font-medium tracking-tight tabular-nums">
    <Format.Number value={1_234_567} />
  </span>
  <span class="text-muted-foreground text-sm">per month</span>
</div>
