/** @jsxImportSource solid-js */
import { Button, Tooltip } from "@pisagor/solid";
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
