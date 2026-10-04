/** @jsxImportSource solid-js */

import { Alert, Button } from "@pisagor/solid";
import { ClockCounterClockwiseIcon } from "@pisagor/solid/icons";
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
