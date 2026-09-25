import DatePickerClearTrigger from "./date-picker-clear-trigger.svelte";
import DatePickerContent from "./date-picker-content.svelte";
import DatePickerInput from "./date-picker-input.svelte";
import DatePickerPresetTrigger from "./date-picker-preset-trigger.svelte";
import DatePickerRoot from "./date-picker-root.svelte";
import DatePickerTimer from "./date-picker-timer.svelte";
import DatePickerTrigger from "./date-picker-trigger.svelte";
import DatePickerValueText from "./date-picker-value-text.svelte";

export const DatePicker = Object.assign(DatePickerRoot, {
  ClearTrigger: DatePickerClearTrigger,
  Content: DatePickerContent,
  Input: DatePickerInput,
  PresetTrigger: DatePickerPresetTrigger,
  Timer: DatePickerTimer,
  Trigger: DatePickerTrigger,
  ValueText: DatePickerValueText,
});
