import source from "./pill.tsx?raw";
import { Button } from "@pisagor/solid";
import { PlusIcon } from "@pisagor/solid/icons";

export function Pill() {
  return (
    <Button pill variant="outline">
      <PlusIcon />
      Add
    </Button>
  );
}

export { source as PillSource };
