import source from "./accept.tsx?raw";
import { FileInput } from "@pisagor/react";

export function Accept() {
  return <FileInput accept="image/png,image/jpeg" />;
}

export { source as AcceptSource };
