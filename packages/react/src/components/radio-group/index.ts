import {
  RadioGroupItem,
  RadioGroupItemText,
  RadioGroupLabel,
  RadioGroupRoot,
  RadioGroupShorthand,
} from "./radio-group";

export type { RadioGroupItemTextProps, RadioGroupLabelProps } from "@ark-ui/react/radio-group";

export type {
  RadioGroupItemProps,
  RadioGroupProps,
  RadioGroupRootProps,
} from "./radio-group";

export const RadioGroup = Object.assign(RadioGroupShorthand, {
  Item: RadioGroupItem,
  ItemText: RadioGroupItemText,
  Label: RadioGroupLabel,
  Root: RadioGroupRoot,
});
