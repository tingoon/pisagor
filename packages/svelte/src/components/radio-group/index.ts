import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/svelte";
import RadioGroupShorthand from "./radio-group.svelte";
import RadioGroupItem from "./radio-group-item.svelte";
import RadioGroupItemControl from "./radio-group-item-control.svelte";
import RadioGroupItemText from "./radio-group-item-text.svelte";
import RadioGroupLabel from "./radio-group-label.svelte";
import RadioGroupRoot from "./radio-group-root.svelte";

export type {
  RadioGroupItemControlProps,
  RadioGroupItemHiddenInputProps,
  RadioGroupItemProps,
  RadioGroupItemTextProps,
  RadioGroupLabelProps,
} from "@ark-ui/svelte";

export const RadioGroup = Object.assign(RadioGroupShorthand, {
  Item: RadioGroupItem,
  ItemControl: RadioGroupItemControl,
  ItemHiddenInput: RadioGroupPrimitive.ItemHiddenInput,
  ItemText: RadioGroupItemText,
  Label: RadioGroupLabel,
  Root: RadioGroupRoot,
});
