<script lang="ts">
import { AutocompleteField } from "@pisagor/svelte-form";
import { cityOptions } from "../options";
</script>

<AutocompleteField
  description="Type a few letters or enter a city that isn't listed."
  id="autocomplete-field-office"
  items={cityOptions}
  label="Office location"
  placeholder="e.g. Berlin"
/>
