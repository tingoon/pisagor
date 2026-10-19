import { Button, SignaturePad } from "@pisagor/solid";
import { ArrowCounterClockwiseIcon } from "@squidlab/phosphor-solid/icons";

export function Compound() {
  return (
    <SignaturePad.Root class="w-80">
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger
          asChild={(props) => (
            <Button
              {...props()}
              aria-label="Clear signature"
              size="icon-md"
              variant="ghost"
            >
              <ArrowCounterClockwiseIcon />
            </Button>
          )}
        />
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.Root>
  );
}
