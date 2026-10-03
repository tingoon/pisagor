<script lang="ts">
import { SliderField } from "@pisagor/svelte-form";
</script>

<SliderField
  defaultValue={[10]}
  error="Value is too low."
  id="slider-field-opacity-invalid"
  invalid
  label="Opacity"
  showValue
/>
