import source from "./disabled.tsx?raw";
import { FileInput } from "@pisagor/solid";

export function Disabled() {
  return <FileInput disabled />;
}

export { source as DisabledSource };
