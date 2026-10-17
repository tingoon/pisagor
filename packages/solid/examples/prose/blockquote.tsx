import source from "./blockquote.tsx?raw";
import { Prose } from "@pisagor/solid";

export function Blockquote() {
  return (
    <Prose>
      <blockquote>
        "After all," he said, "everyone enjoys a good joke, so it's only fair
        that they should pay for the privilege."
      </blockquote>
    </Prose>
  );
}

export { source as BlockquoteSource };
