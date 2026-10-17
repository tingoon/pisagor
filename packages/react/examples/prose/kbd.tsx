import source from "./kbd.tsx?raw";
import { Prose } from "@pisagor/react";

export function Kbd() {
  return (
    <Prose>
      <p>
        Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save your work.
      </p>
    </Prose>
  );
}

export { source as KbdSource };
