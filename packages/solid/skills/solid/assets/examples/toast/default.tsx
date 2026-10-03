/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid/button";
import { Toaster, toast } from "@pisagor/solid/toast";

export function Default() {
  return (
    <>
      <Toaster />
      <Button
        onClick={() =>
          toast.create({
            description: "Meeting at 10:00",
            title: "Scheduled",
            type: "success",
          })
        }
      >
        Show toast
      </Button>
    </>
  );
}
