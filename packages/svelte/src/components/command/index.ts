import DialogRoot from "../dialog/dialog-root.svelte";
import CommandContent from "./command-content.svelte";
import CommandDialogContent from "./command-dialog-content.svelte";
import CommandDialogTrigger from "./command-dialog-trigger.svelte";
import CommandEmpty from "./command-empty.svelte";
import CommandFooter from "./command-footer.svelte";
import CommandInput from "./command-input.svelte";
import CommandItem from "./command-item.svelte";
import CommandItemGroup from "./command-item-group.svelte";
import CommandItemGroupLabel from "./command-item-group-label.svelte";
import CommandList from "./command-list.svelte";
import CommandRoot from "./command-root.svelte";
import CommandSeparator from "./command-separator.svelte";
import CommandShortcut from "./command-shortcut.svelte";

export const Command = Object.assign(CommandRoot, {
  Content: CommandContent,
  Dialog: DialogRoot,
  DialogContent: CommandDialogContent,
  DialogTrigger: CommandDialogTrigger,
  Empty: CommandEmpty,
  Footer: CommandFooter,
  Input: CommandInput,
  Item: CommandItem,
  ItemGroup: CommandItemGroup,
  ItemGroupLabel: CommandItemGroupLabel,
  List: CommandList,
  Root: CommandRoot,
  Separator: CommandSeparator,
  Shortcut: CommandShortcut,
});
