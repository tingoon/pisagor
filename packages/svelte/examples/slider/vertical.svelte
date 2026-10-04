<script lang="ts">
import { Slider } from "@pisagor/svelte";
</script>

<div class="flex items-center justify-center gap-2">
      <Slider
        class="h-40"
        defaultValue={[75]}
        max={100}
        orientation="vertical"
        step={1}
      />
      <Slider
        class="h-40"
        defaultValue={[25]}
        max={100}
        orientation="vertical"
        step={1}
      />
    </div>
