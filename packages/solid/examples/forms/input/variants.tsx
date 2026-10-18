import { Input } from "@pisagor/solid";

export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <Input placeholder="Primary" variant="primary" />
      <Input placeholder="Secondary" variant="secondary" />
    </div>
  );
}
