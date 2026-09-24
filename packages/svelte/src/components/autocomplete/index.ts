import { Combobox } from "../combobox";
import { Separator } from "../separator";
import AutocompleteShorthand from "./autocomplete.svelte";
import AutocompleteRoot from "./autocomplete-root.svelte";

export const Autocomplete = Object.assign(AutocompleteShorthand, {
  ClearTrigger: Combobox.ClearTrigger,
  Collection: Combobox.List,
  Content: Combobox.Content,
  Control: Combobox.Control,
  Empty: Combobox.Empty,
  Input: Combobox.Input,
  Item: Combobox.Item,
  ItemGroup: Combobox.ItemGroup,
  ItemGroupLabel: Combobox.ItemGroupLabel,
  List: Combobox.List,
  Root: AutocompleteRoot,
  Separator,
  Trigger: Combobox.Trigger,
});
