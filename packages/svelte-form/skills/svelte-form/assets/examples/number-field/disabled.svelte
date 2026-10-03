<script lang="ts">
import { NumberField } from "@pisagor/svelte-form";
</script>

<NumberField
  description="Choose between 1 and 10."
  disabled
  id="number-field-quantity-disabled"
  label="Quantity"
  max={10}
  min={1}
  placeholder="0"
/>
