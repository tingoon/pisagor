import type { CollectionItem } from "@ark-ui/react/collection";
import {
  Combobox,
  type ComboboxClearTriggerProps,
  type ComboboxContentProps,
  type ComboboxControlProps,
  type ComboboxEmptyProps,
  type ComboboxInputProps,
  type ComboboxItemGroupLabelProps,
  type ComboboxItemGroupProps,
  type ComboboxItemProps,
  type ComboboxListProps,
  type ComboboxRootProps,
  type ComboboxTriggerProps,
} from "../combobox";
import { Separator, type SeparatorProps } from "../separator";

// #region Types
interface AutocompletePresetItem {
  label: string;
  value: string;
}

export type AutocompleteRootProps<T extends CollectionItem = CollectionItem> = ComboboxRootProps<T>;

export interface AutocompleteProps extends Omit<AutocompleteRootProps, "children" | "collection"> {
  items?: Array<AutocompletePresetItem | string>;
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}
// #endregion

// #region Parts
export function AutocompleteRoot<T extends CollectionItem = CollectionItem>(
  props: AutocompleteRootProps<T>,
) {
  return <Combobox.Root allowCustomValue inputBehavior="autocomplete" {...props} />;
}

export function AutocompleteControl(props: ComboboxControlProps) {
  return <Combobox.Control {...props} />;
}

export function AutocompleteInput({
  clearable = false,
  showTrigger = false,
  ...rest
}: ComboboxInputProps) {
  return <Combobox.Input {...rest} clearable={clearable} showTrigger={showTrigger} />;
}

export function AutocompleteItemGroupLabel(props: ComboboxItemGroupLabelProps) {
  return <Combobox.ItemGroupLabel {...props} />;
}

export function AutocompleteItem(props: ComboboxItemProps) {
  return <Combobox.Item {...props} />;
}

export function AutocompleteContent(props: ComboboxContentProps) {
  return <Combobox.Content {...props} />;
}

export function AutocompleteTrigger(props: ComboboxTriggerProps) {
  return <Combobox.Trigger {...props} />;
}

export function AutocompleteClearTrigger(props: ComboboxClearTriggerProps) {
  return <Combobox.ClearTrigger {...props} />;
}

export function AutocompleteItemGroup(props: ComboboxItemGroupProps) {
  return <Combobox.ItemGroup {...props} />;
}

export function AutocompleteEmpty(props: ComboboxEmptyProps) {
  return <Combobox.Empty {...props} />;
}

export function AutocompleteList(props: ComboboxListProps) {
  return <Combobox.List {...props} />;
}

export function AutocompleteCollection(props: ComboboxListProps) {
  return <Combobox.List {...props} />;
}

export function AutocompleteSeparator(props: SeparatorProps) {
  return <Separator data-part="separator" data-scope="autocomplete" {...props} />;
}
// #endregion

// #region Shorthand
export function AutocompleteShorthand({ items, clearable, ...rest }: AutocompleteProps) {
  return (
    <Combobox
      {...rest}
      allowCustomValue
      clearable={clearable}
      inputBehavior="autocomplete"
      items={items}
    />
  );
}
// #endregion

// #region Display Names
AutocompleteRoot.displayName = "Autocomplete.Root";
AutocompleteControl.displayName = "Autocomplete.Control";
AutocompleteInput.displayName = "Autocomplete.Input";
AutocompleteItemGroupLabel.displayName = "Autocomplete.ItemGroupLabel";
AutocompleteItem.displayName = "Autocomplete.Item";
AutocompleteContent.displayName = "Autocomplete.Content";
AutocompleteTrigger.displayName = "Autocomplete.Trigger";
AutocompleteClearTrigger.displayName = "Autocomplete.ClearTrigger";
AutocompleteItemGroup.displayName = "Autocomplete.ItemGroup";
AutocompleteEmpty.displayName = "Autocomplete.Empty";
AutocompleteList.displayName = "Autocomplete.List";
AutocompleteCollection.displayName = "Autocomplete.Collection";
AutocompleteSeparator.displayName = "Autocomplete.Separator";
AutocompleteShorthand.displayName = "Autocomplete";
// #endregion
