import source from "./mark.tsx?raw";
import { Prose } from "@pisagor/react";

export function Mark() {
  return (
    <Prose>
      <p>
        The king&apos;s <mark>brilliant plan</mark> was to tax jokes in the
        kingdom.
      </p>
    </Prose>
  );
}

export { source as MarkSource };
