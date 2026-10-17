import source from "./invalid.tsx?raw";
import { SignaturePad } from "@pisagor/solid";

export function Invalid() {
  return <SignaturePad invalid />;
}

export { source as InvalidSource };
