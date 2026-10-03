import { Button } from "@pisagor/react";
import { VisuallyHidden } from "@pisagor/react/visually-hidden";
export function Default() {
  return (
    <Button aria-label="Close" size="icon-md" variant="outline">
      <span aria-hidden="true">×</span>
      <VisuallyHidden>Close</VisuallyHidden>
    </Button>
  );
}
