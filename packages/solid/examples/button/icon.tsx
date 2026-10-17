import source from "./icon.tsx?raw";
import { Button } from "@pisagor/solid";
import { StarIcon } from "@pisagor/solid/icons";

export function Icon() {
  return (
    <Button size="icon-md" variant="outline">
      <StarIcon />
    </Button>
  );
}

export { source as IconSource };
