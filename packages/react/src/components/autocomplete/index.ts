import {
  AutocompleteClear,
  AutocompleteCollection,
  AutocompleteContent,
  AutocompleteControl,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteRoot,
  AutocompleteSeparator,
  AutocompleteShorthand,
  AutocompleteTrigger,
} from "./autocomplete";

export type { AutocompleteProps } from "./autocomplete";

export const Autocomplete = Object.assign(AutocompleteShorthand, {
  Clear: AutocompleteClear,
  Collection: AutocompleteCollection,
  Content: AutocompleteContent,
  Control: AutocompleteControl,
  Empty: AutocompleteEmpty,
  Group: AutocompleteGroup,
  GroupLabel: AutocompleteGroupLabel,
  Input: AutocompleteInput,
  Item: AutocompleteItem,
  List: AutocompleteList,
  Root: AutocompleteRoot,
  Separator: AutocompleteSeparator,
  Trigger: AutocompleteTrigger,
});
