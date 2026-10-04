import { Autocomplete, type AutocompleteProps } from "@pisagor/solid";
import { splitProps } from "solid-js";
import {
  type FieldPresentationProps,
  FieldShell,
} from "../../internal/field-shell";

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
  onValueChange?: (value: string) => void;
}
// #endregion

// #region Component
export function AutocompleteField(props: AutocompleteFieldProps) {
  const [local, autocompleteProps] = splitProps(props, [
    "orientation",
    "invalid",
    "items",
    "name",
    "value",
    "description",
    "error",
    "id",
    "label",
    "labelAccessory",
    "labelProps",
    "onBlur",
    "onValueChange",
    "class",
  ]);

  return (
    <FieldShell
      class={local.class}
      description={local.description}
      error={local.error}
      id={local.id}
      invalid={local.invalid}
      label={local.label}
      labelAccessory={local.labelAccessory}
      labelProps={local.labelProps}
      orientation={local.orientation}
    >
      <Autocomplete
        {...autocompleteProps}
        {...(local.value !== undefined
          ? { value: local.value ? [local.value] : [] }
          : {})}
        id={local.id}
        invalid={local.invalid}
        items={local.items}
        name={local.name}
        onFocusOutside={local.onBlur}
        onValueChange={(nextValue) =>
          local.onValueChange?.(nextValue.at(0) ?? "")
        }
      />
    </FieldShell>
  );
}
// #endregion
