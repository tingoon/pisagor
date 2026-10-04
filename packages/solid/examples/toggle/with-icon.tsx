/** @jsxImportSource solid-js */

import { Toggle } from "@pisagor/solid";
import { TextBIcon } from "@pisagor/solid/icons";

export function WithIcon() {
  return (
    <Toggle aria-label="Toggle bold" variant="outline">
      {<TextBIcon />}
    </Toggle>
  );
}
