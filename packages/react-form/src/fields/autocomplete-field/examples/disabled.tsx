import { cityOptions } from "../../../examples/options";
import { AutocompleteField } from "..";

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
