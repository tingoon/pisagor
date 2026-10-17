import source from "./compound.tsx?raw";
import { SignaturePad } from "@pisagor/react";

export function Compound() {
  return (
    <SignaturePad.Root className="w-80">
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.Clear />
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.Root>
  );
}

export { source as CompoundSource };
