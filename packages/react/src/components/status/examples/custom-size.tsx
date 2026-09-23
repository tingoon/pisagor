import { Status } from "..";

export function CustomSize() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Status className="size-4" variant="success" />
      <Status className="size-6" variant="info" />
      <Status className="size-8" variant="warning" />
    </div>
  );
}
