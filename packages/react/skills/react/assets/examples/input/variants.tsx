import { Input } from "@pisagor/react/input";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <Input placeholder="Primary" variant="primary" />
      <Input placeholder="Secondary" variant="secondary" />
    </div>
  );
}
