import { PaperPlaneTiltIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";

export function Disabled() {
  return (
    <Button disabled>
      {
        <>
          Send <PaperPlaneTiltIcon />
        </>
      }
    </Button>
  );
}
