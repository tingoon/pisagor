<script lang="ts">
import { RadioGroupField } from "@pisagor/svelte-form";
import { planOptions } from "../options";
</script>

<RadioGroupField
  description="You can change this anytime in billing settings."
  disabled
  id="radio-group-field-plan-disabled"
  label="Plan"
  options={planOptions}
/>
