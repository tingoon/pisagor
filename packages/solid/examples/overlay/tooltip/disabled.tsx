import { Button, Tooltip } from "@pisagor/solid";
import type { JSX } from "solid-js";

export function Disabled() {
  return (
    <Tooltip
      content={<p>You can still show a tooltip on an unavailable element</p>}
    >
      {(props) => (
        <span {...(props as JSX.HTMLAttributes<HTMLSpanElement>)}>
          <Button disabled variant="outline">
            Unavailable
          </Button>
        </span>
      )}
    </Tooltip>
  );
}
