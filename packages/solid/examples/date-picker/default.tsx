import { DatePicker } from "@pisagor/solid";

export function Default() {
  return (
    <DatePicker>
      <DatePicker.Input placeholder="Pick a date" />
      <DatePicker.Content />
    </DatePicker>
  );
}
