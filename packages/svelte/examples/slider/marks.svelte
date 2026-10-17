<script module lang="ts">
  import source from "./marks.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Slider } from "@pisagor/svelte";
</script>

<Slider defaultValue={[5]} markerInterval={2} max={12} showMarkers />
