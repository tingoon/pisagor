import { Status } from "..";

export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Status size="sm" variant="info" />
      <Status size="md" variant="info" />
      <Status size="lg" variant="info" />
    </div>
  );
}
