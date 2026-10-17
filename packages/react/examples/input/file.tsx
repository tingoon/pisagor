import source from "./file.tsx?raw";
import { Input } from "@pisagor/react";

export function File() {
  return <Input type="file" />;
}

export { source as FileSource };
