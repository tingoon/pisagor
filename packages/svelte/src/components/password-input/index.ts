import { PasswordInput as PasswordInputPrimitive } from "@ark-ui/svelte/password-input";
import PasswordInputShorthand from "./password-input.svelte";
import PasswordInputControl from "./password-input-control.svelte";
import PasswordInputInput from "./password-input-input.svelte";
import PasswordInputRoot from "./password-input-root.svelte";
import PasswordInputVisibilityTrigger from "./password-input-visibility-trigger.svelte";

export const PasswordInput = Object.assign(PasswordInputShorthand, {
  Control: PasswordInputControl,
  Indicator: PasswordInputPrimitive.Indicator,
  Input: PasswordInputInput,
  Root: PasswordInputRoot,
  VisibilityTrigger: PasswordInputVisibilityTrigger,
});
