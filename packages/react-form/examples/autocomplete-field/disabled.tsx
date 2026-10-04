import { AutocompleteField } from "../../src/fields/autocomplete-field";
import { cityOptions } from "../options";

export function Disabled() {
  return (
    <AutocompleteField
      description="Start typing to filter options."
      disabled
      id="autocomplete-field-city-disabled"
      items={cityOptions}
      label="City"
    />
  );
}
