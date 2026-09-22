import { SparkleIcon } from "@phosphor-icons/react";
import { Clipboard } from "..";

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
