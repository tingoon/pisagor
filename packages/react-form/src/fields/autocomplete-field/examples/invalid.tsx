import { cityOptions } from "../../../examples/options";
import { AutocompleteField } from "..";

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
