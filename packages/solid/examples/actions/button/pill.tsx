import { Button } from "@pisagor/solid";
import { PlusIcon } from "@squidlab/phosphor-solid/icons";

export function Pill() {
  return (
    <Button pill variant="outline">
      <PlusIcon />
      Add
    </Button>
  );
}
