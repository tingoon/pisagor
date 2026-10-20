import ComboboxInput from "../combobox/combobox-input.svelte";
import ComboboxItem from "../combobox/combobox-item.svelte";
import ComboboxItemGroup from "../combobox/combobox-item-group.svelte";
import ComboboxItemGroupLabel from "../combobox/combobox-item-group-label.svelte";
import CommandShorthand from "./command.svelte";
import CommandContent from "./command-content.svelte";
import CommandControl from "./command-control.svelte";
import CommandDialog from "./command-dialog.svelte";
import CommandEmpty from "./command-empty.svelte";
import CommandFooter from "./command-footer.svelte";
import CommandList from "./command-list.svelte";
import CommandRoot from "./command-root.svelte";
import CommandSeparator from "./command-separator.svelte";
import CommandShortcut from "./command-shortcut.svelte";

export type { CommandItem } from "./command.types";

export const Command = Object.assign(CommandShorthand, {
  Content: CommandContent,
  Control: CommandControl,
  Dialog: CommandDialog,
  Empty: CommandEmpty,
  Footer: CommandFooter,
  Input: ComboboxInput,
  Item: ComboboxItem,
  ItemGroup: ComboboxItemGroup,
  ItemGroupLabel: ComboboxItemGroupLabel,
  List: CommandList,
  Root: CommandRoot,
  Separator: CommandSeparator,
  Shortcut: CommandShortcut,
});
