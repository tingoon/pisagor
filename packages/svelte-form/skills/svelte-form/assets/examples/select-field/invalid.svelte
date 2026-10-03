<script lang="ts">
import { SelectField } from "@pisagor/svelte-form";
import { countryOptions } from "../options";
</script>

<SelectField
  error="Please select a country."
  id="select-field-country-invalid"
  invalid
  items={countryOptions}
  label="Country"
  placeholder="Select a country"
/>
