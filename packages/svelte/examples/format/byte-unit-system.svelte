<script lang="ts">
import { Format } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <div>
    <span class="text-muted-foreground text-sm">Decimal (1000): </span>
    <Format.Byte unitSystem="decimal" value={1024} />
  </div>
  <div>
    <span class="text-muted-foreground text-sm">Binary (1024): </span>
    <Format.Byte unitSystem="binary" value={1024} />
  </div>
</div>
