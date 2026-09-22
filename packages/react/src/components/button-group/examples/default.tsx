import { ArrowLeftIcon, DotsThreeIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { ButtonGroup } from "..";
export function Default() {
  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button aria-label="Go back" size="icon-md" variant="outline">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <Button aria-label="More options" size="icon-md" variant="outline">
          <DotsThreeIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
