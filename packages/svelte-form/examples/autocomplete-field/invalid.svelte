<script module lang="ts">
  import source from "./invalid.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { AutocompleteField } from "@pisagor/svelte-form";
  import { cityOptions } from "../options";
</script>

<AutocompleteField
  error="Please select a city."
  id="autocomplete-field-city-invalid"
  invalid
  items={cityOptions}
  label="City"
/>
