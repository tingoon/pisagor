import PasswordInputShorthand from "./password-input.svelte";
import PasswordInputControl from "./password-input-control.svelte";
import PasswordInputIndicator from "./password-input-indicator.svelte";
import PasswordInputInput from "./password-input-input.svelte";
import PasswordInputLabel from "./password-input-label.svelte";
import PasswordInputRoot from "./password-input-root.svelte";
import PasswordInputVisibilityTrigger from "./password-input-visibility-trigger.svelte";

export type {
  PasswordInputControlProps,
  PasswordInputIndicatorProps,
  PasswordInputInputProps,
  PasswordInputLabelProps,
  PasswordInputVisibilityTriggerProps,
} from "@ark-ui/svelte";

export const PasswordInput = Object.assign(PasswordInputShorthand, {
  Control: PasswordInputControl,
  Indicator: PasswordInputIndicator,
  Input: PasswordInputInput,
  Label: PasswordInputLabel,
  Root: PasswordInputRoot,
  VisibilityTrigger: PasswordInputVisibilityTrigger,
});
