import source from "./default.tsx?raw";
import { Button, VisuallyHidden } from "@pisagor/react";
export function Default() {
  return (
    <Button aria-label="Close" size="icon-md" variant="outline">
      <span aria-hidden="true">×</span>
      <VisuallyHidden>Close</VisuallyHidden>
    </Button>
  );
}

export { source as DefaultSource };
