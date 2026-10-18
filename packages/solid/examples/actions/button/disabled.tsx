import { Button } from "@pisagor/solid";
import { PaperPlaneTiltIcon } from "@squidlab/phosphor-solid/icons";

export function Disabled() {
  return (
    <Button disabled>
      Send <PaperPlaneTiltIcon />
    </Button>
  );
}
