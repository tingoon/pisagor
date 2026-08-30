import {
  DatePickerClearTrigger,
  DatePickerContent,
  DatePickerInput,
  DatePickerPresetTrigger,
  DatePickerRoot,
  DatePickerTimer,
  DatePickerTrigger,
  DatePickerValueText,
} from "./date-picker";

export type {
  DatePickerPresetTriggerProps,
  DatePickerValueTextProps,
} from "@ark-ui/react/date-picker";

export type {
  DatePickerContentProps,
  DatePickerInputProps,
  DatePickerRootProps as DatePickerProps,
  DatePickerTimerProps,
  DatePickerTriggerProps,
} from "./date-picker";

export const DatePicker = Object.assign(DatePickerRoot, {
  ClearTrigger: DatePickerClearTrigger,
  Content: DatePickerContent,
  Input: DatePickerInput,
  PresetTrigger: DatePickerPresetTrigger,
  Timer: DatePickerTimer,
  Trigger: DatePickerTrigger,
  ValueText: DatePickerValueText,
});
