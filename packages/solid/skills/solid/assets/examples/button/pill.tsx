/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid/button";
import { PlusIcon } from "@pisagor/solid/icons";

export function Pill() {
  return (
    <Button pill variant="outline">
      <PlusIcon />
      Add
    </Button>
  );
}
