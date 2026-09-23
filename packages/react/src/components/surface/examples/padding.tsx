import { Surface } from "..";

export function Padding() {
  return (
    <div className="flex flex-col gap-2">
      <Surface bordered className="text-sm" padding="sm" variant="secondary">
        Small padding
      </Surface>
      <Surface bordered className="text-sm" padding="md" variant="secondary">
        Medium padding
      </Surface>
      <Surface bordered className="text-sm" padding="lg" variant="secondary">
        Large padding
      </Surface>
    </div>
  );
}
