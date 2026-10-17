import source from "./separator.tsx?raw";
import { Prose } from "@pisagor/solid";

export function Separator() {
  return (
    <Prose>
      <p>First section of content.</p>
      <hr />
      <p>Second section after the divider.</p>
    </Prose>
  );
}

export { source as SeparatorSource };
