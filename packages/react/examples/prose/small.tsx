import source from "./small.tsx?raw";
import { Prose } from "@pisagor/react";

export function Small() {
  return (
    <Prose>
      <small>
        Never underestimate the power of a good laugh and always be careful of
        bad ideas.
      </small>
    </Prose>
  );
}

export { source as SmallSource };
