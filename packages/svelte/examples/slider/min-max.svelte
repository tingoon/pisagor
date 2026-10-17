<script module lang="ts">
  import source from "./min-max.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Slider } from "@pisagor/svelte";
</script>

<Slider defaultValue={[50]} label="Volume" max={200} min={0} showValue />
