<script lang="ts">
import { CircularSlider } from "@pisagor/svelte";
</script>

<CircularSlider defaultValue={90}>
  <CircularSlider.ValueText suffix="°" />
</CircularSlider>
