import type { AutocompleteProps } from "../../../components";
import { Autocomplete } from "../../../components";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";

// #region Types
interface AutocompleteOption {
  label: string;
  value: string;
}

export interface AutocompleteFieldProps
  extends FieldPresentationProps,
    Omit<AutocompleteProps, "invalid" | "name" | "onValueChange" | "value"> {
  name?: string;
  value?: string;
  items: Array<AutocompleteOption | string>;
  onBlur?: () => void;
  onValueChange: (value: string) => void;
}
// #endregion

// #region Component
export function AutocompleteField({
  orientation,
  invalid,
  items,
  name,
  value,
  description,
  error,
  id,
  label,
  labelAccessory,
  labelProps,
  onBlur,
  onValueChange,
  className,
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
      orientation={orientation}
    >
      <Autocomplete
        {...autocompleteProps}
        {...(value !== undefined ? { value: value ? [value] : [] } : {})}
        id={id}
        invalid={invalid}
        items={items}
        name={name}
        onFocusOutside={onBlur}
        onValueChange={(nextValue) => onValueChange(nextValue.at(0) ?? "")}
      />
    </FieldShell>
  );
}
// #endregion
