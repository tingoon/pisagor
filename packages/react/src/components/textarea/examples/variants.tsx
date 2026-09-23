import { Textarea } from "..";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <Textarea placeholder="Primary" variant="primary" />
      <Textarea placeholder="Secondary" variant="secondary" />
    </div>
  );
}
