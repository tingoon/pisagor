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

export type {
  SelectClearTriggerProps,
  SelectContentProps,
  SelectItemGroupLabelProps,
  SelectItemProps,
  SelectValueTextProps,
} from "@ark-ui/react/select";

export type {
  SelectEmptyProps,
  SelectItemGroupProps,
  SelectProps,
  SelectRootProps,
  SelectTriggerProps,
} from "./select";

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
