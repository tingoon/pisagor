import {
  SelectClearTrigger,
  SelectContent,
  SelectContext,
  SelectEmpty,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectRoot,
  SelectSeparator,
  SelectShorthand,
  SelectTrigger,
  SelectValueText,
} from "./select";

export type { SelectProps, SelectRootProps } from "./select";

export const Select = Object.assign(SelectShorthand, {
  ClearTrigger: SelectClearTrigger,
  Content: SelectContent,
  Context: SelectContext,
  Empty: SelectEmpty,
  Item: SelectItem,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  Root: SelectRoot,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
  ValueText: SelectValueText,
});
