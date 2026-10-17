import { NumberInput } from "@pisagor/react";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <NumberInput defaultValue="1" variant="primary" />
      <NumberInput defaultValue="1" variant="secondary" />
    </div>
  );
}
