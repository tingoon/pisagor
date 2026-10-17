import source from "./default.tsx?raw";
import { FileItem } from "@pisagor/react";

export function Default() {
  return (
    <FileItem meta="PDF document" name="brand-guidelines.pdf" size={245_760} />
  );
}

export { source as DefaultSource };
