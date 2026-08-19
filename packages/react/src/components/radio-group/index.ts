import {
  RadioGroupItem,
  RadioGroupLabel,
  RadioGroupRoot,
  RadioGroupShorthand,
  RadioGroupText,
} from "./radio-group";

export type { RadioGroupProps, RadioGroupRootProps } from "./radio-group";

export const RadioGroup = Object.assign(RadioGroupShorthand, {
  Item: RadioGroupItem,
  Label: RadioGroupLabel,
  Root: RadioGroupRoot,
  Text: RadioGroupText,
});
