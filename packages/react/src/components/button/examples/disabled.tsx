import { PaperPlaneTiltIcon } from "@phosphor-icons/react";
import { Button } from "..";

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
