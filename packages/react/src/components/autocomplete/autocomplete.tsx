import type { CollectionItem, ListCollection } from "@ark-ui/react/collection";
import type { ComboboxRootProps as ComboboxRootPropsPrimitive } from "@ark-ui/react/combobox";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import type { WithTestId } from "../../internal/types";
import {
  Combobox,
  type ComboboxClearProps,
  type ComboboxContentProps,
  type ComboboxControlProps,
  type ComboboxEmptyProps,
  type ComboboxGroupLabelProps,
  type ComboboxGroupProps,
  type ComboboxInputProps,
  type ComboboxItemProps,
  type ComboboxListProps,
  type ComboboxTriggerProps,
} from "../combobox";
import { Separator, type SeparatorProps } from "../separator";

// #region Types
interface AutocompletePresetItem {
  label: string;
  value: string;
}

type AutocompleteRootProps<T extends CollectionItem = CollectionItem> = Omit<
  ComboboxRootPropsPrimitive<T>,
  "collection" | "onValueChange"
> & {
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
  collection?: ListCollection<T>;
  onValueChange?: (value: string[]) => void;
} & WithTestId;

export interface AutocompleteProps extends Omit<AutocompleteRootProps, "children"> {
  items?: Array<AutocompletePresetItem | string>;
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

// #endregion

// #region Components
export function AutocompleteRoot<T extends CollectionItem = CollectionItem>(
  props: AutocompleteRootProps<T>,
) {
  return <Combobox.Root allowCustomValue inputBehavior="autocomplete" {...props} />;
}
AutocompleteRoot.displayName = "Autocomplete.Root";

export function AutocompleteControl(props: ComboboxControlProps) {
  return <Combobox.Control {...props} />;
}
AutocompleteControl.displayName = "Autocomplete.Control";

export function AutocompleteInput({
  clearable = false,
  showTrigger = false,
  ...rest
}: ComboboxInputProps) {
  return <Combobox.Input {...rest} clearable={clearable} showTrigger={showTrigger} />;
}
AutocompleteInput.displayName = "Autocomplete.Input";

export function AutocompleteGroupLabel(props: ComboboxGroupLabelProps) {
  return <Combobox.GroupLabel {...props} />;
}
AutocompleteGroupLabel.displayName = "Autocomplete.GroupLabel";

export function AutocompleteItem(props: ComboboxItemProps) {
  return <Combobox.Item {...props} />;
}
AutocompleteItem.displayName = "Autocomplete.Item";

export function AutocompleteContent(props: ComboboxContentProps) {
  return <Combobox.Content {...props} />;
}
AutocompleteContent.displayName = "Autocomplete.Content";

export function AutocompleteTrigger(props: ComboboxTriggerProps) {
  return <Combobox.Trigger {...props} />;
}
AutocompleteTrigger.displayName = "Autocomplete.Trigger";

export function AutocompleteClear(props: ComboboxClearProps) {
  return <Combobox.Clear {...props} />;
}
AutocompleteClear.displayName = "Autocomplete.Clear";

export function AutocompleteGroup(props: ComboboxGroupProps) {
  return <Combobox.Group {...props} />;
}
AutocompleteGroup.displayName = "Autocomplete.Group";

export function AutocompleteEmpty(props: ComboboxEmptyProps) {
  return <Combobox.Empty {...props} />;
}
AutocompleteEmpty.displayName = "Autocomplete.Empty";

export function AutocompleteList(props: ComboboxListProps) {
  return <Combobox.List {...props} />;
}
AutocompleteList.displayName = "Autocomplete.List";

export function AutocompleteCollection(props: ComboboxListProps) {
  return <Combobox.List {...props} />;
}
AutocompleteCollection.displayName = "Autocomplete.Collection";

export function AutocompleteSeparator(props: SeparatorProps) {
  return <Separator dataPart="separator" dataScope="autocomplete" {...props} />;
}
AutocompleteSeparator.displayName = "Autocomplete.Separator";

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
AutocompleteShorthand.displayName = "Autocomplete";

// #endregion
