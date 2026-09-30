import { Button } from "../../../../../src/components/button";
import { ButtonGroup } from "../../../../../src/components/button-group/index";

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
