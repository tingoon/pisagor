import source from "./default.tsx?raw";
import { Highlight } from "@pisagor/solid";

export function Default() {
  return <Highlight query="Solid" text="Hello Solid world" />;
}

export { source as DefaultSource };
