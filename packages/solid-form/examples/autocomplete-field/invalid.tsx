import { AutocompleteField } from "@pisagor/solid-form";
import { cityOptions } from "../options";

export function Invalid() {
  return (
    <AutocompleteField
      error="Please select a city."
      id="autocomplete-field-city-invalid"
      invalid
      items={cityOptions}
      label="City"
    />
  );
}
