import { CheckboxGroup, CheckboxRoot } from "./checkbox";

export type { CheckboxCheckedState, CheckboxRootProps } from "@ark-ui/solid/checkbox";

export type { CheckboxGroupProps, CheckboxProps } from "./checkbox";

export const Checkbox = Object.assign(CheckboxRoot, {
  Group: CheckboxGroup,
});
