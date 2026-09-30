<script lang="ts">
import { AutocompleteField } from "@pisagor/svelte-form";
import { cityOptions } from "../options";
</script>

<AutocompleteField
  description="Start typing to filter options."
  disabled
  id="autocomplete-field-city-disabled"
  items={cityOptions}
  label="City"
/>
