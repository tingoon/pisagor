import { Button } from "@pisagor/react";
import { toast } from "..";
export function WithPromise() {
  return (
    <Button
      onClick={() => {
        toast.promise<{ name: string }>(
          () =>
            new Promise((resolve) =>
              setTimeout(() => resolve({ name: "Event" }), 2000),
            ),
          {
            error: {
              description:
                "Something went wrong. Check your connection and try again.",
              title: "Error generating event",
            },
            loading: {
              description: "Please wait while we generate the event.",
              title: "Generating event...",
            },
            success: (data) => ({
              description: `${data.name} has been created`,
              title: "Event generated",
            }),
          },
        );
      }}
      variant="outline"
    >
      Run Promise
    </Button>
  );
}
