<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { SliderField } from "@pisagor/svelte-form";
</script>

<SliderField
  defaultValue={[70]}
  description="Applies to all notification sounds."
  id="slider-field-volume"
  label="Volume"
  showValue
/>
