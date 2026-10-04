<script lang="ts">
import { CircularSlider } from "@pisagor/svelte";
</script>

<div class="flex flex-wrap items-center gap-2">
      {#each [120, 180, 240] as size}
<CircularSlider
          aria-label="Angle"
          defaultValue={45}
          size={size}
        >
          <CircularSlider.ValueText suffix="°" />
        </CircularSlider>
{/each}
    </div>
