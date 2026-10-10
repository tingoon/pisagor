import { AutocompleteField } from "@pisagor/solid-form";
import { cityOptions } from "../options";

export function Default() {
  return (
    <AutocompleteField
      description="Type a few letters or enter a city that isn't listed."
      id="autocomplete-field-office"
      items={cityOptions}
      label="Office location"
      placeholder="e.g. Berlin"
    />
  );
}
