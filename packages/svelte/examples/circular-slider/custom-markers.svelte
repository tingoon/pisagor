<script module lang="ts">
  import source from "./custom-markers.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { CircularSlider } from "@pisagor/svelte";
</script>

<CircularSlider
  aria-label="Angle"
  defaultValue={45}
  markers={[0, 90, 180, 270]}
/>
