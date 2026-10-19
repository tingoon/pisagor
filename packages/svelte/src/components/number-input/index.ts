import NumberInputShorthand from "./number-input.svelte";
import NumberInputClearTrigger from "./number-input-clear-trigger.svelte";
import NumberInputControl from "./number-input-control.svelte";
import NumberInputDecrementTrigger from "./number-input-decrement-trigger.svelte";
import NumberInputIncrementTrigger from "./number-input-increment-trigger.svelte";
import NumberInputInput from "./number-input-input.svelte";
import NumberInputRoot from "./number-input-root.svelte";
import NumberInputScrubber from "./number-input-scrubber.svelte";

export type { NumberInputScrubberProps } from "@ark-ui/svelte";

export const NumberInput = Object.assign(NumberInputShorthand, {
  ClearTrigger: NumberInputClearTrigger,
  Control: NumberInputControl,
  DecrementTrigger: NumberInputDecrementTrigger,
  IncrementTrigger: NumberInputIncrementTrigger,
  Input: NumberInputInput,
  Root: NumberInputRoot,
  Scrubber: NumberInputScrubber,
});
