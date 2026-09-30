import { PlusIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react/button";

export function Pill() {
  return (
    <Button pill variant="outline">
      {
        <>
          <PlusIcon />
          Add
        </>
      }
    </Button>
  );
}
