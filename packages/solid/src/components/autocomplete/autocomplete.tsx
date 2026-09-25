import type { CollectionItem } from "@ark-ui/solid/collection";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type {
  ComboboxClearTriggerProps,
  ComboboxContentProps,
  ComboboxControlProps,
  ComboboxEmptyProps,
  ComboboxInputProps,
  ComboboxItemGroupLabelProps,
  ComboboxItemGroupProps,
  ComboboxItemProps,
  ComboboxListProps,
  ComboboxRootProps,
  ComboboxTriggerProps,
} from "../combobox";
import { Combobox } from "../combobox";
import { Separator, type SeparatorProps } from "../separator";

interface AutocompletePresetItem {
  label: string;
  value: string;
}

export type AutocompleteRootProps<T extends CollectionItem = CollectionItem> =
  ComboboxRootProps<T>;

export interface AutocompleteProps
  extends Omit<AutocompleteRootProps, "children" | "collection"> {
  clearable?: boolean;
  items?: Array<AutocompletePresetItem | string>;
}

export function AutocompleteRoot<T extends CollectionItem = CollectionItem>(
  props: AutocompleteRootProps<T>,
): JSX.Element {
  return (
    <Combobox.Root {...props} allowCustomValue inputBehavior="autocomplete" />
  );
}

export function AutocompleteControl(props: ComboboxControlProps): JSX.Element {
  return <Combobox.Control {...props} />;
}

export function AutocompleteInput(props: ComboboxInputProps): JSX.Element {
  const [local, rest] = splitProps(props, ["clearable", "showTrigger"]);
  return (
    <Combobox.Input
      {...rest}
      clearable={local.clearable ?? false}
      showTrigger={local.showTrigger ?? false}
    />
  );
}

export function AutocompleteItemGroupLabel(
  props: ComboboxItemGroupLabelProps,
): JSX.Element {
  return <Combobox.ItemGroupLabel {...props} />;
}

export function AutocompleteItem(props: ComboboxItemProps): JSX.Element {
  return <Combobox.Item {...props} />;
}

export function AutocompleteContent(props: ComboboxContentProps): JSX.Element {
  return <Combobox.Content {...props} />;
}

export function AutocompleteTrigger(props: ComboboxTriggerProps): JSX.Element {
  return <Combobox.Trigger {...props} />;
}

export function AutocompleteClearTrigger(
  props: ComboboxClearTriggerProps,
): JSX.Element {
  return <Combobox.ClearTrigger {...props} />;
}

export function AutocompleteItemGroup(
  props: ComboboxItemGroupProps,
): JSX.Element {
  return <Combobox.ItemGroup {...props} />;
}

export function AutocompleteEmpty(props: ComboboxEmptyProps): JSX.Element {
  return <Combobox.Empty {...props} />;
}

export function AutocompleteList(props: ComboboxListProps): JSX.Element {
  return <Combobox.List {...props} />;
}

export function AutocompleteCollection(props: ComboboxListProps): JSX.Element {
  return <Combobox.List {...props} />;
}

export function AutocompleteSeparator(props: SeparatorProps): JSX.Element {
  return (
    <Separator {...props} data-part="separator" data-scope="autocomplete" />
  );
}

export function AutocompleteShorthand(props: AutocompleteProps): JSX.Element {
  const [local, rest] = splitProps(props, ["clearable", "items"]);
  return (
    <Combobox
      {...rest}
      allowCustomValue
      clearable={local.clearable}
      inputBehavior="autocomplete"
      items={local.items}
    />
  );
}
