<script module lang="ts">
  import source from "./mouse-wheel.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { NumberInput } from "@pisagor/svelte";
</script>

<NumberInput allowMouseWheel defaultValue="0" />
