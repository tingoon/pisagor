/** @jsxImportSource solid-js */
import { SelectField } from "@pisagor/solid-form";
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
