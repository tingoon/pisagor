import { countryOptions } from "../../../examples/options";
import { SelectField } from "..";

export function Invalid() {
  return (
    <SelectField
      error="Please select a country."
      id="select-field-country-invalid"
      invalid
      items={countryOptions}
      label="Country"
      placeholder="Select a country"
    />
  );
}
