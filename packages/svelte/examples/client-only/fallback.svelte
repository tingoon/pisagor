<script lang="ts">
import { ClientOnly } from "@pisagor/svelte";

const now = new Date();
</script>

<ClientOnly>
  {#snippet fallback()}
    <div
      class="rounded-xl border border-dashed bg-muted/50 px-4 py-3 text-muted-foreground text-sm"
    >
      Loading…
    </div>
  {/snippet}
  <div class="rounded-xl border bg-muted px-4 py-3 text-foreground text-sm">
    Current time: {now.toLocaleTimeString()}
  </div>
</ClientOnly>
