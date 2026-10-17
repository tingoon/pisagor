import source from "./default.tsx?raw";
import { DatePicker } from "@pisagor/solid";

export function Default() {
  return (
    <DatePicker>
      <DatePicker.Input placeholder="Pick a date" />
      <DatePicker.Content />
    </DatePicker>
  );
}

export { source as DefaultSource };
