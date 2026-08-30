import {
  NumberInputClearTrigger,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputRoot,
  NumberInputScrubber,
} from "./number-input";

export type { NumberInputScrubberProps } from "@ark-ui/react/number-input";

export type {
  NumberInputControlProps,
  NumberInputDecrementTriggerProps,
  NumberInputIncrementTriggerProps,
  NumberInputProps,
  NumberInputRootProps,
} from "./number-input";

export const NumberInput = Object.assign(NumberInputRoot, {
  ClearTrigger: NumberInputClearTrigger,
  Control: NumberInputControl,
  DecrementTrigger: NumberInputDecrementTrigger,
  IncrementTrigger: NumberInputIncrementTrigger,
  Input: NumberInputInput,
  Scrubber: NumberInputScrubber,
});
