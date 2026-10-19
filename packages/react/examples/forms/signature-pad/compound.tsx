import { ArrowCounterClockwiseIcon } from "@phosphor-icons/react";
import { Button, SignaturePad } from "@pisagor/react";

export function Compound() {
  return (
    <SignaturePad.Root className="w-80">
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger asChild>
          <Button aria-label="Clear signature" size="icon-md" variant="ghost">
            <ArrowCounterClockwiseIcon />
          </Button>
        </SignaturePad.ClearTrigger>
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.Root>
  );
}
