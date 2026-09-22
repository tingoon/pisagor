import { countryOptions } from "../../../examples/options";
import { SelectField } from "..";

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
