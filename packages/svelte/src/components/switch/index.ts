import { Switch as SwitchPrimitive } from "@ark-ui/svelte/switch";
import SwitchShorthand from "./switch.svelte";
import SwitchControl from "./switch-control.svelte";
import SwitchRoot from "./switch-root.svelte";
import SwitchThumb from "./switch-thumb.svelte";

export type {
  SwitchControlProps,
  SwitchHiddenInputProps,
  SwitchThumbProps,
} from "@ark-ui/svelte/switch";

export const Switch = Object.assign(SwitchShorthand, {
  Control: SwitchControl,
  HiddenInput: SwitchPrimitive.HiddenInput,
  Root: SwitchRoot,
  Thumb: SwitchThumb,
});
