import source from "./disabled.tsx?raw";
import { SignaturePad } from "@pisagor/react";

export function Disabled() {
  return <SignaturePad disabled />;
}

export { source as DisabledSource };
