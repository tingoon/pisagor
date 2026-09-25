import { DatePicker } from "../index";

export function Default() {
  return (
    <DatePicker>
      <DatePicker.Input placeholder="Pick a date" />
      <DatePicker.Content />
    </DatePicker>
  );
}
