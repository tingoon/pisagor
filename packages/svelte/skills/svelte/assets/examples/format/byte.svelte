<script lang="ts">
import { Format } from "@pisagor/svelte/format";
</script>

<div class="flex flex-col gap-1">
      <span class="text-muted-foreground text-sm">File size</span>
      <span class="font-semibold text-2xl text-foreground tabular-nums tracking-tight">
        <Format.Byte value={120_000} />
      </span>
    </div>
