import { Checkbox as CheckboxPrimitive } from "@ark-ui/svelte";
import CheckboxRoot from "./checkbox.svelte";
import CheckboxCompoundRoot from "./checkbox-compound-root.svelte";
import CheckboxControl from "./checkbox-control.svelte";
import CheckboxGroup from "./checkbox-group.svelte";
import CheckboxIndicator from "./checkbox-indicator.svelte";
import CheckboxLabel from "./checkbox-label.svelte";

export type { CheckboxCheckedState } from "@ark-ui/svelte";

export const Checkbox = Object.assign(CheckboxRoot, {
  Control: CheckboxControl,
  Group: CheckboxGroup,
  HiddenInput: CheckboxPrimitive.HiddenInput,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
  Root: CheckboxCompoundRoot,
});
