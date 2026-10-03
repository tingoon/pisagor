import { SelectField } from "../../../../../src/fields/select-field";
import { countryOptions } from "../options";

export function Disabled() {
  return (
    <SelectField
      description="Used for shipping estimates."
      disabled
      id="select-field-country-disabled"
      items={countryOptions}
      label="Country"
      placeholder="Select a country"
    />
  );
}
