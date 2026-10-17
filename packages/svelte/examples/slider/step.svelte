<script module lang="ts">
  import source from "./step.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Slider } from "@pisagor/svelte";
</script>

<Slider
  defaultValue={[0]}
  label="Storage size"
  markerInterval={1}
  markerLabels={["5GB", "25GB", "50GB"]}
  max={2}
  min={0}
  showMarkers
/>
