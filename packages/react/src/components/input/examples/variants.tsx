import { Input } from "..";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <Input placeholder="Primary" variant="primary" />
      <Input placeholder="Secondary" variant="secondary" />
    </div>
  );
}
