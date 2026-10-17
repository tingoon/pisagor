<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

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
