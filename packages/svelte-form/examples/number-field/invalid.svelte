<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { NumberField } from "@pisagor/svelte-form";
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
