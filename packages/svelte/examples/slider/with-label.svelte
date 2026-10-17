<script module lang="ts">
  import source from "./with-label.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Field, Slider } from "@pisagor/svelte";
</script>

<Field>
  <Slider defaultValue={[50]} label="Opacity" showValue />
</Field>
