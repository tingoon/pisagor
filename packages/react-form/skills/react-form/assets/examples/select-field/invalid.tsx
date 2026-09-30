import { SelectField } from "../../../../../src/fields/select-field";
import { countryOptions } from "../options";

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
