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
  DatePickerContentProps,
  DatePickerInputProps,
  DatePickerPresetTriggerProps,
  DatePickerRootProps as DatePickerProps,
  DatePickerTimerProps,
  DatePickerTriggerProps,
  DatePickerValueProps,
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
