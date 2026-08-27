import { CheckboxGroup, CheckboxRoot } from "./checkbox";

export type { CheckboxGroupProps, CheckboxProps, CheckboxRootProps } from "./checkbox";

export const Checkbox = Object.assign(CheckboxRoot, {
  Group: CheckboxGroup,
});
