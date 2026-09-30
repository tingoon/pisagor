import { DatePicker } from "../../../../../src/components/date-picker/index";

export function Default() {
  return (
    <DatePicker>
      <DatePicker.Input placeholder="Pick a date" />
      <DatePicker.Content />
    </DatePicker>
  );
}
