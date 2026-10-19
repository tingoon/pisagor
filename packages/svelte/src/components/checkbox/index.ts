import { Checkbox as CheckboxPrimitive } from "@ark-ui/svelte";
import CheckboxShorthand from "./checkbox.svelte";
import CheckboxControl from "./checkbox-control.svelte";
import CheckboxGroup from "./checkbox-group.svelte";
import CheckboxIndicator from "./checkbox-indicator.svelte";
import CheckboxLabel from "./checkbox-label.svelte";
import CheckboxRoot from "./checkbox-root.svelte";

export type { CheckboxCheckedState } from "@ark-ui/svelte";

export const Checkbox = Object.assign(CheckboxShorthand, {
  Control: CheckboxControl,
  Group: CheckboxGroup,
  HiddenInput: CheckboxPrimitive.HiddenInput,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
  Root: CheckboxRoot,
});
