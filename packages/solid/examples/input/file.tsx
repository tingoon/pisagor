import source from "./file.tsx?raw";
import { Input } from "@pisagor/solid";

export function File() {
  return <Input type="file" />;
}

export { source as FileSource };
