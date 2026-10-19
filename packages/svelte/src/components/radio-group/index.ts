import RadioGroupShorthand from "./radio-group.svelte";
import RadioGroupItem from "./radio-group-item.svelte";
import RadioGroupItemControl from "./radio-group-item-control.svelte";
import RadioGroupItemHiddenInput from "./radio-group-item-hidden-input.svelte";
import RadioGroupItemText from "./radio-group-item-text.svelte";
import RadioGroupLabel from "./radio-group-label.svelte";
import RadioGroupRoot from "./radio-group-root.svelte";

export type {
  RadioGroupItemTextProps,
  RadioGroupLabelProps,
} from "@ark-ui/svelte";

export const RadioGroup = Object.assign(RadioGroupShorthand, {
  Item: RadioGroupItem,
  ItemControl: RadioGroupItemControl,
  ItemHiddenInput: RadioGroupItemHiddenInput,
  ItemText: RadioGroupItemText,
  Label: RadioGroupLabel,
  Root: RadioGroupRoot,
});
