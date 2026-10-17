<script module lang="ts">
  import source from "./variants.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Slider } from "@pisagor/svelte";
</script>

<div class="flex flex-col gap-2">
  <Slider defaultValue={[40]} label="Primary" showValue variant="primary" />
  <Slider defaultValue={[40]} label="Secondary" showValue variant="secondary" />
</div>
