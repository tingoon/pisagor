<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { SelectField } from "@pisagor/svelte-form";
  import { countryOptions } from "../options";
</script>

<SelectField
  description="Sets your currency and tax rules."
  id="select-field-billing-country"
  items={countryOptions}
  label="Billing country"
  placeholder="Choose a country"
/>
