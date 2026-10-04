/** @jsxImportSource solid-js */
import { DatePicker } from "@pisagor/solid/date-picker";

export function Default() {
  return (
    <DatePicker>
      <DatePicker.Input placeholder="Pick a date" />
      <DatePicker.Content />
    </DatePicker>
  );
}
