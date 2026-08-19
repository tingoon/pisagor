import { Autocomplete, type AutocompleteProps } from "@pisagor/react/autocomplete";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";

// #region Types
interface AutocompleteOption {
  label: string;
  value: string;
}

export interface AutocompleteFieldProps
  extends FieldPresentationProps,
    Omit<AutocompleteProps, "invalid" | "name" | "onValueChange" | "value"> {
  items: Array<AutocompleteOption | string>;
  name?: string;
  onBlur?: () => void;
  onValueChange: (value: string) => void;
  value?: string;
}
// #endregion

// #region Component
export function AutocompleteField({
  className,
  description,
  error,
  id,
  invalid,
  items,
  label,
  labelAccessory,
  labelProps,
  name,
  onBlur,
  onValueChange,
  value,
  ...autocompleteProps
}: AutocompleteFieldProps) {
  return (
    <FieldShell
      className={className}
      description={description}
      error={error}
      id={id}
      invalid={invalid}
      label={label}
      labelAccessory={labelAccessory}
      labelProps={labelProps}
    >
      <Autocomplete
        {...autocompleteProps}
        id={id}
        invalid={invalid}
        items={items}
        name={name}
        onFocusOutside={onBlur}
        onValueChange={(nextValue) => onValueChange(nextValue.at(0) ?? "")}
        {...(value !== undefined ? { value: value ? [value] : [] } : {})}
      />
    </FieldShell>
  );
}
// #endregion
