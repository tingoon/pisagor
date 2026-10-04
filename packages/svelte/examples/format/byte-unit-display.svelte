<script lang="ts">
import { Format } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
      <div>
        <span class="text-muted-foreground text-sm">Long: </span>
        <Format.Byte unitDisplay="long" value={1_500_000} />
      </div>
      <div>
        <span class="text-muted-foreground text-sm">Short: </span>
        <Format.Byte unitDisplay="short" value={1_500_000} />
      </div>
      <div>
        <span class="text-muted-foreground text-sm">Narrow: </span>
        <Format.Byte unitDisplay="narrow" value={1_500_000} />
      </div>
    </div>
