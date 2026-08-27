import {
  AutocompleteClearTrigger,
  AutocompleteCollection,
  AutocompleteContent,
  AutocompleteControl,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteItemGroup,
  AutocompleteItemGroupLabel,
  AutocompleteList,
  AutocompleteRoot,
  AutocompleteSeparator,
  AutocompleteShorthand,
  AutocompleteTrigger,
} from "./autocomplete";

export type { AutocompleteProps, AutocompleteRootProps } from "./autocomplete";

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
