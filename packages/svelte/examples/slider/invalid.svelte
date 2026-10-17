<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Slider } from "@pisagor/svelte";
</script>

<Slider defaultValue={[50]} invalid />
