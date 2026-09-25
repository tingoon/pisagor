import RadioGroupShorthand from "./radio-group.svelte";
import RadioGroupItem from "./radio-group-item.svelte";
import RadioGroupLabel from "./radio-group-label.svelte";
import RadioGroupRoot from "./radio-group-root.svelte";

export const RadioGroup = Object.assign(RadioGroupShorthand, {
  Item: RadioGroupItem,
  Label: RadioGroupLabel,
  Root: RadioGroupRoot,
});
