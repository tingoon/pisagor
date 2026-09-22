import { ClockCounterClockwiseIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { Alert } from "..";
export function WithAction() {
  return (
    <Alert
      action={
        <>
          <Button size="xs" variant="ghost">
            Ignore
          </Button>
          <Button size="xs">Update</Button>
        </>
      }
      description="Review the update when you're ready."
      icon={<ClockCounterClockwiseIcon />}
      title="New update available"
    />
  );
}
