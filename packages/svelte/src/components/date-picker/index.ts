import DatePickerShorthand from "./date-picker.svelte";
import DatePickerClearTrigger from "./date-picker-clear-trigger.svelte";
import DatePickerContent from "./date-picker-content.svelte";
import DatePickerControl from "./date-picker-control.svelte";
import DatePickerInput from "./date-picker-input.svelte";
import DatePickerPositioner from "./date-picker-positioner.svelte";
import DatePickerPresetTrigger from "./date-picker-preset-trigger.svelte";
import DatePickerRoot from "./date-picker-root.svelte";
import DatePickerTimeInput from "./date-picker-time-input.svelte";
import DatePickerTrigger from "./date-picker-trigger.svelte";
import DatePickerValueText from "./date-picker-value-text.svelte";

export type {
  DatePickerClearTriggerProps,
  DatePickerContentProps,
  DatePickerControlProps,
  DatePickerPositionerProps,
  DatePickerPresetTriggerProps,
  DatePickerTriggerProps,
  DatePickerValueTextProps,
} from "@ark-ui/svelte";

export const DatePicker = Object.assign(DatePickerShorthand, {
  ClearTrigger: DatePickerClearTrigger,
  Content: DatePickerContent,
  Control: DatePickerControl,
  Input: DatePickerInput,
  Positioner: DatePickerPositioner,
  PresetTrigger: DatePickerPresetTrigger,
  Root: DatePickerRoot,
  TimeInput: DatePickerTimeInput,
  Trigger: DatePickerTrigger,
  ValueText: DatePickerValueText,
});
