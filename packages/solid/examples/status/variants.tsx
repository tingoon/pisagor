import { Status } from "@pisagor/solid";

export function Variants() {
  return (
    <div class="flex gap-2">
      <Status variant="default" />
      <Status variant="success" />
      <Status variant="info" />
      <Status variant="warning" />
      <Status variant="destructive" />
    </div>
  );
}
