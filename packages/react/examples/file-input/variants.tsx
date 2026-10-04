import { FileInput } from "@pisagor/react/file-input";

export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <FileInput variant="primary" />
      <FileInput variant="secondary" />
    </div>
  );
}
