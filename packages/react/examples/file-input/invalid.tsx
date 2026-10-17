import source from "./invalid.tsx?raw";
import { FileInput } from "@pisagor/react";

export function Invalid() {
  return <FileInput invalid />;
}

export { source as InvalidSource };
