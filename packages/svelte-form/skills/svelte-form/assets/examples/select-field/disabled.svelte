<script lang="ts">
import { SelectField } from "../../../../../src/fields/select-field";
import { countryOptions } from "../options";
</script>

<SelectField
  description="Used for shipping estimates."
  disabled
  id="select-field-country-disabled"
  items={countryOptions}
  label="Country"
  placeholder="Select a country"
/>
