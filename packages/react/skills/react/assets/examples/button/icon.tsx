import { StarIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react/button";

export function Icon() {
  return (
    <Button size="icon-md" variant="outline">
      {<StarIcon />}
    </Button>
  );
}
