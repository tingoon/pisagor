import {
  RadioGroupItem,
  RadioGroupItemText,
  RadioGroupLabel,
  RadioGroupRoot,
  RadioGroupShorthand,
} from "./radio-group";

export type {
  RadioGroupItemProps,
  RadioGroupItemTextProps,
  RadioGroupLabelProps,
  RadioGroupProps,
  RadioGroupRootProps,
} from "./radio-group";

export const RadioGroup = Object.assign(RadioGroupShorthand, {
  Item: RadioGroupItem,
  ItemText: RadioGroupItemText,
  Label: RadioGroupLabel,
  Root: RadioGroupRoot,
});
