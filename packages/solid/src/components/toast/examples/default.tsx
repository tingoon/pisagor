import { Button } from "../../button";
import { Toaster, toast } from "../index";

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
