import { Button } from "@pisagor/react";
import { toast } from "..";
export function Closable() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() =>
          toast.create({
            closable: false,
            description: "Tuesday, February 10, 2026 at 10:00 AM.",
            title: "Event created",
          })
        }
        variant="outline"
      >
        Toast
      </Button>
    </div>
  );
}
