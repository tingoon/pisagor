import source from "./without-arrow.tsx?raw";
import { Button, Tooltip } from "@pisagor/solid";

export function WithoutArrow() {
  return (
    <Tooltip content="Saved 2 minutes ago" showArrow={false}>
      <Button variant="outline">Status</Button>
    </Tooltip>
  );
}

export { source as WithoutArrowSource };
