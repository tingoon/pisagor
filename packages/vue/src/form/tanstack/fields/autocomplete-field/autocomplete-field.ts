import {
  AutocompleteField as AutocompleteFieldControl,
  type AutocompleteFieldProps,
} from "../../../fields/autocomplete-field/autocomplete-field";
import { createFieldComponent } from "../../create-field-component";

type AutocompleteFieldControlProps = AutocompleteFieldProps;
type ConnectedAutocompleteFieldProps = Pick<
  AutocompleteFieldControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "value"
>;

export const AutocompleteField = createFieldComponent<
  string,
  AutocompleteFieldControlProps,
  ConnectedAutocompleteFieldProps
>(AutocompleteFieldControl, ({ error, field, invalid }) => ({
  error,
  invalid,
  name: field.name,
  onBlur: field.handleBlur,
  onValueChange: (value: string) => field.handleChange(value),
  value: field.state.value as string,
}));
