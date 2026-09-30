<script lang="ts">
import { RadioGroupField } from "../../../../../src/fields/radio-group-field";
import { planOptions } from "../options";
</script>

<RadioGroupField
  error="Please select a plan."
  id="radio-group-field-plan-invalid"
  invalid
  label="Plan"
  options={planOptions}
/>
