/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid";
import { PaperPlaneTiltIcon } from "@pisagor/solid/icons";

export function Disabled() {
  return (
    <Button disabled>
      Send <PaperPlaneTiltIcon />
    </Button>
  );
}
