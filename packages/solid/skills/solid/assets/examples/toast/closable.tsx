/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid";
import { toast } from "@pisagor/solid/toast";
export function Closable() {
  return (
    <div class="flex flex-wrap gap-2">
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
