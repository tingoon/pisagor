import source from "./with-label.tsx?raw";
import { Clipboard } from "@pisagor/react";

export function WithLabel() {
  return (
    <Clipboard buttonVariant="outline" label="Install" value="bun add ui" />
  );
}

export { source as WithLabelSource };
