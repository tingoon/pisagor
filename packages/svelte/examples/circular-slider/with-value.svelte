<script lang="ts">
import { CircularSlider } from "@pisagor/svelte";
import ThermometerIcon from "phosphor-svelte/lib/ThermometerIcon";
</script>

<CircularSlider>
  <div class="flex items-center gap-1">
    <ThermometerIcon class="size-4" />
    <CircularSlider.ValueText suffix="°" />
  </div>
</CircularSlider>
