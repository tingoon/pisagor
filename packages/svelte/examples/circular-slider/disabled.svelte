<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { CircularSlider } from "@pisagor/svelte";
</script>

<CircularSlider aria-label="Angle" defaultValue={45} disabled />
