import {
  DatePickerClearTrigger,
  DatePickerContent,
  DatePickerInput,
  DatePickerPresetTrigger,
  DatePickerRoot,
  DatePickerTimer,
  DatePickerTrigger,
  DatePickerValue,
} from "./date-picker";

export type {
  DatePickerInputProps,
  DatePickerRootProps as DatePickerProps,
} from "./date-picker";

export const DatePicker = Object.assign(DatePickerRoot, {
  ClearTrigger: DatePickerClearTrigger,
  Content: DatePickerContent,
  Input: DatePickerInput,
  PresetTrigger: DatePickerPresetTrigger,
  Timer: DatePickerTimer,
  Trigger: DatePickerTrigger,
  Value: DatePickerValue,
});
