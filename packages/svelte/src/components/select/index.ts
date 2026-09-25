import { Select as SelectPrimitive } from "@ark-ui/svelte/select";
import SelectShorthand from "./select.svelte";
import SelectClearTrigger from "./select-clear-trigger.svelte";
import SelectContent from "./select-content.svelte";
import SelectEmpty from "./select-empty.svelte";
import SelectItem from "./select-item.svelte";
import SelectItemGroup from "./select-item-group.svelte";
import SelectItemGroupLabel from "./select-item-group-label.svelte";
import SelectRoot from "./select-root.svelte";
import SelectSeparator from "./select-separator.svelte";
import SelectTrigger from "./select-trigger.svelte";
import SelectValueText from "./select-value-text.svelte";

export const Select = Object.assign(SelectShorthand, {
  ClearTrigger: SelectClearTrigger,
  Content: SelectContent,
  Context: SelectPrimitive.Context,
  Empty: SelectEmpty,
  Item: SelectItem,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  Root: SelectRoot,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
  ValueText: SelectValueText,
});
