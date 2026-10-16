<script lang="ts">
  import { ClientOnly } from "@pisagor/svelte";

  const now = new Date();
</script>

<ClientOnly>
  {#snippet fallback()}
    <div
      class="bg-muted/50 text-muted-foreground rounded-xl border border-dashed px-4 py-3 text-sm"
    >
      Loading…
    </div>
  {/snippet}
  <div class="bg-muted text-foreground rounded-xl border px-4 py-3 text-sm">
    Current time: {now.toLocaleTimeString()}
  </div>
</ClientOnly>
