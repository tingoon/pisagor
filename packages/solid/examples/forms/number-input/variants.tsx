import { NumberInput } from "@pisagor/solid";

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <NumberInput defaultValue="1" variant="primary" />
      <NumberInput defaultValue="1" variant="secondary" />
    </div>
  );
}
