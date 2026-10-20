import { NumberInput } from "@pisagor/solid";

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      <NumberInput defaultValue="10" size="sm" />
      <NumberInput defaultValue="10" size="md" />
      <NumberInput defaultValue="10" size="lg" />
    </div>
  );
}
