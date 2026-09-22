import { Button } from "@pisagor/react";
import { toast } from "..";
export function Default() {
  return (
    <Button
      onClick={() => {
        toast.create({
          description: "Tuesday, February 10, 2026 at 10:00 AM.",
          title: "Event created",
        });
      }}
      variant="outline"
    >
      Toast
    </Button>
  );
}
