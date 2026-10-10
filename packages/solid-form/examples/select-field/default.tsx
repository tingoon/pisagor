import { SelectField } from "@pisagor/solid-form";
import { countryOptions } from "../options";

export function Default() {
  return (
    <SelectField
      description="Sets your currency and tax rules."
      id="select-field-billing-country"
      items={countryOptions}
      label="Billing country"
      placeholder="Choose a country"
    />
  );
}
