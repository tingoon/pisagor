import { DatePicker } from "@pisagor/react";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <DatePicker variant="primary" placeholder="Primary" />
      <DatePicker variant="secondary" placeholder="Secondary" />
    </div>
  );
}
