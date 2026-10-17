import source from "./inline-code.tsx?raw";
import { Prose } from "@pisagor/solid";

export function InlineCode() {
  return (
    <Prose>
      <code>@pisagor/solid/button</code>
    </Prose>
  );
}

export { source as InlineCodeSource };
