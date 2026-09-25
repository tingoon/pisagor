import { Format } from "../index";

export function Default() {
  return (
    <div class="grid gap-2 text-sm">
      <Format.Number value={1500} />
      <Format.Byte value={1024} />
    </div>
  );
}
