import { ButtonGroupRoot, ButtonGroupSeparator, ButtonGroupText } from "./button-group";

export type { ButtonGroupProps } from "./button-group";

export const ButtonGroup = Object.assign(ButtonGroupRoot, {
  Separator: ButtonGroupSeparator,
  Text: ButtonGroupText,
});
