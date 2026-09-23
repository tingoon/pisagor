import { Clipboard } from "..";

export function Variants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Clipboard value="https://example.com/docs" variant="input" />
      <Clipboard value="https://example.com/docs" variant="button" />
      <Clipboard value="https://example.com/docs" variant="value" />
    </div>
  );
}
