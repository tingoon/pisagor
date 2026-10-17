<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Timer } from "@pisagor/svelte";
</script>

<Timer
  countdown
  isControlsVisible
  startMs={60_000}
  units={["minutes", "seconds"]}
/>
