/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid/button";
import { ButtonGroup } from "@pisagor/solid/button-group";

export function Default() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <Button aria-label="More options" size="icon-md" variant="outline">
          ···
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
