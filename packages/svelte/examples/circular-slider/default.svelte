<script lang="ts">
import { CircularSlider } from "@pisagor/svelte/circular-slider";
</script>

<CircularSlider defaultValue={90}>
  <CircularSlider.ValueText suffix="°" />
</CircularSlider>
