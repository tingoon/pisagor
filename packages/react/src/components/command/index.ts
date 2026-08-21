import {
  CommandContent,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandInput,
  CommandItem,
  CommandItemGroup,
  CommandItemGroupLabel,
  CommandList,
  CommandRoot,
  CommandSeparator,
  CommandShortcut,
} from "./command";

export type {
  CommandContentProps,
  CommandDialogContentProps,
  CommandFooterProps,
  CommandInputProps,
  CommandListProps,
  CommandProps,
  CommandSeparatorProps,
} from "./command";

export const Command = Object.assign(CommandRoot, {
  Content: CommandContent,
  Dialog: CommandDialog,
  DialogContent: CommandDialogContent,
  DialogTrigger: CommandDialogTrigger,
  Empty: CommandEmpty,
  Footer: CommandFooter,
  Input: CommandInput,
  Item: CommandItem,
  ItemGroup: CommandItemGroup,
  ItemGroupLabel: CommandItemGroupLabel,
  List: CommandList,
  Separator: CommandSeparator,
  Shortcut: CommandShortcut,
});
