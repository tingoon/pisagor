import { Button } from "@pisagor/react";
import { Tooltip } from "..";
export function Disabled() {
  return (
    <Tooltip
      content={<p>You can still show a tooltip on an unavailable element</p>}
    >
      {(props) => (
        <span {...props}>
          <Button disabled variant="outline">
            Unavailable
          </Button>
        </span>
      )}
    </Tooltip>
  );
}
