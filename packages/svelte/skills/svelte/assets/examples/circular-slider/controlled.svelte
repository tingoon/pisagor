<script lang="ts">
import { CircularSlider } from "@pisagor/svelte/circular-slider";

let value = $state(45);

</script>

<div class="flex flex-col gap-2">
      <div class="text-muted-foreground text-sm">More than: 180</div>
      <CircularSlider
        aria-label="Angle"
        onValueChange={(v) => { value = v; }}
        value={value}
      />
      <div class="text-center text-muted-foreground text-sm">
        {value > 180 ? "✅" : "❌"}
      </div>
    </div>
