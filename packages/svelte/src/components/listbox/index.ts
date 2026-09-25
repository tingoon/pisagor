import ListboxShorthand from "./listbox.svelte";
import ListboxContent from "./listbox-content.svelte";
import ListboxEmpty from "./listbox-empty.svelte";
import ListboxItem from "./listbox-item.svelte";
import ListboxItemGroup from "./listbox-item-group.svelte";
import ListboxItemGroupLabel from "./listbox-item-group-label.svelte";
import ListboxItemIndicator from "./listbox-item-indicator.svelte";
import ListboxItemText from "./listbox-item-text.svelte";
import ListboxRoot from "./listbox-root.svelte";
import ListboxShortcut from "./listbox-shortcut.svelte";
import ListboxValueText from "./listbox-value-text.svelte";

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
