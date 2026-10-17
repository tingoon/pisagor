<script module lang="ts">
  import source from "./disabled.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { SliderField } from "@pisagor/svelte-form";
</script>

<SliderField
  defaultValue={[40]}
  disabled
  id="slider-field-opacity-disabled"
  label="Opacity"
  showValue
/>
