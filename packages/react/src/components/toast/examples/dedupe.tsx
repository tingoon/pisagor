import { Button } from "@pisagor/react";
import { toast } from "..";
export function Dedupe() {
  return (
    <div className="flex gap-2">
      <Button
        onClick={() =>
          toast.create({
            description: "This is a toast with id.",
            id: "dedupe-on",
            title: "New event",
          })
        }
        variant="outline"
      >
        Toast with id
      </Button>
      <Button
        onClick={() =>
          toast.create({
            description: "This is a toast without id.",
            title: "New event",
          })
        }
        variant="outline"
      >
        Toast without id
      </Button>
    </div>
  );
}
