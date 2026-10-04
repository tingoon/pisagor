/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid/button";
import { PaperPlaneTiltIcon } from "@pisagor/solid/icons";

export function Disabled() {
  return (
    <Button disabled>
      Send <PaperPlaneTiltIcon />
    </Button>
  );
}
