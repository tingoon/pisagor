import { Button } from "@pisagor/react";
import { toast } from "..";
export function Variants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() =>
          toast.success({
            description: "Event has been created.",
            title: "Event created",
          })
        }
        variant="outline"
      >
        Success
      </Button>
      <Button
        onClick={() =>
          toast.error({
            description: "Event has not been created. Check your connection and try again.",
            title: "Something went wrong",
          })
        }
        variant="outline"
      >
        Error
      </Button>
      <Button
        onClick={() =>
          toast.warning({
            description: "Your session will expire soon.",
            title: "Session expiring soon",
          })
        }
        variant="outline"
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          toast.info({
            description: "You have a new event.",
            title: "New event",
          })
        }
        variant="outline"
      >
        Info
      </Button>
    </div>
  );
}
