import NumberInputShorthand from "./number-input.svelte";
import ClearTrigger from "./number-input-clear-trigger.svelte";
import Control from "./number-input-control.svelte";
import DecrementTrigger from "./number-input-decrement-trigger.svelte";
import IncrementTrigger from "./number-input-increment-trigger.svelte";
import Input from "./number-input-input.svelte";
import Label from "./number-input-label.svelte";
import Root from "./number-input-root.svelte";
import Scrubber from "./number-input-scrubber.svelte";
import ValueText from "./number-input-value-text.svelte";

export type {
  NumberInputControlProps,
  NumberInputDecrementTriggerProps,
  NumberInputIncrementTriggerProps,
  NumberInputInputProps,
  NumberInputLabelProps,
  NumberInputScrubberProps,
  NumberInputValueTextProps,
} from "@ark-ui/svelte";

export const NumberInput = Object.assign(NumberInputShorthand, {
  ClearTrigger,
  Control,
  DecrementTrigger,
  IncrementTrigger,
  Input,
  Label,
  Root,
  Scrubber,
  ValueText,
});
