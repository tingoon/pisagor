import source from "./different-icon.tsx?raw";
import { SparkleIcon } from "@phosphor-icons/react";
import { Clipboard } from "@pisagor/react";

export function DifferentIcon() {
  return (
    <Clipboard
      copiedIcon={<SparkleIcon />}
      copyIcon={<SparkleIcon />}
      value="https://example.com/docs"
      variant="button"
    />
  );
}

export { source as DifferentIconSource };
