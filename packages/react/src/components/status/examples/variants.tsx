import { Status } from "..";

export function Variants() {
  return (
    <div className="flex gap-2">
      <Status variant="default" />
      <Status variant="success" />
      <Status variant="info" />
      <Status variant="warning" />
      <Status variant="destructive" />
    </div>
  );
}
