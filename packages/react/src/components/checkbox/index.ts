import { CheckboxGroup, CheckboxRoot } from "./checkbox";

export type { CheckboxRootProps } from "@ark-ui/react/checkbox";

export type { CheckboxGroupProps, CheckboxProps } from "./checkbox";

export const Checkbox = Object.assign(CheckboxRoot, {
  Group: CheckboxGroup,
});
