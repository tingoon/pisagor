/** @jsxImportSource solid-js */

import { Toggle } from "@pisagor/solid";
import {
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@pisagor/solid/icons";

export function IconGroup() {
  return (
    <div class="flex items-center gap-1">
      <Toggle aria-label="Toggle bold" variant="outline">
        <TextBIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic" variant="outline">
        <TextItalicIcon />
      </Toggle>
      <Toggle aria-label="Toggle underline" variant="outline">
        <TextUnderlineIcon />
      </Toggle>
    </div>
  );
}
