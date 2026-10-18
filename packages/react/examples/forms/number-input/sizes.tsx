import { NumberInput } from "@pisagor/react";

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      <NumberInput defaultValue="10" size="sm" />
      <NumberInput defaultValue="10" size="md" />
      <NumberInput defaultValue="10" size="lg" />
    </div>
  );
}
