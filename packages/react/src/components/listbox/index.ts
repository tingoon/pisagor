export { createListCollection } from "@ark-ui/react/collection";

import {
  ListboxContent,
  ListboxEmpty,
  ListboxItem,
  ListboxItemGroup,
  ListboxItemGroupLabel,
  ListboxItemIndicator,
  ListboxItemText,
  ListboxRoot,
  ListboxShortcut,
  ListboxShorthand,
  ListboxValueText,
} from "./listbox";

export type { ListboxProps } from "./listbox";

export const Listbox = Object.assign(ListboxShorthand, {
  Content: ListboxContent,
  Empty: ListboxEmpty,
  Item: ListboxItem,
  ItemGroup: ListboxItemGroup,
  ItemGroupLabel: ListboxItemGroupLabel,
  ItemIndicator: ListboxItemIndicator,
  ItemText: ListboxItemText,
  Root: ListboxRoot,
  Shortcut: ListboxShortcut,
  ValueText: ListboxValueText,
});
