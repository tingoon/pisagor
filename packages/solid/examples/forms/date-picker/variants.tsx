import { DatePicker } from "@pisagor/solid";

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <DatePicker variant="primary" placeholder="Primary" />
      <DatePicker variant="secondary" placeholder="Secondary" />
    </div>
  );
}
