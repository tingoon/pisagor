import { Clipboard } from "@pisagor/solid";
import { SparkleIcon } from "@pisagor/solid/icons";

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
