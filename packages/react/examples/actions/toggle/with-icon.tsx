import { TextBIcon } from "@phosphor-icons/react";
import { Toggle } from "@pisagor/react";

export function WithIcon() {
  return (
    <Toggle aria-label="Toggle bold" variant="outline">
      {<TextBIcon />}
    </Toggle>
  );
}
