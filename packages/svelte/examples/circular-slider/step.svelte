<script module lang="ts">
  import source from "./step.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { CircularSlider } from "@pisagor/svelte";
</script>

<CircularSlider
  aria-label="Angle"
  defaultValue={120}
  markers
  markersAtSteps
  step={60}
/>
