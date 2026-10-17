<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { RadioGroupField } from "@pisagor/svelte-form";
  import { planOptions } from "../options";
</script>

<RadioGroupField
  error="Please select a plan."
  id="radio-group-field-plan-invalid"
  invalid
  label="Plan"
  options={planOptions}
/>
