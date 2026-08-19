import {
  SelectClearTrigger,
  SelectContent,
  SelectContext,
  SelectEmpty,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectRoot,
  SelectSeparator,
  SelectShorthand,
  SelectTrigger,
  SelectValue,
} from "./select";

export type { SelectProps, SelectRootProps } from "./select";

export const Select = Object.assign(SelectShorthand, {
  ClearTrigger: SelectClearTrigger,
  Content: SelectContent,
  Context: SelectContext,
  Empty: SelectEmpty,
  Group: SelectGroup,
  GroupLabel: SelectGroupLabel,
  Item: SelectItem,
  Root: SelectRoot,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
  Value: SelectValue,
});
