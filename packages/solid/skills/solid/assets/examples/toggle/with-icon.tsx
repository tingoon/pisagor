/** @jsxImportSource solid-js */
import { TextBIcon } from "@pisagor/solid/icons";
import { Toggle } from "@pisagor/solid/toggle";

export function WithIcon() {
  return (
    <Toggle aria-label="Toggle bold" variant="outline">
      {<TextBIcon />}
    </Toggle>
  );
}
