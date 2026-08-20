import {
  NumberInputClearTrigger,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
  NumberInputRoot,
  NumberInputScrubber,
} from "./number-input";

export type {
  NumberInputDecrementProps,
  NumberInputGroupProps,
  NumberInputIncrementProps,
  NumberInputProps,
  NumberInputRootProps,
  NumberInputScrubberProps,
} from "./number-input";

export const NumberInput = Object.assign(NumberInputRoot, {
  ClearTrigger: NumberInputClearTrigger,
  Decrement: NumberInputDecrement,
  Group: NumberInputGroup,
  Increment: NumberInputIncrement,
  Input: NumberInputInput,
  Scrubber: NumberInputScrubber,
});
