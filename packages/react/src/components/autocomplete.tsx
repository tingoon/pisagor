import type { CollectionItem } from "@ark-ui/react";
import type { FormControlVariant } from "../internal";
import type { ComboboxRootProps } from "./combobox";
import { Combobox } from "./combobox";
import { Separator, type SeparatorProps } from "./separator";

// #region Types
interface AutocompletePresetItem {
  label: string;
  value: string;
}

export type AutocompleteRootProps<T extends CollectionItem = CollectionItem> =
  ComboboxRootProps<T>;

export interface AutocompleteProps extends Omit<
  AutocompleteRootProps,
  "children" | "collection" | "onValueChange"
> {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  items?: Array<AutocompletePresetItem | string>;
  /** Placeholder for the shorthand field. */
  placeholder?: string;
  /** Input size. Defaults to `md`. */
  size?: "sm" | "md" | "lg";
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
  onValueChange?: (value: string[]) => void;
}
// #endregion

// #region Parts
export function AutocompleteRoot<T extends CollectionItem = CollectionItem>(
  props: AutocompleteRootProps<T>,
) {
  return (
    <Combobox.Root {...props} allowCustomValue inputBehavior="autocomplete" />
  );
}

export const AutocompleteControl = Combobox.Control;
export const AutocompleteInput = Combobox.Input;
export const AutocompleteItemGroupLabel = Combobox.ItemGroupLabel;
export const AutocompleteItem = Combobox.Item;
export const AutocompleteContent = Combobox.Content;
export const AutocompleteTrigger = Combobox.Trigger;
export const AutocompleteClearTrigger = Combobox.ClearTrigger;
export const AutocompleteItemGroup = Combobox.ItemGroup;
export const AutocompleteEmpty = Combobox.Empty;
export const AutocompleteList = Combobox.List;
export const AutocompleteCollection = Combobox.List;

export function AutocompleteSeparator(props: SeparatorProps) {
  return (
    <Separator {...props} data-part="separator" data-scope="autocomplete" />
  );
}
// #endregion

// #region Shorthand
export function AutocompleteShorthand({
  clearable,
  items,
  placeholder,
  size,
  variant,
  onValueChange,
  ...rest
}: AutocompleteProps) {
  return (
    <Combobox
      {...rest}
      allowCustomValue
      clearable={clearable}
      inputBehavior="autocomplete"
      items={items}
      onValueChange={onValueChange}
      placeholder={placeholder}
      showTrigger={false}
      size={size}
      variant={variant}
    />
  );
}
// #endregion

// #region Display Names
AutocompleteRoot.displayName = "Autocomplete.Root";
AutocompleteSeparator.displayName = "Autocomplete.Separator";
// #endregion

export const Autocomplete = Object.assign(AutocompleteShorthand, {
  ClearTrigger: AutocompleteClearTrigger,
  Collection: AutocompleteCollection,
  Content: AutocompleteContent,
  Control: AutocompleteControl,
  Empty: AutocompleteEmpty,
  Input: AutocompleteInput,
  Item: AutocompleteItem,
  ItemGroup: AutocompleteItemGroup,
  ItemGroupLabel: AutocompleteItemGroupLabel,
  List: AutocompleteList,
  Root: AutocompleteRoot,
  Separator: AutocompleteSeparator,
  Trigger: AutocompleteTrigger,
});
