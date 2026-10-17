import source from "./nested.tsx?raw";
import { Surface } from "@pisagor/react";

export function Nested() {
  return (
    <Surface bordered className="flex flex-col gap-2" padding="lg">
      <div>
        <h3 className="text-sm font-semibold">Outer surface</h3>
        <p className="text-muted-foreground text-sm">
          Explicit default variant at depth 0.
        </p>
      </div>
      <Surface bordered className="flex flex-col gap-2" padding="md">
        <h4 className="text-sm font-medium">Nested surface</h4>
        <p className="text-muted-foreground text-sm">
          Auto-resolves to secondary at depth 1 when `variant` is omitted.
        </p>
        <Surface bordered className="flex flex-col gap-2" padding="sm">
          <h5 className="text-sm font-medium">Deeply nested</h5>
          <p className="text-muted-foreground text-sm">
            Auto-resolves to tertiary at depth 2.
          </p>
        </Surface>
      </Surface>
    </Surface>
  );
}

export { source as NestedSource };
