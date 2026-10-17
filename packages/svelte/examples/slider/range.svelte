<script module lang="ts">
  import source from "./range.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Slider } from "@pisagor/svelte";
</script>

<Slider defaultValue={[40, 60]} />
