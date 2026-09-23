import { FileInput } from "..";

export function Sizes() {
  return (
    <div className="flex flex-col gap-2">
      <FileInput size="sm" />
      <FileInput size="md" />
      <FileInput size="lg" />
    </div>
  );
}
