<script lang="ts">
import { SelectField } from "../../../../../src/fields/select-field";
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
