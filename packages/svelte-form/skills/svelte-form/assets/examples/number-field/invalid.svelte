<script lang="ts">
import { NumberField } from "../../../../../src/fields/number-field";
</script>

<NumberField
  error="Quantity must be at least 1."
  id="number-field-quantity-invalid"
  invalid
  label="Quantity"
  max={10}
  min={1}
  value={0}
/>
